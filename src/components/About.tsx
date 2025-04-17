'use client';

import React, { useEffect, useState, useRef } from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker, 
  FaFigma,
  FaJava,
  FaPython
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase,
  SiLaravel,
  SiJavascript,
  SiPhp
} from 'react-icons/si';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const About = () => {
  const [visible, setVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  // Skills data with icons
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-600" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> }
      ]
    },
    { 
      category: "Frontend", 
      items: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Framer Motion", icon: <SiFramer /> }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
      ] 
    },
    { 
      category: "Tools", 
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> }
      ] 
    }
  ];

  // Career timeline data
  const timeline = [
    {
      period: "Feb 2023 - Sekarang",
      role: "Asisten Laboratorium",
      company: "Institut Informatika Dan Bisnis Darmajaya, Bandar Lampung",
      description: "Membantu dosen dan mahasiswa di lingkungan laboratorium komputer dengan memecahkan masalah kesalahan komputer, mengklarifikasi konten pelajaran untuk siswa, memberikan dukungan teknis kepada dosen, dan menggantikan mereka saat diperlukan."
    },
    {
      period: "Apr 2022 - Sekarang",
      role: "Freelancer",
      company: "Self Employment, Bandar Lampung",
      description: "Sebagai pengembang website, saya memanfaatkan keahlian teknis dan keterampilan pemecahan masalah kreatif saya untuk menghadirkan situs web dan aplikasi web berkualitas tinggi. Saya mengelola proyek dari konseptualisasi hingga penerapan."
    },
    {
      period: "Sep 2020 - Nov 2024",
      role: "Sarjana Komputer",
      company: "Institut Informatika Dan Bisnis Darmajaya, Bandar Lampung",
      description: "Pendidikan formal dalam bidang ilmu komputer dengan fokus pada pengembangan software dan arsitektur sistem."
    }
  ];

  // Set visibility on component mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  // Function to generate and download PDF
  const generatePDF = async () => {
    if (!aboutSectionRef.current) return;
    
    try {
      // Apply a class to handle CSS color conversion temporarily
      document.body.classList.add('pdf-generation-mode');
      
      const element = aboutSectionRef.current;
      const canvas = await html2canvas(element, {
        scale: 1,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        // Use this option to ignore CSS colors that might cause problems
        onclone: (document) => {
            const elements = document.getElementsByTagName('*');
            for (let i = 0; i < elements.length; i++) {
              const el = elements[i];
              // Check if the element is an HTMLElement before accessing style
              if (el instanceof HTMLElement) {
                // Convert any problematic colors to standard hex/rgb
                const style = window.getComputedStyle(el);
                // Override any oklch or other modern color formats
                if (style.color && style.color.includes('oklch')) {
                  el.style.color = '#333333';
                }
                if (style.backgroundColor && style.backgroundColor.includes('oklch')) {
                  el.style.backgroundColor = '#ffffff';
                }
              }
            }
          }
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Calculate dimensions to fit in A4
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Arif_Nur_Listanto_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to direct download of a static PDF if available
      window.open('/resume.pdf', '_blank');
    } finally {
      // Remove temporary class
      document.body.classList.remove('pdf-generation-mode');
    }
  };

  return (
    <section id="about" ref={aboutSectionRef} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Wavy background with green theme */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-25">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 700" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,140 C320,40 480,240 720,240 C960,240 1120,40 1440,140 L1440,700 L0,700 Z" 
            fill="#d0f7d1"
          />
          <path 
            d="M0,210 C320,110 480,310 720,310 C960,310 1120,110 1440,210 L1440,700 L0,700 Z" 
            fill="#a3eba6" 
            style={{ opacity: 0.7 }}
          />
          <path 
            d="M0,280 C320,180 480,380 720,380 C960,380 1120,180 1440,280 L1440,700 L0,700 Z" 
            fill="#76df7a" 
            style={{ opacity: 0.5 }}
          />
          <path 
            d="M0,350 C320,250 480,450 720,450 C960,450 1120,250 1440,350 L1440,700 L0,700 Z" 
            fill="#4bd04f" 
            style={{ opacity: 0.3 }}
          />
          <path 
            d="M0,420 C320,320 480,520 720,520 C960,520 1120,320 1440,420 L1440,700 L0,700 Z" 
            fill="#33d117" 
            style={{ opacity: 0.2 }}
          />
        </svg>
      </div>
      
      {/* Enhanced circular pattern texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none -z-5 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2333d117' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      ></div>
      
      {/* Enhanced geometric pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none -z-5 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2333d117' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Enhanced diagonal lines texture */}
      <div 
        className="absolute inset-0 pointer-events-none -z-5 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2333d117' fill-opacity='0.5' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Enhanced noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none -z-5 mix-blend-overlay opacity-[0.08]"
        style={{
          filter: 'contrast(170%) brightness(1000%)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* New dot grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none -z-5 opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2333d117' fill-opacity='0.5' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='2'/%3E%3Ccircle cx='13' cy='13' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-[#33d117]/10 rounded-full text-[#33d117] text-sm font-medium mb-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tentang Saya
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#33d117] to-[#17a85d]"
              initial={{ y: 20, opacity: 0 }}
              animate={visible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Perjalanan Saya
            </motion.h2>
          </motion.div>

          {/* Bio Section - Clean, Single Column with Animation */}
          <motion.div 
            className="mb-16 bg-white rounded-xl p-8 shadow-sm border border-[#33d117]/20"
            initial={{ y: 50, opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(51, 209, 23, 0.15)" }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-900"
              initial={{ x: -20, opacity: 0 }}
              animate={visible ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Siapa Saya
            </motion.h3>
            <motion.div 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mb-4 leading-relaxed">
                Saya adalah profesional yang dinamis dan berorientasi pada hasil dengan latar belakang yang kuat
                sebagai Asisten Laboratorium di Laboratorium Darmajaya. Saya memiliki keahlian yang telah terbukti
                dalam pemecahan masalah dan keterampilan komunikasi yang sangat baik, yang memungkinkan saya
                memberikan solusi berkualitas tinggi untuk meningkatkan kepuasan klien.
              </p>
              <p className="mb-6 leading-relaxed">
                Saya juga mahir dalam kerja tim dan kolaborasi, serta secara konsisten membina hubungan positif sambil
                beradaptasi dengan tuntutan proyek yang terus berkembang.
              </p>
            </motion.div>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button 
                onClick={generatePDF}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#33d117] text-white rounded-lg hover:bg-[#17a85d] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
                Unduh Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Skills Section - Horizontal cards with staggered animation */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-900 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={visible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Kemampuan Saya
            </motion.h3>
            
            {skills.map((skillGroup, groupIndex) => (
              <motion.div 
                key={groupIndex} 
                className="mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={visible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + (groupIndex * 0.1) }}
              >
                <motion.h4 
                  className="text-xl font-semibold mb-4 text-[#33d117] inline-block px-4 py-1 bg-[#33d117]/10 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {skillGroup.category}
                </motion.h4>
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#33d117]/20"
                  whileHover={{ boxShadow: "0 15px 30px -10px rgba(51, 209, 23, 0.15)" }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[#33d117]/5 transition-colors"
                        initial={{ y: 20, opacity: 0 }}
                        animate={visible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 1 + (groupIndex * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <motion.div 
                          className="text-2xl"
                          // Remove the rotating animation
                          // animate={{ rotate: [0, 360] }}
                          // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          
                          // Add hover animations instead
                          whileHover={{ 
                            scale: 1.2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-sm text-gray-800 font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Section - Enhanced animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center text-gray-900"
              initial={{ y: 20, opacity: 0 }}
              animate={visible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Perjalanan Karir
            </motion.h3>
            <div className="relative">
              {/* Timeline line with animation */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#33d117]/30 ml-3 sm:ml-4"
                initial={{ height: 0 }}
                animate={visible ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
              
              {/* Timeline items - Single column, left-aligned with staggered animation */}
              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-10 sm:pl-12"
                    initial={{ x: -50, opacity: 0 }}
                    animate={visible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + (index * 0.2) }}
                    whileHover={{ x: 5 }}
                  >
                    {/* Timeline dot with pulse animation */}
                    <motion.div 
                      className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#33d117]/20 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={visible ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 + (index * 0.2) }}
                    >
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-[#33d117]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white border border-[#33d117]/20 rounded-xl p-6 shadow-sm"
                      whileHover={{ 
                        boxShadow: "0 15px 30px -10px rgba(51, 209, 23, 0.15)",
                        y: -5 
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <motion.span 
                          className="inline-block px-3 py-1 bg-[#33d117]/10 rounded-full text-[#33d117] text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.period}
                        </motion.span>
                        <motion.h4 
                          className="text-lg font-bold text-gray-900 mt-2 sm:mt-0"
                          whileHover={{ scale: 1.02, color: "#33d117" }}
                        >
                          {item.role}
                        </motion.h4>
                      </div>
                      <p className="text-[#33d117] text-sm mb-3 font-medium">{item.company}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#33d117]"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              opacity: 0.15,
              scale: Math.random() * 0.6 + 0.2
            }}
            animate={{ 
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            style={{ 
              left: `${Math.random() * 90 + 5}%`, 
              top: `${Math.random() * 90 + 5}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      {/* Add custom CSS for better texture blending */}
      <style jsx>{`
        .pdf-generation-mode * {
          color-adjust: exact;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-8px) translateX(8px); }
          50% { transform: translateY(8px) translateX(16px); }
          75% { transform: translateY(16px) translateX(-8px); }
        }
        
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(51, 209, 23, 0.08) 0%, transparent 70%),
                    radial-gradient(circle at 70% 65%, rgba(51, 209, 23, 0.06) 0%, transparent 75%);
          pointer-events: none;
          z-index: -4;
          animation: subtleFloat 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
