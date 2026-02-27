import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place at National Code Sprint 2023 among 500+ participants.",
  },
  {
    icon: Award,
    title: "Open Source Contributor",
    description: "Top contributor to major open-source projects with 1000+ GitHub stars.",
  },
  {
    icon: Star,
    title: "Academic Excellence",
    description: "Dean's List for 4 consecutive semesters with a CGPA of 9.2/10.",
  },
  {
    icon: Award,
    title: "Published Research",
    description: "Research paper on scalable architectures published in IEEE conference.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Achievements
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-5 p-6 bg-card border border-border"
          >
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
