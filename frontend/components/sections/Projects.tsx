"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Terminal, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

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

const CATEGORIES = ["All Projects", "Backend & APIs", "DevOps & Cloud", "AI Research"];

const PROJECTS = [
  {
    id: "proj-1",
    title: "Beatboks Music Platform",
    category: "Backend & APIs",
    description:
      "Scalable NestJS backend for a Spotify-like music platform serving 10,000+ users, implementing music catalog, playlists, search, library, subscriptions, and user workflows.",
    achievements: [
      "Designed a Redis/BullMQ asynchronous pipeline that reduced bulk upload processing time by ~85% (from 45 min to 7 min) through concurrent background processing.",
      "Designed and deployed scalable AWS infrastructure using EC2, S3, ELB, ASG, and CDN with Docker and GitHub Actions CI/CD; Redis-based aggregation reduced database writes by ~90%.",
    ],
    tags: ["NestJS", "MongoDB", "Redis", "BullMQ", "AWS (EC2, S3, ELB, ASG)", "Docker", "CI/CD"],
    metric: "10k+ Users · ~85% Faster",
    stars: 142,
    size: "large",
    accentColor: "#3CBBB1",
    topBarGrad: "linear-gradient(90deg, #3CBBB1, #2DD4BF)",
    archSnippet: "NestJS API -> Redis Aggregation -> BullMQ Queue -> AWS (EC2/S3/ELB/ASG/CDN)",
  },
  {
    id: "proj-2",
    title: "Hoplift – Ride Sharing Platform",
    category: "Backend & APIs",
    description:
      "High-concurrency ride-sharing backend platform powering Flutter mobile app with geospatial matching, booking, seat management, ride lifecycle, ratings, and real-time Socket.IO chat.",
    achievements: [
      "Engineered ride-matching, geospatial search, booking, seat management, ride lifecycle, ratings, notifications, and real-time chat features.",
      "Implemented automated scheduled background jobs for ride and chat lifecycle state management with zero-lag WebSocket delivery.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Socket.IO", "Geospatial Queries", "Scheduled Jobs"],
    metric: "Real-time Matching",
    stars: 88,
    size: "small",
    accentColor: "#2DD4BF",
    topBarGrad: "linear-gradient(90deg, #2DD4BF, #38BDF8)",
  },
  {
    id: "proj-3",
    title: "Returns Logistics Platform",
    category: "DevOps & Cloud",
    description:
      "Multi-role (user/driver/admin) logistics platform with subscription-based Stripe payments, Google Maps route optimization, and full-stack production hosting on Linux VPS.",
    achievements: [
      "Built multi-role architecture with automated Stripe subscription billing and payout management.",
      "Configured and deployed full-stack system onto Linux VPS with Google Maps route optimization, Nginx reverse proxy, SSL/TLS, and DNS.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Stripe", "Google Maps API", "Linux VPS", "Nginx"],
    metric: "Multi-Role · Linux VPS",
    stars: 76,
    size: "small",
    accentColor: "#818CF8",
    topBarGrad: "linear-gradient(90deg, #818CF8, #3CBBB1)",
  },
  {
    id: "proj-4",
    title: "Deep Learning Retinopathy Detection (Inception v3)",
    category: "AI Research",
    description:
      "Deep learning computer vision model (Inception v3) for automated retinopathy detection using Optical Coherence Tomography (OCT) retinal images, published in IEEE BECITHCON 2025.",
    achievements: [
      "Trained and fine-tuned Inception v3 convolutional neural network for automated detection of retinopathy from OCT retinal scans.",
      "Peer-reviewed and published in IEEE Conference Proceedings (BECITHCON 2025, DOI: 10.1109/BECITHCON69222.2025.11504241).",
    ],
    tags: ["Python", "Inception v3", "Deep Learning", "OCT Images", "Computer Vision", "IEEE BECITHCON"],
    metric: "IEEE BECITHCON 2025 Paper",
    stars: 110,
    size: "large",
    accentColor: "#F59E0B",
    topBarGrad: "linear-gradient(90deg, #F59E0B, #FB923C)",
    archSnippet: "OCT Retinal Images -> Preprocessing Pipeline -> Inception v3 Feature Extractor -> Softmax Classifier",
  },
];

export default function Projects() {
  const isDark = useIsDark();
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All Projects" || p.category === activeCategory
  );

  return (
    <section
      id="projects"
      aria-label="Projects Section"
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
          left: "5%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(60, 187, 177, 0.07) 0%, transparent 70%)",
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
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 44,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div className="section-label">Projects</div>
            <h2 className="section-heading">
              Featured <span className="gradient-text">Engineering</span> Work
            </h2>
            <p className="section-subheading">
              Production-ready backend platforms, DevOps pipelines, and AI research models.
            </p>
          </div>
          <a
            href="https://github.com/"
            id="projects-view-all"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "11px 22px",
              fontSize: "0.86rem",
              borderColor: isDark ? "rgba(255,255,255,0.16)" : "var(--border-2)",
              background: "var(--bg-3)",
              borderRadius: "var(--r-sm)",
            }}
          >
            <GithubIcon size={16} /> View GitHub Repos
          </a>
        </motion.div>

        {/* Interactive Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 44,
            background: isDark ? "rgba(17, 24, 39, 0.85)" : "rgba(241, 245, 249, 0.92)",
            padding: "6px 8px",
            borderRadius: "var(--r-full)",
            border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
            maxWidth: "fit-content",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: isDark ? "0 4px 20px rgba(0, 0, 0, 0.4)" : "none",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  position: "relative",
                  padding: "8px 20px",
                  borderRadius: "var(--r-full)",
                  fontSize: "0.85rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive
                    ? isDark
                      ? "#5EEAD4"
                      : "var(--cyan-500)"
                    : "var(--text-body)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  zIndex: 1,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-project-cat"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--r-full)",
                      background: isDark
                        ? "linear-gradient(135deg, rgba(60,187,177,0.3) 0%, rgba(60,187,177,0.15) 100%)"
                        : "linear-gradient(135deg, rgba(13,148,136,0.16) 0%, rgba(13,148,136,0.06) 100%)",
                      border: isDark
                        ? "1px solid rgba(60, 187, 177, 0.55)"
                        : "1px solid rgba(13, 148, 136, 0.35)",
                      boxShadow: isDark
                        ? "0 0 18px rgba(60, 187, 177, 0.35)"
                        : "0 2px 10px rgba(13, 148, 136, 0.15)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Bento Grid with AnimatePresence */}
        <motion.div
          layout
          id="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "minmax(320px, auto)",
            gap: 22,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isLarge = project.size === "large";

              return (
                <motion.div
                  layout
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  style={{
                    gridColumn: isLarge ? "span 2" : "span 1",
                    background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                    borderRadius: "var(--r-2xl)",
                    padding: "32px 34px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: isDark
                      ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                      : "var(--shadow-card)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = isDark
                      ? `0 18px 45px ${project.accentColor}35, 0 4px 16px rgba(0,0,0,0.6)`
                      : `0 16px 40px ${project.accentColor}25, 0 4px 12px rgba(15,23,42,0.06)`;
                    el.style.borderColor = project.accentColor;
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
                      background: project.topBarGrad,
                      borderRadius: "0 0 4px 4px",
                    }}
                  />

                  {/* Card Top Row: Category + Metric + Title + Actions */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontFamily: "'JetBrains Mono', monospace",
                              color: isDark && (project.accentColor === "#3CBBB1" || project.accentColor === "#2DD4BF") ? "#5EEAD4" : project.accentColor,
                              border: `1px solid ${project.accentColor}55`,
                              background: isDark ? `${project.accentColor}25` : `${project.accentColor}12`,
                              fontWeight: 700,
                              padding: "3px 11px",
                              borderRadius: "var(--r-full)",
                              boxShadow: isDark ? `0 0 10px ${project.accentColor}30` : "none",
                            }}
                          >
                            {project.category}
                          </span>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              fontSize: "0.7rem",
                              fontFamily: "'JetBrains Mono', monospace",
                              color: isDark ? "#38BDF8" : "var(--cyan-500)",
                              fontWeight: 700,
                              background: isDark ? "rgba(56, 189, 248, 0.16)" : "rgba(13,148,136,0.12)",
                              border: isDark ? "1px solid rgba(56, 189, 248, 0.35)" : "none",
                              padding: "2px 9px",
                              borderRadius: "var(--r-full)",
                              boxShadow: isDark ? "0 0 10px rgba(56, 189, 248, 0.2)" : "none",
                            }}
                          >
                            <Activity size={11} /> {project.metric}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: isLarge ? "1.36rem" : "1.18rem",
                            color: "var(--text-primary)",
                            lineHeight: 1.25,
                            letterSpacing: "-0.025em",
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Action Icon Buttons */}
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "var(--r-sm)",
                            background: isDark ? "rgba(15, 23, 42, 0.85)" : "#F1F5F9",
                            border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-primary)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = project.accentColor;
                            el.style.borderColor = project.accentColor;
                            el.style.boxShadow = `0 0 12px ${project.accentColor}40`;
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = "var(--text-primary)";
                            el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
                            el.style.boxShadow = "none";
                          }}
                        >
                          <GithubIcon size={16} />
                        </a>
                        <a
                          href="#contact"
                          title="Live Demo"
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "var(--r-sm)",
                            background: isDark ? "rgba(15, 23, 42, 0.85)" : "#F1F5F9",
                            border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-primary)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = project.accentColor;
                            el.style.borderColor = project.accentColor;
                            el.style.boxShadow = `0 0 12px ${project.accentColor}40`;
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = "var(--text-primary)";
                            el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
                            el.style.boxShadow = "none";
                          }}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.8, margin: "14px 0" }}>
                      {project.description}
                    </p>

                    {/* Feature Snippet for Large Bento Cards */}
                    {isLarge && project.archSnippet && (
                      <div
                        style={{
                          background: isDark ? "rgba(11, 17, 32, 0.95)" : "#0F172A",
                          color: "#5EEAD4",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.76rem",
                          padding: "12px 18px",
                          borderRadius: "var(--r-md)",
                          margin: "18px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          border: isDark
                            ? "1px solid rgba(60, 187, 177, 0.4)"
                            : "1px solid rgba(13, 148, 136, 0.35)",
                          boxShadow: isDark
                            ? "0 0 16px rgba(60, 187, 177, 0.15), inset 0 1px 6px rgba(0,0,0,0.6)"
                            : "inset 0 1px 6px rgba(0,0,0,0.4)",
                        }}
                      >
                        <Terminal size={15} style={{ color: "#2DD4BF", flexShrink: 0 }} />
                        <span style={{ color: "#9CA3AF", opacity: 0.85 }}>System Flow:</span> {project.archSnippet}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Tech Tags & GitHub Stars */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.74rem",
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

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        fontFamily: "'JetBrains Mono', monospace",
                        background: isDark ? "rgba(245, 158, 11, 0.2)" : "rgba(217, 119, 6, 0.12)",
                        padding: "4px 12px",
                        borderRadius: "var(--r-full)",
                        border: isDark ? "1px solid rgba(245, 158, 11, 0.45)" : "1px solid rgba(217, 119, 6, 0.35)",
                        boxShadow: isDark ? "0 0 12px rgba(245, 158, 11, 0.25)" : "none",
                      }}
                    >
                      <Star size={13} style={{ color: "var(--amber-500)", fill: "var(--amber-500)" }} />
                      {project.stars}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
          }
          #projects-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
