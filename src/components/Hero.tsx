
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "AI/ML Engineer & AR Developer";
  const [showCursor, setShowCursor] = useState(true);
  const [scrolled, setScrolled] = useState(false);
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
  
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
    transition: 'transform 0.15s ease-out'
  };

  return (
    <section 
      ref={heroSectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-5 z-0"></div>
      
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
      <div 
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      {/* Enhanced animated particles with more responsiveness */}
      <div className="particles-container absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <div 
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-tech-teal/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              opacity: Math.random() * 0.7 + 0.2,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${mousePosition.y * 15}px) translateX(${mousePosition.x * 15}px)`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <div 
            className="text-tech-teal font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5 sm:mb-8 animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.2s" }}
          >
            Hello, my name is
          </div>
          
          <h1 
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 sm:mb-6 animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.4s", ...parallaxStyle }}
          >
            Faisal Imtiaz.
          </h1>
          
          <h2 
            ref={subheadingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-tech-slate mb-6 sm:mb-10 flex animate-fadeIn opacity-0" 
            style={{ animationDelay: "0.6s" }}
          >
            <span className="gradient-text">{typedText}</span>
            <span className={`ml-1 inline-block h-10 w-4 sm:h-12 sm:w-5 md:h-14 md:w-6 lg:h-16 lg:w-7 bg-tech-teal ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
          </h2>
          
          <p 
            className="text-tech-slate text-xl md:text-2xl lg:text-3xl mb-10 sm:mb-14 max-w-3xl animate-fadeIn opacity-0" 
            style={{ 
              animationDelay: "0.8s",
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              transition: 'transform 0.3s ease-out' 
            }}
          >
            I'm a 2nd-year engineering student passionate about solving problems through AI/ML and AR development. Currently focused on building innovative, user-centered tech solutions.
          </p>
          
          <div 
            ref={ctaRef}
            className="animate-fadeIn opacity-0 flex flex-wrap gap-6" 
            style={{ animationDelay: "1s" }}
          >
            <Button asChild className="group bg-transparent hover:bg-tech-teal/10 text-tech-teal border border-tech-teal rounded px-8 py-7 font-mono text-lg md:text-xl hover:scale-110 transition-all duration-300">
              <a href="#projects" className="flex items-center">
                Explore My Projects 
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </a>
            </Button>
            <Button asChild className="group bg-tech-teal text-tech-blue hover:bg-tech-teal/90 rounded px-8 py-7 font-mono text-lg md:text-xl hover:scale-110 transition-all duration-300 shadow-lg shadow-tech-teal/20">
              <a href="#contact" className="flex items-center">
                Contact Me
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </a>
            </Button>
          </div>

          {/* Enhanced animated scroll indicator */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${scrolled ? 'opacity-0' : 'opacity-70'} transition-opacity duration-500 animate-bounce`}>
            <div className="w-10 h-14 rounded-full border-2 border-tech-teal flex justify-center items-start p-1 hover:border-tech-light transition-colors duration-300">
              <div className="w-2 h-4 bg-tech-teal rounded-full animate-bounce"></div>
            </div>
            <div className="text-tech-teal text-xs mt-2 font-mono text-center">SCROLL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
