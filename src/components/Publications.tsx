import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'AR-SafeHelmet',
    date: 'June 2025',
    url: 'https://drive.google.com/file/d/1_SQJeX_IjjliC0FsI_9uIYqT4SoOEIBa/view',
  },
  {
    title: 'Smart Energy Harvesting Window Film',
    date: 'February 2025',
    url: 'https://drive.google.com/file/d/1ubReFRME83FVjGqmyGPQfYZB9-n6Lec6/view',
  },
  {
    title: 'Innovative Low-Cost and Lightweight Central Tyre Inflation System',
    date: 'February 2025',
    url: 'https://drive.google.com/file/d/1ugE8poU_joZFIuyggYosdSNMD8o6D_8Z/view',
  },
  {
    title: 'Weighted Susceptible-Infected-Recovered-Deceased Epidemic Model',
    date: 'October 2024',
    url: 'https://drive.google.com/file/d/1ujm5aNybMmTf2NhUquJFTOpsioNg5dA_/view',
  },
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
              <a
                className="project-link mt-2 inline-flex items-center gap-1.5 text-xs"
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View paper: ${publication.title}`}
              >
                View paper
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
