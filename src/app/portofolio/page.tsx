'use client';

import React, { useState } from 'react';
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
}

export default function Portfolio() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const openModal = (film: Film) => setSelectedFilm(film);
  const closeModal = () => setSelectedFilm(null);
  return (
    <div className="bg-background-custom text-on-surface pt-40 px-8 md:px-16 pb-32">
      <motion.header 
        className="mb-24 flex flex-col md:flex-row justify-between items-end"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl">
          <span className="font-label text-[10px] tracking-[0.4em] text-secondary mb-4 block uppercase font-bold">FILMOGRAFI</span>
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl text-primary leading-none uppercase tracking-tighter">Arsip Visual</h1>
        </div>
        <motion.p 
          className="font-body text-on-surface-variant max-w-sm text-sm leading-relaxed mt-8 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Kumpulan karya dokumenter dari tahun 2012 hingga sekarang, merekam pergeseran budaya dan cerita manusia yang terpinggirkan.
        </motion.p>
      </motion.header>

      {/* Featured Project Hero */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            className="lg:col-span-8 bg-surface-container-high h-[400px] md:h-[600px] relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => openModal({
              title: "Under the Moonlight (Nur)",
              year: "2023",
              type: "Documentary Feature",
              desc: "Potret intim Nur dan komunitas di satu-satunya pesantren transpuan di dunia. Sebuah refleksi puitis tentang iman, penerimaan, dan ruang aman di tengah dogma agama.",
              image: "/asset/images/UnderMoonLightV2.jpg"
            })}
          >
            <img 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" 
              alt="Under the Moonlight"
              src="/asset/images/UnderMoonLightV2.jpg" 
            />
            <div className="absolute bottom-8 left-8">
              <h5 className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary hero-text-shadow"> Under the Moonlight (Nur)</h5>
              <p className="font-label text-[10px] md:text-xs tracking-widest text-secondary uppercase font-bold mt-2">PIALA CITRA RUNNER UP - 2023</p>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-4 flex flex-col justify-end space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-surface-container-low p-8 md:p-12 h-fit border border-outline-variant/10">
              <span className="font-label text-[10px] tracking-widest text-secondary block mb-4 uppercase font-bold">KARYA TERBARU</span>
              <h4 className="font-headline text-3xl mb-6 uppercase text-primary">Under the Moonlight</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8 italic">
                Sebuah eksplorasi puitis tentang iman, penerimaan, dan ruang aman di tengah dogma agama.
              </p>
              <div className="flex flex-col gap-6 items-start">
                <button 
                  onClick={() => openModal({
                    title: "Under the Moonlight (Nur)",
                    year: "2023",
                    type: "Documentary Feature",
                    desc: "Potret intim Nur dan komunitas di satu-satunya pesantren transpuan di dunia. Sebuah refleksi puitis tentang iman, penerimaan, dan ruang aman di tengah stigma sosial.",
                    image: "/asset/images/UnderMoonLightV2.jpg"
                  })}
                  className="bg-primary text-on-primary font-label font-bold px-8 py-3 text-[10px] tracking-[0.2em] hover:bg-primary-container transition-all"
                >
                  DETAIL FILM
                </button>
                <button 
                  onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary font-label text-[10px] tracking-widest uppercase underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors cursor-pointer"
                >
                  LIHAT SEMUA ARSIP
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="films" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {FILMS.map((film, index) => (
          <motion.div
            key={film.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
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

      <FilmModal 
        film={selectedFilm}
        isOpen={!!selectedFilm}
        onClose={closeModal}
      />
    </div>
  );
}
