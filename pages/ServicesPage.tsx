import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, Shield, Lock, ArrowRight, Zap, Eye, Users, FileText, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import TextReveal from '../components/TextReveal';

const ServicesPage: React.FC = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["20%", "-80%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-24"
    >
      <Hero 
        title="Security Solutions for Every Need"
        subtitle="Explore our comprehensive range of managed security services designed to protect your enterprise."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />

      {/* Comprehensive Protection - Capabilities */}
      <section className="py-32 bg-slate-50 dark:bg-transparent border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <div className="flex items-center justify-center space-x-2 mb-4">
                 <span className="h-px w-8 bg-brand-accent"></span>
                 <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Capabilities</span>
                 <span className="h-px w-8 bg-brand-accent"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white">
                Comprehensive Protection
              </h2>
              <p className="max-w-3xl mx-auto font-medium text-slate-600 dark:text-slate-400">
                Integrated security capabilities working together to safeguard your organization.
              </p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {[
              { icon: Eye, title: "24/7 Security Monitoring", desc: "Continuous surveillance of your digital infrastructure.", color: "cyan" },
              { icon: Zap, title: "Real-Time Threat Detection", desc: "Advanced threat intelligence and behavioral analytics.", color: "violet" },
              { icon: Shield, title: "Incident Response", desc: "Rapid containment and remediation.", color: "emerald" },
              { icon: Users, title: "Security Awareness", desc: "Training programs to build a security-conscious culture.", color: "cyan" },
              { icon: FileText, title: "Policy & Governance", desc: "Strategic guidance on risk management.", color: "violet" },
              { icon: Check, title: "Compliance", desc: "Preparation for ISO 27001, SOC 2, and more.", color: "emerald" }
            ].map((item, idx) => {
               const color = item.color === 'cyan' ? 'text-cyan-500' : item.color === 'violet' ? 'text-violet-500' : 'text-emerald-500';
               return (
                <Reveal key={idx} delay={idx * 0.1} className="h-full">
                   <div className="p-6 h-full rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-start space-x-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-default shadow-sm dark:shadow-none hover:border-brand-accent/30">
                      <motion.div 
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.5 }}
                        className="shrink-0"
                      >
                         <item.icon className={`w-8 h-8 mt-1 ${color} group-hover:scale-110 transition-transform`} />
                      </motion.div>
                      <div>
                         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                         <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                </Reveal>
               );
            })}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Portfolio */}
      <section ref={horizontalScrollRef} className="relative h-[300vh] bg-slate-900 overflow-visible">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 w-full mb-12">
             <TextReveal text="Our Service Portfolio" className="text-5xl md:text-7xl font-bold font-display text-white mb-4" />
             <p className="text-slate-400 text-xl max-w-2xl">Scroll to explore our diverse range of managed security solutions.</p>
          </div>
          
          <motion.div style={{ x }} className="flex gap-8 px-8 w-max">
             {SERVICES.map((service, index) => {
                const colorScheme = index % 3; 
                let accentColor = 'rgba(6, 182, 212,'; // Cyan
                if (colorScheme === 1) accentColor = 'rgba(139, 92, 246,'; // Violet
                if (colorScheme === 2) accentColor = 'rgba(16, 185, 129,'; // Emerald
                
                return (
                   <Link key={service.id} to={`/services/${service.id}`} className="group relative w-[400px] md:w-[500px] h-[600px] flex-shrink-0 rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-brand-accent/50 transition-colors">
                      <div 
                         className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity duration-700"
                         style={{ backgroundImage: `url(${service.image}?auto=format&fit=crop&q=80&w=800)` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                      
                      <div className="relative h-full flex flex-col p-10 z-10">
                         <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                            <service.icon size={32} style={{ color: `${accentColor} 1)` }} />
                         </div>
                         
                         <h3 className="text-3xl font-bold mb-4 font-display text-white">{service.title}</h3>
                         <p className="text-slate-300 text-lg leading-relaxed mb-8 line-clamp-4 group-hover:text-white transition-colors">{service.description}</p>
                         
                         <div className="mt-auto space-y-2">
                            {service.features.slice(0,3).map((f, i) => (
                               <div key={i} className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                                  <div className="w-1.5 h-1.5 rounded-full mr-3 bg-brand-accent"></div>
                                  {f}
                               </div>
                            ))}
                         </div>
                         
                         <div className="mt-8 flex items-center text-brand-accent font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                            View Details <ArrowRight size={20} className="ml-2" />
                         </div>
                      </div>
                   </Link>
                )
             })}
          </motion.div>
        </div>
      </section>

      {/* Sticky Card Stacking - Process Section */}
      <section className="py-32 bg-slate-50 dark:bg-[#050a14] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display text-slate-900 dark:text-white">How We Protect You</h2>
            <p className="max-w-2xl mx-auto text-xl font-light text-slate-600 dark:text-slate-400">
              A proven methodology ensuring continuous improvement and defense.
            </p>
          </div>

          <div className="space-y-32 pb-32">
             {[
               { id: '01', title: 'Assessment', desc: 'We evaluate your current security posture, identify gaps, and understand your unique risk profile.', color: 'bg-cyan-500' },
               { id: '02', title: 'Strategy', desc: 'Our experts design a tailored security program aligned with your business objectives and compliance requirements.', color: 'bg-violet-500' },
               { id: '03', title: 'Implementation', desc: 'We deploy and integrate our security solutions seamlessly with your existing infrastructure.', color: 'bg-emerald-500' },
               { id: '04', title: 'Monitoring', desc: '24/7 continuous monitoring, threat detection, and real-time alerting by our expert SOC team.', color: 'bg-amber-500' },
               { id: '05', title: 'Response', desc: 'Rapid incident response and remediation to contain and neutralize threats quickly.', color: 'bg-rose-500' },
               { id: '06', title: 'Evolution', desc: 'Continuous improvement through threat intelligence, reporting, and proactive recommendations.', color: 'bg-blue-500' }
             ].map((step, index) => (
                <div key={index} className="sticky top-32">
                   <div 
                      className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center"
                      style={{ 
                         marginBottom: `${index * 10}px`,
                         transform: `scale(${1 - (index * 0.02)}) translateY(${index * 10}px)`,
                         zIndex: index
                      }}
                   >
                      <div className="shrink-0 relative">
                         <div className={`w-32 h-32 rounded-full ${step.color} opacity-10 absolute blur-2xl`}></div>
                         <div className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-4xl font-display font-bold text-slate-900 dark:text-white shadow-inner relative z-10 border-l-4 border-${step.color.replace('bg-', '')}`}>
                            {step.id}
                         </div>
                      </div>
                      <div className="grow">
                         <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white">{step.title}</h3>
                         <p className="text-xl font-light text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA (Removed the generic card as requested) */}
      <section className="py-32 relative overflow-hidden bg-slate-900 border-t border-slate-800">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
             <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-tight">
                  Ready to elevate your <span className="text-brand-accent">security posture?</span>
                </h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                   Book a consultation with our senior architects. We'll analyze your current setup and propose a roadmap to zero-trust maturity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <div className="inline-block p-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-slate-700 hover:border-brand-accent/50 transition-colors">
                     <Link to="/contact" className="group block px-10 py-5 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)]">
                         <span className="text-lg">Schedule Consultation</span> 
                         <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                     </Link>
                   </div>
                   <Link to="/about" className="px-10 py-6 border border-slate-700 text-slate-300 font-bold rounded-full hover:bg-white/5 transition-colors text-center">
                      Learn About Us
                   </Link>
                </div>
             </Reveal>
         </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;