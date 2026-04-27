'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Film {
  title: string;
  year: string;
  type: string;
  desc: string;
  image: string;
}

interface FilmModalProps {
  film: Film | null;
  isOpen: boolean;
  onClose: () => void;
}

const FilmModal: React.FC<FilmModalProps> = ({ film, isOpen, onClose }) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!film) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-[#0e0e0e]/90 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div 
            className="relative bg-surface-container-low w-full max-w-6xl max-h-full overflow-y-auto md:overflow-visible border border-outline-variant/10 shadow-2xl flex flex-col md:flex-row"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-on-surface hover:text-primary transition-colors p-2"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-3xl font-light">close</span>
            </button>

            {/* Poster Section */}
            <div className="w-full md:w-1/2 aspect-[3/4] md:h-[80vh] relative overflow-hidden bg-surface-container-high">
              <motion.img 
                src={film.image} 
                alt={film.title}
                className="w-full h-full object-cover grayscale contrast-125"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary font-bold">
                    {film.year}
                  </span>
                  <div className="w-8 h-[1px] bg-outline-variant/30" />
                  <span className="font-label text-[10px] tracking-widest uppercase text-outline">
                    {film.type}
                  </span>
                </div>
                
                <h2 className="font-headline text-4xl md:text-6xl text-primary leading-none uppercase tracking-tighter mb-8">
                  {film.title}
                </h2>
                
                <div className="space-y-6 mb-12">
                  <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
                    {film.desc}
                  </p>
                  <p className="font-body text-sm text-outline leading-relaxed opacity-70">
                    Sebuah karya sinematik yang mengeksplorasi kedalaman pengalaman manusia, menangkap momen-momen intim yang mendefinisikan identitas dan perjuangan sosial di Indonesia kontemporer.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-on-primary font-label font-bold px-8 py-4 text-[10px] tracking-[0.2em] hover:bg-primary-container transition-all flex items-center gap-2">
                    PLAY TRAILER
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                  </button>
                  <button className="border border-outline-variant/30 text-on-surface font-label font-bold px-8 py-4 text-[10px] tracking-[0.2em] hover:bg-white/5 transition-all">
                    SINOPSIS LENGKAP
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FilmModal;
