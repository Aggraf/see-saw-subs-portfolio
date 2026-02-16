
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { ARTICLES } from '../articles';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === slug);

  // Barre de progression lecture
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Trouver articles suivant/précédent
  const currentIndex = ARTICLES.findIndex(a => a.slug === slug);
  const nextArticle = ARTICLES[(currentIndex + 1) % ARTICLES.length];

  // Rendu d'un bloc de contenu selon son préfixe
  const renderBlock = (block: string, index: number) => {
    // Sous-titre
    if (block.startsWith('## ')) {
      return (
        <motion.h2
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading-tall text-[#F2E3CF] uppercase tracking-tight mt-16 mb-8 leading-none"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          {block.replace('## ', '')}
        </motion.h2>
      );
    }

    // Citation
    if (block.startsWith('> ')) {
      return (
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="my-12 pl-8 border-l-4 border-[#E35342] py-4"
        >
          <p className="text-[20px] md:text-[22px] text-[#F2E3CF]/90 italic font-light leading-relaxed">
            {block.replace('> ', '')}
          </p>
        </motion.blockquote>
      );
    }

    // Séparateur
    if (block === '---') {
      return (
        <div key={index} className="my-12 flex items-center justify-center gap-4">
          <span className="w-2 h-2 bg-[#E35342]/40 rounded-full" />
          <span className="w-2 h-2 bg-[#E35342]/60 rounded-full" />
          <span className="w-2 h-2 bg-[#E35342]/40 rounded-full" />
        </div>
      );
    }

    // Paragraphe normal — premier paragraphe avec drop cap
    const isFirstParagraph = index === 0;
    return (
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.4 }}
        className={`text-[18px] md:text-[20px] text-[#F2E3CF]/80 font-light leading-[1.8] mb-6 ${isFirstParagraph ? 'first-letter:text-6xl first-letter:font-heading-tall first-letter:text-[#E35342] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none' : ''}`}
      >
        {block}
      </motion.p>
    );
  };

  return (
    <>
      {/* Barre de progression lecture (en plus de celle du layout) */}
      <motion.div
        className="fixed top-[6px] left-0 right-0 h-[2px] bg-[#E35342]/50 z-[99] origin-left"
        style={{ scaleX }}
      />

      <article className="relative z-10 min-h-screen">
        {/* Hero de l'article */}
        <div className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${article.coverGradient} opacity-10`} />

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Navigation retour */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#F2E3CF]/40 hover:text-[#E35342] transition-colors mb-16 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                All Articles
              </Link>
            </motion.div>

            {/* Méta : catégorie + date + temps */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <span
                className="font-mono text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border"
                style={{
                  color: article.categoryColor,
                  borderColor: `${article.categoryColor}33`
                }}
              >
                {article.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2E3CF]/30 flex items-center gap-1.5">
                <Calendar size={10} />
                {article.date}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2E3CF]/30 flex items-center gap-1.5">
                <Clock size={10} />
                {article.readTime}
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading-tall text-[#F2E3CF] uppercase tracking-tighter italic leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}
            >
              {article.title}
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-[#E35342] text-2xl md:text-3xl mb-8"
            >
              {article.subtitle}
            </motion.p>

            {/* Auteur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 mt-12 pt-8 border-t border-white/5"
            >
              <div className="w-12 h-12 bg-[#E35342] rounded-full flex items-center justify-center">
                <span className="font-display text-[#F2E3CF] text-lg">L</span>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#F2E3CF]">Laura Seeger-Lanchon</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2E3CF]/40">See Saw Subs · Île de Ré</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-[#E35342]/30 to-transparent origin-left"
          />
        </div>

        {/* Contenu de l'article */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          {article.content.map((block, index) => renderBlock(block, index))}
        </div>

        {/* Footer article : article suivant */}
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/5 pt-16"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F2E3CF]/30 mb-6">Next Article</p>
            <Link
              to={`/articles/${nextArticle.slug}`}
              className="group block"
            >
              <h3
                className="font-heading-tall text-[#F2E3CF]/60 uppercase tracking-tight leading-none group-hover:text-[#E35342] transition-colors duration-500"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                {nextArticle.title}
              </h3>
              <p className="font-display text-[#E35342]/40 text-lg mt-2 group-hover:text-[#E35342]/70 transition-colors">
                {nextArticle.subtitle}
              </p>
            </Link>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;
