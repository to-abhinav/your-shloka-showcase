import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Get in Touch
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
            Let's create something together.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you have a project in mind, a question, or simply want to connect — 
            I'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>hello@yourname.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Send Message
            <Send className="w-3.5 h-3.5" />
          </button>
        </motion.form>
      </div>

      <div className="mt-24 pt-8 border-t border-border">
        <p className="text-xs text-subtle text-center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
