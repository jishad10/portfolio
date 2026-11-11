"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";

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

const CERTS = [
  {
    id: "cert-1",
    title: "IBM DevOps and Software Engineering Professional Certificate",
    issuer: "IBM — Coursera",
    year: "Professional Certificate · Verified",
    color: "#0F62FE",
    topBarGrad: "linear-gradient(90deg, #0F62FE, #38BDF8)",
    abbr: "IBM",
    verifyLink: "https://www.coursera.org/professional-certificates/devops-and-software-engineering",
  },
  {
    id: "cert-2",
    title: "Google Project Management Professional Certificate",
    issuer: "Google — Coursera",
    year: "Professional Certificate · Verified",
    color: "#4285F4",
    topBarGrad: "linear-gradient(90deg, #4285F4, #34A853)",
    abbr: "Google",
    verifyLink: "https://www.coursera.org/professional-certificates/google-project-management",
  },
  {
    id: "cert-3",
    title: "AWS Cloud Infrastructure & Services Specialization",
    issuer: "Amazon Web Services",
    year: "EC2, S3, RDS, ASG, ELB, CDN · Active",
    color: "#FF9900",
    topBarGrad: "linear-gradient(90deg, #FF9900, #F59E0B)",
    abbr: "AWS",
    verifyLink: "#",
  },
  {
    id: "cert-4",
    title: "Docker & CI/CD Pipeline Automation",
    issuer: "DevOps & Containers Specialization",
    year: "GitHub Actions, Docker & Nginx · Verified",
    color: "#0DB7ED",
    topBarGrad: "linear-gradient(90deg, #0DB7ED, #3CBBB1)",
    abbr: "Docker",
    verifyLink: "#",
  },
];

export default function Certifications() {
  const isDark = useIsDark();

  return (
    <section
      id="certifications"
      aria-label="Certifications Section"
      style={{
        padding: "130px 0",
        background: "var(--bg-0)",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.4s ease",
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
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
            Certifications
          </div>
          <h2 className="section-heading">
            Credentials &amp; <span className="gradient-text">Verified Expertise</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Industry-recognized certifications validating cloud architecture, DevOps, and AI proficiency.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div
          id="certs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {CERTS.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={cert.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                borderRadius: "var(--r-2xl)",
                padding: "30px 28px",
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
                  ? `0 18px 45px ${cert.color}35, 0 4px 16px rgba(0,0,0,0.6)`
                  : `0 16px 36px ${cert.color}25, 0 2px 8px rgba(15,23,42,0.06)`;
                el.style.borderColor = cert.color;
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
                  background: cert.topBarGrad,
                  borderRadius: "0 0 4px 4px",
                }}
              />

              <div>
                {/* Abbreviation Shield & Verified Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "var(--r-md)",
                      background: isDark ? `${cert.color}25` : `${cert.color}15`,
                      border: `1.5px solid ${cert.color}60`,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: isDark ? (cert.color === "#3CBBB1" || cert.color === "#0DB7ED" ? "#5EEAD4" : cert.color) : cert.color === "#FF9900" ? "#D97706" : cert.color === "#0DB7ED" ? "#0F766E" : cert.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      letterSpacing: "0.02em",
                      boxShadow: isDark ? `0 0 16px ${cert.color}40` : `0 4px 14px ${cert.color}25`,
                    }}
                  >
                    {cert.abbr}
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "0.7rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      color: isDark ? "#34D399" : "#047857",
                      background: isDark ? "rgba(16, 185, 129, 0.16)" : "#ECFDF5",
                      border: isDark ? "1.5px solid rgba(16, 185, 129, 0.45)" : "1px solid #A7F3D0",
                      padding: "3px 11px",
                      borderRadius: "var(--r-full)",
                      boxShadow: isDark ? "0 0 12px rgba(16, 185, 129, 0.25)" : "none",
                    }}
                  >
                    <ShieldCheck size={13} /> Verified
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                    marginBottom: 6,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p style={{ fontSize: "0.86rem", color: isDark ? (cert.color === "#3CBBB1" || cert.color === "#0DB7ED" ? "#5EEAD4" : cert.color) : cert.color === "#FF9900" ? "#D97706" : cert.color === "#0DB7ED" ? "#0F766E" : cert.color, fontWeight: 700, marginBottom: 4 }}>
                  {cert.issuer}
                </p>

                {/* Issue Date */}
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    marginBottom: 22,
                  }}
                >
                  {cert.year}
                </p>
              </div>

              {/* Verify Link CTA */}
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.8rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  padding: "9px 16px",
                  borderRadius: "var(--r-sm)",
                  background: isDark ? "rgba(15, 23, 42, 0.85)" : "#F1F5F9",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                  width: "fit-content",
                  boxShadow: isDark ? "0 4px 14px rgba(0,0,0,0.3)" : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = cert.color;
                  el.style.borderColor = cert.color;
                  el.style.background = isDark ? "rgba(31, 41, 55, 0.95)" : "#FFFFFF";
                  el.style.boxShadow = `0 0 14px ${cert.color}35`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-primary)";
                  el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
                  el.style.background = isDark ? "rgba(15, 23, 42, 0.85)" : "#F1F5F9";
                  el.style.boxShadow = isDark ? "0 4px 14px rgba(0,0,0,0.3)" : "none";
                }}
              >
                <Award size={14} /> Verify Credential <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
