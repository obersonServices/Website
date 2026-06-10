import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * StatsChart — isolated leaf component rendering the animated bar chart
 * under the Live Threat Monitor. Its own setInterval never causes
 * the parent Home tree to re-render.
 */
const StatsChart: React.FC = () => {
  const [stats, setStats] = useState<number[]>([40, 65, 30, 80, 55, 90, 45, 70, 60, 35]);

  useEffect(() => {
    const id = setInterval(() => {
      setStats(prev => prev.map(() => Math.floor(Math.random() * 80) + 10));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-6 bg-slate-100 dark:bg-slate-950 rounded-lg p-4 flex justify-between items-end h-32 relative overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      {stats.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: '10%' }}
          animate={{ height: `${h}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-1.5 bg-brand-accent/70 rounded-t-sm"
        />
      ))}
    </div>
  );
};

export default StatsChart;
