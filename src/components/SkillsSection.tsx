// import { motion } from "framer-motion";

// const technical = [
//   { name: "SQL / PostgreSQL", level: 90 },
//   { name: "MS-EXCEL", level: 85 },
//   { name: "Python (Pandas | NumPy)", level: 80 },
//   { name: "Power BI", level: 75 },
//   { name: "Data Wrangling", level: 95 },
//   { name: "Exploratory Data Analysis (EDA)", level: 80 },
// ];

// const interpersonal = [
//   "Leadership",
//   "Analytical Thinking",
//   "Problem Solving",
//   "Team Collaboration",
//   "Decision-Making",
//   "Adaptability",
//   "Attention to Detail",
//   "Mentoring",
// ];

// const SkillsSection = () => {
//   <section
//   id="skills"
//   className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
// >
//   {/* ===== LEFT SIDE SHIVA BACKGROUND ===== */}
//   <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

//     {/* Image Container */}
//     <div className="absolute left-0 top-0 h-full w-[45%]">

//       <img
//         src="/shiva.png"   // <-- put your Shiva image in public folder
//         alt=""
//         className="h-full w-full object-cover object-center opacity-70"
//       />

//       {/* Right Fade */}
//       <div className="absolute inset-0 
//                       bg-gradient-to-r 
//                       from-transparent 
//                       via-black/50 
//                       to-black" />

//       {/* Top + Bottom Fade */}
//       <div className="absolute inset-0 
//                       bg-gradient-to-b 
//                       from-black 
//                       via-transparent 
//                       to-black" />
//     </div>

//     {/* Soft Global Darkening */}
//     <div className="absolute inset-0 bg-black/40" />
//   </div>

//   {/* ===== CONTENT SHIFTED RIGHT ===== */}
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.7 }}
//     className="relative z-10 max-w-6xl ml-auto md:pl-[45%]"
//   >
//     {/* Section Label */}
//     <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
//       Skills
//     </p>

//     <div className="relative grid md:grid-cols-2 gap-20">

//       {/* Vertical Divider */}
//       <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/20"></div>

//       {/* Technical Skills */}
//       <div>
//         <h3 className="font-serif text-2xl md:text-3xl text-white mb-10">
//           <i>Technical Skills</i>
//         </h3>

//         <div className="space-y-8">
//           {technical.map((skill, i) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//             >
//               <div className="flex justify-between mb-3">
//                 <span className="text-sm text-zinc-300">
//                   {skill.name}
//                 </span>
//                 <span className="text-xs text-zinc-500">
//                   {skill.level}%
//                 </span>
//               </div>

//               <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-white to-zinc-400 rounded-full"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: i * 0.1 + 0.3,
//                     duration: 1,
//                     ease: "easeOut",
//                   }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Interpersonal Skills */}
//       <div>
//         <h3 className="font-serif text-2xl md:text-3xl text-white mb-10">
//           <i>Interpersonal Skills</i>
//         </h3>

//         <div className="flex flex-wrap gap-4">
//           {interpersonal.map((skill, i) => (
//             <motion.span
//               key={skill}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.06, duration: 0.4 }}
//               className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-zinc-300 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//     </div>
//   </motion.div>
// </section>
// };

// export default SkillsSection;













import { motion } from "framer-motion";

const technical = [
  { name: "SQL / PostgreSQL", level: 90 },
  { name: "MS-EXCEL", level: 85 },
  { name: "Python (Pandas | NumPy)", level: 80 },
  { name: "Power BI", level: 75 },
  { name: "Data Wrangling", level: 95 },
  { name: "Exploratory Data Analysis (EDA)", level: 80 },
];

const interpersonal = [
  "Leadership",
  "Analytical Thinking",
  "Problem Solving",
  "Team Collaboration",
  "Decision-Making",
  "Adaptability",
  "Attention to Detail",
  "Mentoring",
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
    >
      {/* ===== LEFT SIDE SHIVA BACKGROUND ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Image Container */}
        <div className="absolute left-0 top-0 h-full w-[40%]">

          <img
            src="/shiva.png"
            alt=""
            className="h-full w-full object-cover object-center opacity-75"
          />

          {/* Right Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black" />

          {/* Top + Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Global Dark Base */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ===== CONTENT SHIFTED RIGHT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl ml-[40%] mr-12"
      >
        {/* Section Label */}
        <p className="text-sm md:text-base uppercase tracking-[0.6em] text-zinc-400 mb-20 text-right mr-20">
          Skills
        </p>

        <div className="relative grid md:grid-cols-2 gap-20">

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/20"></div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-10">
              <i>Technical Skills</i>
            </h3>

            <div className="space-y-8">
              {technical.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-zinc-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-white to-zinc-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.1 + 0.3,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interpersonal Skills */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-10">
              <i>Interpersonal Skills</i>
            </h3>

            <div className="flex flex-wrap gap-4">
              {interpersonal.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-zinc-300 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;