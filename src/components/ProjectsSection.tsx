// // import { motion } from "framer-motion";
// // import { ExternalLink, Github } from "lucide-react";

// // const projects = [
// //   {
// //     title: "AtliQ Sales & Finance Analytics",
// //     description:
// //       "Built an interactive Excel dashboard analyzing sales trends, profitability, and regional performance to support strategic decision-making.",
// //     tags: ["Excel", "Data Analysis", "Dashboard"],
// //     github: "https://github.com/UditPatel001/AtliQ-Hardwares-Sales-Finance-Analytics-Reports-Excel-",
// //     live: "", // optional
// //   },
// //   {
// //     title: "Customer Churn Analysis",
// //     description:
// //       "Performed EDA and built visual insights using Python to identify churn drivers and customer retention patterns.",
// //     tags: ["Python", "Pandas", "EDA"],
// //     github: "https://github.com/UditPatel001/Customer-Churn-Analysis-Dashboard",
// //     live: "",
// //   },
// //   {
// //     title: "Uber Power BI Dashboard",
// //     description:
// //       "Designed a dynamic Power BI dashboard to visualize ride trends, revenue metrics, and customer behavior patterns.",
// //     tags: ["Power BI", "Data Visualization"],
// //     github: "https://github.com/UditPatel001/Uber_Project_PowerBI",
// //     live: "",
// //   },
// //   {
// //     title: "Python Airbnb Data Analysis Project",
// //     description:
// //       "Performed data analysis and visualization using Python to extract insights from Airbnb datasets.",
// //     tags: ["Python", "Pandas", "Data Visualization"],
// //     github: "https://github.com/UditPatel001/Python-Airbnb-Project",
// //     live: "",
// //   },
// // ];

// // const ProjectsSection = () => {
// //   return (
// //     <section id="projects" className="section-padding border-b border-border">
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7 }}
// //       >
// //         <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-16 -ml-15">
// //           Selected Projects
// //         </p>
// //       </motion.div>

// //       <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
// //         {projects.map((project, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: i * 0.1, duration: 0.5 }}
// //             className="group bg-card border border-border p-8 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
// //           >
// //             <div className="flex items-start justify-between mb-4">
// //               <h3 className="font-serif text-2xl text-foreground">{project.title}</h3>
// //               <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">

// //                 <a href={project.github} target="_blank" rel="noopener noreferrer">
// //                   <Github className="w-4 h-4 text-muted-foreground hover:text-white cursor-pointer transition" />
// //                 </a>

// //                 {project.live && (
// //                   <a href={project.live} target="_blank" rel="noopener noreferrer">
// //                     <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-white cursor-pointer transition" />
// //                   </a>
// //                 )}

// //               </div>
// //             </div>
// //             <p className="text-sm text-muted-foreground leading-relaxed mb-6">
// //               {project.description}
// //             </p>
// //             <div className="flex flex-wrap gap-2">
// //               {project.tags.map((tag) => (
// //                 <span
// //                   key={tag}
// //                   className="text-[10px] uppercase tracking-wider text-subtle border border-border px-3 py-1"
// //                 >
// //                   {tag}
// //                 </span>
// //               ))}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectsSection;










// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "AtliQ Sales & Finance Analytics",
//     description:
//       "Built an interactive dashboard analyzing sales trends, profitability, and regional performance to support strategic decision-making.",
//     tags: ["Excel", "Dashboard", "Data Analysis"],
//     github: "https://github.com/yourusername/project-link",
//   },
//   {
//     title: "Customer Churn Analysis",
//     description:
//       "Performed exploratory data analysis using Python to identify churn drivers and customer retention patterns.",
//     tags: ["Python", "Pandas", "EDA"],
//     github: "https://github.com/yourusername/project-link",
//   },
//   {
//     title: "Uber Power BI Dashboard",
//     description:
//       "Designed a dynamic Power BI dashboard to visualize ride trends, revenue metrics, and customer behavior.",
//     tags: ["Power BI", "Visualization"],
//     github: "https://github.com/yourusername/project-link",
//   },
//   {
//     title: "SQL Retail Sales Analysis",
//     description:
//       "Used advanced SQL queries to uncover retail sales trends and generate actionable business insights.",
//     tags: ["SQL", "Analytics"],
//     github: "https://github.com/yourusername/project-link",
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section
//       id="projects"
//       className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="relative z-10 max-w-6xl mx-auto"
//       >
//         {/* Bigger Section Label */}
//         <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
//           Selected Projects
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
//             >
//               {/* Soft inner glow */}
//               <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

//               <div className="relative z-10">
//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className="font-serif text-2xl text-white group-hover:text-zinc-300 transition">
//                     {project.title}
//                   </h3>

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Github className="w-5 h-5 text-zinc-500 hover:text-white transition" />
//                   </a>
//                 </div>

//                 <p className="text-sm text-zinc-400 leading-relaxed mb-6">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-[10px] uppercase tracking-wider text-zinc-400 border border-white/10 px-3 py-1 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ProjectsSection;


















import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AtliQ Sales & Finance Analytics",
    description:
      "Built an interactive dashboard analyzing sales trends, profitability, and regional performance to support strategic decision-making.",
    tags: ["Excel", "Dashboard", "Data Analysis"],
    github: "https://github.com/UditPatel001/AtliQ-Hardwares-Sales-Finance-Analytics-Reports-Excel-",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "Performed exploratory data analysis using Python to identify churn drivers and customer retention patterns.",
    tags: ["Python", "Pandas", "EDA"],
    github: "https://github.com/UditPatel001/Customer-Churn-Analysis-Dashboard",
  },
  {
    title: "Uber Power BI Dashboard",
    description:
      "Designed a dynamic Power BI dashboard to visualize ride trends, revenue metrics, and customer behavior.",
    tags: ["Power BI", "Visualization"],
    github: "https://github.com/UditPatel001/Uber_Project_PowerBI",
  },
  {
    title: "Python Airbnb Data Analysis Project",
    description:
      "Performed data analysis and visualization using Python to extract insights from Airbnb datasets.",
    tags: ["Python", "Pandas", "Data Visualization"],
    github: "https://github.com/UditPatel001/Python-Airbnb-Project",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
    >

      {/* ===== RADHA KRISHNA BACKGROUND ===== */}
{/* ===== RIGHT SIDE RADHA KRISHNA BACKGROUND ===== */}
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

  {/* Right Side Image Container */}
  <div className="absolute right-0 top-0 h-full w-[45%]">

    <img
      src="/RK.png"
      alt=""
      className="h-full w-full object-cover object-bottom opacity-80"
    />

    {/* Strong Left Fade (important) */}
    <div className="absolute inset-0 
                    bg-gradient-to-l 
                    from-transparent 
                    via-black/70 
                    to-black" />

    {/* Top Fade */}
    <div className="absolute inset-0 
                    bg-gradient-to-b 
                    from-black 
                    via-transparent 
                    to-black" />

  </div>

  {/* Global Dark Base */}
  <div className="absolute inset-0 bg-black/30" />

</div>
      {/* ===== END BACKGROUND ===== */}

      {/* Existing Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl pl-4"
      >
        <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
          Selected Projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl text-white group-hover:text-zinc-300 transition">
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-zinc-500 hover:text-white transition" />
                  </a>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-zinc-400 border border-white/10 px-4 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;