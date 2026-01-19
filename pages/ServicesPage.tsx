import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, Shield, Lock, Server, ArrowRight, Zap, Eye, Database } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';

const ServicesPage: React.FC = () => {
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

      {/* Comprehensive Protection - Core Capabilities */}
      <section className="py-20 bg-slate-100/80 dark:bg-[#0B1120]/60 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-4 border border-brand-secondary/20">Core Capabilities</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Protection for Your Enterprise
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
                From proactive monitoring to incident response and compliance, our integrated security capabilities work together to safeguard your organization.
              </p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "24/7 Security Monitoring", desc: "Continuous surveillance of your digital infrastructure by certified security analysts around the clock.", color: "text-brand-accent", bg: "bg-brand-accent/10" },
              { icon: Zap, title: "Real-Time Threat Detection", desc: "Advanced threat intelligence and behavioral analytics to identify and neutralize threats instantly.", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
              { icon: Shield, title: "Incident Response & Recovery", desc: "Rapid containment and remediation with industry-leading mean time to resolution metrics.", color: "text-brand-success", bg: "bg-brand-success/10" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-8 bg-white/90 dark:bg-brand-card/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group hover:-translate-y-2 relative overflow-hidden hover:border-brand-accent/50">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <item.icon size={120} />
                   </div>
                  <div className={`h-14 w-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Image backgrounds */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Link key={service.id} to={`/services/${service.id}`} className="block h-full group">
              <Reveal delay={index * 0.05} className="h-full">
                <div className="bg-white/90 dark:bg-brand-card/70 backdrop-blur-md rounded-xl p-8 h-full border border-slate-200 dark:border-slate-700/50 hover:border-brand-accent/80 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-500 relative flex flex-col overflow-hidden">
                  
                  {/* Hover Background Image - Increased Opacity */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-700 transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/80 to-transparent pointer-events-none"></div>

                  {service.title.includes('Workshops') && (
                     <span className="absolute top-4 right-4 bg-brand-success/20 text-brand-success text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10 border border-brand-success/30">Featured</span>
                  )}
                  
                  <div className={`relative z-10 p-3 w-fit rounded-lg mb-6 transition-colors duration-300 shadow-md ${
                      index % 3 === 0 ? 'bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-slate-900' : 
                      index % 3 === 1 ? 'bg-brand-success/10 text-brand-success group-hover:bg-brand-success group-hover:text-slate-900' : 
                      'bg-brand-secondary/10 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white'
                  }`}>
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-accent transition-colors drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow group-hover:text-slate-200 font-medium">
                    {service.description}
                  </p>
                  
                  <div className="relative z-10 mt-auto flex justify-end">
                    <span className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-brand-accent transition-all transform group-hover:translate-x-1 shadow-lg">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>

      {/* Scrollytelling Vertical Process */}
      <section className="py-24 border-t border-slate-200 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">How We Protect Your Organization</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
                Our proven methodology ensures comprehensive protection at every stage of the security lifecycle.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-accent/50 to-transparent -translate-x-1/2"></div>

            <div className="space-y-24 md:space-y-32">
              {[
                { id: '01', title: 'Assessment', desc: 'We evaluate your current security posture, identify gaps, and understand your unique risk profile.' },
                { id: '02', title: 'Strategy', desc: 'Our experts design a tailored security program aligned with your business objectives and compliance requirements.' },
                { id: '03', title: 'Implementation', desc: 'We deploy and integrate our security solutions seamlessly with your existing infrastructure.' },
                { id: '04', title: 'Monitoring', desc: '24/7 continuous monitoring, threat detection, and real-time alerting by our expert SOC team.' },
                { id: '05', title: 'Response', desc: 'Rapid incident response and remediation to contain and neutralize threats quickly.' },
                { id: '06', title: 'Evolution', desc: 'Continuous improvement through threat intelligence, reporting, and proactive recommendations.' }
              ].map((step, idx) => (
                <div 
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full pl-12 md:pl-0 md:text-right">
                    <Reveal direction={idx % 2 === 0 ? 'left' : 'right'}>
                      <div className={`md:max-w-md p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl hover:border-brand-accent/50 transition-colors duration-500 shadow-xl ${idx % 2 === 0 ? 'md:mr-auto md:text-left' : 'md:ml-auto'}`}>
                        <h3 className="text-2xl font-bold text-white mb-2 text-brand-accent">{step.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </Reveal>
                  </div>

                  {/* Marker */}
                  <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#020617] border-4 border-slate-800 z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-transform hover:scale-125 duration-300 group">
                    <span className="text-xs font-bold text-brand-accent">{step.id}</span>
                  </div>

                  {/* Empty Side for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900/60 backdrop-blur-md border-t border-slate-800/50">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Reveal direction='up'>
              <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Security Solution?</h2>
              <p className="text-slate-300 mb-8">Our security experts will work with you to design a tailored program that addresses your specific challenges and requirements.</p>
              <div className="inline-block p-1 bg-slate-800/50 rounded-full">
                 <Link to="/contact" className="block px-8 py-3 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-colors flex items-center shadow-lg hover:shadow-cyan-500/25">
                    Schedule a Consultation <ArrowRight size={18} className="ml-2" />
                 </Link>
              </div>
            </Reveal>
         </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;