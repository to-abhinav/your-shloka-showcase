import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const navItems = ["Shlokas", "About", "Career", "Projects", "Skills", "Achievements", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-xl text-foreground hover:text-highlight transition-colors"
        >
          Portfolio
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
