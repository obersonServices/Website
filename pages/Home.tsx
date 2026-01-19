import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, Users, Zap, ArrowRight, ShieldCheck, Lock, Activity } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';

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
        <Link to="/services" className="px-8 py-4 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          Explore All Services
        </Link>
      </Hero>

      {/* Why Choose Oberon Services */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose Oberon Services?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
                We combine cutting-edge technology with human expertise to deliver security outcomes that protect what matters most.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Activity, 
                title: "24/7 Security Operations", 
                desc: "Round-the-clock monitoring and response by certified security professionals using our state-of-the-art SOC.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              { 
                icon: Users, 
                title: "Expert Security Team", 
                desc: "Seasoned analysts with decades of combined experience in threat detection, incident response, and compliance.",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              },
              { 
                icon: Zap, 
                title: "Rapid Response", 
                desc: "Swift incident response with industry-leading mean time to detection (MTTD) and mean time to resolution (MTTR).",
                img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
              }
            ].map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="bg-white/80 dark:bg-brand-card/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700/50 relative overflow-hidden group h-full hover:border-brand-accent transition-colors duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  {/* Hover Image Reveal */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/80 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <feature.icon size={100} />
                  </div>
                  <div className="relative z-10">
                    <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-slate-900 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 drop-shadow-md">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed drop-shadow-sm font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Security Services Highlight */}
      <section className="py-24 bg-slate-100/80 dark:bg-[#0B1120]/60 backdrop-blur-sm border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <Reveal width="fit-content">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Managed Security Services</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium">From 24/7 monitoring to incident response and compliance.</p>
            </Reveal>
            <Reveal width="fit-content" direction="left">
              <Link to="/services" className="mt-4 md:mt-0 text-brand-accent font-semibold hover:text-cyan-400 flex items-center transition-colors border border-slate-700 rounded-full px-6 py-2 hover:bg-slate-800 hover:border-brand-accent">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { icon: ShieldAlert, title: "Managed SOC", desc: "24/7 security monitoring and management by our expert team.", link: "/services/soc", img: "https://images.unsplash.com/photo-1563206767-5b1d97299337?auto=format&fit=crop&q=80" },
               { icon: ShieldCheck, title: "Cyber Exercises", desc: "Realistic exercises to build security awareness and validate readiness.", link: "/exercises", img: "https://images.unsplash.com/photo-1614064641938-3e858a915f32?auto=format&fit=crop&q=80" },
               { icon: Lock, title: "Policy & Strategy", desc: "Expert guidance on security policy development and frameworks.", link: "/services/policy", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" }
             ].map((svc, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                   <div className="bg-white/90 dark:bg-brand-card/70 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-brand-accent transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:-translate-y-2">
                     <div 
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${svc.img})` }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/90 to-transparent pointer-events-none"></div>
                     <div className="relative z-10">
                       <svc.icon className="h-10 w-10 text-brand-accent mb-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{svc.title}</h3>
                       <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-4 line-clamp-2 group-hover:text-slate-200 transition-colors">
                         {svc.desc}
                       </p>
                       <Link to={svc.link} className="text-brand-accent text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                         Learn More <ArrowRight size={14} className="ml-1" />
                       </Link>
                     </div>
                   </div>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Protection */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <Reveal direction="right">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                     Enterprise-Grade Protection
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-6">
                     Advanced security tools and methodologies used by Fortune 500 companies, now accessible to your organization. We prioritize your assets so you can focus on growth.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center text-slate-700 dark:text-slate-200">
                        <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center mr-3 text-brand-accent text-sm">✓</div>
                        Advanced Threat Intelligence
                     </li>
                     <li className="flex items-center text-slate-700 dark:text-slate-200">
                        <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center mr-3 text-brand-accent text-sm">✓</div>
                        Automated Incident Response
                     </li>
                     <li className="flex items-center text-slate-700 dark:text-slate-200">
                        <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center mr-3 text-brand-accent text-sm">✓</div>
                        Comprehensive Reporting & Analytics
                     </li>
                  </ul>
               </Reveal>
               <Reveal direction="left">
                 <div className="relative">
                    <div className="absolute -inset-4 bg-brand-accent/20 rounded-xl blur-xl animate-pulse"></div>
                    <div className="relative bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700 p-8 overflow-hidden shadow-2xl">
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-600">
                             <ShieldAlert className="text-red-500 mb-2" />
                             <div className="text-2xl font-bold text-white">99.9%</div>
                             <div className="text-xs text-slate-400">Threat Detection</div>
                          </div>
                          <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-600">
                             <Activity className="text-brand-accent mb-2" />
                             <div className="text-2xl font-bold text-white">&lt; 15m</div>
                             <div className="text-xs text-slate-400">Response Time</div>
                          </div>
                          <div className="bg-slate-800/80 p-4 rounded-lg col-span-2 border border-slate-600">
                             <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-slate-300">System Status</span>
                                <span className="text-xs text-brand-success bg-brand-success/10 px-2 py-1 rounded border border-brand-success/20">Operational</span>
                             </div>
                             <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <motion.div 
                                  className="bg-brand-success w-full h-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "100%" }}
                                  transition={{ duration: 1.5 }}
                                />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800/50 bg-slate-900/40 backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-success/10 text-brand-success text-xs font-medium mb-6 border border-brand-success/20">
              <span className="w-2 h-2 rounded-full bg-brand-success mr-2 animate-pulse"></span> SOC Active Now
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              Get in touch with our security experts to discuss how Oberon Services can protect your organization from evolving cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/30">
                 Start Your Assessment &rarr;
               </Link>
               <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-600 backdrop-blur-md">
                 View All Services
               </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;