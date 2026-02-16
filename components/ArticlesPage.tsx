
import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../articles';
import ArticleCard from './ArticleCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticlesPage: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Retour accueil */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#F2E3CF]/40 hover:text-[#E35342] transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Titre de la page */}
          <div className="flex flex-col gap-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#E35342] flex items-center gap-4">
              <span className="w-8 h-px bg-[#E35342]" />
              Reflections on the Craft
              <span className="w-8 h-px bg-[#E35342]" />
            </div>

            <h1 className="font-heading-tall text-[#F2E3CF] uppercase tracking-tighter italic leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
              Between <span className="text-[#E35342] not-italic">the</span> Lines
            </h1>

            <p className="text-[#F2E3CF]/60 text-[20px] font-light max-w-2xl leading-relaxed">
              Essays on translation, cinema, language, and the invisible art of building bridges between cultures. Written from Île de Ré, between tides and deadlines.
            </p>
          </div>
        </motion.div>

        {/* Décoratif : ligne séparatrice animée */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-[#E35342]/40 to-transparent mb-16 origin-left"
        />

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Footer décoratif */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="font-display text-[#E35342]/40 text-2xl">
            More stories coming soon...
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F2E3CF]/20 mt-4">
            Laura Seeger-Lanchon · See Saw Subs · Île de Ré
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesPage;
