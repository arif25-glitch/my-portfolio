'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, DocumentTextIcon, LinkIcon } from '@heroicons/react/24/outline';

const Achievements = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Publications data
  const publications = [
    {
      title: "Publication in TEKNIKA Journal",
      url: "https://jurnal.polsri.ac.id/index.php/teknika/article/view/8871",
      date: "2024",
      description: "Published research article in TEKNIKA journal."
    },
    {
      title: "Research Publication on Zenodo",
      url: "https://doi.org/10.5281/zenodo.13731519",
      date: "2024-09-08",
      description: "Published research with DOI: 10.5281/zenodo.13731519"
    }
  ];

  // Awards data
  const awards = [
    {
      title: "Juara 1 Pada Lomba 2022 China-ASEAN Education Cooperation Week",
      description: "2nd International Invitational Contest of Internet of Things Technology",
      year: "2022"
    }
  ];

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2333d117' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#33d117]/10 rounded-full text-[#33d117] text-sm font-medium mb-3">
            Prestasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#33d117] to-[#17a85d]">
            Publikasi & Pencapaian
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hasil kerja dan prestasi yang telah saya capai selama perjalanan karir dan akademik saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Publications Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#33d117]/20 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-[#33d117]/10 p-3 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-[#33d117]" />
                </div>
                <h3 className="text-xl font-bold ml-4 text-gray-900">Publikasi</h3>
              </div>

              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="border-l-2 border-[#33d117]/30 pl-4 py-1"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">{pub.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{pub.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#33d117] font-medium bg-[#33d117]/10 px-2 py-1 rounded-full">
                        {pub.date}
                      </span>
                      <a 
                        href={pub.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center text-[#33d117] hover:underline"
                      >
                        <LinkIcon className="h-3 w-3 mr-1" />
                        Lihat Publikasi
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#33d117]/20 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-[#33d117]/10 p-3 rounded-lg">
                  <TrophyIcon className="h-6 w-6 text-[#33d117]" />
                </div>
                <h3 className="text-xl font-bold ml-4 text-gray-900">Penghargaan</h3>
              </div>

              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    className="bg-gradient-to-r from-[#33d117]/5 to-transparent rounded-lg p-5 border border-[#33d117]/10"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{award.title}</h4>
                      <span className="text-xs font-bold bg-[#33d117] text-white px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{award.description}</p>
                  </motion.div>
                ))}
                
                {/* GitHub Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-[#33d117]/10"
                >
                  <a 
                    href="https://github.com/arif25-glitch" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#33d117]/10 text-[#33d117] hover:bg-[#33d117]/20 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Lihat Proyek di GitHub
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
