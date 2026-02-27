import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Senior Software Engineer",
    org: "Tech Company",
    period: "2022 — Present",
    description: "Leading frontend architecture and mentoring junior developers.",
  },
  {
    type: "work",
    title: "Software Developer",
    org: "Startup Inc.",
    period: "2020 — 2022",
    description: "Built scalable web applications serving thousands of users.",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    org: "University Name",
    period: "2016 — 2020",
    description: "Graduated with honors, specializing in software engineering.",
  },
  {
    type: "education",
    title: "Higher Secondary Education",
    org: "School Name",
    period: "2014 — 2016",
    description: "Science stream with distinction in Mathematics and Physics.",
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="section-padding border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Career & Education
        </p>
      </motion.div>

      <div className="max-w-3xl space-y-0">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative pl-10 pb-12 border-l border-border last:pb-0"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              {item.type === "work" ? (
                <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
              ) : (
                <GraduationCap className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </div>
            <p className="text-xs text-subtle tracking-wider mb-1">{item.period}</p>
            <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
