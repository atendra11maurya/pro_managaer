import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#151515] font-sans antialiased">
      <main id="top">
        <Hero />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
