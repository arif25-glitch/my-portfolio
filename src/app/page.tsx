import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
       <Navbar />
       <main className="flex-grow">
         <Hero />
         <About />
         <Projects />
         <Contact />
       </main>
       <Footer />
    </div>
  );
}
