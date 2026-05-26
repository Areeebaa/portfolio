"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Blob 1 – violet */}
      <div
        className="blob-1 absolute rounded-full opacity-60 blur-3xl"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(138,43,226,0.18) 0%, transparent 70%)",
          top: "-80px",
          left: "10%",
        }}
      />
      {/* Blob 2 – pink */}
      <div
        className="blob-2 absolute rounded-full opacity-60 blur-3xl"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(255,105,180,0.15) 0%, transparent 70%)",
          top: "30vh",
          right: "5%",
        }}
      />
      {/* Blob 3 – orange */}
      <div
        className="blob-3 absolute rounded-full opacity-50 blur-3xl"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,165,0,0.12) 0%, transparent 70%)",
          bottom: "10vh",
          left: "30%",
        }}
      />
      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(138,43,226,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(255,105,180,0.05) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
