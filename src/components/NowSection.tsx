"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Radio, Users } from "lucide-react";

const BUILDING = [
  {
    icon: Zap,
    title: "AI Misinformation Platform",
    sub: "TruthLens",
    desc: "Adding browser extension, multilingual support, and social media scanning.",
    color: "from-violet-500 to-purple-400",
    status: "Iterating",
  },
  {
    icon: Radio,
    title: "Smart Parking System",
    sub: "SmartPark",
    desc: "Adding LPR (license plate recognition) and multi-lot aggregation dashboard.",
    color: "from-pink-500 to-orange-400",
    status: "Extending",
  },
  {
    icon: Users,
    title: "Women-Focused Startup Platform",
    sub: "MIGO",
    desc: "Building the mobile app and community platform for women entrepreneurs.",
    color: "from-teal-500 to-cyan-400",
    status: "Shipping",
  },
];

export default function NowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="now" className="relative z-10 py-24 px-6">
      <hr className="sec-divider mb-24" />
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-[var(--fg2)] mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live & Active
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
            Currently <span className="grad-text">Building</span>
          </h2>
          <p className="mt-4 text-[var(--fg2)] max-w-lg mx-auto text-sm">
            I&apos;m not just a portfolio — here&apos;s what I&apos;m actively shipping right now.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {BUILDING.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
              >
                {/* Gradient orb */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl -translate-y-6 translate-x-6`}
                />
                {/* Status badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-green-600 dark:text-green-400"
                    style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)" }}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-[var(--fg2)] font-medium mb-1">{item.sub}</p>
                <h3 className="font-bold text-[var(--fg)] text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-[var(--fg2)] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
