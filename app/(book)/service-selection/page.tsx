"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Box, Zap, HeartHandshake, ChevronRight } from 'lucide-react';
import { BookingFlow } from '@/components/BookingFlow';

// --- MOCK DATA & INTERFACES (To make the component runnable) ---
interface Service {
  id: number;
  slug: string;
  name: string;
  short: string;
  price: number;
  durationMins: number;
  icon: React.ReactElement;
  priceUnit: string; // Added to clearly specify the pricing structure
}

// Updated services with friendly names, new prices, and clear units
// const services: Service[] = [
//   {
//     id: 1,
//     slug: "wash-fold",
//     name: "Everyday Wash & Fold",
//     short: "The essential service! Clothes are washed, dried, and perfectly folded.",
//     price: 1.99, 
//     durationMins: 1440, // 24 hours
//     icon: <Shirt className="w-8 h-8 text-cyan-500" />,
//     priceUnit: "/ lb",
//   },
//   {
//     id: 2,
//     slug: "dry-cleaning",
//     name: "Deluxe Dry Cleaning",
//     short: "Professional, gentle care for your suits, dresses, and delicate items.",
//     price: 9.00, 
//     durationMins: 2880, // 48 hours
//     icon: <Box className="w-8 h-8 text-indigo-500" />,
//     priceUnit: "/ garment",
//   },
//   {
//     id: 3,
//     slug: "express",
//     name: "Speedster Express (12H)",
//     short: "Lightning-fast service! Your laundry is ready to wear in just 12 hours.",
//     price: 3.50, 
//     durationMins: 720, // 12 hours
//     icon: <Zap className="w-8 h-8 text-yellow-500" />,
//     priceUnit: "/ lb",
//   },
//   {
//     id: 4,
//     slug: "specialty-items",
//     name: "Household & Bedding Care",
//     short: "Give your bedding, curtains, and large items the deep clean they deserve.",
//     price: 35.00,
//     durationMins: 2880,
//     icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
//     priceUnit: "/ item",
//   },
// ];
// // -----------------------------------------------------------------

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item = {
//   hidden: { y: 20, opacity: 0, scale: 0.98 },
//   show: { y: 0, opacity: 1, scale: 1 },
// };


export default function ServiceSelectionPage() {
 return(
  <>
    <BookingFlow />
  </>
 );
}

//  return (
//     // Light, fresh background for contrast
//     <div className="bg-white min-h-screen py-24 w-full font-inter">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold text-cyan-600 mb-2">
//             OUR OFFERINGS
//           </p>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
//             Choose Your <span className="text-cyan-500">Service Plan</span>
//           </h1>
//           <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
//             Select the perfect cleaning service tailored to your needs—from standard essentials to specialty care.
//           </p>
//         </div>
        
//         {/* Service Grid */}
//         <motion.div
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-10"
//           variants={container}
//           initial="hidden"
//           animate="show"
//         >
//           {services.map((service, index) => (
//             <motion.a
//               key={service.id}
//               href={`/service-selection/${service.slug}`} 
//               variants={item}
//               // Increased padding from p-6 to p-8 for more spacious desktop feel
//               className="relative group block p-8 h-full 
//                 bg-white 
//                 rounded-2xl 
//                 border border-gray-100 
//                 shadow-lg 
//                 hover:shadow-2xl 
//                 hover:border-cyan-400 
//                 transition-all duration-300 
//                 cursor-pointer"
//             >
//               {/* Decorative top border on hover */}
//               <div className="absolute top-0 left-0 w-full h-1 
//                   bg-gradient-to-r from-cyan-400 to-blue-500 
//                   scale-x-0 group-hover:scale-x-100 
//                   transition-transform duration-500 origin-left rounded-t-xl">
//               </div>

//               <div className="flex flex-col h-full pt-2">
                
//                 {/* Icon - Increased size from w-12/h-12 to w-14/h-14 */}
//                 <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-cyan-50 transition-colors duration-300">
//                     {/* The icons inside are 8x8, which is good */}
//                     {service.icon} 
//                 </div>

//                 {/* Title and Description */}
//                 <h2 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
//                   {service.name}
//                 </h2>
//                 <p className="text-gray-500 mb-6 flex-grow text-base leading-relaxed">
//                   {service.short}
//                 </p>
                
//                 {/* Footer / Price & Duration - Reworked layout for better price emphasis */}
//                 <div className="mt-auto pt-6 border-t border-gray-100">
                  
//                   {/* Price Block - Made more prominent */}
//                   <div className="flex items-baseline mb-3">
//                     <span className="text-4xl font-extrabold text-cyan-600">
//                       ${service.price.toFixed(2)}
//                     </span>
//                     <span className="text-lg font-semibold text-zinc-500 ml-1">
//                       {service.priceUnit}
//                     </span>
//                   </div>

//                   {/* Turnaround Time */}
//                   <div className="text-sm text-gray-500 font-medium mb-4">
//                     {Math.floor(service.durationMins / 60)}h Guaranteed Turnaround
//                   </div>


//                   {/* Call to Action Button Look */}
//                   <div className="flex items-center justify-center w-full py-2.5 rounded-xl border border-cyan-400 bg-cyan-50 text-cyan-700 
//                     font-semibold hover:bg-cyan-100 transition-colors duration-200">
//                     <span className="text-sm">Select Service</span>
//                     <ChevronRight className="w-4 h-4 ml-2" />
//                   </div>
//                 </div>
                
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );