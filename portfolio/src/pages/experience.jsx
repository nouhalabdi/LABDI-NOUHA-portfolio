import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Abdelhamid Mehri University - Constantine 2",
    position: "Bachelor's Degree in Computer Science - IT",
    period: "2023 - 2026",
    location: "Constantine, Algeria",
    description: "Graduated with a Bachelor's degree in Computer Science, specializing in Information Technology. Final year project: Developing a complete Internship Management System (Univ-Stage) - Grade: 18/20.",
    tech: ["React", "Django","Tailwind CSS", "MongoDB", "Python"],
    link: "https://github.com/nouhalabdi/Univ-Stage.git"
  },
  {
    id: 2,
    company: "Academic Projects",
    position: "Full Stack Developer",
    period: "2025 - 2026",
    location: "Team Projects",
    description: "Developed multiple full-stack web applications including Med Events (Scientific Events Platform) and Glamour Dress (E-commerce Platform). Collaborated in teams of 3-5 members.",
    tech: ["React", "Flask", "node.js", "SQLite","html","css","tailwind css","js"],
    link: "https://github.com/nouhalabdi/"
    
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Career Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            EXPERIENCE<span className="text-blue-600">.</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg md:text-xl">Hands-on experience designing, developing,
             and maintaining high-performance web applications,
              from concept to deployment.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0 transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8 md:pl-0 md:text-right' : 'md:ml-auto md:pl-8'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[#0a0a0a] z-10 ${
                index % 2 === 0 
                  ? 'left-0 md:left-1/2 md:transform md:-translate-x-1/2' 
                  : 'left-0 md:left-1/2 md:transform md:-translate-x-1/2'
              }`} />
              
              <div className="ml-10 md:ml-0">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                      <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={exp.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;