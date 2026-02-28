import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-36 px-6 border-b border-border bg-black overflow-hidden"
    >
      {/* ===== BACKGROUND (UNCHANGED) ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/shiv_shakti.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full px-12"
      >
        <p className="text-sm md:text-base uppercase tracking-[0.4em] text-zinc-400 mb-12">
          Get in Touch
        </p>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-20 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight">
              Let’s create something meaningful together.
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Whether you have a project idea, a data problem to solve, or just
              want to connect — I’d love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Mail className="w-4 h-4" />
                <span className="hover:text-white transition">
                  vermasatyam2412@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>Chandigarh, India</span>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative ml-auto mr-0 w-full max-w-md p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-8 -mt-20"
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
            ))}

            <div>
              <label className="text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
              >
                ✔ Message sent successfully! I’ll get back to you soon.
              </motion.div>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                ❌ Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <p className="text-xs text-zinc-500 text-center">
            © {new Date().getFullYear()} Satyam Verma. All rights reserved.
            <p className="tracking-wide"><b><i>Built with precision & curiosity.</i></b></p>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;