
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-40 relative z-10 bg-[#F2E3CF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-32 text-[#212121]">
          <span className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#E35342] mb-6">/ Feedback</span>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading-tall leading-none text-center">
            Kind words from <br /> <span className="italic">Collaborators.</span>
          </h2>
          <div className="font-display text-3xl mt-6 text-[#E35342] -rotate-3">(Always growing)</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TESTIMONIALS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-12 rounded-[3rem] bg-[#212121] text-[#F2E3CF] relative flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#E35342] mb-8">Trusted Voice</div>
              <p className="text-[22px] italic font-light leading-relaxed mb-12">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#E35342] rounded-full flex items-center justify-center text-[#F2E3CF] font-bold">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-heading-tall text-2xl tracking-tight leading-none mb-1">{item.author}</h4>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#E35342]/70">{item.role} // {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
