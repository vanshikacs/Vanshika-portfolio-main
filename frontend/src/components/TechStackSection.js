import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript basics'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Vite', 'Responsive UI', 'UI/UX Design'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'JSON', 'Auth basics', 'CORS', 'API Integration'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MongoDB Atlas', 'SQL basics'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render', 'Netlify', 'Docker basics'],
  },
  {
    category: 'Concepts',
    skills: ['DSA', 'Recursion', 'HTTP', 'Client-Server', 'Deployment', 'Env Variables', 'Product Thinking'],
  },
];

const tagColors = [
  'bg-pink-light text-charcoal border-pink-accent/30',
  'bg-cream-dark text-charcoal border-border-subtle',
  'bg-white text-charcoal border-border-subtle',
  'bg-pink-soft/50 text-charcoal border-pink-accent/20',
];

export default function TechStackSection() {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Things I'm learning and building with</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Tech Stack</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <h3 className="font-editorial text-xl font-bold text-charcoal mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className={`${tagColors[(gi + si) % tagColors.length]} px-4 py-2 rounded-xl text-sm font-body font-medium border cursor-default transition-all duration-200 shadow-sm hover:shadow-md`}
                    data-testid={`skill-tag-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-handwriting text-xl text-charcoal/50 mt-12"
        >
          "Currently learning loudly, debugging patiently."
        </motion.p>
      </div>
    </section>
  );
}
