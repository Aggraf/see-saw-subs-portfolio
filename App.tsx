
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NorthernLights from './components/NorthernLights';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ArticlesPage from './components/ArticlesPage';
import ArticleDetail from './components/ArticleDetail';
import ScrollToTop from './components/ScrollToTop';
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
      {/* Remonte en haut au changement de route */}
      <ScrollToTop />

      {/* Dynamic Background */}
      <NorthernLights />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#E35342] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
