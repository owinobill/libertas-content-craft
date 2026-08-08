import { PageLayout } from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout
      title="Privacy Policy | Libertas Africa"
      description="Privacy Policy for Libertas Africa - Learn how we collect, use, and protect your personal information when you interact with our website and services."
      keywords="privacy policy, data protection, personal information, Libertas Africa"
      canonical="https://libertasafrica.com/privacy-policy/"
    >
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="text-sm">
              <p><strong>Effective Date:</strong> September 23, 2025</p>
              <p><strong>Last Updated:</strong> September 23, 2025</p>
            </div>
            
            <p>
              Libertas Africa ("we," "our," or "us") is committed to protecting the privacy of all individuals who interact with us through our website [www.libertasafrica.com] ("Site"). This Privacy Policy explains how we collect, use, store, and safeguard personal data.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <ul className="space-y-2 ml-4">
                <li>• <strong className="text-foreground">Personal Information:</strong> Name, email, phone number, company, job title, and any information voluntarily provided through forms or correspondence.</li>
                <li>• <strong className="text-foreground">Technical Information:</strong> IP address, browser type, device details, operating system, and website usage data.</li>
                <li>• <strong className="text-foreground">Cookies & Tracking Data:</strong> Information collected via cookies and similar technologies to improve functionality, analyze performance, and personalize experiences.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Information</h2>
              <ul className="space-y-2 ml-4">
                <li>• Provide services, respond to inquiries, and communicate with you.</li>
                <li>• Share insights, updates, or newsletters (if you subscribe).</li>
                <li>• Improve website usability, performance, and security.</li>
                <li>• Fulfill contractual, operational, or legal obligations.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Sharing of Information</h2>
              <p>We do not sell or rent personal information. We may share data only with:</p>
              <ul className="space-y-2 ml-4 mt-2">
                <li>• Service providers (hosting, analytics, communications, IT support).</li>
                <li>• Partners and affiliates when collaborating on projects, with safeguards.</li>
                <li>• Authorities when legally required.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Retention</h2>
              <p>We retain personal data only as long as necessary to:</p>
              <ul className="space-y-2 ml-4 mt-2">
                <li>• Provide requested services.</li>
                <li>• Comply with contractual and legal requirements.</li>
                <li>• Resolve disputes and enforce agreements.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <ul className="space-y-2 ml-4">
                <li>• Encryption and secure servers.</li>
                <li>• Controlled access by authorized personnel.</li>
                <li>• Periodic reviews of security practices.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p>You may request to:</p>
              <ul className="space-y-2 ml-4 mt-2">
                <li>• Access personal information we hold.</li>
                <li>• Correct inaccurate or incomplete data.</li>
                <li>• Request deletion of data where appropriate.</li>
                <li>• Restrict or object to processing.</li>
                <li>• Opt-out of communications.</li>
              </ul>
              <p className="mt-2">Requests may be sent to: connect@libertasafrica.com.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. International Data Handling</h2>
              <p>
                As we operate globally, personal information may be processed in different jurisdictions. Wherever data is stored or transferred, we apply safeguards to protect it.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
              <p>
                Our Site may link to external websites. We are not responsible for their privacy practices or content.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed at children, and we do not knowingly collect data from individuals under 16.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Updates</h2>
              <p>
                We may revise this Privacy Policy; updates will be posted here with the revised effective date.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <div className="space-y-1">
                <p><strong className="text-foreground">Libertas Africa</strong></p>
                <p>Email: connect@libertasafrica.com</p>
                <p>Phone: +254 20 5253963</p>
                <p>Office: Eaton Place, United Nations Crescent, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </PageLayout>
  );
};

export default PrivacyPolicy;