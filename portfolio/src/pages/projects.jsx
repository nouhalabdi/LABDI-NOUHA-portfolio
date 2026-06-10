// projects.jsx
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Univ-Stage (Stag.io)",
    type: "Full Stack Web App",
    tech: ["React", "Flask", "MongoDB", "Socket.io", "JWT", "PDF Generation"],
    description: "Internship management platform for students, companies, and universities. Features: RBAC, real-time chat, PDF generation, activity tracking, and secure authentication.",
    image: "/projects/univstage.jpg",
    github: "https://github.com/nouhalabdi/Univ-Stage.git",
    demo: "https://pfe-1-oazo.onrender.com/",
  },
  {
    id: 2,
    title: "Med Events Platform",
    type: "Full Stack Web App",
    tech: ["React", "Flask", "SQLAlchemy", "Tailwind CSS", "JWT"],
    description: "Web-based platform for managing scientific events in healthcare sector. Supports event management, participant registration, paper submission/evaluation, workshop organization, and certificate generation.",
    image: "/projects/medevents.png",
    github: "https://github.com/nouhalabdi/Med-Events-.git",
    demo: "https://med-events-2.onrender.com",
  },
  {
    id: 3,
    title: "Glamour Dress",
    type: "E-commerce Web App",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    description: "Online fashion platform for women's clothing. Customers can browse products, view details, add to cart, and place orders online.",
    image: "/projects/glamourdress.jpg",
    github: "https://github.com/nouhalabdi/Glamour-Dress-project.git",
    demo: "https://glamour-dress-project-1.onrender.com",
  }
];
const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            SELECTED WORKS
          </h2>
          <p className="mt-5 text-gray-400 text-lg md:text-xl">
            Recent projects that showcase motion, clean code and great user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative bg-gray-900/60 border border-gray-800/50 rounded-3xl overflow-hidden backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-blue-500 text-xs font-mono uppercase tracking-wider">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm md:text-base line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-gray-800/70 text-gray-300 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
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

export default Projects;