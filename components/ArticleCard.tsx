
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link
        to={`/articles/${article.slug}`}
        className="group block relative overflow-hidden rounded-[2rem] border border-white/5 hover:border-[#E35342]/30 transition-all duration-500"
      >
        {/* Fond gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${article.coverGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />

        {/* Contenu de la card */}
        <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[320px]">
          {/* Header: catégorie + temps de lecture */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border"
              style={{
                color: article.categoryColor,
                borderColor: `${article.categoryColor}33`
              }}
            >
              {article.category}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2E3CF]/40 flex items-center gap-1.5">
              <Clock size={10} />
              {article.readTime}
            </span>
          </div>

          {/* Titre */}
          <h3 className="font-heading-tall text-[#F2E3CF] text-2xl md:text-3xl leading-none uppercase mb-3 group-hover:text-[#E35342] transition-colors duration-500" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            {article.title}
          </h3>

          {/* Sous-titre */}
          <p className="font-display text-[#E35342]/70 text-lg mb-6 group-hover:text-[#E35342] transition-colors duration-500">
            {article.subtitle}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Excerpt */}
          <p className="text-[#F2E3CF]/50 text-[15px] font-light leading-relaxed mb-8 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Footer: date + flèche */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2E3CF]/30">
              {article.date}
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F2E3CF]/40 group-hover:bg-[#E35342] group-hover:border-[#E35342] group-hover:text-[#F2E3CF] transition-all duration-500">
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Effet de brillance au hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
