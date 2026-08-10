import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header absolute top-[18px] left-[26px] right-[26px] z-[5] h-[52px] px-[18px] flex items-center justify-between border border-white/[0.09] rounded-[28px] bg-[rgba(28,29,29,0.57)] backdrop-blur-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {/* Brand */}
      <a
        className="brand flex items-center gap-2 text-white text-[13px] font-bold tracking-normal no-underline"
        href="#top"
        aria-label="Shalini Kushwaha home"
      >
        <i className="w-2 h-2 rounded-full bg-[#1f81ff] shadow-[0_0_12px_rgba(31,129,255,0.8)] inline-block not-italic"></i>
        <span className="text-white font-bold">Shalini</span>
      </a>

      {/* Hamburger Toggle for Mobile */}
      <button
        onClick={toggleMenu}
        className="menu-button hidden max-[960px]:flex items-center justify-center p-2 rounded-lg text-white bg-transparent border-0 cursor-pointer"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <svg className="hamburger-icon w-[22px] h-[18px] fill-none" viewBox="0 0 22 18">
          <path
            className={`line line-top stroke-current transition-transform duration-300 origin-[11px_9px] ${
              isOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
            d="M2 3H20"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className={`line line-mid stroke-current transition-opacity duration-200 ${
              isOpen ? 'opacity-0' : ''
            }`}
            d="M2 9H20"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className={`line line-bot stroke-current transition-transform duration-300 origin-[11px_9px] ${
              isOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
            d="M2 15H20"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a
          href="#expertise"
          className="nav-pill-link text-[12px] text-white no-underline px-3.5 py-1.5 rounded-full border border-transparent font-medium hover:text-skyBlue"
        >
          Expertise
        </a>
        <a
          href="#experience"
          className="nav-pill-link text-[12px] text-white no-underline px-3.5 py-1.5 rounded-full border border-transparent font-medium hover:text-skyBlue"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="nav-pill-link nav-cta text-[12px] text-white border border-white/35 px-[18px] py-[9px] rounded-full no-underline font-medium hover:text-skyBlue"
        >
          Let's talk
        </a>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <a
            href="#expertise"
            onClick={closeMenu}
            className="nav-pill-link text-[14px] text-white no-underline px-3 py-1 rounded-full w-full text-left font-medium"
          >
            Expertise
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="nav-pill-link text-[14px] text-white no-underline px-3 py-1 rounded-full w-full text-left font-medium"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="nav-pill-link nav-cta text-[14px] text-white border border-white/30 px-[18px] py-[9px] rounded-full no-underline font-medium"
          >
            Let's talk
          </a>
        </nav>
      )}
    </header>
  );
}
