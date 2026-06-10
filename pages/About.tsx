import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, Award, Users, Target, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 dark:bg-transparent"
    >
      <SEO 
        title="About Oberon Services | Trusted MSSP & Cybersecurity Experts"
        description="Oberon Services is a trusted Managed Security Service Provider (MSSP) in Bangladesh delivering 24/7 SOC monitoring, compliance consulting, ISO 27001 readiness, and cyber resilience training for enterprises."
        ogImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Oberon Services",
            "url": "https://www.oberon-services.com/about",
            "description": "Oberon Services is a Managed Security Service Provider (MSSP) delivering 24/7 SOC monitoring, compliance consulting, and cyber resilience training.",
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.oberon-services.com/#organization",
              "name": "Oberon Services",
              "url": "https://www.oberon-services.com",
              "logo": "https://www.oberon-services.com/logo-dark.png"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.oberon-services.com/#organization",
            "name": "Oberon Services",
            "alternateName": "Oberon Security",
            "url": "https://www.oberon-services.com",
            "logo": "https://www.oberon-services.com/logo-dark.png",
            "description": "Oberon Services is a Managed Security Service Provider (MSSP) offering 24/7 SOC monitoring, incident response, compliance consulting, and cyber readiness training for enterprises worldwide.",
            "email": "security@oberon-services.com",
            "telephone": "+880-1720-596676",
            "foundingDate": "2023",
            "areaServed": ["BD", "Worldwide"],
            "knowsAbout": ["Cybersecurity", "Managed SOC", "SIEM", "Incident Response", "ISO 27001", "SOC 2", "PCI DSS"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House # 31, Road # 02, Block-E, Banasree",
              "addressLocality": "Dhaka",
              "postalCode": "1219",
              "addressCountry": "BD"
            },
            "sameAs": [
              "https://www.linkedin.com/company/oberon-services-ltd/",
              "https://www.facebook.com/profile.php?id=61587299814352"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+880-1720-596676",
              "email": "security@oberon-services.com",
              "availableLanguage": "English",
              "hoursAvailable": "Mo-Su 00:00-24:00"
            }
          }
        ]}
      />
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
      <section className="py-24 bg-white/60 dark:bg-[#0B1120]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            {/* Mission Card */}
            <Reveal className="h-full">
              <SpotlightCard className="h-full p-10 shadow-xl shadow-slate-200/50 dark:shadow-lg relative overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Target size={150} />
                </div>
                <div className="h-14 w-14 rounded-full bg-cyan-100 dark:bg-brand-accent/10 flex items-center justify-center text-cyan-600 dark:text-brand-accent mb-6 shrink-0">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Our Mission</h2>
                <p className="leading-relaxed font-medium text-slate-700 dark:text-slate-400 flex-grow">
                  To provide enterprise-grade security services that enable organizations to operate with confidence in an increasingly hostile digital environment. Our mission is to combine cutting-edge technology with human expertise to detect, respond to, and neutralize cyber threats before they impact business operations.
                </p>
              </SpotlightCard>
            </Reveal>

            {/* Vision Card */}
            <Reveal delay={0.2} className="h-full">
              <SpotlightCard className="h-full p-10 shadow-xl shadow-slate-200/50 dark:shadow-lg relative overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Eye size={150} />
                </div>
                <div className="h-14 w-14 rounded-full bg-emerald-100 dark:bg-brand-success/10 flex items-center justify-center text-emerald-600 dark:text-brand-success mb-6 shrink-0">
                  <Eye size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Our Vision</h2>
                <p className="leading-relaxed font-medium text-slate-700 dark:text-slate-400 flex-grow">
                  To be the most trusted name in Managed Security Services, recognized for our unwavering commitment to protecting our clients and advancing the state of cybersecurity. We envision a world where every organization, regardless of size, has access to world-class cybersecurity protection.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-y border-slate-200 dark:border-slate-800 relative bg-slate-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Our Core Values</h2>
            <p className="mb-16 font-medium text-slate-600 dark:text-slate-400">These principles guide everything we do at Oberon Services.</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {[
              { icon: Shield, title: "Security First", desc: "Every decision we make prioritizes the security of our clients' digital assets." },
              { icon: Eye, title: "Vigilance", desc: "Constant monitoring and proactive threat hunting to stay ahead of attackers." },
              { icon: Heart, title: "Trust", desc: "Building lasting partnerships through transparency, integrity, and reliability." },
              { icon: Target, title: "Excellence", desc: "Pursuing the highest standards in everything we do, from detection to response." }
            ].map((val, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <div className="h-full bg-white dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-brand-accent transition-colors shadow-lg shadow-slate-200/50 dark:shadow-sm flex flex-col items-center hover:-translate-y-2 duration-300">
                  <div className="mx-auto h-12 w-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-700 dark:text-brand-accent mb-4 shrink-0">
                    <val.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{val.title}</h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex-grow">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">Proven Track Record</h2>
            <p className="text-slate-400 mb-16">Data loading from real-time analytics...</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years of Experience" },
              { label: "Enterprise Clients" },
              { label: "Threats Blocked" },
              { label: "Client Retention" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors h-40 flex flex-col items-center justify-center">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <div className="flex space-x-1.5 items-center h-full">
                      <motion.div
                        animate={{ height: [8, 32, 8], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0, ease: "easeInOut" }}
                        className="w-2 bg-brand-accent rounded-full"
                      />
                      <motion.div
                        animate={{ height: [8, 32, 8], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.15, ease: "easeInOut" }}
                        className="w-2 bg-brand-accent rounded-full"
                      />
                      <motion.div
                        animate={{ height: [8, 32, 8], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.3, ease: "easeInOut" }}
                        className="w-2 bg-brand-accent rounded-full"
                      />
                      <motion.div
                        animate={{ height: [8, 32, 8], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.45, ease: "easeInOut" }}
                        className="w-2 bg-brand-accent rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">{stat.label}</div>
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
            <div className="h-16 w-16 mx-auto mb-6 bg-blue-100 dark:bg-brand-secondary/10 rounded-full flex items-center justify-center text-blue-600 dark:text-brand-secondary">
              <Award size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Expert Security Professionals</h2>
            <SpotlightCard className="p-8 shadow-xl shadow-slate-200/50 dark:shadow-xl relative text-left bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <p className="leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-400">
                Our team comprises seasoned security professionals with backgrounds spanning threat intelligence, incident response, security architecture, and compliance. With certifications including CISSP, CISM, CEH, OSCP, and more, our analysts bring deep expertise to every engagement.
              </p>
              <p className="leading-relaxed font-medium text-slate-700 dark:text-slate-400">
                We continuously invest in our team's development, ensuring they stay at the forefront of emerging threats and defensive techniques. When you partner with Oberon Services, you gain access to a dedicated team of experts committed to your organization's security.
              </p>
            </SpotlightCard>
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