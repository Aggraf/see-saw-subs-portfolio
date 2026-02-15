
import React from 'react';
import { motion } from 'framer-motion';

const Sunburst: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-150%] flex items-center justify-center"
        style={{
          background: `repeating-conic-gradient(
            from 0deg,
            #E35342 0deg 15deg,
            transparent 15deg 30deg
          )`,
          maskImage: 'radial-gradient(circle, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 80%)',
        }}
      />
      <div className="absolute inset-0 bg-[#212121]/20 backdrop-blur-[1px]" />
    </div>
  );
};

export default Sunburst;
