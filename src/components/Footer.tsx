import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] w-full mt-32 flex flex-col md:flex-row justify-between items-center px-16 py-20 border-t border-[#444748]/15 text-[#fdfdfd] font-label uppercase tracking-[0.1em] text-[10px]">
      <div className="mb-8 md:mb-0">
        © {currentYear} TONNY TRIMARSANTO. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-12">
        <a className="text-[#8e9192] hover:text-[#fdfdfd] transition-opacity duration-300" href="#">INSTAGRAM</a>
        <a className="text-[#8e9192] hover:text-[#fdfdfd] transition-opacity duration-300" href="#">VIMEO</a>
        <a className="text-[#8e9192] hover:text-[#fdfdfd] transition-opacity duration-300" href="#">LINKEDIN</a>
      </div>
      <div className="mt-8 md:mt-0 text-[#8e9192]">
        DESIGNED FOR THE CINEMATIC EYE
      </div>
    </footer>
  );
};

export default Footer;
