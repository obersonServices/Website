import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, company, message } = formData;

    if (!name || !email || !company || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = `Service Request from ${company}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`;

    window.location.href = `mailto:security@oberon-services.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 dark:bg-transparent"
    >
      <SEO 
        title="Contact Oberon Services | Book a Cybersecurity Consultation"
        description="Speak directly with Oberon's cybersecurity experts. Request a free SOC consultation, compliance gap analysis, or schedule a tabletop exercise. We respond within 24 hours."
        ogImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
        canonical="https://www.oberon-services.com/contact"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Oberon Services",
            "url": "https://www.oberon-services.com/contact",
            "description": "Contact Oberon Services to request a cybersecurity consultation, managed SOC engagement, or cyber exercise booking."
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.oberon-services.com/#organization",
            "name": "Oberon Services",
            "url": "https://www.oberon-services.com",
            "logo": "https://www.oberon-services.com/logo-dark.png",
            "email": "security@oberon-services.com",
            "telephone": "+880-1720-596676",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House # 31, Road # 02, Block-E, Banasree, Rampura",
              "addressLocality": "Dhaka",
              "postalCode": "1219",
              "addressCountry": "BD"
            },
            "openingHours": "Mo-Su 00:00-24:00",
            "priceRange": "$$"
          },
          {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+880-1720-596676",
            "email": "security@oberon-services.com",
            "contactOption": "TollFree",
            "availableLanguage": ["English"],
            "hoursAvailable": "Mo-Su 00:00-24:00",
            "areaServed": "Worldwide"
          }
        ]}
      />
      <Hero
        title="Get in Touch"
        subtitle="Ready to strengthen your security posture? Our team of experts is here to help you find the right solution for your organization."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-brand-accent text-sm font-medium">
          <Mail size={16} className="mr-2" /> Contact Us
        </div>
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Side: Form */}
          <Reveal>
            <div className="
              p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-xl 
              bg-white dark:bg-[#0F1623]/70 backdrop-blur-md 
              border border-slate-200 dark:border-slate-700/50
            ">
              <h2 className="text-2xl font-bold mb-8 font-display text-slate-900 dark:text-white">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Inc."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your security needs..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 resize-none shadow-sm"
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-accent hover:bg-cyan-500 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </Reveal>

          {/* Right Side: Info */}
          <div>
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-bold mb-8 font-display text-slate-900 dark:text-white">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start p-6 bg-white dark:bg-[#0F1623]/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="p-3 bg-cyan-50 dark:bg-brand-accent/10 rounded-lg text-cyan-600 dark:text-brand-accent mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">security@oberon-services.com</p>
                    <p className="text-xs text-slate-500 mt-1">Send us an email anytime</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white dark:bg-[#0F1623]/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="p-3 bg-blue-50 dark:bg-brand-secondary/10 rounded-lg text-blue-600 dark:text-brand-secondary mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">+880 1720-596676</p>
                    <p className="text-xs text-slate-500 mt-1">24/7 Security Hotline</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white dark:bg-[#0F1623]/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="p-3 bg-cyan-50 dark:bg-brand-accent/10 rounded-lg text-cyan-600 dark:text-brand-accent mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">House # 31, Road # 02, Block-E</p>
                    <p className="text-xs text-slate-500 mt-1">Banasree, Rampura, Dhaka-1219</p>
                  </div>
                </div>
              </div>

              {/* SOC Box */}
              <div className="bg-slate-900 dark:bg-[#064e3b]/40 backdrop-blur-md border border-slate-700 dark:border-brand-success/30 p-8 rounded-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck size={100} className="text-brand-success" />
                </div>
                <div className="flex items-center space-x-2 text-brand-success font-bold mb-3">
                  <span className="w-3 h-3 rounded-full bg-brand-success animate-pulse"></span>
                  <span>Security Operations Center</span>
                </div>
                <p className="text-sm text-slate-300 dark:text-slate-200 leading-relaxed relative z-10 font-medium">
                  Our SOC operates 24/7/365, providing continuous monitoring and immediate response capabilities for all clients.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;