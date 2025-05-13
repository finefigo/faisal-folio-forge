
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Update header style based on scroll position
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        const sectionId = section.getAttribute("id");
        if (!sectionId) return;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [{
    name: "About",
    url: "#about"
  }, {
    name: "Skills",
    url: "#skills"
  }, {
    name: "Projects",
    url: "#projects"
  }, {
    name: "Patents",
    url: "#patents"
  }, {
    name: "Achievements",
    url: "#achievements"
  }, {
    name: "Resume",
    url: "#resume"
  }, {
    name: "Contact",
    url: "#contact"
  }];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }} className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-tech-blue/90 backdrop-blur-sm shadow-lg py-3" : "bg-tech-blue/70 backdrop-blur-sm py-5"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.div className="flex items-center" whileHover={{
          scale: 1.05
        }}>
            <a href="#" className="text-tech-teal font-mono text-xl font-semibold">Faisal Imtiaz</a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 font-medium text-sm">
              {navLinks.map((link, index) => {
              const sectionId = link.url.substring(1);
              const isActive = sectionId === activeSection;
              return <li key={link.name} className="relative">
                    <a href={link.url} onClick={e => handleNavClick(e, sectionId)} className={`nav-link transition-colors duration-300 ${isActive ? "text-tech-teal" : "text-tech-slate"}`}>
                      <span className="text-tech-teal mr-1">0{index + 1}.</span>
                      {link.name}
                    </a>
                    {isActive && <motion.div className="absolute -bottom-1 left-0 h-0.5 bg-tech-teal" layoutId="activeSection" initial={{
                  width: 0
                }} animate={{
                  width: "100%"
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }} />}
                  </li>;
            })}
            </ul>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button asChild className="btn-outline text-sm">
                <a href="/Faisal_Imtiaz_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle - Enhanced for better visibility and tap target */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle Menu"
              className="p-2 h-12 w-12 bg-tech-navy-light/50 hover:bg-tech-navy-light text-tech-teal"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu - Enhanced spacing and readability */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-[72px] bg-tech-blue/95 backdrop-blur-md z-40" 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <motion.ul 
                className="flex flex-col space-y-8 text-center font-medium text-lg w-full px-6" 
                initial="hidden" 
                animate="visible" 
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {navLinks.map((link, index) => {
                  const sectionId = link.url.substring(1);
                  const isActive = sectionId === activeSection;
                  return (
                    <motion.li 
                      key={link.name} 
                      className="nav-item" 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <a 
                        href={link.url} 
                        className={`nav-link py-3 px-4 block rounded-lg ${isActive ? "bg-tech-teal/10 text-tech-teal" : "text-tech-slate"}`} 
                        onClick={e => handleNavClick(e, sectionId)}
                      >
                        <span className="text-tech-teal block mb-1">
                          0{index + 1}.
                        </span>
                        {link.name}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <Button 
                  asChild 
                  className="btn-outline text-base h-12 px-8"
                >
                  <a 
                    href="/Faisal_Imtiaz_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>;
};

export default Header;
