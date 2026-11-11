"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Server, Terminal, Code2, CheckCircle2, Sparkles } from "lucide-react";

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

const SKILL_CATEGORIES = [
  {
    id: "skills-backend",
    label: "Backend & System Design",
    icon: Code2,
    color: "#3CBBB1",
    gradStart: "#3CBBB1",
    gradEnd: "#2DD4BF",
    skills: [
      { name: "NestJS & Node.js", level: 96, detail: "Scalable Architecture, Modules & DI" },
      { name: "Express.js & ASP.NET", level: 90, detail: "REST APIs & Middleware Pipelines" },
      { name: "BullMQ & Redis Queues", level: 92, detail: "Async Workers, Pub/Sub & Caching" },
      { name: "Socket.IO & Real-time", level: 90, detail: "WebSockets, Rooms & Lifecycle Jobs" },
      { name: "REST APIs & GraphQL", level: 94, detail: "Contract Design, Schemas & Auth" },
      { name: "System Design & Concurrency", level: 88, detail: "Rate Limiting & Reliability Patterns" },
    ],
  },
  {
    id: "skills-cloud",
    label: "Cloud & DevOps",
    icon: Server,
    color: "#2DD4BF",
    gradStart: "#2DD4BF",
    gradEnd: "#38BDF8",
    skills: [
      { name: "AWS (EC2, S3, ELB, ASG, RDS, CDN)", level: 92, detail: "DynamoDB, Route 53, IAM & VPC" },
      { name: "Docker & Containerization", level: 94, detail: "Multi-stage Builds & Compose" },
      { name: "CI/CD (GitHub Actions & Jenkins)", level: 92, detail: "Automated Deployments & Testing" },
      { name: "Linux & Shell Scripting", level: 90, detail: "VPS Config, DNS, SSL & Networking" },
      { name: "Nginx & Reverse Proxy", level: 88, detail: "Load Balancing, Security & Certs" },
      { name: "Prometheus & Grafana", level: 82, detail: "Metrics, Health Alerts & Monitoring" },
    ],
  },
  {
    id: "skills-db",
    label: "Databases & Caching",
    icon: Terminal,
    color: "#818CF8",
    gradStart: "#818CF8",
    gradEnd: "#3CBBB1",
    skills: [
      { name: "MongoDB", level: 92, detail: "Document Schema & Geospatial Queries" },
      { name: "PostgreSQL & MySQL", level: 90, detail: "Relational Modeling & Index Tuning" },
      { name: "Redis", level: 94, detail: "In-Memory Caching & Aggregation" },
      { name: "Prisma ORM", level: 88, detail: "Schema Migrations & Type Safety" },
      { name: "Supabase & NeonDB", level: 86, detail: "Serverless SQL & Cloud DBs" },
      { name: "Firebase", level: 84, detail: "Firestore & Cloud Messaging" },
    ],
  },
  {
    id: "skills-languages",
    label: "Languages & Research",
    icon: Cpu,
    color: "#F59E0B",
    gradStart: "#F59E0B",
    gradEnd: "#FB923C",
    skills: [
      { name: "TypeScript & JavaScript", level: 96, detail: "Strict Typing, ESNext & Node Engine" },
      { name: "Python", level: 90, detail: "Data Science, PyTorch & OpenCV" },
      { name: "C++ & C#", level: 86, detail: "OOP, Data Structures & Algorithms" },
      { name: "Deep Learning (Inception v3)", level: 88, detail: "OCT Retinopathy Detection Research" },
      { name: "Git & GitHub", level: 95, detail: "Version Control & Branching Strategy" },
    ],
  },
];

const TECH_CLOUD = [
  { name: "NestJS", color: "#E0234E" },
  { name: "Node.js", color: "#3CBBB1" },
  { name: "TypeScript", color: "#38BDF8" },
  { name: "AWS EC2/S3", color: "#FF9900" },
  { name: "Docker", color: "#0DB7ED" },
  { name: "GitHub Actions", color: "#2DD4BF" },
  { name: "Redis", color: "#EF4444" },
  { name: "BullMQ", color: "#818CF8" },
  { name: "MongoDB", color: "#10B981" },
  { name: "PostgreSQL", color: "#38BDF8" },
  { name: "Socket.IO", color: "#3CBBB1" },
  { name: "Nginx", color: "#2DD4BF" },
  { name: "Linux VPS", color: "#F59E0B" },
  { name: "Inception v3", color: "#F59E0B" },
  { name: "Python", color: "#F59E0B" },
  { name: "C++", color: "#38BDF8" },
  { name: "C#", color: "#818CF8" },
  { name: "Prometheus", color: "#E6522C" },
  { name: "Grafana", color: "#F46800" },
  { name: "Prisma", color: "#818CF8" },
];

export default function Skills() {
  const isDark = useIsDark();
  const [active, setActive] = useState(0);
  const cat = SKILL_CATEGORIES[active];

  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      style={{
        padding: "130px 0",
        background: "var(--bg-1)",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-5%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.12) 0%, transparent 70%)"
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
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div className="section-label" style={{ margin: "0 auto 18px" }}>
            Skills
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Production-grade engineering &amp; research capabilities refined through real-world systems.
          </p>
        </motion.div>

        {/* Category Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {SKILL_CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            const isActive = i === active;

            return (
              <button
                key={c.id}
                id={c.id}
                onClick={() => setActive(i)}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 24px",
                  borderRadius: "var(--r-full)",
                  border: "none",
                  background: "transparent",
                  color: isActive ? (isDark && (c.color === "#3CBBB1" || c.color === "#2DD4BF") ? "#5EEAD4" : c.color) : "var(--text-body)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: isActive ? 700 : 600,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "color 0.25s ease",
                  zIndex: 1,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-skill-cat"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--r-full)",
                      background: isDark ? "rgba(17, 24, 39, 0.92)" : "#FFFFFF",
                      border: `1.5px solid ${c.color}`,
                      boxShadow: isDark ? `0 0 20px ${c.color}50, 0 4px 16px rgba(0,0,0,0.5)` : `0 4px 16px ${c.color}25`,
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={16} />
                {c.label}
              </button>
            );
          })}
        </motion.div>

        {/* Two-Column Grid: Progress Bars + Full Tech Cloud */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start" }}>
          {/* Left Column: Skill Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
              border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
              borderRadius: "var(--r-2xl)",
              padding: "34px 36px",
              boxShadow: isDark
                ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                : "var(--shadow-card)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent stroke line inset */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 24,
                right: 24,
                height: 3.5,
                background: `linear-gradient(90deg, ${cat.gradStart}, ${cat.gradEnd})`,
                borderRadius: "0 0 4px 4px",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-md)",
                  background: isDark ? `${cat.color}25` : `${cat.color}18`,
                  border: `1px solid ${cat.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isDark && (cat.color === "#3CBBB1" || cat.color === "#2DD4BF") ? "#5EEAD4" : cat.color,
                  boxShadow: isDark ? `0 0 14px ${cat.color}30` : "none",
                }}
              >
                <cat.icon size={19} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.18rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {cat.label} Proficiency
                </h3>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                  Validated via Production &amp; Research Benchmarks
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: 22 }}
              >
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                      <div>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span style={{ fontSize: "0.73rem", color: "var(--text-muted)", marginLeft: 8, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                          ({skill.detail})
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: isDark && (cat.color === "#3CBBB1" || cat.color === "#2DD4BF") ? "#5EEAD4" : cat.color,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 700,
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar Track */}
                    <div
                      style={{
                        height: 8,
                        background: isDark ? "rgba(15, 23, 42, 0.9)" : "#F1F5F9",
                        borderRadius: "var(--r-full)",
                        overflow: "hidden",
                        border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${cat.gradStart}, ${cat.gradEnd})`,
                          borderRadius: "var(--r-full)",
                          boxShadow: isDark ? `0 0 16px ${cat.color}80` : `0 0 12px ${cat.color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Full Tech Stack Cloud & Legend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Tech Cloud */}
            <div
              style={{
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                borderRadius: "var(--r-2xl)",
                padding: "32px 34px",
                boxShadow: isDark
                  ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <Sparkles size={18} style={{ color: "var(--cyan-500)" }} />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Full Tech Stack Matrix
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TECH_CLOUD.map((tech) => (
                  <span
                    key={tech.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      borderRadius: "var(--r-full)",
                      background: isDark
                        ? "rgba(60, 187, 177, 0.18)"
                        : "linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(13,148,136,0.04) 100%)",
                      border: isDark ? "1px solid rgba(60, 187, 177, 0.4)" : "1px solid rgba(13, 148, 136, 0.32)",
                      fontSize: "0.78rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      color: isDark ? (tech.color === "#3CBBB1" || tech.color === "#2DD4BF" ? "#5EEAD4" : tech.color) : tech.color === "#3CBBB1" || tech.color === "#2DD4BF" ? "#0F766E" : tech.color === "#F59E0B" ? "#D97706" : tech.color,
                      boxShadow: isDark ? "0 0 10px rgba(60, 187, 177, 0.15)" : "none",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = tech.color;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = `0 4px 14px ${tech.color}35`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = isDark ? "rgba(60, 187, 177, 0.4)" : "rgba(13, 148, 136, 0.32)";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = isDark ? "0 0 10px rgba(60, 187, 177, 0.15)" : "none";
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: isDark ? (tech.color === "#3CBBB1" || tech.color === "#2DD4BF" ? "#5EEAD4" : tech.color) : tech.color === "#3CBBB1" || tech.color === "#2DD4BF" ? "#0F766E" : tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Proficiency Level Legend */}
            <div
              style={{
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                borderRadius: "var(--r-xl)",
                padding: "22px 28px",
                boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.4)" : "var(--shadow-sm)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              <div style={{ fontSize: "0.74rem", fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)", marginBottom: 12, fontWeight: 700, letterSpacing: "0.05em" }}>
                PROFICIENCY BENCHMARK SCALE
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  { range: "90–100%", label: "Expert / Core", color: isDark ? "#3CBBB1" : "#0D9488" },
                  { range: "80–89%",  label: "Advanced", color: isDark ? "#2DD4BF" : "#0F766E" },
                  { range: "70–79%",  label: "Proficient", color: isDark ? "#818CF8" : "#4F46E5" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span style={{ fontSize: "0.74rem", fontFamily: "'JetBrains Mono', monospace", color: item.color, fontWeight: 700 }}>
                      {item.range}
                    </span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills > .section-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
