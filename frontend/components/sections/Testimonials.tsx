"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

const TESTIMONIALS = [
  {
    id: "t-1",
    quote:
      "Jahidul delivered our backend API platform on time and beyond scope. His Redis caching & queue implementation cut our API response times by 60%. A rare engineer who truly thinks in system architectures.",
    name: "Sarah Jenkins",
    title: "CTO @ CloudScale Technologies",
    avatar: "SJ",
    rating: 5,
    color: "#3CBBB1",
  },
  {
    id: "t-2",
    quote:
      "Outstanding DevOps work. Jahidul set up our entire AWS infrastructure using Terraform IaC and GitHub Actions CI/CD pipelines. Zero downtime since the migration — exactly the engineer we needed.",
    name: "Marcus Thorne",
    title: "Engineering Manager @ DevOps Solutions",
    avatar: "MT",
    rating: 5,
    color: "#2DD4BF",
  },
  {
    id: "t-3",
    quote:
      "His research contribution to our deep learning project was invaluable. Bridging production software engineering with AI research is rare — Jahidul does it naturally and published at a top conference.",
    name: "Dr. Amir Hossain",
    title: "Professor @ CS Department",
    avatar: "AH",
    rating: 5,
    color: "#F59E0B",
  },
  {
    id: "t-4",
    quote:
      "Jahidul redesigned our multi-tenant auth microservice with JWT + refresh rotation. Clean architecture, thorough documentation, and an absolute pleasure to collaborate with.",
    name: "Elena Rostova",
    title: "Lead Backend Developer @ SaaS Platform",
    avatar: "ER",
    rating: 5,
    color: "#818CF8",
  },
];

const MARQUEE = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const isDark = useIsDark();

  return (
    <section
      id="testimonials"
      aria-label="Testimonials Section"
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
            Testimonials
          </div>
          <h2 className="section-heading">
            What <span className="gradient-text">Collaborators Say</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Endorsements from CTOs, engineering managers, and academic researchers who have worked with me.
          </p>
        </motion.div>

        {/* Featured Testimonial Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          id="testimonial-featured"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 41, 59, 0.96) 100%)"
              : "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "#FFFFFF",
            borderRadius: "var(--r-2xl)",
            padding: "44px 48px",
            marginBottom: 44,
            position: "relative",
            overflow: "hidden",
            boxShadow: isDark
              ? "0 14px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(60, 187, 177, 0.15)"
              : "0 16px 40px rgba(15, 23, 42, 0.22)",
            border: isDark
              ? "1px solid rgba(60, 187, 177, 0.3)"
              : "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
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

          {/* Star Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 18 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} style={{ color: "#F59E0B", fill: "#F59E0B", filter: isDark ? "drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))" : "none" }} />
            ))}
            <span
              style={{
                fontSize: "0.76rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "#5EEAD4",
                marginLeft: 8,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              5.0 VERIFIED ENDORSEMENT
            </span>
          </div>

          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "#F3F4F6",
              lineHeight: 1.85,
              marginBottom: 28,
              maxWidth: 840,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
            }}
          >
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0D9488 0%, #0891B2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#ffffff",
                boxShadow: isDark
                  ? "0 0 20px rgba(60, 187, 177, 0.5), 0 4px 16px rgba(0, 0, 0, 0.4)"
                  : "0 4px 16px rgba(13, 148, 136, 0.4)",
              }}
            >
              {TESTIMONIALS[0].avatar}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {TESTIMONIALS[0].name}
              </div>
              <div style={{ fontSize: "0.84rem", color: "#5EEAD4", fontWeight: 600 }}>
                {TESTIMONIALS[0].title}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Infinite Marquee Track */}
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="marquee-track" style={{ display: "flex", gap: 22, width: "max-content" }}>
            {MARQUEE.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                style={{
                  width: 370,
                  flexShrink: 0,
                  background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                  border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                  borderRadius: "var(--r-xl)",
                  padding: "28px 30px",
                  position: "relative",
                  boxShadow: isDark
                    ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                    : "var(--shadow-card)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = t.color;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = isDark
                    ? `0 16px 40px ${t.color}35, 0 4px 16px rgba(0,0,0,0.6)`
                    : `0 12px 32px ${t.color}25, 0 4px 12px rgba(15,23,42,0.06)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = isDark
                    ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                    : "var(--shadow-card)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 14 }}>
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={14} style={{ color: "#F59E0B", fill: "#F59E0B", filter: isDark ? "drop-shadow(0 0 5px rgba(245, 158, 11, 0.5))" : "none" }} />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.88rem",
                    fontStyle: "italic",
                    color: "var(--text-body)",
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 16, borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--border-1)" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: isDark ? `${t.color}25` : `${t.color}15`,
                      border: `1.5px solid ${t.color}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      color: isDark ? (t.color === "#3CBBB1" || t.color === "#2DD4BF" ? "#5EEAD4" : t.color) : t.color === "#3CBBB1" || t.color === "#2DD4BF" ? "#0F766E" : t.color === "#F59E0B" ? "#D97706" : t.color,
                      fontFamily: "'Space Grotesk', sans-serif",
                      boxShadow: isDark ? `0 0 14px ${t.color}30` : "none",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.76rem", color: isDark ? (t.color === "#3CBBB1" || t.color === "#2DD4BF" ? "#5EEAD4" : t.color) : t.color === "#3CBBB1" || t.color === "#2DD4BF" ? "#0F766E" : t.color === "#F59E0B" ? "#D97706" : t.color, fontWeight: 700 }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
