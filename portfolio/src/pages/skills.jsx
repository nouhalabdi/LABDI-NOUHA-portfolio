// skills.jsx
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Frontend & Design",
    items: ["Html","Css","JavaScript","React", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Dart", "Flutter"],
  },
  {
    category: "Backend & Tools",
    items: ["Flask","Django","Node.js", "Express","Laravel", "Git","GitHub","VS code","MongoDB", "MySQL /SQLite / Firebase","LATEX","RESTful APIs",
"Postman", "JWT", "Docker (basics)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            SKILLS<span className="text-blue-600">.</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Technologies & tools I work with daily to build fast, beautiful and scalable products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-blue-600/30">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800/60 text-gray-200 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/60 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;