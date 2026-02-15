
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImmersiveSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const ImmersiveSection: React.FC<ImmersiveSectionProps> = ({ children, id, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate border radius and scale for a "curved card" reveal
  const borderRadius = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["80px", "0px", "0px", "80px"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      id={id}
      ref={containerRef}
      style={{ borderRadius, scale, opacity }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default ImmersiveSection;
