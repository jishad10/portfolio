"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useIsDark() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const compute = () =>
      setIsDark(el.getAttribute("data-theme") === "dark" || el.classList.contains("dark"));
    compute();
    const obs = new MutationObserver(compute);
    obs.observe(el, { attributes: true, attributeFilter: ["data-theme", "class"] });
    return () => obs.disconnect();
  }, []);
  return isDark;
}

const MILESTONES = [
  {
    id: "story-1",
    year: "2021",
    title: "AIUB Computer Science Foundation",
    body: "Began B.Sc. in Computer Science and Engineering at AIUB (graduated CGPA: 3.57 / 4.00), building a strong foundation in C++, C#, algorithms, and system programming.",
    color: "#3CBBB1",
    topBarGrad: "linear-gradient(90deg, #3CBBB1, #2DD4BF)",
    bgTint: "rgba(60, 187, 177, 0.05)",
  },
  {
    id: "story-2",
    year: "2022 — 2023",
    title: "Backend & Systems Deep Dive",
    body: "Specialized in backend engineering with Node.js, Express, MongoDB, PostgreSQL, and Redis caching. Built high-concurrency real-time features using Socket.IO.",
    color: "#818CF8",
    topBarGrad: "linear-gradient(90deg, #818CF8, #3CBBB1)",
    bgTint: "rgba(129, 140, 248, 0.05)",
  },
  {
    id: "story-3",
    year: "2024",
    title: "Solutya Pvt. Ltd & Professional Certs",
    body: "Joined Solutya as Software Engineer Intern, shipping production features across MERN and Next.js applications. Earned IBM DevOps and Google Project Management Professional Certificates.",
    color: "#2DD4BF",
    topBarGrad: "linear-gradient(90deg, #2DD4BF, #38BDF8)",
    bgTint: "rgba(45, 212, 191, 0.05)",
  },
  {
    id: "story-4",
    year: "2025",
    title: "IEEE BECITHCON Publication",
    body: "Authored peer-reviewed IEEE conference paper on Inception v3 Deep Learning for Automated Retinopathy Detection using OCT Images (DOI: 10.1109/BECITHCON69222.2025.11504241).",
    color: "#F59E0B",
    topBarGrad: "linear-gradient(90deg, #F59E0B, #FB923C)",
    bgTint: "rgba(245, 158, 11, 0.05)",
  },
  {
    id: "story-5",
    year: "2025 — Present",
    title: "Betopia Group (Backend & DevOps Engineer)",
    body: "Designing scalable NestJS backend services, architecting AWS and Linux VPS infrastructure, automating CI/CD with Docker & GitHub Actions (~70% deployment speedup), and co-leading engineering initiatives.",
    color: "#34D399",
    topBarGrad: "linear-gradient(90deg, #34D399, #2DD4BF)",
    bgTint: "rgba(52, 211, 153, 0.05)",
  },
];

export default function MyStory() {
  const isDark = useIsDark();

  return (
    <section
      id="my-story"
      aria-label="My Story Section"
      style={{
        padding: "130px 0",
        background: "var(--bg-1)",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "-5%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(60, 187, 177, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="section-label" style={{ margin: "0 auto 18px" }}>
            My Story
          </div>
          <h2 className="section-heading">
            The <span className="gradient-text">Engineering</span> Journey
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            From writing first lines of code to architecting cloud-native systems and publishing AI research.
          </p>
        </motion.div>

        {/* Milestone Vertical Track */}
        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          {/* Vertical Track Line */}
          <div
            style={{
              position: "absolute",
              left: 32,
              top: 20,
              bottom: 20,
              width: "3px",
              background: isDark
                ? "linear-gradient(to bottom, #3CBBB1 0%, #2DD4BF 40%, #F59E0B 80%, #38BDF8 100%)"
                : "linear-gradient(to bottom, #3CBBB1 0%, #2DD4BF 40%, #F59E0B 80%, #38BDF8 100%)",
              boxShadow: isDark ? "0 0 14px rgba(60, 187, 177, 0.5)" : "none",
              opacity: isDark ? 0.85 : 0.4,
              borderRadius: "2px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.id}
                id={m.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                }}
              >
                {/* Year Node Shield */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: 66,
                      height: 66,
                      borderRadius: "50%",
                      background: isDark ? "rgba(11, 17, 32, 0.95)" : "#FFFFFF",
                      border: `2px solid ${isDark ? (m.color === "#3CBBB1" || m.color === "#2DD4BF" ? "#5EEAD4" : m.color) : m.color === "#3CBBB1" || m.color === "#2DD4BF" || m.color === "#34D399" ? "#0D9488" : m.color === "#F59E0B" ? "#D97706" : m.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: isDark ? (m.color === "#3CBBB1" || m.color === "#2DD4BF" ? "#5EEAD4" : m.color) : m.color === "#3CBBB1" || m.color === "#2DD4BF" || m.color === "#34D399" ? "#0D9488" : m.color === "#F59E0B" ? "#D97706" : m.color,
                      letterSpacing: "0.02em",
                      boxShadow: isDark
                        ? `0 0 0 4px #0B1120, 0 0 22px ${m.color}60`
                        : `0 0 0 4px #F1F5F9, 0 6px 20px ${m.color}25`,
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {m.year}
                  </div>
                </div>

                {/* Milestone Content Card */}
                <div
                  style={{
                    flex: 1,
                    background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                    borderRadius: "var(--r-2xl)",
                    padding: "28px 32px",
                    boxShadow: isDark
                      ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                      : "var(--shadow-card)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(8px)";
                    el.style.borderColor = m.color;
                    el.style.boxShadow = isDark
                      ? `0 16px 40px ${m.color}35, 0 4px 16px rgba(0,0,0,0.6)`
                      : `0 12px 32px ${m.color}25, 0 2px 8px rgba(15,23,42,0.06)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(0)";
                    el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
                    el.style.boxShadow = isDark
                      ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                      : "var(--shadow-card)";
                  }}
                >
                  {/* Top accent stroke line inset respecting rounded corners */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 24,
                      right: 24,
                      height: 3.5,
                      background: m.topBarGrad,
                      borderRadius: "0 0 4px 4px",
                    }}
                  />

                  {/* Watermark Number */}
                  <div
                    style={{
                      position: "absolute",
                      right: 24,
                      top: 18,
                      fontSize: "3rem",
                      fontWeight: 900,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: isDark ? `${m.color}35` : `${m.color}20`,
                      userSelect: "none",
                      lineHeight: 1,
                    }}
                  >
                    0{i + 1}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.18rem",
                      color: "var(--text-primary)",
                      marginBottom: 8,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {m.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-body)",
                      lineHeight: 1.8,
                    }}
                  >
                    {m.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
