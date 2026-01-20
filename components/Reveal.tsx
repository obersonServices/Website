import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%", 
  delay = 0, 
  direction = "up",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getVariants = () => {
    switch (direction) {
      case "down": return { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } };
      case "up": 
      default: return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={`relative ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};