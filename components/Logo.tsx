import React from 'react';

interface LogoProps {
  className?: string;
  forceDark?: boolean; // New prop to force dark mode styles
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto", forceDark = false }) => {
  // Unique ID prefix to prevent gradient conflicts
  const idPrefix = React.useId().replace(/:/g, "");

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <img
        src="/logo-light.png"
        alt="Oberon Services Logo"
        className={`w-full h-full object-contain mix-blend-multiply dark:hidden ${forceDark ? 'hidden' : ''}`}
      />
      <img
        src="/logo-dark.png"
        alt="Oberon Services Logo"
        className={`w-full h-full object-contain mix-blend-screen hidden dark:block ${forceDark ? '!block' : ''}`}
      />
    </div>
  );
};

export default Logo;