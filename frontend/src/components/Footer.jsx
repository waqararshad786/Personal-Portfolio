import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#050810] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <div>© 2025 Waqar Arshad | MERN Stack Developer</div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/waqararshad786" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition"><i className="fab fa-github"></i></a>
          <a href="mailto:waqar00arshad@gmail.com" className="hover:text-cyan-400 transition"><i className="fas fa-envelope"></i></a>
          <a href="#" className="hover:text-cyan-400 transition"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;