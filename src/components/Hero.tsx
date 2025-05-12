
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Engineering Student";
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Refs for animation elements
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (typedText.length < textToType.length) {
      timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }, 100);
    } else {
      setIsTypingComplete(true);
    }
    
    return () => clearTimeout(timeout);
  }, [typedText, textToType]);

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
      if (profileRef.current) {
        profileRef.current.classList.add('animate-fade-in');
      }
    };
    
    // Small timeout to ensure elements are in the DOM
    setTimeout(animateElements, 200);
  }, []);

  return (
    <section 
      ref={heroSectionRef}
      className="min-h-[80vh] flex items-center justify-center py-12 relative overflow-hidden"
    >
      {/* Background elements with enhanced animations */}
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="max-w-2xl text-center md:text-left">
            <div 
              className="text-tech-teal font-mono text-lg mb-4 animate-fadeIn opacity-0" 
              style={{ animationDelay: "0.2s" }}
            >
              Hello, my name is
            </div>
            
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 animate-fadeIn opacity-0" 
              style={{ animationDelay: "0.4s" }}
            >
              Faisal Imtiaz
            </h1>
            
            <h2 
              ref={subheadingRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-tech-slate mb-4 flex items-center justify-center md:justify-start animate-fadeIn opacity-0" 
              style={{ animationDelay: "0.6s" }}
            >
              <span className="gradient-text">{typedText}</span>
              <span className={`ml-1 inline-block h-6 w-2 sm:h-8 sm:w-3 md:h-10 md:w-3 bg-tech-teal ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
            </h2>
            
            <p 
              className="text-tech-slate text-lg mb-8 mx-auto md:mx-0 max-w-xl animate-fadeIn opacity-0 text-balance" 
              style={{ animationDelay: "0.8s" }}
            >
              I'm a 2nd-year engineering student passionate about solving problems through AI/ML and AR development. Currently focused on building innovative, user-centered tech solutions.
            </p>
            
            <div 
              ref={ctaRef}
              className="animate-fadeIn opacity-0 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6" 
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
          </div>
          
          {/* Profile picture with animations */}
          <div 
            ref={profileRef}
            className="opacity-0 animate-fadeIn" 
            style={{ animationDelay: "1.2s" }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-tech-teal via-tech-teal/50 to-blue-500/30 opacity-70 blur-sm animate-rotate"></div>
              
              {/* Profile image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-tech-navy-light hover-glow transition-all duration-500 transform hover:scale-105">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Faisal Imtiaz" className="object-cover" />
                  <AvatarFallback className="bg-tech-navy text-tech-teal text-4xl">FI</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-tech-teal/10 animate-float"></div>
              <div className="absolute -bottom-8 -left-4 w-16 h-16 rounded-full bg-blue-500/10 animate-float-delay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
