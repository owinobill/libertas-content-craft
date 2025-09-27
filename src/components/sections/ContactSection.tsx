import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-primary opacity-30"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Connect</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
            Whether you're a lender looking to optimize NPL portfolios, an investor seeking opportunities, or need strategic advisory on complex financing structures, 
            <span className="text-gradient"> our team is ready to help</span>.
          </h2>
          <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-16"></div>
          
          <div className="mb-20">
            <ContactForm />
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Or reach out directly</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition cursor-pointer group">
              <a 
                href="mailto:connect@libertasafrica.com?subject=Enquiry%20via%20Libertas%20Africa%20Website" 
                className="block"
                aria-label="Send email to connect@libertasafrica.com"
              >
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">connect@libertasafrica.com</p>
                </CardContent>
              </a>
            </Card>

            <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition cursor-pointer group">
              <a 
                href="tel:+254-20-5253963" 
                className="block"
                aria-label="Call +254-20-5253963"
              >
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">+254-20-5253963</p>
                </CardContent>
              </a>
            </Card>

            <Card className="card-elevated border-border/50 hover:shadow-elevated smooth-transition group">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;