import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mic, PenTool, Rocket, Users, BookOpen, Sparkles } from 'lucide-react';

const CASUAL_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/92e9oqf4_WhatsApp%20Image%202026-05-14%20at%2010.15.24%20PM%20%283%29.jpeg";
const GARDEN_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/ftvh6ew7_WhatsApp%20Image%202026-05-14%20at%2010.13.26%20PM%20%283%29.jpeg";

const personalityCards = [
  { icon: Code, title: 'The Coder', desc: 'Learning React, Python, FastAPI, APIs, and deployment.', color: 'bg-pink-light', rotate: '-1deg' },
  { icon: Mic, title: 'The Speaker', desc: 'Anchoring, public speaking, debate, communication.', color: 'bg-cream-dark', rotate: '1deg' },
  { icon: PenTool, title: 'The Writer', desc: 'Literati Cell, scripts, storytelling, poetic expression.', color: 'bg-pink-light', rotate: '-2deg' },
  { icon: Rocket, title: 'The Builder', desc: 'Hackathons, prototypes, AI ideas, product thinking.', color: 'bg-cream-dark', rotate: '1.5deg' },
  { icon: Users, title: 'The Organizer', desc: 'Events, communities, coordination.', color: 'bg-pink-light', rotate: '-1.5deg' },
  { icon: BookOpen, title: 'The Learner', desc: 'DSA, recursion, full-stack, global internships.', color: 'bg-cream-dark', rotate: '2deg' },
  { icon: Sparkles, title: 'The Dreamer', desc: 'Wants to grow into a global tech voice and creative leader.', color: 'bg-pink-light', rotate: '-1deg' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Not just coding, it's becoming.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">About Me</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base sm:text-lg text-charcoal/75 max-w-3xl leading-relaxed mb-16"
        >
          I am a B.Tech CSE student at SRMCEM Lucknow, learning full-stack development, AI-integrated applications, 
          frontend design, backend APIs, and product thinking. I love building projects that feel useful, beautiful, 
          and meaningful. My journey is a mix of code, communication, creativity, leadership, and constant learning.
        </motion.p>

        {/* Personality cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {personalityCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, rotate: 0, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
                className={`${card.color} p-6 rounded-xl border border-border-subtle/50 cursor-default transition-all duration-300`}
                style={{ rotate: card.rotate }}
                data-testid={`about-card-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={20} className="text-pink-accent" />
                </div>
                <h3 className="font-editorial text-lg font-bold text-charcoal mb-2">{card.title}</h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Handwritten note */}
        <motion.div
          initial={{ opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 inline-block sticky-note rotate-[-2deg]"
        >
          "Not just becoming a developer — becoming a voice."
        </motion.div>

        {/* Photo collage strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-6 justify-center"
        >
          <div className="polaroid rotate-[-3deg] max-w-[180px] hover:rotate-0 transition-transform duration-500">
            <img src={CASUAL_IMG} alt="Vanshika casual" className="w-full aspect-[3/4] object-cover object-top" />
            <p className="font-handwriting text-center text-sm text-charcoal/60 mt-1">the girl behind the code</p>
          </div>
          <div className="polaroid rotate-[2deg] max-w-[180px] hover:rotate-0 transition-transform duration-500">
            <img src={GARDEN_IMG} alt="Vanshika outdoors" className="w-full aspect-[3/4] object-cover object-top" />
            <p className="font-handwriting text-center text-sm text-charcoal/60 mt-1">campus vibes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
