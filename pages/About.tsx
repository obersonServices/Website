import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, Award, Users, Target, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero 
        title="Defending the Digital Frontier" 
        subtitle="Oberon Services is a trusted Managed Security Service Provider (MSSP) dedicated to protecting organizations from the evolving landscape of cyber threats."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
      >
         <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-brand-accent text-sm font-medium">
            <Users size={16} className="mr-2" /> About Us
         </div>
      </Hero>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-100/80 dark:bg-[#0B1120]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            {/* Mission Card */}
            <Reveal className="h-full">
              <div className="h-full bg-white dark:bg-brand-card/70 backdrop-blur-md p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-lg border border-slate-100 dark:border-slate-700/50 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Target size={150} />
                 </div>
                 <div className="h-14 w-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 shrink-0">
                    <Target size={28} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">Our Mission</h3>
                 <p className="leading-relaxed font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-300 dark:to-slate-500 flex-grow">
                    To provide enterprise-grade security services that enable organizations to operate with confidence in an increasingly hostile digital environment. We combine cutting-edge technology with human expertise to detect, respond to, and neutralize cyber threats before they impact business operations.
                 </p>
              </div>
            </Reveal>

            {/* Vision Card */}
            <Reveal delay={0.2} className="h-full">
              <div className="h-full bg-white dark:bg-brand-card/70 backdrop-blur-md p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-lg border border-slate-100 dark:border-slate-700/50 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Eye size={150} />
                 </div>
                 <div className="h-14 w-14 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success mb-6 shrink-0">
                    <Eye size={28} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">Our Vision</h3>
                 <p className="leading-relaxed font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-500 dark:from-slate-300 dark:to-slate-500 flex-grow">
                    To be the most trusted name in managed security services, recognized for our unwavering commitment to protecting our clients and advancing the state of cybersecurity. We envision a world where every organization, regardless of size, has access to world-class security protection.
                 </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-y border-slate-200 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <Reveal>
             <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">Our Core Values</h2>
             <p className="mb-16 font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500">These principles guide everything we do at Oberon Services.</p>
           </Reveal>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
              {[
                { icon: Shield, title: "Security First", desc: "Every decision we make prioritizes the security of our clients' digital assets." },
                { icon: Eye, title: "Vigilance", desc: "Constant monitoring and proactive threat hunting to stay ahead of attackers." },
                { icon: Heart, title: "Trust", desc: "Building lasting partnerships through transparency, integrity, and reliability." },
                { icon: Target, title: "Excellence", desc: "Pursuing the highest standards in everything we do, from detection to response." }
              ].map((val, i) => (
                <Reveal key={i} delay={i * 0.1} className="h-full">
                  <div className="h-full bg-white dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-brand-accent transition-colors shadow-lg shadow-slate-200/50 dark:shadow-sm flex flex-col items-center">
                     <div className="mx-auto h-12 w-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-brand-accent mb-4 shrink-0">
                        <val.icon size={24} />
                     </div>
                     <h3 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">{val.title}</h3>
                     <p className="text-xs font-medium text-slate-500 dark:text-slate-400 flex-grow">{val.desc}</p>
                  </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-white mb-4">Proven Track Record</h2>
              <p className="text-slate-400 mb-16">Our numbers speak to the trust organizations place in Oberon Services.</p>
            </Reveal>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { val: "15+", label: "Years of Experience" },
                 { val: "500+", label: "Enterprise Clients" },
                 { val: "1M+", label: "Threats Blocked" },
                 { val: "99.9%", label: "Client Retention" }
               ].map((stat, i) => (
                 <Reveal key={i} delay={i * 0.1}>
                   <div>
                      <div className="text-5xl font-bold text-brand-accent mb-2">{stat.val}</div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                   </div>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* Expert Team */}
      <section className="py-24 bg-slate-100/80 dark:bg-[#0B1120]/60 backdrop-blur-sm">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Reveal>
              <div className="h-16 w-16 mx-auto mb-6 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
                 <Award size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">Expert Security Professionals</h2>
              <div className="bg-white dark:bg-slate-900/80 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-xl border border-slate-100 dark:border-slate-700/50 text-left backdrop-blur-md">
                 <p className="leading-relaxed mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500">
                    Our team comprises seasoned security professionals with backgrounds spanning threat intelligence, incident response, security architecture, and compliance. With certifications including CISSP, CISM, CEH, OSCP, and more, our analysts bring deep expertise to every engagement.
                 </p>
                 <p className="leading-relaxed font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500">
                    We continuously invest in our team's development, ensuring they stay at the forefront of emerging threats and defensive techniques. When you partner with Oberon Services, you gain access to a dedicated team of experts committed to your organization's security.
                 </p>
              </div>
            </Reveal>
         </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-[#020617]/90 backdrop-blur-sm text-center">
         <div className="max-w-7xl mx-auto px-4">
            <Reveal direction="up">
              <Globe size={64} className="text-brand-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Serving Organizations Worldwide</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                 From our state-of-the-art Security Operations Center, we provide 24/7 protection to enterprise clients across industries including finance, healthcare, technology, and government sectors.
              </p>
            </Reveal>
         </div>
      </section>
    </motion.div>
  );
};

export default About;