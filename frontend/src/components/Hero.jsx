import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/p1.jfif';

const Hero = ({ onOpenCV, onScrollTo }) => {
  const canvasRef = useRef(null);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,179,237,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stats = [
    { value: '6+', label: 'Live Projects' },
    { value: '3.5', label: 'CGPA' },
    { value: '2+', label: 'Years Coding' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050810]"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(99,179,237,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 right-48 w-72 h-72 rounded-full bg-cyan-400/8 blur-2xl" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 animate-[fadeUp_0.7s_ease_both]">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            Available for Work
          </div>

          {/* Heading */}
          <h1
            className="font-black leading-none tracking-tighter mb-4 text-white animate-[fadeUp_0.7s_0.1s_ease_both]"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontFamily: "'Syne', sans-serif" }}
          >
            Hi, I'm{' '}
            <span
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite' }}
            >
              Waqar Arshad
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-slate-400 font-semibold mb-5 animate-[fadeUp_0.7s_0.2s_ease_both]"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontFamily: "'Syne', sans-serif" }}
          >
            MERN Stack Developer & <span className="text-cyan-400">Fullstack Engineer</span>
          </p>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md animate-[fadeUp_0.7s_0.3s_ease_both]">
            Crafting high-performance, scalable web applications with modern technologies.
            Passionate about clean code, intuitive UI, and turning ideas into live products.
            Based in <span className="text-slate-300 font-medium">Lahore, Pakistan</span> — open worldwide 🌍
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10 animate-[fadeUp_0.7s_0.35s_ease_both]">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap animate-[fadeUp_0.7s_0.4s_ease_both]">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(79,142,247,0.45)]"
            >
              <i className="fas fa-download" /> Download CV
            </button>
            <button
              onClick={() => onScrollTo('projects')}
              className="inline-flex items-center gap-2 bg-transparent text-slate-300 font-bold text-sm px-7 py-3.5 rounded-full border border-white/10 transition-all duration-300 hover:border-blue-500 hover:text-cyan-400 hover:-translate-y-0.5"
            >
              View Work <i className="fas fa-arrow-right" />
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mt-6 animate-[fadeUp_0.7s_0.45s_ease_both]">
            {[
              { href: 'https://github.com/waqararshad786', icon: 'fab fa-github' },
              { href: 'mailto:waqar00arshad@gmail.com', icon: 'fas fa-envelope' },
              { href: '#', icon: 'fab fa-linkedin-in' },
            ].map(({ href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-1"
              >
                <i className={`${icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>

        {/* Right column — Avatar with your image */}
        <div className="flex justify-center items-center animate-[fadeLeft_1s_0.2s_ease_both]">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Spinning gradient ring */}
            <div
              className="absolute -inset-6 rounded-full border border-transparent animate-[spin_14s_linear_infinite]"
              style={{
                background: 'linear-gradient(135deg, #4f8ef7, #00d4ff, #a855f7) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
              }}
            />
            {/* Dashed rotating ring */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-blue-500/20 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Avatar circle with actual image */}
            <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt="Waqar Arshad"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating tech chips */}
            {[
              { label: 'React.js', icon: '⚛️', pos: '-top-3 -left-20', delay: '0s' },
              { label: 'Node.js', icon: '🟢', pos: '-bottom-3 -left-24', delay: '1s' },
              { label: 'MongoDB', icon: '🍃', pos: '-top-3 -right-16', delay: '0.5s' },
              { label: 'Tailwind', icon: '🌊', pos: '-bottom-3 -right-16', delay: '1.5s' },
            ].map(({ label, icon, pos, delay }) => (
              <div
                key={label}
                className={`absolute ${pos} flex items-center gap-2 bg-slate-800/90 border border-white/8 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 backdrop-blur-sm shadow-xl whitespace-nowrap`}
                style={{ animation: `chipFloat 4s ${delay} ease-in-out infinite` }}
              >
                <span>{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <i className="fas fa-chevron-down text-xs" />
      </div>

      {/* Keyframe animations (inline) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes chipFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;