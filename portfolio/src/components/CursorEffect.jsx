import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => setCursorVariant('hover'));
      link.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setCursorVariant('hover'));
        link.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      mixBlendMode: "normal",
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", mass: 0.5, delay: 0.05 }}
      />
    </>
  );
};

export default CursorEffect;