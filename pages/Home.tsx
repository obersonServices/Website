import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, Users, Zap, ArrowRight, ShieldCheck, Lock, Activity, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import Marquee from '../components/Marquee';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full overflow-hidden"
    >
      <Hero 
        title="Managed Security Services"
        subtitle="From 24/7 monitoring to incident response, we provide the enterprise-grade protection your organization needs to thrive in a digital world."
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
      >
        <Link to="/services" className="px-8 py-4 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95">
          Explore All Services
        </Link>
      </Hero>

      {/* Tech Stack Marquee */}
      <Marquee items={['SIEM', 'EDR', 'SOAR', 'Threat Intel', 'Cloud Security', 'Zero Trust', 'Compliance', 'Forensics']} speed={40} />

      {/* Why Choose Oberon Services - Fancier & Elegant */}
      <section className="py-32 relative bg-slate-50 dark:bg-[#020617]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 max-w-3xl">
            <Reveal>
              <div className="flex items-center space-x-2 mb-4">
                 <span className="h-px w-8 bg-brand-accent"></span>
                 <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Why Oberon</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-slate-900 dark:text-white leading-tight">
                Security that evolves as fast as the threat landscape.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl font-light text-slate-600 dark:text-slate-400 leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver security outcomes that protect what matters most.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {/* Large Card: 24/7 Security */}
            <div className="md:col-span-6 lg:col-span-8 h-[450px]">
              <Reveal className="h-full">
                <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer">
                   {/* Background Image */}
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800')" }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
                   
                   {/* Glowing Border effect on hover */}
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-accent/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                   <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                      <div className="w-16 h-16 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-2xl flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                         <Activity size={32} />
                      </div>
                      <div>
                         <h3 className="text-4xl font-bold mb-3 font-display text-white group-hover:translate-x-2 transition-transform duration-300">24/7 Security Operations</h3>
                         <p className="text-lg text-slate-200 max-w-md font-light group-hover:text-white transition-colors">Round-the-clock monitoring and response by certified security professionals using our state-of-the-art SOC.</p>
                      </div>
                   </div>
                </div>
              </Reveal>
            </div>

            {/* Tall Card: Rapid Response */}
            <div className="md:col-span-3 lg:col-span-4 row-span-2 h-full min-h-[450px]">
               <Reveal delay={0.1} className="h-full">
                 <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-slate-900">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600')" }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-950"></div>
                   
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                   <div className="relative z-10 p-10 flex flex-col h-full">
                      <div className="w-16 h-16 bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 rounded-2xl flex items-center justify-center text-emerald-300 mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                         <Zap size={32} />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 font-display text-white group-hover:translate-x-2 transition-transform duration-300">Rapid Response</h3>
                      <p className="text-slate-300 mb-8 leading-relaxed font-light">
                         Swift incident response with industry-leading mean time to detection (MTTD) and mean time to resolution (MTTR).
                      </p>
                      
                      <div className="mt-auto space-y-6">
                         {/* Stats Bars */}
                         <div>
                            <div className="flex justify-between text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                               <span>MTTD</span>
                               <span className="text-emerald-400">&lt; 15m</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                               <div className="h-full bg-emerald-500 w-[15%] group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                            </div>
                         </div>
                         <div>
                            <div className="flex justify-between text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                               <span>MTTR</span>
                               <span className="text-emerald-400">&lt; 2hrs</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                               <div className="h-full bg-emerald-500 w-[40%] group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                 </div>
               </Reveal>
            </div>

            {/* Medium Card: Expert Team */}
            <div className="md:col-span-3 lg:col-span-4 h-[350px]">
               <Reveal delay={0.2} className="h-full">
                 <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-slate-900">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800')" }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-transparent"></div>
                   
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                   <div className="relative z-10 p-8">
                      <div className="w-14 h-14 bg-violet-500/30 backdrop-blur-md border border-violet-400/30 rounded-2xl flex items-center justify-center text-violet-300 mb-6 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                         <Users size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-display text-white group-hover:translate-x-2 transition-transform duration-300">Expert Team</h3>
                      <p className="text-slate-300 font-light">
                         Seasoned analysts with decades of combined experience in threat detection and compliance.
                      </p>
                   </div>
                 </div>
               </Reveal>
            </div>

            {/* Medium Card: Global Reach */}
            <div className="md:col-span-3 lg:col-span-4 h-[350px]">
               <Reveal delay={0.3} className="h-full">
                 <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-slate-900">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800')" }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-tl from-slate-950 via-slate-900/80 to-transparent"></div>
                   
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                   <div className="relative z-10 p-8">
                      <div className="w-14 h-14 bg-amber-500/30 backdrop-blur-md border border-amber-400/30 rounded-2xl flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                         <Globe size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-display text-white group-hover:translate-x-2 transition-transform duration-300">Global Reach</h3>
                      <p className="text-slate-300 font-light">
                         Protecting assets across on-premise, cloud, and hybrid environments worldwide with unified visibility.
                      </p>
                   </div>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Security Services Highlight */}
      <section className="py-32 bg-white dark:bg-[#0B1120]/60 backdrop-blur-sm border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
             <Reveal>
               <h2 className="text-4xl font-bold mb-6 font-display text-slate-900 dark:text-white">Managed Security Services</h2>
               <p className="text-xl font-light text-slate-600 dark:text-slate-400 leading-relaxed">
                  We don't just offer tools; we offer a partnership. Our managed services are designed to act as an extension of your team, providing the expertise and technology needed to secure your future.
               </p>
             </Reveal>
             <Reveal direction="left">
               <div className="flex justify-end">
                  <Link to="/services" className="group flex items-center gap-4 px-8 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full hover:border-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                     <span className="font-bold text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">View Complete Portfolio</span>
                     <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-slate-900 transition-colors">
                        <ArrowRight size={20} />
                     </div>
                  </Link>
               </div>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: ShieldAlert, title: "Managed SOC", desc: "24/7 security monitoring and management by our expert team.", link: "/services/soc", color: "cyan" },
               { icon: ShieldCheck, title: "Cyber Exercises", desc: "Realistic exercises to build security awareness and validate readiness.", link: "/exercises", color: "emerald" },
               { icon: Lock, title: "Policy & Strategy", desc: "Expert guidance on security policy development and frameworks.", link: "/services/policy", color: "violet" }
             ].map((svc, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                   <SpotlightCard className="h-full group p-8" spotlightColor={svc.color === 'cyan' ? 'rgba(6, 182, 212, 0.2)' : svc.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(139, 92, 246, 0.2)'}>
                       <div className="flex flex-col h-full">
                          <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                             <svc.icon className={`h-12 w-12 ${svc.color === 'cyan' ? 'text-cyan-500' : svc.color === 'emerald' ? 'text-emerald-500' : 'text-violet-500'}`} />
                          </div>
                          <h3 className="text-2xl font-bold mb-3 font-display text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">{svc.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                            {svc.desc}
                          </p>
                          <Link to={svc.link} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors border-b border-transparent group-hover:border-brand-accent pb-1">
                            Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                          </Link>
                       </div>
                   </SpotlightCard>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Protection - Enhanced */}
      <section className="py-32 bg-slate-50 dark:bg-transparent overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <Reveal direction="right">
                  <div className="flex items-center space-x-2 mb-4">
                     <span className="h-px w-8 bg-brand-accent"></span>
                     <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Capabilities</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-slate-900 dark:text-white leading-tight">
                     Enterprise-Grade Protection
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                     Advanced security tools and methodologies used by Fortune 500 companies, now accessible to your organization. We prioritize your assets so you can focus on growth.
                  </p>
                  
                  <div className="space-y-6">
                     {[
                        { title: "Advanced Threat Intelligence", desc: "Real-time feeds identifying global threat campaigns." },
                        { title: "Automated Incident Response", desc: "Machine-speed blocking of known malicious indicators." },
                        { title: "Comprehensive Reporting", desc: "Detailed insights for both technical and executive audiences." }
                     ].map((item, idx) => (
                        <div key={idx} className="flex group">
                           <div className="mr-6 flex flex-col items-center">
                              <div className="h-3 w-3 rounded-full bg-brand-accent group-hover:scale-150 transition-transform duration-300"></div>
                              <div className="h-full w-px bg-slate-200 dark:bg-slate-800 my-2"></div>
                           </div>
                           <div className="pb-8">
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </Reveal>
               <Reveal direction="left">
                 <div className="relative">
                    <div className="absolute -inset-10 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                    <SpotlightCard className="p-8 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-2xl border border-slate-200 dark:border-slate-700/50">
                       <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                          <div className="flex items-center gap-3">
                             <ShieldAlert className="text-brand-accent" />
                             <span className="font-bold text-slate-900 dark:text-white">Live Threat Monitor</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="relative flex h-3 w-3">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                             </span>
                             <span className="text-xs font-mono text-emerald-500">SYSTEM ACTIVE</span>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                          {[
                             { ip: "192.168.1.45", threat: "Malware Beacon", severity: "High", time: "2s ago" },
                             { ip: "10.0.5.22", threat: "Brute Force", severity: "Medium", time: "12s ago" },
                             { ip: "172.16.0.99", threat: "Data Exfiltration", severity: "Critical", time: "45s ago" },
                          ].map((log, i) => (
                             <div key={i} className="flex items-center justify-between text-xs font-mono p-3 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                                <span className="text-slate-500">{log.time}</span>
                                <span className="text-slate-700 dark:text-slate-300">{log.ip}</span>
                                <span className="text-brand-accent">{log.threat}</span>
                                <span className={`px-2 py-0.5 rounded ${
                                   log.severity === 'Critical' ? 'bg-red-500/10 text-red-500' :
                                   log.severity === 'High' ? 'bg-orange-500/10 text-orange-500' :
                                   'bg-yellow-500/10 text-yellow-500'
                                }`}>{log.severity}</span>
                             </div>
                          ))}
                       </div>

                       <div className="mt-8 bg-slate-100 dark:bg-slate-950 rounded-lg p-4 flex justify-between items-end h-32">
                           {[40, 65, 30, 80, 55, 90, 45, 70, 60, 35].map((h, i) => (
                              <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${h}%` }}
                                 transition={{ duration: 1, delay: i * 0.1 }}
                                 className="w-1.5 bg-brand-accent/50 rounded-t-sm"
                              />
                           ))}
                       </div>
                    </SpotlightCard>
                 </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 relative overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-[#020617]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-success/10 text-brand-success text-xs font-bold tracking-widest uppercase mb-8 border border-brand-success/20">
              <span className="w-2 h-2 rounded-full bg-brand-success mr-2 animate-pulse"></span> SOC Active Now
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-display text-white">
              Ready to Strengthen<br/><span className="text-brand-accent">Your Security?</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-light text-slate-400">
              Get in touch with our security experts to discuss how Oberon Services can protect your organization from evolving cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold text-lg rounded-full transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:scale-105">
                 Start Your Assessment
               </Link>
               <Link to="/services" className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-white/5 text-white font-bold text-lg rounded-full transition-colors border border-slate-700">
                 View Services
               </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;