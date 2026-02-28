// import { motion } from "framer-motion";
// import { Award, Medal, Star, Trophy } from "lucide-react";

// const achievements = [
//   {
//     icon: Trophy,
//     title: "Hackerrank SQL Gold Badge",
//     description:
//       "Earned Gold Badge in SQL on Hackerrank by solving advanced query-based challenges.",
//   },
//   {
//     icon: Medal,
//     title: "Top 1% in NPTEL — Cloud, IoT & Edge ML",
//     description:
//       "Secured a top 1% rank with a score of 94% in NPTEL’s 'Cloud, IoT & Edge ML' course.",
//   },
//   {
//     icon: Star,
//     title: "Academic Excellence",
//     description:
//       "Maintained a consistent academic record with a CGPA of 8.04/10.",
//   },
//   {
//     icon: Award,
//     title: "Excel: Mother of Business Intelligence — Codebasics",
//     description:
//       "Completed Codebasics’ 'Excel: Mother of Business Intelligence' course with a score of 95%.",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <section
//       id="achievements"
//       className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
//     >
//       {/* Subtle Background Glow */}
//       <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

//       <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12 ml-40 ">
//         Achievements & Certifications
//         </p>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="relative z-10 max-w-5xl mx-auto"
//       >
        

//         <div className="grid sm:grid-cols-2 gap-8">
//           {achievements.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
//             >
//               {/* Soft hover glow */}
//               <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

//               <div className="relative z-10 flex gap-5">
//                 <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition">
//                   <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition" />
//                 </div>

//                 <div>
//                   <h3 className="font-serif text-lg text-white mb-2 group-hover:text-zinc-300 transition">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-zinc-400 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default AchievementsSection;











import { motion } from "framer-motion";
import { Award, Medal, Star, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackerrank SQL Gold Badge",
    description:
      "Earned Gold Badge in SQL on Hackerrank by solving advanced query-based challenges.",
  },
  {
    icon: Medal,
    title: "Top 1% in NPTEL — Cloud, IoT & Edge ML",
    description:
      "Secured a top 1% rank with a score of 94% in NPTEL’s 'Cloud, IoT & Edge ML' course.",
  },
  {
    icon: Star,
    title: "Academic Excellence",
    description:
      "Maintained a consistent academic record with a CGPA of 8.04/10.",
  },
  {
    icon: Award,
    title: "Excel: Mother of Business Intelligence — Codebasics",
    description:
      "Completed Codebasics’ 'Excel: Mother of Business Intelligence' course with a score of 95%.",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
    >
      {/* ===== RIGHT SIDE MATA RANI BACKGROUND ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Image container (reduced width for elegance) */}
        <div className="absolute right-0 top-0 h-full w-[35%]">

          <img
            src="/mata_rani.png"   // keep image in public folder
            alt=""
            className="h-full w-full object-cover object-center opacity-90"
          />

          {/* LEFT */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black" />

            {/* RIGHT */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black" />

            {/* TOP */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

            {/* BOTTOM */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Global soft dark base */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute left-1/3 top-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* ===== CONTENT SHIFTED SLIGHTLY LEFT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl mr-[35%] ml-10"
      >
        {/* Section Heading */}
        <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
          Achievements & Certifications
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Soft hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

              <div className="relative z-10 flex gap-5">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition">
                  <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition" />
                </div>

                <div>
                  <h3 className="font-serif text-lg text-white mb-2 group-hover:text-zinc-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;