import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { SERVICES, EXERCISES } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      path: '/services',
      dropdownItems: SERVICES.map(s => ({ label: s.title, path: `/services/${s.id}` }))
    },
    {
      label: 'Exercises',
      path: '/exercises',
      dropdownItems: EXERCISES.map(e => ({ label: e.title, path: `/exercises/${e.id}` }))
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-slate-50/95 dark:bg-brand-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-all duration-300 h-28">
      <div className="max-w-full mx-auto px-6 md:px-12 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center group">
            <div className="relative px-2">
              <div className="absolute inset-0 bg-brand-accent/10 dark:bg-brand-accent/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Logo className="h-28 w-auto relative z-10" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdownItems && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:text-brand-accent ${isActive(link.path)
                    ? 'text-brand-accent'
                    : 'text-slate-700 dark:text-slate-300'
                    }`}
                >
                  {link.label}
                  {link.dropdownItems && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdownItems && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl py-4 z-50 overflow-hidden"
                    >
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-6 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-accent dark:hover:text-brand-accent transition-all"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 dark:text-slate-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-dark border-t border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => !link.dropdownItems && setIsOpen(false)}
                    className={`flex items-center justify-between py-2 text-base font-bold uppercase tracking-wider ${isActive(link.path) ? 'text-brand-accent' : 'text-slate-700 dark:text-slate-300'}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdownItems && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-slate-200 dark:border-slate-800">
                      {link.dropdownItems.map(item => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-sm font-medium text-slate-500 hover:text-brand-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;