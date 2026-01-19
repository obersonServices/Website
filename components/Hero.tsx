import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string; // Optional custom background URL
  children?: React.ReactNode; // For extra buttons/content
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {backgroundImage ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50"></div>
        )}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            {title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {subtitle}
          </p>
          {children && (
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {children}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-brand-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;