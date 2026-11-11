"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Terminal,
  Server,
  Cloud,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import OrbitingSkills from "@/components/ui/orbiting-skills";

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

const STATS = [
  { value: "2+", label: "Years Experience", icon: Terminal, color: "var(--cyan-500)" },
  { value: "10k+", label: "Users Scaled", icon: Server, color: "var(--teal-500)" },
  { value: "1", label: "IEEE Publication", icon: Cloud, color: "var(--amber-500)" },
];

export default function Hero() {
  const isDark = useIsDark();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Framer Motion Staggered Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Hero Section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 110,
        paddingBottom: 90,
        background: "var(--bg-0)",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* ── DYNAMIC CURSOR SPOTLIGHT GLOW ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(60, 187, 177, 0.14), rgba(168, 85, 247, 0.07), transparent 75%)`
            : `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(60, 187, 177, 0.06), rgba(255, 255, 255, 0) 80%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── BACKGROUND GEOMETRIC ACCENT OVERLAY ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: isDark
            ? "linear-gradient(180deg, rgba(60,187,177,0.08) 0%, rgba(168,85,247,0.04) 100%)"
            : "linear-gradient(180deg, rgba(60,187,177,0.06) 0%, rgba(60,187,177,0.01) 100%)",
          clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative ambient radial glows for Cyan & Warm Amber energy */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "8%",
          width: 580,
          height: 580,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.22) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(60, 187, 177, 0.16) 0%, rgba(245, 158, 11, 0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* ── LEFT COLUMN: Text Content & Actions ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Live Availability Status Badge */}
            <motion.div variants={itemVariants}>
              <div
                id="hero-status"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: isDark
                    ? "rgba(16, 185, 129, 0.16)"
                    : "#ECFDF5",
                  border: isDark
                    ? "1.5px solid rgba(16, 185, 129, 0.45)"
                    : "1px solid #A7F3D0",
                  borderRadius: "var(--r-full)",
                  padding: "6px 18px",
                  marginBottom: 26,
                  fontSize: "0.82rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isDark ? "#34D399" : "#047857",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  boxShadow: isDark
                    ? "0 0 20px rgba(16, 185, 129, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "0 2px 10px rgba(5, 150, 105, 0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--emerald-500)",
                    display: "inline-block",
                    boxShadow: "0 0 12px var(--emerald-500)",
                    animation: "pulse-dot 2s ease-in-out infinite",
                  }}
                />
                Available for Full-Time &amp; Research Roles
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "clamp(2.9rem, 5.2vw, 4.6rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                marginBottom: 22,
                color: "var(--text-primary)",
              }}
            >
              Backend &amp;{" "}
              <span
                className="gradient-text"
                style={{
                  filter: isDark
                    ? "drop-shadow(0 4px 18px rgba(60,187,177,0.55))"
                    : "drop-shadow(0 2px 8px rgba(13,148,136,0.3))",
                }}
              >
                DevOps
              </span>
              <br />
              Engineer +{" "}
              <span
                className="gradient-text-warm"
                style={{
                  filter: isDark
                    ? "drop-shadow(0 4px 18px rgba(245,158,11,0.55))"
                    : "drop-shadow(0 2px 8px rgba(217,119,6,0.3))",
                }}
              >
                AI
              </span>{" "}
              Researcher
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.08rem",
                color: "var(--text-body)",
                lineHeight: 1.85,
                marginBottom: 38,
                maxWidth: 540,
              }}
            >
              Backend-focused Software Engineer with 2+ years of experience architecting{" "}
              <span
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  background: isDark ? "rgba(60,187,177,0.22)" : "rgba(13,148,136,0.12)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  border: isDark ? "1px solid rgba(60,187,177,0.4)" : "1px solid rgba(13,148,136,0.32)",
                  boxShadow: isDark ? "0 0 14px rgba(60, 187, 177, 0.2)" : "none",
                }}
              >
                scalable production systems
              </span>
              {" "}using NestJS, Node.js, AWS, Docker, and CI/CD. Author of an{" "}
              <span
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  background: isDark ? "rgba(245,158,11,0.22)" : "rgba(217,119,6,0.12)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  border: isDark ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(217,119,6,0.32)",
                  boxShadow: isDark ? "0 0 14px rgba(245, 158, 11, 0.2)" : "none",
                }}
              >
                IEEE BECITHCON 2025
              </span>{" "}
              deep learning publication.
            </motion.p>

            {/* Buttons / CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 46 }}
            >
              <a
                href="#projects"
                id="hero-cta-projects"
                className="btn-primary"
                style={{
                  padding: "14px 28px",
                  fontSize: "0.92rem",
                  boxShadow: isDark
                    ? "0 8px 30px rgba(60, 187, 177, 0.5), 0 0 15px rgba(60, 187, 177, 0.3)"
                    : "0 6px 20px rgba(13,148,136,0.35)",
                  borderRadius: "var(--r-sm)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                View Projects <ArrowRight size={17} />
              </a>
              <a
                href="/resume.pdf"
                id="hero-cta-resume"
                className="btn-outline"
                target="_blank"
                style={{
                  padding: "13px 24px",
                  fontSize: "0.92rem",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.2)" : "var(--border-1)",
                  background: isDark ? "rgba(31, 41, 55, 0.85)" : "var(--bg-3)",
                  color: "var(--text-primary)",
                  boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.3)" : "0 2px 8px rgba(15,23,42,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "var(--r-sm)",
                }}
              >
                <Download size={16} /> Resume
              </a>
              <a
                href="https://github.com/"
                id="hero-cta-github"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "13px 20px",
                  fontSize: "0.92rem",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.2)" : "var(--border-1)",
                  background: isDark ? "rgba(31, 41, 55, 0.85)" : "var(--bg-3)",
                  color: "var(--text-primary)",
                  boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.3)" : "0 2px 8px rgba(15,23,42,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "var(--r-sm)",
                }}
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </motion.div>

            {/* Stats Cards Strip */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: isDark ? "rgba(60, 187, 177, 0.2)" : "var(--border-1)",
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                boxShadow: isDark ? "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(60, 187, 177, 0.15)" : "var(--shadow-card)",
              }}
            >
              {STATS.map(({ value, label, icon: Icon, color }, i) => (
                <div
                  key={i}
                  style={{
                    background: isDark ? "#111827" : "var(--bg-3)",
                    padding: "18px 16px",
                    textAlign: "center",
                    transition: "all var(--duration-base) cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = isDark ? "rgba(31, 41, 55, 0.95)" : "rgba(241, 245, 249, 0.95)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = isDark ? "#111827" : "var(--bg-3)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={18} style={{ color, margin: "0 auto 6px", display: "block" }} />
                  <div
                    style={{
                      fontSize: "1.58rem",
                      fontWeight: 800,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", marginTop: 2 }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: INTERACTIVE ORBITING SKILLS ENGINE (UNIFIED FOR LIGHT & NIGHT MODE) ── */}
          <motion.div
            id="hero-console-container"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OrbitingSkills />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: "linear-gradient(to bottom, transparent, var(--bg-1))",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @media (max-width: 992px) {
          #hero > .section-container > div {
            grid-template-columns: 1fr !important;
          }
          #hero-console-container {
            margin-top: 24px;
            transform: scale(0.88);
          }
        }
        @media (max-width: 640px) {
          #hero-console-container {
            transform: scale(0.70);
            margin: -35px 0;
          }
        }
      `}</style>
    </section>
  );
}
