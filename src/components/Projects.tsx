'use client';

import React, { useState, useEffect } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visible, setVisible] = useState(false);

  // Dummy projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "FullStack Ananta Course",
      description: "Website kursus yang saya kembangkan untuk memenuhi kebutuhan bisnis client.",
      tags: ["Laravel", "React", "PHP", "MySQL", "TailwindCSS"],
      image: "/img/projects/anantacourse.png",
      demoUrl: "https://anantacourse.id",
      githubUrl: "https://github.com/arif25-glitch"
    },
    {
      id: 2,
      title: "Toko Arabic Prfume",
      description: "Aplikasi web yang membantu penjualan produk parfume dari Toko Arabic Parfume.",
      tags: ["React", "NextJS", "TailwindCSS", "MongoDB"],
      image: "/img/projects/tokoarabicparfume.png",
      demoUrl: "https://www.tokoarabicparfume.my.id",
      githubUrl: "https://github.com/arif25-glitch"
    },
    {
      id: 3,
      title: "Website Kelulusan - SMA NEGERI 1 ABANG",
      description: "Proyek web aplikasi untuk melihat status kelulusan siswa.",
      tags: ["Laravel", "React", "PHP", "Redux", "MySQL", "TailwindCSS"],
      image: "/img/projects/websitekelulusan.png",
      demoUrl: "https://kelulusan.smanegeri1abang.sch.id",
      githubUrl: "https://github.com/arif25-glitch"
    },
    {
      id: 4,
      title: "UMKM Pak Kartam",
      description: "Website produk hasil kolaborasi beberapa mahasiswa dalam penelitian dosen pada UMKM di provinsi Lampung",
      tags: ["PHP", "MySQL", "TailwindCSS"],
      image: "/img/projects/umkmpakkartam.png",
      demoUrl: "https://umkmpakkartam.my.id/",
      githubUrl: "https://github.com/arif25-glitch"
    },
    {
      id: 5,
      title: "Ezzy Laundry",
      description: "Website Landing Page yang menampilkan pelayanan dari UMKM Ezzy Laundry",
      tags: ["React", "MySQL", "TailwindCSS"],
      image: "/img/projects/ezzylaundry.png",
      demoUrl: "https://ezzylaundry.vercel.app",
      githubUrl: "https://github.com/arif25-glitch"
    },
    {
      id: 6,
      title: "Aplikasi Cek Judul Skripsi",
      description: "Aplikasi Android untuk cek kemiripan judul skripsi di Teknik Informatika Darmajaya yang saya kembangkan dalam penelitian skripsi saya",
      tags: ["Android Studio"],
      image: "/img/projects/aplikasicekjudulskripsi.jpg",
      demoUrl: "https://github.com/arif25-glitch/Aplikasi_Cek_Judul_Skripsi",
      githubUrl: "https://github.com/arif25-glitch/Aplikasi_Cek_Judul_Skripsi"
    }
  ];

  // All unique tags for filtering
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  // Show projects when component mounts
  useEffect(() => {
    setVisible(true);
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-[#33d117]/10 rounded-full text-[#33d117] text-sm font-medium mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#33d117] to-[#17a85d]">
              Proyek Terbaru Saya
            </h2>
            <p className="text-muted-foreground">
              Jelajahi proyek terbaru saya yang menampilkan keterampilan dan semangat saya untuk menciptakan pengalaman digital yang indah dan fungsional.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tag 
                    ? 'bg-[#33d117] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {tag === 'all' ? 'Semua' : tag}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`card-hover group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#33d117] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-[#33d117]/10 text-[#33d117] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between mt-auto pt-4 border-t border-gray-100">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[#33d117] hover:text-[#17a85d] transition-colors"
                    >
                      <GlobeAltIcon className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    {/* <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[#33d117] hover:text-[#17a85d] transition-colors"
                    >
                      <CodeBracketIcon className="h-4 w-4 mr-1" />
                      View Code
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* More Projects Button */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/arif25-glitch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-[#33d117]/50 rounded-lg text-[#33d117] hover:bg-[#33d117]/5 transition-colors"
            >
              Lihat Lebih Banyak Proyek
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
