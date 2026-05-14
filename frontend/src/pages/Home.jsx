import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ onOpenCV, onScrollTo }) => {
  return (
    <div className="min-h-screen">
      <Navbar onOpenCV={onOpenCV} onScrollTo={onScrollTo} />
      <Hero onOpenCV={onOpenCV} onScrollTo={onScrollTo} />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;