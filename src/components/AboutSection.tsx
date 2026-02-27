import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          About Me
        </p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="aspect-[3/4] bg-secondary rounded-sm flex items-center justify-center glow">
            <User className="w-16 h-16 text-muted-foreground" />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
              Hello, I'm <span className="text-highlight font-medium">Your Name</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer and creative thinker with a deep appreciation for clean, 
              purposeful design. My journey in technology is guided by curiosity and the belief that 
              great software should feel effortless to use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring ancient texts, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in continuous learning and the 
              power of community.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-serif text-foreground">5+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">20+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
