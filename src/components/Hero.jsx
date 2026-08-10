import React from 'react';
import Navbar from './Navbar';
import heroImg from '../../assets/shalini-hero.jpg';

export default function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-glass">
        <div className="hero-frame">
          
          {/* Header Navbar inside Hero Frame */}
          <Navbar />

          <div className="hero section">
            {/* Hero Copy */}
            <div className="hero-copy">
              <h1>
                Building trust around complex technology.
              </h1>
              <p className="hero-intro">
                Bridging customers, product, and engineering with technical depth, customer empathy, and an ownership mindset, turning complex needs into clear, practical solutions that drive meaningful outcomes.
              </p>
              
              {/* Level 4 Action Buttons with Radial Center-Outward Expansion */}
              <div className="hero-actions">
                <a
                  href="mailto:shalinikushwaha28@gmail.com?subject=Let%27s%20connect"
                  className="button button-primary hero-radial-btn hero-radial-btn-primary"
                >
                  <span>Start a conversation</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shalini-kushwaha-209661124"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary hero-radial-btn hero-radial-btn-secondary"
                >
                  <span>View LinkedIn <span aria-hidden="true" className="ml-1">↗</span></span>
                </a>
              </div>
            </div>

            {/* Level 5 Photo Avatar Frame Model with Bezel & Drop Shadow (matching user's screenshot) */}
            <div className="hero-photo-glass">
              <div className="photo-glass-inner">
                <img
                  src={heroImg}
                  alt="Shalini Kushwaha — Technical Account Manager"
                  className="hero-photo-img"
                />
                <div className="photo-glass-overlay absolute inset-0 pointer-events-none bg-gradient-to-t from-[#121110]/60 via-transparent to-white/10" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
