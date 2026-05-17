import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Award, PenTool, Users, Globe, Quote } from 'lucide-react';

const STAGE_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/ujf18isf_WhatsApp%20Image%202026-05-14%20at%2010.15.27%20PM%20%282%29.jpeg";
const DEBATE_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/gnoy8ny8_WhatsApp%20Image%202026-05-14%20at%2010.13.28%20PM%20%281%29.jpeg";
const DEBATE_MEDAL_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/sy1rvy5j_WhatsApp%20Image%202026-05-14%20at%2010.13.34%20PM%20%282%29.jpeg";

const highlights = [
  { icon: Award, text: '1st Position in Debate Competition at Lucknow University' },
  { icon: Users, text: 'Assistant Coordinator / active member in Literati Cell' },
  { icon: Mic, text: 'Anchoring, hosting, event coordination' },
  { icon: Globe, text: 'Interest in speaking on bigger youth platforms' },
  { icon: PenTool, text: 'Writing, poetry, storytelling, event scripts, LinkedIn storytelling' },
];

const wordsICarry = [
  'Clarity', 'Courage', 'Empathy', 'Logic', 'Passion', 'Storytelling', 'Truth',
];

export default function DebateSection() {
  return (
    <section id="speaking" data-testid="debate-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-dark/30 torn-paper-top">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">My voice outside the terminal.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Debate, Literature & Speaking</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <div className="space-y-4 mb-8">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-pink-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-pink-accent" />
                    </div>
                    <p className="font-body text-sm text-charcoal/75 leading-relaxed">{h.text}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Featured quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-border-subtle/40 relative"
            >
              <Quote size={24} className="text-pink-accent/30 absolute top-4 left-4" />
              <p className="font-editorial text-lg sm:text-xl text-charcoal/85 italic pl-8 leading-relaxed">
                "I don't just want to build ideas. I want to speak them into rooms where they matter."
              </p>
            </motion.div>

            {/* Words I carry */}
            <div className="mt-8">
              <p className="font-handwriting text-lg text-charcoal/50 mb-3">words I carry</p>
              <div className="flex flex-wrap gap-2">
                {wordsICarry.map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-3 py-1.5 bg-white border border-border-subtle/50 rounded-lg text-sm font-body text-charcoal/70"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Photos collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotate: -3, y: 20 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="polaroid rotate-[-3deg] inline-block mb-6 hover:rotate-0 transition-transform duration-500"
            >
              <img src={STAGE_IMG} alt="Vanshika at an event" className="w-full max-w-[320px] aspect-[3/4] object-cover object-top" />
              <p className="font-handwriting text-center text-base text-charcoal/60 mt-1">on stage, in my element</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 2, y: 20 }}
              whileInView={{ opacity: 1, rotate: 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="polaroid rotate-[2deg] inline-block ml-8 hover:rotate-0 transition-transform duration-500"
            >
              <img src={DEBATE_IMG} alt="Vanshika with debate certificate" className="w-full max-w-[280px] aspect-[4/3] object-cover" />
              <p className="font-handwriting text-center text-base text-charcoal/60 mt-1">1st place, Lucknow University</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -1, y: 20 }}
              whileInView={{ opacity: 1, rotate: -1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="polaroid rotate-[-1deg] inline-block ml-4 mt-4 hover:rotate-0 transition-transform duration-500"
            >
              <img src={DEBATE_MEDAL_IMG} alt="Debate medal and certificate" className="w-full max-w-[220px] aspect-square object-cover" />
              <p className="font-handwriting text-center text-base text-charcoal/60 mt-1">the medal says it all</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="sticky-note rotate-[3deg] inline-block mt-6 ml-4"
            >
              "where logic meets language"
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
