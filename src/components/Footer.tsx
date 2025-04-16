import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        {/* Add social links here */}
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            {/* Add other relevant links */}
        </div>
        <p>&copy; {currentYear} [Your Name]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
