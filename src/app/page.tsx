'use client';

import React from 'react';
import TiltedCard from '@/components/TiltedCard';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  const goToPortfolio = () => {
    router.push('/portofolio');
  };

  return (
    <div className="bg-background-custom text-on-surface">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 z-0 bg-surface-container-low">
          <img
            className="w-full h-full object-cover object-top grayscale contrast-125 opacity-60"
            alt="Hero image"
            src="/asset/images/t1.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-95"></div>
        </div>
        <div className="absolute bottom-4 md:bottom-8 left-0 w-full z-10 px-6 flex flex-col items-center text-center">
          <motion.h1
            className="font-headline font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tighter hero-text-shadow leading-none mb-6"
            initial="hidden"
            animate="visible"
          >
            {"Dokumenter adalah kisah tentang hidup".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05 + 0.5
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="font-body text-on-surface-variant text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            Menangkap yang tak terlihat, satu bingkai pada satu waktu. Sebuah perjalanan ke dalam pengalaman manusia yang nyata.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6 mx-auto max-w-max"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            <button className="inline-flex items-center justify-center gap-2 text-primary font-label font-bold px-8 py-3 text-sm tracking-[0.1em] border border-outline-variant/30 hover:bg-white/5 transition-all">
              TONTON TRAILER
              <span className="material-symbols-outlined text-base">play_arrow</span>
            </button>
            <button
              className="inline-flex items-center justify-center text-primary font-label font-bold px-8 py-3 text-sm tracking-[0.1em] border border-outline-variant/30 hover:bg-white/5 transition-all"
              onClick={goToPortfolio}
            >
              JELAJAHI KARYA
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Selected Projects (Bento Grid) */}
      <section className="py-32 px-8 md:px-16 bg-surface">
        <motion.div
          className="flex justify-between items-end mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="font-label text-secondary text-sm tracking-[0.4em] mb-4 uppercase">KARYA TERPILIH</h2>
            <h3 className="font-headline text-3xl sm:text-5xl md:text-6xl text-primary max-w-xl"> Under The Moonlight.</h3>
          </div>
          <div className="hidden md:block">
            <p className="font-body text-on-surface-variant max-w-xs text-sm leading-relaxed">
              Kisah tentang komunitas pesantren transpuan pertama di dunia, yang berjuang untuk eksistensi di tengah tekanan sosial dan tradisi.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
          {/* Large Feature */}
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TiltedCard
              image="/asset/images/UnderMoonLightV2.jpg"
              title="UNDER THE MOONLIGHT"
              subtitle="DOKUMENTER / 2023"
              description="Potret intim Nur dan komunitas di satu-satunya pesantren transpuan di dunia."
              className="md:h-[600px]"
            />
          </motion.div>
          {/* Vertical Card */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TiltedCard
              image="/asset/images/BuluMata.jpg"
              title="BULU MATA"
              subtitle="PIALA CITRA 2017"
              description="Kehidupan komunitas transpuan di Aceh di tengah tekanan sosial."
              className="md:h-[600px]"
            />
          </motion.div>
          {/* Small Grid Items */}
          {[
            {
              image: "/asset/images/renita1.jpg",
              title: "RENITA RENITA",
              subtitle: "2007"
            },
            {
              image: "/asset/images/serambi.webp",
              title: "SERAMBI",
              subtitle: "CANNES 2006"
            },
            {
              image: "/asset/images/UnderTheMoonlight.webp",
              title: "UNDER THE MOONLIGHT",
              subtitle: "2023"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="md:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltedCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                className="h-[400px]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statement Section (Asymmetric) */}
      <motion.section
        className="py-48 px-8 md:px-16 bg-surface-container-lowest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div
            className="md:col-span-6 md:col-start-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl text-primary leading-tight mb-12 italic">
              &quot;Kamera adalah instrumen yang mengajarkan orang bagaimana cara melihat tanpa kamera.&quot;
            </h2>
            <p className="font-body text-on-surface-variant text-xl leading-relaxed max-w-lg mb-16">
              Saya percaya pada kekuatan kesabaran. Pembuatan film dokumenter bukan tentang bidikan yang Anda rencanakan; ini tentang momen yang terjadi ketika dunia mengira Anda sudah berhenti melihat.
            </p>
            <a className="group inline-flex items-center gap-4 font-label text-sm tracking-[0.2em] text-primary" href="#">
              BACA MANIFESTO
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
            </a>
          </motion.div>
          <motion.div
            className="md:col-span-4 md:col-start-9 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              className="w-full aspect-[3/4] object-contain filter brightness-75 bg-surface-container-low"
              alt="Filmmaker silhouette"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBceHl7oxS9BJK-gftyRdyZDN_K8huN_Mp3NaAZnzZlfoJ1AERBMPeG4gNH6QLtn885xHrUvVEeb4yhM69cgeupSvjri3aULgJvRaIV4Uj8he2h9aeEb2-RQubevMwm-DftlGZ3mnlZwjE3PAmgIXGRAxMtsvIsDvkgj6jdUmEHAoGSyRMpLjznowiSRuHu6GXNkEiaqce0QN2Qc8ChSVvXjBXZR9SWFw9KDS0tAzItvSkc5zDX4LWY3mm0dPR0gAxNXxR7N0CErgbs"
            />
            <div className="absolute -bottom-8 -left-8 bg-surface p-8 shadow-2xl border border-outline-variant/10">
              <span className="font-headline text-4xl text-secondary block">12+</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-outline uppercase">Penghargaan yang dimenangkan pada tahun 2023</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter/Contact */}
      <motion.section
        className="py-32 px-8 md:px-16 border-t border-outline-variant/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-headline text-4xl md:text-6xl text-primary mb-8">Mari bercerita bersama.</h3>
          <p className="font-body text-on-surface-variant text-lg mb-12">Bergabunglah dengan lingkaran dalam untuk pembaruan bulanan tentang pemutaran film mendatang dan wawasan di balik layar.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-1 bg-transparent border-b border-outline-variant text-primary font-label tracking-[0.1em] focus:border-primary focus:ring-0 px-0 py-4 transition-all placeholder:text-outline/50"
              placeholder="EMAIL ADDRESS" type="email"
            />
            <button className="bg-primary text-on-primary font-label font-bold px-12 py-4 tracking-[0.1em] hover:bg-primary-container transition-all">SUBSCRIBE</button>
          </form>
        </div>
      </motion.section>

    </div>
  );
}
