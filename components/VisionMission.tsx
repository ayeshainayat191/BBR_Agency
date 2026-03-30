"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  const cards = [
    {
      title: "Our Vision",
      content:
        "To redefine the \"future of work\" by creating a digital home where IT professionals thrive and businesses find lifelong partners.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-20 md:h-20 mb-6 md:mb-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M18 6l-2 2M8 16l-2 2" />
        </svg>
      ),
      bgColor: "bg-[#FFC700]",
      textColor: "text-black",
    },
    {
      title: "Our Mission",
      content:
        "We are dedicated to building a sustainable freelance economy. We empower IT professionals with the tools they need to manage their careers while providing businesses with a hand-picked, verified talent pool they can rely on.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-20 md:h-20 mb-6 md:mb-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 22L12 4L20 22H4Z" />
          <path d="M12 4V2" />
          <path d="M12 2H15V5H12" />
          <path d="M9 16H15M10 19H14" />
        </svg>
      ),
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            // Animation logic
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2, 
              ease: "easeOut" 
            }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            
            className={`
              flex-1 ${card.bgColor} ${card.textColor} 
              p-8 md:p-16 
              rounded-[40px] md:rounded-[60px] 
              flex flex-col items-center text-center
              shadow-xl
            `}
          >
            {/* Animated Icon Container */}
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: (index * 0.2) + 0.3, type: "spring" }}
              className="flex justify-center items-center"
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-8 tracking-tight">
              {card.title}
            </h2>

            {/* Content */}
            <p className="text-sm md:text-xl leading-relaxed font-medium opacity-90 max-w-[95%] md:max-w-[90%]">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}