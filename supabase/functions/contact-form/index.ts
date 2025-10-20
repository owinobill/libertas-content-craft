import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("[contact-form] Function invoked, method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("[contact-form] Handling OPTIONS request");
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.error("[contact-form] Invalid method:", req.method);
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    console.log("[contact-form] Processing POST request");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const formData: ContactFormData = await req.json();
    
    console.log("Received contact form submission:", { 
      name: formData.name, 
      email: formData.email, 
      subject: formData.subject 
    });

    // Store in database
    const { data, error: dbError } = await supabase
      .from("contacts")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          subject: formData.subject,
          message: formData.message,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("[contact-form] Contact saved to database with ID:", data.id);

    // Verify Resend API key is present
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("[contact-form] CRITICAL: RESEND_API_KEY is not set!");
      throw new Error("Email service not configured");
    }
    console.log("[contact-form] Resend API key present, length:", resendApiKey.length);

    // Send notification email to connect@libertasafrica.com
    console.log("[contact-form] Attempting to send notification email to connect@libertasafrica.com");
    const emailResponse = await resend.emails.send({
      from: "Libertas Africa Contact Form <onboarding@resend.dev>",
      reply_to: formData.email,
      to: ["connect@libertasafrica.com"],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted on: ${new Date().toLocaleString()}<br>
          Contact ID: ${data.id}
        </p>
      `,
    });

    if (emailResponse.error) {
      console.error("[contact-form] FAILED to send notification email:", JSON.stringify(emailResponse.error));
      // Don't throw - continue to send confirmation email
    } else {
      console.log("[contact-form] ✓ Notification email sent successfully, ID:", emailResponse.data?.id);
    }

    // Send confirmation email to the user
    console.log("[contact-form] Attempting to send confirmation email to:", formData.email);
    const confirmationResponse = await resend.emails.send({
      from: "Libertas Africa <onboarding@resend.dev>",
      reply_to: "connect@libertasafrica.com",
      to: [formData.email],
      subject: "Thank you for contacting Libertas Africa",
      html: `
        <h2>Thank You for Reaching Out</h2>
        <p>Dear ${formData.name},</p>
        <p>We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Message Summary:</h3>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        </div>
        
        <p>In the meantime, feel free to explore our services and insights on our website.</p>
        
        <p>Best regards,<br>
        The Libertas Africa Team</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This is an automated confirmation. Please do not reply to this email.
        </p>
      `,
    });

    if (confirmationResponse.error) {
      console.error("[contact-form] FAILED to send confirmation email:", JSON.stringify(confirmationResponse.error));
      // Don't throw - the submission was still successful
    } else {
      console.log("[contact-form] ✓ Confirmation email sent successfully, ID:", confirmationResponse.data?.id);
    }

    console.log("[contact-form] Contact form processing complete, returning success response");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: data.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("[contact-form] CRITICAL ERROR:", error);
    console.error("[contact-form] Error stack:", error.stack);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process contact form", 
        details: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);