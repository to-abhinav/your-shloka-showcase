// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black">
      
//       {/* Subtle Premium Glow */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >


//         {/* Adiyogi Right Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         <div className="absolute right-0 top-0 h-full w-[55%]">
          
//           <img
//             src="/adiyogi.png"
//             alt=""
//             className="h-full w-full object-cover object-right opacity-80"
//           />

//           {/* Left Fade Gradient (Blend into black) */}
//           <div className="absolute inset-0 
//                           bg-gradient-to-l 
//                           from-transparent 
//                           via-black/60 
//                           to-black 
//                           pointer-events-none" />
//         </div>
// </div>



//           <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
//             Welcome
//           </p>

//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8">
//             Crafting Ideas
//             <br />
//             <span className="text-zinc-400">Into Reality</span>
//           </h1>

//           <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed mb-12">
//             Developer, thinker, and lifelong learner — building meaningful digital experiences 
//             guided by timeless philosophy.
//           </p>

//           <div className="flex gap-4 flex-wrap">

//             <button
//               onClick={() =>
//                 document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="px-8 py-3 bg-white text-black rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:bg-zinc-200"
//             >
//               Get in Touch
//             </button>

//             <button
//               onClick={() =>
//                 document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="px-8 py-3 border border-white/20 rounded-full text-sm tracking-wide text-white hover:bg-white/5 transition-all duration-300"
//             >
//               View Work
//             </button>

//           </div>
//         </motion.div>

//         {/* RIGHT SIDE VISUAL — Minimal & Elegant */}
//         <div className="hidden lg:flex justify-center items-center">
//       <div className="relative w-80 h-80 flex items-center justify-center">

//         {/* Subtle glow behind infinity */}
//         <div className="absolute w-72 h-72 bg-white/5 rounded-full blur-3xl" />

//         {/* Infinity Symbol */}
//         <span className="text-[220px] leading-none font-light bg-gradient-to-r from-white/20 to-white/5 bg-clip-text text-transparent select-none">
//           ∞
//         </span>

//         </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;



















import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black">

      {/* Adiyogi Right Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[50%]">
          
          <img
            src="/Adiyogii.png"
            alt=""
            className="h-full w-full object-cover object-right opacity-70"
          />

          {/* Smooth Fade Blend */}
          <div className="absolute inset-0 
                          bg-gradient-to-l 
                          from-transparent 
                          via-black/60 
                          to-black" />
        </div>
      </div>

      {/* Subtle Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 
                      w-[100px] h-[100px] 
                      bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">

          <motion.div
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1], // smooth cinematic ease
              }}
            >

            <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-10">
              Welcome
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8">
              Crafting Ideas
              <br />
              <span className="text-zinc-400">Into Reality</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed mb-12">
              Developer, thinker, and lifelong learner — building meaningful digital experiences 
              guided by timeless philosophy.
            </p>

            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-white text-black rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:bg-zinc-200"
              >
                Get in Touch
              </button>

              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 border border-white/20 rounded-full text-sm tracking-wide text-white hover:bg-white/5 transition-all duration-300"
              >
                View Work
              </button>

            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;