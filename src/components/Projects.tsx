"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, Lightbulb, Wrench, Layers3 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export type Project = {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  overview: string;
  architecture: string;
  features: string[];
  challenges: string[];
  future: string[];
  techStack: string[];
  github?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    id: "truthlens",
    emoji: "🔍",
    title: "TruthLens",
    tagline: "AI Misinformation Detection Platform",
    description: "AI-powered fact verification using RAG — supporting text, URLs, documents, and images with evidence-based credibility scoring.",
    gradient: "from-violet-600 via-purple-500 to-pink-500",
    tags: ["AI", "RAG", "FastAPI", "NLP", "Python"],
    overview:
      "TruthLens is a comprehensive AI misinformation detection platform that leverages Retrieval-Augmented Generation (RAG) to verify claims across multiple input types. It synthesizes evidence from trusted knowledge bases to produce a credibility score and human-readable verdict.",
    architecture:
      "Frontend → FastAPI backend → RAG pipeline (Embedding model + Vector store) → Verification engine → Response with score and evidence chain.",
    features: [
      "Multi-modal input: text, URL scraping, PDF documents, and images with OCR",
      "Evidence-based RAG pipeline with source attribution",
      "Credibility scoring with confidence intervals",
      "Modern responsive UI with real-time result streaming",
    ],
    challenges: [
      "Handling latency in the RAG retrieval pipeline for real-time UX",
      "Ensuring deterministic, explainable verdicts from LLMs",
      "Building a reliable OCR pipeline for diverse image types",
    ],
    future: [
      "Browser extension for one-click fact checking",
      "Multilingual support",
      "Social media viral misinformation dashboard",
    ],
    techStack: ["Python", "FastAPI", "Hugging Face", "Langchain", "RAG", "OpenCV", "React"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "smartpark",
    emoji: "🅿️",
    title: "Smart Parking System",
    tagline: "AI-Powered Real-Time Parking Management",
    description: "Real-time slot detection using ESP32-CAM, YOLOv8, and OpenCV with live parking updates, predictive analytics, and automated logging.",
    gradient: "from-pink-500 via-rose-400 to-orange-400",
    tags: ["Computer Vision", "IoT", "OpenCV", "YOLOv8", "Flutter"],
    overview:
      "An end-to-end smart parking management system combining IoT hardware with AI vision. ESP32-CAM captures live parking lot feeds, YOLOv8 detects occupancy, and a mobile app provides real-time availability.",
    architecture:
      "ESP32-CAM → Edge inference → Firebase Realtime DB → Flutter mobile app + Admin web dashboard → Analytics engine.",
    features: [
      "Real-time slot detection with YOLOv8 at ~30 FPS",
      "LCD display integration for on-site occupancy info",
      "Flutter mobile app with live map view",
      "Predictive analytics for peak hour forecasting",
      "Automated occupancy logging and reporting",
    ],
    challenges: [
      "Optimizing YOLOv8 inference for constrained embedded hardware",
      "Minimizing latency in the camera → cloud → mobile pipeline",
      "Handling dynamic lighting and occlusion in parking environments",
    ],
    future: [
      "License plate recognition with automated billing",
      "Multi-lot aggregation dashboard",
      "Raspberry Pi edge deployment for totally offline mode",
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "Flutter", "Firebase", "ESP32-CAM", "Flask"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "healthcare",
    emoji: "🏥",
    title: "Healthcare Platform",
    tagline: "Full-Stack Doctor-Patient Interaction App",
    description: "Full-stack healthcare platform with AI symptom analysis, appointment booking, health tracking, and doctor-patient communication.",
    gradient: "from-teal-500 via-cyan-400 to-blue-400",
    tags: ["Full-Stack", "Flutter", "FastAPI", "AI", "Firebase"],
    overview:
      "A comprehensive healthcare app that bridges the gap between patients and healthcare providers. Features an AI-powered symptom analysis chatbot, appointment booking, and health record management.",
    architecture:
      "Flutter mobile app → FastAPI backend → AI symptom engine → Firebase (Auth + Realtime + Firestore) → Admin dashboard.",
    features: [
      "AI-driven symptom analysis chatbot with severity scoring",
      "Doctor discovery and appointment scheduling",
      "Health record and vitals tracking timeline",
      "In-app secure messaging between patients and doctors",
    ],
    challenges: [
      "Designing a reliable symptom-to-condition inference pipeline",
      "Balancing medical accuracy with user-friendly language",
      "Real-time chat architecture scales with concurrent users",
    ],
    future: [
      "Wearables integration for automatic vitals logging",
      "Telemedicine video consultations",
      "EMR integration with hospitals",
    ],
    techStack: ["Flutter", "Dart", "FastAPI", "Python", "Firebase", "NLP"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "federated",
    emoji: "🔐",
    title: "Federated Sentiment Analysis",
    tagline: "Privacy-Preserving NLP with Federated Learning",
    description: "Privacy-preserving NLP sentiment analysis system using federated learning with Flask API deployment for real-time predictions.",
    gradient: "from-violet-600 via-indigo-500 to-purple-400",
    tags: ["NLP", "Federated Learning", "Python", "Flask", "AI"],
    overview:
      "A research-driven NLP project implementing federated learning to train sentiment analysis models across distributed clients without sharing raw data — ensuring full privacy compliance.",
    architecture:
      "Distributed clients → Local model training on private data → Federated averaging (Fed-Avg) → Global model aggregation → Flask API for inference.",
    features: [
      "Federated averaging across simulated distributed nodes",
      "Differential privacy noise injection for enhanced protection",
      "REST API with Flask for real-time sentiment inference",
      "Comparative evaluation: Federated vs. centralized training",
    ],
    challenges: [
      "Convergence stability across heterogeneous client data distributions",
      "Balancing privacy budget with model accuracy",
      "Simulating realistic communication delays between nodes",
    ],
    future: [
      "Integration with actual distributed edge devices",
      "Extension to multiclass NLP tasks",
      "Secure aggregation protocols",
    ],
    techStack: ["Python", "PyTorch", "Flower (FL Framework)", "Flask", "Transformers", "Hugging Face"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "migo",
    emoji: "🚺",
    title: "Migo",
    tagline: "Women Mobility & Training Platform",
    description: "A women-focused mobility platform connecting female learners with verified female two-wheeler trainers through a safe, accessible digital experience.",
    gradient: "from-pink-500 via-rose-400 to-fuchsia-500",
    tags: ["Flutter", "Full-Stack", "Social Impact", "Startup"],
    overview:
      "Migo addresses a real gap: many women in India face discomfort or safety concerns when learning two-wheeler driving. The platform creates a safer learning ecosystem by connecting women learners exclusively with women trainers — built as a startup product with early registration, onboarding, and trainer discovery.",
    architecture:
      "Flutter mobile app + Next.js landing page → FastAPI / Node.js backend → Firebase / MongoDB → Trainer discovery & booking engine → Auth & notifications.",
    features: [
      "Women-only trainer and learner platform with verified profiles",
      "Early registration and onboarding flow",
      "Responsive promotional landing website",
      "Secure user authentication",
      "Trainer discovery and booking system",
      "Mobile-first, scalable startup architecture",
    ],
    challenges: [
      "Designing a trust-first onboarding that makes women feel safe",
      "Balancing startup speed with scalable architecture decisions",
      "Building a dual-sided marketplace (learners + trainers) from scratch",
    ],
    future: [
      "Four-wheeler training support",
      "Real-time trainer tracking",
      "In-app payments and ratings",
      "AI-powered trainer recommendations",
    ],
    techStack: ["Flutter", "Next.js", "Tailwind CSS", "FastAPI", "Node.js", "Firebase", "MongoDB", "Figma"],
    github: "https://github.com/areebafatima",
  },
];

const TAG_COLORS: Record<string, string> = {
  AI: "from-violet-500 to-purple-400",
  "Computer Vision": "from-pink-500 to-rose-400",
  Flutter: "from-cyan-500 to-blue-400",
  FastAPI: "from-teal-500 to-green-400",
  RAG: "from-violet-600 to-indigo-400",
  OpenCV: "from-orange-500 to-amber-400",
  IoT: "from-green-500 to-teal-400",
  NLP: "from-pink-500 to-violet-400",
  "Full-Stack": "from-orange-400 to-pink-400",
  "Federated Learning": "from-indigo-500 to-violet-400",
  Python: "from-blue-400 to-cyan-400",
  Flask: "from-gray-500 to-slate-400",
  Firebase: "from-orange-400 to-yellow-400",
};

function TagBadge({ tag }: { tag: string }) {
  const color = TAG_COLORS[tag] ?? "from-violet-500 to-pink-400";
  return (
    <span
      className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
      style={{
        background: `linear-gradient(135deg, var(--pill), var(--pill))`,
        border: "1px solid var(--card-border)",
        color: "var(--fg2)",
      }}
    >
      {tag}
    </span>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          {/* Header */}
          <div className={`rounded-t-3xl p-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent_70%)]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            <span className="text-4xl mb-3 block">{project.emoji}</span>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-white/80 text-sm mt-1">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((t) => (
                <span key={t} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-8 space-y-7">
            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers3 size={16} className="text-violet-500" />
                <h4 className="font-semibold text-[var(--fg)] text-sm">Overview</h4>
              </div>
              <p className="text-sm text-[var(--fg2)] leading-relaxed">{project.overview}</p>
            </div>

            {/* Architecture */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight size={16} className="text-pink-500" />
                <h4 className="font-semibold text-[var(--fg)] text-sm">Architecture</h4>
              </div>
              <div
                className="text-xs font-mono rounded-xl px-4 py-3 leading-relaxed text-[var(--fg2)]"
                style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}
              >
                {project.architecture}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={16} className="text-orange-500" />
                <h4 className="font-semibold text-[var(--fg)] text-sm">Tech Stack</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full text-[var(--fg2)]"
                    style={{ background: "var(--pill)", border: "1px solid var(--card-border)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-yellow-500" />
                <h4 className="font-semibold text-[var(--fg)] text-sm">Key Features</h4>
              </div>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--fg2)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h4 className="font-semibold text-[var(--fg)] text-sm mb-3">Challenges Solved</h4>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--fg2)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future */}
            <div>
              <h4 className="font-semibold text-[var(--fg)] text-sm mb-3">Future Improvements</h4>
              <ul className="space-y-2">
                {project.future.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--fg2)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Placeholder: Architecture Diagram Section */}
            <div
              className="rounded-2xl flex flex-col items-center justify-center py-10 text-center"
              style={{ background: "var(--pill)", border: "1px dashed var(--card-border)" }}
            >
              <span className="text-2xl mb-2">🖼️</span>
              <p className="text-xs text-[var(--fg2)]">Architecture diagram / Screenshots</p>
              <p className="text-[10px] text-[var(--fg2)] opacity-60 mt-0.5">Coming soon</p>
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine flex-1 glass flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-[var(--fg)] hover:-translate-y-0.5 transition-all"
                  >
                    <GithubIcon size={16} /> View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #8a2be2, #ff69b4)" }}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative z-10 py-16 px-6">
        <hr className="sec-divider mb-14" />
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3">Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
              Featured <span className="grad-text">Projects</span>
            </h2>
            <p className="mt-4 text-[var(--fg2)] max-w-lg mx-auto text-sm">
              Real things I built — click any card to see the full case study.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-hover cursor-pointer group"
                onClick={() => setSelected(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
              >
                {/* Gradient Banner */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.emoji}</span>
                      <div>
                        <h3 className="font-bold text-[var(--fg)] text-base group-hover:grad-text transition-all">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[var(--fg2)]">{project.tagline}</p>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[var(--fg2)] mt-1 shrink-0 group-hover:text-violet-500 group-hover:translate-x-1 transition-all"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--fg2)] leading-relaxed mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((t) => (
                      <TagBadge key={t} tag={t} />
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--card-border)]">
                    <p className="text-xs text-[var(--fg2)]">Click to view case study →</p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="glass w-7 h-7 rounded-lg flex items-center justify-center text-[var(--fg2)] hover:text-[var(--fg)] transition-all"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
