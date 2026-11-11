"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Building2, MapPin } from "lucide-react";

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

const EXPERIENCES = [
  {
    id: "exp-1",
    role: "Backend & DevOps Engineer | Previously Junior Backend Developer",
    company: "Betopia Group",
    period: "Apr 2025 — Present",
    type: "Full-time",
    location: "Mohakhali, Dhaka, Bangladesh",
    description:
      "Designing and owning production backend services, optimizing reliability patterns, and architecting AWS & Linux VPS infrastructure.",
    achievements: [
      "Design and own production backend services using NestJS, Node.js, TypeScript, Express, SQL/NoSQL databases, and Redis, covering API architecture, business logic, third-party integrations, and scalable service design.",
      "Engineer and optimize backend systems using caching, asynchronous processing, concurrency, rate limiting, and reliability patterns to improve performance, scalability, and system efficiency.",
      "Architect and maintain AWS and Linux VPS infrastructure, taking applications from staging to production through server configuration, DNS/domain setup, SSL/TLS, Nginx, networking, monitoring, security, and deployment troubleshooting.",
      "Automate deployment workflows using Docker and GitHub Actions CI/CD, reducing deployment time by ~70%, while applying system design principles and co-leading a 15+ member cross-functional engineering team.",
    ],
    tags: ["NestJS", "Node.js", "TypeScript", "AWS", "Docker", "GitHub Actions CI/CD", "Redis", "Linux VPS", "Nginx"],
    accentColor: "#3CBBB1",
    topBarGrad: "linear-gradient(90deg, #3CBBB1, #2DD4BF)",
  },
  {
    id: "exp-2",
    role: "Software Engineer Intern",
    company: "Solutya Pvt. Ltd",
    period: "Nov 2024 — Feb 2025",
    type: "Internship",
    location: "Uttara, Dhaka, Bangladesh",
    description:
      "Developed and shipped production features across MERN and Next.js applications, contributing to backend functionality and integration.",
    achievements: [
      "Developed and shipped production features across MERN and Next.js applications, contributing to backend functionality, integration, and performance improvements while working with existing production codebases and delivery workflows.",
      "Collaborated with cross-functional engineering teams to implement RESTful APIs, optimize database operations, and ensure rapid feature delivery.",
    ],
    tags: ["Node.js", "Express", "Next.js", "MERN", "MongoDB", "REST APIs", "Git"],
    accentColor: "#2DD4BF",
    topBarGrad: "linear-gradient(90deg, #2DD4BF, #38BDF8)",
  },
  {
    id: "exp-3",
    role: "Undergraduate Software Engineer & AI Researcher",
    company: "American International University-Bangladesh (AIUB)",
    period: "Feb 2021 — Jun 2025",
    type: "B.Sc. in CSE (CGPA: 3.57)",
    location: "Dhaka, Bangladesh",
    description:
      "Graduated with B.Sc. in CSE (CGPA: 3.57 / 4.00), authoring an IEEE conference publication and engineering scalable project backends.",
    achievements: [
      "Authored peer-reviewed IEEE conference paper: 'Deep Learning Model (Inception v3) for Automated Retinopathy Detection using OCT Images' (BECITHCON 2025, DOI: 10.1109/BECITHCON69222.2025.11504241).",
      "Engineered high-concurrency systems, real-time Socket.IO applications, and database-driven platforms across C++, C#, Python, and JavaScript.",
    ],
    tags: ["Python", "Inception v3", "Deep Learning", "C++", "C#", "SQL", "IEEE Publication"],
    accentColor: "#F59E0B",
    topBarGrad: "linear-gradient(90deg, #F59E0B, #FB923C)",
  },
];

export default function Experience() {
  const isDark = useIsDark();

  return (
    <section
      id="experience"
      aria-label="Work Experience Section"
      style={{
        padding: "130px 0",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-0)",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Decorative ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: 540,
          height: 540,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(60, 187, 177, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ textAlign: "center", marginBottom: 76 }}
        >
          <div className="section-label" style={{ margin: "0 auto 18px" }}>
            Experience
          </div>
          <h2 className="section-heading">
            My <span className="gradient-text">Professional</span> Journey
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            A proven track record — from building backend microservices to architecting cloud-native infrastructure.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>
          {/* Central Timeline Spine Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 24,
              bottom: 24,
              width: "2px",
              background: isDark
                ? "linear-gradient(to bottom, #3CBBB1 0%, #2DD4BF 50%, #F59E0B 100%)"
                : "linear-gradient(to bottom, #0D9488 0%, #0F766E 50%, #D97706 100%)",
              transform: "translateX(-50%)",
              opacity: isDark ? 0.7 : 0.65,
              boxShadow: isDark ? "0 0 12px rgba(60, 187, 177, 0.5)" : "none",
            }}
          />

          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                id={exp.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 50px 1fr",
                  marginBottom: 56,
                  alignItems: "center",
                }}
              >
                {/* Left Slot */}
                <div
                  style={{
                    paddingRight: isLeft ? 20 : 0,
                    textAlign: "left",
                    display: isLeft ? "block" : "none",
                  }}
                >
                  {isLeft && <ExpCard exp={exp} isDark={isDark} />}
                </div>

                {/* Empty slot when card is on right */}
                {!isLeft && <div />}

                {/* Center Timeline Node */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: exp.accentColor,
                      border: isDark ? "4px solid #0B1120" : "4px solid #FFFFFF",
                      boxShadow: isDark
                        ? `0 0 0 3px ${exp.accentColor}50, 0 0 18px ${exp.accentColor}`
                        : `0 0 0 3px ${exp.accentColor}40, 0 0 12px ${exp.accentColor}60`,
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                {/* Right Slot */}
                <div
                  style={{
                    paddingLeft: !isLeft ? 20 : 0,
                    textAlign: "left",
                    display: !isLeft ? "block" : "none",
                  }}
                >
                  {!isLeft && <ExpCard exp={exp} isDark={isDark} />}
                </div>

                {/* Empty slot when card is on left */}
                {isLeft && <div />}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #experience > .section-container > div > div {
            grid-template-columns: 36px 1fr !important;
          }
          #experience > .section-container > div > div > div:nth-child(1),
          #experience > .section-container > div > div > div:nth-child(4) {
            display: none !important;
          }
          #experience > .section-container > div > div > div:nth-child(3) {
            display: block !important;
            padding-left: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

function ExpCard({ exp, isDark }: { exp: typeof EXPERIENCES[0]; isDark: boolean }) {
  return (
    <div
      style={{
        background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
        border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
        borderRadius: "var(--r-xl)",
        padding: "30px 32px",
        position: "relative",
        overflow: "hidden",
        boxShadow: isDark
          ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
          : "var(--shadow-card)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = exp.accentColor;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = isDark
          ? `0 16px 40px ${exp.accentColor}35, 0 4px 16px rgba(0,0,0,0.6)`
          : `0 12px 36px ${exp.accentColor}25, 0 2px 8px rgba(15,23,42,0.06)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = isDark
          ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
          : "var(--shadow-card)";
      }}
    >
      {/* Seamless Top Accent Stroke Line (Respecting Rounded Radius) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 24,
          right: 24,
          height: 3.5,
          background: exp.topBarGrad,
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* Header Info */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "var(--text-primary)",
                lineHeight: 1.25,
                letterSpacing: "-0.025em",
              }}
            >
              {exp.role}
            </h3>
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.88rem", fontWeight: 700, color: isDark && (exp.accentColor === "#3CBBB1" || exp.accentColor === "#2DD4BF") ? "#5EEAD4" : exp.accentColor }}>
                <Building2 size={15} /> {exp.company}
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.76rem",
                  color: "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                }}
              >
                <MapPin size={12} style={{ color: "var(--cyan-500)" }} />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Period & Type Badges Grouped Together */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: "0.74rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                color: isDark && (exp.accentColor === "#3CBBB1" || exp.accentColor === "#2DD4BF") ? "#5EEAD4" : exp.accentColor,
                background: isDark ? `${exp.accentColor}25` : `${exp.accentColor}12`,
                border: `1px solid ${exp.accentColor}55`,
                padding: "3px 11px",
                borderRadius: "var(--r-full)",
                whiteSpace: "nowrap",
                boxShadow: isDark ? `0 0 12px ${exp.accentColor}30` : "none",
              }}
            >
              <Calendar size={11} /> {exp.period}
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                fontFamily: "'JetBrains Mono', monospace",
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#F1F5F9",
                color: "var(--text-muted)",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                fontWeight: 700,
                padding: "2px 9px",
                borderRadius: "var(--r-full)",
              }}
            >
              {exp.type}
            </span>
          </div>
        </div>
      </div>

      <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.8, marginBottom: 20 }}>
        {exp.description}
      </p>

      {/* Bullet Point Achievements */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {exp.achievements.map((item, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <CheckCircle2 size={15} style={{ color: isDark && (exp.accentColor === "#3CBBB1" || exp.accentColor === "#2DD4BF") ? "#5EEAD4" : exp.accentColor, marginTop: 3, flexShrink: 0 }} />
            <span style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.65 }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Sleek Glass Tech Tags Cluster */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {exp.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.74rem",
              fontFamily: "'JetBrains Mono', monospace",
              color: isDark ? "#5EEAD4" : "#0F766E",
              background: isDark ? "rgba(60, 187, 177, 0.18)" : "rgba(13, 148, 136, 0.09)",
              border: isDark ? "1px solid rgba(60, 187, 177, 0.4)" : "1px solid rgba(13, 148, 136, 0.28)",
              padding: "3px 10px",
              borderRadius: "var(--r-md)",
              fontWeight: 700,
              boxShadow: isDark ? "0 0 10px rgba(60, 187, 177, 0.15)" : "none",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
