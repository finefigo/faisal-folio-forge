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
    <span className="theme-toggle-icons" aria-hidden="true">
      <Sun size={14} />
      <Moon size={14} />
    </span>
    <motion.span
      className="theme-toggle-thumb"
      animate={{ x: theme === 'light' ? 30 : 0 }}
      transition={{ type: 'spring', stiffness: 520, damping: 32 }}
      aria-hidden="true"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -55, scale: 0.65, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 420, damping: 22 }}
      >
        {theme === 'light' ? <Sun size={15} /> : <Moon size={15} />}
      </motion.span>
    </motion.span>
  </button>
);

export default ThemeToggle;
