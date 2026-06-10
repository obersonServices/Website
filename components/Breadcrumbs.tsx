import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center space-x-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:text-brand-accent transition-colors"
            title="Home"
          >
            <Home size={14} className="mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center">
              <ChevronRight size={14} className="mx-1.5 text-slate-400" />
              {isLast || !item.path ? (
                <span className="text-slate-800 dark:text-slate-200 select-none font-bold truncate max-w-[180px] sm:max-w-[300px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-brand-accent transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
