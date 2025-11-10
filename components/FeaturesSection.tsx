"use client";

import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { Zap, Shirt, Wallet, DoorOpen, Smartphone, Leaf } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  // Retaining gradient for unique icon colors
  gradient: string; 
}

interface FeaturesSectionProps {
  featuresRef?: RefObject<HTMLElement>;
}

export default function FeaturesSection({ featuresRef }: FeaturesSectionProps) {
  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-100" />,
      title: "Lightning Fast",
      description: "Get your clothes back within 24 hours with our express service.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Shirt className="w-8 h-8 text-blue-100" />,
      title: "Expert Care",
      description: "Professional cleaning with premium, eco-friendly detergents.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <Wallet className="w-8 h-8 text-green-100" />,
      title: "No Surprises",
      description: "Transparent pricing with no hidden fees. Really.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <DoorOpen className="w-8 h-8 text-purple-100" />,
      title: "Doorstep Magic",
      description: "We pick up and deliver while you focus on what matters.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-100" />,
      title: "Track Everything",
      description: "Real-time tracking from pickup to delivery on your phone.",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-100" />,
      title: "Eco-Friendly",
      description: "We care about your clothes and our planet equally.",
      gradient: "from-emerald-400 to-emerald-600",
    },
  ];

  return (
    <section
      ref={featuresRef}
      // Dark, high-contrast background
      className="py-24 bg-zinc-950 text-white font-inter"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 
              // Cyan-accented badge style
              bg-cyan-400/10 text-cyan-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 
              border border-cyan-800 backdrop-blur-sm shadow-md shadow-cyan-900/50">
            🌟 Why We're Different
          </div>

          <h2
            id="features-heading"
            // Larger, bolder text for impact
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Laundry Day,{" "}
            <span className="text-transparent bg-clip-text 
              // Primary Cyan Gradient (from-cyan-400)
              bg-gradient-to-r from-cyan-400 to-blue-500">
              Perfected
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            We've turned the chore you hate into a service you'll love, combining speed, care, and sustainability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="group 
                // Modern dark card style with rounded corners
                bg-zinc-800/60 
                rounded-3xl p-8 
                border border-zinc-700 
                relative overflow-hidden
                
                // Creative hover effect: Cyan border highlight and subtle glow shadow
                hover:border-cyan-400 
                hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] 
                transition-all duration-500
                cursor-pointer"
            >
                {/* Subtle radial glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-color-cyan-900)_0%,_transparent_60%)]">
                </div>

              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 
                  bg-gradient-to-br ${feature.gradient} 
                  shadow-xl 
                  
                  // Icon container animation
                  group-hover:scale-[1.05] 
                  transition-transform duration-300 
                  relative z-10`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 
                // Title color changes to cyan on hover
                group-hover:text-cyan-400 
                transition-colors duration-300 
                relative z-10">
                {feature.title}
              </h3>

              <p className="text-base text-zinc-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}