import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';

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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        {backgroundImage ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* 
                CRITICAL FIX: 
                Enforce a strong dark overlay regardless of theme to ensure the white text is always visible.
                We use a gradient to make it look intentional and elegant.
            */}
            <div className="absolute inset-0 bg-slate-950/60 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950"></div>
        )}
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="flex flex-col items-center">
          <div className="mb-6 overflow-hidden">
             {/* Text is forced to white for visibility against the dark overlay */}
             <TextReveal 
                text={title} 
                className="text-5xl md:text-8xl font-bold tracking-tight drop-shadow-2xl justify-center text-center text-white"
             />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light text-slate-200 drop-shadow-md"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8, duration: 0.5 }}
          >
             {children && (
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  {children}
                </div>
              )}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, opacity: { duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;