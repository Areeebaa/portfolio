"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HIGHLIGHTS = [
  { text: "Passionate about building scalable AI systems and full-stack solutions." },
  { text: "Focused on solving real-world challenges through intelligent engineering." },
  { text: "Experienced in Python, Flutter, FastAPI, and Computer Vision (OpenCV, YOLOv8)." },
  { text: "Consistently refining my foundation in data structures and backend architecture." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative z-10 py-16 px-6">
      <hr className="sec-divider mb-14" />
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--fg)] uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            AI-focused Software Developer
            <br />
            &amp; Product Builder
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass p-2 max-w-sm mx-auto">
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/areeba.jpg"
                  alt="Areeba Fatima"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-[var(--fg)]">
              Hi, I&apos;m Areeba Fatima
            </h3>
            
            <p className="text-[var(--fg2)] leading-relaxed text-base">
              I am an Information Technology student with a strong foundation in software development, AI systems, and mobile applications. My fascination with technology stems from its ability to solve complex, real-world problems efficiently.
            </p>
            <p className="text-[var(--fg2)] leading-relaxed text-base">
              Whether I am developing an AI-driven misinformation detection platform, orchestrating a federated learning NLP system, or deploying an IoT smart parking solution, my goal remains constant: building scalable, sophisticated products that matter.
            </p>

            <div className="space-y-4 pt-4 border-t border-[var(--card-border)]">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--fg)] shrink-0" />
                  <p className="text-sm text-[var(--fg2)] leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
