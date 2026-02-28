import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const navItems = ["About", "Career", "Projects", "Skills", "Achievements", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex items-center justify-between w-full px-8 md:px-12 lg:px-20 py-5">
        
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative font-serif text-2xl md:text-3xl text-white tracking-wide group"
        >
          Portfolio
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="relative text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/UditPatel001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition duration-300 hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/udit-patel-1108s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition duration-300 hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;