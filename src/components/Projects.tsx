import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for Project Cards - Repeat this block for each project */}
          <div className="bg-card p-6 rounded-lg shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Project Title 1</h3>
            <p className="text-muted-foreground mb-4">
              Short description of the project. Highlight key features and technologies used.
            </p>
            {/* Add links (Live Demo, GitHub) and tech stack tags here */}
            <div className="flex justify-end space-x-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Live Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">GitHub</a>
            </div>
          </div>
          {/* Add more project card placeholders here */}
           <div className="bg-card p-6 rounded-lg shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Project Title 2</h3>
            <p className="text-muted-foreground mb-4">
              Another project description goes here.
            </p>
            <div className="flex justify-end space-x-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Live Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
