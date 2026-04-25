import React, { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Logo {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Partner logos',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const duration = speed;
  const directionMultiplier = direction === 'left' ? -1 : 1;

  const renderLogo = (logo: Logo, index: number) => {
    const logoContent = logo.node ? (
      <div 
        style={{ height: logoHeight, width: 'auto' }}
        className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
      >
        {logo.node}
      </div>
    ) : logo.src ? (
      <img
        src={logo.src}
        alt={logo.alt || `Logo ${index + 1}`}
        style={{ height: logoHeight, width: 'auto' }}
        className="object-contain"
      />
    ) : null;

    const logoElement = (
      <motion.div
        key={`${index}-original`}
        className={`flex-shrink-0 flex items-center justify-center ${
          scaleOnHover ? 'hover:scale-110 transition-transform duration-200' : ''
        }`}
        style={{ marginRight: gap }}
        whileHover={scaleOnHover ? { scale: 1.1 } : undefined}
        title={logo.title}
      >
        {logoContent}
      </motion.div>
    );

    if (logo.href) {
      return (
        <a
          key={`${index}-link`}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-target"
        >
          {logoElement}
        </a>
      );
    }

    return logoElement;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: logoHeight + 20 }}
      aria-label={ariaLabel}
    >
      {/* Fade out edges */}
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 z-10 h-full w-20"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 z-10 h-full w-20"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      {/* Logo animation container */}
      <motion.div
        className={`flex items-center absolute top-1/2 transform -translate-y-1/2 ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        animate={{
          x: [0, directionMultiplier * -100 + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear',
          },
        }}
        style={{
          width: 'fit-content',
        }}
      >
        {/* Original logos */}
        {logos.map((logo, index) => renderLogo(logo, index))}
        
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => renderLogo(logo, index + logos.length))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;