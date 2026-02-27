import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application for managing workflows with real-time collaboration features.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Project Beta",
    description: "An AI-powered analytics dashboard that visualizes complex datasets with intuitive charts.",
    tags: ["Python", "D3.js", "Machine Learning"],
  },
  {
    title: "Project Gamma",
    description: "A mobile-first e-commerce platform with seamless payment integration and inventory management.",
    tags: ["React Native", "Stripe", "Firebase"],
  },
  {
    title: "Project Delta",
    description: "Open-source CLI tool for automating deployment pipelines and infrastructure provisioning.",
    tags: ["Go", "Docker", "AWS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Selected Projects
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group bg-card border border-border p-8 hover:border-muted-foreground/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-serif text-2xl text-foreground">{project.title}</h3>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider text-subtle border border-border px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
