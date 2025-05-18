
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile'; 
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Patents from '../components/Patents';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Custom cursor for desktop only
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a')) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const id = anchor.getAttribute('href');
      if (!id) return;
      
      const element = document.querySelector(id);
      if (!element) return;
      
      e.preventDefault();
      
      const headerOffset = isMobile ? 70 : 100;
      
      window.scrollTo({
        behavior: 'smooth',
        top: element.getBoundingClientRect().top + window.scrollY - headerOffset,
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "rgba(100, 255, 218, 0.2)",
      border: "1px solid #64ffda"
    },
    hover: {
      height: 50,
      width: 50,
      x: cursorPosition.x - 25,
      y: cursorPosition.y - 25,
      backgroundColor: "rgba(100, 255, 218, 0.3)",
      border: "1px solid #64ffda"
    },
    click: {
      height: 28,
      width: 28,
      x: cursorPosition.x - 14,
      y: cursorPosition.y - 14,
      backgroundColor: "rgba(100, 255, 218, 0.5)",
      border: "1px solid #64ffda"
    }
  };

  return (
    <div className="min-h-screen bg-tech-blue antialiased relative font-poppins overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-tech-teal z-[999]"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      {/* Custom Cursor - desktop only */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[999] hidden md:block"
          variants={cursorVariants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue to-tech-navy opacity-95"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tech-teal opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-20 w-96 h-96 bg-purple-600 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating particles - reduced for mobile performance */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(isMobile ? 5 : 10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-tech-teal/10"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: -30,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: "120vh"
              }}
              transition={{ 
                duration: Math.random() * 20 + 10, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                width: Math.random() * 40 + 10, 
                height: Math.random() * 40 + 10,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Patents />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
