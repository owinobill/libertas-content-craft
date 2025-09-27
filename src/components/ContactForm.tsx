import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData, contactFormRateLimit, sanitizeInput } from "@/utils/validation";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Rate limiting check
    const clientId = `${data.email}-${Date.now().toString().slice(0, -5)}`;
    if (!contactFormRateLimit(clientId)) {
      toast({
        title: "Too many requests",
        description: "Please wait before submitting another message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Sanitize input data
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        company: data.company ? sanitizeInput(data.company) : undefined,
        subject: sanitizeInput(data.subject),
        message: sanitizeInput(data.message)
      };
      const response = await fetch('https://zznubsevogfqoxgkdnzg.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to send message');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We've received your message and will get back to you within 24 hours. You'll also receive a confirmation email shortly.",
      });
      
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="card-elevated border-border/50 max-w-2xl mx-auto">
        <CardContent className="pt-12 text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your message has been sent successfully! We've received your inquiry and will get back to you within 24 hours. Please check your email for a confirmation message.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="rounded-full"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-elevated border-border/50 max-w-2xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-semibold">Get In Touch</CardTitle>
        <p className="text-muted-foreground">
          Ready to unlock your capital potential? Let's start the conversation.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your full name"
                className={errors.name ? "border-destructive" : ""}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@company.com"
                className={errors.email ? "border-destructive" : ""}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                {...register("company")}
                placeholder="Your organization"
                className={errors.company ? "border-destructive" : ""}
                disabled={isSubmitting}
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                {...register("subject")}
                placeholder="How can we help you?"
                className={errors.subject ? "border-destructive" : ""}
                disabled={isSubmitting}
              />
              {errors.subject && (
                <p className="text-sm text-destructive">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your project, portfolio, or how we can assist you..."
              rows={6}
              className={errors.message ? "border-destructive" : ""}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            size="lg"
            className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our terms of service and privacy policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;