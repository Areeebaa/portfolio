import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import NowSection from "@/components/NowSection";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingCTA from "@/components/FloatingCTA";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <NowSection />
      <GitHubActivity />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
