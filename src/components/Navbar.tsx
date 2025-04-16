'use client'; // Required for using hooks like useState and useTheme

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Example icons, install @heroicons/react

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before rendering theme toggle to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          Your Name
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link href="#about" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          {/* Theme Toggle Button */}
          {mounted && (
             <button
               onClick={toggleTheme}
               aria-label="Toggle theme"
               className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
             >
               {theme === 'dark' ? (
                 <SunIcon className="h-5 w-5 sm:h-6 sm:w-6" />
               ) : (
                 <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6" />
               )}
             </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
