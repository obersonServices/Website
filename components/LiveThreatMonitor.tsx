import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Static data (defined outside component to avoid recreation on each render) ---
const threatTypes = [
  { threat: "Malware Beacon",        severity: "High"     },
  { threat: "Brute Force",           severity: "Medium"   },
  { threat: "Data Exfiltration",     severity: "Critical" },
  { threat: "DDoS Attempt",          severity: "Critical" },
  { threat: "SQL Injection",         severity: "High"     },
  { threat: "Port Scanning",         severity: "Low"      },
  { threat: "Ransomware Sig",        severity: "Critical" },
  { threat: "Privilege Escalation",  severity: "High"     },
  { threat: "Phishing Attempt",      severity: "Medium"   },
  { threat: "Zero-Day Exploit",      severity: "Critical" },
  { threat: "C2 Communication",      severity: "High"     },
  { threat: "Suspicious Login",      severity: "Medium"   },
] as const;

const generateMockIP = () =>
  `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

type Log = {
  id: number;
  ip: string;
  threat: string;
  severity: string;
  time: string;
};

const mkLog = (index: number, idOverride?: number): Log => {
  const t = threatTypes[index % threatTypes.length];
  return {
    ip: generateMockIP(),
    threat: t.threat,
    severity: t.severity,
    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    id: idOverride ?? Date.now(),
  };
};

const severityClasses = {
  row: {
    Critical: 'border-red-500/30 bg-red-100 dark:bg-red-500/5 text-red-700 dark:text-red-400 font-bold',
    High:     'border-orange-500/30 bg-orange-100 dark:bg-orange-500/5 text-orange-700 dark:text-orange-400 font-bold',
    default:  'border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-300',
  },
  badge: {
    Critical: 'bg-red-200 dark:bg-red-500/10 text-red-800 dark:text-red-500',
    High:     'bg-orange-200 dark:bg-orange-500/10 text-orange-800 dark:text-orange-500',
    Medium:   'bg-yellow-200 dark:bg-yellow-500/10 text-yellow-800 dark:text-yellow-500',
    Low:      'bg-blue-200 dark:bg-blue-500/10 text-blue-800 dark:text-blue-500',
  },
};

const getRowClass = (severity: string) =>
  severity === 'Critical' ? severityClasses.row.Critical
  : severity === 'High'   ? severityClasses.row.High
  : severityClasses.row.default;

const getBadgeClass = (severity: string) =>
  (severityClasses.badge as Record<string, string>)[severity] ?? severityClasses.badge.Low;

// ---- Component ----
const LiveThreatMonitor: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>(() =>
    Array.from({ length: 4 }, (_, i) => mkLog(i, i))
  );

  useEffect(() => {
    const fetchOrMock = async () => {
      try {
        const res = await fetch('https://platform.socradar.com/api/threat/intelligence/socradar_collections', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) throw new Error('API unavailable');
        // If real data arrives, process it here.
      } catch {
        // Fallback: prepend a new mock log, keep last 3
        setLogs(prev => {
          const nextIdx = Math.floor(Math.random() * threatTypes.length);
          return [mkLog(nextIdx), ...prev.slice(0, 3)];
        });
      }
    };

    const id = setInterval(fetchOrMock, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-[320px] flex flex-col justify-end overflow-hidden">
      {/* Column headers */}
      <div className="grid grid-cols-12 gap-2 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-2 p-3 border border-transparent tracking-wider">
        <div className="col-span-2">Time</div>
        <div className="col-span-3">Source</div>
        <div className="col-span-4">Threat Type</div>
        <div className="col-span-3 text-right">Severity</div>
      </div>

      <AnimatePresence mode="popLayout">
        {logs.map(log => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -20, height: 0 }}
            animate={{ opacity: 1, x: 0, height: 'auto' }}
            exit={{ opacity: 0, x: 20, height: 0 }}
            layout
            className={`grid grid-cols-12 gap-2 items-center text-xs font-mono p-3 rounded mb-2 last:mb-0 border transition-colors duration-300 ${getRowClass(log.severity)}`}
          >
            <div className="col-span-2 text-slate-600 dark:text-slate-500 truncate">{log.time}</div>
            <div className="col-span-3 font-semibold truncate text-slate-900 dark:text-slate-300">{log.ip}</div>
            <div className="col-span-4 text-brand-accent truncate font-medium">{log.threat}</div>
            <div className="col-span-3 text-right">
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider inline-block ${getBadgeClass(log.severity)}`}>
                {log.severity}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LiveThreatMonitor;
