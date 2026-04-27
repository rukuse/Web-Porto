'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-background-custom text-on-surface">
      {/* Hero Section: The Portrait */}
      <motion.section 
        className="mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-surface-container-low pt-32">
          <motion.img 
            className="w-full h-full object-cover object-top grayscale contrast-125" 
            alt="Tonny Trimarsanto"
            src="/asset/images/t1.jpg"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
          <motion.div 
            className="absolute bottom-4 right-6 sm:bottom-8 sm:right-12 md:bottom-12 md:right-24 z-10 text-right"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="font-label text-[10px] md:text-xs tracking-[0.3em] uppercase text-secondary mb-2 md:mb-4 block">SUTRADARA</span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] ml-auto">
              Tonny<br />Trimarsanto</h2>
          </motion.div>
        </div>
      </motion.section>

      {/* Biography Section */}
      <motion.section 
        className="px-8 md:px-16 mb-64 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <h3 className="font-headline text-2xl md:text-4xl tracking-tight text-primary leading-tight uppercase font-bold">
              Visi &amp;<br />Perjalanan
            </h3>
            <div className="w-12 h-[2px] bg-primary/30 mt-6"></div>
          </div>
          <div className="md:col-span-8 space-y-12">
            <motion.p 
              className="font-body text-base md:text-xl font-light leading-relaxed"
              initial={{ color: 'var(--color-on-surface-variant, #888)', opacity: 0.4 }}
              whileInView={{ color: '#ffffff', opacity: 1 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Lahir di Surakarta, Tonny Trimarsanto telah mendedikasikan lebih dari dua dekade untuk mengeksplorasi realitas manusia melalui lensa dokumenter. Sebagai pendiri <strong>Rumah Dokumenter</strong> di Klaten, ia terus membina generasi baru pembuat film yang berani menyuarakan isu sosial.
            </motion.p>
            <motion.p 
              className="font-body text-base md:text-xl font-light leading-relaxed"
              initial={{ color: 'var(--color-outline-variant, #666)', opacity: 0.3 }}
              whileInView={{ color: '#ffffff', opacity: 1 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            >
              Karyanya dikenal karena kedekatan observasionalnya dan kemampuan unik untuk tetap tidak terlihat sambil menangkap momen paling intim dari subjeknya. Fokusnya pada komunitas yang terpinggirkan bukan sekadar pilihan estetik, melainkan sebuah komitmen moral untuk memberikan panggung bagi mereka yang jarang didengar.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Awards & Recognition: Minimalist Grid */}
      <section className="bg-surface-container-lowest py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            className="font-label text-[10px] tracking-[0.4em] uppercase text-outline block mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            PENGHARGAAN &amp; SELEKSI
          </motion.span>
          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {[
              { icon: 'emoji_events', title: 'PIALA CITRA (FFI)', subtitle: 'FILM TERBAIK - BULU MATA (2017)' },
              { icon: 'camera_front', title: 'FESTIVAL DE CANNES', subtitle: 'UN CERTAIN REGARD - SERAMBI (2006)' },
              { icon: 'movie_filter', title: 'APERCU PRANCIS', subtitle: 'DOKUMENTER TERBAIK - RENITA RENITA' },
              { icon: 'verified', title: 'JAFF INDONESIA', subtitle: 'RETROSPEKTIF & SELEKSI TAHUNAN' }
            ].map((award, i) => (
              <motion.div 
                key={award.title}
                className="flex items-center gap-8 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="opacity-30 group-hover:opacity-100 transition-opacity duration-500 flex-shrink-0">
                  <span className="material-symbols-outlined text-4xl md:text-5xl font-light">{award.icon}</span>
                </div>
                <div className="flex-1 border-b border-outline-variant/10 pb-6 group-last:border-none">
                  <h4 className="font-headline text-lg md:text-xl font-bold tracking-widest mb-1">{award.title}</h4>
                  <p className="font-label text-xs text-outline-variant tracking-widest uppercase">{award.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Quote / Philosophy */}
      <motion.section 
        className="py-64 px-8 md:px-16 text-center bg-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.span 
            className="material-symbols-outlined text-secondary text-4xl mb-8 block text-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
          >
            format_quote
          </motion.span>
          <motion.blockquote 
            className="font-headline text-3xl md:text-5xl italic font-light leading-tight"
            style={{
              backgroundImage: 'linear-gradient(90deg, #555 0%, #fff 50%, #555 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['200% 0', '-200% 0'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            &quot;Kamera bukan sekadar alat rekam, tapi instrumen untuk mendengarkan mereka yang selama ini dibungkam oleh keadaan.&quot;
          </motion.blockquote>
          <motion.cite 
            className="mt-12 block font-label text-xs tracking-[0.3em] uppercase text-outline-variant"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            — TONNY TRIMARSANTO
          </motion.cite>
        </div>
      </motion.section>

    </div>
  );
}
