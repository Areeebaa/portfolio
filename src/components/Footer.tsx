"use client";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const LINKS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/areebafatima" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/areeba-fatima" },
  { icon: Mail, label: "Email", href: "mailto:areeeebafatima@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 border-t border-[var(--card-border)]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="font-bold grad-text text-lg">Areeba Fatima</p>
          <p className="text-xs text-[var(--fg2)] mt-0.5">AI Engineer & Full-Stack Developer</p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          {LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass w-9 h-9 rounded-xl flex items-center justify-center text-[var(--fg2)] hover:text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--fg2)] flex items-center gap-1">
          &copy; {new Date().getFullYear()} Areeba Fatima. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
