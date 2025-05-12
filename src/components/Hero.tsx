
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "AI/ML Engineer & AR Developer";
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for animation elements
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  
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
    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroSectionRef.current) {
        const { width, height } = heroSectionRef.current.getBoundingClientRect();
        const x = e.clientX / width - 0.5;
        const y = e.clientY / height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <section 
      ref={heroSectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Enhanced floating orbs with stronger parallax effect */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-tech-teal/5 rounded-full filter blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-float-delay"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="text-tech-teal font-mono text-lg mb-4 animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.2s" }}
          >
            Hello, my name is
          </div>
          
          <h1 
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.4s" }}
          >
            Faisal Imtiaz
          </h1>
          
          <h2 
            ref={subheadingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-slate mb-6 flex justify-center animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.6s" }}
          >
            <span className="gradient-text">{typedText}</span>
            <span className={`ml-1 inline-block h-8 w-3 sm:h-10 sm:w-4 md:h-12 md:w-4 bg-tech-teal ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
          </h2>
          
          <p 
            className="text-tech-slate text-lg md:text-xl mb-10 mx-auto max-w-2xl animate-fadeIn opacity-0 text-balance" 
            style={{ animationDelay: "0.8s" }}
          >
            I'm a 2nd-year engineering student passionate about solving problems through AI/ML and AR development. Currently focused on building innovative, user-centered tech solutions.
          </p>
          
          <div 
            ref={ctaRef}
            className="animate-fadeIn opacity-0 flex flex-wrap justify-center gap-4 sm:gap-6" 
            style={{ animationDelay: "1s" }}
          >
            <Button asChild className="btn-primary hover:scale-105 shadow-lg shadow-tech-teal/20">
              <a href="#projects">
                Explore My Projects 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild className="btn-outline hover:scale-105">
              <a href="#contact">
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 animate-bounce">
            <div className="flex flex-col items-center">
              <div className="w-8 h-12 rounded-full border-2 border-tech-teal flex justify-center items-start p-1">
                <div className="w-1 h-3 bg-tech-teal rounded-full animate-bounce"></div>
              </div>
              <span className="text-tech-teal text-xs mt-2 font-mono">SCROLL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
