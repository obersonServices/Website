import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-slate-900 dark:text-white">
              <Shield className="h-6 w-6 text-brand-accent" />
              <span className="text-lg font-bold">OBERON SERVICES</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Oberon Services helps organizations build cyber resilience through security operations, training, and real-world exercises.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Managed SOC</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Compliance & Audits</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Vulnerability Mgmt</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Policy & Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Exercises</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/exercises/tabletop" className="hover:text-brand-accent transition-colors">Tabletop Exercises</Link></li>
              <li><Link to="/exercises/incident-response" className="hover:text-brand-accent transition-colors">IR Drills</Link></li>
              <li><Link to="/exercises/ransomware" className="hover:text-brand-accent transition-colors">Ransomware Sims</Link></li>
              <li><Link to="/exercises/phishing-sim" className="hover:text-brand-accent transition-colors">Phishing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-brand-accent"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-accent"><Twitter size={20} /></a>
              <a href="mailto:info@oberonservices.com" className="hover:text-brand-accent"><Mail size={20} /></a>
            </div>
            <p className="text-sm">
              Emergency SOC: <br />
              <span className="font-mono text-brand-accent">+1 (800) 555-0199</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Oberon Services. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;