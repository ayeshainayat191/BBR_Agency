"use client"

import React from 'react';
import { Lightbulb, Box, Rocket, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const LaunchSaaS = () => {
  const steps = [
    {
      title: "Idea",
      desc: "Turn your concept into a clear, validated SaaS plan.",
      icon: <Lightbulb className="w-10 h-10" />,
      side: "left"
    },
    {
      title: "Build",
      desc: "We design and develop a fast, scalable MVP.",
      icon: <Box className="w-10 h-10" />,
      side: "right"
    },
    {
      title: "Launch",
      desc: "Go live with confidence and start acquiring users.",
      icon: <Rocket className="w-10 h-10" />,
      side: "left"
    },
    {
      title: "Grow",
      desc: "Scale your product with continuous improvements and data-driven strategies.",
      icon: <Sprout className="w-10 h-10" />,
      side: "right"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center overflow-hidden">
      {/* 1. Header Section with Fade In */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent uppercase tracking-tight" 
            style={{ WebkitTextStroke: '1px #FFC700' }}>
          We Help You Launch Your SaaS
        </h2>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
          It immediately addresses the biggest pain point for SaaS founders: 
          the complexity of actually getting to launch day.
        </p>
      </motion.div>

      {/* 2. Main Yellow Container with Entry Scale */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl bg-[#FFC700] rounded-[60px] md:rounded-[120px] rounded-tr-none rounded-bl-none p-12 md:p-24 overflow-hidden"
      >
        
        {/* 3. Animated Vertical Dashed Line (Grows downward) */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 w-px border-l-2 border-dashed border-black/30 -translate-x-1/2 hidden md:block" 
        />

        {/* 4. Timeline Steps with Staggered Fade */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 md:gap-8 relative z-10"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className={`flex flex-col md:flex-row items-center w-full ${
                step.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className={`w-full md:w-1/2 flex flex-col items-center text-center ${
                step.side === 'left' ? 'md:pr-16' : 'md:pl-16'
              }`}>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-black mb-4 cursor-pointer"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-black/80 font-medium max-w-xs">
                  {step.desc}
                </p>
              </div>

              {/* Center Dot with Pulsing Effect */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20" 
              />

              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </motion.div>

        {/* 5. Animated Decorative Background Icons */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap justify-around items-center scale-150">
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           >
             <Lightbulb className="w-64 h-64 text-black" />
           </motion.div>
           <motion.div
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           >
             <Box className="w-64 h-64 text-black" />
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LaunchSaaS;