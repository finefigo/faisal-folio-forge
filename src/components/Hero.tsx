import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // Updated typewriter phrases as requested
  const titles = ["Engineering Student", "Exploring GenAI", "Crafting Smart Tech Solutions"];
  const currentTitle = titles[titleIndex];

  // Refs for animation elements
  const heroSectionRef = useRef<HTMLElement>(null);

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenTitles = 2000;
    if (isTyping) {
      if (typedText.length < currentTitle.length && !isDeleting) {
        // Typing
        const timeout = setTimeout(() => {
          setTypedText(currentTitle.substring(0, typedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting) {
        // Pause at end of word
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTitles);
        return () => clearTimeout(timeout);
      } else if (typedText.length > 0 && isDeleting) {
        // Deleting
        const timeout = setTimeout(() => {
          setTypedText(currentTitle.substring(0, typedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Change to next title
        setIsDeleting(false);
        setTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
      }
    }
  }, [typedText, isDeleting, isTyping, currentTitle, titleIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroSectionRef.current) {
        const {
          width,
          height
        } = heroSectionRef.current.getBoundingClientRect();
        const x = e.clientX / width - 0.5;
        const y = e.clientY / height - 0.5;
        setMousePosition({
          x,
          y
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants for framer motion
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section ref={heroSectionRef} className="min-h-[95vh] flex items-center justify-center py-12 md:py-16 pt-28 md:pt-24 pb-24 md:pb-20 relative overflow-hidden" id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-tech-teal/20" initial={{
        x: Math.random() * 100 - 50 + "%",
        y: Math.random() * 100 + "%",
        scale: Math.random() * 0.5 + 0.5
      }} animate={{
        x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
        y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"]
      }} transition={{
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        repeatType: "reverse"
      }} style={{
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        filter: "blur(40px)"
      }} />)}
      </div>
      
      {/* Enhanced floating orbs with stronger parallax effect */}
      <motion.div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-teal/5 rounded-full filter blur-3xl" animate={{
      x: mousePosition.x * -50,
      y: mousePosition.y * -50
    }} transition={{
      type: "spring",
      damping: 15,
      stiffness: 50
    }} />
      <motion.div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" animate={{
      x: mousePosition.x * 50,
      y: mousePosition.y * 50
    }} transition={{
      type: "spring",
      damping: 15,
      stiffness: 50
    }} />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12" variants={containerVariants} initial="hidden" animate="visible">
          {/* Text content */}
          <motion.div className="max-w-2xl text-center md:text-left" variants={itemVariants}>
            <motion.div variants={itemVariants} className="text-tech-teal font-mono text-base md:text-lg mb-4">
              Hello, my name is
            </motion.div>
            
            {/* Updated title as requested */}
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3" variants={itemVariants}>Faisal Imtiaz</motion.h1>
            
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-tech-slate mb-4 flex items-center justify-center md:justify-start" variants={itemVariants}>
              <span className="gradient-text">{typedText}</span>
              <span className={`ml-1 inline-block h-5 w-2 sm:h-6 sm:w-2 md:h-8 md:w-2 lg:h-10 lg:w-3 bg-tech-teal ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
            </motion.h2>
            
            <motion.p className="text-tech-slate text-base md:text-lg mb-8 mx-auto md:mx-0 max-w-xl text-balance" variants={itemVariants}>
              I'm passionate about solving problems through mobile app development, AI/ML and AR development. Currently focused on building innovative, user-centered tech solutions.
            </motion.p>
            
            <motion.div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6" variants={itemVariants}>
              <Button asChild className="btn-primary hover:scale-105 shadow-lg shadow-tech-teal/20 group h-12 min-w-44">
                <a href="#projects">
                  Explore My Projects 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild className="btn-outline hover:scale-105 group h-12 min-w-36">
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Profile picture with animations */}
          <motion.div variants={itemVariants} className="relative mt-8 md:mt-0" whileHover={{
          scale: 1.05
        }} transition={{
          type: "spring",
          stiffness: 200,
          damping: 10
        }}>
            <motion.div className="absolute -inset-4 rounded-full bg-gradient-to-r from-tech-teal via-tech-teal/50 to-blue-500/30 opacity-70 blur-sm" animate={{
            rotate: 360
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} />
            
            {/* Profile image */}
            <motion.div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-tech-navy-light hover-glow transition-all duration-500" initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.8
            }
          }}>
              <Avatar className="w-full h-full">
                <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Faisal Imtiaz" className="object-cover" />
                <AvatarFallback className="bg-tech-navy text-tech-teal text-4xl">FI</AvatarFallback>
              </Avatar>
            </motion.div>
            
            {/* Floating decorative elements */}
            <motion.div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-tech-teal/10" animate={{
            y: [0, -10, 0],
            x: [0, 5, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            <motion.div className="absolute -bottom-8 -left-4 w-16 h-16 rounded-full bg-blue-500/10" animate={{
            y: [0, 10, 0],
            x: [0, -5, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }} />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;