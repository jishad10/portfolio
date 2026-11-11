"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Save, CheckCircle2, Eye, Activity, Star, GitFork, Code2 } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function GitHubManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "GitHub",
    sectionHeadingPrefix: "Open Source ",
    sectionHeadingAccent: "Activity",
    sectionHeadingSuffix: "",
    sectionSubheading: "A year of continuous commits, open-source code, and public repositories.",
    githubProfileBtnText: "Open GitHub Profile",
    githubProfileBtnLink: "https://github.com/",
  });

  const [config, setConfig] = useState({
    username: "jahidul-islam",
    showHeatmap: true,
    totalCommits: "1,240+",
    publicRepos: "42",
    starsEarned: "380+",
    forksCount: "95+",
  });

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
            <GithubIcon size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              GitHub Activity &amp; Pinned Metrics Manager
            </h3>
            <p className="text-xs text-slate-500">
              Configure open source commits, public repo counts, star counters &amp; heatmap grid
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
          <span>{saved ? "Saved!" : "Save GitHub Settings"}</span>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE GITHUB ACTIVITY PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {config.totalCommits} Commits Mapped
          </span>
        </div>

        <div className="space-y-1 relative z-10">
          <span className="text-[11px] font-extrabold text-teal-400 font-mono uppercase tracking-wider">{sectionHeaders.sectionLabel}</span>
          <h3 className="text-xl font-extrabold text-white font-sans">
            {sectionHeaders.sectionHeadingPrefix}
            <span className="text-teal-400 drop-shadow-[0_0_12px_rgba(60,187,177,0.4)]">{sectionHeaders.sectionHeadingAccent}</span>
            {sectionHeaders.sectionHeadingSuffix}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">{sectionHeaders.sectionSubheading}</p>
        </div>
      </motion.div>

      {/* 1. Section Title & Profile Link Settings */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Section Title & Profile Link Settings
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Section Label</label>
            <input
              type="text"
              value={sectionHeaders.sectionLabel}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, sectionLabel: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Heading Prefix</label>
            <input
              type="text"
              value={sectionHeaders.sectionHeadingPrefix}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, sectionHeadingPrefix: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-teal-700">Gradient Accent Word</label>
            <input
              type="text"
              value={sectionHeaders.sectionHeadingAccent}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, sectionHeadingAccent: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-teal-200 bg-teal-50/50 font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Heading Suffix</label>
            <input
              type="text"
              value={sectionHeaders.sectionHeadingSuffix}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, sectionHeadingSuffix: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">GitHub Button Text</label>
            <input
              type="text"
              value={sectionHeaders.githubProfileBtnText}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, githubProfileBtnText: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">GitHub Profile Link</label>
            <input
              type="text"
              value={sectionHeaders.githubProfileBtnLink}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, githubProfileBtnLink: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>
      </div>

      {/* 2. Metrics Strip Cards Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          GitHub Open Source Stats Strip (4 Metrics)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Total Commits Display</label>
            <input
              type="text"
              value={config.totalCommits}
              onChange={(e) => setConfig({ ...config, totalCommits: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Public Repos Count</label>
            <input
              type="text"
              value={config.publicRepos}
              onChange={(e) => setConfig({ ...config, publicRepos: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Stars Earned</label>
            <input
              type="text"
              value={config.starsEarned}
              onChange={(e) => setConfig({ ...config, starsEarned: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Forks Count</label>
            <input
              type="text"
              value={config.forksCount}
              onChange={(e) => setConfig({ ...config, forksCount: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono font-bold"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Show Contribution Heatmap Grid</h4>
            <p className="text-xs text-slate-500">Display 365-day commit activity block matrix</p>
          </div>

          <button
            onClick={() => setConfig({ ...config, showHeatmap: !config.showHeatmap })}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
              config.showHeatmap ? "bg-slate-900" : "bg-slate-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                config.showHeatmap ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
