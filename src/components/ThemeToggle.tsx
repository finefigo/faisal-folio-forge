import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export type PortfolioTheme = 'dark' | 'light';

type ThemeToggleProps = {
  theme: PortfolioTheme;
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    className="theme-toggle"
    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    aria-pressed={theme === 'light'}
    title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    onClick={onToggle}
  >
    <motion.span
      className="theme-toggle-thumb"
      animate={{ x: theme === 'dark' ? 30 : 0 }}
      transition={{ type: 'spring', stiffness: 520, damping: 32 }}
      aria-hidden="true"
    />
    <span className="theme-toggle-icons" aria-hidden="true">
      <Sun size={14} className={theme === 'light' ? 'theme-toggle-icon-active' : undefined} />
      <Moon size={14} className={theme === 'dark' ? 'theme-toggle-icon-active' : undefined} />
    </span>
  </button>
);

export default ThemeToggle;
