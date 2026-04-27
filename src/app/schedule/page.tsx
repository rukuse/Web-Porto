'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EVENTS = [
  {
    date: "25 APR",
    year: "2024",
    title: "UNDER THE MOONLIGHT (NUR)",
    location: "KINEFORUM, JAKARTA",
    status: "SEGERA",
    type: "PEMUTARAN & DISKUSI"
  },
  {
    date: "12 MEI",
    year: "2024",
    title: "MASTERCLASS: STORYTELLING DOKUMENTER",
    location: "ISI YOGYAKARTA",
    status: "TERSEDIA",
    type: "WORKSHOP"
  },
  {
    date: "05 JUN",
    year: "2024",
    title: "RENITA RENITA",
    location: "JAFF 2024, YOGYAKARTA",
    status: "PENUH",
    type: "FESTIVAL SCREENING"
  }
];

export default function Schedule() {
  return (
    <div className="bg-background-custom text-on-surface pt-40 px-8 md:px-16 pb-32">
      <motion.header 
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-label text-[10px] tracking-[0.4em] text-secondary mb-4 block uppercase font-bold">AGENDA</span>
        <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl text-primary leading-none uppercase tracking-tighter">Jadwal Acara</h1>
      </motion.header>

      <div className="timeline-container">
        <motion.div 
          className="timeline-line"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        {EVENTS.map((event, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className={`md:col-span-10 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} glass-card p-8 md:p-12`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div className="flex flex-col">
                    <span className="font-headline text-4xl md:text-5xl text-primary">{event.date}</span>
                    <span className="font-label text-xs tracking-widest text-outline">{event.year}</span>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="font-label text-[10px] tracking-[0.2em] text-secondary uppercase font-bold mb-2">{event.type}</span>
                    <div className="flex items-center">
                      <span className={`status-dot ${event.status === 'TERSEDIA' ? 'status-available' : 'status-booked'}`}></span>
                      <span className="font-label text-[10px] tracking-widest text-primary uppercase">{event.status}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4 uppercase">{event.title}</h3>
                <div className="flex items-center gap-2 text-on-surface-variant mb-8">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="font-label text-xs tracking-widest uppercase">{event.location}</span>
                </div>
                <button className="text-primary font-label text-[10px] tracking-widest uppercase border border-primary/20 px-6 py-3 hover:bg-primary hover:text-on-primary transition-all">
                  RESERVASI KURSI
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
