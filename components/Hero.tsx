
import React from 'react';
import { motion } from 'framer-motion';
import Sunburst from './Sunburst';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden z-10 bg-[#212121]">
      <Sunburst />
      
      <div className="max-w-7xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 font-mono text-[12px] uppercase tracking-[0.5em] text-[#E35342] flex items-center gap-4">
            <span className="w-8 h-px bg-[#E35342]" />
            See Saw Subs Est. 2015
            <span className="w-8 h-px bg-[#E35342]" />
          </div>
          
          <h1 className="font-heading-tall text-[#F2E3CF] uppercase tracking-tighter mb-8 italic">
            Building the <span className="text-[#E35342] not-italic">Bridge</span> we <br /> always <span className="font-display lowercase tracking-normal text-[#E35342]/80 opacity-90">wished</span> for.
          </h1>

          <div className="flex flex-col items-center gap-8">
            <p className="text-[22px] text-[#F2E3CF]/70 max-w-3xl font-body leading-tight">
              A bespoke boutique for cinematic translation. <br />
              Crafting narratives that travel without losing their soul.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="#work"
                className="px-12 py-5 bg-[#E35342] text-[#F2E3CF] font-bold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-[#E35342]/10 uppercase font-mono tracking-widest"
              >
                (Selected Works)
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 flex flex-col items-start gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#E35342] mb-1">Status:</span>
        <span className="font-display text-2xl text-[#F2E3CF]">Open for commissions</span>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex gap-8 font-mono text-[12px] uppercase tracking-widest text-[#F2E3CF]/40">
          <a href="#work" className="hover:text-[#E35342] transition-colors">Port-folio</a>
          <a href="#story" className="hover:text-[#E35342] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#E35342] transition-colors">Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
