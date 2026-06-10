import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXERCISES, SERVICES } from '../constants';
import { ArrowLeft, Clock, Users, FileText, Target, ClipboardList, TrendingUp, AlertTriangle, CheckSquare, CheckCircle, Layers } from 'lucide-react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const exerciseMeta: Record<string, { title: string; description: string }> = {
  tabletop: {
    title: 'Cyber Tabletop Exercise (TTX) for Incident Response | Oberon Services',
    description: 'Facilitator-led tabletop exercises to walk your team through roles, decisions, and escalation paths during a simulated cyber incident. Validate your IR plan without any system downtime.'
  },
  ransomware: {
    title: 'Ransomware Attack Simulation & Response Readiness | Oberon',
    description: 'Simulate a full ransomware attack lifecycle — encryption, ransom demand, and recovery. Test backup procedures, crisis communications, and decision-making under pressure.'
  },
  'incident-response': {
    title: 'Incident Response Drills & Cyber Readiness Testing | Oberon Services',
    description: 'Hands-on IR drills for SOC and security teams. Measure detection and containment performance (MTTD/MTTR) against realistic breach scenarios. Pair with Ransomware Simulations for full readiness.'
  },
  'phishing-sim': {
    title: 'Spear Phishing Simulation & Social Engineering Testing | Oberon',
    description: 'Test employee resilience against targeted spear-phishing, pretexting, and social engineering attacks. Receive detailed click rates, risk scores, and actionable LMS training recommendations.'
  },
  'crisis-management': {
    title: 'Crisis Management Tabletop for Executives & Boards | Oberon',
    description: 'Prepare your C-suite and board for high-pressure cyber crisis decisions: regulatory disclosure, reputation management, ransom negotiation, and media communications.'
  },
  'blue-team': {
    title: 'Blue Team & SOC Readiness Simulation | Oberon Services',
    description: 'Intensive blue team defense simulation against live adversary techniques in a replica network environment. Test your SOC\'s detection, containment, and threat hunting capabilities.'
  }
};

const getRelatedServices = (exerciseId: string) => {
  switch (exerciseId) {
    case 'tabletop':
      return ['workshops', 'policy', 'compliance'];
    case 'ransomware':
      return ['soc', 'policy', 'workshops'];
    case 'incident-response':
      return ['soc', 'siem', 'vuln-mgmt'];
    case 'phishing-sim':
      return ['phishing', 'policy'];
    case 'crisis-management':
      return ['policy', 'compliance', 'workshops'];
    case 'blue-team':
      return ['soc', 'siem', 'cloud'];
    default:
      return [];
  }
};

const getRelatedExercises = (exerciseId: string): string[] => {
  switch (exerciseId) {
    case 'tabletop':
      return ['ransomware', 'crisis-management'];
    case 'ransomware':
      return ['incident-response', 'tabletop'];
    case 'incident-response':
      return ['ransomware', 'blue-team'];
    case 'phishing-sim':
      return ['tabletop', 'incident-response'];
    case 'crisis-management':
      return ['tabletop', 'ransomware'];
    case 'blue-team':
      return ['incident-response', 'ransomware'];
    default:
      return [];
  }
};

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = EXERCISES.find((ex) => ex.id === id);

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-white bg-brand-light dark:bg-brand-dark">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Exercise Not Found</h2>
          <Link to="/exercises" className="text-brand-accent hover:underline">Back to Exercises</Link>
        </div>
      </div>
    );
  }

  const meta = exerciseMeta[exercise.id] || {
    title: `${exercise.title} | Oberon Security`,
    description: exercise.shortDescription
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": exercise.title,
    "description": exercise.fullDescription,
    "educationalLevel": "Professional",
    "areaServed": "Worldwide",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.oberon-services.com/#organization",
      "name": "Oberon Services",
      "url": "https://www.oberon-services.com"
    }
  };

  const relatedServiceIds = getRelatedServices(exercise.id);
  const relatedServices = SERVICES.filter(s => relatedServiceIds.includes(s.id));
  const relatedExerciseIds = getRelatedExercises(exercise.id);
  const relatedExercises = EXERCISES.filter(e => relatedExerciseIds.includes(e.id));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.oberon-services.com" },
      { "@type": "ListItem", "position": 2, "name": "Exercises", "item": "https://www.oberon-services.com/exercises" },
      { "@type": "ListItem", "position": 3, "name": exercise.title, "item": `https://www.oberon-services.com/exercises/${exercise.id}` }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": meta.title,
    "description": meta.description,
    "url": `https://www.oberon-services.com/exercises/${exercise.id}`,
    "publisher": {
      "@type": "Organization",
      "name": "Oberon Services",
      "logo": "https://www.oberon-services.com/logo-dark.png"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-light dark:bg-brand-dark pb-24"
    >
      <SEO 
        title={meta.title}
        description={meta.description}
        ogImage={exercise.image}
        schema={[courseSchema, breadcrumbSchema, webPageSchema]}
      />
      <Hero 
        title={exercise.title} 
        subtitle={exercise.shortDescription}
        backgroundImage={exercise.image}
      >
        <div className="flex flex-wrap justify-center gap-3 mt-4">
           <span className="px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur border border-slate-500 text-brand-accent text-sm font-bold">
             {exercise.format}
           </span>
           <span className="px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur border border-slate-500 text-slate-200 text-sm font-bold flex items-center">
             <Clock size={16} className="mr-2" /> {exercise.duration}
           </span>
        </div>
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs 
          items={[
            { label: 'Exercises', path: '/exercises' },
            { label: exercise.title }
          ]}
        />
        <Link to="/exercises" className="inline-flex items-center text-slate-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to List
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <FileText className="mr-3 text-brand-secondary" /> Scenario Overview
              </h3>
              <p className="text-lg leading-relaxed bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400">
                {exercise.fullDescription}
              </p>
            </section>

            {/* Methodology (Planning Cycle) */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <ClipboardList className="mr-3 text-brand-accent" /> How It Works
              </h3>
              <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-4 space-y-8">
                 {exercise.methodology.map((step, idx) => (
                   <div key={idx} className="relative pl-8">
                     <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white dark:bg-brand-dark border-2 border-brand-accent"></span>
                     <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.step}</h4>
                     <p className="text-slate-600 dark:text-slate-400 mt-1 font-medium">{step.description}</p>
                   </div>
                 ))}
              </div>
            </section>
            
            {/* Expected Outcomes (New) */}
            <section>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <CheckSquare className="mr-3 text-brand-success" /> Key Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {exercise.outcomes?.map((outcome, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
                       <CheckCircle size={18} className="text-brand-success mt-0.5 mr-3 shrink-0" />
                       <span className="text-slate-700 dark:text-slate-300 font-medium">{outcome}</span>
                    </div>
                 ))}
              </div>
            </section>

            {/* Objectives */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                  <Target className="mr-3 text-brand-success" /> Training Objectives
                </h3>
                <ul className="space-y-4">
                  {exercise.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 font-medium">
                      <span className="h-2 w-2 rounded-full bg-brand-success mt-2 mr-3 shrink-0"></span>
                      {obj}
                    </li>
                  ))}
                </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             {/* Participants */}
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center mb-4">
                  <Users className="mr-2 text-brand-secondary" /> Who Should Attend
                </h3>
                <ul className="space-y-3">
                  {exercise.participants.map((person, i) => (
                    <li key={i} className="flex items-center text-slate-600 dark:text-slate-300 text-sm bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded font-medium border border-slate-100 dark:border-slate-700">
                      {person}
                    </li>
                  ))}
                </ul>
             </div>

             {/* Related Services (SEO Contextual Linking) */}
             {relatedServices.length > 0 && (
               <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center mb-4 font-display">
                   <Layers className="mr-2 text-brand-accent animate-pulse" /> Related Services
                 </h3>
                 <ul className="space-y-3">
                   {relatedServices.map(svc => (
                     <li key={svc.id}>
                       <Link to={`/services/${svc.id}`} className="flex items-center text-slate-600 dark:text-slate-300 text-sm bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded font-medium border border-slate-100 dark:border-slate-700 hover:border-brand-accent transition-colors font-sans">
                         <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2 shrink-0"></span>
                         {svc.title}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             )}

             {/* Related Exercises (SEO Cross-Linking) */}
             {relatedExercises.length > 0 && (
               <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center mb-4 font-display">
                   <Layers className="mr-2 text-brand-secondary animate-pulse" /> Related Exercises
                 </h3>
                 <ul className="space-y-3">
                   {relatedExercises.map(ex => (
                     <li key={ex.id}>
                       <Link to={`/exercises/${ex.id}`} className="flex items-center text-slate-600 dark:text-slate-300 text-sm bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded font-medium border border-slate-100 dark:border-slate-700 hover:border-brand-secondary transition-colors font-sans">
                         <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mr-2 shrink-0"></span>
                         {ex.title}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             )}

             {/* Prerequisites (New) */}
             <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center mb-4">
                  <AlertTriangle className="mr-2 text-amber-500" /> Prerequisites
                </h3>
                <ul className="space-y-2">
                   {exercise.prerequisites?.map((pre, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                         <span className="mr-2">•</span> {pre}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Business Value */}
             <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg text-white">
                <h3 className="text-lg font-bold flex items-center mb-4">
                  <TrendingUp className="mr-2 text-brand-accent" /> Value to Business
                </h3>
                <ul className="space-y-4">
                  {exercise.businessValue.map((val, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <span className="text-brand-accent mr-2 font-bold">»</span> {val}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <Link to="/contact" className="block w-full text-center py-3 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors">
                    Schedule Exercise
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExerciseDetail;