// contact.jsx
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

const socials = [
  { icon: Mail, label: "Email", href: "mailto:nouhalabdi5@gmail.com", color: "hover:text-red-400" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nouha-labdi-4191b03a2", color: "hover:text-blue-500" },
  { icon: Github, label: "GitHub", href: "https://github.com/nouhalabdi", color: "hover:text-white" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            LET'S <span className="text-blue-600">CONNECT</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Currently available for freelance projects, full-time positions or just interesting conversations.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
            {socials.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className={`text-5xl md:text-6xl text-gray-500 transition-colors duration-300 ${item.color}`}
                title={item.label}
              >
                <item.icon strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>

          <motion.a
  href="https://wa.me/213798864489"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.4 }}
  whileHover={{ scale: 1.05 }}
  className="inline-flex items-center gap-3 px-8 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-full transition-all duration-300 shadow-lg shadow-green-900/30"
>
  <MessageCircle size={20} />
  WhatsApp Me
</motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;