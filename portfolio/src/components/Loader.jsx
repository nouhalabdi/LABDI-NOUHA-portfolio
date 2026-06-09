import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-50">
      <div className="relative">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
        />
        
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Code2 className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-400 font-mono text-sm">Loading portfolio...</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;