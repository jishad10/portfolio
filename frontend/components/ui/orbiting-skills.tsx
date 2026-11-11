"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Server,
  Cloud,
  Zap,
  Box,
  Code2,
  Database,
  Layers,
  Workflow,
  Cpu,
  Sparkles,
  Play,
  Pause,
  RotateCw,
  Activity,
} from "lucide-react";

interface TechSkill {
  id: string;
  name: string;
  domain: string;
  detail: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  glow: string;
  orbitRadius: number;
  speed: number;
  initialAngle: number;
}

const TECH_SKILLS: TechSkill[] = [
  // Middle Orbit (r = 185px) — Core Backend & Cloud Infrastructure
  { id: "nestjs", name: "NestJS", domain: "Backend Architecture", detail: "Modules · DI · Scalable Microservices", icon: Code2, color: "#E0234E", glow: "rgba(224, 35, 78, 0.6)", orbitRadius: 185, speed: 0.42, initialAngle: 0 },
  { id: "aws", name: "AWS Cloud", domain: "Cloud Native", detail: "EC2 · S3 · ELB · ASG · RDS · CDN", icon: Cloud, color: "#FF9900", glow: "rgba(255, 153, 0, 0.6)", orbitRadius: 185, speed: 0.42, initialAngle: 72 },
  { id: "nodejs", name: "Node.js & Express", domain: "API Core", detail: "Async Processing · REST · Concurrency", icon: Zap, color: "#3CBBB1", glow: "rgba(60, 187, 177, 0.6)", orbitRadius: 185, speed: 0.42, initialAngle: 144 },
  { id: "docker", name: "Docker & Linux", domain: "Containers & VPS", detail: "Multi-stage Builds · Nginx · SSL", icon: Server, color: "#0DB7ED", glow: "rgba(13, 183, 237, 0.6)", orbitRadius: 185, speed: 0.42, initialAngle: 216 },
  { id: "postgres", name: "PostgreSQL & Mongo", domain: "Databases", detail: "Prisma · Geospatial · SQL/NoSQL", icon: Database, color: "#38BDF8", glow: "rgba(56, 189, 248, 0.6)", orbitRadius: 185, speed: 0.42, initialAngle: 288 },
  // Outer Orbit (r = 260px) — Queues, DevOps & AI Research
  { id: "redis", name: "Redis & BullMQ", domain: "Async Queues", detail: "Job Pipeline · Caching · Pub/Sub", icon: Box, color: "#EF4444", glow: "rgba(239, 68, 68, 0.6)", orbitRadius: 260, speed: -0.28, initialAngle: 36 },
  { id: "socketio", name: "Socket.IO", domain: "Real-time", detail: "WebSockets · Live Chat · Geo Matching", icon: Layers, color: "#818CF8", glow: "rgba(129, 140, 248, 0.6)", orbitRadius: 260, speed: -0.28, initialAngle: 108 },
  { id: "cicd", name: "GitHub Actions CI/CD", domain: "DevOps Pipeline", detail: "Automated Deployments · ~70% Speedup", icon: Workflow, color: "#14B8A6", glow: "rgba(20, 184, 166, 0.6)", orbitRadius: 260, speed: -0.28, initialAngle: 180 },
  { id: "inception", name: "Inception v3 AI", domain: "Deep Learning", detail: "OCT Retinopathy · IEEE BECITHCON 2025", icon: Cpu, color: "#F59E0B", glow: "rgba(245, 158, 11, 0.6)", orbitRadius: 260, speed: -0.28, initialAngle: 252 },
  { id: "typescript", name: "TypeScript & Python", domain: "Core Languages", detail: "Strict Typing · System Design · C++/C#", icon: Sparkles, color: "#A855F7", glow: "rgba(168, 85, 247, 0.6)", orbitRadius: 260, speed: -0.28, initialAngle: 324 },
];

function useIsDarkTheme() {
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

export default function OrbitingSkills() {
  const isDark = useIsDarkTheme();
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedFactor, setSpeedFactor] = useState(1);
  const [hoveredSkill, setHoveredSkill] = useState<TechSkill | null>(null);
  const [pulseOffset, setPulseOffset] = useState(0);
  const [rippleKey, setRippleKey] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (-y / rect.height) * 6,
      y: (x / rect.width) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredSkill(null);
  };

  // Smooth animation loop
  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();
    const animate = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (isPlaying && !hoveredSkill) {
        setTime((prev) => prev + delta * speedFactor);
      }
      // Smooth continuous pulse offset
      setPulseOffset((prev) => (prev + 1.2) % 2000);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, speedFactor, hoveredSkill]);

  // Periodic energy ripple from core
  useEffect(() => {
    const interval = setInterval(() => setRippleKey((k) => k + 1), 4000);
    return () => clearInterval(interval);
  }, []);

  const cx = 300;
  const cy = 300;

  // Calculate live 2D positions for each orbiting skill node
  const activeSkills = useMemo(() => {
    return TECH_SKILLS.map((skill) => {
      const angleRad =
        ((skill.initialAngle * Math.PI) / 180 + time * skill.speed) % (2 * Math.PI);
      const x = cx + skill.orbitRadius * Math.cos(angleRad);
      const y = cy + skill.orbitRadius * Math.sin(angleRad);
      const bob = Math.sin(time * 1.1 + skill.initialAngle * 0.04) * 2.2;
      return { ...skill, x, y: y + bob };
    });
  }, [time]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "580px",
        aspectRatio: "1 / 1",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        perspective: "1200px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* ── AMBIENT BACKGROUND HALO ── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "92%",
            height: "92%",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle at 50% 50%, rgba(60,187,177,0.16) 0%, rgba(20,184,166,0.09) 30%, rgba(139,92,246,0.05) 60%, transparent 80%)"
              : "radial-gradient(circle at 50% 50%, rgba(60,187,177,0.09) 0%, rgba(245,158,11,0.05) 35%, rgba(139,92,246,0.02) 65%, transparent 80%)",
            filter: isDark ? "blur(55px)" : "blur(45px)",
            pointerEvents: "none",
            transition: "all 0.6s ease",
          }}
        />

        {isDark && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "82%",
              height: "82%",
              borderRadius: "50%",
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.28,
              pointerEvents: "none",
              maskImage: "radial-gradient(circle at center, black 35%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 78%)",
            }}
          />
        )}

        {/* ── PREMIUM SVG NEON ORBIT RINGS ── */}
        <svg
          viewBox="0 0 600 600"
          shapeRendering="geometricPrecision"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <defs>
            {/* Dedicated filter for a soft, thick neon glow */}
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Stronger filter for the traveling comet pulses */}
            <filter id="comet-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Inner Core Boundary Ring (r=112) — Ties the brain image to the orbits */}
          <circle
            cx={cx}
            cy={cy}
            r={112}
            fill="none"
            stroke={isDark ? "rgba(60,187,177,0.25)" : "rgba(60,187,177,0.15)"}
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.6"
          />

          {/* Main Orbit Rings (r=185, r=260) */}
          {[185, 260].map((r, idx) => {
            const isOrbitActive = hoveredSkill && hoveredSkill.orbitRadius === r;

            // Elegant gradient from Teal (inner) to Purple (outer)
            const ringColor = idx === 0 ? (isDark ? "#3CBBB1" : "#0D9488") : (isDark ? "#A855F7" : "#7C3AED");
            const activeColor = isOrbitActive ? hoveredSkill.color : ringColor;

            const baseOpacity = isDark ? 0.4 : 0.55;
            const activeOpacity = 1;

            return (
              <g key={`orbit-ring-${r}`}>
                {/* Layer 1: Faint solid continuous base line */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={activeColor}
                  strokeWidth="1.2"
                  opacity={isOrbitActive ? activeOpacity * 0.7 : baseOpacity}
                  style={{ transition: "stroke 0.35s ease, opacity 0.35s ease" }}
                />

                {/* Layer 2: Soft wide glow base to blur the line into a conduit */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={activeColor}
                  strokeWidth="3"
                  opacity={isDark ? 0.12 : 0.08}
                  filter="url(#neon-glow)"
                  style={{ transition: "stroke 0.35s ease, opacity 0.35s ease" }}
                />

                {/* Layer 3: Bright Traveling Comet Pulse */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={activeColor}
                  strokeWidth="4"
                  strokeDasharray="24 2000" // 24px dash, massive gap ensures only one comet
                  strokeLinecap="round"
                  strokeDashoffset={-pulseOffset * (idx === 0 ? 4 : -4)}
                  opacity="0.95"
                  filter="url(#comet-glow)"
                />

                {/* Layer 4: Trailing Mini Comet (offset by 60px) for depth */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={activeColor}
                  strokeWidth="2.5"
                  strokeDasharray="10 2000"
                  strokeLinecap="round"
                  strokeDashoffset={-pulseOffset * (idx === 0 ? 4 : -4) - 60}
                  opacity="0.6"
                  filter="url(#comet-glow)"
                />
              </g>
            );
          })}

          {/* Energy ray to hovered node */}
          {hoveredSkill && (
            <g>
              {activeSkills
                .filter((s) => s.id === hoveredSkill.id)
                .map((s) => (
                  <g key={`flare-${s.id}`}>
                    <line
                      x1={cx}
                      y1={cy}
                      x2={s.x}
                      y2={s.y}
                      stroke={s.color}
                      strokeWidth="1.8"
                      strokeDasharray="4 3"
                      opacity="0.65"
                      filter="url(#neon-glow)"
                    />
                    <circle cx={s.x} cy={s.y} r="5.5" fill={s.color} opacity="0.85" filter="url(#comet-glow)" />
                  </g>
                ))}
            </g>
          )}

          {/* Periodic energy ripple emanating from core */}
          <circle
            key={`ripple-${rippleKey}`}
            cx={cx}
            cy={cy}
            r="100"
            fill="none"
            stroke={isDark ? "rgba(60,187,177,0.5)" : "rgba(60,187,177,0.4)"}
            strokeWidth="1.2"
            style={{
              animation: "ripple-expand 4s ease-out forwards",
              transformOrigin: "center",
            }}
          />
        </svg>

        {/* ── CENTRAL NEURAL CORE ── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "224px",
            height: "224px",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Outer slowly-rotating dashed ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `1px dashed ${isDark ? "rgba(60,187,177,0.38)" : "rgba(60,187,177,0.28)"}`,
              animation: "spin-slow 40s linear infinite",
            }}
          />

          {/* Inner stationary ring with depth shadow */}
          <div
            style={{
              position: "absolute",
              inset: "14px",
              borderRadius: "50%",
              border: `1px solid ${isDark ? "rgba(60,187,177,0.48)" : "rgba(60,187,177,0.22)"}`,
              boxShadow: isDark
                ? "inset 0 0 32px rgba(60,187,177,0.25), 0 0 45px rgba(60,187,177,0.35)"
                : "inset 0 0 22px rgba(60,187,177,0.08), 0 0 28px rgba(60,187,177,0.12)",
            }}
          />

          {/* Pulsing glow halo behind the brain image */}
          <div
            style={{
              position: "absolute",
              inset: "22px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(60,187,177,0.45) 0%, rgba(168,85,247,0.22) 50%, transparent 75%)"
                : "radial-gradient(circle, rgba(60,187,177,0.16) 0%, rgba(245,158,11,0.07) 50%, transparent 75%)",
              filter: "blur(14px)",
              animation: "pulse-glow 4.5s ease-in-out infinite",
            }}
          />

          {/* Brain image container */}
          <div
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              background: "transparent",
              boxShadow: isDark
                ? "0 0 45px rgba(60,187,177,0.4), inset 0 0 25px rgba(0,0,0,0.6)"
                : "0 0 30px rgba(60,187,177,0.15), inset 0 0 15px rgba(255,255,255,0.3)",
              animation: "float 5.5s ease-in-out infinite",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isDark ? "/images/brain_image_dark.png" : "/images/brain_image_light.png"}
              alt={isDark ? "AI Neural Brain Dark Core" : "AI Neural Brain Light Core"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: isDark ? "screen" : "multiply",
                maskImage: "radial-gradient(circle, black 60%, transparent 92%)",
                WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 92%)",
              }}
            />
          </div>
        </div>

        {/* ── ORBITING SKILL NODES ── */}
        {activeSkills.map((skill) => {
          const Icon = skill.icon;
          const isHovered = hoveredSkill?.id === skill.id;
          const leftPercent = (skill.x / 600) * 100;
          const topPercent = (skill.y / 600) * 100;

          return (
            <div
              key={skill.id}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                position: "absolute",
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: `translate(-50%, -50%) scale(${isHovered ? 1.18 : 1})`,
                zIndex: isHovered ? 30 : 15,
                cursor: "pointer",
                transition: "transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {/* Soft trail glow behind node */}
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "var(--r-full)",
                  background: `radial-gradient(circle, ${skill.glow} 0%, transparent 70%)`,
                  opacity: isHovered ? 0.85 : isDark ? 0.35 : 0.22,
                  transition: "opacity 0.35s ease",
                  pointerEvents: "none",
                  filter: "blur(7px)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: isDark
                    ? isHovered
                      ? "rgba(17, 24, 39, 0.98)"
                      : "rgba(15, 23, 42, 0.92)"
                    : isHovered
                      ? "rgba(255, 255, 255, 0.98)"
                      : "rgba(255, 255, 255, 0.95)",
                  border: `1.5px solid ${isHovered ? skill.color : isDark ? "rgba(60, 187, 177, 0.3)" : "#CBD5E1"}`,
                  borderRadius: "var(--r-full)",
                  padding: "5px 13px 5px 6px",
                  boxShadow: isHovered
                    ? `0 12px 28px ${skill.glow}, 0 2px 8px rgba(0,0,0,0.5)`
                    : isDark
                      ? `0 4px 18px rgba(0, 0, 0, 0.6), 0 0 10px ${skill.color}25`
                      : "0 4px 14px rgba(15, 23, 42, 0.08)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 35%, #FFFFFF 0%, ${skill.color} 80%)`,
                    border: `1px solid ${skill.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    boxShadow: `0 0 10px ${skill.glow}`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 800,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: isDark ? "#F9FAFB" : "#0F172A",
                      lineHeight: 1.1,
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: skill.color,
                      fontWeight: 700,
                    }}
                  >
                    {skill.domain}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── HOVER HUD INSPECTOR ── */}
        {hoveredSkill && (
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: "50%",
              transform: "translateX(-50%)",
              background: isDark ? "rgba(15, 23, 42, 0.94)" : "rgba(255, 255, 255, 0.96)",
              border: `1.5px solid ${hoveredSkill.color}`,
              borderRadius: "var(--r-lg)",
              padding: "12px 20px",
              boxShadow: isDark
                ? `0 18px 40px ${hoveredSkill.glow}, 0 4px 16px rgba(0,0,0,0.6)`
                : `0 16px 36px ${hoveredSkill.glow}`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 40,
              display: "flex",
              alignItems: "center",
              gap: 14,
              animation: "fade-in 0.2s ease-out",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: `${hoveredSkill.color}25`,
                border: `1px solid ${hoveredSkill.color}60`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: hoveredSkill.color,
                boxShadow: `0 0 12px ${hoveredSkill.glow}`,
              }}
            >
              <hoveredSkill.icon size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: isDark ? "#F9FAFB" : "var(--text-primary)",
                }}
              >
                {hoveredSkill.name} —{" "}
                <span style={{ color: hoveredSkill.color }}>{hoveredSkill.domain}</span>
              </div>
              <div
                style={{
                  fontSize: "0.74rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isDark ? "#9CA3AF" : "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                {hoveredSkill.detail}
              </div>
            </div>
          </div>
        )}

        {/* ── BOTTOM CONTROL STRIP ── */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: isDark ? "rgba(15, 23, 42, 0.88)" : "rgba(255, 255, 255, 0.92)",
            border: isDark ? "1px solid rgba(255,255,255,0.14)" : "1px solid var(--border-1)",
            padding: "7px 20px",
            borderRadius: "var(--r-full)",
            boxShadow: isDark ? "0 6px 24px rgba(0,0,0,0.5)" : "0 4px 18px rgba(0,0,0,0.08)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            zIndex: 30,
          }}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isDark ? "#F9FAFB" : "var(--text-primary)",
              fontSize: "0.75rem",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {isPlaying ? (
              <Pause size={13} style={{ color: "var(--cyan-400)" }} />
            ) : (
              <Play size={13} style={{ color: "var(--cyan-400)" }} />
            )}
            {isPlaying ? "Pause Orbits" : "Resume Orbits"}
          </button>

          <span style={{ width: 1, height: 12, background: isDark ? "rgba(255,255,255,0.18)" : "var(--border-2)" }} />

          <button
            onClick={() => setSpeedFactor((prev) => (prev === 1 ? 2.2 : 1))}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: speedFactor > 1 ? "var(--cyan-400)" : isDark ? "#9CA3AF" : "var(--text-muted)",
              fontSize: "0.75rem",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "color 0.2s ease",
            }}
          >
            <RotateCw size={12} />
            {speedFactor > 1 ? "Warp 2x" : "Normal Speed"}
          </button>

          <span style={{ width: 1, height: 12, background: isDark ? "rgba(255,255,255,0.18)" : "var(--border-2)" }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.72rem",
              fontFamily: "'JetBrains Mono', monospace",
              color: isDark ? "#9CA3AF" : "var(--text-muted)",
              fontWeight: 600,
            }}
          >
            <Activity size={13} style={{ color: "var(--emerald-400)" }} />
            10 Skill Nodes
          </div>
        </div>

        {/* ── LOCAL KEYFRAMES ── */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.04); }
          }
          @keyframes ripple-expand {
            0% { r: 100; opacity: 0.6; }
            100% { r: 280; opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
}