import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import local images (all .png as you mentioned)
import clothingImg from '../assets/clothing.png';
import hotelImg from '../assets/hotel.png';
import shoesImg from '../assets/shoes.png';
import calculatorImg from '../assets/calculator.png';
import hrmImg from '../assets/hrm.png';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Map project titles to images
  const projectImages = {
    'Gadgets & Clothing Store': clothingImg,
    'Hotel Management System': hotelImg,
    'Shoe Republic': shoesImg,
    'Smart Calculator App': calculatorImg,
    'AI HRM System': hrmImg,
    'Personal Portfolio Website': portfolioImg,
  };

  const staticProjects = [
    {
      _id: '1',
      title: 'Gadgets & Clothing Store',
      description: 'Full‑featured e‑commerce platform with cart, auth, payments.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
      liveUrl: 'https://gadgets-clothing-bogg.vercel.app/',
      githubUrl: 'https://github.com/waqararshad786/GadgetsClothing',
      category: 'mern',
      featured: true,
    },
    {
      _id: '2',
      title: 'Hotel Management System',
      description: 'Room booking, admin dashboard, availability calendar.',
      techStack: ['MERN', 'JWT', 'Bootstrap'],
      liveUrl: 'https://hotel-system-qrfq.vercel.app/',
      githubUrl: 'https://github.com/waqararshad786/Hotel-System',
      category: 'mern',
      featured: true,
    },
    {
      _id: '3',
      title: 'Shoe Republic',
      description: 'Responsive footwear store frontend.',
      techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JS'],
      liveUrl: 'https://shoe-republic.vercel.app/',
      githubUrl: 'https://github.com/waqararshad786/Shoe-Republic',
      category: 'frontend',
      featured: false,
    },
    {
      _id: '4',
      title: 'Smart Calculator App',
      description: 'Interactive calculator with history.',
      techStack: ['React', 'CSS', 'JavaScript'],
      liveUrl: 'https://calculator-beta-blond-66.vercel.app/',
      githubUrl: 'https://github.com/waqararshad786/Calculator',
      category: 'frontend',
      featured: false,
    },
    {
      _id: '5',
      title: 'AI HRM System',
      description: 'HR platform with AI‑powered resume screening.',
      techStack: ['MERN', 'Python', 'AI/ML'],
      liveUrl: '#',
      githubUrl: 'https://github.com/waqararshad786',
      category: 'mern',
      featured: true,
    },
    {
      _id: '6',
      title: 'Personal Portfolio Website',
      description: 'Modern dark portfolio with animations.',
      techStack: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/waqararshad786',
      category: 'frontend',
      featured: false,
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        if (Array.isArray(res.data) && res.data.length) {
          setProjects(res.data);
        } else {
          setProjects(staticProjects);
        }
      } catch (error) {
        console.log('Using static projects');
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-[#050810]">
        <div className="text-center text-slate-400">Loading projects...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-[#050810]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { label: 'All', value: 'all', count: projects.length },
            { label: 'MERN Stack', value: 'mern', count: projects.filter(p => p.category === 'mern').length },
            { label: 'Frontend', value: 'frontend', count: projects.filter(p => p.category === 'frontend').length },
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === tab.value
                  ? 'bg-cyan-500 text-black shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => {
            const projectImage = projectImages[project.title] || clothingImg;
            return (
              <div
                key={project._id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={projectImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {project.featured && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-cyan-500 text-black font-semibold text-sm py-2 rounded-lg hover:bg-cyan-400 transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-white/10 text-slate-200 text-sm py-2 rounded-lg hover:bg-white/20 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;