import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';

const projects = [
  {
    name: 'FittyFit',
    tagline: 'AI-Powered Health & Diet Web App',
    tech: ['React', 'FastAPI', 'Python', 'MongoDB Atlas', 'REST APIs', 'OpenAI/LiteLLM'],
    desc: 'A full-stack health and diet web app focused on food analysis, wellness tracking, authentication, and AI-assisted guidance.',
    work: [
      'Built frontend login/signup flows connected to backend API endpoints',
      'Used FastAPI backend routes for authentication and food analysis',
      'Integrated MongoDB Atlas for cloud database storage',
      'Managed environment variables — database URL, JWT secret, CORS origins, API keys',
      'Debugged CORS errors, failed API requests, deployment issues, and frontend-backend mismatches',
      'Integrated AI functionality using LiteLLM/OpenAI API flow',
    ],
    quote: '"Where I learned that full-stack development is not just code — it\'s debugging invisible connections."',
    mention: 'Secured 4th position in Pitch Hustle at SRMCEM Lucknow with team TechDivas.',
    image: '/images/fittyfit.png',
    demo: 'https://fittyfitt.vercel.app/',
    github: 'https://github.com/vanshikacs/FittyFit',
  },
  {
    name: 'AQI Visualizer',
    tagline: 'Air Flow Decision Support System',
    tech: ['Python', 'Streamlit', 'APIs', 'Pandas', 'Matplotlib', 'Folium'],
    desc: 'An air quality decision-support and visualization app focused on real-time AQI, exposure risk, health recommendations, trend intelligence, and map-based insights.',
    work: [
      'Worked with API-based AQI data and interactive environmental dashboards',
      'Built exposure-risk and health-focused views for pollution awareness',
      'Explored forecasting ideas using weather, pollution, and satellite-style data signals',
    ],
    quote: '"Tech for public health, climate awareness, and accessible environmental data."',
    image: '/images/aqi-visualizer.png',
    demo: 'https://airflowdss.streamlit.app/#air-flow-decision-support-system',
    github: 'https://github.com/vanshikacs/AIR-QUALITY-DSS',
  },
  {
    name: 'Dearly',
    tagline: 'Video Diary & Reflection App',
    tech: ['React.js', 'JavaScript', 'UI/UX', 'Browser APIs', 'AI Concept'],
    desc: 'A privacy-focused video diary and journaling app concept with mood summaries, memory insights, prompts, letters, and yearly memory compilation ideas.',
    work: [
      'Designed a soft, emotional, multi-page frontend experience for reflection and memory keeping',
      'Explored privacy-preserving/on-device AI ideas for summaries, mood insights, and personal memory tracking',
      'Focused on product storytelling, calm UI, and emotionally intelligent UX patterns',
    ],
    quote: '"Where memories meet AI, privacy, and soft human-centered design."',
    image: '/images/dearly.png',
    demo: 'https://dearlywithlove-delta.vercel.app/',
    github: 'https://github.com/vanshikacs/Dearly-Video-diary',
  },
  {
    name: 'SportsPulse',
    tagline: 'Sports Booking Prototype',
    tech: ['UI/UX', 'React', 'Responsive Design', 'Prototype'],
    desc: 'A sports booking and discovery mobile web prototype with a dark cinematic sporty aesthetic, built to explore fast product thinking and polished UI execution.',
    work: [
      'Designed a premium sports discovery experience around venues, sports categories, and user levels',
      'Focused on mobile-first UI, strong visual hierarchy, and energetic interaction patterns',
      'Practiced rapid prototyping and high-impact presentation for UI challenges',
    ],
    quote: '"Fast design thinking, prototype polish, and user experience clarity."',
    image: '/images/sportspulse.jpeg',
    demo: 'https://sportspulse-blue.vercel.app/',
    github: 'https://github.com/vanshikacs/Sportsapp',
  },
  {
    name: 'Abyssal Bloom',
    tagline: 'Interactive Ocean Storytelling Experience',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Visual Storytelling'],
    desc: 'A cinematic ocean-depth storytelling website with glowing deep-sea visuals, immersive sections, scroll-based atmosphere, and editorial interaction design.',
    work: [
      'Created an atmospheric frontend experience around deep-ocean storytelling and visual immersion',
      'Used strong typography, motion, gradients, and depth-based design to build a memorable narrative interface',
      'Practiced competition-style frontend polish, responsive design, and aesthetic storytelling',
    ],
    quote: '"A project where frontend became a little universe of light, depth, and imagination."',
    image: '/images/abyssal-bloom.png',
    demo: 'https://abyssal-bloom.vercel.app/',
    github: 'https://github.com/vanshikacs/Abyssal-Bloom',
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-border-subtle/40 overflow-hidden group transition-all duration-300 hover:shadow-xl"
      data-testid={`project-card-${index}`}
    >
      <div className="relative h-52 overflow-hidden bg-cream">
        <img src={project.image} alt={`${project.name} preview`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute left-4 bottom-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm font-body text-xs font-semibold text-charcoal shadow-sm">
          {project.tagline}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3 gap-3">
          <div>
            <h3 className="font-editorial text-xl font-bold text-charcoal">{project.name}</h3>
            <p className="font-body text-sm text-pink-accent font-medium">{project.tagline}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cream hover:bg-cream-dark transition-colors" data-testid={`project-github-${index}`} aria-label={`${project.name} GitHub`}>
              <Github size={16} className="text-charcoal" />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cream hover:bg-cream-dark transition-colors" data-testid={`project-demo-${index}`} aria-label={`${project.name} live demo`}>
              <ExternalLink size={16} className="text-charcoal" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-0.5 bg-cream text-charcoal/70 text-xs font-body rounded-md border border-border-subtle/30">
              {t}
            </span>
          ))}
        </div>

        <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-3">{project.desc}</p>

        {project.work.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 font-body text-xs text-pink-accent font-medium mb-2 hover:text-pink-accent/80 transition-colors"
              data-testid={`project-expand-${index}`}
            >
              {expanded ? 'Less details' : 'What I worked on'}
              <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-1.5 mb-3 overflow-hidden"
                >
                  {project.work.map((w, i) => (
                    <li key={i} className="font-body text-xs text-charcoal/60 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-accent/40">
                      {w}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}

        {project.mention && (
          <p className="font-body text-xs text-charcoal/50 italic mb-2">{project.mention}</p>
        )}

        <p className="font-handwriting text-base text-pink-accent/70">{project.quote}</p>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-dark/30 torn-paper-top">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Things I built while figuring things out</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Featured Projects</h2>
          <p className="font-body text-sm text-charcoal/60 max-w-2xl mt-4">
            A mix of full-stack systems, climate-tech dashboards, soft personal AI concepts, UI prototypes, and immersive frontend storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
