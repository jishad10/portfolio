"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "10px 0" : "18px 0",
          background: scrolled
            ? theme === "dark"
              ? "rgba(11, 17, 32, 0.90)"
              : "rgba(248, 250, 252, 0.94)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? theme === "dark"
              ? "1px solid rgba(60, 187, 177, 0.2)"
              : "1px solid rgba(203, 213, 225, 0.8)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? theme === "dark"
              ? "0 12px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(60, 187, 177, 0.15)"
              : "0 6px 24px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(13, 148, 136, 0.1)"
            : "none",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Scrolled Ambient Top Accent Glow Line */}
        {scrolled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: theme === "dark"
                ? "linear-gradient(90deg, transparent, #3CBBB1 20%, #A855F7 50%, #F59E0B 80%, transparent)"
                : "linear-gradient(90deg, transparent, #0D9488 20%, #0891B2 80%, transparent)",
              opacity: 0.85,
            }}
          />
        )}

        <div className="section-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo Mark & Title */}
            <a
              href="#hero"
              id="nav-logo"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 11,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-sm)",
                  background: "var(--grad-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  boxShadow: theme === "dark"
                    ? "0 0 20px rgba(60, 187, 177, 0.5), 0 4px 16px rgba(0, 0, 0, 0.4)"
                    : "0 4px 16px rgba(13, 148, 136, 0.35)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.08) rotate(-4deg)";
                  (e.currentTarget as HTMLElement).style.boxShadow = theme === "dark"
                    ? "0 0 28px rgba(60, 187, 177, 0.75), 0 6px 20px rgba(0,0,0,0.6)"
                    : "0 6px 20px rgba(13, 148, 136, 0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1) rotate(0deg)";
                  (e.currentTarget as HTMLElement).style.boxShadow = theme === "dark"
                    ? "0 0 20px rgba(60, 187, 177, 0.5), 0 4px 16px rgba(0, 0, 0, 0.4)"
                    : "0 4px 16px rgba(13, 148, 136, 0.35)";
                }}
              >
                JI
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  Jahidul<span style={{ color: "var(--cyan-500)" }}>.</span>
                </span>
                <span
                  style={{
                    fontSize: "0.66rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--cyan-500)",
                    letterSpacing: "0.05em",
                    fontWeight: 700,
                  }}
                >
                  DevOps &amp; AI
                </span>
              </div>
            </a>

            {/* Desktop Glass Navigation Link Pills with Framer Motion Active Indicator */}
            <nav
              id="nav-links"
              aria-label="Main Navigation"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: scrolled
                  ? theme === "dark"
                    ? "rgba(17, 24, 39, 0.88)"
                    : "rgba(241, 245, 249, 0.92)"
                  : theme === "dark"
                  ? "rgba(17, 24, 39, 0.80)"
                  : "rgba(255, 255, 255, 0.90)",
                padding: "5px 8px",
                borderRadius: "var(--r-full)",
                border: theme === "dark"
                  ? "1px solid rgba(60, 187, 177, 0.25)"
                  : "1px solid var(--border-1)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: theme === "dark"
                  ? "0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : "0 2px 12px rgba(15, 23, 42, 0.05)",
              }}
            >
              {NAV_LINKS.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    id={`nav-${sectionId}`}
                    style={{
                      position: "relative",
                      padding: "7px 16px",
                      borderRadius: "var(--r-full)",
                      fontSize: "0.85rem",
                      fontWeight: isActive ? 700 : 600,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: isActive
                        ? theme === "dark"
                          ? "#5EEAD4"
                          : "var(--cyan-500)"
                        : "var(--text-body)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      letterSpacing: "0.01em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      zIndex: 1,
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "var(--r-full)",
                          background: theme === "dark"
                            ? "linear-gradient(135deg, rgba(60,187,177,0.3) 0%, rgba(60,187,177,0.15) 100%)"
                            : "linear-gradient(135deg, rgba(13,148,136,0.16) 0%, rgba(13,148,136,0.06) 100%)",
                          border: theme === "dark"
                            ? "1px solid rgba(60, 187, 177, 0.55)"
                            : "1px solid rgba(13, 148, 136, 0.35)",
                          boxShadow: theme === "dark"
                            ? "0 0 16px rgba(60, 187, 177, 0.35)"
                            : "0 2px 10px rgba(13, 148, 136, 0.15)",
                          zIndex: -1,
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {isActive && <Sparkles size={12} style={{ color: theme === "dark" ? "#5EEAD4" : "var(--cyan-500)" }} />}
                    {label}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls & CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Sun/Moon Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                id="theme-toggle-btn"
                title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                aria-label="Toggle Light and Dark Theme"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-sm)",
                  background: "var(--bg-3)",
                  border: theme === "dark" ? "1px solid rgba(255,255,255,0.14)" : "1px solid var(--border-1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme === "light" ? "var(--amber-500)" : "var(--cyan-400)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1.08) rotate(180deg)";
                  el.style.borderColor = "var(--cyan-500)";
                  el.style.boxShadow = "0 4px 16px rgba(60, 187, 177, 0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1) rotate(0deg)";
                  el.style.borderColor = theme === "dark" ? "rgba(255,255,255,0.14)" : "var(--border-1)";
                  el.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                }}
              >
                {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/"
                id="nav-github"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-sm)",
                  background: "var(--bg-3)",
                  border: theme === "dark" ? "1px solid rgba(255,255,255,0.14)" : "1px solid var(--border-1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--cyan-500)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan-500)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(60, 187, 177, 0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  (e.currentTarget as HTMLElement).style.borderColor = theme === "dark" ? "rgba(255,255,255,0.14)" : "var(--border-1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                }}
              >
                <GithubIcon size={19} />
              </a>

              {/* Hire Me CTA Button */}
              <a
                href="#contact"
                id="nav-cta"
                className="btn-primary"
                style={{
                  padding: "9px 22px",
                  fontSize: "0.86rem",
                  borderRadius: "var(--r-sm)",
                  boxShadow: "0 4px 16px rgba(60, 187, 177, 0.35)",
                }}
              >
                Hire Me
              </a>

              {/* Mobile Menu Drawer Toggle */}
              <button
                id="nav-mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Mobile Navigation Drawer"
                style={{
                  display: "none",
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-sm)",
                  background: "var(--bg-3)",
                  border: theme === "dark" ? "1px solid rgba(255,255,255,0.14)" : "1px solid var(--border-1)",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 66,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme === "dark" ? "rgba(11, 17, 32, 0.98)" : "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              padding: "24px 20px",
              gap: 10,
              borderTop: "1px solid var(--border-1)",
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "14px 20px",
                    borderRadius: "var(--r-md)",
                    fontSize: "1.05rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    color: isActive ? "var(--cyan-500)" : "var(--text-primary)",
                    background: isActive ? "rgba(60, 187, 177, 0.12)" : "var(--bg-3)",
                    textDecoration: "none",
                    border: isActive ? "1px solid rgba(60, 187, 177, 0.35)" : "1px solid var(--border-1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{label}</span>
                  {isActive && <Sparkles size={16} style={{ color: "var(--cyan-500)" }} />}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          #nav-links { display: none !important; }
          #nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
