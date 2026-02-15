
import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-40 relative overflow-hidden z-10 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative p-12 md:p-32 rounded-[4rem] bg-[#E35342] flex flex-col items-center text-center overflow-hidden"
        >
          {/* Decorative floating dots */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#F2E3CF]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-8xl font-heading-tall text-[#F2E3CF] mb-12 relative z-10 tracking-tight leading-none italic" style={{ fontSize: 'clamp(1.75rem, 7vw, 5.5rem)' }}>
            Let's translate <br /> the <span className="not-italic">untranslatable.</span>
          </h2>
          
          <p className="text-[22px] text-[#F2E3CF]/90 mb-16 relative z-10 max-w-2xl font-light">
            I am currently accepting new projects for cinema, literature, and broadcast scripts. Let's make your story universal.
          </p>

          <a 
            href="mailto:lauralanchon@gmail.com" 
            className="relative z-10 px-16 py-6 bg-[#F2E3CF] text-[#212121] rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 uppercase font-mono tracking-widest shadow-2xl"
          >
            Send a Signal
          </a>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 font-mono text-[#F2E3CF]/60 uppercase text-[10px] tracking-[0.4em] w-full max-w-lg">
            <div className="border border-[#F2E3CF]/20 p-4 rounded-xl">
              Île de Ré / France
            </div>
            <div className="border border-[#F2E3CF]/20 p-4 rounded-xl">
              EN ⇄ FR Expert
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
