"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const BADGES = ["Python", "FastAPI", "Flutter", "OpenCV", "RAG", "AI/ML", "YOLOv8", "Next.js"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-24 text-center"
    >
      {/* Top pill badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-[var(--fg2)]"
      >
        <Sparkles size={14} className="text-[var(--accent)]" />
        Available for internships & entry-level roles
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto"
      >
        Building AI-Powered
        <br />
        Products & Real-World
        <br />
        Solutions
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-6 text-base sm:text-lg text-[var(--fg2)] max-w-2xl mx-auto leading-relaxed"
      >
        IT student and AI Developer. Passionate about building scalable, real-world solutions bridging artificial intelligence, full-stack development, and backend systems.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="glass px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-[var(--fg)] hover:text-[var(--bg)] flex items-center gap-2"
        >
          View Projects <ArrowRight size={16} />
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="shine glass px-7 py-3 rounded-full font-semibold text-sm text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="mt-8 flex items-center gap-3"
      >
        <a
          href="https://github.com/areebafatima"
          target="_blank"
          rel="noopener noreferrer"
          className="glass w-10 h-10 rounded-xl flex items-center justify-center text-[var(--fg2)] hover:text-[var(--fg)] transition-all hover:-translate-y-0.5"
          aria-label="GitHub"
        >
          <GithubIcon size={18} />
        </a>
        <a
          href="https://linkedin.com/in/areeba-fatima"
          target="_blank"
          rel="noopener noreferrer"
          className="glass w-10 h-10 rounded-xl flex items-center justify-center text-[var(--fg2)] hover:text-[var(--fg)] transition-all hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={18} />
        </a>
        <a
          href="/resume.pdf"
          download
          className="glass flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-[var(--fg2)] hover:text-[var(--fg)] transition-all hover:-translate-y-0.5"
          aria-label="Download Resume"
        >
          <Download size={15} /> Resume
        </a>
      </motion.div>

      {/* Floating Tech Badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="mt-16 flex flex-wrap justify-center gap-2.5 max-w-xl mx-auto"
      >
        {BADGES.map((b) => (
          <span
            key={b}
            className="glass px-3 py-1.5 rounded-full text-xs font-medium text-[var(--fg2)] transition-all hover:text-[var(--fg)] hover:-translate-y-0.5"
            style={{ border: "1px solid var(--card-border)" }}
          >
            {b}
          </span>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--fg2)]"
      >
        <span className="text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--fg2)] to-transparent" />
      </motion.div>
    </section>
  );
}
