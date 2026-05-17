import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, CheckCircle, Star } from 'lucide-react';

const DEBATE_CERT_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/sy1rvy5j_WhatsApp%20Image%202026-05-14%20at%2010.13.34%20PM%20%282%29.jpeg";
const PITCH_CERT_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/j6s4d2vr_WhatsApp%20Image%202026-05-17%20at%201.06.32%20PM.jpeg";
const DEBATE_FAMILY_IMG = "https://customer-assets.emergentagent.com/job_vanshika-universe/artifacts/gnoy8ny8_WhatsApp%20Image%202026-05-14%20at%2010.13.28%20PM%20%281%29.jpeg";

const achievements = [
  {
    icon: Trophy,
    stamp: '1st Place',
    stampColor: 'bg-yellow-400 text-charcoal',
    title: '1st Position — Debate Competition at Lucknow University',
    desc: 'Secured 1st position in a debate competition at Lucknow University, strengthening my confidence, argumentation, stage presence, clarity of thought, and public speaking abilities.',
    lesson: 'what it taught me: my words hold power.',
    image: DEBATE_CERT_IMG,
    image2: DEBATE_FAMILY_IMG,
  },
  {
    icon: Award,
    stamp: '4th Place',
    stampColor: 'bg-pink-accent text-charcoal',
    title: '4th Position — Pitch Hustle with FittyFit',
    desc: 'Built and pitched FittyFit, a healthcare/AI-powered health and diet app prototype, with my team TechDivas. Secured 4th position and gained experience in product pitching, teamwork, and presenting a tech idea under pressure.',
    lesson: 'what it taught me: building under pressure is a superpower.',
    image: PITCH_CERT_IMG,
  },
  {
    icon: CheckCircle,
    stamp: 'Challenge Completed',
    stampColor: 'bg-green-400 text-charcoal',
    title: 'Completed HENNGE Admission Challenge',
    desc: 'Completed the HENNGE coding challenge using Python recursion under strict constraints: no for/while loops, no comprehensions, standard input/output, GitHub secret Gist submission, JSON POST request, HTTP Basic Authentication, and TOTP-based authentication.',
    lesson: 'what it taught me: constraints breed creativity.',
  },
  {
    icon: Star,
    stamp: 'Selected',
    stampColor: 'bg-blue-400 text-white',
    title: 'Selected for GirlScript Summer of Code',
    desc: 'Selected as a GSSoC Contributor/Mentee, reflecting my interest in open source, collaboration, and learning through real developer communities.',
    lesson: 'what it taught me: community is code too.',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" data-testid="achievements-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-dark/40 torn-paper-top">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Little wins, loud lessons.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Achievement Spotlight</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-border-subtle/40 relative overflow-hidden group transition-all duration-300"
                data-testid={`achievement-card-${i}`}
              >
                {/* Stamp */}
                <div className={`absolute top-4 right-4 ${a.stampColor} px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider rotate-[-3deg] shadow-sm`}>
                  {a.stamp}
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-light flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-pink-accent" />
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-charcoal pr-20 leading-tight">{a.title}</h3>
                </div>

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">{a.desc}</p>

                {a.image && (
                  <div className="mb-4 flex flex-wrap gap-3">
                    <div className="polaroid rotate-[1deg] inline-block max-w-[180px] hover:rotate-0 transition-transform duration-500">
                      <img src={a.image} alt={a.title} className="w-full aspect-[4/3] object-cover" />
                    </div>
                    {a.image2 && (
                      <div className="polaroid rotate-[-2deg] inline-block max-w-[160px] hover:rotate-0 transition-transform duration-500">
                        <img src={a.image2} alt={`${a.title} photo`} className="w-full aspect-[4/3] object-cover" />
                        <p className="font-handwriting text-center text-xs text-charcoal/50 mt-1">proud moment</p>
                      </div>
                    )}
                  </div>
                )}

                <p className="font-handwriting text-lg text-pink-accent/80 italic">{a.lesson}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
