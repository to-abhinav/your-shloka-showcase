// // import { motion } from "framer-motion";
// // import { Briefcase, GraduationCap } from "lucide-react";

// // const timeline = [
// //   {
// //     type: "work",
// //     title: "Data Analyst Intern",
// //     org: "AtliQ Hardwares",
// //     period: "July 2026 - Present",
// //     description: "Optimized data pipelines and created interactive dashboards to support business decision-making.",
// //   },
// //   {
// //     type: "work",
// //     title: "Data Analyst Intern",
// //     org: "AtliQ Hardwares",
// //     period: "May 2026 - Jun 2026",
// //     description: "Analyzed sales and customer data to identify trends and optimize inventory management.",
// //   },
// //   {
// //     type: "education",
// //     title: "B.E in Computer Science",
// //     org: "Chandigarh University",
// //     period: "2022 — 2026",
// //     description: "Graduated with honors, specializing in Data Analytics.",
// //   },
// //   {
// //     type: "education",
// //     title: "Higher Secondary Education",
// //     org: "Rani Laxmi Bai Senior Secondary School",
// //     period: "2021",
// //     description: "Science stream with distinction in Mathematics and Physics.",
// //   },
// // ];

// // const CareerSection = () => {
// //   return (
// //     <section id="career" className="section-padding border-b border-border">
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7 }}
// //       >
// //         <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
// //           Career & Education
// //         </p>
// //       </motion.div>

// //       <div className="max-w-3xl mx-auto space-y-0">
// //         {timeline.map((item, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: i * 0.1, duration: 0.5 }}
// //             className="relative pl-10 pb-12 border-l border-border last:pb-0"
// //           >
// //             <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
// //               {item.type === "work" ? (
// //                 <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
// //               ) : (
// //                 <GraduationCap className="w-3.5 h-3.5 text-muted-foreground" />
// //               )}
// //             </div>
// //             <p className="text-xs text-subtle tracking-wider mb-1">{item.period}</p>
// //             <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
// //             <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
// //             <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default CareerSection;







// import { motion } from "framer-motion";
// import { Briefcase, GraduationCap } from "lucide-react";

// const timeline = [
//   {
//     type: "work",
//     title: "Data Analyst Intern",
//     org: "AtliQ Hardwares",
//     period: "July 2026 — Present",
//     description:
//       "Optimized data pipelines and created interactive dashboards to support business decision-making.",
//   },
//   {
//     type: "work",
//     title: "Data Analyst Intern",
//     org: "AtliQ Hardwares",
//     period: "May 2026 — Jun 2026",
//     description:
//       "Analyzed sales and customer data to identify trends and optimize inventory management.",
//   },
//   {
//     type: "education",
//     title: "B.E in Computer Science",
//     org: "Chandigarh University",
//     period: "2022 — 2026",
//     description:
//       "Specialized in Data Analytics with strong focus on statistics, SQL, and business intelligence.",
//   },
//   {
//     type: "education",
//     title: "Higher Secondary Education",
//     org: "Rani Laxmi Bai Senior Secondary School",
//     period: "2021",
//     description:
//       "Science stream with distinction in Mathematics and Physics.",
//   },
// ];

// const CareerSection = () => {
//   return (
//     <section
//       id="career"
//       className="relative py-16 px-6 border-b border-border bg-black overflow-hidden"
//     >
//       {/* Subtle Background Glow */}
//       <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="relative z-10 max-w-5xl mx-auto"
//       >
//         {/* Bigger Section Label */}
//         <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12 -ml-20">
//           Career & Education
//         </p>

//         <div className="relative space-y-12">
//           {timeline.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               className="relative pl-12 group"
//             >
//               {/* Vertical Line */}
//               <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

//               {/* Icon Circle */}
//               <div className="absolute left-4 top-1 -translate-x-1/2 w-9 h-9 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/30 transition">
//                 {item.type === "work" ? (
//                   <Briefcase className="w-4 h-4 text-zinc-400" />
//                 ) : (
//                   <GraduationCap className="w-4 h-4 text-zinc-400" />
//                 )}
//               </div>

//               <p className="text-xs text-zinc-500 tracking-wider mb-1">
//                 {item.period}
//               </p>

//               <h3 className="font-serif text-xl text-white group-hover:text-zinc-300 transition">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-zinc-400 mb-2">{item.org}</p>

//               <p className="text-sm text-zinc-400 leading-relaxed">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default CareerSection;












import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Data Analyst Intern",
    org: "AtliQ Hardwares",
    period: "July 2026 — Present",
    description:
      "Optimized data pipelines and created interactive dashboards to support business decision-making.",
  },
  {
    type: "work",
    title: "Data Analyst Intern",
    org: "AtliQ Hardwares",
    period: "May 2026 — Jun 2026",
    description:
      "Analyzed sales and customer data to identify trends and optimize inventory management.",
  },
  {
    type: "education",
    title: "B.E in Computer Science",
    org: "Chandigarh University",
    period: "2022 — 2026",
    description:
      "Specialized in Data Analytics with strong focus on statistics, SQL, and business intelligence.",
  },
  {
    type: "education",
    title: "Higher Secondary Education",
    org: "Rani Laxmi Bai Senior Secondary School",
    period: "2021",
    description:
      "Science stream with distinction in Mathematics and Physics.",
  },
];

const CareerSection = () => {
  return (
    <section
      id="career"
      className="relative py-16 px-6 border-b border-border bg-black overflow-hidden"
    >

      {/* ===== SHIV BACKGROUND (Pure Black Blend) ===== */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

          {/* Image */}
          <img
            src="/Shiv.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          {/* Strong Dark Base */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Top & Bottom Fade */}
          <div className="absolute inset-0 
                          bg-gradient-to-b 
                          from-black 
                          via-black/40 
                          to-black" />

          {/* Strong Left Fade */}
          <div className="absolute inset-y-0 left-0 w-1/2 
                          bg-gradient-to-r 
                          from-black 
                          via-black/75   
                          to-transparent" />

          {/* Strong Right Fade */}
          <div className="absolute inset-y-0 right-0 w-1/2 
                          bg-gradient-to-l 
                          from-black 
                          via-black/65 
                          to-transparent" />

        </div>
      {/* ===== END BACKGROUND ===== */}

      {/* Subtle Foreground Glow (Your Original) */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12 -ml-20">
          Career & Education
        </p>

        <div className="relative space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative pl-12 group"
            >
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

              <div className="absolute left-4 top-1 -translate-x-1/2 w-9 h-9 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/30 transition">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-zinc-400" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-zinc-400" />
                )}
              </div>

              <p className="text-xs text-zinc-500 tracking-wider mb-1">
                {item.period}
              </p>

              <h3 className="font-serif text-xl text-white group-hover:text-zinc-300 transition">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-400 mb-2">{item.org}</p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CareerSection;