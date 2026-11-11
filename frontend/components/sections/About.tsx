"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Code2,
  ArrowRight,
  Server,
  Cpu,
  CheckCircle2,
  Layers,
  Workflow,
  Zap,
  Activity,
} from "lucide-react";

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

const PRINCIPLES = [
  {
    title: "Backend & System Design",
    subtitle: "NestJS, Node.js, Express & Microservices",
    icon: Zap,
    color: "var(--cyan-500)",
  },
  {
    title: "Cloud & Infrastructure",
    subtitle: "AWS (EC2, S3, RDS, CDN) & Linux VPS",
    icon: Workflow,
    color: "var(--teal-500)",
  },
  {
    title: "CI/CD & Containers",
    subtitle: "Docker, GitHub Actions & Nginx",
    icon: Layers,
    color: "var(--indigo-400)",
  },
  {
    title: "Deep Learning Research",
    subtitle: "Inception v3 & OCT Medical Imaging",
    icon: Activity,
    color: "var(--amber-500)",
  },
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    label: "Backend & System Design",
    desc: "NestJS · Node.js · Express · Redis · BullMQ · PostgreSQL · MongoDB",
    color: "var(--cyan-500)",
    bgLight: "rgba(13,148,136,0.08)",
    bgDark: "rgba(60,187,177,0.12)",
    borderLight: "rgba(13,148,136,0.32)",
    borderDark: "rgba(60,187,177,0.35)",
  },
  {
    icon: Server,
    label: "DevOps & Cloud Infrastructure",
    desc: "AWS (EC2, S3, ELB, ASG, RDS, CDN) · Linux VPS · Docker · CI/CD",
    color: "var(--teal-500)",
    bgLight: "rgba(15,118,110,0.08)",
    bgDark: "rgba(20,184,166,0.12)",
    borderLight: "rgba(15,118,110,0.32)",
    borderDark: "rgba(20,184,166,0.35)",
  },
  {
    icon: Cpu,
    label: "AI & Retinopathy Research",
    desc: "Inception v3 OCT Retinopathy Detection · IEEE BECITHCON 2025 Paper",
    color: "var(--amber-500)",
    bgLight: "rgba(217,119,6,0.08)",
    bgDark: "rgba(245,158,11,0.12)",
    borderLight: "rgba(217,119,6,0.32)",
    borderDark: "rgba(245,158,11,0.35)",
  },
];

export default function About() {
  const isDark = useIsDark();

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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="about"
      aria-label="About Me Section"
      style={{
        padding: "130px 0",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-1)",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Decorative ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* ── LEFT: High-Tech Profile & Engineering Focus Matrix ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ position: "relative" }}
          >
            <div
              id="about-card"
              style={{
                borderRadius: "var(--r-2xl)",
                padding: "36px",
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "var(--bg-3)",
                border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                position: "relative",
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Cyan top gradient accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 36,
                  right: 36,
                  height: 3.5,
                  background: isDark
                    ? "linear-gradient(90deg, #3CBBB1, #A855F7, #F59E0B)"
                    : "var(--grad-primary)",
                  borderRadius: "0 0 4px 4px",
                }}
              />

              {/* Avatar & Profile Banner Header */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9.5",
                  borderRadius: "var(--r-xl)",
                  background: isDark
                    ? "linear-gradient(135deg, rgba(60,187,177,0.22) 0%, rgba(20,184,166,0.12) 50%, rgba(15,23,42,0.8) 100%)"
                    : "linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(15,118,110,0.06) 50%, rgba(217,119,6,0.04) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 26,
                  position: "relative",
                  overflow: "hidden",
                  border: isDark ? "1px solid rgba(60, 187, 177, 0.4)" : "1px solid rgba(13, 148, 136, 0.28)",
                  boxShadow: isDark
                    ? "inset 0 0 35px rgba(60, 187, 177, 0.18)"
                    : "inset 0 0 30px rgba(13, 148, 136, 0.08)",
                }}
              >
                {/* Brand Initial Shield */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: "20px",
                    background: "var(--grad-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.9rem",
                    color: "#ffffff",
                    boxShadow: isDark
                      ? "0 0 25px rgba(60, 187, 177, 0.5), 0 8px 24px rgba(0, 0, 0, 0.4)"
                      : "0 8px 24px rgba(13, 148, 136, 0.35)",
                    marginBottom: 10,
                  }}
                >
                  JI
                </div>

                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.18rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Jahidul Islam Shikdar
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: isDark ? "#5EEAD4" : "var(--cyan-500)",
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  Backend &amp; DevOps Engineer
                </div>

                {/* Location Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: isDark ? "rgba(15, 23, 42, 0.85)" : "#FFFFFF",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.18)" : "1px solid var(--border-1)",
                    borderRadius: "var(--r-full)",
                    padding: "4px 14px",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    color: "var(--text-body)",
                    boxShadow: isDark ? "0 4px 14px rgba(0, 0, 0, 0.3)" : "var(--shadow-sm)",
                  }}
                >
                  <MapPin size={12} style={{ color: "var(--cyan-500)" }} />
                  Dhaka, Bangladesh 🇧🇩
                </div>

                {/* Status Verified Pill */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: isDark ? "rgba(16, 185, 129, 0.16)" : "#ECFDF5",
                    border: isDark ? "1.5px solid rgba(16, 185, 129, 0.45)" : "1px solid #A7F3D0",
                    borderRadius: "var(--r-full)",
                    padding: "3px 10px",
                    fontSize: "0.68rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    color: isDark ? "#34D399" : "#047857",
                    boxShadow: isDark ? "0 0 14px rgba(16, 185, 129, 0.3)" : "none",
                  }}
                >
                  <CheckCircle2 size={11} /> Verified
                </div>
              </div>

              {/* Engineering Focus Matrix */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                {PRINCIPLES.map(({ title, subtitle, icon: Icon, color }) => (
                  <div
                    key={title}
                    style={{
                      background: isDark ? "rgba(31, 41, 55, 0.85)" : "#F8FAFC",
                      border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                      borderRadius: "var(--r-md)",
                      padding: "13px 14px",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = color;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = isDark
                        ? `0 8px 24px ${color}35`
                        : `0 6px 18px ${color}22`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
                      <Icon size={14} style={{ color: isDark ? color : color }} />
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.84rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {title}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--text-muted)",
                        lineHeight: 1.35,
                      }}
                    >
                      {subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Bio Narrative & Core Pillars ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="section-label">
              About Me
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="section-heading">
              Building Systems That{" "}
              <span className="gradient-text">Scale</span> &amp; Perform
            </motion.h2>

            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              <p style={{ color: "var(--text-body)", lineHeight: 1.85, fontSize: "1.02rem" }}>
                I&apos;m a <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Backend-focused Software Engineer</strong> with 2+ years of experience building and scaling production systems with NestJS and Node.js. Currently at <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Betopia Group</strong>, I design and own production backend services, manage AWS &amp; Linux infrastructure, and automate CI/CD pipelines.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "0.98rem" }}>
                I hold a <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>B.Sc. in Computer Science &amp; Engineering</strong> from <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>AIUB (CGPA: 3.57 / 4.00)</strong>, and authored a peer-reviewed research paper on <em style={{ color: "var(--cyan-500)", fontWeight: 600 }}>Inception v3 Automated Retinopathy Detection using OCT Images</em> published in <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>IEEE BECITHCON 2025</strong>.
              </p>
            </motion.div>

            {/* Core Highlight Cards */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 38 }}>
              {HIGHLIGHTS.map(({ icon: Icon, label, desc, color, bgLight, bgDark, borderLight, borderDark }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    background: isDark ? bgDark : bgLight,
                    border: `1.5px solid ${isDark ? borderDark : borderLight}`,
                    borderRadius: "var(--r-lg)",
                    padding: "16px 20px",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(6px)";
                    el.style.boxShadow = `0 6px 20px ${color}25`;
                    el.style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(0)";
                    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.02)";
                    el.style.borderColor = isDark ? borderDark : borderLight;
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "var(--r-md)",
                      background: "var(--bg-3)",
                      border: `1px solid ${isDark ? borderDark : borderLight}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--text-primary)",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                id="about-cta"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  padding: "13px 26px",
                  fontSize: "0.9rem",
                  boxShadow: "0 4px 16px rgba(60, 187, 177, 0.3)",
                  borderRadius: "var(--r-sm)",
                }}
              >
                Let&apos;s Talk <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > .section-container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
