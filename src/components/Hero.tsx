import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Github, Mail } from 'lucide-react';

const highlights = [
  { value: '8.44/10', label: 'CGPA through semester 6' },
  { value: '4', label: 'co-authored publications' },
  { value: '2×', label: 'JISTECH first-place wins' },
];

const Hero = () => (
  <section
    id="hero"
    className="hero-section section-anchor relative flex min-h-[calc(100vh-5rem)] items-center py-28 sm:py-32"
  >
    <div className="container mx-auto grid items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="eyebrow">
          <span className="status-dot" />
          Final-year Computer Science & Engineering student
        </p>
        <h1 className="hero-title mt-7">
          Faisal <span className="text-tech-teal">Imtiaz</span>
        </h1>
        <p className="hero-lede mt-6 max-w-2xl">
          I build practical software across full-stack development and applied AI.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-tech-slate sm:text-lg">
          A final-year student at JIS College of Engineering, interested in full-stack
          development and applied AI/ML. My projects span computer vision, Android,
          web applications, and developer tooling.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a className="btn-primary group" href="#projects">
            Explore projects
            <ArrowDownRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a className="btn-secondary group" href="mailto:imtiazfaisal2005@gmail.com">
            <Mail aria-hidden="true" size={16} />
            Get in touch
          </a>
          <a
            className="btn-quiet group"
            href="https://github.com/finefigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github aria-hidden="true" size={16} />
            GitHub
            <ArrowUpRight aria-hidden="true" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="hero-highlights mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="hero-highlight">
              <span className="font-mono text-xl font-semibold text-tech-light sm:text-2xl">
                {item.value}
              </span>
              <span className="mt-1 text-xs leading-5 text-tech-slate sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
        className="hero-portrait-wrap mx-auto w-full max-w-sm lg:ml-auto lg:mr-8"
      >
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-card">
          <div className="portrait-topline">
            <span>PROFILE</span>
            <span className="portrait-online"><span className="status-dot" /> OPEN TO OPPORTUNITIES</span>
          </div>
          <img
            src="https://i.postimg.cc/qqV5z5Hn/Whats-App-Image-2024-09-28-at-22-24-41-0633665e.jpg"
            alt="Faisal Imtiaz"
            className="portrait-image"
            decoding="async"
          />
          <div className="portrait-caption">
            <span className="font-mono text-xs text-tech-teal">01 / BUILDER</span>
            <span className="mt-1 block text-lg font-semibold text-tech-light">Curious by default.</span>
            <span className="mt-1 block text-sm text-tech-slate">Focused on useful, end-to-end software.</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
