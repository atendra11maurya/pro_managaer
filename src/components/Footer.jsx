import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-[25px] px-6 md:px-[max(32px,calc((100vw-1156px)/2))] bg-[#151515] border-t border-white/20 text-[#bcbcbc] text-[12px] font-sans">
      <div className="max-w-[1220px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p>© <span id="year">{currentYear}</span> Shalini Kushwaha</p>
        <p>Technical Account Manager · Bengaluru, India</p>
      </div>
    </footer>
  );
}
