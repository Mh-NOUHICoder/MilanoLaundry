"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // <-- IMPORTED 'Variants'
import {
  Calendar,
  Gift,
  HandHeart,
  Truck,
  Shirt,
  Clock,
  Zap,
} from "lucide-react";

// Interface for the main steps
interface Step {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactElement;
  gradient: string; // New: for coloring the step icon background
}

// Interface for the new feature list (the added values at the top)
interface Feature {
  label: string;
  icon: React.ReactElement;
}

export default function HowItWorksSection(): React.ReactElement {
  // Main 3-step process
  const steps: Step[] = [
    {
      step: "1",
      title: "Schedule Pickup",
      desc: "Book your time slot online in under 60 seconds. We'll be there.",
      icon: (
        <Calendar
          className="w-10 h-10 text-yellow-100"
          aria-hidden="true"
        />
      ),
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      step: "2",
      title: "We Clean & Care",
      desc: "Our professionals use eco-friendly processes for expert stain removal and folding.",
      icon: (
        <HandHeart
          className="w-10 h-10 text-green-100"
          aria-hidden="true"
        />
      ),
      gradient: "from-emerald-500 to-green-600",
    },
    {
      step: "3",
      title: "Fresh Delivery",
      desc: "Your immaculately clean clothes are delivered back to your doorstep, on time.",
      icon: (
        <Gift className="w-10 h-10 text-cyan-100" aria-hidden="true" />
      ),
      gradient: "from-cyan-400 to-blue-500", // Using the primary color gradient for the final step
    },
  ];

  // Key Value Proposition features
  const features: Feature[] = [
    {
      icon: <Truck className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
      label: "Free Pickup & Delivery",
    },
    {
      icon: <Shirt className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
      label: "Expert Garment Care",
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" aria-hidden="true" />, // Using Zap icon for consistency
      label: "24hr Fast Turnaround",
    },
  ];
  
  // Animation variants
  // FIX: Explicitly assign the Variants type to satisfy framer-motion's required structure
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // FIX: Explicitly assign the Variants type
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };


  return (
    <section
      className="py-24 bg-zinc-900 text-white font-inter overflow-hidden relative"
      aria-labelledby="howitworks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2
            id="howitworks-heading"
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
          >
            Your Laundry, <span className="text-cyan-400">Simplified</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Experience the future of clean with our effortless 3-step process.
          </p>
        </div>

        {/* --- Key Value Proposition / Feature Section --- */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center gap-6 md:gap-12 items-center text-center px-4 py-6 
            bg-zinc-800/50 border border-zinc-700 rounded-xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-3 transition-transform hover:scale-105 shrink-0"
            >
              {item.icon}
              <p className="text-sm md:text-base font-medium text-zinc-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {/* --- END OF KEY VALUE PROPOSITION SECTION --- */}

        {/* 3-Step Grid / Timeline */}
        <div className="relative">
          {/* Timeline Connector Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-cyan-900 transform -translate-y-1/2 mx-16">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((stepItem, index) => (
              <motion.div
                key={`how-step-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center 
                  // Dark card style
                  bg-zinc-800/80 
                  rounded-2xl p-6 md:p-8 
                  border border-zinc-700 
                  shadow-xl shadow-zinc-950/50"
              >
                {/* Step Icon Container */}
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full 
                    bg-gradient-to-br ${stepItem.gradient} 
                    shadow-2xl shadow-zinc-950/50
                    mb-6 ring-4 ring-zinc-800 transform transition-transform duration-300 hover:scale-105`}
                  role="img"
                  aria-hidden={true}
                >
                  {stepItem.icon}
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute top-0 -translate-y-1/2 
                    w-8 h-8 
                    bg-cyan-400 rounded-full 
                    flex items-center justify-center 
                    text-sm font-bold text-zinc-900 
                    shadow-xl ring-2 ring-zinc-900">
                  {stepItem.step}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {stepItem.title}
                </h3>
                <p className="text-zinc-400 max-w-xs">
                  {stepItem.desc}
                </p>
                
                {/* Mobile Connector Line (Vertical line for small screens) */}
                {index < steps.length - 1 && (
                    <div className="absolute bottom-[-2.5rem] md:hidden w-0.5 h-10 bg-cyan-900">
                        <div className="absolute inset-0 w-full bg-gradient-to-b from-cyan-600 to-cyan-400 opacity-50"></div>
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}