'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from '@/components/TiltedCard';
import FilmModal from '@/components/FilmModal';
import { FILMS } from '@/constants';

interface Film {
  title: string;
  year: string;
  type: string;
  desc: string;
  image: string;
  featured?: boolean;
}

export default function Portfolio() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const openModal = (film: Film) => setSelectedFilm(film);
  const closeModal = () => setSelectedFilm(null);

  // Separate featured film for hero and rest for archive
  const featuredFilm = useMemo(() => FILMS.find(f => f.featured) || FILMS[0], []);
  const archiveFilms = useMemo(() => FILMS.filter(f => f.title !== featuredFilm.title), [featuredFilm]);

  return (
    <div className="bg-background-custom text-on-surface pt-28 md:pt-36 lg:pt-44 px-6 md:px-12 lg:px-20 pb-32 overflow-x-hidden">
      {/* Header Section */}
      <motion.header 
        className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-3xl flex flex-col items-center md:items-start">
          <motion.span 
            className="font-label text-[10px] tracking-[0.5em] text-secondary mb-4 block uppercase font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            FILMOGRAFI
          </motion.span>
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary leading-[0.85] uppercase tracking-tighter">
            Arsip<br /><span className="text-outline/20">Visual</span>
          </h1>
        </div>
        <motion.p 
          className="font-body text-on-surface-variant max-w-sm text-sm md:text-base leading-relaxed opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Kumpulan karya dokumenter dari tahun 2012 hingga sekarang, merekam pergeseran budaya dan cerita manusia yang terpinggirkan melalui lensa yang jujur dan intim.
        </motion.p>
      </motion.header>

      {/* Featured Project Hero */}
      <section className="mb-32 lg:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-stretch">
          <motion.div 
            className="lg:col-span-8 relative overflow-hidden group cursor-pointer aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[650px] bg-surface-container-high"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => openModal(featuredFilm)}
          >
            <div className="absolute inset-0 bg-primary/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
              alt={featuredFilm.title}
              src={featuredFilm.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 md:opacity-40" />
            
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="inline-block bg-primary text-on-primary text-[9px] font-bold tracking-[0.2em] px-3 py-1 mb-4 uppercase">
                  Featured Project
                </span>
                <h5 className="font-headline text-3xl md:text-5xl lg:text-6xl text-primary hero-text-shadow leading-tight uppercase max-w-xl">
                  {featuredFilm.title}
                </h5>
                <p className="font-label text-[10px] md:text-xs tracking-[0.3em] text-secondary uppercase font-bold mt-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-secondary/50"></span>
                  PIALA CITRA RUNNER UP - 2023
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-4 flex flex-col justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-surface-container-low/50 backdrop-blur-sm p-8 md:p-12 lg:p-16 border border-outline-variant/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <span className="font-label text-[10px] tracking-widest text-outline block mb-6 uppercase font-bold">KARYA TERBARU</span>
              <h4 className="font-headline text-3xl md:text-4xl mb-8 uppercase text-primary leading-tight">
                {featuredFilm.title.split('(')[0]}
              </h4>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed mb-10 italic opacity-90 border-l-2 border-primary/20 pl-6">
                "{featuredFilm.desc}"
              </p>
              
              <div className="flex flex-col gap-6 items-start">
                <button 
                  onClick={() => openModal(featuredFilm)}
                  className="group relative bg-primary text-on-primary font-label font-bold px-10 py-4 text-[10px] tracking-[0.3em] overflow-hidden transition-all"
                >
                  <span className="relative z-10">DETAIL FILM</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary font-label text-[10px] tracking-widest uppercase flex items-center gap-4 group transition-colors"
                >
                  <span className="underline underline-offset-8 decoration-outline-variant group-hover:decoration-primary">LIHAT SEMUA ARSIP</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">arrow_downward</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Archive Section */}
      <section id="archive" className="pt-8">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-headline text-2xl md:text-4xl text-primary uppercase tracking-tighter">Arsip Karya</h2>
          <div className="h-[1px] flex-grow bg-outline-variant/20" />
          <span className="font-label text-[10px] text-outline uppercase tracking-widest">{archiveFilms.length} Project</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {archiveFilms.map((film, index) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
            >
              <TiltedCard 
                image={film.image}
                title={film.title}
                subtitle={`${film.year} // ${film.type}`}
                description={film.desc}
                onClick={() => openModal(film)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <FilmModal 
        film={selectedFilm}
        isOpen={!!selectedFilm}
        onClose={closeModal}
      />
    </div>
  );
}

