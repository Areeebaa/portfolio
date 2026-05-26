"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    category: "Programming",
    colorBg: "bg-orange-50",
    colorText: "text-orange-700",
    borderColor: "border-orange-100",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    colorBg: "bg-blue-50",
    colorText: "text-blue-700",
    borderColor: "border-blue-100",
    items: ["Flutter", "React Native", "React", "HTML", "CSS"],
  },
  {
    category: "Backend",
    colorBg: "bg-emerald-50",
    colorText: "text-emerald-700",
    borderColor: "border-emerald-100",
    items: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    category: "AI / ML",
    colorBg: "bg-violet-50",
    colorText: "text-violet-700",
    borderColor: "border-violet-100",
    items: ["NLP", "RAG", "Federated Learning", "Hugging Face", "LLMs"],
  },
  {
    category: "Computer Vision",
    colorBg: "bg-pink-50",
    colorText: "text-pink-700",
    borderColor: "border-pink-100",
    items: ["OpenCV", "YOLOv8", "Image Processing"],
  },
  {
    category: "Tools & Platforms",
    colorBg: "bg-slate-100",
    colorText: "text-slate-700",
    borderColor: "border-slate-200",
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
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${group.colorBg} ${group.colorText} ${group.borderColor} hover:bg-white hover:-translate-y-0.5`}
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
