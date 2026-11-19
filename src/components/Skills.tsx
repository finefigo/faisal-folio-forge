import { Brain, Code2, Database, Globe, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Web & mobile',
    icon: Globe,
    items: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'XML', 'Android Studio'],
  },
  {
    title: 'Applied AI / ML',
    icon: Brain,
    items: ['NumPy', 'Pandas', 'scikit-learn', 'Prompt Engineering', 'OpenAI API', 'Gemini API'],
  },
  {
    title: 'Data & tools',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'JWT Authentication'],
  },
  {
    title: 'Working style',
    icon: Users,
    items: ['Team Collaboration', 'Communication', 'Time Management'],
  },
];

const Skills = () => (
  <section id="skills" className="section-anchor section-space section-muted">
    <div className="container mx-auto px-5 sm:px-8">
      <div className="section-heading-row">
        <p className="section-kicker">02 / TOOLKIT</p>
        <h2 className="section-title">Tools I use to make things</h2>
        <p className="section-intro">
          A practical mix of programming, product development, and applied AI skills.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, items }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="skill-card"
          >
            <div className="flex items-center gap-3">
              <span className="icon-tile"><Icon aria-hidden="true" size={18} /></span>
              <h3 className="text-base font-semibold text-tech-light">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => <span key={item} className="skill-chip">{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
