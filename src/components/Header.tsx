
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
      setScrolled(offset > 50);

      // Get all sections and find which one is currently in view
      const sections = ["hero", "about", "skills", "projects", "patents", "achievements", "contact"];
      let current = "hero";
      
      // Check each section to see which one is currently in the viewport
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section active if its top is within 100px of the viewport top
          if (rect.top <= 100 && rect.bottom > 100) {
            current = sectionId;
          }
        }
      }
      
      setActiveSection(current);
    };

    // Throttle scroll events for better performance
    let scrollTimeout: number;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      
      scrollTimeout = window.setTimeout(() => {
        handleScroll();
        scrollTimeout = 0;
      }, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Patents", url: "#patents" },
    { name: "Achievements", url: "#achievements" },
    { name: "Contact", url: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    console.log(`Navigating to section: ${sectionId}`);
    
    // Close mobile menu immediately
    setIsMenuOpen(false);
    
    // Find the target element
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      console.error(`Section ${sectionId} not found`);
      return;
    }
    
    // Calculate scroll position with proper offset
    const headerHeight = 80;
    const elementTop = targetElement.offsetTop;
    const scrollToPosition = elementTop - headerHeight;
    
    console.log(`Scrolling to position: ${scrollToPosition} for section: ${sectionId}`);
    
    // Update active section immediately
    setActiveSection(sectionId);
    
    // Scroll to the target position
    window.scrollTo({
      top: Math.max(0, scrollToPosition),
      behavior: "smooth"
    });
  };

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20
      }} 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-tech-blue/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-tech-blue/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, "hero")}
              className="text-tech-teal font-mono text-xl font-semibold"
            >
              Faisal Imtiaz
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 font-medium text-sm">
              {navLinks.map((link, index) => {
                const sectionId = link.url.substring(1);
                const isActive = sectionId === activeSection;
                return (
                  <li key={link.name} className="relative">
                    <a 
                      href={link.url} 
                      onClick={(e) => handleNavClick(e, sectionId)} 
                      className={`nav-link transition-colors duration-300 hover:text-tech-teal cursor-pointer ${
                        isActive ? "text-tech-teal" : "text-tech-slate"
                      }`}
                    >
                      <span className="text-tech-teal mr-1">0{index + 1}.</span>
                      {link.name}
                    </a>
                    {isActive && (
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 bg-tech-teal" 
                        layoutId="activeSection" 
                        initial={{ width: 0 }} 
                        animate={{ width: "100%" }} 
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }} 
                      />
                    )}
                  </li>
                );
              })}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="btn-outline text-sm">
                <a 
                  href="https://drive.google.com/file/d/1vHYfO0NDGwzDWsvBlW0i2LUtqJPCBdMU/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
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
                        className={`nav-link py-3 px-4 block rounded-lg transition-colors duration-300 cursor-pointer ${
                          isActive 
                            ? "bg-tech-teal/10 text-tech-teal" 
                            : "text-tech-slate hover:text-tech-teal"
                        }`} 
                        onClick={(e) => handleNavClick(e, sectionId)}
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
                    href="https://drive.google.com/file/d/1vHYfO0NDGwzDWsvBlW0i2LUtqJPCBdMU/view?usp=drivesdk" 
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
    </motion.header>
  );
};

export default Header;
