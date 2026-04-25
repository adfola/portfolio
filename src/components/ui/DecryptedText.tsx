import React, { useEffect, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view";
  revealDirection?: "left" | "right" | "center";
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 15,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  revealDirection = "left"
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const encrypt = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iterations = 0;
    
    const animate = () => {
      setDisplayText(prevText => {
        return text.split("").map((char, index) => {
          const shouldReveal = 
            revealDirection === "left" ? index < iterations :
            revealDirection === "right" ? index >= text.length - iterations :
            Math.abs(Math.floor(text.length / 2) - index) < iterations;
            
          if (shouldReveal) {
            return char;
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }).join("");
      });
      
      iterations++;
      
      if (iterations <= maxIterations) {
        intervalRef.current = setTimeout(animate, speed);
      } else {
        setDisplayText(text);
        setIsAnimating(false);
      }
    };
    
    animate();
  };

  useEffect(() => {
    if (animateOn === "view") {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isAnimating) {
              encrypt();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observerRef.current.observe(elementRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animateOn, isAnimating]);

  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      encrypt();
    }
  };

  return (
    <span
      ref={elementRef}
      className={`${parentClassName} ${isAnimating ? encryptedClassName : className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;