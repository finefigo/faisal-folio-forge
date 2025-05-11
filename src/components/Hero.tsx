
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "AI/ML Engineer & AR Developer";
  const [showCursor, setShowCursor] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  // Refs for animation elements
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Trigger animations for elements when component mounts
    const animateElements = () => {
      if (headingRef.current) {
        headingRef.current.classList.add('animate-slide-up');
      }
      if (subheadingRef.current) {
        subheadingRef.current.classList.add('animate-slide-up');
      }
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    };
    
    // Small timeout to ensure elements are in the DOM
    setTimeout(animateElements, 200);
  }, []);

  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-5 z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-tech-teal/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-float-delay"></div>
      
      {/* Animated particles */}
      <div className="particles-container absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-tech-teal/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div 
            className="text-tech-teal font-mono mb-5 sm:mb-8 animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.2s" }}
          >
            Hello, my name is
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4 animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.4s" }}
          >
            Faisal Imtiaz.
          </h1>
          
          <h2 
            ref={subheadingRef}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-tech-slate mb-6 sm:mb-8 flex animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.6s" }}
          >
            <span className="gradient-text">{typedText}</span>
            <span className={`ml-1 inline-block h-8 w-3 sm:h-10 sm:w-4 bg-tech-teal ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
          </h2>
          
          <p 
            className="text-tech-slate text-lg mb-8 sm:mb-12 max-w-xl animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.8s" }}
          >
            I'm a 2nd-year engineering student passionate about solving problems through AI/ML and AR development. Currently focused on building innovative, user-centered tech solutions.
          </p>
          
          <div 
            ref={ctaRef}
            className="animate-fadeIn opacity-0 flex space-x-4" 
            style={{ animationDelay: "1s" }}
          >
            <Button asChild className="group bg-transparent hover:bg-tech-teal/10 text-tech-teal border border-tech-teal rounded px-7 py-5 font-mono text-sm sm:text-base hover:scale-105 transition-all duration-300">
              <a href="#projects" className="flex items-center">
                Explore My Projects 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button asChild className="group bg-tech-teal text-tech-blue hover:bg-tech-teal/90 rounded px-7 py-5 font-mono text-sm sm:text-base hover:scale-105 transition-all duration-300">
              <a href="#contact" className="flex items-center">
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>

          {/* Animated scroll indicator */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${scrolled ? 'opacity-0' : 'opacity-70'} transition-opacity duration-500`}>
            <div className="w-6 h-10 rounded-full border-2 border-tech-teal flex justify-center items-start p-1">
              <div className="w-1.5 h-3 bg-tech-teal rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
