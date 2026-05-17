import React from 'react';
import { motion } from 'framer-motion';

const timelinePoints = [
  { year: '2023', title: 'Started B.Tech CSE at SRMCEM Lucknow', type: 'milestone' },
  { year: '2023', title: 'Began learning frontend and React', type: 'learning' },
  { year: '2024', title: 'Built early UI projects and prototypes', type: 'project' },
  { year: '2024', title: 'Explored AI-powered app ideas', type: 'learning' },
  { year: '2024', title: 'Built FittyFit full-stack healthcare app', type: 'project' },
  { year: '2025', title: 'Secured 4th position in Pitch Hustle with FittyFit', type: 'achievement' },
  { year: '2025', title: 'Built AQI Visualizer for public health impact', type: 'project' },
  { year: '2025', title: 'Created EchoDiary video diary concept', type: 'project' },
  { year: '2026', title: 'Won 1st position in Debate at Lucknow University', type: 'achievement' },
  { year: '2026', title: 'Completed HENNGE Admission Challenge', type: 'achievement' },
  { year: '2026', title: 'Selected for GSSoC', type: 'achievement' },
  { year: 'Now', title: 'Preparing for global internships, hackathons & full-stack opportunities', type: 'milestone' },
];

const dotColors = {
  milestone: 'bg-pink-accent',
  learning: 'bg-yellow-400',
  project: 'bg-green-400',
  achievement: 'bg-blue-400',
};

export default function TimelineSection() {
  return (
    <section id="timeline" data-testid="timeline-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-dark/30 torn-paper-top">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Still becoming.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">My Journey</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle origin-top"
          />

          <div className="space-y-8">
            {timelinePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-4 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                data-testid={`timeline-point-${i}`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, type: 'spring' }}
                    className={`w-3 h-3 rounded-full ${dotColors[point.type]} ring-4 ring-cream`}
                  />
                </div>

                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                  <span className="font-body text-xs font-bold text-pink-accent uppercase tracking-wider">{point.year}</span>
                  <p className="font-body text-sm text-charcoal/80 mt-1 leading-relaxed">{point.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
