import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Mail, Instagram } from 'lucide-react';

const PROFILE_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/fxxegbwk_WhatsApp%20Image%202026-05-14%20at%2010.16.36%20PM%20%282%29.jpeg";

const stickers = [
  { text: 'Full-stack learner', rotate: '-3deg', top: '18%', right: '8%' },
  { text: 'Debate winner', rotate: '2deg', top: '32%', right: '4%' },
  { text: 'Hackathon finalist', rotate: '-1deg', bottom: '28%', right: '10%' },
  { text: 'GSSoC selected', rotate: '3deg', bottom: '18%', left: '5%' },
  { text: 'Poetic UI lover', rotate: '-2deg', top: '22%', left: '3%' },
];

const handwrittenNotes = [
  { text: '"Code. Creativity. Courage."', top: '15%', left: '2%', rotate: '-4deg' },
  { text: '"Building dreams in code, one bug at a time."', bottom: '25%', right: '2%', rotate: '2deg' },
  { text: '"A girl from Lucknow learning her way into global tech."', bottom: '12%', left: '8%', rotate: '-2deg' },
];

export default function HeroSection() {
  const scrollToWork = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 px-4 sm:px-6">
      {/* Background typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="font-editorial text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-pink-accent/[0.07] leading-none tracking-tighter whitespace-nowrap">
          Vanshika
        </h1>
      </div>

      {/* Sticker badges - hidden on mobile */}
      <div className="hidden lg:block">
        {stickers.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + i * 0.15, type: 'spring', stiffness: 200 }}
            className="absolute bg-white border-2 border-white rounded-xl shadow-md text-xs sm:text-sm px-3 py-1.5 font-body font-semibold text-charcoal z-10"
            style={{ rotate: s.rotate, top: s.top, right: s.right, bottom: s.bottom, left: s.left }}
          >
            {s.text}
          </motion.div>
        ))}
      </div>

      {/* Handwritten notes - hidden on mobile */}
      <div className="hidden md:block">
        {handwrittenNotes.map((n, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.8 + i * 0.2 }}
            className="absolute font-handwriting text-lg text-charcoal/50 z-10"
            style={{ rotate: n.rotate, top: n.top, right: n.right, bottom: n.bottom, left: n.left }}
          >
            {n.text}
          </motion.p>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div className="order-2 lg:order-1">
            {/* Tour guide note */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="sticky-note inline-block mb-8 rotate-[-2deg]"
            >
              Hi, since you're here... let me walk you through my world.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal leading-[1.1] mb-4"
              data-testid="hero-name"
            >
              Vanshika<br />
              <span className="text-pink-accent">Saxena</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-body text-sm sm:text-base text-charcoal/60 font-medium mb-4 tracking-wide"
            >
              Computer Science Student &middot; Full-Stack Learner &middot; AI Builder &middot; Speaker &middot; Debater
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-body text-base sm:text-lg text-charcoal/80 max-w-lg mb-8 leading-relaxed"
            >
              I'm a CS student from Lucknow building thoughtful digital experiences at the intersection of code, creativity, communication, and impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <button onClick={scrollToWork} data-testid="hero-view-work-btn" className="px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium rounded-full hover:bg-charcoal/90 transition-all hover:scale-105 active:scale-95">
                View My Work
              </button>
              <a href="/cv-placeholder.pdf" download data-testid="hero-download-cv-btn" className="px-6 py-3 border-2 border-charcoal text-charcoal font-body text-sm font-medium rounded-full hover:bg-charcoal hover:text-cream transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2">
                <Download size={16} /> Download CV
              </a>
              <button onClick={scrollToContact} data-testid="hero-contact-btn" className="px-6 py-3 bg-pink-accent text-charcoal font-body text-sm font-medium rounded-full hover:bg-pink-accent/80 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2">
                <Mail size={16} /> Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex gap-4 mt-6"
            >
              <a href="https://www.linkedin.com/in/vanshika-saxena-039518329" target="_blank" rel="noopener noreferrer" data-testid="hero-linkedin-link" className="p-2 text-charcoal/60 hover:text-pink-accent transition-colors"><Linkedin size={20} /></a>
              <a href="https://github.com/vanshikacs" target="_blank" rel="noopener noreferrer" data-testid="hero-github-link" className="p-2 text-charcoal/60 hover:text-pink-accent transition-colors"><Github size={20} /></a>
              <a href="https://instagram.com/_.vanshikaxo" target="_blank" rel="noopener noreferrer" data-testid="hero-instagram-link" className="p-2 text-charcoal/60 hover:text-pink-accent transition-colors"><Instagram size={20} /></a>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="polaroid rotate-[3deg] max-w-[300px] sm:max-w-[340px] hover:rotate-0 transition-transform duration-500">
              <img
                src={PROFILE_IMG}
                alt="Vanshika Saxena"
                className="w-full aspect-[3/4] object-cover object-top"
                data-testid="hero-profile-image"
              />
              <p className="font-handwriting text-center text-lg text-charcoal/70 mt-2">this is me :)</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-handwriting text-sm text-charcoal/40">scroll down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={18} className="text-charcoal/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
