"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Save, CheckCircle2, FileText, ExternalLink, Sparkles, Award, Calendar, Eye } from "lucide-react";

export default function ResearchManager() {
  const [saved, setSaved] = useState(false);

  const [researchData, setResearchData] = useState({
    // Section Headers
    sectionLabel: "Research",
    sectionHeadingPrefix: "Publications & ",
    sectionHeadingAccent: "Academic Focus",
    sectionHeadingSuffix: "",
    sectionSubheading: "Bridging production software engineering with cutting-edge academic research in Deep Learning & AI.",

    // Academic Vision Statement Card
    visionBadge: "RESEARCH PHILOSOPHY & GRADUATE GOALS",
    visionQuote: "My goal is to bridge high-throughput software systems engineering with rigorous academic research through graduate study — innovating in computer vision, deep neural networks, and privacy-preserving machine learning.",
    visionAuthor: "— Jahidul Islam Shikdar · Backend & DevOps Engineer · AI Researcher",
    visionTopics: ["Inception v3", "OCT Retinopathy", "Deep Learning", "Computer Vision", "Medical AI"],

    // Featured Publication Card
    paperTitle: "Deep Learning Model (Inception v3) for Automated Retinopathy Detection using OCT Images",
    paperVenue: "IEEE Conference — BECITHCON 2025",
    paperYear: "2025",
    paperType: "IEEE Conference Paper",
    paperStatus: "Published & Peer-Reviewed",
    doiLink: "https://doi.org/10.1109/BECITHCON69222.2025.11504241",
    pdfLink: "https://doi.org/10.1109/BECITHCON69222.2025.11504241",
    contributions: [
      "Trained and fine-tuned Inception v3 deep convolutional neural network for automated detection of retinopathy from OCT retinal scans.",
      "Engineered an automated preprocessing, augmentation, and feature extraction pipeline for high-precision diagnostic classification.",
      "Peer-reviewed and published in IEEE BECITHCON 2025 conference proceedings (DOI: 10.1109/BECITHCON69222.2025.11504241).",
    ],
    paperTags: ["Inception v3", "OCT Images", "Deep Learning", "Computer Vision", "Medical AI", "IEEE Xplore", "Python"],
  });

  const handleChange = (field: string, value: any) => {
    setResearchData((prev) => ({ ...prev, [field]: value }));
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
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Academic Research &amp; Publications Manager
            </h3>
            <p className="text-xs text-slate-500">
              Manage research vision quote, paper titles, peer-reviewed venues, DOI links &amp; contributions
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
          <span>{saved ? "Saved!" : "Save Research"}</span>
        </motion.button>
      </motion.div>

      {/* Live Preview Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-3xl bg-slate-950 text-white space-y-3 shadow-xl relative overflow-hidden border border-slate-800"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3 relative z-10">
          <span className="flex items-center gap-2 font-mono font-bold text-teal-400">
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE RESEARCH PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {researchData.paperStatus}
          </span>
        </div>

        <div className="space-y-2 pt-1 relative z-10">
          <span className="text-[11px] font-extrabold text-teal-400 font-mono uppercase tracking-wider">{researchData.sectionLabel}</span>
          <h3 className="text-xl font-extrabold text-white font-sans">
            {researchData.sectionHeadingPrefix}
            <span className="text-teal-400 drop-shadow-[0_0_12px_rgba(60,187,177,0.4)]">{researchData.sectionHeadingAccent}</span>
            {researchData.sectionHeadingSuffix}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans font-semibold">
            Paper: "{researchData.paperTitle}" — <span className="text-teal-400 font-mono">{researchData.paperVenue} ({researchData.paperYear})</span>
          </p>
        </div>
      </motion.div>

      {/* 1. Section Title Settings */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Section Headings Settings
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Section Label</label>
            <input
              type="text"
              value={researchData.sectionLabel}
              onChange={(e) => handleChange("sectionLabel", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Heading Prefix</label>
            <input
              type="text"
              value={researchData.sectionHeadingPrefix}
              onChange={(e) => handleChange("sectionHeadingPrefix", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-teal-700">Gradient Accent Word</label>
            <input
              type="text"
              value={researchData.sectionHeadingAccent}
              onChange={(e) => handleChange("sectionHeadingAccent", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-teal-200 bg-teal-50/50 font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Heading Suffix</label>
            <input
              type="text"
              value={researchData.sectionHeadingSuffix}
              onChange={(e) => handleChange("sectionHeadingSuffix", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700">Subheading Description</label>
          <input
            type="text"
            value={researchData.sectionSubheading}
            onChange={(e) => handleChange("sectionSubheading", e.target.value)}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
          />
        </div>
      </div>

      {/* 2. Research Vision Statement Card Settings */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
          <Sparkles size={16} className="text-slate-900" />
          Graduate Study & Research Vision Card
        </h4>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Card Badge Title</label>
            <input
              type="text"
              value={researchData.visionBadge}
              onChange={(e) => handleChange("visionBadge", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono uppercase"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Graduate Philosophy Quote</label>
            <textarea
              rows={3}
              value={researchData.visionQuote}
              onChange={(e) => handleChange("visionQuote", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 italic leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Author Attribution Line</label>
            <input
              type="text"
              value={researchData.visionAuthor}
              onChange={(e) => handleChange("visionAuthor", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>
      </div>

      {/* 3. Featured Peer-Reviewed Publication Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
          <Award size={16} className="text-slate-900" />
          Featured Peer-Reviewed Conference Paper
        </h4>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Paper Title</label>
            <input
              type="text"
              value={researchData.paperTitle}
              onChange={(e) => handleChange("paperTitle", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 font-bold"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Academic Venue / Conference</label>
              <input
                type="text"
                value={researchData.paperVenue}
                onChange={(e) => handleChange("paperVenue", e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-semibold text-teal-800"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Publication Status Badge</label>
              <input
                type="text"
                value={researchData.paperStatus}
                onChange={(e) => handleChange("paperStatus", e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Paper Type</label>
              <input
                type="text"
                value={researchData.paperType}
                onChange={(e) => handleChange("paperType", e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Publication Year</label>
              <input
                type="text"
                value={researchData.paperYear}
                onChange={(e) => handleChange("paperYear", e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">DOI / Paper Action Link</label>
              <input
                type="text"
                value={researchData.doiLink}
                onChange={(e) => handleChange("doiLink", e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
