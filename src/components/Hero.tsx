'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import {CodeBracketIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const [, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const roles = useMemo(() => ["Backend Developer", "Frontend Developer", "Asisten Laboratorium"], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (!isDeleting && displayedRole === roles[roleIndex]) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingSpeed(100);
      } else {
        setDisplayedRole(
          isDeleting
            ? displayedRole.substring(0, displayedRole.length - 1)
            : roles[roleIndex].substring(0, displayedRole.length + 1)
        );
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    }, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedRole, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 pb-24 bg-white">
      {/* Light gray background base */}
      <div className="absolute inset-0 bg-gray-50 -z-20 pointer-events-none"></div>
      
      {/* Modern wavy gradient background with green theme */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#33d117" />
              <stop offset="1" stopColor="#40e263" />
            </linearGradient>
            <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#17a85d" />
              <stop offset="1" stopColor="#0dbb74" />
            </linearGradient>
            <linearGradient id="wave3" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#40e263" />
              <stop offset="1" stopColor="#33d117" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q360,300 720,200 T1440,200 V900 H0 Z"
            fill="url(#wave1)"
            opacity="0.7"
          />
          <path
            d="M0,320 Q360,420 720,320 T1440,320 V900 H0 Z"
            fill="url(#wave2)"
            opacity="0.5"
          />
          <path
            d="M0,440 Q360,540 720,440 T1440,440 V900 H0 Z"
            fill="url(#wave3)"
            opacity="0.3"
          />
        </svg>
      </div>
      
      {/* Abstract wavy shape background - UPDATED: wider with no fade to white */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-1/2 z-0 pointer-events-none" style={{ height: "130vh" }}>
        {/* Abstract wavy background SVG without fade to white */}
        <svg 
          className="absolute right-0 top-0 h-full w-full" 
          viewBox="0 0 800 1800" 
          fill="none" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base blob shape */}
          <path 
            d="M800,0 L800,1800 L0,1800 C0,1800 200,1600 250,1400 C300,1200 150,1000 200,800 C250,600 350,400 450,200 C550,50 800,0 800,0 Z" 
            fill="#33d117" 
          />
          
          {/* Secondary wavy overlay */}
          <path 
            d="M800,0 L800,1800 L100,1800 C100,1800 300,1500 280,1300 C260,1100 180,950 250,750 C320,550 400,400 480,250 C560,100 800,0 800,0 Z" 
            fill="#40e263" 
            opacity="0.6" 
          />
          
          {/* Tertiary wave overlay */}
          <path 
            d="M800,0 L800,1800 L200,1800 C200,1800 350,1400 320,1200 C290,1000 200,900 280,700 C360,500 450,350 500,200 C550,50 800,0 800,0 Z" 
            fill="#17a85d" 
            opacity="0.4" 
          />
          
          {/* Additional accent waves */}
          <path 
            d="M800,0 L800,1800 L350,1800 C350,1800 380,1300 400,1100 C420,900 300,850 350,650 C400,450 480,300 550,150 C620,0 800,0 800,0 Z" 
            fill="#28a512" 
            opacity="0.2" 
          />
        </svg>
      </div>

      {/* Content - updated to full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 text-center lg:text-left max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content with adaptive text color */}
          <motion.div
            className="lg:w-1/2 relative z-10 w-full px-4 py-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Content background overlay for mobile with added padding */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-xl -z-10 lg:hidden" 
                 style={{ top: "-1rem", bottom: "-2rem", left: "-1rem", right: "-1rem" }}></div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight text-gray-900 md:text-gray-900 drop-shadow-sm">
              <span className="block">Halo, Saya</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33d117] via-[#17a85d] to-[#40e263] bg-size-200 animate-gradient">
                Arif Nur Listanto
              </span>
            </h1>
            <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start mb-6">
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 font-light">
                Saya seorang <span className="font-medium text-gray-900">{displayedRole}</span>
                <span className="animate-pulse ml-0.5">|</span>
              </p>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10 text-lg">
              Saya adalah mahasiswa Sarjana Komputer di Institut Informatika Dan Bisnis Darmajaya 
              dengan pengalaman sebagai asisten laboratorium dan freelance web developer. 
              Fokus saya adalah mengembangkan solusi digital yang fungsional dan user-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="#projects" 
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#33d117] py-3.5 px-8 font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#17a85d] group"
                >
                  <span className="flex items-center gap-2">
                    <CodeBracketIcon className="h-5 w-5" />
                    Lihat Proyek
                    <span className="relative ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="https://wa.me/6283160219420" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-[#33d117]/30 text-[#33d117] px-8 py-3.5 font-medium hover:bg-[#33d117]/10 transition-colors shadow-sm"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="lg:w-1/3 mt-10 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Increased border width to make image pop against the green background */}
            <motion.div 
              className="relative aspect-square rounded-full overflow-hidden shadow-xl border-8 border-white mx-auto w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-[#e6ffea] via-white to-[#d9ffdf]"
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(51, 209, 23, 0.2)" }}
            >
              <Image
                src="/img/foto_formal.png"
                alt="Arif Nur Listanto"
                layout="fill"
                objectFit="cover"
                priority
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Animate gradient background */}
      <style jsx global>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
