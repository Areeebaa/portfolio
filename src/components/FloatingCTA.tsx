"use client";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACTIONS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/areebafatima", primary: false },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/areeba-fatima", primary: false },
  { icon: Download, label: "Resume", href: "/resume.pdf", primary: true, download: true },
];

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fab-bar"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.3 }}
        >
          {ACTIONS.map(({ icon: Icon, label, href, primary, download }) => (
            <a
              key={label}
              href={href}
              target={download ? undefined : "_blank"}
              rel={download ? undefined : "noopener noreferrer"}
              download={download || undefined}
              aria-label={label}
              className={`shine flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg transition-all hover:-translate-y-0.5 ${
                primary
                  ? "text-white hover:shadow-[0_8px_24px_rgba(138,43,226,0.4)]"
                  : "glass text-[var(--fg)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              }`}
              style={primary ? { background: "linear-gradient(135deg, #8a2be2, #ff69b4)" } : {}}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
