'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltedCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

const SPRING_CONFIG = {
  damping: 30,
  stiffness: 100,
  mass: 1
};

const TiltedCard: React.FC<TiltedCardProps> = ({ 
  image, 
  title, 
  subtitle, 
  description,
  className = "",
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation and scale
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), SPRING_CONFIG);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), SPRING_CONFIG);
  const scale = useSpring(1, SPRING_CONFIG);
  
  // Glow position
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Caption position and rotation
  const captionX = useMotionValue(0);
  const captionY = useMotionValue(0);
  const captionOpacity = useSpring(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize mouse position to range [-0.5, 0.5]
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
    
    captionX.set(e.clientX - rect.left);
    captionY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
    captionOpacity.set(1);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    mouseX.set(0);
    mouseY.set(0);
    captionOpacity.set(0);
  };

  return (
    <motion.figure 
      ref={cardRef} 
      className={`tilted-card-figure group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: 1000 }}
    >
      <motion.div 
        className="tilted-card-inner"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
      >
        <motion.img 
          src={image} 
          alt={title} 
          className="tilted-card-img"
        />
        <div className="tilted-card-overlay">
          {subtitle && (
            <span className="font-label text-[10px] tracking-[0.2em] text-secondary mb-2 block uppercase font-bold">
              {subtitle}
            </span>
          )}
          <h4 className="font-headline text-4xl text-primary uppercase tracking-tighter">
            {title}
          </h4>
          {description && (
            <p className="text-on-surface-variant font-body text-[10px] leading-relaxed font-light opacity-80 mt-2">
              {description}
            </p>
          )}
        </div>
        
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            background: `radial-gradient(400px circle at var(--tw-glow-x) var(--tw-glow-y), rgba(132, 0, 255, 0.1), transparent 100%)`,
            // Custom CSS properties aren't directly supported in motion.div style object for radial gradient center
            // We'll use a slightly different approach or just use the same glow logic if possible
          }}
          // Fallback: Using Framer Motion's ability to drive CSS variables
          animate={{
            "--glow-x": mouseX.get() * 100 + 50 + "%",
            "--glow-y": mouseY.get() * 100 + 50 + "%",
          } as Record<string, string>}
        />
        {/* Refined Glow Overlay */}
        <motion.div 
           className="absolute inset-0 pointer-events-none z-5"
           style={{
             background: useTransform(
               [glowX, glowY],
               ([x, y]) => `radial-gradient(400px circle at ${x} ${y}, rgba(132, 0, 255, 0.1), transparent 100%)`
             )
           }}
        />
      </motion.div>
      
      <motion.figcaption 
        className="tilted-card-caption"
        style={{
          left: captionX,
          top: captionY,
          opacity: captionOpacity,
          x: "-50%",
          y: "-50%"
        }}
      >
        {title}
      </motion.figcaption>
    </motion.figure>
  );
};

export default TiltedCard;
