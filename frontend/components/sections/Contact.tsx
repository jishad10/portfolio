"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, BookMarked, Clock } from "lucide-react";
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

const CONTACT_METHODS = [
  {
    id: "contact-email",
    Icon: Mail,
    label: "Direct Email",
    value: "jishadfuture@gmail.com",
    href: "mailto:jishadfuture@gmail.com",
    color: "#3CBBB1",
    bgLight: "rgba(60, 187, 177, 0.08)",
    bgDark: "rgba(60, 187, 177, 0.16)",
    borderLight: "rgba(60, 187, 177, 0.25)",
    borderDark: "rgba(60, 187, 177, 0.35)",
  },
  {
    id: "contact-phone",
    Icon: MapPin,
    label: "Phone / WhatsApp",
    value: "+880 1821-518484",
    href: "tel:01821518484",
    color: "#F59E0B",
    bgLight: "rgba(245, 158, 11, 0.08)",
    bgDark: "rgba(245, 158, 11, 0.16)",
    borderLight: "rgba(245, 158, 11, 0.25)",
    borderDark: "rgba(245, 158, 11, 0.35)",
  },
  {
    id: "contact-github",
    Icon: GithubIcon,
    label: "GitHub Profile",
    value: "github.com",
    href: "https://github.com/",
    color: "#2DD4BF",
    bgLight: "rgba(45, 212, 191, 0.08)",
    bgDark: "rgba(45, 212, 191, 0.16)",
    borderLight: "rgba(45, 212, 191, 0.25)",
    borderDark: "rgba(45, 212, 191, 0.35)",
  },
  {
    id: "contact-linkedin",
    Icon: LinkedinIcon,
    label: "LinkedIn Professional",
    value: "linkedin.com",
    href: "https://linkedin.com/",
    color: "#38BDF8",
    bgLight: "rgba(56, 189, 248, 0.08)",
    bgDark: "rgba(56, 189, 248, 0.16)",
    borderLight: "rgba(56, 189, 248, 0.25)",
    borderDark: "rgba(56, 189, 248, 0.35)",
  },
];

function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  isDark,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  isDark: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "0.82rem",
          color: "var(--text-primary)",
          marginBottom: 7,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          background: isDark ? "rgba(15, 23, 42, 0.8)" : "#F8FAFC",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
          borderRadius: "var(--r-md)",
          padding: "13px 16px",
          color: "var(--text-primary)",
          fontSize: "0.9rem",
          fontFamily: "inherit",
          outline: "none",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onFocus={(e) => {
          const el = e.target as HTMLElement;
          el.style.borderColor = "var(--cyan-500)";
          el.style.background = isDark ? "rgba(31, 41, 55, 0.95)" : "#FFFFFF";
          el.style.boxShadow = "0 0 0 3px rgba(13, 148, 136, 0.25)";
        }}
        onBlur={(e) => {
          const el = e.target as HTMLElement;
          el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
          el.style.background = isDark ? "rgba(15, 23, 42, 0.8)" : "#F8FAFC";
          el.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const isDark = useIsDark();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
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
          top: "15%",
          right: "-5%",
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
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="section-label" style={{ margin: "0 auto 18px" }}>
            Contact
          </div>
          <h2 className="section-heading">
            Let&apos;s <span className="gradient-text">Connect</span> &amp; Collaborate
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Whether it&apos;s an engineering role, contract project, or AI research opportunity — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div
          id="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Availability & Direct Contact Cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: isDark ? "rgba(16, 185, 129, 0.16)" : "#ECFDF5",
                border: isDark ? "1.5px solid rgba(16, 185, 129, 0.45)" : "1px solid #A7F3D0",
                borderRadius: "var(--r-xl)",
                padding: "24px 26px",
                boxShadow: isDark
                  ? "0 10px 30px rgba(16, 185, 129, 0.25), 0 0 16px rgba(16, 185, 129, 0.3)"
                  : "0 4px 16px rgba(16, 185, 129, 0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 8 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: isDark ? "#34D399" : "#047857",
                    animation: "pulse-dot 2s ease-in-out infinite",
                    display: "inline-block",
                    boxShadow: isDark ? "0 0 14px #34D399" : "0 0 12px #047857",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.98rem",
                    color: isDark ? "#34D399" : "#047857",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Open for Opportunities
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.7 }}>
                Available for full-time remote backend/DevOps roles, technical consulting contracts, and AI research projects.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: "0.78rem", color: isDark ? "#34D399" : "#047857", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                <Clock size={14} /> Average Response Time: &lt; 12 Hours
              </div>
            </motion.div>

            {/* Direct Contact Cards */}
            {CONTACT_METHODS.map(({ id, Icon, label, value, href, color, bgLight, bgDark, borderLight, borderDark }, idx) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
                  border: `1.5px solid ${isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)"}`,
                  borderRadius: "var(--r-xl)",
                  padding: "20px 24px",
                  textDecoration: "none",
                  boxShadow: isDark
                    ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                    : "var(--shadow-card)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = color;
                  el.style.transform = "translateX(6px)";
                  el.style.boxShadow = isDark
                    ? `0 14px 36px ${color}35, 0 4px 12px rgba(0,0,0,0.5)`
                    : `0 8px 24px ${color}25, 0 2px 8px rgba(15,23,42,0.06)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = isDark ? "rgba(60, 187, 177, 0.25)" : "var(--border-1)";
                  el.style.transform = "translateX(0)";
                  el.style.boxShadow = isDark
                    ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                    : "var(--shadow-card)";
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "var(--r-md)",
                    background: isDark ? `${color}25` : bgLight,
                    border: `1px solid ${isDark ? `${color}55` : "rgba(13, 148, 136, 0.25)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: isDark ? (color === "#3CBBB1" || color === "#2DD4BF" ? "#5EEAD4" : color) : color === "#3CBBB1" || color === "#2DD4BF" ? "#0D9488" : color === "#F59E0B" ? "#D97706" : color,
                    boxShadow: isDark ? `0 0 16px ${color}35` : `0 4px 12px ${color}20`,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      marginBottom: 2,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.98rem",
                      color: "var(--text-primary)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Location Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--text-body)",
                fontSize: "0.86rem",
                marginTop: 4,
                fontWeight: 600,
              }}
            >
              <MapPin size={16} style={{ color: "var(--cyan-500)", flexShrink: 0 }} />
              Based in Bangladesh 🇧🇩 · Available for Worldwide Remote Work
            </motion.div>
          </div>

          {/* ── RIGHT: Contact Message Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              background: isDark ? "rgba(17, 24, 39, 0.88)" : "#FFFFFF",
              border: isDark ? "1px solid rgba(60, 187, 177, 0.25)" : "1px solid var(--border-1)",
              borderRadius: "var(--r-2xl)",
              padding: "42px 38px",
              position: "relative",
              overflow: "hidden",
              boxShadow: isDark
                ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                : "var(--shadow-card)",
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

            {sent ? (
              <div
                id="contact-success"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 18,
                  minHeight: 380,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: isDark ? "rgba(16, 185, 129, 0.16)" : "#ECFDF5",
                    border: isDark ? "1.5px solid rgba(16, 185, 129, 0.35)" : "1px solid #A7F3D0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <CheckCircle size={36} style={{ color: isDark ? "#10B981" : "#047857" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Message Sent Successfully!
                </h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.94rem", maxWidth: 360, lineHeight: 1.75 }}>
                  Thank you for reaching out, {form.name || "friend"}! I have received your message and will respond within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="btn-outline"
                  style={{ marginTop: 12, padding: "9px 22px", fontSize: "0.85rem", borderRadius: "var(--r-md)" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      color: "var(--text-primary)",
                      marginBottom: 4,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Send a Direct Message
                  </h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    Fill out the form below and I will get back to you personally.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  <FormInput
                    id="contact-name"
                    label="Your Name *"
                    placeholder="Jahidul Islam"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                    isDark={isDark}
                  />
                  <FormInput
                    id="contact-email-input"
                    label="Email Address *"
                    type="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                    isDark={isDark}
                  />
                </div>

                <FormInput
                  id="contact-subject"
                  label="Subject"
                  placeholder="Engineering Role / Project Opportunity / Research"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                  isDark={isDark}
                />

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      color: "var(--text-primary)",
                      marginBottom: 7,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, system architecture requirements, or role details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      background: isDark ? "rgba(15, 23, 42, 0.8)" : "#F8FAFC",
                      border: isDark ? "1px solid rgba(255, 255, 255, 0.14)" : "1px solid var(--border-1)",
                      borderRadius: "var(--r-md)",
                      padding: "13px 16px",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      resize: "vertical",
                      fontFamily: "inherit",
                      outline: "none",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onFocus={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.borderColor = "var(--cyan-500)";
                      el.style.background = isDark ? "rgba(31, 41, 55, 0.95)" : "#FFFFFF";
                      el.style.boxShadow = "0 0 0 3px rgba(13, 148, 136, 0.25)";
                    }}
                    onBlur={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.borderColor = isDark ? "rgba(255, 255, 255, 0.14)" : "var(--border-1)";
                      el.style.background = isDark ? "rgba(15, 23, 42, 0.8)" : "#F8FAFC";
                      el.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary"
                  style={{
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "14px 24px",
                    fontSize: "0.92rem",
                    borderRadius: "var(--r-md)",
                    boxShadow: "0 6px 20px rgba(13, 148, 136, 0.35)",
                  }}
                >
                  <Send size={16} /> Send Message Now
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
