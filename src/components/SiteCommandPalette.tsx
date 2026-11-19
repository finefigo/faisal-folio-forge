import { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Home,
  Mail,
  Search,
  UserRound,
} from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from './ui/command';

const destinations = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'research', label: 'Research & publications', icon: BookOpen },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const SiteCommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openWithShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', openWithShortcut);
    return () => window.removeEventListener('keydown', openWithShortcut);
  }, []);

  const navigateTo = (id: string) => {
    setOpen(false);
    window.history.replaceState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <button
        type="button"
        className="command-trigger icon-button xl:w-auto xl:px-3"
        aria-label="Search portfolio sections"
        onClick={() => setOpen(true)}
      >
        <Search aria-hidden="true" size={17} />
        <span className="hidden xl:inline">Jump</span>
        <kbd className="command-trigger-shortcut hidden xl:inline-flex">Ctrl K</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search sections and jump to…" />
        <CommandList>
          <CommandEmpty>No matching section. Try “projects” or “contact”.</CommandEmpty>
          <CommandGroup heading="Navigate portfolio">
            {destinations.map(({ id, label, icon: Icon }) => (
              <CommandItem key={id} value={`${label} ${id}`} onSelect={() => navigateTo(id)}>
                <Icon aria-hidden="true" className="mr-2 h-4 w-4 text-tech-teal" />
                <span>{label}</span>
                <CommandShortcut>↵</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <div className="command-palette-hint">
          <span>↑↓ navigate</span>
          <span>enter select</span>
          <span>esc close</span>
        </div>
      </CommandDialog>
    </>
  );
};

export default SiteCommandPalette;
