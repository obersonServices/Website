import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', speed = 20 }) => {
  return (
    <div className="relative flex overflow-hidden py-4 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="mx-8 flex items-center">
            <span className="text-xl md:text-2xl font-display font-bold text-slate-400 dark:text-slate-700 uppercase tracking-widest">
              {item}
            </span>
            <span className="ml-8 text-brand-accent/50 text-xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;