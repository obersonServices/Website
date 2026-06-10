import React, { useState } from 'react';

interface CyberImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  /** When true: skips fade-in skeleton, sets loading=eager & fetchpriority=high (LCP optimization) */
  priority?: boolean;
}

const CyberImage: React.FC<CyberImageProps> = ({ 
  src, 
  fallbackSrc = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60", // Generic Data Center
  alt = "Cybersecurity visual",
  className = "",
  loading,
  priority = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  // Priority images skip the loading skeleton entirely
  const [isLoading, setIsLoading] = useState(!priority);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Resolve loading attribute: priority forces eager, otherwise default to lazy
  const resolvedLoading: React.ImgHTMLAttributes<HTMLImageElement>['loading'] =
    priority ? 'eager' : (loading ?? 'lazy');

  return (
    <>
      {/* Skeleton placeholder — hidden for priority images */}
      {!priority && (
        <div 
          className={`bg-slate-800 animate-pulse absolute inset-0 z-0 ${isLoading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} 
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={resolvedLoading}
        {...(priority ? { fetchPriority: 'high' } : {})}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
    </>
  );
};

export default CyberImage;