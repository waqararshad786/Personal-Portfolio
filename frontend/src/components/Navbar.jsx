import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenCV, onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section); break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050810]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); onScrollTo('home'); }} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Waqar.</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); onScrollTo(link.id); }} className={`text-sm font-medium transition ${activeSection === link.id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}>{link.name}</a>)}
          <button onClick={onOpenCV} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-sm font-bold px-4 py-2 rounded-full hover:shadow-lg transition">Download CV</button>
        </div>

        <button className="md:hidden text-white text-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i></button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050810]/95 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col gap-3">
          {links.map(link => <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); onScrollTo(link.id); setMobileMenuOpen(false); }} className="text-slate-300 py-2">{link.name}</a>)}
          <button onClick={() => { onOpenCV(); setMobileMenuOpen(false); }} className="bg-cyan-500 text-black font-bold py-2 rounded-full">Download CV</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;