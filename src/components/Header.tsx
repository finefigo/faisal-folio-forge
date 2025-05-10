
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Achievements", url: "#achievements" },
    { name: "Projects", url: "#projects" },
    { name: "Patents", url: "#patents" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-tech-blue bg-opacity-90 backdrop-blur shadow-lg py-4"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="text-tech-teal font-mono text-xl font-semibold"
            >
              &lt;FI/&gt;
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-mono text-sm">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a href={link.url} className="nav-link">
                    <span className="text-tech-teal mr-1">0{index + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="border border-tech-teal text-tech-teal hover:bg-tech-teal/10 bg-transparent rounded px-4 py-2 text-sm font-mono"
            >
              <a
                href="/Faisal_Imtiaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-tech-teal" />
              ) : (
                <Menu className="h-6 w-6 text-tech-teal" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-tech-navy z-40">
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col space-y-6 text-center font-mono text-lg">
                {navLinks.map((link, index) => (
                  <li key={link.name} className="nav-item">
                    <a
                      href={link.url}
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-tech-teal block mb-1">
                        0{index + 1}.
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 border border-tech-teal text-tech-teal hover:bg-tech-teal/10 bg-transparent rounded px-6 py-3 text-base font-mono"
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
