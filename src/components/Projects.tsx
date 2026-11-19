import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Hand, MapPin, ShoppingBag, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  tags: string[];
  visual: 'marketplace' | 'tooling' | 'vision' | 'android' | 'web';
  icon: LucideIcon;
  codeLink: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'TradeNest',
    category: 'Full-stack marketplace',
    summary: 'A Vercel-deployed marketplace for buying, selling, and renting products, with Gemini-powered customer support.',
    highlights: [
      'Combines a React/Vite frontend and a Vercel serverless Express API backed by MySQL.',
      'Uses JWT authentication, reCAPTCHA, and bcrypt-hashed delivery OTPs.',
      'Includes a Gemini API-powered customer support chatbot.',
    ],
    tags: ['React', 'Vite', 'Express', 'MySQL', 'JWT', 'Gemini API', 'Vercel'],
    visual: 'marketplace',
    icon: ShoppingBag,
    codeLink: 'https://github.com/finefigo/tradenest-marketplace',
  },
  {
    number: '02',
    title: 'ClaudeDeck',
    category: 'Developer tooling',
    summary: 'A cross-platform dashboard and CLI for managing Claude Code accounts.',
    highlights: [
      'Tracks 5-hour and weekly usage, with account selection by priority.',
      'Includes session transfer and auto-resume, usage alerts, local analytics, and encrypted exports.',
      'Built with zero runtime dependencies.',
    ],
    tags: ['TypeScript', 'CLI', 'Desktop', 'Account management'],
    visual: 'tooling',
    icon: Terminal,
    codeLink: 'https://github.com/finefigo/claudedeck',
  },
  {
    number: '03',
    title: 'Signify',
    category: 'Computer vision',
    summary: 'A prototype that translates Indian Sign Language hand gestures into real-time text and speech.',
    highlights: [
      'Prepared character-level and sentence-level gesture data.',
      'Integrated the model into a live HTML, CSS, and JavaScript frontend.',
    ],
    tags: ['Computer Vision', 'Accessibility', 'HTML', 'JavaScript'],
    visual: 'vision',
    icon: Hand,
    codeLink: 'https://github.com/finefigo/signify-isl',
  },
  {
    number: '04',
    title: 'Learning-Partner',
    category: 'Android',
    summary: 'An Android student portal for profiles and academic tracking.',
    highlights: [
      'Includes registration and login, profiles, gradesheets, subjects, and certificates.',
      'Uses a SQL database to store and retrieve academic records.',
    ],
    tags: ['Android', 'Java', 'XML', 'SQL'],
    visual: 'android',
    icon: GraduationCap,
    codeLink: 'https://github.com/finefigo/Learning-Partner',
  },
  {
    number: '05',
    title: 'Salon Finder',
    category: 'Full-stack web',
    summary: 'A full-stack salon booking platform connecting customers with nearby salons.',
    highlights: [
      'Supports location-based discovery and service filters.',
      'Combines JWT authentication and a responsive React UI with a Node.js/Express backend backed by MySQL.',
    ],
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
    visual: 'web',
    icon: MapPin,
    codeLink: 'https://github.com/finefigo/Salon-Finder',
  },
];

const Projects = () => (
  <section id="projects" className="section-anchor section-space">
    <div className="container mx-auto px-5 sm:px-8">
      <div className="section-heading-row">
        <p className="section-kicker">03 / SELECTED WORK</p>
        <h2 className="section-title">Projects built around real problems</h2>
        <p className="section-intro">
          A selection across marketplaces, developer tooling, computer vision, Android, and full-stack web.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.07 }}
              className="project-card group"
            >
          <div className={'project-art project-art-' + project.visual} aria-hidden="true">
                <div className="project-art-grid" />
                <span className="project-art-number">{project.number}</span>
                <span className="project-art-icon"><Icon size={28} strokeWidth={1.5} /></span>
                <span className="project-art-label">{project.category}</span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-tech-light sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="mt-3 leading-6 text-tech-slate">{project.summary}</p>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="project-highlight">
                      <span aria-hidden="true" className="project-bullet" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span className="skill-chip" key={tag}>{tag}</span>)}
                </div>
                <a
                  className="project-link mt-6 inline-flex items-center gap-2"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source
                  <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <a
          className="btn-quiet group inline-flex items-center gap-2"
          href="https://github.com/finefigo?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse all repositories
          <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
