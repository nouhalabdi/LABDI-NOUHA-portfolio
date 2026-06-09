import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-[#111] border border-white/5 rounded-[2rem] overflow-hidden p-4 transition-all"
    >
      <div className="relative h-[250px] overflow-hidden rounded-[1.5rem]">
        <img 
          src={project.image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a href={project.github} className="p-3 bg-white rounded-full text-black hover:scale-110 transition"><Github size={20}/></a>
          <a href={project.demo} className="p-3 bg-white rounded-full text-black hover:scale-110 transition"><ExternalLink size={20}/></a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-blue-500 text-xs font-mono uppercase tracking-widest">{project.type}</span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
          </div>
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition">
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] border border-white/10 text-gray-300 px-3 py-1 rounded-full bg-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};