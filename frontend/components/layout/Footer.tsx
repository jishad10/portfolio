"use client";

import { useState, useEffect } from "react";
import { Mail, FileText, HelpCircle, Rocket, ExternalLink, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

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

const FOOTER_LINKS = {
  "Quick Navigation": [
    { label: "Home", href: "#hero", icon: null },
    { label: "About Me", href: "#about", icon: null },
    { label: "Experience", href: "#experience", icon: null },
    { label: "Featured Projects", href: "#projects", icon: null },
    { label: "Research & Focus", href: "#research", icon: null },
    { label: "Skills Arsenal", href: "#skills", icon: null },
  ],
  "Resources & Links": [
    { label: "Download Resume", href: "/resume.pdf", icon: FileText },
    { label: "GitHub Profile", href: "https://github.com/", icon: ExternalLink },
    { label: "LinkedIn Network", href: "https://linkedin.com/", icon: ExternalLink },
    { label: "Google Scholar", href: "https://scholar.google.com/", icon: ExternalLink },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Get In Touch", href: "#contact", icon: Rocket },
  ],
};

const SOCIAL = [
  { id: "footer-github", Icon: GithubIcon, href: "https://github.com/", label: "GitHub Profile" },
  { id: "footer-linkedin", Icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn Profile" },
  { id: "footer-email", Icon: Mail, href: "mailto:jishadfuture@gmail.com", label: "Send Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const isDark = useIsDark();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      aria-label="Footer Section"
      style={{
        background: "var(--bg-0)",
        borderTop: "1px solid var(--border-1)",
        padding: "86px 0 36px",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 820,
          height: 320,
          background: isDark
            ? "radial-gradient(ellipse, rgba(60, 187, 177, 0.16) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(60, 187, 177, 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr",
            gap: 60,
            marginBottom: 56,
          }}
        >
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <a
              href="#hero"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 11,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-sm)",
                  background: "linear-gradient(135deg, #3CBBB1 0%, #2DD4BF 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#ffffff",
                  boxShadow: isDark
                    ? "0 0 20px rgba(60, 187, 177, 0.5), 0 4px 14px rgba(0, 0, 0, 0.4)"
                    : "0 4px 14px rgba(60, 187, 177, 0.35)",
                }}
              >
                JI
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                }}
              >
                Jahidul<span style={{ color: "#3CBBB1" }}>.</span>
              </span>
            </a>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-body)",
                lineHeight: 1.85,
                maxWidth: 350,
                marginBottom: 28,
              }}
            >
              Backend &amp; DevOps Engineer · AI Researcher. Architecting cloud-native infrastructure, high-throughput microservices, and deep learning algorithms.
            </p>

            {/* Social Action Buttons */}
            <div style={{ display: "flex", gap: 11 }}>
              {SOCIAL.map(({ id, Icon, href, label }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "var(--r-sm)",
                    background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                    border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isDark ? "0 4px 14px rgba(0,0,0,0.3)" : "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--cyan-500)";
                    el.style.borderColor = "var(--cyan-500)";
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = isDark
                      ? "0 0 16px rgba(60, 187, 177, 0.4)"
                      : "0 6px 18px rgba(13, 148, 136, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-primary)";
                    el.style.borderColor = isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = isDark ? "0 4px 14px rgba(0,0,0,0.3)" : "var(--shadow-sm)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  color: isDark ? "#5EEAD4" : "#0F766E",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {heading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--text-body)",
                      textDecoration: "none",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--cyan-500)";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--text-body)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    {Icon && <Icon size={14} style={{ color: "var(--cyan-500)", flexShrink: 0 }} />}
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: isDark
              ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)"
              : "linear-gradient(90deg, transparent, var(--border-1) 20%, var(--border-1) 80%, transparent)",
            marginBottom: 28,
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", fontWeight: 600 }}>
            © {year} Jahidul Islam Shikdar. Built with{" "}
            <span style={{ color: "var(--cyan-500)", fontWeight: 700 }}>Next.js 16</span> +{" "}
            <span style={{ color: "var(--cyan-600)", fontWeight: 700 }}>TypeScript</span> &amp;{" "}
            <span style={{ color: "var(--amber-500)", fontWeight: 700 }}>Tailwind CSS</span>.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              Backend · DevOps · AI Research
            </span>

            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              aria-label="Scroll to Top"
              style={{
                width: 38,
                height: 38,
                borderRadius: "var(--r-sm)",
                background: isDark ? "rgba(31, 41, 55, 0.85)" : "#FFFFFF",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid var(--border-1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: isDark ? "0 4px 14px rgba(0,0,0,0.3)" : "var(--shadow-sm)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--cyan-500)";
                el.style.borderColor = "var(--cyan-500)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-primary)";
                el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.12)" : "var(--border-1)";
                el.style.transform = "translateY(0)";
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #footer > .section-container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
