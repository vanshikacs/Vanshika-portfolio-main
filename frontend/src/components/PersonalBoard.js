import React from 'react';
import { motion } from 'framer-motion';

const notes = [
  { text: 'I love poetic UI.', color: 'bg-[#fdf6d8]', rotate: '-2deg' },
  { text: 'I debug with panic first, patience later.', color: 'bg-pink-light', rotate: '1deg' },
  { text: "I'm learning DSA one recursion at a time.", color: 'bg-[#fdf6d8]', rotate: '-1deg' },
  { text: 'I want to build things that feel useful and beautiful.', color: 'bg-white', rotate: '2deg' },
  { text: 'I love debates, literature, hackathons, communities, and good design.', color: 'bg-cream-dark', rotate: '-1.5deg' },
  { text: 'Currently becoming: full-stack developer + creative technologist.', color: 'bg-pink-light', rotate: '1.5deg' },
  { text: 'My dream is to grow into someone who can build, speak, lead, and create globally.', color: 'bg-[#fdf6d8]', rotate: '-2deg' },
  { text: 'I like when technology has a heartbeat.', color: 'bg-white', rotate: '2.5deg' },
];

export default function PersonalBoard() {
  return (
    <section id="personal" data-testid="personal-board-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-dark/30 torn-paper-top">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Pieces of me.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Personal Board</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {notes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: parseFloat(note.rotate) }}
              whileInView={{ opacity: 1, scale: 1, rotate: parseFloat(note.rotate) }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`${note.color} p-5 rounded-lg shadow-md border border-border-subtle/30 cursor-default transition-all duration-300`}
              style={{ rotate: note.rotate }}
              data-testid={`personal-note-${i}`}
            >
              <p className="font-handwriting text-xl text-charcoal/80 leading-relaxed">{note.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
