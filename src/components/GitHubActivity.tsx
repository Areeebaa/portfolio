"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitFork, Star, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const PINNED = [
  {
    name: "TruthLens",
    desc: "AI-powered misinformation detection with RAG pipeline",
    lang: "Python",
    langColor: "#3776AB",
    stars: 12,
    forks: 3,
  },
  {
    name: "SmartPark",
    desc: "Real-time parking detection with YOLOv8 + ESP32-CAM",
    lang: "Python",
    langColor: "#3776AB",
    stars: 8,
    forks: 2,
  },
  {
    name: "HealthcareApp",
    desc: "Full-stack doctor-patient platform with AI symptom analysis",
    lang: "Dart",
    langColor: "#00B4AB",
    stars: 6,
    forks: 1,
  },
  {
    name: "FederatedNLP",
    desc: "Privacy-preserving federated sentiment analysis",
    lang: "Python",
    langColor: "#3776AB",
    stars: 10,
    forks: 4,
  },
];

const GITHUB_USER = "areebafatima";
const CONTRIB_ROWS = 7;
const CONTRIB_COLS = 32;

// Deterministic contribution pattern based on seed
function genContrib(row: number, col: number) {
  const val = ((row * 7 + col * 13 + row * col) % 11);
  if (val < 3) return 0;
  if (val < 6) return 1;
  if (val < 8) return 2;
  if (val < 10) return 3;
  return 4;
}

const INTENSITY = [
  "rgba(138,43,226,0.06)",
  "rgba(138,43,226,0.22)",
  "rgba(138,43,226,0.45)",
  "rgba(255,105,180,0.7)",
  "rgba(255,105,180,1)",
];

export default function GitHubActivity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="relative z-10 py-24 px-6">
      <hr className="sec-divider mb-24" />
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3">Open Source</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            GitHub <span className="grad-text">Activity</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: BookOpen, val: "15+", label: "Repositories" },
            { icon: Star, val: "36+", label: "Total Stars" },
            { icon: GitFork, val: "10+", label: "Total Forks" },
          ].map(({ icon: Icon, val, label }) => (
            <div key={label} className="glass rounded-2xl p-5 text-center card-hover">
              <Icon size={18} className="mx-auto mb-2 text-[var(--fg2)]" />
              <p className="text-2xl font-bold grad-text">{val}</p>
              <p className="text-xs text-[var(--fg2)] mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 mb-8 overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[var(--fg)]">Contribution Activity</p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--fg2)] hover:text-[var(--fg)] transition-colors"
            >
              <GithubIcon size={13} /> @{GITHUB_USER}
            </a>
          </div>
          <div className="flex gap-1" style={{ minWidth: CONTRIB_COLS * 14 }}>
            {Array.from({ length: CONTRIB_COLS }).map((_, col) => (
              <div key={col} className="flex flex-col gap-1">
                {Array.from({ length: CONTRIB_ROWS }).map((_, row) => {
                  const level = genContrib(row, col);
                  return (
                    <div
                      key={row}
                      className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125"
                      style={{ background: INTENSITY[level] }}
                      title={`${level > 0 ? level : 0} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-[10px] text-[var(--fg2)]">Less</span>
            {INTENSITY.map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
            ))}
            <span className="text-[10px] text-[var(--fg2)]">More</span>
          </div>
        </motion.div>

        {/* Pinned Repos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-semibold text-[var(--fg)] mb-4">Pinned Repositories</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PINNED.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/${GITHUB_USER}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 card-hover flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-violet-500 shrink-0" />
                    <p className="font-semibold text-sm text-[var(--fg)]">{repo.name}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--fg2)] leading-relaxed">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-[var(--fg2)]">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: repo.langColor }}
                    />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={11} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={11} /> {repo.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
