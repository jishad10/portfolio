import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import GitHubActivity from "@/components/sections/GitHubActivity";
import MyStory from "@/components/sections/MyStory";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* ── Navigation ──────────────────────────────── */}
      <Navbar />

      <main>
        {/* 01 · Full-viewport split hero */}
        <Hero />

        {/* 02 · Offset two-column bio */}
        <About />

        {/* 03 · Alternating left/right timeline */}
        <Experience />

        {/* 04 · Bento grid projects */}
        <Projects />

        {/* 05 · Horizontal scroll publications */}
        <Research />

        {/* 06 · Categorized skill bars */}
        <Skills />

        {/* 07 · Badge credential grid */}
        <Certifications />

        {/* 08 · Featured quote + marquee strip */}
        <Testimonials />

        {/* 09 · 3-column service cards */}
        <Services />

        {/* 10 · GitHub heatmap + stats */}
        <GitHubActivity />

        {/* 11 · Editorial milestone timeline */}
        <MyStory />

        {/* 12 · Two-column accordion */}
        <FAQ />

        {/* 13 · Split contact + form */}
        <Contact />
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <Footer />
    </>
  );
}
