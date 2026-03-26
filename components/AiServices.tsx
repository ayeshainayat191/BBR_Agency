"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Database, LayoutGrid, Monitor, Cloud } from 'lucide-react';

const AIServices = () => {
  const services = [
    { title: "AI Chatbots", icon: <MessageSquare className="w-12 h-12" /> },
    { title: "Automation", icon: <Bot className="w-12 h-12" /> },
    { title: "Data AI", icon: <Database className="w-12 h-12" /> },
    { title: "Content AI", icon: <LayoutGrid className="w-12 h-12" /> },
    { title: "Custom AI", icon: <Monitor className="w-12 h-12" /> },
    { title: "Next-Gen Connectivity", icon: <Cloud className="w-12 h-12" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-black text-white min-h-screen p-8 md:p-16 relative font-sans overflow-hidden">
      
      {/* 1. EXACT BACKGROUND AS PER IMAGE */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          // Using the uploaded grid.svg as a background image
          backgroundImage: `url('/grid.svg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
           // Adjusting brightness to match the subtle look
          // Masking effect: Black on the left, grid reveals toward the right
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
        }}
      />

      {/* 2. ADDITIONAL GRADIENT OVERLAY (FOR DEPTH) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Side: Vertical Text + Headings */}
        <div className="lg:col-span-6 flex gap-8">
          <motion.div variants={itemVariants} className="flex items-center">
            <h3 className="uppercase tracking-[0.3em] text-zinc-400 font-bold [writing-mode:vertical-lr] rotate-180 border-r border-zinc-800 pr-4 py-4">
              AI-Services
            </h3>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #FFD700' }}>The First</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #FFD700' }}>AI-Native</span> <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #FFD700' }}>BBR Platform</span>
            </motion.h1>
          </div>
        </div>

        {/* Right Side: Description */}
        <motion.div variants={itemVariants} className="lg:col-span-6 lg:pt-4">
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Stop treating AI like a collection of scattered plugins and start using it as your core operating system. 
            Instead of drowning in dozens of "copilots" and disconnected tools, use one unified platform to align 
            your teams and clean up GTM bloat.
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid with 3D Flip */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto mt-20 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group h-80 w-full [perspective:1000px]"
          >
            <motion.div 
              className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 bg-[#221e04]/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 [backface-visibility:hidden]">
                <div className="text-[#FFD700]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-zinc-100 uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#FFD700] p-8 text-black [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
                <div className="mb-4">
                    {React.cloneElement(service.icon, { className: "w-16 h-16 text-black" })}
                </div>
                <p className="font-bold uppercase tracking-tighter text-2xl">Explore</p>
                <div className="mt-4 h-1 w-12 bg-black"></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AIServices;