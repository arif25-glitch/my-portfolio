import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          {/* Replace with your actual email or a contact form */}
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Send me an Email
          </a>
           {/* Add links to social media (LinkedIn, GitHub, etc.) here later */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
