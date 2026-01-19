import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero 
        title="Get in Touch"
        subtitle="Ready to strengthen your security posture? Our team of experts is here to help you find the right solution for your organization."
      >
         <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-brand-accent text-sm font-medium">
            <Mail size={16} className="mr-2" /> Contact Us
         </div>
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Form */}
          <Reveal>
            <div className="bg-white/90 dark:bg-[#0F1623]/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-500 dark:placeholder-slate-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-500 dark:placeholder-slate-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Company Name</label>
                  <input type="text" placeholder="Company Inc." className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-500 dark:placeholder-slate-500" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Message</label>
                  <textarea rows={6} placeholder="Tell us about your security needs..." className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder-slate-500 dark:placeholder-slate-500 resize-none"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </Reveal>

          {/* Right Side: Info */}
          <div>
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start p-6 bg-slate-100/90 dark:bg-[#0F1623]/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent mr-4">
                     <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">security@oberonservices.com</p>
                    <p className="text-xs text-slate-500 mt-1">Send us an email anytime</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-slate-100/90 dark:bg-[#0F1623]/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="p-3 bg-brand-secondary/10 rounded-lg text-brand-secondary mr-4">
                     <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">+1 (555) 0123-4567</p>
                    <p className="text-xs text-slate-500 mt-1">24/7 Security Hotline</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-slate-100/90 dark:bg-[#0F1623]/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent mr-4">
                     <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase mb-1">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">Enterprise District</p>
                    <p className="text-xs text-slate-500 mt-1">Secure Operations Center</p>
                  </div>
                </div>
              </div>

              {/* SOC Box */}
              <div className="bg-[#064e3b]/40 backdrop-blur-md border border-brand-success/30 p-8 rounded-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck size={100} className="text-brand-success" />
                 </div>
                 <div className="flex items-center space-x-2 text-brand-success font-bold mb-3">
                    <span className="w-3 h-3 rounded-full bg-brand-success animate-pulse"></span>
                    <span>Security Operations Center</span>
                 </div>
                 <p className="text-sm text-slate-200 leading-relaxed relative z-10 font-medium">
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