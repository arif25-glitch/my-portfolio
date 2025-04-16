import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-primary">
          Your Name
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
