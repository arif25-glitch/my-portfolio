'use client';

import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  // Contact info items
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email",
      value: "anurlistanto@gmail.com",
      link: "mailto:anurlistanto@gmail.com"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Telepon",
      value: "+62 83160219420",
      link: "tel:+6283160219420"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Lokasi",
      value: "Bandar Lampung, Indonesia",
      link: "https://maps.google.com/?q=Jalan+Romowijoyo+No.51,+Sawah+Brebes,+Tanjung+Karang+Timur,+Bandar+Lampung"
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-[#33d117]/10 rounded-full text-[#33d117] text-sm font-medium mb-3">
              Kontak
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#33d117] to-[#17a85d]">
              Hubungi Saya
            </h2>
            <p className="text-gray-600">
              Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Kirim Pesan</h3>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg p-4 animate-fade-in">
                  <p className="font-medium">Terima kasih atas pesan Anda!</p>
                  <p className="text-sm mt-1">Saya akan menghubungi Anda sesegera mungkin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                      Pesan Anda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Bagaimana saya dapat membantu Anda?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-card rounded-xl p-8 shadow-md border border-border/40 mb-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.title === 'Location' ? '_blank' : undefined}
                      rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors group"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-xl p-8 shadow-md border border-border/40">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Connect With Me</h3>
                
                <div className="flex flex-wrap gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {/* Replace with actual icons */}
                      <span className="text-sm">{platform.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
