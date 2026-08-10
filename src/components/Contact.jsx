import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-[100px] px-6 md:px-[max(32px,calc((100vw-1156px)/2))] bg-[#393837] border-t border-[#151515] text-white">
      <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-[60px] items-center text-left">
        {/* Left Column: Heading & Copy */}
        <div>
          <h2 className="font-serif font-semibold text-[clamp(42px,5vw,70px)] text-white leading-[1.03] tracking-[-0.055em] mb-[20px]">
            Let’s solve meaningful customer problems together.
          </h2>
          <p className="font-sans text-[17px] text-[#bcbcbc] leading-relaxed max-w-[590px]">
            For a technical account-management, customer-success, or product-support conversation, I’d be glad to connect.
          </p>
        </div>

        {/* Right Column: Actions (Level 4 Radial CTA Button & Interactive Text Link) */}
        <div className="contact-actions flex flex-wrap items-center justify-start lg:justify-end gap-[14px]">
          <a
            href="mailto:shalinikushwaha28@gmail.com?subject=Let%27s%20connect"
            className="hero-radial-btn hero-radial-btn-primary inline-flex items-center justify-center px-[22px] py-[14px] rounded-full text-white text-[14px] font-bold bg-[#1f81ff] shadow-[0_8px_20px_rgba(31,129,255,0.22)]"
          >
            <span>Email Shalini</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shalini-kushwaha-209661124"
            target="_blank"
            rel="noreferrer"
            className="utility-btn-hover text-white text-[14px] font-normal border-b border-white/65 pb-[5px] inline-flex items-center gap-1 hover:border-white transition-all"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
