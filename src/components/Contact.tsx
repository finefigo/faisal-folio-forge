import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/finefigo', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/faisal-imtiaz-b77119292', icon: Linkedin },
  { label: 'Email', href: 'mailto:imtiazfaisal2005@gmail.com', icon: Mail },
];

const Contact = () => (
  <section id="contact" className="section-anchor section-space">
    <div className="container mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="contact-card"
      >
        <div className="contact-glow" aria-hidden="true" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker">07 / CONTACT</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-tech-light sm:text-4xl">
              Let’s build something useful.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-tech-slate">
              I’m interested in fresher opportunities and conversations around full-stack
              development and applied AI. Reach out by email or find me on GitHub and LinkedIn.
            </p>
            <a className="btn-primary mt-7 inline-flex items-center gap-2" href="mailto:imtiazfaisal2005@gmail.com">
              <Mail aria-hidden="true" size={16} />
              Email Faisal
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('https:') ? '_blank' : undefined}
                rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="social-link"
              >
                <Icon aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
