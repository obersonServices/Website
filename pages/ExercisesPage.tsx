import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EXERCISES } from '../constants';
import { ArrowRight, CheckCircle, Shield, Target, Zap, Layout, FileText, Database, Terminal } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';

const ExercisesPage: React.FC = () => {
  // Filter top 3 for featured
  const featuredExercises = EXERCISES.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero 
        title="Cyber Exercises & Training"
        subtitle="Build organizational resilience through realistic exercises that prepare your teams for real-world cyber incidents."
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
      >
         <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-success/10 border border-brand-success/20 text-brand-success text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-success mr-2 animate-pulse"></span>
            Now Enrolling for Q3 Workshops
         </div>
      </Hero>

      {/* Featured Exercises - Row of 3 */}
      <section className="py-20 bg-slate-100/80 dark:bg-[#0B1120]/60 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                 <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4 border border-brand-accent/20">Featured</div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Most Popular Scenarios</h2>
                 </div>
                 <Link to="/contact" className="mt-4 md:mt-0 px-6 py-2 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center shadow-lg shadow-cyan-500/20">
                    Explore All Exercises <ArrowRight size={16} className="ml-2" />
                 </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {featuredExercises.map((ex, idx) => (
                  <Link key={ex.id} to={`/exercises/${ex.id}`} className="group h-full block">
                     <Reveal delay={idx * 0.1} className="h-full">
                       <div className="bg-white/90 dark:bg-brand-card/70 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-brand-accent/80 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all h-full flex flex-col relative overflow-hidden transform hover:-translate-y-2 duration-500">
                          {/* Tactical Hover Background - Increased visibility */}
                          <div 
                              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                              style={{ backgroundImage: `url(${ex.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-card opacity-90 group-hover:opacity-70 transition-opacity pointer-events-none"></div>

                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                             <Target size={120} />
                          </div>
                          
                          <div className={`relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors shadow-md ${
                             idx === 0 ? 'bg-brand-success/10 text-brand-success group-hover:bg-brand-success group-hover:text-slate-900' :
                             idx === 1 ? 'bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-slate-900' :
                             'bg-brand-secondary/10 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white'
                          }`}>
                             <Terminal size={24} />
                          </div>
                          <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-accent transition-colors drop-shadow-lg">{ex.title}</h3>
                          <p className="relative z-10 text-sm text-slate-600 dark:text-slate-300 mb-6 flex-grow group-hover:text-slate-200 transition-colors font-medium">{ex.shortDescription}</p>
                          <div className="relative z-10 mt-auto flex items-center text-xs font-bold uppercase tracking-wide text-slate-500 group-hover:text-white transition-colors">
                             View Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                       </div>
                     </Reveal>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Why Cyber Exercises Matter - 2x2 Grid */}
      <section className="py-24 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <Reveal>
               <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Why Cyber Exercises Matter</h2>
               <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg font-medium">
                 Organizations that regularly exercise their incident response capabilities respond faster, make better decisions, and recover more effectively when real incidents occur.
               </p>
             </Reveal>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, title: "Validate Readiness", desc: "Test your incident response plans and procedures before a real crisis puts them to the test.", color: "text-brand-success" },
                { icon: Zap, title: "Improve Response Speed", desc: "Build muscle memory and reduce decision-making time when every minute counts.", color: "text-brand-accent" },
                { icon: Layout, title: "Meet Compliance Requirements", desc: "Demonstrate due diligence and fulfill regulatory requirements for security testing (ISO, SOC 2).", color: "text-brand-secondary" },
                { icon: Shield, title: "Build Organizational Resilience", desc: "Strengthen cross-functional coordination between IT, Legal, PR, and Executive leadership.", color: "text-brand-success" }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-100/90 dark:bg-[#0F1623]/70 backdrop-blur-md p-8 rounded-xl border border-slate-200 dark:border-slate-700/50 flex items-start space-x-6 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-brand-accent/30 transition-all duration-300 shadow-sm">
                     <div className={`${item.color.replace('text', 'bg')}/10 p-4 rounded-lg ${item.color} shrink-0`}>
                        <item.icon size={32} />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                           {item.desc}
                        </p>
                     </div>
                  </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      {/* Program List - Remainder of exercises */}
      <section className="py-24 bg-slate-100/80 dark:bg-[#0B1120]/50 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12">
                 <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Exercise Programs</h2>
                 <p className="text-slate-600 dark:text-slate-300">Choose from a range of exercise types designed for different audiences, objectives, and maturity levels.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {EXERCISES.map((ex, idx) => (
                  <Link key={ex.id} to={`/exercises/${ex.id}`} className="group">
                     <Reveal delay={idx * 0.05} className="h-full">
                       <div className="bg-white/90 dark:bg-brand-card/70 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-slate-600 transition-all h-full hover:shadow-lg relative overflow-hidden">
                          {/* Subtle bg image on hover - Increased opacity */}
                          <div 
                              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                              style={{ backgroundImage: `url(${ex.image})` }}
                          />
                          <div className="relative z-10">
                            <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-accent mb-4 group-hover:bg-brand-accent group-hover:text-slate-900 transition-colors">
                               {idx % 2 === 0 ? <FileText size={20} /> : <Database size={20} />}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{ex.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors">
                               {ex.shortDescription}
                            </p>
                          </div>
                       </div>
                     </Reveal>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Aligned Banner with Zoom effect */}
      <section className="py-20 bg-slate-900/60 backdrop-blur-md border-t border-slate-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal direction="up">
              <div className="text-center">
                 <h2 className="text-4xl font-bold text-white mb-6">Aligned with Your Security Program</h2>
                 <p className="text-slate-300 max-w-2xl mx-auto mb-10 font-medium">
                    Our exercises integrate with your broader security initiatives and compliance requirements.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-slate-800/60 p-6 rounded-lg backdrop-blur-sm border border-slate-700 hover:scale-105 transition-transform duration-300 shadow-lg">
                       <h4 className="text-white font-bold mb-2">Incident Response</h4>
                       <p className="text-sm text-slate-300">Validate and improve your IR plans, playbooks, and team coordination.</p>
                    </div>
                    <div className="bg-slate-800/60 p-6 rounded-lg backdrop-blur-sm border border-slate-700 hover:scale-105 transition-transform duration-300 shadow-lg">
                       <h4 className="text-white font-bold mb-2">Business Continuity</h4>
                       <p className="text-sm text-slate-300">Test recovery procedures and manual workarounds for critical processes.</p>
                    </div>
                    <div className="bg-slate-800/60 p-6 rounded-lg backdrop-blur-sm border border-slate-700 hover:scale-105 transition-transform duration-300 shadow-lg">
                       <h4 className="text-white font-bold mb-2">Compliance</h4>
                       <p className="text-sm text-slate-300">Meet requirements for ISO 27001, NIST CSF, SOC 2, PCI DSS, and more.</p>
                    </div>
                 </div>
              </div>
            </Reveal>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#020617]/80 backdrop-blur-md border-t border-slate-800 text-center">
         <Reveal direction="up">
           <h2 className="text-3xl font-bold text-white mb-4">Ready to Test Your Readiness?</h2>
           <p className="text-slate-400 mb-8">Contact our exercise facilitators to design a program tailored to your organization's needs.</p>
           <div className="flex justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/20">
                 Schedule an Exercise &rarr;
              </Link>
              <button className="px-8 py-3 border border-slate-600 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                 Talk to an Expert
              </button>
           </div>
         </Reveal>
      </section>
    </motion.div>
  );
};

export default ExercisesPage;