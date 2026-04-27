'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';

import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const navItemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <header className="fixed top-0 w-full z-[100] backdrop-blur-md flex justify-between items-center px-8 md:px-16 py-6 bg-transparent">
        <div className="flex items-center gap-4">
          <Link href="/" onClick={closeMenu}>
            <span className="text-xl md:text-2xl font-black tracking-[-0.05em] text-[#fdfdfd] font-headline uppercase">
              Tonny Trimarsanto
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 bg-transparent">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label text-[10px] tracking-[0.2em] uppercase transition-all duration-300 pb-1 ${
                  isActive 
                    ? 'text-[#fdfdfd] border-b border-[#fdfdfd]' 
                    : 'text-[#c4c7c8] hover:text-[#fdfdfd] hover:border-b hover:border-[#fdfdfd]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-[#fdfdfd] z-[110] p-2 -mr-2"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl font-light">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#131313] z-[90] flex flex-col justify-center items-center gap-12 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
              />
            </div>
            
            <motion.nav 
              className="flex flex-col items-center gap-8 relative z-10"
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={navItemVariants}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`font-headline text-3xl tracking-tighter uppercase transition-all duration-300 ${
                        isActive ? 'text-primary' : 'text-[#c4c7c8]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div 
              className="absolute bottom-16 flex gap-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a className="font-label text-[10px] tracking-[0.2em] text-[#8e9192]" href="#">INSTAGRAM</a>
              <a className="font-label text-[10px] tracking-[0.2em] text-[#8e9192]" href="#">VIMEO</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
