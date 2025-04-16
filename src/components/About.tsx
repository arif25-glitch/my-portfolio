import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-muted-foreground space-y-6">
          <p>
            [Write a paragraph about yourself, your passion for development, your key skills, and your experience. Keep it engaging!]
          </p>
          <p>
            [Add another paragraph detailing specific technologies you excel at or areas you specialize in.]
          </p>
           {/* You can add skill icons or more details here */}
        </div>
      </div>
    </section>
  );
};

export default About;
