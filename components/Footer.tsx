
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 border-t border-white/5 relative z-10 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-mono text-xl font-bold mb-10 block tracking-[0.2em] text-[#F2E3CF]">
              SEE SAW SUBS
            </a>
            <p className="text-[#F2E3CF]/50 text-[22px] font-light max-w-sm mb-12 italic">
              Where language becomes a living bridge for your narrative.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'X (Twitter)' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-[#F2E3CF] hover:bg-[#E35342] hover:border-[#E35342] transition-all cursor-pointer">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#E35342] mb-10">Expertise</h4>
            <ul className="flex flex-col gap-6 text-[#F2E3CF]/60 font-light text-[18px]">
              <li>Cinema Subtitling</li>
              <li>Literary Adaptation</li>
              <li>Political Translation</li>
              <li>Screenplay Polish</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#E35342] mb-10">Contact</h4>
            <ul className="flex flex-col gap-6 text-[#F2E3CF]/60 font-light text-[18px]">
              <li className="break-all">lauralanchon@gmail.com</li>
              <li>+33 6 50 61 26 53</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[#F2E3CF]/30 text-[10px] font-mono uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} See Saw Subs - Laura Seeger-Lanchon.
          </p>
          <div className="flex gap-10 font-mono text-[10px] text-[#F2E3CF]/30 uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-[#E35342] transition-colors">(Privacy)</a>
            <a href="#" className="hover:text-[#E35342] transition-colors">(Terms)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
