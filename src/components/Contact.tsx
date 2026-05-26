"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Download, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const SOCIALS = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    sub: "Connect professionally",
    href: "https://linkedin.com/in/areeba-fatima",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    sub: "See my code",
    href: "https://github.com/Areeebaa",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "areeeebafatima@gmail.com",
    href: "mailto:areeeebafatima@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    sub: "+91 6301351096",
    href: "tel:+916301351096",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xanqkpyz", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative z-10 py-16 px-6">
      <hr className="sec-divider mb-14" />
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--fg)] uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-[var(--fg2)] max-w-lg mx-auto text-sm leading-relaxed">
            I am currently looking for an entry-level role or internship to apply my problem-solving skills in backend, AI, or full-stack development. My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Social Links + Resume */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {SOCIALS.map(({ icon: Icon, label, sub, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass p-4 rounded-2xl transition-all duration-300 hover:bg-[var(--fg)] hover:text-[var(--bg)]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--pill)] group-hover:bg-transparent">
                  <Icon size={22} className="text-[var(--fg)] group-hover:text-[var(--bg)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--fg)] group-hover:text-[var(--bg)] text-base">{label}</h3>
                  <p className="text-sm text-[var(--fg2)] group-hover:text-[var(--bg)] group-hover:opacity-80">{sub}</p>
                </div>
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Areeba_Fatima_Resume.pdf"
              className="shine w-full group flex items-center justify-center gap-2 p-4 rounded-2xl glass transition-all hover:bg-[var(--fg)] hover:text-[var(--bg)] text-[var(--fg)] font-semibold mt-6"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[var(--fg)] mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]"
                  style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--fg)] mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]"
                  style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--fg)] mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you're working on..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none resize-none transition-all focus:ring-2 focus:ring-[var(--accent)]"
                  style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="shine w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "var(--accent-grad)" }}
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-500 text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 text-sm"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Try again or email directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
