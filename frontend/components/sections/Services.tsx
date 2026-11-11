"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Cloud, GitBranch, Database, Cpu, Code2, CheckCircle2, ArrowRight } from "lucide-react";

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

const SERVICES = [
  {
    id: "service-backend",
    icon: Server,
    title: "Backend Architecture & APIs",
    desc: "Architecting scalable REST & GraphQL microservices, JWT authentication, Redis caching, and BullMQ background queues.",
    deliverables: [
      "RESTful API design with OpenAPI / Swagger docs",
      "BullMQ async background workers & Redis pub/sub",
      "PostgreSQL database indexing & query tuning",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ"],
    accentColor: "#3CBBB1",
    topBarGrad: "linear-gradient(90deg, #3CBBB1, #2DD4BF)",
    iconBg: "rgba(60, 187, 177, 0.16)",
    iconBorder: "rgba(60, 187, 177, 0.35)",
  },
  {
    id: "service-devops",
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    desc: "AWS cloud infrastructure management, Docker containerization, Terraform IaC, and zero-downtime production deployments.",
    deliverables: [
      "AWS ECS, EC2, S3, and Lambda cloud setup",
      "Docker & Docker Compose container orchestration",
      "Infrastructure as Code using Terraform scripts",
    ],
    tags: ["AWS ECS", "Docker", "Terraform", "Nginx", "Linux"],
    accentColor: "#2DD4BF",
    topBarGrad: "linear-gradient(90deg, #2DD4BF, #38BDF8)",
    iconBg: "rgba(45, 212, 191, 0.16)",
    iconBorder: "rgba(45, 212, 191, 0.35)",
  },
  {
    id: "service-cicd",
    icon: GitBranch,
    title: "CI/CD Pipeline Automation",
    desc: "End-to-end GitHub Actions automated testing, multi-stage Docker builds, ECR registry push, and automated deployment pipelines.",
    deliverables: [
      "Automated unit & integration test suites",
      "Docker image security scanning & ECR push",
      "Zero-downtime rolling ECS deployments",
    ],
    tags: ["GitHub Actions", "Docker", "AWS ECR", "CI/CD"],
    accentColor: "#818CF8",
    topBarGrad: "linear-gradient(90deg, #818CF8, #3CBBB1)",
    iconBg: "rgba(129, 140, 248, 0.16)",
    iconBorder: "rgba(129, 140, 248, 0.35)",
  },
  {
    id: "service-db",
    icon: Database,
    title: "Database Engineering & Caching",
    desc: "Relational database schema modeling, connection pooling, Redis caching strategies, and data migration management.",
    deliverables: [
      "PostgreSQL schema modeling & Prisma ORM setup",
      "Redis memory caching for sub-50ms API responses",
      "Database replication & automated backup strategies",
    ],
    tags: ["PostgreSQL", "Redis", "Prisma", "MongoDB"],
    accentColor: "#F59E0B",
    topBarGrad: "linear-gradient(90deg, #F59E0B, #FB923C)",
    iconBg: "rgba(245, 158, 11, 0.16)",
    iconBorder: "rgba(245, 158, 11, 0.35)",
  },
  {
    id: "service-ai",
    icon: Cpu,
    title: "AI & ML Model Prototyping",
    desc: "Deep learning neural network modeling, dataset preprocessing, training experiments, and production model integration.",
    deliverables: [
      "PyTorch & TensorFlow model training pipelines",
      "Computer vision & image classification prototypes",
      "Model inference optimization for production API endpoints",
    ],
    tags: ["Python", "PyTorch", "TensorFlow", "Deep Learning"],
    accentColor: "#34D399",
    topBarGrad: "linear-gradient(90deg, #34D399, #2DD4BF)",
    iconBg: "rgba(52, 211, 153, 0.16)",
    iconBorder: "rgba(52, 211, 153, 0.35)",
  },
  {
    id: "service-consult",
    icon: Code2,
    title: "System Architecture Consulting",
    desc: "Technical architecture reviews, tech stack selection, code quality audits, performance bottleneck analysis, and scaling roadmaps.",
    deliverables: [
      "Microservice decoupling & architectural reviews",
      "Security hardening & auth vulnerability audits",
      "Performance optimization & latency reduction strategies",
    ],
    tags: ["System Architecture", "Code Audit", "Scaling Strategy"],
    accentColor: "#38BDF8",
    topBarGrad: "linear-gradient(90deg, #38BDF8, #818CF8)",
    iconBg: "rgba(56, 189, 248, 0.16)",
    iconBorder: "rgba(56, 189, 248, 0.35)",
  },
];

export default function Services() {
  const isDark = useIsDark();

  return (
    <section
      id="services"
      aria-label="Services Section"
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
          right: "-5%",
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
            Services
          </div>
          <h2 className="section-heading">
            Engineering &amp; <span className="gradient-text">Cloud Solutions</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            End-to-end technical capabilities from backend architecture to automated cloud deployment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          id="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {SERVICES.map((s, index) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                borderRadius: "var(--r-2xl)",
                padding: "34px 32px",
                position: "relative",
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = isDark
                  ? `0 18px 45px ${s.accentColor}35, 0 4px 16px rgba(0,0,0,0.6)`
                  : `0 16px 36px ${s.accentColor}25, 0 2px 8px rgba(15,23,42,0.06)`;
                el.style.borderColor = s.accentColor;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = isDark
                  ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)";
                el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
              }}
            >
              {/* Top accent line inset respecting rounded corners */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 24,
                  right: 24,
                  height: 3.5,
                  background: s.topBarGrad,
                  borderRadius: "0 0 4px 4px",
                }}
              />

              <div>
                {/* Icon Box */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "var(--r-md)",
                    background: isDark ? `${s.accentColor}25` : s.iconBg,
                    border: `1.5px solid ${s.accentColor}60`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                    color: isDark ? (s.accentColor === "#3CBBB1" || s.accentColor === "#2DD4BF" ? "#5EEAD4" : s.accentColor) : s.accentColor === "#3CBBB1" || s.accentColor === "#2DD4BF" || s.accentColor === "#34D399" ? "#0D9488" : s.accentColor === "#F59E0B" ? "#D97706" : s.accentColor,
                    boxShadow: isDark ? `0 0 18px ${s.accentColor}40` : `0 4px 14px ${s.accentColor}25`,
                  }}
                >
                  <s.icon size={24} />
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.18rem",
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-body)",
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}
                >
                  {s.desc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
                  {s.deliverables.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <CheckCircle2 size={14} style={{ color: isDark ? "#5EEAD4" : "var(--cyan-500)", marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: "0.83rem", color: "var(--text-body)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Footer */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, paddingTop: 16, borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--border-1)" }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      background: isDark
                        ? "rgba(60, 187, 177, 0.18)"
                        : "rgba(13, 148, 136, 0.09)",
                      border: isDark ? "1px solid rgba(60, 187, 177, 0.4)" : "1px solid rgba(13, 148, 136, 0.28)",
                      color: isDark ? "#5EEAD4" : "#0F766E",
                      padding: "3px 10px",
                      borderRadius: "var(--r-md)",
                      boxShadow: isDark ? "0 0 10px rgba(60, 187, 177, 0.15)" : "none",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            marginTop: 52,
            background: isDark
              ? "linear-gradient(135deg, rgba(60, 187, 177, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)"
              : "linear-gradient(135deg, rgba(13, 148, 136, 0.14) 0%, rgba(241, 245, 249, 0.95) 100%)",
            border: isDark ? "1px solid rgba(60, 187, 177, 0.4)" : "1px solid rgba(13, 148, 136, 0.35)",
            borderRadius: "var(--r-2xl)",
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            boxShadow: isDark ? "0 10px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(60, 187, 177, 0.15)" : "var(--shadow-md)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Need a custom backend or cloud infrastructure setup?
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--text-muted)", marginTop: 4, fontWeight: 600 }}>
              Available for consulting engagements, architecture reviews, and full-stack backend contracts.
            </div>
          </div>
          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: "11px 24px",
              fontSize: "0.86rem",
              borderRadius: "var(--r-md)",
              boxShadow: isDark ? "0 6px 20px rgba(60, 187, 177, 0.4)" : "0 4px 16px rgba(13, 148, 136, 0.35)",
            }}
          >
            Get In Touch <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
