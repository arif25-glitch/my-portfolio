import React from 'react';
import Link from 'next/link'; // Import Link for buttons

const Hero = () => {
  return (
    // Use the animated-gradient class, adjust padding/height
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16">
       {/* Animated Background */}
       <div className="absolute inset-0 w-full h-full animated-gradient -z-10"></div>

       {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
         {/* Use text-foreground and text-muted-foreground for better theme compatibility */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
          Hi, I&apos;m [Your Name]
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          I&apos;m a [Your Role/Title] passionate about building modern and interactive web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           {/* Use Link for navigation, update button styles */}
           <Link href="#projects" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40">
             View Projects
           </Link>
           <Link href="#contact" className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/40">
             Contact Me
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
