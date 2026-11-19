import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const achievements = [
  { name: 'JISTECH2K23', icon: Trophy },
  { name: 'JISTECH2K25', icon: Award },
];

const Achievements = () => (
  <section id="awards" className="section-anchor section-space section-muted">
    <div className="container mx-auto px-5 sm:px-8">
      <div className="section-heading-row">
        <p className="section-kicker">06 / RECOGNITION</p>
        <h2 className="section-title">A couple of proud moments</h2>
        <p className="section-intro">
          Secured first position at both JISTECH2K23 and JISTECH2K25 technical fests.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {achievements.map(({ name, icon: Icon }, index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="award-card"
          >
            <span className="award-icon"><Icon aria-hidden="true" size={21} /></span>
            <div>
              <p className="font-mono text-xs text-tech-teal">1ST POSITION</p>
              <h3 className="mt-1 text-xl font-semibold text-tech-light">{name}</h3>
              <p className="mt-2 text-sm text-tech-slate">Technical fest winner</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
