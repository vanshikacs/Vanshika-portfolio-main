import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Megaphone, Bug, Send, Star, BookOpen } from 'lucide-react';

const hackathons = [
  {
    icon: Hammer,
    stamp: 'Built',
    title: 'Pitch Hustle Hackathon',
    desc: 'Built FittyFit healthcare app with Team TechDivas. Secured 4th position.',
    color: 'bg-pink-accent',
  },
  {
    icon: Send,
    stamp: 'Submitted',
    title: 'HENNGE Admission Challenge',
    desc: 'Completed all missions successfully using Python recursion and strict constraints.',
    color: 'bg-green-400',
  },
  {
    icon: Star,
    stamp: 'Selected',
    title: 'GSSoC Contributor Selection',
    desc: 'Selected as a GSSoC Contributor/Mentee for open source collaboration.',
    color: 'bg-blue-400',
  },
  {
    icon: Bug,
    stamp: 'Debugged',
    title: 'Code Blitz & College Hackathons',
    desc: 'Active participation in college-level coding challenges and hackathons.',
    color: 'bg-yellow-400',
  },
  {
    icon: Megaphone,
    stamp: 'Pitched',
    title: 'AI & Health Tech Exploration',
    desc: 'Exploring hackathons in AI, full-stack, open-source, climate tech, and health tech.',
    color: 'bg-pink-accent',
  },
  {
    icon: BookOpen,
    stamp: 'Still learning',
    title: 'Global Competitions & Internships',
    desc: 'Actively preparing for AI challenges, open-source programs, and global internship opportunities.',
    color: 'bg-cream-dark',
  },
];

export default function HackathonsSection() {
  return (
    <section id="hackathons" data-testid="hackathons-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Built under pressure, learned under fire.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Hackathons & Competitions</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-border-subtle/40 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                data-testid={`hackathon-card-${i}`}
              >
                {/* Stamp */}
                <div className={`absolute top-3 right-3 ${h.color} px-2.5 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-wider rotate-[-3deg]`}>
                  {h.stamp}
                </div>

                <div className="w-10 h-10 rounded-xl bg-pink-light flex items-center justify-center mb-4">
                  <Icon size={20} className="text-pink-accent" />
                </div>

                <h3 className="font-editorial text-lg font-bold text-charcoal mb-2 pr-16">{h.title}</h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
