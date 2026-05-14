import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import CVModal from './components/CVModal';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Waqar Arshad | MERN Stack Portfolio";
  }, []);

  // Smooth scroll function
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Home 
        onOpenCV={() => setIsCVModalOpen(true)} 
        onScrollTo={handleScrollToSection}
      />
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </>
  );
}

export default App;