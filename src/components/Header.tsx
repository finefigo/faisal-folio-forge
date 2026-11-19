import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle, { type PortfolioTheme } from './ThemeToggle';
import SiteCommandPalette from './SiteCommandPalette';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

const getInitialTheme = (): PortfolioTheme => {
  if (typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light') {
    return 'light';
  }

  if (typeof window !== 'undefined') {
    try {
      const savedTheme = window.localStorage.getItem('portfolio-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    } catch {
      return 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  return 'dark';
};

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<PortfolioTheme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The current theme still applies for this visit when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-38% 0px -52% 0px', threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="site-header fixed inset-x-0 top-0 z-50"
      >
        <div className="container mx-auto flex min-h-20 items-center justify-between gap-6 px-5 sm:px-8">
          <a
            href="#hero"
            className="brand-mark shrink-0 text-lg font-semibold tracking-tight text-tech-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Faisal<span className="text-tech-teal">.</span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={'#' + link.id}
                aria-current={activeSection === link.id ? 'location' : undefined}
                className={
                  'nav-link whitespace-nowrap ' +
                  (activeSection === link.id ? 'nav-link-active' : '')
                }
              >
                <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions flex shrink-0 items-center gap-2">
            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            />
            <SiteCommandPalette />
            <a
              className="btn-secondary btn-small hidden items-center gap-2 lg:inline-flex"
              href="https://github.com/finefigo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <button
              type="button"
              className="icon-button xl:hidden"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

      </motion.header>
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              key="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mobile-navigation xl:hidden"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={'#' + link.id}
                  className={
                    'mobile-nav-link ' +
                    (activeSection === link.id ? 'mobile-nav-link-active' : '')
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              ))}
              <a
                className="btn-secondary mt-3 inline-flex items-center justify-center gap-2"
                href="https://github.com/finefigo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </motion.nav>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default Header;
