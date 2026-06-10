import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const SLA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 dark:bg-transparent pb-24"
    >
      <SEO 
        title="Service Level Agreement (SLA) | Oberon Services — 15-Min Response Guarantee"
        description="Oberon Services SLA: Critical incidents responded to in under 15 minutes, 99.9% platform uptime guarantee, and 24/7/365 SOC availability. View full response time commitments and service credits."
        canonical="https://www.oberon-services.com/sla"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Service Level Agreement — Oberon Services",
            "url": "https://www.oberon-services.com/sla",
            "description": "Oberon Services SLA defining response times, uptime guarantees, and exclusions for managed SOC and incident response services.",
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
            "@id": "https://www.oberon-services.com/sla#legal",
            "name": "Service Level Agreement (SLA)",
            "text": "Oberon Services SLA guaranteeing Critical (Sev 1) incident response within 15 minutes, 99.9% platform uptime, and 24/7/365 SOC monitoring availability.",
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
        title="Service Level Agreement" 
        subtitle="Our commitment to speed, availability, and performance. We stand behind our defense."
        backgroundImage="https://images.unsplash.com/photo-1551808525-51a943718d07?auto=format&fit=crop&q=80"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Performance Guarantees</h2>
           <p className="text-slate-600 dark:text-slate-400">
             This Service Level Agreement (SLA) defines the guaranteed performance metrics for our Managed SOC and Incident Response services. These metrics are monitored 24/7/365.
           </p>
        </div>

        {/* Response Times Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden mb-12">
           <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                 <Clock className="mr-3 text-brand-accent" /> Incident Response Times (MTTD / MTTR)
              </h3>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                 <thead className="bg-slate-100 dark:bg-slate-950/50 uppercase font-bold text-xs text-slate-500">
                    <tr>
                       <th className="px-6 py-4">Severity Level</th>
                       <th className="px-6 py-4">Definition</th>
                       <th className="px-6 py-4 text-brand-accent">SLA Response Time</th>
                       <th className="px-6 py-4">Updates Frequency</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                       <td className="px-6 py-4 font-bold text-red-600 dark:text-red-500">Critical (Sev 1)</td>
                       <td className="px-6 py-4">Active breach, data exfiltration, or complete system outage caused by cyber attack.</td>
                       <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">&lt; 15 Minutes</td>
                       <td className="px-6 py-4">Every 30 Mins</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                       <td className="px-6 py-4 font-bold text-orange-600 dark:text-orange-500">High (Sev 2)</td>
                       <td className="px-6 py-4">High-risk malware detected, failed login spikes, or critical vulnerability identified.</td>
                       <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">&lt; 60 Minutes</td>
                       <td className="px-6 py-4">Every 2 Hours</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                       <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-500">Medium (Sev 3)</td>
                       <td className="px-6 py-4">Suspicious activity requiring investigation, policy violations, or non-critical malware.</td>
                       <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">&lt; 4 Hours</td>
                       <td className="px-6 py-4">Daily</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                       <td className="px-6 py-4 font-bold text-slate-500">Low (Sev 4)</td>
                       <td className="px-6 py-4">Information requests, tuning requests, or low-priority alerts.</td>
                       <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">&lt; 24 Hours</td>
                       <td className="px-6 py-4">Weekly</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Uptime Guarantee */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                 <CheckCircle className="mr-3 text-emerald-500" /> Platform Availability
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                 We guarantee that our Security Portal, Log Ingestion Pipeline, and API services will be available <strong>99.9%</strong> of the time in any given calendar month.
              </p>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-slate-500">99.9% - 100%</span>
                    <span className="text-emerald-500 font-bold">Target Met</span>
                 </div>
                 <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-slate-500">99.0% - 99.89%</span>
                    <span className="text-brand-accent font-bold">5% Service Credit</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">&lt; 99.0%</span>
                    <span className="text-brand-accent font-bold">10% Service Credit</span>
                 </div>
              </div>
           </div>

           {/* Exclusions */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                 <AlertTriangle className="mr-3 text-amber-500" /> SLA Exclusions
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                 The SLA guarantees do not apply to downtime or delays caused by:
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                 <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 mr-2 shrink-0"></span>
                    Factors outside our reasonable control (Force Majeure, Internet backbone failures).
                 </li>
                 <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 mr-2 shrink-0"></span>
                    Actions or inaction of the Client (e.g., shutting down a firewall collector).
                 </li>
                 <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 mr-2 shrink-0"></span>
                    Scheduled maintenance with 48-hour prior notice.
                 </li>
                 <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 mr-2 shrink-0"></span>
                    Hardware or software failures on the Client's side.
                 </li>
              </ul>
           </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 justify-between items-center max-w-6xl mx-auto">
          <Link to="/" className="text-brand-accent hover:underline font-bold text-sm flex items-center gap-1">
            ← Back to Homepage
          </Link>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-brand-accent dark:hover:text-brand-accent rounded-lg text-sm font-semibold transition-all">
            Contact Security Team
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SLA;