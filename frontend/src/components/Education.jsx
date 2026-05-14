import React from 'react';

const Education = () => {
  const education = [
    { degree: "BSCS (Computer Science)", institution: "Lahore School of Innovation & Tech", affiliation: "University of Education", year: "2021-2025", cgpa: "3.5/4.0", icon: "fas fa-university" },
    { degree: "ICS (Intermediate)", institution: "Aspire Group of Colleges", year: "2019-2021", grade: "A", icon: "fas fa-school" },
    { degree: "Matriculation", institution: "Government High School", year: "2017-2019", grade: "A+", icon: "fas fa-graduation-cap" }
  ];

  const certifications = [
    { name: "MERN Stack Development", issuer: "Punjab University Lahore", year: "2024", icon: "fab fa-react" },
    { name: "Front-End Developer", issuer: "PNY Trainings", year: "2023", icon: "fab fa-html5" },
    { name: "Freelancing", issuer: "PNY Trainings", year: "2023", icon: "fas fa-laptop-code" },
    { name: "Digital Marketing (Meta Ads)", issuer: "Meta Blueprint", year: "2024", icon: "fab fa-facebook" }
  ];

  return (
    <section id="education" className="py-20 bg-[#050810] relative">
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Education & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education timeline */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2"><i className="fas fa-history"></i> Academic Journey</h3>
            <div className="relative border-l-2 border-cyan-500/30 ml-4 pl-8 space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-10 top-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg"><i className={`${edu.icon} text-black text-xs`}></i></div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white">{edu.degree}</h4>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                    {edu.affiliation && <p className="text-slate-500 text-xs">{edu.affiliation}</p>}
                    <div className="flex justify-between mt-2 text-xs"><span><i className="far fa-calendar-alt mr-1"></i>{edu.year}</span><span><i className="fas fa-star text-yellow-500 mr-1"></i>{edu.cgpa || edu.grade}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2"><i className="fas fa-certificate"></i> Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-black/30 p-3 rounded-xl border border-white/5 hover:border-cyan-500/30 transition">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center"><i className={`${cert.icon} text-cyan-400 text-lg`}></i></div>
                  <div className="flex-1"><p className="font-semibold text-white text-sm">{cert.name}</p><p className="text-slate-400 text-xs">{cert.issuer} • {cert.year}</p></div>
                  <i className="fas fa-check-circle text-cyan-400"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;