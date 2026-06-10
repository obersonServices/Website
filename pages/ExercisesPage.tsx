import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EXERCISES } from '../constants';
import { ArrowRight, CheckCircle, Target, Terminal, Clock, Users, FileText, Database, ShieldAlert, Award } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import TextReveal from '../components/TextReveal';
import FlipCard from '../components/FlipCard';
import CyberImage from '../components/CyberImage';
import SEO from '../components/SEO';

const ExercisesPage: React.FC = () => {
   // Filter top 3 for featured
   const featuredExercises = EXERCISES.slice(0, 3);

   const exercisesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Oberon Cybersecurity Exercises & Workshops",
      "description": "Interactive training and readiness simulation exercises offered by Oberon Services.",
      "itemListElement": EXERCISES.map((ex, index) => ({
         "@type": "ListItem",
         "position": index + 1,
         "item": {
            "@type": "Course",
            "name": ex.title,
            "description": ex.shortDescription,
            "url": `https://www.oberon-services.com/exercises/${ex.id}`,
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
        { "@type": "ListItem", "position": 2, "name": "Exercises & Training", "item": "https://www.oberon-services.com/exercises" }
      ]
   };

   const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cybersecurity Exercises & Simulations | Oberon Services",
      "description": "Train your team with cyber tabletop exercises, ransomware simulations, phishing tests, IR drills, and blue team readiness programs.",
      "url": "https://www.oberon-services.com/exercises",
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
         className="min-h-screen bg-slate-50/50 dark:bg-transparent"
      >
         <SEO 
            title="Cybersecurity Exercises, Simulations & Readiness Training | Oberon"
            description="Train your team for real-world cyber incidents with Oberon's military-grade tabletop exercises, ransomware simulations, phishing tests, IR drills, and blue team programs. Book a session today."
            ogImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
            canonical="https://www.oberon-services.com/exercises"
            schema={[exercisesSchema, breadcrumbSchema, webPageSchema]}
         />
         <Hero
            title="Cyber Exercises & Training"
            subtitle="Build organizational resilience through realistic exercises that prepare your teams for real-world cyber incidents."
            backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
         >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-success/10 border border-brand-success/20 text-brand-success text-sm font-medium backdrop-blur-md shadow-lg shadow-brand-success/10">
               <span className="w-2 h-2 rounded-full bg-brand-success mr-2 animate-pulse"></span>
               Now Enrolling for Q3 Workshops
            </div>
         </Hero>

         {/* Featured Exercises - 3D FLIP CARDS */}
         {/* 
          WRAPPER: Added 'dark' class here.
          Since these cards have permanently dark backgrounds (slate-900), 
          we force 'dark' mode scope so they use the Neon Cyan accent (text-brand-accent) 
          instead of the new darker cyan used for light mode legibility.
      */}
         <section className="dark py-32 bg-white/60 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <Reveal>
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                     <div className="max-w-2xl">
                        <div className="flex items-center space-x-2 mb-4">
                           <span className="h-px w-8 bg-brand-accent"></span>
                           <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Featured</span>
                        </div>
                        {/* Note: TextReveal might inherit dark mode text color (white) if inside .dark block. 
                        We manually set text-slate-900 for light mode visibility outside this block if needed, 
                        but here the section background is lightish (white/60), so we need DARK text for headers, 
                        BUT the FlipCards themselves need LIGHT text.
                        
                        Correction: The section wrapper is 'dark', so all text inside is white by default via tailwind config?
                        Actually, 'dark' class applies dark: utility variants.
                        
                        We need the accent color to be Neon Cyan.
                        Let's isolate the 'dark' class to the CARDS themselves, not the whole section, 
                        because the section background is light in light mode.
                    */}
                     </div>
                     <Link to="/contact" className="mt-8 md:mt-0 px-8 py-4 border border-slate-300 dark:border-slate-700 hover:border-brand-accent text-slate-900 dark:text-cyan-400 font-bold rounded-full transition-colors flex items-center hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm">
                        Explore All <ArrowRight size={18} className="ml-2" />
                     </Link>
                  </div>
                  {/* Moved TextReveal out of 'dark' wrapper scope conceptual logic, fixed below by applying dark class only to cards */}
                  <div className="max-w-2xl -mt-16 mb-16">
                     <TextReveal text="Most Popular Scenarios" className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-cyan-600 mb-4" />
                  </div>
               </Reveal>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredExercises.map((ex, idx) => {
                     const iconColor = idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-cyan-400' : 'text-blue-400';

                     // Front Content: Always Dark/Immersive
                     // Added 'dark' class to force Neon Cyan accents
                     const Front = (
                        <div className="dark relative h-full p-8 flex flex-col justify-between z-10 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                           {/* Background Image */}
                           <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
                              <CyberImage
                                 src={`${ex.image}?auto=format&fit=crop&q=80&w=600`}
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                           <div className="relative z-10">
                              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg`}>
                                 <Terminal size={32} className="text-brand-accent" />
                              </div>
                              <h3 className="text-3xl font-bold mb-4 font-display text-white">{ex.title}</h3>
                              <p className="text-slate-300 font-light text-lg">{ex.shortDescription}</p>
                           </div>

                           <div className="relative z-10 flex items-center text-brand-accent text-sm font-bold uppercase tracking-widest mt-8">
                              Hover for Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                     );

                     // Back Content: Dark theme for the back
                     // Added 'dark' class to force Neon Cyan accents
                     const Back = (
                        <div className="dark h-full p-8 flex flex-col bg-slate-950 relative border border-brand-accent rounded-2xl overflow-hidden shadow-2xl">
                           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                           <h3 className="text-2xl font-bold mb-6 font-display text-brand-accent">{ex.title}</h3>

                           <div className="space-y-4 flex-grow">
                              <div className="space-y-2">
                                 <span className="text-xs uppercase text-slate-500 font-bold tracking-widest">Objectives</span>
                                 {ex.objectives.slice(0, 2).map((obj, i) => (
                                    <div key={i} className="flex items-start text-sm text-slate-300">
                                       <CheckCircle size={14} className={`mr-2 ${iconColor} mt-0.5 shrink-0`} />
                                       {obj}
                                    </div>
                                 ))}
                              </div>
                              <div className="grid grid-cols-2 gap-4 mt-4 border-t border-slate-800 pt-4">
                                 <div>
                                    <span className="text-xs uppercase text-slate-500 font-bold tracking-widest">Format</span>
                                    <p className="text-white text-sm mt-1">{ex.format}</p>
                                 </div>
                                 <div>
                                    <span className="text-xs uppercase text-slate-500 font-bold tracking-widest">Duration</span>
                                    <p className="text-white text-sm mt-1">{ex.duration}</p>
                                 </div>
                              </div>
                           </div>

                           <Link to={`/exercises/${ex.id}`} className="mt-6 w-full py-4 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold text-center rounded-lg transition-colors uppercase tracking-widest text-sm z-20 shadow-lg shadow-cyan-500/20">
                              View Full Program
                           </Link>
                        </div>
                     );

                     return (
                        <Reveal key={ex.id} delay={idx * 0.1} className="h-full">
                           <FlipCard frontContent={Front} backContent={Back} height="h-[432px] md:h-[500px]" />
                        </Reveal>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Why Exercises Matter */}
         <section className="py-24 bg-white/70 dark:bg-[#0B1120]/70 relative overflow-hidden backdrop-blur-md">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <Reveal>
                     <h2 className="text-4xl font-bold mb-6 font-display text-slate-900 dark:text-white">Why Cyber Exercises?</h2>
                     <p className="text-xl text-slate-700 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                        Security tools alone cannot save you. When a crisis hits, muscle memory determines survival. Regular exercises transform your response from chaotic to coordinated.
                     </p>
                     <div className="space-y-6">
                        {[
                           { icon: ShieldAlert, title: "Reduce Panic", desc: "Teams who practice know exactly who to call and what to do." },
                           { icon: Target, title: "Find Blind Spots", desc: "Identify process gaps before an adversary exploits them." },
                           { icon: Award, title: "Prove Compliance", desc: "Satisfy regulatory requirements for incident response testing." }
                        ].map((item, i) => (
                           <div key={i} className="flex items-start group">
                              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand-secondary mr-6 group-hover:scale-110 transition-transform shadow-md border border-slate-200 dark:border-slate-700">
                                 <item.icon size={28} />
                              </div>
                              <div>
                                 <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Reveal>
                  <Reveal delay={0.2} direction="left">
                     {/* 
                         FIX: Added !bg-slate-900 to override default light mode styles. 
                         Also added 'dark' class so the inner contents (like brand-accent bars) 
                         use the Neon Cyan from dark mode instead of the new Darker Cyan.
                      */}
                     <SpotlightCard className="dark p-10 !bg-slate-900 border border-slate-800 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-20 text-brand-accent">
                           <Terminal size={180} />
                        </div>
                        <div className="relative z-10 text-white">
                           <div className="text-sm font-mono text-emerald-500 mb-2 font-bold"> &gt; Survey Results Indicate...</div>
                           <div className="text-6xl font-bold mb-2">85%</div>
                           <p className="text-slate-300 text-lg mb-8 font-medium">Reduction in response time for teams that drill quarterly.</p>

                           <div className="text-6xl font-bold mb-2">$1.2M</div>
                           <p className="text-slate-300 text-lg mb-8 font-medium">Average cost savings on data breach containment globally.</p>

                           <div className="w-full bg-slate-800 rounded-full h-3 mb-4">
                              <div className="bg-brand-accent h-3 rounded-full w-[85%] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                           </div>
                           <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Industry Readiness Benchmark</p>
                        </div>
                     </SpotlightCard>
                  </Reveal>
               </div>
            </div>
         </section>

         {/* Program List */}
         <section className="py-32 bg-slate-100/50 dark:bg-[#050a14]/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <Reveal>
                  <div className="text-center mb-24">
                     <h2 className="text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white">Complete Exercise Catalog</h2>
                     <p className="font-medium text-slate-700 dark:text-slate-400 text-lg">Choose from a range of exercise types designed for different audiences.</p>
                  </div>
               </Reveal>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                  {EXERCISES.map((ex, idx) => {
                     return (
                        <Link key={ex.id} to={`/exercises/${ex.id}`} className="group h-full block">
                           <Reveal delay={idx * 0.1} className="h-full">
                              <div className="h-full flex flex-col p-10 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-2">
                                 {/* Background Image on Hover */}
                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <CyberImage
                                       src={`${ex.image}?auto=format&fit=crop&q=80&w=600`}
                                       className="w-full h-full object-cover"
                                    />
                                 </div>
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 group-hover:bg-brand-accent/10"></div>

                                 <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-brand-accent shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                                       {idx % 2 === 0 ? <FileText size={28} /> : <Database size={28} />}
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-brand-accent/30 transition-colors">
                                       {ex.format}
                                    </div>
                                 </div>

                                 <h3 className="text-2xl font-bold mb-3 font-display text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">{ex.title}</h3>
                                 <p className="text-base leading-relaxed mb-8 font-medium text-slate-700 dark:text-slate-400 flex-grow group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                                    {ex.shortDescription}
                                 </p>

                                 {/* Tags */}
                                 <div className="flex flex-wrap gap-2 mb-8">
                                    {ex.participants.slice(0, 2).map((p, i) => (
                                       <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 px-3 py-1.5 rounded transition-colors group-hover:bg-slate-200 dark:group-hover:bg-slate-700 border border-slate-200 dark:border-slate-700">
                                          {p}
                                       </span>
                                    ))}
                                 </div>

                                 <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
                                    <div>
                                       <div className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                          <Clock size={16} className="mr-2 text-brand-secondary" /> {ex.duration}
                                       </div>
                                    </div>
                                    <div>
                                       <div className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                          <Users size={16} className="mr-2 text-brand-secondary" /> {ex.participants.length} Roles
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

         {/* CTA */}
         <section className="py-32 bg-[#020617] border-t border-slate-800 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
               <Reveal direction="up">
                  <div className="inline-flex items-center px-4 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-sm font-semibold mb-8 animate-pulse">
                     <span className="w-2 h-2 rounded-full bg-brand-accent mr-2"></span> Accepting New Clients
                  </div>

                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight font-display">
                     Ready to Test Your <span className="text-brand-accent">Readiness?</span>
                  </h2>

                  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                     <Link to="/contact" className="px-10 py-5 bg-brand-accent text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30 text-lg">
                        Schedule Exercise
                     </Link>
                  </div>
               </Reveal>
            </div>
         </section>
      </motion.div>
   );
};

export default ExercisesPage;