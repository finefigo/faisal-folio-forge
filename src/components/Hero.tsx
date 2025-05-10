
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "AI/ML Engineer & AR Developer";
  const [showCursor, setShowCursor] = useState(true);
  
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

  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="text-tech-teal font-mono mb-5 sm:mb-8 animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
            Hello, my name is
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
            Faisal Imtiaz.
          </h1>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-tech-slate mb-6 sm:mb-8 flex animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
            {typedText}
            <span className={`ml-1 inline-block h-8 w-3 sm:h-10 sm:w-4 bg-tech-teal ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </h2>
          
          <p className="text-tech-slate text-lg mb-8 sm:mb-12 max-w-xl animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
            I'm a 2nd-year engineering student passionate about solving problems through AI/ML and AR development. Currently focused on building innovative, user-centered tech solutions.
          </p>
          
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: "1s" }}>
            <Button asChild className="group bg-transparent hover:bg-tech-teal/10 text-tech-teal border border-tech-teal rounded px-7 py-5 font-mono text-sm sm:text-base">
              <a href="#projects" className="flex items-center">
                Explore My Projects 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
