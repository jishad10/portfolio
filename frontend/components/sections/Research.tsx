"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award, Calendar, Sparkles, CheckCircle2, FileText } from "lucide-react";

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

const SINGLE_PUBLICATION = {
  id: "pub-1",
  title: "Deep Learning Model (Inception v3) for Automated Retinopathy Detection using OCT Images",
  venue: "IEEE Conference — BECITHCON 2025",
  year: "2025",
  type: "IEEE Conference Paper",
  status: "Published & Peer-Reviewed",
  statusColor: "var(--emerald-500)",
  statusBg: "rgba(5, 150, 105, 0.12)",
  statusBorder: "rgba(5, 150, 105, 0.35)",
  contributions: [
    "Trained and fine-tuned Inception v3 deep convolutional neural network for automated detection of retinopathy from OCT retinal scans.",
    "Engineered an automated preprocessing, augmentation, and feature extraction pipeline for high-precision diagnostic classification.",
    "Peer-reviewed and published in IEEE BECITHCON 2025 conference proceedings (DOI: 10.1109/BECITHCON69222.2025.11504241).",
  ],
  tags: ["Inception v3", "OCT Images", "Deep Learning", "Computer Vision", "Medical AI", "IEEE Xplore", "Python"],
  accentColor: "var(--cyan-500)",
  topBarGrad: "linear-gradient(90deg, #0D9488, #0891B2)",
  doiLink: "https://doi.org/10.1109/BECITHCON69222.2025.11504241",
};

export default function Research() {
  const isDark = useIsDark();

  return (
    <section
      id="research"
      aria-label="Academic Research Section"
      style={{
        padding: "130px 0",
        background: "var(--bg-0)",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Ambient background decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
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

      <div className="section-container" style={{ position: "relative", zIndex: 1, maxWidth: 1040 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ marginBottom: 56, textAlign: "center" }}
        >
          <div className="section-label" style={{ margin: "0 auto 18px" }}>Research</div>
          <h2 className="section-heading">
            Publications &amp; <span className="gradient-text-academic">Academic Focus</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Bridging production software engineering with cutting-edge academic research in Deep Learning &amp; AI.
          </p>
        </motion.div>

        {/* Academic Vision Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 41, 59, 0.96) 100%)"
              : "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "#FFFFFF",
            borderRadius: "var(--r-2xl)",
            padding: "36px 42px",
            marginBottom: 44,
            position: "relative",
            overflow: "hidden",
            boxShadow: isDark
              ? "0 14px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(60, 187, 177, 0.15)"
              : "0 16px 40px rgba(15, 23, 42, 0.22)",
            border: isDark
              ? "1px solid rgba(60, 187, 177, 0.3)"
              : "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Subtle cyan accent top line */}
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

          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 20 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--r-md)",
                background: "rgba(13, 148, 136, 0.25)",
                border: "1px solid rgba(13, 148, 136, 0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5EEAD4",
                flexShrink: 0,
                boxShadow: "0 0 16px rgba(60, 187, 177, 0.3)",
              }}
            >
              <Sparkles size={22} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.76rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#5EEAD4",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Research Philosophy &amp; Graduate Goals
              </div>
              <p
                style={{
                  fontSize: "1.12rem",
                  fontStyle: "italic",
                  color: "#F3F4F6",
                  lineHeight: 1.75,
                  maxWidth: 860,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                }}
              >
                &ldquo;My goal is to bridge high-throughput software systems engineering with rigorous academic research through graduate study — innovating in computer vision, deep neural networks, and privacy-preserving machine learning.&rdquo;
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              paddingTop: 18,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div style={{ fontSize: "0.84rem", color: "#9CA3AF", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
              — Jahidul Islam · AI Researcher &amp; Systems Engineer
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Deep Learning", "Computer Vision", "Neural Attention", "CUDA Optimization"].map((topic) => (
                <span
                  key={topic}
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#5EEAD4",
                    background: "rgba(13, 148, 136, 0.25)",
                    border: "1px solid rgba(13, 148, 136, 0.45)",
                    padding: "4px 12px",
                    borderRadius: "var(--r-full)",
                    boxShadow: "0 0 10px rgba(60, 187, 177, 0.2)",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* EXACTLY 1 Single Featured Peer-Reviewed Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] as const }}
          id={SINGLE_PUBLICATION.id}
          style={{
            background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
            border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
            borderRadius: "var(--r-2xl)",
            padding: "36px 40px",
            boxShadow: isDark
              ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
              : "var(--shadow-card)",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(-4px)";
            el.style.boxShadow = isDark
              ? `0 18px 45px rgba(60, 187, 177, 0.35), 0 4px 16px rgba(0,0,0,0.6)`
              : `0 16px 40px rgba(13,148,136,0.25), 0 4px 12px rgba(15,23,42,0.06)`;
            el.style.borderColor = "#3CBBB1";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = isDark
              ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
              : "var(--shadow-card)";
            el.style.borderColor = isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)";
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
              background: SINGLE_PUBLICATION.topBarGrad,
              borderRadius: "0 0 4px 4px",
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              {/* Status & Type Row */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    color: isDark ? "#34D399" : "#047857",
                    background: isDark ? "rgba(16, 185, 129, 0.16)" : "#ECFDF5",
                    border: isDark ? "1.5px solid rgba(16, 185, 129, 0.45)" : "1px solid #A7F3D0",
                    borderRadius: "var(--r-full)",
                    padding: "4px 13px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    boxShadow: isDark ? "0 0 14px rgba(16, 185, 129, 0.3)" : "none",
                  }}
                >
                  {SINGLE_PUBLICATION.status}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5, fontWeight: 600 }}>
                  <Award size={14} style={{ color: "var(--cyan-500)" }} />
                  {SINGLE_PUBLICATION.type}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5, fontFamily: "'JetBrains Mono', monospace" }}>
                  <Calendar size={14} />
                  {SINGLE_PUBLICATION.year}
                </span>
              </div>

              {/* Paper Title */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.32rem",
                  color: "var(--text-primary)",
                  marginBottom: 10,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                }}
              >
                {SINGLE_PUBLICATION.title}
              </h3>

              {/* Venue */}
              <p
                style={{
                  fontSize: "0.92rem",
                  color: isDark ? "#5EEAD4" : "var(--cyan-500)",
                  fontWeight: 700,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <BookOpen size={16} /> {SINGLE_PUBLICATION.venue}
              </p>

              {/* Key Methodological Contributions */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {SINGLE_PUBLICATION.contributions.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={16} style={{ color: isDark ? "#5EEAD4" : "var(--cyan-500)", marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SINGLE_PUBLICATION.tags.map((tag) => (
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
                      padding: "4px 12px",
                      borderRadius: "var(--r-full)",
                      boxShadow: isDark ? "0 0 10px rgba(60, 187, 177, 0.15)" : "none",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Read Paper Action Button */}
            <a
              href={SINGLE_PUBLICATION.doiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                fontSize: "0.86rem",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                flexShrink: 0,
                alignSelf: "flex-start",
                boxShadow: isDark
                  ? "0 6px 20px rgba(60, 187, 177, 0.4)"
                  : "0 4px 16px rgba(13, 148, 136, 0.3)",
              }}
            >
              <FileText size={16} /> Read Publication <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
