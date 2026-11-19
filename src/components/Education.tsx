import { motion } from 'framer-motion';
import { ArrowUpRight, Award, BookOpen, GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    institution: 'JIS College of Engineering',
    detail: 'Final-year student · CGPA 8.44/10 through semester 6',
    current: true,
  },
  {
    degree: 'Higher Secondary (XII), West Bengal Board',
    institution: 'Pannalal Institution',
    detail: '91.2% · 2022',
  },
  {
    degree: 'Secondary (X), West Bengal Board',
    institution: 'Tehatta High School',
    detail: '92.43% · 2020',
  },
];

const certifications = [
  {
    title: 'MERN Stack Development with AI Integration',
    provider: 'Euphoria Genx',
    date: 'December 2025',
    url: 'https://drive.google.com/file/d/1CksykuC90E6uoNFdRQYKycO-5sQQqqbA/view?usp=sharing',
  },
  {
    title: 'Android Development',
    provider: 'BCT Training',
    date: 'February 2025',
    url: 'https://drive.google.com/file/d/1L8a9ddEARqgD6X_WlNjS-e8asVBC28Pc/view?usp=sharing',
  },
  {
    title: 'Programming in Java',
    provider: 'NPTEL',
    date: 'July–October 2025',
    url: 'https://drive.google.com/file/d/1k-OCSqx3Oh871eLZ6PSAsNAn21jDtDCC/view?usp=sharing',
  },
  {
    title: 'Generative Artificial Intelligence (Gen AI)',
    provider: 'BCT Training',
    date: 'February 2026',
    url: 'https://drive.google.com/file/d/1ffmNNYYXrXljdJuYH1kIFlpH3MtwW1fK/view?usp=sharing',
  },
];

const Education = () => (
  <section id="education" className="section-anchor section-space">
    <div className="container mx-auto px-5 sm:px-8">
      <div className="section-heading-row">
        <p className="section-kicker">05 / EDUCATION</p>
        <h2 className="section-title">Education & continued learning</h2>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="icon-tile"><GraduationCap aria-hidden="true" size={18} /></span>
            <h3 className="text-lg font-semibold text-tech-light">Education</h3>
          </div>
          <div className="education-list">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="education-item"
              >
                <span className="education-marker" aria-hidden="true" />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="font-medium leading-6 text-tech-light">{item.degree}</h4>
                  {item.current && <span className="current-badge">CURRENT</span>}
                </div>
                <p className="mt-1 text-sm text-tech-slate">{item.institution}</p>
                <p className="mt-2 font-mono text-xs leading-5 text-tech-teal">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="icon-tile"><Award aria-hidden="true" size={18} /></span>
            <h3 className="text-lg font-semibold text-tech-light">Certifications</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <motion.article
                key={certification.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.06 }}
                className="certification-card"
              >
                <BookOpen aria-hidden="true" size={17} className="text-tech-teal" />
                <h4 className="mt-4 font-medium leading-6 text-tech-light">{certification.title}</h4>
                <p className="mt-2 text-sm text-tech-slate">{certification.provider}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-tech-teal/80">
                  {certification.date}
                </p>
                <a
                  className="project-link mt-3 inline-flex items-center gap-1.5 text-xs"
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${certification.title}`}
                >
                  View certificate
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
