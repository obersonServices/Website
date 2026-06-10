import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, Users, Zap, ArrowRight, ShieldCheck, Lock, Activity, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import Marquee from '../components/Marquee';
import CyberImage from '../components/CyberImage';
import SEO from '../components/SEO';
import LiveThreatMonitor from '../components/LiveThreatMonitor';
import StatsChart from '../components/StatsChart';

const Home: React.FC = () => {

   const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.oberon-services.com/#organization",
      "name": "Oberon Services",
      "alternateName": "Oberon Security",
      "url": "https://www.oberon-services.com",
      "logo": "https://www.oberon-services.com/logo-dark.png",
      "email": "security@oberon-services.com",
      "telephone": "+880-1720-596676",
      "description": "Oberon Services is a Managed Security Service Provider (MSSP) offering 24/7 SOC monitoring, incident response, compliance consulting, and cyber readiness training.",
      "areaServed": ["BD", "Worldwide"],
      "knowsAbout": ["Cybersecurity", "Managed SOC", "SIEM", "Incident Response", "ISO 27001", "SOC 2", "PCI DSS", "GDPR", "HIPAA", "Zero Trust"],
      "serviceOutput": "Managed Security Services",
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+880-1720-596676",
          "email": "security@oberon-services.com",
          "availableLanguage": "English",
          "hoursAvailable": "Mo-Su 00:00-24:00"
        },
        {
          "@type": "ContactPoint",
          "contactType": "emergency",
          "telephone": "+880-1720-596676",
          "email": "security@oberon-services.com",
          "availableLanguage": "English",
          "hoursAvailable": "Mo-Su 00:00-24:00"
        }
      ]
   };

   const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Managed Security Operations Center (SOC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Managed SOC is a team of cybersecurity experts who monitor your entire IT infrastructure 24/7/365 using advanced SIEM technology. They detect, investigate, and respond to threats in real time, acting as your always-on security shield."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly does Oberon respond to a critical cyber incident?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oberon Services guarantees a response time of under 15 minutes for Critical (Severity 1) incidents such as active breaches or data exfiltration events, as defined in our Service Level Agreement (SLA)."
          }
        },
        {
          "@type": "Question",
          "name": "What compliance frameworks does Oberon support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oberon Services provides expert guidance and gap analysis for ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, and the NIST Cybersecurity Framework (CSF). We guide you from assessment to audit readiness."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Cyber Tabletop Exercise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Cyber Tabletop Exercise (TTX) is a facilitator-led, discussion-based session where your team walks through their roles and decision-making during a simulated cyber incident. It validates your Incident Response Plan without disrupting live systems."
          }
        },
        {
          "@type": "Question",
          "name": "Does Oberon offer private AI solutions that keep data on-premise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Oberon's Personalized AI Solutions deploy a private Large Language Model (LLM) trained exclusively on your company's internal data, hosted on-premise or in a private cloud. Zero data is sent to external AI providers."
          }
        }
      ]
   };

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="w-full overflow-hidden bg-slate-50 dark:bg-transparent"
      >
         <SEO 
            title="Oberon Services | Managed SOC, Cyber Defense & 24/7 Threat Detection | MSSP"
            description="Oberon Services is a trusted MSSP delivering 24/7 Managed SOC, real-time threat detection, compliance gap analysis (ISO 27001, SOC 2, PCI DSS), and cyber readiness training. Request a free consultation."
            schema={[organizationSchema, faqSchema]}
         />
         <Hero
            slides={[
               {
                  title: "Managed Security. Trusted Defense.",
                  subtitle: "We help organizations build resilient security postures - ensuring continuity, trust, and confidence in an evolving digital landscape.",
                  backgroundImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
               },
               {
                  title: "24/7 SOC Operations.",
                  subtitle: "Continuous monitoring, rapid threat detection, and expert incident response by our dedicated security analysts.",
                  backgroundImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
               },
               {
                  title: "Cyber Security Incident Readiness Training.",
                  subtitle: "Empower your corporate employees with realistic drills, tabletop exercises, and comprehensive security awareness.",
                  backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
               }
            ]}
         >
            <Link to="/services" className="px-8 py-4 bg-brand-accent hover:bg-cyan-500 text-slate-900 font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
               Explore All Services
            </Link>
         </Hero>

         {/* Tech Stack Marquee */}
         <div className="bg-white dark:bg-slate-900/30 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <Marquee items={['SIEM', 'EDR', 'SOAR', 'Threat Intel', 'Cloud Security', 'Zero Trust', 'Compliance', 'Forensics', 'Cyber Exercise', 'Incident Response']} speed={20} />
         </div>

         {/* Why Choose Oberon Services */}
         <section className="py-24 relative bg-slate-100/50 dark:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="mb-12 max-w-3xl">
                  <Reveal>
                     <div className="flex items-center space-x-2 mb-4">
                        <span className="h-px w-8 bg-brand-accent"></span>
                        <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Why Oberon</span>
                     </div>
                     <h2 className="text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white leading-tight">
                        Adaptive security engineered to anticipate tomorrow's threats today.
                     </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                     <p className="text-lg font-normal text-slate-700 dark:text-slate-400 leading-relaxed">
                        We combine cutting-edge technology with human expertise to deliver security outcomes that protect what matters most.
                     </p>
                  </Reveal>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
                  {/* Large Card: 24/7 Security */}
                  <div className="md:col-span-6 lg:col-span-8 h-[350px]">
                     <Reveal className="h-full">
                        <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 dark:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                           <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-0 dark:opacity-90 group-hover:opacity-10 dark:group-hover:opacity-100">
                              <CyberImage
                                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                 className="w-full h-full object-cover"
                                 alt="SOC Background"
                              />
                           </div>
                           {/* Gradient */}
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-100/10 via-transparent to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent transition-opacity duration-500"></div>

                           <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-accent/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                           <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/30 backdrop-blur-md border border-blue-200 dark:border-blue-400/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                 <Activity size={28} />
                              </div>
                              <div>
                                 <h3 className="text-2xl font-bold mb-2 font-display text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300 group-hover:text-blue-600 dark:group-hover:text-white">24/7 Security Operations</h3>
                                 <p className="text-slate-700 dark:text-slate-200 max-w-md font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-relaxed">Round-the-clock monitoring and response by certified security professionals using our state-of-the-art SOC.</p>
                              </div>
                           </div>
                        </div>
                     </Reveal>
                  </div>

                  {/* Tall Card: Rapid Response */}
                  <div className="md:col-span-3 lg:col-span-4 row-span-2 h-full min-h-[350px]">
                     <Reveal delay={0.1} className="h-full">
                        <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 dark:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
                           <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-0 dark:opacity-60 group-hover:opacity-10 dark:group-hover:opacity-80">
                              <CyberImage
                                 src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
                                 className="w-full h-full object-cover"
                                 alt="Chip Background"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/50 dark:from-slate-900/60 dark:via-slate-900/90 dark:to-slate-950"></div>
                           <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                           <div className="relative z-10 p-8 flex flex-col h-full">
                              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/30 backdrop-blur-md border border-emerald-200 dark:border-emerald-400/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                 <Zap size={28} />
                              </div>
                              <h3 className="text-2xl font-bold mb-4 font-display text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300 group-hover:text-emerald-600 dark:group-hover:text-white">Rapid Response</h3>
                              <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                 Swift incident response with industry-leading mean time to detection (MTTD).
                              </p>
                              <div className="mt-auto space-y-4">
                                 <div>
                                    <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">
                                       <span>MTTD</span>
                                       <span className="text-emerald-700 dark:text-emerald-400">&lt; 15m</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                       <div className="h-full bg-emerald-500 w-[15%] group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                                    </div>
                                 </div>
                                 <div>
                                    <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">
                                       <span>MTTR</span>
                                       <span className="text-emerald-700 dark:text-emerald-400">&lt; 2hrs</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                       <div className="h-full bg-emerald-500 w-[40%] group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Reveal>
                  </div>

                  {/* Medium Card: Expert Team */}
                  <div className="md:col-span-3 lg:col-span-4 h-[250px]">
                     <Reveal delay={0.2} className="h-full">
                        <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 dark:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
                           <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-0 dark:opacity-60 group-hover:opacity-10 dark:group-hover:opacity-80">
                              <CyberImage
                                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                 className="w-full h-full object-cover"
                                 alt="Team Background"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 via-white/80 to-transparent dark:from-slate-950 dark:via-slate-900/80 dark:to-transparent"></div>
                           <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                           <div className="relative z-10 p-8">
                              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-500/30 backdrop-blur-md border border-violet-200 dark:border-violet-400/30 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-300 mb-4 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                 <Users size={24} />
                              </div>
                              <h3 className="text-xl font-bold mb-2 font-display text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300 group-hover:text-violet-600 dark:group-hover:text-white">Expert Team</h3>
                              <p className="text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                 Seasoned analysts with decades of combined experience in threat detection and compliance.
                              </p>
                           </div>
                        </div>
                     </Reveal>
                  </div>

                  {/* Medium Card: Global Reach */}
                  <div className="md:col-span-3 lg:col-span-4 h-[250px]">
                     <Reveal delay={0.3} className="h-full">
                        <div className="h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 dark:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
                           <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-0 dark:opacity-60 group-hover:opacity-10 dark:group-hover:opacity-80">
                              <CyberImage
                                 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                 className="w-full h-full object-cover"
                                 alt="Global Background"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-tl from-slate-50/50 via-white/80 to-transparent dark:from-slate-950 dark:via-slate-900/80 dark:to-transparent"></div>
                           <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-3xl transition-colors duration-500 box-border z-20"></div>

                           <div className="relative z-10 p-8">
                              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/30 backdrop-blur-md border border-amber-200 dark:border-amber-400/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-300 mb-4 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                 <Globe size={24} />
                              </div>
                              <h3 className="text-xl font-bold mb-2 font-display text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300 group-hover:text-amber-600 dark:group-hover:text-white">Global Reach</h3>
                              <p className="text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                 Protecting assets across on-premise, cloud, and hybrid environments worldwide.
                              </p>
                           </div>
                        </div>
                     </Reveal>
                  </div>
               </div>
            </div>
         </section>

         {/* Managed Security Services Highlight */}
         <section className="py-32 bg-white/60 dark:bg-slate-900/30 backdrop-blur-sm border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-4xl mx-auto mb-20">
                  <Reveal>
                     <h2 className="text-5xl md:text-6xl font-bold mb-8 font-display text-slate-900 dark:text-white">Managed Security Services</h2>
                     <p className="text-xl font-normal text-slate-700 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        We don't just offer tools; we offer a partnership. Our managed services are designed to act as an extension of your team, providing the expertise and technology needed to secure your future.
                     </p>
                     <div className="mt-10">
                        <Link to="/services" className="group inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-full hover:border-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-md">
                           <span className="font-bold text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">View Complete Portfolio</span>
                           <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-slate-900 transition-colors">
                              <ArrowRight size={20} />
                           </div>
                        </Link>
                     </div>
                  </Reveal>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                     { icon: ShieldAlert, title: "Managed SOC", desc: "24/7 security monitoring and management by our expert team.", link: "/services/soc", color: "cyan" },
                     { icon: ShieldCheck, title: "Cyber Exercises", desc: "Realistic exercises to build security awareness and validate readiness.", link: "/exercises", color: "emerald" },
                     { icon: Lock, title: "Policy & Strategy", desc: "Expert guidance on security policy development and frameworks.", link: "/services/policy", color: "violet" }
                  ].map((svc, idx) => (
                     <Reveal key={idx} delay={idx * 0.1} className="h-full">
                        <SpotlightCard className="h-full group p-10 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-500 border border-slate-200 dark:border-slate-800" spotlightColor={svc.color === 'cyan' ? 'rgba(6, 182, 212, 0.2)' : svc.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(139, 92, 246, 0.2)'}>
                           <div className="flex flex-col h-full">
                              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                                 <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${svc.color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-500' :
                                    svc.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-500' :
                                       'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-500'
                                    }`}>
                                    <svc.icon size={32} />
                                 </div>
                              </div>
                              <h3 className="text-3xl font-bold mb-4 font-display text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">{svc.title}</h3>
                              <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                                 {svc.desc}
                              </p>
                              <Link to={svc.link} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors border-b-2 border-transparent group-hover:border-brand-accent pb-1">
                                 Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                              </Link>
                           </div>
                        </SpotlightCard>
                     </Reveal>
                  ))}
               </div>
            </div>
         </section>

         {/* Enterprise-Grade Protection */}
         <section className="py-32 bg-slate-50/50 dark:bg-transparent overflow-hidden backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mb-16">
                  <Reveal direction="right">
                     <div className="flex items-center space-x-2 mb-4">
                        <span className="h-px w-8 bg-brand-accent"></span>
                        <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Capabilities</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-slate-900 dark:text-white leading-tight">
                        Enterprise-Grade Protection
                     </h2>
                     <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 leading-relaxed font-medium">
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
                                 <div className="h-3 w-3 rounded-full bg-brand-accent group-hover:scale-150 transition-transform duration-300 shadow-md"></div>
                                 <div className="h-full w-px bg-slate-100 dark:bg-slate-800 my-2"></div>
                              </div>
                              <div className="pb-8">
                                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                 <p className="text-slate-700 dark:text-slate-400">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Reveal>
               </div>

               <Reveal direction="up" delay={0.2}>
                  <div className="relative max-w-5xl mx-auto">
                     <div className="absolute -inset-10 bg-brand-accent/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                     <SpotlightCard className="p-8 backdrop-blur-xl bg-white dark:bg-slate-900/80 shadow-2xl shadow-slate-200/50 dark:shadow-2xl border border-slate-200 dark:border-slate-700/50">
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
                              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-500 font-bold">SYSTEM ACTIVE</span>
                           </div>
                        </div>

                         <div>
                           {/* Isolated leaf: owns its own state + interval — no parent re-renders */}
                           <LiveThreatMonitor />

                           {/* Isolated leaf: owns stats animation interval */}
                           <StatsChart />
                         </div>
                     </SpotlightCard>
                  </div>
               </Reveal>
            </div>
         </section>
      </motion.div >
   );
};

export default Home;