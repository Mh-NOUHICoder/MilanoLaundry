import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);
  // Generate multiple bubbles with random positions and animations
  const bubbles = Array(15).fill(0).map((_, i) => {
    const size = Math.random() * 60 + 20;
    const delay = Math.random() * 6;
    const duration = Math.random() * 3 + 3;
    const startX = Math.random() * 100;
    return <motion.div key={i} className="absolute rounded-full bg-gradient-to-br from-blue-200/60 to-blue-400/40 backdrop-blur-sm border border-blue-300/30" style={{
      width: size,
      height: size,
      left: `${startX}%`
    }} initial={{
      y: '120vh',
      opacity: 0
    }} animate={{
      y: '-20vh',
      opacity: [0, 1, 1, 0],
      x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0]
    }} transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />;
  });
  return <div className="relative bg-gradient-to-br from-sky-200 to-sky-300 z-50 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden">{bubbles}</div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-2">Milano</h1>
          <h2 className="text-4xl font-light text-blue-500">Laundry</h2>
        </motion.div>
        {/* Loading Spinner */}
        <motion.div className="relative w-24 h-24 mb-8" animate={{
        rotate: 360
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }}>
          <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600"></div>
        </motion.div>
        {/* Loading Text */}
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="text-gray-600 text-lg mb-4">
          Preparing your fresh experience...
        </motion.p>
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-blue-400 to-blue-600" style={{
          width: `${progress}%`
        }} />
        </div>
        <motion.p className="text-sm text-gray-500 mt-2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }}>
          {progress}%
        </motion.p>
      </div>
    </div>;
}