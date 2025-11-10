import React from 'react';
import {Bubbles} from 'lucide-react';

// Define the custom keyframes for all animations
const loadingStyles = (
  <style>
    {`
      /* Bouncing Bubbles Animation (Individual bubble scale) */
      @keyframes bounce-scale {
        0%, 80%, 100% {
          transform: scale(0);
          opacity: 0.6;
        }
        40% {
          transform: scale(1.0);
          opacity: 1;
        }
      }

      .dot-animation {
        animation: bounce-scale 1.4s infinite ease-in-out both;
      }
      .dot-2 {
        animation-delay: -0.32s;
      }
      .dot-3 {
        animation-delay: -0.16s;
      }

      /* Custom background gradient for dynamic sky effect */
      .sky-background {
        background: linear-gradient(to top right, #63a4ff, #87CEEB, #B0E0E6); /* More vibrant blue gradient */
        background-size: 400% 400%;
        animation: gradient-animation 15s ease infinite;
      }

      @keyframes gradient-animation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      /* Ethereal text shadow for contrast against the sky */
      .ethereal-text-shadow {
        text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4), 
                     0 0 15px rgba(255, 255, 255, 0.6);
      }

      /* Glossy 3D Bubble Appearance */
      .bubble-glossy {
        /* Radial gradient for the 3D shiny effect */
        background: radial-gradient(circle at 30% 30%, #a5f3fc, #22d3ee);
        /* Strong box shadow for depth and a subtle inner shadow for high-gloss shine */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 
                    inset 0 0 15px rgba(255, 255, 255, 0.9);
      }
      
      /* Gentle Floating Animation for the entire content block */
      @keyframes float-up-down {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }

      .content-float {
        animation: float-up-down 8s ease-in-out infinite;
      }
    `}
  </style>
);

/**
 * A full-screen, visually engaging loading component for MilanoLaundry.
 * Features a glossy 3D 'bubbles' animation and content floating directly on a dynamic sky background.
 */
const LoadingScreen = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full sky-background overflow-hidden z-50">
      {/* Inject custom CSS for the animation */}
      {loadingStyles}

      {/* Content: Bubbles, Name, and Message - Floating on the Sky */}
      <div 
        className="relative z-10 flex flex-col items-center space-y-8 p-6 sm:p-10 md:p-16 text-center content-float"
      >
        
        {/* The Bubbles (Icon) Animation - Now glossy and 3D */}
        <div className="flex space-x-4 sm:space-x-6">
          {/* Bubbles scale from base w-10 to lg:w-16 */}
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full dot-animation bubble-glossy"
          ></div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full dot-animation dot-2 bubble-glossy"
          ></div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full dot-animation dot-3 bubble-glossy"
          ></div>
        </div>

        {/* Web App Name - SCALES SMOOTHLY ACROSS BREAKPOINTS */}
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight mt-4 ethereal-text-shadow">
          <span className="text-cyan-200">Milano</span>
          <span className="text-white">Laundry</span>
        </h1>
        
        {/* Friendly Loading Message */}
        <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mt-2 ethereal-text-shadow">
          The sky’s clear — your laundry will be too...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;