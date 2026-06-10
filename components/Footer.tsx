import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 relative border-t border-slate-800 overflow-hidden pt-16 pb-8">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      {/* Massive Background Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="text-[20vw] font-display font-bold text-white leading-none whitespace-nowrap select-none">OBERON</div>
      </div>

      {/* Animated Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-70"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-accent/20 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="block group w-fit">
              <div className="relative">
                {/* 
                     CRITICAL FIX: 
                     The Footer background is always dark (#020617), so we must force the Logo
                     to render in 'Dark Mode' (Light Text + Cyan) even if the user is in Light Mode.
                 */}
                <div className="absolute inset-0 bg-brand-accent blur-xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                <Logo className="h-48 w-auto relative z-10" forceDark={true} />
              </div>
            </Link>
            <div className="flex space-x-4">
              <SocialLink href="https://www.linkedin.com/company/oberon-services-ltd/" icon={<Linkedin size={20} />} />
              <SocialLink href="https://www.facebook.com/profile.php?id=61587299814352" icon={<Facebook size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-accent rounded-sm"></span> Services
            </h3>
            <ul className="space-y-4">
              <FooterLink to="/services/soc">Managed SOC</FooterLink>
              <FooterLink to="/services/compliance">Compliance & Audits</FooterLink>
              <FooterLink to="/services/vuln-mgmt">Vulnerability Mgmt</FooterLink>
              <FooterLink to="/services/policy">Policy & Strategy</FooterLink>
              <FooterLink to="/services/cloud">Cloud Security</FooterLink>
            </ul>
          </div>

          {/* Exercises */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-secondary rounded-sm"></span> Training
            </h3>
            <ul className="space-y-4">
              <FooterLink to="/exercises/tabletop">Tabletop Exercises</FooterLink>
              <FooterLink to="/exercises/incident-response">IR Drills</FooterLink>
              <FooterLink to="/exercises/ransomware">Ransomware Sims</FooterLink>
              <FooterLink to="/exercises/phishing-sim">Phishing Campaigns</FooterLink>
              <FooterLink to="/exercises/blue-team">Blue Team Training</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-success rounded-sm"></span> Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start group cursor-pointer">
                <Mail size={20} className="text-slate-500 group-hover:text-brand-accent mt-0.5 mr-4 transition-colors" />
                <a href="mailto:security@oberon-services.com" className="hover:text-white transition-colors text-slate-400">security@oberon-services.com</a>
              </div>

              <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 backdrop-blur-sm group hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">24/7 Emergency</p>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <p className="font-display text-white text-xl font-bold tracking-wider group-hover:text-brand-accent transition-colors">+880 1720-596676</p>
              </div>

              <div className="text-sm text-slate-500 font-medium pl-1 border-l-2 border-slate-800">
                <p>House # 31, Road # 02, Block-E</p>
                <p>Banasree, Rampura, Dhaka-1219</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Oberon Services. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
            <Link to="/sla" className="hover:text-brand-accent transition-colors">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-300">
      <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-3 group-hover:bg-brand-accent group-hover:scale-125 transition-all"></span>
      {children}
    </Link>
  </li>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent/50 hover:bg-brand-accent/5 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;