import type { Metadata } from "next";
import { Noto_Serif, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Tonny Trimarsanto | Filmmaker Portfolio",
  description: "Dokumenter adalah kisah tentang hidup. Menangkap yang tak terlihat, satu bingkai pada satu waktu.",
};

import { PageTransition } from '@/components/PageTransition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${inter.variable} ${manrope.variable} antialiased bg-background-custom text-on-surface`}
        suppressHydrationWarning
        style={{
          '--font-headline': notoSerif.style.fontFamily,
          '--font-body': inter.style.fontFamily,
          '--font-label': manrope.style.fontFamily,
        } as React.CSSProperties}
      >
        <GrainOverlay />
        <Navbar />
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
