import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXERCISES } from '../constants';
import { ArrowLeft, Clock, Users, FileText, Target, ClipboardList, TrendingUp, AlertTriangle, CheckSquare, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-light dark:bg-brand-dark pb-24"
    >
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