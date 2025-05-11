
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Patents from '../components/Patents';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
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
      
      window.scrollTo({
        behavior: 'smooth',
        top: element.getBoundingClientRect().top + window.scrollY - 100,
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-tech-blue antialiased relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue to-tech-navy opacity-95"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-60 h-60 bg-tech-teal opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-20 w-80 h-80 bg-purple-600 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Patents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
