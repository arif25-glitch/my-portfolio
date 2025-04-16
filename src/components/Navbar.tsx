'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Detect scroll position and calculate progress
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background when scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Calculate scroll progress percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { href: '#about', label: 'Tentang' },
    { href: '#projects', label: 'Proyek' },
    { href: '#contact', label: 'Kontak' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:opacity-80 transition-opacity animate-fade-in"
          >
            Arif Nur Listanto
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium relative overflow-hidden group animate-fade-in delay-${index * 100}`}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Theme toggle button removed */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary/50"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-4 rounded-md hover:bg-secondary/50 transition-colors animate-slide-up delay-${index * 100}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Scroll Progress Bar - Visible only when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gray-100 transition-opacity duration-300 ${scrollProgress > 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
