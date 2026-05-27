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
    description: "Real-time parking slot detection system using ESP32-CAM and YOLOv8, featuring live occupancy updates, predictive analytics, and automated logging.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Firebase", "ESP32-CAM"],
  },
  {
    id: "wellnest",
    title: "WellNest",
    description: "Full-stack healthcare web application enabling real-time doctor-patient communication, appointment booking, and AI-assisted symptom analysis.",
    techStack: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    id: "federated",
    title: "Federated Learning System",
    description: "Privacy-preserving machine learning framework allowing model training across decentralized edge devices without exposing local data.",
    techStack: ["Python", "PyTorch", "Flower", "Flask", "Transformers"],
  },
  {
    id: "migo",
    title: "MIGO",
    description: "Two-sided mobile platform connecting female trainees with certified motorcycle instructors. Features location-based discovery, OTP auth, and automated course session tracking.",
    techStack: ["Flutter", "FastAPI", "MongoDB", "JWT"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative z-10 py-16 px-6">

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[var(--fg)]">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--fg-2)]"
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
                    className="text-xs px-2.5 py-1 rounded bg-[var(--pill)] text-[var(--fg-2)] border border-[var(--card-border)]"
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
