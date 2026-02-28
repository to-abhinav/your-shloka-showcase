// import profile from "../assets/pic_2.jpg.jpeg";

// const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
//     >
      
//       {/* Subtle background glow */}
//       <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* About Label */}
//         <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
//           About Me
//         </p>

//         <div className="relative grid md:grid-cols-[1fr_2fr] gap-20 items-start">
          
//           {/* Vertical Divider */}
//           <div className="hidden md:block absolute left-[35%] top-20 h-80 w-px bg-white/20"></div>

//           {/* Image Card */}
//           <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            
//             <img
//               src={profile}
//               alt="Udit Patel"
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
//             />

//             {/* Subtle overlay */}
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

//             {/* Soft glow */}
//             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700 pointer-events-none" />
//           </div>

//           {/* Text Content */}
//           <div className="space-y-6">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
//               Hello, I’m{" "}
//               <span className="text-zinc-400 font-normal">
//                 Udit Patel....!!
//               </span>
//             </h2>

//             <p className="text-zinc-400 leading-relaxed">
//               I’m a <b>Data Analyst</b> who enjoys turning chaos into clarity.
//               I like working with messy datasets, asking too many questions,
//               and finding patterns that weren’t obvious at first glance.
//               For me, data isn’t just numbers — it’s a story waiting to be understood.
//             </p>

//             <p className="text-zinc-400 leading-relaxed">
//               As a fresher, I’m building strong fundamentals in{" "}
//               <b>MS-Excel, SQL, Python, Statistics</b> and <b>Power BI</b> —
//               but more importantly, I’m building the habit of thinking critically.
//               I enjoy experimenting, breaking things, fixing them, and learning
//               something new in the process.
//             </p>

//             <p className="text-zinc-400 leading-relaxed">
//               When I’m not analyzing data, I’m probably doing something completely
//               random — reading ancient philosophy, optimizing a tiny workflow
//               that didn’t need optimizing, exploring new ideas, or just
//               overthinking how things work. I believe growth comes from curiosity,
//               consistency, and a bit of controlled chaos.
//             </p>

//             {/* Stats Section */}
//             <div className="flex items-center gap-12 pt-7 divide-x divide-white/20">
              
//               <div>
//                 <p className="text-2xl md:text-3xl font-serif text-white">
//                   Fresher
//                 </p>
//                 <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
//                   Actively Building Skills
//                 </p>
//               </div>

//               <div className="pl-12">
//                 <p className="text-2xl md:text-3xl font-serif text-white">
//                   Self-Driven
//                 </p>
//                 <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
//                   Projects & Continuous Learning
//                 </p>
//               </div>

//               <div className="pl-12">
//                 <p className="text-4xl md:text-5xl font-serif text-white">
//                   4+
//                 </p>
//                 <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
//                   Projects
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;










import profile from "../assets/pic_2.jpg.jpeg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 border-b border-border bg-black overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* 🔥 Animated Wrapper (Runs On Every Reload) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* About Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12"
        >
          About Me
        </motion.p>

        <div className="relative grid md:grid-cols-[1fr_2fr] gap-20 items-start">

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-[35%] top-20 h-80 w-px bg-white/20"></div>

          {/* Image Card Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <img
              src={profile}
              alt="Udit Patel"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700 pointer-events-none" />
          </motion.div>

          {/* Text Content Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
              Hello, I’m{" "}
              <span className="text-zinc-400 font-normal">
                Udit Patel....!!
              </span>
            </h2>

          <p className="text-zinc-400 leading-relaxed">
            I’m a <b>Data Analyst</b> who enjoys turning chaos into clarity.
            I like working with messy datasets, asking too many questions,
            and finding patterns that weren’t obvious at first glance.
            For me, data isn’t just numbers — it’s a story waiting to be understood.
          </p>

            <p className="text-zinc-400 leading-relaxed">
              As a fresher, I’m building strong fundamentals in{" "}
              <b>MS-Excel, SQL, Python, Statistics</b> and <b>Power BI</b> —
              but more importantly, I’m building the habit of thinking critically.
              I enjoy experimenting, breaking things, fixing them, and learning
              something new in the process.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              When I’m not analyzing data, I’m probably doing something completely
              random — reading ancient philosophy, optimizing a tiny workflow
              that didn’t need optimizing, exploring new ideas, or just
              overthinking how things work. I believe growth comes from curiosity,
              consistency, and a bit of controlled chaos.
              </p>

            {/* Stats Section Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-12 pt-7 divide-x divide-white/20"
            >
              <div>
                <p className="text-2xl md:text-3xl font-serif text-white">
                  Fresher
                </p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                  Actively Building Skills
                </p>
              </div>

              <div className="pl-12">
                <p className="text-2xl md:text-3xl font-serif text-white">
                  Self-Driven
                </p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                  Continuous Learning
                </p>
              </div>

              <div className="pl-12">
                <p className="text-4xl md:text-5xl font-serif text-white">
                  4+
                </p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                  Projects
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;