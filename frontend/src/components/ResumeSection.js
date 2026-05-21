import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, GraduationCap, Code, Trophy, Users } from 'lucide-react';

const RESUME_URL = '/files/Vanshika_Saxena_Resume.pdf';

export default function ResumeSection() {
  return (
    <section id="resume" data-testid="resume-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">The professional version.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Resume</h2>
          <p className="font-body text-sm text-charcoal/60 max-w-2xl mt-4">
            A recruiter-friendly snapshot of my education, projects, achievements, leadership, and technical journey — available to view or download.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border-subtle/40 overflow-hidden shadow-sm"
        >
          <div className="p-6 sm:p-8 border-b border-border-subtle/30 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h3 className="font-editorial text-2xl font-bold text-charcoal">Vanshika Saxena</h3>
              <p className="font-body text-sm text-charcoal/60 mt-1">B.Tech CSE Student | Full-Stack Learner | AI Builder | Speaker</p>
              <p className="font-body text-xs text-charcoal/50 mt-1">Lucknow, India &middot; vs.vs9411@gmail.com &middot; github.com/vanshikacs</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="resume-view-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-charcoal font-body text-sm font-medium rounded-full border border-border-subtle/50 hover:bg-pink-light transition-all hover:scale-105 active:scale-95"
              >
                <Eye size={16} /> View Resume
              </a>
              <a
                href={RESUME_URL}
                download="Vanshika_Saxena_Resume.pdf"
                data-testid="resume-download-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream font-body text-sm font-medium rounded-full hover:bg-charcoal/90 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
            <div className="space-y-7">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={18} className="text-pink-accent" />
                  <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Education</h4>
                </div>
                <div className="pl-7 space-y-1">
                  <p className="font-body text-sm text-charcoal/80 font-medium">B.Tech Computer Science & Engineering</p>
                  <p className="font-body text-xs text-charcoal/55">SRMCEM Lucknow &middot; CGPA 7.5 &middot; Expected 2028</p>
                  <p className="font-body text-xs text-charcoal/50">Class XII: 78% &middot; Class X: 80%</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code size={18} className="text-pink-accent" />
                  <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Technical Skills</h4>
                </div>
                <div className="pl-7 space-y-1">
                  <p className="font-body text-xs text-charcoal/70"><strong>Languages:</strong> Python, C, C++, JavaScript, TypeScript basics</p>
                  <p className="font-body text-xs text-charcoal/70"><strong>Frontend:</strong> React.js, HTML/CSS, Tailwind CSS, Vite, Responsive UI</p>
                  <p className="font-body text-xs text-charcoal/70"><strong>Backend:</strong> FastAPI, REST APIs, JSON, MongoDB Atlas, SQL basics</p>
                  <p className="font-body text-xs text-charcoal/70"><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Vercel, Render, Netlify, Docker basics</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Trophy size={18} className="text-pink-accent" />
                  <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Achievements</h4>
                </div>
                <ul className="pl-7 space-y-1.5">
                  <li className="font-body text-xs text-charcoal/70">1st Position — Debate Competition, Lucknow University</li>
                  <li className="font-body text-xs text-charcoal/70">4th Position — Pitch Hustle, SRMCEM Lucknow with FittyFit</li>
                  <li className="font-body text-xs text-charcoal/70">Selected for GirlScript Summer of Code as Contributor/Mentee</li>
                  <li className="font-body text-xs text-charcoal/70">Completed HENNGE Admission Challenge</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users size={18} className="text-pink-accent" />
                  <h4 className="font-body text-sm font-bold text-charcoal uppercase tracking-wider">Leadership & Activities</h4>
                </div>
                <ul className="pl-7 space-y-1.5">
                  <li className="font-body text-xs text-charcoal/70">Assistant Coordinator, Literati Cell</li>
                  <li className="font-body text-xs text-charcoal/70">Anchoring, hosting, debate, writing, and event coordination</li>
                  <li className="font-body text-xs text-charcoal/70">Art of Living community and self-development involvement</li>
                </ul>
              </div>
            </div>

            <div className="bg-cream rounded-2xl border border-border-subtle/40 overflow-hidden min-h-[520px]">
              <div className="px-4 py-3 border-b border-border-subtle/30 flex items-center justify-between">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">Live Preview</span>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-pink-accent hover:text-pink-accent/80">Open full size</a>
              </div>
              <iframe
                title="Vanshika Saxena Resume"
                src={`${RESUME_URL}#toolbar=0&navpanes=0`}
                className="w-full h-[520px] bg-white"
                data-testid="resume-pdf-preview"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

