// home.jsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 overflow-hidden bg-[#050505]"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-blue-600/40 rounded-full blur-[120px] md:blur-[180px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-purple-600/40 rounded-full blur-[120px] md:blur-[180px] animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          <span className="inline-block text-blue-400 font-mono text-sm md:text-base tracking-widest uppercase mb-5">
            Full Stack Developer
            <br />
            Information Technology Graduate
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-[0.92] font-black tracking-tighter text-white">
            Nouha<br />
            <span className="text-gray-500/80">LABDI.</span>
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Full-Stack Developer passionate about building responsive, user-friendly web applications.
            Specialized in React, Flask/Django, and modern web technologies.
          </p>

          
          <motion.a
            href="/cv.pdf"
            download="Nouha_Labdi_CV.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>
        </motion.div>

        {/* Right - Photo / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-gradient-to-br from-gray-900 to-black"
        >
          <img
            src="nouha1.jpg"
            alt="Nouha - Full Stack Developer"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
              Full Stack Developer
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mt-1">Constantine, Algeria</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;