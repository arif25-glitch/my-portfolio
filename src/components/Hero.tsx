import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-primary">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          I'm a [Your Role/Title] passionate about building modern and interactive web experiences.
        </p>
        <div className="flex gap-4 justify-center">
           {/* Add Call to Action Buttons here later */}
           <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
             View Projects
           </button>
           <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors">
             Contact Me
           </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
