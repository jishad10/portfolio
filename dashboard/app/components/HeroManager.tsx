"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Save, CheckCircle2, Terminal, Server, Cloud, Eye, ArrowRight, Download, Menu, Shield } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function HeroManager() {
  const [saved, setSaved] = useState(false);

  // Complete state matching Navbar.tsx & Hero.tsx properties
  const [formData, setFormData] = useState({
    // Navbar Properties
    logoInitials: "JI",
    logoTitle: "Jahidul",
    logoSublabel: "DevOps & AI",
    navCtaText: "Hire Me",
    navCtaLink: "#contact",

    // Hero Badge & Headline
    statusBadgeText: "Available for Full-Time & Research Roles",
    isAvailable: true,
    headlinePart1: "Backend & ",
    headlineAccent1: "DevOps",
    headlinePart2: "Engineer + ",
    headlineAccent2: "AI",
    headlinePart3: " Researcher",
    bioText:
      "Backend-focused Software Engineer with 2+ years of experience building scalable production systems using NestJS, Node.js, AWS, Docker, and CI/CD. Author of an IEEE BECITHCON 2025 deep learning publication.",

    // Hero Action Buttons
    ctaPrimaryText: "View Projects",
    ctaPrimaryLink: "#projects",
    ctaSecondaryText: "Resume",
    resumeLink: "/resume.pdf",
    ctaTertiaryText: "GitHub",
    githubLink: "https://github.com/",

    // Hero Stats Cards
    stat1Value: "2+",
    stat1Label: "Years Experience",
    stat2Value: "10k+",
    stat2Label: "Users Scaled",
    stat3Value: "1",
    stat3Label: "IEEE Publication",
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Navbar &amp; Hero Section Manager
            </h3>
            <p className="text-xs text-slate-500">
              Control logo brand text, navbar CTA button, availability badge, hero headline &amp; stats cards
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
          <span>{saved ? "Changes Saved!" : "Save Navbar & Hero"}</span>
        </motion.button>
      </motion.div>

      {/* Live Visual Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl relative overflow-hidden border border-slate-800"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3.5 relative z-10">
          {/* Navbar Preview Bar */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 font-extrabold text-xs flex items-center justify-center shadow-md">
              {formData.logoInitials}
            </div>
            <div>
              <div className="font-extrabold text-white text-xs">{formData.logoTitle}<span className="text-teal-400">.</span></div>
              <div className="text-[10px] text-teal-400 font-mono font-semibold">{formData.logoSublabel}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-bold text-[11px] border border-teal-500/40 font-mono shadow-xs">
              {formData.navCtaText}
            </span>
          </div>
        </div>

        {/* Hero Preview */}
        <div className="space-y-3.5 pt-2 relative z-10">
          {formData.isAvailable && (
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs px-3.5 py-1 rounded-full font-mono font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {formData.statusBadgeText}
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl font-extrabold font-sans leading-tight tracking-tight">
            {formData.headlinePart1}
            <span className="text-teal-400 drop-shadow-[0_0_15px_rgba(60,187,177,0.4)]">{formData.headlineAccent1}</span>
            <br />
            {formData.headlinePart2}
            <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">{formData.headlineAccent2}</span>
            {formData.headlinePart3}
          </h1>

          <p className="text-xs text-slate-300 max-w-xl leading-relaxed font-sans">
            {formData.bioText}
          </p>

          {/* CTA Preview */}
          <div className="flex items-center gap-2 pt-1 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-xl bg-teal-400 text-slate-950 font-extrabold flex items-center gap-1.5 shadow-md">
              {formData.ctaPrimaryText} <ArrowRight size={13} />
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 flex items-center gap-1.5 font-semibold">
              <Download size={13} /> {formData.ctaSecondaryText}
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 flex items-center gap-1.5 font-semibold">
              <GithubIcon size={13} /> {formData.ctaTertiaryText}
            </span>
          </div>
        </div>
      </motion.div>

      {/* 1. Navbar Brand & CTA Manager Card */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
          <Menu size={16} className="text-slate-900" />
          <span>Navbar Brand & Header CTA Settings</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Logo Initials (Avatar)</label>
            <input
              type="text"
              value={formData.logoInitials}
              onChange={(e) => handleChange("logoInitials", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold uppercase"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Brand Name Title</label>
            <input
              type="text"
              value={formData.logoTitle}
              onChange={(e) => handleChange("logoTitle", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Sub-label Text</label>
            <input
              type="text"
              value={formData.logoSublabel}
              onChange={(e) => handleChange("logoSublabel", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Header CTA Button Text</label>
            <input
              type="text"
              value={formData.navCtaText}
              onChange={(e) => handleChange("navCtaText", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold"
            />
          </div>
        </div>
      </div>

      {/* 2. Hero Badge & CTA Links Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Availability Badge Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
          <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Availability Badge Settings
          </h4>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700">Badge Status Text</label>
            <input
              type="text"
              value={formData.statusBadgeText}
              onChange={(e) => handleChange("statusBadgeText", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-slate-900"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-semibold text-slate-700">Pulse Dot Indicator Active</span>
            <button
              onClick={() => handleChange("isAvailable", !formData.isAvailable)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                formData.isAvailable ? "bg-slate-900" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  formData.isAvailable ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Action Buttons Manager */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm font-sans">
            Hero CTA Buttons & Links
          </h4>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-semibold text-slate-700">CTA 1 Label</label>
              <input
                type="text"
                value={formData.ctaPrimaryText}
                onChange={(e) => handleChange("ctaPrimaryText", e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-700">CTA 1 Target Link</label>
              <input
                type="text"
                value={formData.ctaPrimaryLink}
                onChange={(e) => handleChange("ctaPrimaryLink", e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-semibold text-slate-700">Resume Button Label</label>
              <input
                type="text"
                value={formData.ctaSecondaryText}
                onChange={(e) => handleChange("ctaSecondaryText", e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-700">Resume PDF Link</label>
              <input
                type="text"
                value={formData.resumeLink}
                onChange={(e) => handleChange("resumeLink", e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] font-semibold text-slate-700">GitHub Button Label</label>
              <input
                type="text"
                value={formData.ctaTertiaryText}
                onChange={(e) => handleChange("ctaTertiaryText", e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-700">GitHub Profile Link</label>
              <input
                type="text"
                value={formData.githubLink}
                onChange={(e) => handleChange("githubLink", e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Headline & Bio Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-5">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Hero Headline & Bio Paragraph
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Prefix Text</label>
            <input
              type="text"
              value={formData.headlinePart1}
              onChange={(e) => handleChange("headlinePart1", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-200"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-teal-700">Accent 1 (Cyan/Teal)</label>
            <input
              type="text"
              value={formData.headlineAccent1}
              onChange={(e) => handleChange("headlineAccent1", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-teal-200 bg-teal-50/50 font-bold"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-amber-700">Accent 2 (Warm Amber)</label>
            <input
              type="text"
              value={formData.headlineAccent2}
              onChange={(e) => handleChange("headlineAccent2", e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-amber-200 bg-amber-50/50 font-bold"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-700">Hero Bio Paragraph</label>
          <textarea
            rows={4}
            value={formData.bioText}
            onChange={(e) => handleChange("bioText", e.target.value)}
            className="w-full text-xs p-3 rounded-xl border border-slate-200 leading-relaxed"
          />
        </div>
      </div>

      {/* 4. Hero Stats Cards Manager */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Hero Bottom Metrics Cards (3 Cards)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Terminal size={16} />
              <span>Card 1</span>
            </div>
            <input
              type="text"
              placeholder="Value e.g. 3+"
              value={formData.stat1Value}
              onChange={(e) => handleChange("stat1Value", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white font-bold"
            />
            <input
              type="text"
              placeholder="Label e.g. Years Experience"
              value={formData.stat1Label}
              onChange={(e) => handleChange("stat1Label", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white"
            />
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Server size={16} />
              <span>Card 2</span>
            </div>
            <input
              type="text"
              placeholder="Value e.g. 15+"
              value={formData.stat2Value}
              onChange={(e) => handleChange("stat2Value", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white font-bold"
            />
            <input
              type="text"
              placeholder="Label e.g. Projects Shipped"
              value={formData.stat2Label}
              onChange={(e) => handleChange("stat2Label", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white"
            />
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Cloud size={16} />
              <span>Card 3</span>
            </div>
            <input
              type="text"
              placeholder="Value e.g. 1"
              value={formData.stat3Value}
              onChange={(e) => handleChange("stat3Value", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white font-bold"
            />
            <input
              type="text"
              placeholder="Label e.g. AI Publication"
              value={formData.stat3Label}
              onChange={(e) => handleChange("stat3Label", e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
