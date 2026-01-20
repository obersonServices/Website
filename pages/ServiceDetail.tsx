import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle, Target, Briefcase, FileText, Settings, Layers } from 'lucide-react';
import Hero from '../components/Hero';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-white bg-brand-light dark:bg-brand-dark">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-brand-accent hover:underline">Back to Services</Link>
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
        title={service.title} 
        subtitle={service.description}
        backgroundImage={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/services" className="inline-flex items-center text-slate-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">Service Overview</h2>
              <p className="text-lg leading-relaxed font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500">
                {service.fullDescription}
              </p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-brand-accent/50 transition-colors">
                    <CheckCircle className="text-brand-accent mt-1 mr-3 shrink-0" size={20} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* New Deliverables Section */}
             <section className="mb-12">
               <h3 className="text-2xl font-bold mb-6 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">
                  <FileText className="mr-3 text-brand-secondary" /> Deliverables
               </h3>
               <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                     {service.deliverables?.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                           <div className="w-2 h-2 rounded-full bg-brand-secondary mr-3"></div>
                           <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            <section>
               <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200">Business Benefits</h3>
               <ul className="space-y-4">
                 {service.benefits.map((benefit, idx) => (
                   <li key={idx} className="flex items-start p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                     <span className="h-6 w-6 rounded-full bg-brand-success/20 text-brand-success flex items-center justify-center mr-4 shrink-0 mt-0.5">✓</span>
                     <span className="text-slate-700 dark:text-slate-300 text-lg font-medium">{benefit}</span>
                   </li>
                 ))}
               </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Tech Specs Box */}
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-xl">
               <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                  <Settings className="mr-2 text-brand-accent" /> Technical Specs
               </h4>
               <div className="space-y-4">
                  {service.techSpecs?.map((spec, idx) => (
                     <div key={idx} className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                        <span className="text-slate-400 text-sm font-medium">{spec.label}</span>
                        <span className="text-white text-sm font-bold text-right">{spec.value}</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 sticky top-24 shadow-xl shadow-slate-200/50 dark:shadow-lg">
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Target className="mr-2 text-brand-secondary" /> Who Is This For?
                </h4>
                <ul className="space-y-3">
                  {service.whoIsItFor.map((item, idx) => (
                    <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm pl-4 border-l-2 border-slate-300 dark:border-slate-700 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                   <Briefcase className="mr-2 text-brand-accent" /> Ready to engage?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 font-medium">
                  Contact our team to discuss how we can tailor this service to your specific environment.
                </p>
                <Link to="/contact" className="block w-full text-center py-3 bg-brand-accent hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors shadow-md">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;