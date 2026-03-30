"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "John Smith", role: "Company CEO", img: "/team1.svg" },
  { name: "Liáng Ruì", role: "Co-Founder", img: "/team2.svg" },
  { name: "Ananya Rathod", role: "Creative Head", img: "/team3.svg" },
  { name: "Hashim Ali", role: "Dev Lead", img: "/team4.svg" },
  { name: "Liza Thomas", role: "Marketing Head", img: "/team5.svg" },
];

export default function IdentitySection() {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6 md:py-24 font-sans overflow-hidden">
      
      {/* 1. Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: "url('/grid.svg')", 
          backgroundSize: "cover",
          backgroundPosition: "center" 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 2. Header Section */}
        <div className="relative w-full flex flex-col items-center mb-16 md:mb-24">
          <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
            Identity
          </span>
          <div className="relative flex justify-center items-center h-20 md:h-40 w-full">
            <h2 
              className="text-5xl md:text-[150px] font-bold absolute whitespace-nowrap opacity-10 select-none pointer-events-none"
              style={{ WebkitTextStroke: "1px #FFC700", color: "transparent" }}
            >
              Who We Are?
            </h2>
            <h3 className="text-3xl md:text-6xl font-bold text-[#FFC700] relative z-10 text-center tracking-tight">
              Who We Are?
            </h3>
          </div>
        </div>

        {/* 3. Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-4 w-full mb-20">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                flex flex-col items-center text-center group
                /* Apply 20px top margin to 1st, 3rd, and 5th items on desktop */
                md:[&:nth-child(odd)]:mt-[17px]
              `}
            >
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden mb-6  rounded-xl md:rounded-none">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover "
                />
              </div>
              
              {/* Info Area (Always visible under the image) */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {member.name}
                </h4>
                <p className="text-[#FFC700] md:text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.15em] mt-2 font-semibold">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Bottom Text Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl px-4"
        >
          <p className="text-base md:text-xl md:leading-relaxed ">
            We’re a team of passionate web specialists who genuinely care about building things that work, not just look good. Our focus has always been on creating meaningful digital experiences that help businesses grow and connect with their audience.
          </p>
          <p className="text-base md:text-xl leading-relaxed  mt-8">
            Over time, we’ve evolved into more than just a digital agency. Alongside delivering high-quality web solutions, we’ve built a space where skilled freelancers and businesses can collaborate in a smarter, more focused way.
          </p>
          <p className="text-base md:text-xl leading-relaxed  mt-8">
            We believe in working with experts, not generalists, and that mindset reflects in everything we do from design to development to strategy. Every project we take on is approached with attention to detail, clear thinking, and a commitment to results. At our core, we’re problem-solvers who enjoy turning ideas into practical, scalable digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}