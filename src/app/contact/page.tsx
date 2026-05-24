'use client';

import { motion } from 'framer-motion';
import { EMAIL_ADDRESS } from '@/constants';

export default function Contact() {
  return (
    <div className="bg-background-custom text-on-surface pt-40 px-8 md:px-16 pb-32 min-h-screen flex flex-col">
      <motion.header 
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-label text-[10px] tracking-[0.4em] text-secondary mb-4 block uppercase font-bold">HUBUNGI SAYA</span>
        <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl text-primary leading-none uppercase tracking-tighter">Mari Berdiskusi</h1>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 flex-1">
        <motion.div 
          className="md:col-span-12 lg:col-span-7"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="font-label text-[10px] tracking-widest text-outline uppercase font-bold">NAMA LENGKAP</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="Siapa nama Anda?"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-label text-[10px] tracking-widest text-outline uppercase font-bold">ALAMAT EMAIL</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="Email Anda"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-label text-[10px] tracking-widest text-outline uppercase font-bold">PESAN ANDA</label>
              <textarea 
                rows={4}
                className="bg-transparent border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:ring-0 transition-all outline-none resize-none"
                placeholder="Apa yang ingin Anda bicarakan?"
              />
            </div>
            <button className="bg-primary text-on-primary font-label font-bold px-12 py-6 tracking-[0.2em] hover:bg-primary-container transition-all flex items-center gap-4 group">
              KIRIM PESAN
              <div className="w-8 h-[1px] bg-on-primary group-hover:w-12 transition-all"></div>
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="md:col-span-12 lg:col-span-4 lg:col-start-9 space-y-24"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>
            <h3 className="font-label text-[10px] tracking-[0.4em] text-secondary mb-8 uppercase font-bold">INFORMASI KONTAK</h3>
            <div className="space-y-6">
              <p className="font-headline text-2xl text-primary">{EMAIL_ADDRESS}</p>
              <p className="font-body text-on-surface-variant text-sm">+62 813-3530-9652</p>
            </div>
          </div>

          <div>
            <h3 className="font-label text-[10px] tracking-[0.4em] text-secondary mb-8 uppercase font-bold">SOSIAL MEDIA</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="font-label text-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors">INSTAGRAM</a>
              <a href="#" className="font-label text-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors">VIMEO</a>
              <a href="#" className="font-label text-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors">LINKEDIN</a>
            </div>
          </div>

          <div className="p-8 border border-outline-variant/10 bg-surface-container-low">
            <p className="font-body text-xs italic text-outline leading-relaxed">
              &quot;Setiap cerita dimulai dengan sebuah percakapan.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
