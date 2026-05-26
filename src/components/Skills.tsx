"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["Flutter", "React Native", "React", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    category: "AI / ML",
    items: ["NLP", "RAG", "Federated Learning", "Hugging Face", "LLMs"],
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "YOLOv8", "Image Processing"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Firebase", "VS Code", "Postman"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative z-10 py-16 px-6">
      <hr className="sec-divider mb-14" />
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--fg)] uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-[var(--fg2)] max-w-lg mx-auto text-sm">
            A curated set of tools I use to build AI-powered products and full-stack systems.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.09 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--fg)]" />
                <p className="text-sm font-semibold text-[var(--fg)]">{group.category}</p>
              </div>
              {/* Pill list */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium text-[var(--fg2)] transition-all hover:text-[var(--fg)]"
                    style={{
                      background: "var(--pill)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
