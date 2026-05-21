import React from 'react';
import { motion } from 'framer-motion';

const timelinePoints = [
  {
    year: '2024',
    title: 'Started B.Tech CSE at SRMCEM Lucknow',
    desc: 'The beginning of my engineering chapter — stepping into computer science, curiosity, college communities, and the long road of learning how ideas become software.',
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'Discovered frontend, UI/UX, and React',
    desc: 'Started understanding how interfaces are built: components, layouts, responsive design, animations, and the feeling of making a screen come alive.',
    type: 'learning',
  },
  {
    year: '2025',
    title: 'Built Dearly — a soft video diary and reflection app',
    desc: 'Explored emotional UI/UX, privacy-focused journaling, memory insights, prompts, and AI-assisted reflection through a gentle personal product concept.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Created AirFlow / AQI Visualizer for public-health impact',
    desc: 'Moved into Python dashboards, AQI APIs, exposure-risk thinking, data visualization, and climate-tech ideas for underserved regions.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Designed SportsPulse as a rapid UI prototype',
    desc: 'Practiced dark cinematic product design, mobile-first sports discovery, polished visual hierarchy, and fast frontend storytelling.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Built Abyssal Bloom — an immersive frontend story',
    desc: 'Experimented with ocean-depth storytelling, glowing visuals, scroll atmosphere, motion, and competition-style frontend polish.',
    type: 'project',
  },
  {
    year: '2026',
    title: 'Built FittyFit and pitched it at Pitch Hustle',
    desc: 'Built a full-stack AI health and diet app with React, FastAPI, MongoDB Atlas, APIs, authentication flows, CORS debugging, and AI integration.',
    type: 'project',
  },
  {
    year: '2026',
    title: 'Secured 4th position at Pitch Hustle, SRMCEM Lucknow',
    desc: 'With Team TechDivas, presented FittyFit as a healthcare-tech solution and learned product pitching, teamwork, and building under pressure.',
    type: 'achievement',
  },
  {
    year: '2026',
    title: 'Won 1st position in Debate at Lucknow University',
    desc: 'A milestone for my voice outside the terminal — strengthening stage presence, structured thinking, argumentation, and confidence.',
    type: 'achievement',
  },
  {
    year: '2026',
    title: 'Completed the HENNGE Admission Challenge',
    desc: 'Solved a Python recursion challenge under strict constraints and completed GitHub Gist, JSON POST, HTTP Basic Auth, and TOTP-based submission.',
    type: 'achievement',
  },
  {
    year: '2026',
    title: 'Selected for GirlScript Summer of Code',
    desc: 'Stepped deeper into open-source learning, collaboration, and developer community growth as a Contributor/Mentee.',
    type: 'achievement',
  },
  {
    year: 'Now',
    title: 'Preparing for global internships, hackathons, and full-stack opportunities',
    desc: 'Still becoming — learning DSA, backend systems, cloud basics, better project architecture, communication, and product-minded engineering.',
    type: 'milestone',
  },
];

const dotColors = {
  milestone: 'bg-pink-accent shadow-pink-accent/40',
  learning: 'bg-yellow-400 shadow-yellow-400/40',
  project: 'bg-green-400 shadow-green-400/40',
  achievement: 'bg-blue-400 shadow-blue-400/40',
};

const typeLabels = {
  milestone: 'chapter',
  learning: 'learning',
  project: 'built',
  achievement: 'win',
};

export default function TimelineSection() {
  return (
    <section id="timeline" data-testid="timeline-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-dark/30 torn-paper-top overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-24 right-[8%] sticky-note rotate-6 opacity-80"
      >
        "each bug taught me something"
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Still becoming.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">My Journey</h2>
          <p className="font-body text-sm sm:text-base text-charcoal/60 max-w-2xl mt-4 leading-relaxed">
            From starting B.Tech CSE in 2024 to building projects, pitching ideas, winning debates, completing HENNGE, and growing toward global full-stack opportunities — this is the messy, beautiful map of how I am learning.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-accent/40 via-border-subtle to-charcoal/10 origin-top"
          />

          <div className="space-y-7 sm:space-y-9">
            {timelinePoints.map((point, i) => (
              <motion.div
                key={`${point.year}-${point.title}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.045 }}
                className={`relative flex items-start gap-4 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                data-testid={`timeline-point-${i}`}
              >
                <div className="absolute left-[12px] sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.045, type: 'spring', stiffness: 180 }}
                    className={`w-3.5 h-3.5 rounded-full ${dotColors[point.type]} ring-4 ring-cream shadow-lg`}
                  />
                </div>

                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -3, rotate: i % 2 === 0 ? -0.7 : 0.7 }}
                    className="bg-white/85 backdrop-blur-sm border border-border-subtle/40 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <span className="font-body text-xs font-bold text-pink-accent uppercase tracking-wider">{point.year}</span>
                      <span className="px-2 py-0.5 rounded-full bg-cream text-[10px] font-body uppercase tracking-[0.18em] text-charcoal/45 border border-border-subtle/30">
                        {typeLabels[point.type]}
                      </span>
                    </div>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-charcoal leading-tight">{point.title}</h3>
                    <p className="font-body text-xs sm:text-sm text-charcoal/62 mt-2 leading-relaxed">{point.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
