"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Save, CheckCircle2, Plus, Trash2, MapPin, Eye, Zap, Workflow, Layers, Activity, Code2, Server, Cpu } from "lucide-react";

export default function AboutManager() {
  const [saved, setSaved] = useState(false);

  // 100% complete state matching About.tsx frontend component
  const [aboutData, setAboutData] = useState({
    // Section Title & Subheading
    sectionLabel: "About Me",
    sectionHeadingPrefix: "Building Systems That ",
    sectionHeadingAccent: "Scale",
    sectionHeadingSuffix: " & Perform",
    ctaText: "Let's Talk",
    ctaLink: "#contact",

    // Left Profile Card
    profileInitials: "JI",
    profileName: "Jahidul Islam Shikdar",
    profileTitle: "Backend & DevOps Engineer",
    profileLocation: "Dhaka, Bangladesh 🇧🇩",
    isVerified: true,

    // Bio Narrative Paragraphs
    bioParagraph1: "I'm a Backend-focused Software Engineer with 2+ years of experience building and scaling production systems with NestJS and Node.js. Currently at Betopia Group, I design and own production backend services, manage AWS & Linux infrastructure, and automate CI/CD pipelines.",
    bioParagraph2: "I hold a B.Sc. in Computer Science & Engineering from AIUB (CGPA: 3.57 / 4.00), and authored a peer-reviewed research paper on Inception v3 Automated Retinopathy Detection using OCT Images published in IEEE BECITHCON 2025.",

    // 4 Engineering Principles Grid
    principles: [
      { id: "1", title: "Backend & System Design", subtitle: "NestJS, Node.js, Express & Microservices" },
      { id: "2", title: "Cloud & Infrastructure", subtitle: "AWS (EC2, S3, RDS, CDN) & Linux VPS" },
      { id: "3", title: "CI/CD & Containers", subtitle: "Docker, GitHub Actions & Nginx" },
      { id: "4", title: "Deep Learning Research", subtitle: "Inception v3 & OCT Medical Imaging" },
    ],

    // 3 Core Highlight Cards
    highlights: [
      {
        id: "1",
        label: "Backend & System Design",
        desc: "NestJS · Node.js · Express · Redis · BullMQ · PostgreSQL · MongoDB",
      },
      {
        id: "2",
        label: "DevOps & Cloud Infrastructure",
        desc: "AWS (EC2, S3, ELB, ASG, RDS, CDN) · Linux VPS · Docker · CI/CD",
      },
      {
        id: "3",
        label: "AI & Retinopathy Research",
        desc: "Inception v3 OCT Retinopathy Detection · IEEE BECITHCON 2025 Paper",
      },
    ],
  });

  const handleChange = (field: string, value: any) => {
    setAboutData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center font-bold">
            <User size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              About Section Manager (Complete Controls)
            </h3>
            <p className="text-xs text-slate-500">
              Manage section heading, profile card, location, 4 engineering principles &amp; 3 highlight cards
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="btn-primary-dark"
        >
          {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
          <span>{saved ? "Saved!" : "Save About Section"}</span>
        </motion.button>
      </motion.div>

      {/* Live Render Preview Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl relative overflow-hidden border border-slate-800"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3 relative z-10">
          <span className="flex items-center gap-2 font-mono font-bold text-teal-400">
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE ABOUT RENDER PREVIEW
          </span>
          <span className="text-[11px] bg-teal-500/20 text-teal-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-teal-500/30">Synchronized</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 relative z-10">
          {/* Profile Card Preview */}
          <div className="p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 font-extrabold text-lg flex items-center justify-center shadow-md">
                {aboutData.profileInitials}
              </div>
              <div>
                <div className="font-extrabold text-white text-sm flex items-center gap-1.5 font-sans">
                  <span>{aboutData.profileName}</span>
                  {aboutData.isVerified && <CheckCircle2 size={14} className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />}
                </div>
                <div className="text-xs text-teal-400 font-mono font-semibold">{aboutData.profileTitle}</div>
              </div>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono font-medium">
              <MapPin size={13} className="text-teal-400" /> {aboutData.profileLocation}
            </div>
          </div>

          {/* Bio Preview */}
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-teal-400 uppercase font-mono tracking-wider">{aboutData.sectionLabel}</span>
            <h3 className="text-lg font-extrabold text-white leading-tight font-sans">
              {aboutData.sectionHeadingPrefix}
              <span className="text-teal-400 drop-shadow-[0_0_12px_rgba(60,187,177,0.4)]">{aboutData.sectionHeadingAccent}</span>
              {aboutData.sectionHeadingSuffix}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
              {aboutData.bioParagraph1}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 1. Section Title & CTA Button Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Section Headings & Action Button
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Section Label</label>
            <input
              type="text"
              value={aboutData.sectionLabel}
              onChange={(e) => handleChange("sectionLabel", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Heading Prefix</label>
            <input
              type="text"
              value={aboutData.sectionHeadingPrefix}
              onChange={(e) => handleChange("sectionHeadingPrefix", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-teal-700">Gradient Accent Word</label>
            <input
              type="text"
              value={aboutData.sectionHeadingAccent}
              onChange={(e) => handleChange("sectionHeadingAccent", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-teal-200 bg-teal-50/50 font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Heading Suffix</label>
            <input
              type="text"
              value={aboutData.sectionHeadingSuffix}
              onChange={(e) => handleChange("sectionHeadingSuffix", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">CTA Button Text</label>
            <input
              type="text"
              value={aboutData.ctaText}
              onChange={(e) => handleChange("ctaText", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">CTA Target Link</label>
            <input
              type="text"
              value={aboutData.ctaLink}
              onChange={(e) => handleChange("ctaLink", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>
      </div>

      {/* 2. Left Profile Card Settings */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center justify-between">
          <span>Left Card Profile Badge & Location</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600 font-normal">Verified Status:</span>
            <button
              onClick={() => handleChange("isVerified", !aboutData.isVerified)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                aboutData.isVerified ? "bg-slate-900" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform ${
                  aboutData.isVerified ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Avatar Initials</label>
            <input
              type="text"
              value={aboutData.profileInitials}
              onChange={(e) => handleChange("profileInitials", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold uppercase"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Full Name</label>
            <input
              type="text"
              value={aboutData.profileName}
              onChange={(e) => handleChange("profileName", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Subtitle Role</label>
            <input
              type="text"
              value={aboutData.profileTitle}
              onChange={(e) => handleChange("profileTitle", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Location Tag</label>
            <input
              type="text"
              value={aboutData.profileLocation}
              onChange={(e) => handleChange("profileLocation", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
        </div>
      </div>

      {/* 3. Bio Paragraphs */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Biography Narrative Paragraphs
        </h4>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Paragraph 1 (Core Engineering Bio)</label>
            <textarea
              rows={3}
              value={aboutData.bioParagraph1}
              onChange={(e) => handleChange("bioParagraph1", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Paragraph 2 (AI Research Narrative)</label>
            <textarea
              rows={3}
              value={aboutData.bioParagraph2}
              onChange={(e) => handleChange("bioParagraph2", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* 4. Engineering Principles Grid (4 Items) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Engineering Focus Principles Grid (4 Items)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.principles.map((p, idx) => (
            <div key={p.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 font-mono">Item #{idx + 1}</div>
              <input
                type="text"
                placeholder="Title"
                value={p.title}
                onChange={(e) => {
                  const updated = [...aboutData.principles];
                  updated[idx].title = e.target.value;
                  setAboutData((prev) => ({ ...prev, principles: updated }));
                }}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white font-bold"
              />
              <input
                type="text"
                placeholder="Subtitle"
                value={p.subtitle}
                onChange={(e) => {
                  const updated = [...aboutData.principles];
                  updated[idx].subtitle = e.target.value;
                  setAboutData((prev) => ({ ...prev, principles: updated }));
                }}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white font-mono"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 5. Core Highlight Cards (3 Items) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Core Pillar Highlight Cards (3 Cards)
        </h4>

        <div className="space-y-3">
          {aboutData.highlights.map((h, idx) => (
            <div key={h.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-700">Card #{idx + 1} Title</label>
                <input
                  type="text"
                  value={h.label}
                  onChange={(e) => {
                    const updated = [...aboutData.highlights];
                    updated[idx].label = e.target.value;
                    setAboutData((prev) => ({ ...prev, highlights: updated }));
                  }}
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white font-bold"
                />
              </div>
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[11px] font-semibold text-slate-700">Card Subtitle / Description</label>
                <input
                  type="text"
                  value={h.desc}
                  onChange={(e) => {
                    const updated = [...aboutData.highlights];
                    updated[idx].desc = e.target.value;
                    setAboutData((prev) => ({ ...prev, highlights: updated }));
                  }}
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white font-mono"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
