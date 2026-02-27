import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Welcome
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-8">
          Crafting Ideas
          <br />
          <span className="text-gradient">Into Reality</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
          Developer, thinker, and lifelong learner — building meaningful digital experiences 
          guided by the timeless wisdom of ancient philosophy.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-border text-foreground text-sm tracking-wider uppercase hover:bg-accent transition-colors"
          >
            View Work
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
