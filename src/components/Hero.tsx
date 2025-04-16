'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDownIcon, CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const roles = ["Frontend Developer", "UI/UX Designer", "Web Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (!isDeleting && displayedRole === roles[roleIndex]) {
        // Pause at the end of typing a word
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayedRole === "") {
        // Move to the next word
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingSpeed(100);
      } else {
        // Either typing or deleting characters
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Background with wavy gradient and texture */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* Colorful wavy gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-20"></div>
        
        {/* Wavy pattern */}
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
        
        {/* Animated texture */}
        <div className="absolute inset-0 noise-texture"></div>
        
        {/* Sparkles */}
        <div className="absolute inset-0 sparkles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary text-sm font-medium mb-5">
            Selamat datang di portfolio saya
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block">Halo, Saya </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Arif Nur Listanto
            </span>
          </h1>
          
          <div className="h-12 sm:h-16 flex items-center justify-center mb-6">
            <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Saya seorang <span className="font-medium text-foreground">{displayedRole}</span>
              <span className="animate-pulse ml-0.5">|</span>
            </p>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            Saya bersemangat untuk menciptakan pengalaman digital yang indah, fungsional, dan ramah pengguna
            dengan teknologi modern dan kode yang bersih.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="#projects" 
              className="relative group inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/80 to-primary p-0.5 font-medium"
            >
              <span className="relative rounded-md bg-background px-8 py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-2">
                <CodeBracketIcon className="h-5 w-5" />
                Lihat Proyek
                <span className="relative ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </Link>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary text-foreground px-8 py-3.5 font-medium hover:bg-secondary/80 transition-colors"
            >
              <LightBulbIcon className="h-5 w-5" />
              Hubungi Saya
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 mx-auto flex justify-center">
          <a 
            href="#about" 
            className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
