'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Navigation links
  const footerLinks = [
    { href: '#about', label: 'Tentang' },
    { href: '#projects', label: 'Proyek' },
    { href: '#contact', label: 'Kontak' },
    { href: '/blog', label: 'Blog' }
  ];

  // Social links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/arif25-glitch' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arif-nur-listanto-programmer-backend' },
    { name: 'Portfolio', url: 'https://my-portfolio-arif-nur.vercel.app' }
  ];

  return (
    <footer className="py-12 border-t border-border/40 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#33d117] to-[#17a85d] hover:opacity-80 transition-opacity mb-4 inline-block">
              Arif Nur Listanto
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Menciptakan pengalaman digital yang indah, fungsional, dan ramah pengguna dengan teknologi modern dan kode yang bersih.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#33d117] transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tautan Cepat</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Kontak</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>anurlistanto@gmail.com</li>
              <li>+62 83160219420</li>
              <li>Bandar Lampung, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Arif Nur Listanto. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Dibuat dengan Next.js, Tailwind CSS, dan ❤️
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-[#33d117] text-white shadow-lg z-40 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
