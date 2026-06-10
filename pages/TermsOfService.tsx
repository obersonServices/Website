import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 dark:bg-transparent pb-24"
    >
      <SEO 
        title="Terms of Service | Oberon Services — Rules of Engagement & Legal Terms"
        description="Oberon Services Terms of Service: authorized testing rules of engagement, intellectual property, confidentiality, liability limits, and governing law for all managed security services."
        canonical="https://www.oberon-services.com/terms"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service — Oberon Services",
            "url": "https://www.oberon-services.com/terms",
            "description": "Terms and conditions governing the use of Oberon Services managed security, penetration testing, and compliance services.",
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.oberon-services.com/#organization",
              "name": "Oberon Services",
              "logo": "https://www.oberon-services.com/logo-dark.png"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "SpecialAnnouncement",
            "@id": "https://www.oberon-services.com/terms#legal",
            "name": "Terms of Service",
            "text": "Terms and conditions governing authorized security testing, service delivery, intellectual property rights, confidentiality, and liability for Oberon Services engagements.",
            "datePosted": "2023-10-24",
            "expires": "2099-12-31",
            "announcementLocation": {
              "@type": "LocalBusiness",
              "@id": "https://www.oberon-services.com/#organization",
              "name": "Oberon Services"
            }
          }
        ]}
      />
      <Hero 
        title="Terms of Service" 
        subtitle="The framework of our partnership. Clear expectations for a secure relationship."
        backgroundImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-8">Effective Date: October 24, 2023</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing the Oberon Services website or engaging our Managed Security Services, Consulting, or Training services (collectively, the "Services"), you agree to be bound by these Terms of Service.
            </p>

            <h2>2. Authorized Testing & Rules of Engagement</h2>
            <p>
              For services involving Penetration Testing, Red Teaming, or Vulnerability Scanning:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Authorization:</strong> You represent and warrant that you own or have full legal authority to authorize security testing on the target systems defined in the Statement of Work (SOW).</li>
              <li><strong>Scope:</strong> Oberon Services will strictly adhere to the defined scope. Any testing outside of the agreed IPs/Domains is prohibited.</li>
              <li><strong>Indemnification:</strong> You agree to indemnify Oberon Services against third-party claims arising from your lack of authority to test specific assets (e.g., testing a third-party SaaS without their consent).</li>
            </ul>

            <h2>3. Service Availability & Maintenance</h2>
            <p>
              While we strive for 100% uptime of our Client Portal and SOC dashboards, we may perform scheduled maintenance. We will provide at least 48 hours notice for scheduled maintenance that may impact service visibility. Critical security monitoring continues via backend systems even during portal maintenance.
            </p>

            <h2>4. Intellectual Property</h2>
            <ul>
              <li><strong>Our IP:</strong> Oberon Services retains all rights to our proprietary methodologies, threat intelligence feeds, scripts, and training materials.</li>
              <li><strong>Your IP:</strong> You retain all rights to your data, logs, and specific configurations.</li>
              <li><strong>Deliverables:</strong> Upon payment, you are granted a perpetual, non-exclusive license to use the Reports and Deliverables for your internal business purposes.</li>
            </ul>

            <h2>5. Confidentiality</h2>
            <p>
              Both parties agree to treat all non-public information received from the other party as Confidential Information. Oberon Services specifically acknowledges that vulnerability data and security gaps identified during our engagement are highly sensitive and will be protected with the highest degree of care.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Oberon Services shall not be liable for any indirect, incidental, or consequential damages. Our total liability for any claim arising out of these terms shall not exceed the total amount paid by you for the Services during the twelve (12) months preceding the claim. 
              <br/><br/>
              <em>Note: Cybersecurity is an evolving field. While we use best-in-class tools and expertise, no provider can guarantee 100% protection against all current and future threats.</em>
            </p>

            <h2>7. Termination</h2>
            <p>
              Either party may terminate the agreement for material breach if not cured within thirty (30) days of written notice. Managed Service contracts may have specific termination clauses detailed in your Master Services Agreement (MSA).
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
            
            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 justify-between items-center">
              <Link to="/" className="text-brand-accent hover:underline font-bold text-sm flex items-center gap-1">
                ← Back to Homepage
              </Link>
              <Link to="/contact" className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-brand-accent dark:hover:text-brand-accent rounded-lg text-sm font-semibold transition-all">
                Contact Security Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;