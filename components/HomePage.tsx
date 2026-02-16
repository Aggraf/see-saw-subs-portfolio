
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import WorkGallery from './WorkGallery';
import Testimonials from './Testimonials';
import ContactCTA from './ContactCTA';
import ImmersiveSection from './ImmersiveSection';
import { ArrowUpRight } from 'lucide-react';

// Page d'accueil — contenu extrait de l'ancien App.tsx
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Story Section */}
      <ImmersiveSection id="story" className="py-40 z-10 px-6 bg-[#1a1a1a]/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-24 items-center"
          >
            <div>
              <div className="text-[12px] font-mono uppercase tracking-[0.5em] text-[#E35342] mb-10">/ Identity</div>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading-tall text-[#F2E3CF] mb-12 leading-none uppercase tracking-tighter italic">
                Translating the <span className="not-italic text-[#E35342]">Pulse</span> of the script.
              </h2>
              <div className="space-y-10 text-[22px] font-light text-[#F2E3CF]/80 leading-snug overflow-hidden">
                <p>
                  As a bilingual expert in audiovisual adaptation, I don't just swap words; I recreate atmospheres. My work lives at the intersection of cultural nuance and rhythmic precision.
                </p>
                <div className="p-10 bg-[#F2E3CF] text-[#212121] rounded-[2.5rem] relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#E35342]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                   <h4 className="font-heading-tall text-3xl mb-4 leading-none uppercase">The Philosophy</h4>
                   <p className="font-body text-[18px] opacity-80 italic">"The best translation is the one that feels native to the ear, but honors the heart of the source."</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-[#F2E3CF]/5 group">
                <img
                  src="/assets/laura-portrait.png"
                  alt="Laura Seeger-Lanchon Portrait"
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-10 right-2 md:-right-10 px-10 py-6 bg-[#E35342] text-[#F2E3CF] rounded-3xl z-20 font-display text-4xl shadow-2xl rotate-3">
                Laura S-L.
              </div>
            </div>
          </motion.div>
        </div>
      </ImmersiveSection>

      <ImmersiveSection id="work" className="bg-[#212121]">
        <WorkGallery />
      </ImmersiveSection>

      {/* Section Articles — teaser vers la page articles */}
      <ImmersiveSection id="articles" className="py-32 z-10 px-6 bg-[#1a1a1a]/60 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#E35342] mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-[#E35342]" />
              From the Desk
              <span className="w-8 h-px bg-[#E35342]" />
            </div>
            <h2 className="font-heading-tall text-[#F2E3CF] uppercase tracking-tighter italic leading-none mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              Between the <span className="text-[#E35342] not-italic">Lines</span>
            </h2>
            <p className="text-[20px] text-[#F2E3CF]/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Essays on translation, cinema, and the invisible art of making stories travel.
              From a bilingual life on Île de Ré.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#E35342] text-[#E35342] font-mono text-[12px] uppercase tracking-[0.3em] rounded-full hover:bg-[#E35342] hover:text-[#F2E3CF] transition-all duration-500 group"
            >
              Read Articles
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </ImmersiveSection>

      <ImmersiveSection id="testimonials">
        <Testimonials />
      </ImmersiveSection>

      <ImmersiveSection id="contact">
        <ContactCTA />
      </ImmersiveSection>
    </>
  );
};

export default HomePage;
