import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Experience from './pages/experience';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import CursorEffect from './components/CursorEffect';

import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CursorEffect />
      <ScrollProgress />
      <div className="min-h-screen bg-[#050505] text-white font-['Plus_Jakarta_Sans'] overflow-hidden">
        <Navbar />
        
        <main>
          <Home />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="relative py-12 text-center border-t border-white/10 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-black tracking-tighter text-white mb-2">
                  NOUHA<span className="text-blue-400">.</span>
                </h3>
                <p className="text-gray-400">Full-Stack Developer </p>
              </div>
              
              <div className="flex gap-6">
                <a href="mailto:nouhalabdi5@gmail.com.com" className="text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/nouha-labdi-4191b03a2" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/nouhalabdi" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Nouha. Built with passion &nbsp;&nbsp; All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Made with React, Framer Motion & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;