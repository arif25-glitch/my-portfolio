'use client';

import React, { useEffect, useState } from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [visible, setVisible] = useState(false);

  // Skills data
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Jest"] }
  ];

  // Career timeline data
  const timeline = [
    {
      period: "2022 - Sekarang",
      role: "Senior Frontend Developer",
      company: "Tech Company",
      description: "Memimpin pengembangan frontend dari beberapa aplikasi web menggunakan React, TypeScript, dan Next.js."
    },
    {
      period: "2020 - 2022",
      role: "Web Developer",
      company: "Digital Agency",
      description: "Mengembangkan situs web responsif dan aplikasi web untuk berbagai klien menggunakan teknologi web modern."
    },
    {
      period: "2018 - 2020",
      role: "Junior Developer",
      company: "Startup",
      description: "Memulai perjalanan saya sebagai pengembang bekerja pada komponen UI dan belajar pengembangan web modern."
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

  return (
    <section id="about" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-3">
              Tentang Saya
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Perjalanan Saya
            </h2>
            <p className="text-muted-foreground">
              Saya adalah seorang pengembang yang bersemangat dengan fokus pada menciptakan pengalaman pengguna yang luar biasa melalui kode yang bersih dan efisien.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className={`transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Siapa Saya</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Saya adalah seorang pengembang front-end yang bersemangat dengan dasar yang kuat dalam teknologi web modern dan mata yang tajam untuk desain. Selama bertahun-tahun, saya telah membangun banyak aplikasi web yang menggabungkan fungsionalitas dengan daya tarik estetika.
                </p>
                <p>
                  Pendekatan saya berpusat pada menciptakan antarmuka yang intuitif, responsif, dan dapat diakses. Saya percaya bahwa kode yang baik tidak hanya harus bekerja dengan sempurna tetapi juga dapat dipelihara dan dapat diskalakan.
                </p>
                <p>
                  Ketika saya tidak mengkode, Anda dapat menemukan saya menjelajahi teknologi baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan saya melalui posting blog dan keterlibatan komunitas.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <DocumentArrowDownIcon className="h-5 w-5" />
                  Unduh Resume
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className={`transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Kemampuan Saya</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex} className="bg-card rounded-xl p-6 shadow-sm border border-border/40">
                    <h4 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex} 
                          className="flex items-center gap-2"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm text-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className={`mt-20 transition-all duration-500 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-10 text-center text-foreground">Perjalanan Karir</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative z-10 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}
                  >
                    <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="hidden lg:block absolute top-0 w-4 h-4 rounded-full bg-primary" 
                      style={{ [index % 2 === 0 ? 'left' : 'right']: '-2px' }}></div>
                    <div className="bg-card border border-border/40 rounded-xl p-6 shadow-sm">
                      <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.role}</h4>
                      <p className="text-primary text-sm mb-3">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
