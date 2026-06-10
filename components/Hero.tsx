import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, usePresence } from 'framer-motion';
import { ShieldCheck, Lock, Activity, Eye, Server } from 'lucide-react';
import TextReveal from './TextReveal';
import CyberImage from './CyberImage';

export interface HeroSlide {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

interface HeroProps {
  title?: string; // Optional for backward compatibility
  subtitle?: string; // Optional for backward compatibility
  backgroundImage?: string; // Optional for backward compatibility
  slides?: HeroSlide[]; // New prop for futuristic slider
  children?: React.ReactNode; 
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, slides, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresent] = usePresence();
  const HeadingComponent = isPresent ? motion.h1 : motion.div;

  // Support both legacy single slide or new array of slides
  const activeSlides = slides && slides.length > 0 ? slides : [{
    title: title || '',
    subtitle: subtitle || '',
    backgroundImage
  }];

  useEffect(() => {
    if (activeSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
      }, 6000); // 6 second per slide
      return () => clearInterval(interval);
    }
  }, [activeSlides.length]);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Interactive Scroll Animations for text
  const titleSpread = useTransform(scrollYProgress, [0, 0.8], ["-0.02em", "0.15em"]);

  const slide = activeSlides[currentSlide];

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-[#020617]">
      {/* Background Image Slider */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0, y: "10%", scale: 1.1, rotateX: -10 }}
            animate={{ opacity: 1, y: "0%", scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: "-10%", scale: 1.1, rotateX: 10, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 perspective-1000 origin-center"
          >
            {slide.backgroundImage ? (
              <>
                <CyberImage 
                    src={slide.backgroundImage} 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Hero Background ${currentSlide}`}
                    loading="eager"
                    priority={currentSlide === 0}
                />
                <div className="absolute inset-0 bg-slate-950/60 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950"></div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>



      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 w-full">
        <div className="flex flex-col items-center w-full">
          
          {/* Content Slider container */}
          <div className="min-h-[220px] md:min-h-[280px] flex items-center justify-center w-full relative">
             <AnimatePresence mode="wait">
                <motion.div
                   key={`content-${currentSlide}`}
                   initial={{ opacity: 0, rotateX: -90, y: 150, z: -100, filter: "blur(15px)" }}
                   animate={{ opacity: 1, rotateX: 0, y: 0, z: 0, filter: "blur(0px)" }}
                   exit={{ opacity: 0, rotateX: 90, y: -150, z: -100, filter: "blur(15px)" }}
                   transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                   className="absolute w-full max-w-5xl flex flex-col items-center"
                   style={{ transformStyle: "preserve-3d" }}
                >
                   {/* Interactive Text Animations: Color change, Spread, Scroll */}
                   <HeadingComponent 
                      style={{ 
                         letterSpacing: titleSpread
                      }}
                      whileHover={{ 
                         textShadow: "0px 0px 30px rgba(6,182,212,0.8)"
                      }}
                      animate={{
                         backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                         backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
                         letterSpacing: { duration: 0.4, ease: "easeOut" }
                      }}
                      className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold drop-shadow-2xl text-center font-display leading-[1.1] mb-6 cursor-default
                                 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-accent to-white bg-[length:300%_auto]"
                   >
                      {slide.title}
                   </HeadingComponent>
                   <p className="text-lg md:text-2xl max-w-3xl leading-relaxed font-light text-slate-200 drop-shadow-md text-center">
                      {slide.subtitle}
                   </p>
                </motion.div>
             </AnimatePresence>
          </div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.5 }}
             className="mt-12"
          >
             {children && (
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  {children}
                </div>
              )}
          </motion.div>

          {/* Slide Indicators */}
          {activeSlides.length > 1 && (
            <div className="flex justify-center gap-4 mt-16">
              {activeSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative flex items-center justify-center w-12 h-2 rounded-full transition-all duration-500 overflow-hidden ${
                    currentSlide === idx 
                      ? "bg-brand-accent/20" 
                      : "bg-slate-700/50 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                   {currentSlide === idx && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-brand-accent shadow-[0_0_10px_rgba(6,182,212,0.8)] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                   )}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
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