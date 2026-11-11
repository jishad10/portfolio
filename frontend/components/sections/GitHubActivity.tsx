"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Activity, Code2 } from "lucide-react";
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

const WEEKS = 53;
const DAYS_PER_WEEK = 7;
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_POSITIONS = [0, 4, 8, 13, 17, 22, 26, 31, 35, 39, 44, 48];

const STATS = [
  { label: "Total Commits", value: "1,240+", icon: Activity, color: "#3CBBB1", bgLight: "rgba(60, 187, 177, 0.08)", bgDark: "rgba(60, 187, 177, 0.16)", borderLight: "rgba(60, 187, 177, 0.2)", borderDark: "rgba(60, 187, 177, 0.35)" },
  { label: "Public Repos", value: "42", icon: GithubIcon, color: "#2DD4BF", bgLight: "rgba(45, 212, 191, 0.08)", bgDark: "rgba(45, 212, 191, 0.16)", borderLight: "rgba(45, 212, 191, 0.2)", borderDark: "rgba(45, 212, 191, 0.35)" },
  { label: "Stars Earned", value: "380+", icon: Star, color: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.08)", bgDark: "rgba(245, 158, 11, 0.16)", borderLight: "rgba(245, 158, 11, 0.2)", borderDark: "rgba(245, 158, 11, 0.35)" },
  { label: "Forks", value: "95+", icon: GitFork, color: "#818CF8", bgLight: "rgba(129, 140, 248, 0.08)", bgDark: "rgba(129, 140, 248, 0.16)", borderLight: "rgba(129, 140, 248, 0.2)", borderDark: "rgba(129, 140, 248, 0.35)" },
];

const GRID: number[][] = Array.from({ length: WEEKS }, (_, wi) =>
  Array.from({ length: DAYS_PER_WEEK }, (_, di) =>
    ((wi * 7 + di) % 100 < 40 ? 0 : (wi * 7 + di) % 100 < 60 ? 1 : (wi * 7 + di) % 100 < 78 ? 2 : (wi * 7 + di) % 100 < 90 ? 3 : 4)
  )
);

const RECENT_REPOS = [
  { name: "cloud-api-platform", lang: "TypeScript", stars: 128, color: "#3CBBB1", desc: "Production REST API platform with BullMQ & Redis" },
  { name: "devops-automation", lang: "Shell", stars: 74, color: "#2DD4BF", desc: "GitHub Actions CI/CD workflows & Terraform scripts" },
  { name: "ml-image-classifier", lang: "Python", stars: 43, color: "#F59E0B", desc: "PyTorch CNN image classification prototype" },
  { name: "auth-microservice", lang: "TypeScript", stars: 91, color: "#818CF8", desc: "OAuth2 & JWT refresh token rotation service" },
];

export default function GitHubActivity() {
  const isDark = useIsDark();

  const getCellColor = (level: number) => {
    if (isDark) {
      switch (level) {
        case 0: return "rgba(255, 255, 255, 0.05)";
        case 1: return "rgba(60, 187, 177, 0.30)";
        case 2: return "rgba(60, 187, 177, 0.55)";
        case 3: return "rgba(60, 187, 177, 0.80)";
        case 4: return "#3CBBB1";
        default: return "rgba(255, 255, 255, 0.05)";
      }
    } else {
      switch (level) {
        case 0: return "rgba(203, 213, 225, 0.45)";
        case 1: return "rgba(13, 148, 136, 0.30)";
        case 2: return "rgba(13, 148, 136, 0.55)";
        case 3: return "rgba(13, 148, 136, 0.80)";
        case 4: return "#0D9488";
        default: return "rgba(203, 213, 225, 0.45)";
      }
    }
  };

  return (
    <section
      id="github-activity"
      aria-label="GitHub Activity Section"
      style={{
        padding: "130px 0",
        background: "var(--bg-0)",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(60, 187, 177, 0.14) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)",
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
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div>
            <div className="section-label">GitHub</div>
            <h2 className="section-heading">
              Open Source <span className="gradient-text">Activity</span>
            </h2>
            <p className="section-subheading">A year of continuous commits, open-source code, and public repositories.</p>
          </div>
          <a
            href="https://github.com/"
            id="github-profile-link"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "11px 22px",
              fontSize: "0.86rem",
              borderColor: isDark ? "rgba(60, 187, 177, 0.35)" : "var(--border-1)",
              background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
              color: "var(--text-primary)",
              borderRadius: "var(--r-sm)",
              boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.3)" : "none",
            }}
          >
            <GithubIcon size={16} /> Open GitHub Profile
          </a>
        </motion.div>

        {/* Stats Row */}
        <div
          id="github-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            marginBottom: 36,
          }}
        >
          {STATS.map(({ label, value, icon: Icon, color, bgLight, bgDark, borderLight, borderDark }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                border: `1.5px solid ${isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)"}`,
                borderRadius: "var(--r-xl)",
                padding: "24px 26px",
                textAlign: "center",
                boxShadow: isDark
                  ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = color;
                el.style.boxShadow = isDark
                  ? `0 16px 36px ${color}35, 0 4px 16px rgba(0,0,0,0.6)`
                  : `0 12px 32px ${color}25, 0 2px 8px rgba(15,23,42,0.06)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)";
                el.style.boxShadow = isDark
                  ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: isDark ? `${color}25` : bgLight,
                  border: `1px solid ${isDark ? `${color}55` : "rgba(13, 148, 136, 0.25)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  color: isDark ? (color === "#3CBBB1" || color === "#2DD4BF" ? "#5EEAD4" : color) : color === "#3CBBB1" || color === "#2DD4BF" ? "#0D9488" : color === "#F59E0B" ? "#D97706" : color,
                  boxShadow: isDark ? `0 0 16px ${color}35` : "none",
                }}
              >
                <Icon size={19} />
              </div>
              <div
                style={{
                  fontSize: "1.82rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 4, fontWeight: 600 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
            border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
            borderRadius: "var(--r-2xl)",
            padding: "32px 34px",
            marginBottom: 26,
            boxShadow: isDark
              ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
              : "var(--shadow-card)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            position: "relative",
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
              background: "linear-gradient(90deg, #3CBBB1, #2DD4BF, #A855F7)",
              borderRadius: "0 0 4px 4px",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Code2 size={18} style={{ color: "var(--cyan-500)" }} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                2024 Contribution Graph
              </span>
            </div>
            <span style={{ fontSize: "0.78rem", color: isDark ? "#5EEAD4" : "#0F766E", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
              1,240+ Contributions in the last year
            </span>
          </div>

          {/* Month Labels */}
          <div style={{ display: "flex", marginLeft: 20, marginBottom: 10, minWidth: "max-content", position: "relative", height: 16 }}>
            {MONTH_POSITIONS.map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `calc(${pos * 13}px)`,
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                }}
              >
                {MONTH_LABELS[i]}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div style={{ position: "relative", minWidth: "max-content", display: "flex", gap: 3.5 }}>
            {GRID.map((week, wi) => (
              <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                {week.map((level, di) => (
                  <div
                    key={di}
                    title={`Level ${level} contribution`}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 3,
                      background: getCellColor(level),
                      boxShadow: level >= 3 ? (isDark ? `0 0 10px rgba(60, 187, 177, ${level === 4 ? 0.85 : 0.5})` : `0 0 8px rgba(13, 148, 136, ${level === 4 ? 0.7 : 0.4})`) : "none",
                      transition: "transform 0.15s ease, background-color 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Heatmap Legend */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, justifyContent: "flex-end" }}>
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 3,
                  background: getCellColor(l),
                }}
              />
            ))}
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>More</span>
          </div>
        </motion.div>

        {/* Recent Repositories Grid */}
        <div
          id="github-repos"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 18,
          }}
        >
          {RECENT_REPOS.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                borderRadius: "var(--r-xl)",
                padding: "24px 26px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: isDark
                  ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                  : "var(--shadow-card)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = repo.color;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = isDark
                  ? `0 14px 36px ${repo.color}35, 0 4px 12px rgba(0,0,0,0.5)`
                  : `0 8px 24px ${repo.color}25, 0 2px 8px rgba(15,23,42,0.06)`;
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
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <GithubIcon size={18} style={{ color: "var(--text-primary)" }} />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.98rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {repo.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: isDark ? (repo.color === "#3CBBB1" || repo.color === "#2DD4BF" ? "#5EEAD4" : repo.color) : repo.color === "#3CBBB1" || repo.color === "#2DD4BF" ? "#0F766E" : repo.color === "#F59E0B" ? "#D97706" : repo.color,
                      background: isDark ? `${repo.color}25` : `${repo.color}15`,
                      border: `1px solid ${repo.color}50`,
                      padding: "2px 9px",
                      borderRadius: "var(--r-full)",
                      fontWeight: 700,
                      boxShadow: isDark ? `0 0 10px ${repo.color}30` : "none",
                    }}
                  >
                    {repo.lang}
                  </span>
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-body)" }}>{repo.desc}</div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.78rem", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-primary)" }}>
                  <Star size={13} style={{ color: "var(--amber-500)", fill: "var(--amber-500)" }} />
                  {repo.stars}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #github-stats { grid-template-columns: repeat(2, 1fr) !important; }
          #github-repos { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
