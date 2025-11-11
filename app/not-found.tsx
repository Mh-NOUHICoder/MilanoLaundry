'use client';
import React, { useEffect, useState } from 'react';
export interface NotFoundProps {
  /**
   * Optional custom heading text
   */
  heading?: string;
  /**
   * Optional custom message
   */
  message?: string;
  /**
   * Text for the home button
   */
  buttonText?: string;
  /**
   * Function to call when the home button is clicked
   */
  onHomeClick?: () => void;
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Optional data-id for testing
   */
  'data-id'?: string;
}
const NotFound: React.FC<NotFoundProps> = ({
  heading = '404, Page Not Found.',
  message,
  buttonText = 'Please Take Me Home',
  onHomeClick = () => window.location.href = '/',
  className = '',
  'data-id': dataId
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isHydrated, setIsHydrated] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Mark as hydrated after component mounts
    setIsHydrated(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateEyePosition = (eyeIndex: number) => {
    if (!isHydrated) return { x: 0, y: 0 };
    
    const eyeElement = document.getElementById(`eye-${eyeIndex}`);
    if (!eyeElement) return {
      x: 0,
      y: 0
    };
    const eyeRect = eyeElement.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    // Calculate angle between mouse and eye center
    const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
    // Limit the movement radius
    const maxRadius = eyeRect.width * 0.2;
    const x = Math.cos(angle) * maxRadius;
    const y = Math.sin(angle) * maxRadius;
    return {
      x,
      y
    };
  };
  const leftEyePosition = calculateEyePosition(1);
  const rightEyePosition = calculateEyePosition(2);
  return <div className={`min-h-screen w-full bg-zink [#f8ecec] flex flex-col items-center justify-center p-4 ${className}`} data-id={dataId}>
      {/* Mock header - just for visual similarity to the example */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:p-6">
        
      </div>
      {/* Eyes container */}
      <div className="flex items-center justify-center mb-12 relative">
        <div id="eye-1" className="relative w-40 h-40 md:w-64 md:h-64 bg-white rounded-full mx-2 md:mx-4 flex items-center justify-center shadow-lg">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-black rounded-full absolute" style={{
          transform: `translate(${leftEyePosition.x}px, ${leftEyePosition.y}px)`
        }} />
        </div>
        <div id="eye-2" className="relative w-40 h-40 md:w-64 md:h-64 bg-white rounded-full mx-2 md:mx-4 flex items-center justify-center shadow-lg">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-black rounded-full absolute" style={{
          transform: `translate(${rightEyePosition.x}px, ${rightEyePosition.y}px)`
        }} />
        </div>
      </div>
      {/* Error message */}
      <h1 className="text-4xl md:text-6xl font-serif text-center mb-8">
        {heading}
      </h1>
      {message && <p className="text-xl text-center mb-8">{message}</p>}
      {/* Action button */}
      <button onClick={onHomeClick} className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 cursor-pointer transition-all">
        {buttonText}
      </button>
    </div>;
};

export default NotFound;