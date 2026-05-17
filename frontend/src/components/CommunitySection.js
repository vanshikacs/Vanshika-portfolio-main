import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Lightbulb } from 'lucide-react';

const BENCH_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/sft8na9v_WhatsApp%20Image%202026-05-14%20at%2010.15.25%20PM%20%282%29.jpeg";

const items = [
  { icon: Heart, text: 'Art of Living / self-development involvement — growing from within.' },
  { icon: Users, text: 'Volunteering and community awareness — believing in collective impact.' },
  { icon: Leaf, text: 'Interest in old age home and underprivileged community work.' },
  { icon: Lightbulb, text: 'Building products that are useful, accessible, and human-centered.' },
];

export default function CommunitySection() {
  return (
    <section id="community" data-testid="community-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">The human side of my journey.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Community & Impact</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border-subtle/30 flex items-start gap-4"
                data-testid={`community-card-${i}`}
              >
                <div className="w-10 h-10 rounded-xl bg-pink-light flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-pink-accent" />
                </div>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-cream-dark/50 rounded-2xl p-8 border border-border-subtle/30 flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <p className="font-editorial text-xl text-charcoal/80 italic leading-relaxed">
              "I believe technology with empathy can change lives. Not just users — but communities, stories, and futures."
            </p>
            <p className="font-handwriting text-lg text-pink-accent/60 mt-3">— a belief I carry</p>
          </div>
          <div className="polaroid rotate-[2deg] max-w-[200px] hover:rotate-0 transition-transform duration-500 flex-shrink-0">
            <img src={BENCH_IMG} alt="Vanshika reflecting" className="w-full aspect-[3/4] object-cover" />
            <p className="font-handwriting text-center text-sm text-charcoal/50 mt-1">pausing to reflect</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
