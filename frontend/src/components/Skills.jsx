import React from 'react';

const Skills = () => {
  const techSkillsRange = [
    { name: 'React.js', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Express.js', percentage: 88 },
    { name: 'MongoDB', percentage: 86 },
    { name: 'JavaScript', percentage: 92 },
    { name: 'Tailwind CSS', percentage: 88 },
    { name: 'HTML/CSS', percentage: 94 },
    { name: 'Git & GitHub', percentage: 85 },
    { name: 'Python', percentage: 70 },
    { name: 'REST APIs', percentage: 87 },
  ];

  const coreSkillsRange = [
    { name: 'Communication & Interpersonal', percentage: 90 },
    { name: 'Team Collaboration', percentage: 88 },
    { name: 'Time Management', percentage: 85 },
    { name: 'Problem Solving', percentage: 92 },
    { name: 'Adaptability', percentage: 89 },
    { name: 'Digital Literacy', percentage: 95 },
    { name: 'Data Handling & Reporting', percentage: 87 },
    { name: 'Continuous Learning', percentage: 94 },
  ];

  return (
    <section id="skills" className="relative py-20 bg-[#050810] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full">My Toolkit</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-cyan-400 mb-5 flex items-center gap-2">
            <i className="fas fa-code"></i> Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techSkillsRange.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-cyan-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1.5 rounded-full transition-all duration-500" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-5 flex items-center justify-center gap-2">
            <i className="fas fa-star text-yellow-400"></i> Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreSkillsRange.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-cyan-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;