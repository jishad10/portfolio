"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageSquare } from "lucide-react";

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

const FAQS = [
  {
    id: "faq-1",
    category: "Recruitment & Roles",
    q: "Are you available for full-time or remote backend/DevOps positions?",
    a: "Yes — I am actively open to full-time remote backend engineering and DevOps roles, contract engagements, and technical consulting. I am based in Bangladesh and available for global remote work.",
  },
  {
    id: "faq-2",
    category: "Tech Stack & Tools",
    q: "What is your primary engineering technology stack?",
    a: "Node.js + TypeScript for backend services, PostgreSQL + Redis for data persistence & caching, BullMQ for background job queues, Docker + AWS (ECS/EC2) for infrastructure, and GitHub Actions for CI/CD. For AI/ML work, I utilize Python with PyTorch and TensorFlow.",
  },
  {
    id: "faq-3",
    category: "Graduate Research",
    q: "Are you applying for Erasmus Mundus or other CS graduate programmes?",
    a: "Yes. I am targeting Erasmus Mundus and top international graduate programmes in Computer Science with a research focus on AI, deep learning, computer vision, and privacy-preserving machine learning.",
  },
  {
    id: "faq-4",
    category: "Consulting & Freelance",
    q: "Can you take on freelance backend architecture or DevOps consulting work?",
    a: "Absolutely. I take on freelance backend architecture reviews, REST API design, CI/CD pipeline automation, Docker containerization, and cloud deployment contracts of varying lengths.",
  },
  {
    id: "faq-5",
    category: "Research & Industry",
    q: "What makes your background unique?",
    a: "I bridge production software engineering with academic research. Having authored an international conference paper alongside shipping cloud-native applications, I understand both theoretical deep learning algorithms and real-world deployable backend systems.",
  },
  {
    id: "faq-6",
    category: "Availability & Onboarding",
    q: "How quickly can you start a new project or engagement?",
    a: "Typically within 1–2 weeks for new engagements, and sooner for urgent technical audits. Reach out via the contact form and we can discuss project timelines.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const isDark = useIsDark();

  return (
    <section
      id="faq"
      aria-label="FAQ Section"
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
            FAQ
          </div>
          <h2 className="section-heading">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            Answers to common questions from recruiters, engineering leads, and academic research collaborators.
          </p>
        </motion.div>

        {/* FAQ Grid with Equalized Card Alignments */}
        <div
          id="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            maxWidth: 1120,
            margin: "0 auto 52px",
            alignItems: "start",
          }}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                id={faq.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                style={{
                  background: isOpen
                    ? isDark
                      ? "linear-gradient(135deg, rgba(60, 187, 177, 0.22) 0%, rgba(17, 24, 39, 0.95) 100%)"
                      : "linear-gradient(135deg, rgba(13, 148, 136, 0.14) 0%, rgba(241, 245, 249, 0.95) 100%)"
                    : isDark
                    ? "rgba(17, 24, 39, 0.88)"
                    : "#FFFFFF",
                  border: isOpen
                    ? isDark
                      ? "1px solid rgba(60, 187, 177, 0.55)"
                      : "1px solid rgba(13, 148, 136, 0.45)"
                    : isDark
                    ? "1px solid rgba(255, 255, 255, 0.14)"
                    : "1px solid var(--border-1)",
                  borderLeft: isOpen
                    ? isDark
                      ? "4px solid #3CBBB1"
                      : "4px solid #0D9488"
                    : isDark
                    ? "1px solid rgba(255, 255, 255, 0.14)"
                    : "1px solid var(--border-1)",
                  borderRadius: "var(--r-xl)",
                  padding: "26px 28px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isOpen
                    ? isDark
                      ? "0 14px 36px rgba(60, 187, 177, 0.25), 0 0 20px rgba(60, 187, 177, 0.15)"
                      : "0 10px 30px rgba(13, 148, 136, 0.18)"
                    : isDark
                    ? "0 10px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(60, 187, 177, 0.12)"
                    : "var(--shadow-card)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line inset when open */}
                {isOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 20,
                      right: 20,
                      height: 3.5,
                      background: "linear-gradient(90deg, #3CBBB1, #2DD4BF, #A855F7)",
                      borderRadius: "0 0 3.5px 3.5px",
                    }}
                  />
                )}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: isOpen ? (isDark ? "#5EEAD4" : "#0D9488") : "var(--text-muted)",
                        fontWeight: 700,
                        display: "inline-block",
                        marginBottom: 6,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {faq.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.02rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.45,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: isOpen ? (isDark ? "#3CBBB1" : "#0D9488") : isDark ? "rgba(255, 255, 255, 0.08)" : "#F1F5F9",
                      border: isOpen
                        ? "1px solid #3CBBB1"
                        : isDark
                        ? "1px solid rgba(255, 255, 255, 0.16)"
                        : "1px solid var(--border-1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: isOpen ? "#ffffff" : "var(--text-primary)",
                      transition: "all 0.25s ease",
                      boxShadow: isOpen ? "0 4px 14px rgba(60, 187, 177, 0.4)" : "none",
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          marginTop: 16,
                          paddingTop: 14,
                          borderTop: isDark
                            ? "1px solid rgba(60, 187, 177, 0.25)"
                            : "1px solid rgba(13, 148, 136, 0.25)",
                          fontSize: "0.9rem",
                          color: "var(--text-body)",
                          lineHeight: 1.8,
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            background: isDark
              ? "linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)"
              : "var(--bg-3)",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid var(--border-1)",
            borderRadius: "var(--r-2xl)",
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            boxShadow: isDark ? "0 8px 30px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.03)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--r-md)",
                background: "rgba(60, 187, 177, 0.16)",
                border: "1px solid rgba(60, 187, 177, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3CBBB1",
                boxShadow: "0 4px 12px rgba(60, 187, 177, 0.2)",
              }}
            >
              <MessageSquare size={20} />
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                Have a question not listed here?
              </div>
              <div style={{ fontSize: "0.85rem", color: isDark ? "#9CA3AF" : "var(--text-muted)", marginTop: 2 }}>
                Feel free to send a direct message. I reply within 12 hours.
              </div>
            </div>
          </div>
          <a href="#contact" className="btn-primary" style={{ padding: "11px 24px", fontSize: "0.86rem", borderRadius: "var(--r-md)" }}>
            Ask a Question <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
