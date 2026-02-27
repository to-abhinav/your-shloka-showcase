import { motion } from "framer-motion";

const technical = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Express", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL / PostgreSQL", level: 70 },
  { name: "Docker / CI-CD", level: 65 },
];

const interpersonal = [
  "Leadership", "Communication", "Problem Solving", "Team Collaboration",
  "Time Management", "Adaptability", "Critical Thinking", "Mentoring",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Skills
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-8">Technical</h3>
          <div className="space-y-6">
            {technical.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-secondary-foreground">{skill.name}</span>
                  <span className="text-xs text-subtle">{skill.level}%</span>
                </div>
                <div className="h-[2px] bg-border">
                  <motion.div
                    className="h-full bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-foreground mb-8">Interpersonal</h3>
          <div className="flex flex-wrap gap-3">
            {interpersonal.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="text-sm text-secondary-foreground border border-border px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
