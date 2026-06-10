import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, Shield, Lock, ArrowRight, Zap, Eye, Users, FileText, Activity } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import TextReveal from '../components/TextReveal';
import CyberImage from '../components/CyberImage';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
   const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Oberon Cybersecurity Services",
      "description": "Enterprise-grade managed security services offered by Oberon Services.",
      "itemListElement": SERVICES.map((svc, index) => ({
         "@type": "ListItem",
         "position": index + 1,
         "item": {
            "@type": "Service",
            "name": svc.title,
            "description": svc.description,
            "url": `https://www.oberon-services.com/services/${svc.id}`,
            "provider": {
               "@type": "LocalBusiness",
               "name": "Oberon Services"
            }
         }
      }))
   };

   const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.oberon-services.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.oberon-services.com/services" }
      ]
   };

   const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cybersecurity Services & Solutions | Oberon Services",
      "description": "Explore Oberon's managed cybersecurity services: 24/7 SOC, SIEM monitoring, vulnerability management, compliance gap analysis, private AI, and policy consultancy.",
      "url": "https://www.oberon-services.com/services",
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.oberon-services.com/#organization",
        "name": "Oberon Services"
      }
   };

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="min-h-screen pb-24 bg-slate-50 dark:bg-transparent"
      >
         <SEO 
            title="Managed Cybersecurity Services & Solutions | Oberon Services"
            description="Explore Oberon's managed security services: 24/7 SOC, SIEM log monitoring, vulnerability management, compliance gap analysis (ISO 27001, SOC 2, PCI DSS), private AI, and vCISO policy consultancy."
            canonical="https://www.oberon-services.com/services"
            schema={[servicesSchema, breadcrumbSchema, webPageSchema]}
         />
         <Hero
            title="Security Solutions for Every Need"
            subtitle="Explore our comprehensive range of security services designed to protect your enterprise."
            backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
         />

         {/* Capabilities Section */}
         <section className="py-32 bg-white/60 dark:bg-transparent border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm">
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
                     <p className="max-w-3xl mx-auto font-medium text-slate-700 dark:text-slate-400">
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
                     const color = item.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-500' : item.color === 'violet' ? 'text-violet-600 dark:text-violet-500' : 'text-emerald-600 dark:text-emerald-500';
                     return (
                        <Reveal key={idx} delay={idx * 0.1} className="h-full">
                           <div className="p-6 h-full rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-start space-x-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-default shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-brand-accent/30">
                              <motion.div
                                 animate={{ y: [0, -4, 0] }}
                                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.5 }}
                                 className="shrink-0"
                              >
                                 <item.icon className={`w-8 h-8 mt-1 ${color} group-hover:scale-110 transition-transform`} />
                              </motion.div>
                              <div>
                                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                                 <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                              </div>
                           </div>
                        </Reveal>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Service Portfolio Grid */}
         <section className="py-32 bg-slate-100/50 dark:bg-[#050a14]/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <Reveal>
                  <div className="text-center mb-24">
                     <TextReveal text="Oberon Defense Spectrum" className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4 justify-center" width="100%" />
                     <p className="font-medium text-slate-700 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Choose from our suite of managed services, each designed to address specific layers of your security posture.
                     </p>
                  </div>
               </Reveal>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                  {SERVICES.map((service, idx) => {
                     return (
                        <Link key={service.id} to={`/services/${service.id}`} className="group h-full block">
                           <Reveal delay={idx * 0.1} className="h-full">
                              <div className="h-full flex flex-col p-10 rounded-3xl bg-white dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 shadow-lg shadow-slate-200/40 dark:shadow-none transition-all duration-500 relative overflow-hidden group-hover:-translate-y-2">
                                 {/* Background Image on Hover */}
                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <CyberImage
                                       src={`${service.image}?auto=format&fit=crop&q=80&w=600`}
                                       className="w-full h-full object-cover"
                                    />
                                 </div>
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 group-hover:bg-brand-accent/10"></div>

                                 <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-brand-accent shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                                       <service.icon size={28} />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-brand-accent/30 transition-colors">
                                       Service
                                    </div>
                                 </div>

                                 <h3 className="text-2xl font-bold mb-3 font-display text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">{service.title}</h3>
                                 <p className="text-base leading-relaxed mb-8 font-medium text-slate-700 dark:text-slate-400 flex-grow group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                                    {service.description}
                                 </p>

                                 {/* Tags/Features */}
                                 <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                    {service.features.slice(0, 2).map((feat, i) => (
                                       <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 px-3 py-1.5 rounded transition-colors group-hover:bg-slate-200 dark:group-hover:bg-slate-700 border border-slate-200 dark:border-slate-700">
                                          {feat}
                                       </span>
                                    ))}
                                 </div>

                                 <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4 relative z-10">
                                    <div>
                                       <div className="flex items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                                          <Activity size={16} className="mr-2 text-brand-secondary" /> Enterprise
                                       </div>
                                    </div>
                                    <div className="text-right">
                                       <div className="inline-flex items-center text-xs font-bold text-brand-accent group-hover:translate-x-1 transition-transform">
                                          View Details <ArrowRight size={14} className="ml-1" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </Reveal>
                        </Link>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Process Section */}
         <section className="py-32 bg-slate-50/50 dark:bg-[#020617]/50 backdrop-blur-sm relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="text-center mb-32">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display text-slate-900 dark:text-white">How We Protect You</h2>
                  <p className="max-w-2xl mx-auto text-xl font-light text-slate-700 dark:text-slate-400">
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
                           className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center backdrop-blur-xl"
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
                              <p className="text-xl font-normal text-slate-700 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Enhanced CTA */}
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