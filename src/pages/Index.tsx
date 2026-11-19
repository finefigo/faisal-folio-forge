import { motion, useScroll, useSpring } from 'framer-motion';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import CursorEffects from '../components/CursorEffects';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Skills from '../components/Skills';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden bg-tech-blue font-sans antialiased">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div
        aria-hidden="true"
        className="reading-progress"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      <div aria-hidden="true" className="ambient-background">
        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />
        <div className="ambient-grid" />
      </div>
      <CursorEffects />
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
