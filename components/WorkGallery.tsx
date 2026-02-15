
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const WorkGallery: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
      ? window.innerWidth * 0.85
      : 700
  );
  const total = PROJECTS.length;

  useEffect(() => {
    const measure = () => {
      setCardWidth(window.innerWidth < 768 ? window.innerWidth * 0.85 : 700);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Calcule la position relative avec gestion du loop
  const getOffset = (idx: number) => {
    let off = idx - current;
    if (off > Math.floor(total / 2)) off -= total;
    if (off < -Math.floor(total / 2)) off += total;
    return off;
  };

  const gap = cardWidth < 600 ? 24 : 48;
  const shift = cardWidth + gap;
  const containerHeight = cardWidth / 1.4 + 140;

  return (
    <div className="py-32 relative z-10">
      {/* Header — inchangé */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="text-[12px] font-mono uppercase tracking-[0.5em] text-[#E35342] mb-6 flex items-center gap-2">
               <div className="w-4 h-4 rounded-full border border-[#E35342] flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#E35342] rounded-full" />
               </div>
               Curation
            </div>
            <h2 className="text-6xl md:text-8xl font-heading-tall text-[#F2E3CF] mb-8 leading-none">
              The <span className="italic text-[#E35342]">Body</span> of <br /> Work.
            </h2>
            <p className="text-[#F2E3CF]/60 text-[22px] leading-snug font-light max-w-md">
              A glimpse into narratives transformed from text to cultural resonance.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Bouton gauche */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-[38%] -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E35342]/90 backdrop-blur-sm text-[#F2E3CF] flex items-center justify-center hover:bg-[#E35342] hover:scale-110 transition-all duration-200 cursor-pointer shadow-2xl shadow-black/30 border border-[#F2E3CF]/10"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Bouton droit */}
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-[38%] -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E35342]/90 backdrop-blur-sm text-[#F2E3CF] flex items-center justify-center hover:bg-[#E35342] hover:scale-110 transition-all duration-200 cursor-pointer shadow-2xl shadow-black/30 border border-[#F2E3CF]/10"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>

        {/* Piste des cartes */}
        <div className="relative overflow-hidden" style={{ height: containerHeight }}>
          {PROJECTS.map((project, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;

            return (
              <motion.div
                key={project.id}
                className="absolute top-0 w-[85vw] md:w-[700px] group cursor-pointer"
                style={{
                  left: '50%',
                  marginLeft: -(cardWidth / 2),
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                }}
                animate={{
                  x: offset * shift,
                  scale: isActive ? 1 : 0.85,
                  opacity: Math.abs(offset) > 1 ? 0 : Math.abs(offset) === 1 ? 0.5 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 28,
                }}
              >
                {/* Image du projet */}
                <div className="relative aspect-[1.4/1] overflow-hidden rounded-[2.5rem] mb-8 bg-[#2a2a2a] border border-white/5 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      isActive
                        ? 'grayscale-0 opacity-100'
                        : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-[#E35342]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-10 right-10 flex flex-col items-end">
                    <span className="font-display text-4xl text-[#F2E3CF] -rotate-6">#{idx + 1}</span>
                  </div>
                  <div className="absolute bottom-10 left-10">
                     <h3 className="text-4xl md:text-5xl font-heading-tall uppercase text-[#F2E3CF] group-hover:text-[#E35342] transition-colors">{project.title}</h3>
                  </div>
                </div>

                {/* Infos du projet */}
                <div className="flex flex-col md:flex-row justify-between items-start border-t border-[#F2E3CF]/10 pt-6 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#E35342] mb-2">{project.category}</span>
                    <p className="text-[#F2E3CF]/50 font-body text-[18px] max-w-md italic">{project.description}</p>
                  </div>
                  <span className="text-xl font-mono text-[#F2E3CF]/20">({project.year})</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicateur de position */}
        <div className="flex justify-center gap-3 mt-8">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current
                  ? 'bg-[#E35342] w-8'
                  : 'bg-[#F2E3CF]/20 w-2 hover:bg-[#F2E3CF]/40'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkGallery;
