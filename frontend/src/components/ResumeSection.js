import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Code, Trophy, Users } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" data-testid="resume-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">The professional version.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border-subtle/40 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-border-subtle/30">
            <h3 className="font-editorial text-2xl font-bold text-charcoal">Vanshika Saxena</h3>
            <p className="font-body text-sm text-charcoal/60 mt-1">B.Tech CSE Student | Full-Stack Learner | AI Builder | Speaker</p>
            <p className="font-body text-xs text-charcoal/50 mt-1">Lucknow, India &middot; vs.vs9411@gmail.com &middot; github.com/vanshikacs</p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={18} className="text-pink-accent" />
                <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Education</h4>
              </div>
              <div className="pl-7">
                <p className="font-body text-sm text-charcoal/80 font-medium">B.Tech Computer Science & Engineering</p>
                <p className="font-body text-xs text-charcoal/55">Shri Ramswaroop Memorial College of Engineering & Management, Lucknow</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code size={18} className="text-pink-accent" />
                <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Technical Skills</h4>
              </div>
              <div className="pl-7 space-y-1">
                <p className="font-body text-xs text-charcoal/70"><strong>Languages:</strong> Python, Java, C/C++, JavaScript, TypeScript</p>
                <p className="font-body text-xs text-charcoal/70"><strong>Frontend:</strong> React.js, HTML/CSS, Tailwind CSS, Responsive UI</p>
                <p className="font-body text-xs text-charcoal/70"><strong>Backend:</strong> FastAPI, REST APIs, MongoDB, SQL</p>
                <p className="font-body text-xs text-charcoal/70"><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Vercel, Docker</p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Trophy size={18} className="text-pink-accent" />
                <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Achievements</h4>
              </div>
              <ul className="pl-7 space-y-1.5">
                <li className="font-body text-xs text-charcoal/70">1st Position — Debate Competition, Lucknow University</li>
                <li className="font-body text-xs text-charcoal/70">4th Position — Pitch Hustle (FittyFit with Team TechDivas)</li>
                <li className="font-body text-xs text-charcoal/70">Completed HENNGE Admission Challenge</li>
                <li className="font-body text-xs text-charcoal/70">Selected for GirlScript Summer of Code (GSSoC)</li>
              </ul>
            </div>

            {/* Leadership */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={18} className="text-pink-accent" />
                <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Leadership & Activities</h4>
              </div>
              <ul className="pl-7 space-y-1.5">
                <li className="font-body text-xs text-charcoal/70">Assistant Coordinator, Literati Cell</li>
                <li className="font-body text-xs text-charcoal/70">Event anchoring, hosting, and coordination</li>
                <li className="font-body text-xs text-charcoal/70">Community volunteering and self-development initiatives</li>
              </ul>
            </div>
          </div>

          {/* Download button */}
          <div className="p-6 sm:p-8 border-t border-border-subtle/30">
            {/* Replace with actual CV link */}
            <a
              href="/cv-placeholder.pdf"
              download
              data-testid="resume-download-btn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium rounded-full hover:bg-charcoal/90 transition-all hover:scale-105 active:scale-95"
            >
              <Download size={16} /> Download Full CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
