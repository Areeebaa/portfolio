"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    id: "truthlens",
    title: "TruthLens",
    description: "AI misinformation detection platform using RAG. Verifies claims across text, URLs, PDFs, and images with evidence-based credibility scoring.",
    techStack: ["Python", "FastAPI", "Hugging Face", "Langchain", "React"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "smartpark",
    title: "Smart Parking System",
    description: "Real-time parking slot detection using ESP32-CAM and YOLOv8 with live updates, predictive analytics, and automated logging.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Flutter", "Firebase", "ESP32-CAM"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "healthcare",
    title: "Healthcare Platform",
    description: "Full-stack healthcare app with AI symptom analysis, appointment booking, health tracking, and doctor-patient communication.",
    techStack: ["Flutter", "FastAPI", "Firebase", "Gemini AI"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "federated",
    title: "Federated Learning System",
    description: "Privacy-preserving machine learning framework allowing model training across decentralized edge devices without exposing local data.",
    techStack: ["Python", "PyTorch", "Flower", "Flask", "Transformers"],
    github: "https://github.com/areebafatima",
  },
  {
    id: "migo",
    title: "Migo",
    description: "A women-focused mobility platform connecting female learners with verified female two-wheeler trainers through a safe digital experience.",
    techStack: ["Flutter", "Next.js", "Tailwind CSS", "FastAPI", "Firebase", "MongoDB"],
    github: "https://github.com/areebafatima",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative z-10 py-16 px-6">
      <hr className="sec-divider mb-14" />
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[var(--fg)]">Selected Work</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all card-hover"
            >
              <div className="mb-4">
                <h3 className="font-bold text-[var(--fg)] text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--fg-2)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.demo && (
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--card-border)]">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
