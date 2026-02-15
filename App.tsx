
import React from 'react';
import NorthernLights from './components/NorthernLights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WorkGallery from './components/WorkGallery';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ImmersiveSection from './components/ImmersiveSection';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-[#212121] min-h-screen selection:bg-[#E35342] selection:text-[#F2E3CF]">
      {/* Dynamic Background */}
      <NorthernLights />

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#E35342] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

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
              <h2 className="text-6xl md:text-8xl font-heading-tall text-[#F2E3CF] mb-12 leading-none uppercase tracking-tighter italic">
                Translating the <span className="not-italic text-[#E35342]">Pulse</span> of the script.
              </h2>
              <div className="space-y-10 text-[22px] font-light text-[#F2E3CF]/80 leading-snug">
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
              <div className="absolute -bottom-10 -right-10 px-10 py-6 bg-[#E35342] text-[#F2E3CF] rounded-3xl z-20 font-display text-4xl shadow-2xl rotate-3">
                Laura S-L.
              </div>
            </div>
          </motion.div>
        </div>
      </ImmersiveSection>

      <ImmersiveSection id="work" className="bg-[#212121]">
        <WorkGallery />
      </ImmersiveSection>

      <ImmersiveSection id="testimonials">
        <Testimonials />
      </ImmersiveSection>

      <ImmersiveSection id="contact">
        <ContactCTA />
      </ImmersiveSection>

      <Footer />
    </main>
  );
};

export default App;
