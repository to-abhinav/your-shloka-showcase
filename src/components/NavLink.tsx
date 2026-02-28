import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden bg-black">

      {/* Animated Gradient Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 animate-pulse" />

      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* Branding */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-4">
              Udit Patel
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Turning messy data into meaningful insights.
              Passionate about SQL, Python, Power BI & Statistics.
            </p>

            <div className="mt-6 inline-block px-4 py-1 text-xs 
                            bg-green-500/10 text-green-400 
                            border border-green-500/20 rounded-full">
              ● Open to Opportunities
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <h3 className="text-white text-lg mb-6 font-medium tracking-wide">
              Currently Learning
            </h3>

            <div className="space-y-3">
              {["Advanced SQL Optimization", "Data Storytelling", "Machine Learning Basics"].map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 
                            hover:border-indigo-400/40 transition"
                >
                  <p className="text-sm text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-lg mb-6 font-medium tracking-wide">
              Let’s Connect
            </h3>

            <div className="flex gap-5 mb-8">
              {[FaLinkedinIn, FaGithub, FaEnvelope].map((Icon, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 
                            hover:scale-110 hover:border-white/40 
                            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
                            transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} className="text-zinc-300" />
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="flex items-center gap-2 px-5 py-2 text-sm 
                         border border-white/20 rounded-full 
                         text-zinc-300 hover:bg-white hover:text-black 
                         transition-all duration-300"
            >
              <FaArrowUp size={12} /> Back to Top
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Udit Patel. All rights reserved.</p>
          <p className="tracking-wide">Built with precision & curiosity.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;