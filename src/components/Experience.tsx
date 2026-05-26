"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, TrendingUp } from "lucide-react";

const TIMELINE = [
  {
    year: "2025",
    type: "internship",
    icon: Briefcase,
    color: "from-violet-500 to-purple-400",
    title: "AI/ML Internship",
    subtitle: "Machine Learning Engineering",
    description:
      "Worked with Hugging Face frameworks to train, fine-tune, and optimize machine learning models. Conducted experiments and evaluations to improve model performance across various NLP tasks.",
    tags: ["Hugging Face", "PyTorch", "Python", "NLP"],
  },
  {
    year: "2025",
    type: "project",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-400",
    title: "TruthLens — AI Platform",
    subtitle: "Major AI Project",
    description:
      "Built a full RAG-based misinformation detection platform supporting text, URLs, documents, and image inputs with credibility scoring.",
    tags: ["RAG", "FastAPI", "LLM"],
  },
  {
    year: "2025",
    type: "project",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-400",
    title: "Smart Parking System",
    subtitle: "IoT + Computer Vision",
    description:
      "End-to-end AI parking system with ESP32-CAM, YOLOv8, Flutter mobile app, and Firebase backend.",
    tags: ["YOLOv8", "Flutter", "IoT"],
  },
  {
    year: "2024",
    type: "learning",
    icon: Award,
    color: "from-teal-500 to-cyan-400",
    title: "SDG & Community Outreach",
    subtitle: "University Initiative",
    description:
      "Participated in community outreach programs aligned with Sustainable Development Goals. Led tech workshops and awareness sessions.",
    tags: ["Leadership", "SDGs", "Community"],
  },
  {
    year: "2024",
    type: "project",
    icon: TrendingUp,
    color: "from-indigo-500 to-violet-400",
    title: "Federated Sentiment Analysis",
    subtitle: "Research Project",
    description:
      "Privacy-preserving NLP using federated learning with real-time Flask API deployment for distributed model training.",
    tags: ["Federated Learning", "NLP", "Flask"],
  },
  {
    year: "2023",
    type: "learning",
    icon: Award,
    color: "from-green-500 to-emerald-400",
    title: "Started IT Degree",
    subtitle: "University Journey Begins",
    description:
      "Began formal IT education and immediately gravitated towards AI/ML, building first Python projects and exploring machine learning fundamentals.",
    tags: ["Python", "ML Fundamentals", "University"],
  },
];

const ACHIEVEMENTS = [
  { emoji: "🏗️", text: "Built 10+ AI and full-stack applications" },
  { emoji: "📖", text: "Strong project-based learning approach" },
  { emoji: "💻", text: "Active DSA & software engineering learner" },
  { emoji: "🌍", text: "Community outreach & SDG participation" },
  { emoji: "🤝", text: "Startup product development experience" },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <hr className="sec-divider mb-24" />
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3">Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            Experience &amp; <span className="grad-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 top-2 bottom-2 w-px timeline-line" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-5"
                  >
                    {/* Dot */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}
                      >
                        <Icon size={14} className="text-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="glass rounded-2xl p-4 flex-1 card-hover">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-[var(--fg)]">{item.title}</h4>
                        <span className="text-xs text-[var(--fg2)] shrink-0">{item.year}</span>
                      </div>
                      <p className="text-xs text-pink-500 font-medium mb-2">{item.subtitle}</p>
                      <p className="text-xs text-[var(--fg2)] leading-relaxed mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full text-[var(--fg2)]"
                            style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-[var(--fg)] text-lg mb-6">Achievements</h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="glass rounded-2xl p-4 flex items-start gap-3 card-hover"
                  >
                    <span className="text-xl shrink-0">{a.emoji}</span>
                    <p className="text-sm text-[var(--fg2)]">{a.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Internship highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(138,43,226,0.12), rgba(255,105,180,0.08))",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full -translate-y-8 translate-x-8" />
              <Briefcase size={20} className="text-violet-500 mb-3" />
              <h4 className="font-bold text-[var(--fg)] text-base">AI/ML Internship</h4>
              <p className="text-xs text-pink-500 font-medium mt-1 mb-3">Industry Experience</p>
              <p className="text-sm text-[var(--fg2)] leading-relaxed">
                Trained and optimized machine learning models using Hugging Face. Improved model performance through systematic experimentation, evaluation, and hyperparameter tuning.
              </p>
              <div className="flex gap-2 mt-4">
                {["Hugging Face", "PyTorch", "Model Training", "NLP"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full text-[var(--fg2)]"
                    style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
