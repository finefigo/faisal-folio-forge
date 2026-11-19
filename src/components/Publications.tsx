import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const publications = [
  { title: 'AR-SafeHelmet', date: 'June 2025' },
  { title: 'Smart Energy Harvesting Window Film', date: 'February 2025' },
  { title: 'Innovative Low-Cost and Lightweight Central Tyre Inflation System', date: 'February 2025' },
  { title: 'Weighted Susceptible-Infected-Recovered-Deceased Epidemic Model', date: 'October 2024' },
];

const Publications = () => (
  <section id="research" className="section-anchor section-space section-muted">
    <div className="container mx-auto px-5 sm:px-8">
      <div className="section-heading-row">
        <p className="section-kicker">04 / RESEARCH</p>
        <h2 className="section-title">Research & publications</h2>
        <p className="section-intro">
          Four co-authored publications spanning energy, automotive systems, epidemic
          modeling, and augmented-reality safety.
        </p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {publications.map((publication, index) => (
          <motion.article
            key={publication.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (index % 2) * 0.05 }}
            className="publication-row"
          >
            <span className="publication-icon"><BookOpen aria-hidden="true" size={18} /></span>
            <div className="min-w-0 flex-1">
              <h3 className="font-medium leading-6 text-tech-light">{publication.title}</h3>
              <p className="mt-1 font-mono text-xs text-tech-teal">{publication.date} · Publication</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
