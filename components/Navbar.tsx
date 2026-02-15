
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Work', href: '#work' },
    { name: 'Vibe', href: '#testimonials' },
    { name: 'Talk', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-[#212121]/90 backdrop-blur-lg border-b border-white/5' : 'py-10 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-mono text-[14px] font-bold tracking-[0.2em] flex items-center gap-4 group text-[#F2E3CF]">
          <div className="w-10 h-10 bg-[#E35342] rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
             <div className="w-2 h-2 bg-[#F2E3CF] rounded-full" />
          </div>
          <span className="uppercase">SEE SAW SUBS</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[12px] font-mono uppercase tracking-[0.3em] text-[#F2E3CF] hover:text-[#E35342] transition-colors"
            >
              /{link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#F2E3CF] cursor-pointer" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-[#212121] z-[60] flex flex-col p-10"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#E35342] cursor-pointer" aria-label="Close menu">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-6xl font-heading-tall text-[#F2E3CF] hover:text-[#E35342] italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
