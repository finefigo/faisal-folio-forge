import { motion } from 'framer-motion';
import { Brain, Code2, Smartphone, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const focusAreas: { icon: LucideIcon; label: string }[] = [
  { icon: Code2, label: 'Full-stack products' },
  { icon: Brain, label: 'Applied AI & ML' },
  { icon: Smartphone, label: 'Android applications' },
  { icon: Wrench, label: 'Developer tooling' },
];

const About = () => (
  <section id="about" className="section-anchor section-space">
    <div className="container mx-auto px-5 sm:px-8">
      <div className="section-heading-row">
        <p className="section-kicker">01 / ABOUT</p>
        <h2 className="section-title">A little about how I work</h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-8 text-tech-slate sm:text-xl">
            I’m a final-year Computer Science and Engineering student at{' '}
            <span className="text-tech-light">JIS College of Engineering</span>. I enjoy
            taking a problem from its data and product flows through to a clear,
            responsive interface.
          </p>
          <p className="mt-6 text-base leading-7 text-tech-slate">
            My project work ranges from a local account-management tool and a MERN
            booking platform to an Android student portal and an ISL computer-vision
            prototype. I’m looking to bring that hands-on range to a team working on
            real products while continuing to grow as an engineer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-card p-6 sm:p-7"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-tech-light">Areas I’m building in</h3>
            <span className="font-mono text-xs text-tech-teal">FOCUS</span>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map(({ icon: Icon, label }) => (
              <li key={label} className="focus-row">
                <Icon aria-hidden="true" size={17} className="shrink-0 text-tech-teal" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
