'use client';
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

// Define the 4 steps based on your required flow
const STEPS = [
  { id: "service-selection", label: "Choose Service", route: "/service-selection" },
  { id: "date-time", label: "Date & Time", route: "/details" },
  { id: "contact-details", label: "Enter Details", route: "/contact" },
  { id: "confirm-pay", label: "Confirm & Pay", route: "/checkout" },
];

/**
 * Renders a progressive booking bar.
 * In a real Next.js application, currentStep would be derived from usePathname().
 * Here, we use local state for demonstration and testing purposes.
 */
export default function ProgressBar() {
  // Mock State: Replace this with your actual routing logic (e.g., usePathname)
  // 0: Service Selection, 1: Date & Time, 2: Enter Details, 3: Confirm & Pay
  const [currentStep, setCurrentStep] = useState(1); // Set to step 2 for initial visual test

  // Custom colors matching the design (cyan-400)
  const primaryColor = 'cyan-400';
  const doneColor = 'cyan-500';
  const inactiveColor = 'gray-300';
  
  // Calculate the width for the connecting line
  // 0% for step 1, 33.33% for step 2, 66.66% for step 3, 100% for step 4
  const progressWidth = `${(currentStep / (STEPS.length - 1)) * 100}%`; 

  // --- Mock Navigation Handlers for testing purposes ---
  const goToNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  };

  const goToPrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };
  // ----------------------------------------------------

  return (
    <nav aria-label="Booking progress" className="w-full mt-16">
      
      {/* Step Circles and Labels */}
      <div className="flex items-center justify-between relative px-2">
        {/* Horizontal Line Background */}
        <div className={`absolute top-1/2 left-0 right-0 h-1 bg-${inactiveColor} -translate-y-1/2 mx-8 sm:mx-10 transition-all duration-500`}>
          {/* Progress Overlay Line */}
          <div 
            className={`h-full bg-${primaryColor} transition-all duration-500 ease-in-out rounded-full`}
            style={{ width: progressWidth }}
          />
        </div>

        {STEPS.map((step, index) => {
          const isActive = index === currentStep;
          const isDone = index < currentStep;

          // Determine circle styling
          let circleClasses = `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 z-10 cursor-default`;
          let textClasses = `text-center text-sm mt-2 transition-colors duration-400`;

          if (isDone) {
            // Done state: White checkmark on Cyan-500 background
            circleClasses += ` bg-${doneColor} text-white shadow-lg`;
            textClasses += ` text-gray-500`;
          } else if (isActive) {
            // Active state: Cyan-400 border, white background, Cyan text, focused ring
            circleClasses += ` bg-white border-2 border-${primaryColor} text-${primaryColor} ring-4 ring-cyan-100 shadow-xl font-bold`;
            textClasses += ` text-${primaryColor} font-semibold`;
          } else {
            // Inactive state: Gray border, white background, Gray text
            circleClasses += ` bg-white border-2 border-${inactiveColor} text-gray-500 shadow-sm`;
            textClasses += ` text-gray-500`;
          }

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <div className={circleClasses}>
                {isDone ? (
                  // Checkmark SVG for done steps
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  // Step number
                  <span className="text-lg">{index + 1}</span>
                )}
              </div>

              {/* Step Label */}
              <div className={textClasses}>
                {step.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mock Navigation Buttons for testing the component visually */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={goToPrevStep}
          disabled={currentStep === 0}
          className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm
            ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-md active:scale-[0.98]'
            }`}
        >
          <ArrowLeft
            size={18}
            className={`transition-transform duration-300 ${
              currentStep === 0 ? 'text-gray-400' : 'group-hover:-translate-x-1'
            }`}
            />
  <span>Previous</span>
</button>
        <button
          onClick={goToNextStep}
          disabled={currentStep === STEPS.length - 1}
          className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm
            ${
              currentStep === STEPS.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-md active:scale-[0.98]'
            }`}
        >
          <span>Next</span>
          <ArrowRight
            size={18}
            className={`transition-transform duration-300 ${
              currentStep === STEPS.length - 1 ? 'text-gray-400' : 'group-hover:translate-x-1'
            }`}
          />
        </button>
      </div>

      <p className="text-center mt-4 text-sm text-gray-500">
        <span className="font-semibold">Current Step Index:</span> {currentStep}
      </p>

    </nav>
  );
}