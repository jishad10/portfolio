"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Plus, Trash2, Edit3, Save, CheckCircle2, Star, Eye, Terminal } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

interface ProjectEntry {
  id: string;
  title: string;
  category: string;
  description: string;
  metric: string;
  stars: number;
  size: "large" | "small";
  archSnippet?: string;
  achievements: string[];
  tags: string[];
}

export default function ProjectsManager() {
  const [saved, setSaved] = useState(false);

  // Section level headers
  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Projects",
    sectionHeadingPrefix: "Featured ",
    sectionHeadingAccent: "Engineering",
    sectionHeadingSuffix: " Work",
    sectionSubheading: "Production-ready backend platforms, DevOps pipelines, and AI research models.",
    githubRepoBtnText: "View GitHub Repos",
    githubRepoBtnLink: "https://github.com/",
  });

  const [projects, setProjects] = useState<ProjectEntry[]>([
    {
      id: "1",
      title: "Beatboks Music Platform",
      category: "Backend & APIs",
      description: "Scalable NestJS backend for a Spotify-like music platform serving 10,000+ users, implementing music catalog, playlists, search, library, subscriptions, and user workflows.",
      metric: "10k+ Users · ~85% Faster",
      stars: 142,
      size: "large",
      archSnippet: "NestJS API -> Redis Aggregation -> BullMQ Queue -> AWS (EC2/S3/ELB/ASG/CDN)",
      achievements: [
        "Designed a Redis/BullMQ asynchronous pipeline that reduced bulk upload processing time by ~85% (from 45 min to 7 min) through concurrent background processing.",
        "Designed and deployed scalable AWS infrastructure using EC2, S3, ELB, ASG, and CDN with Docker and GitHub Actions CI/CD; Redis-based aggregation reduced database writes by ~90%.",
      ],
      tags: ["NestJS", "MongoDB", "Redis", "BullMQ", "AWS (EC2, S3, ELB, ASG)", "Docker", "CI/CD"],
    },
    {
      id: "2",
      title: "Hoplift – Ride Sharing Platform",
      category: "Backend & APIs",
      description: "High-concurrency ride-sharing backend platform powering Flutter mobile app with geospatial matching, booking, seat management, ride lifecycle, ratings, and real-time Socket.IO chat.",
      metric: "Real-time Matching",
      stars: 88,
      size: "small",
      achievements: [
        "Engineered ride-matching, geospatial search, booking, seat management, ride lifecycle, ratings, notifications, and real-time chat features.",
        "Implemented automated scheduled background jobs for ride and chat lifecycle state management with zero-lag WebSocket delivery.",
      ],
      tags: ["Node.js", "Express", "MongoDB", "Socket.IO", "Geospatial Queries", "Scheduled Jobs"],
    },
    {
      id: "3",
      title: "Returns Logistics Platform",
      category: "DevOps & Cloud",
      description: "Multi-role (user/driver/admin) logistics platform with subscription-based Stripe payments, Google Maps route optimization, and full-stack production hosting on Linux VPS.",
      metric: "Multi-Role · Linux VPS",
      stars: 76,
      size: "small",
      achievements: [
        "Built multi-role architecture with automated Stripe subscription billing and payout management.",
        "Configured and deployed full-stack system onto Linux VPS with Google Maps route optimization, Nginx reverse proxy, SSL/TLS, and DNS.",
      ],
      tags: ["Node.js", "Express", "MongoDB", "Stripe", "Google Maps API", "Linux VPS", "Nginx"],
    },
    {
      id: "4",
      title: "Deep Learning Retinopathy Detection (Inception v3)",
      category: "AI Research",
      description: "Deep learning computer vision model (Inception v3) for automated retinopathy detection using Optical Coherence Tomography (OCT) retinal images, published in IEEE BECITHCON 2025.",
      metric: "IEEE BECITHCON 2025 Paper",
      stars: 110,
      size: "large",
      archSnippet: "OCT Retinal Images -> Preprocessing Pipeline -> Inception v3 Feature Extractor -> Softmax Classifier",
      achievements: [
        "Trained and fine-tuned Inception v3 convolutional neural network for automated detection of retinopathy from OCT retinal scans.",
        "Peer-reviewed and published in IEEE Conference Proceedings (BECITHCON 2025, DOI: 10.1109/BECITHCON69222.2025.11504241).",
      ],
      tags: ["Python", "Inception v3", "Deep Learning", "OCT Images", "Computer Vision", "IEEE BECITHCON"],
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addProject = () => {
    const newProj: ProjectEntry = {
      id: Date.now().toString(),
      title: "New Scalable Project",
      category: "Backend & APIs",
      description: "Detailed description of system architecture and technical features...",
      metric: "Active Metric",
      stars: 42,
      size: "small",
      achievements: ["Key project result 1..."],
      tags: ["FastAPI", "Go", "Docker"],
    };
    setProjects([newProj, ...projects]);
    setEditingId(newProj.id);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
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
            <FolderGit2 size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Bento Grid Projects Manager ({projects.length} Projects)
            </h3>
            <p className="text-xs text-slate-500">
              Manage Bento Grid layout sizes, system flow snippets, stars count &amp; categories
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addProject} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add Project
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save Projects"}</span>
          </motion.button>
        </div>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE BENTO GRID PREVIEW
          </span>
          <span className="text-[11px] bg-teal-500/20 text-teal-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-teal-500/30">
            {projects.length} Active Bento Cards
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

      {/* 1. Section Level Headers */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Section Title & GitHub Button Settings
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
            <label className="text-xs font-semibold text-slate-700">GitHub Button Label</label>
            <input
              type="text"
              value={sectionHeaders.githubRepoBtnText}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, githubRepoBtnText: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">GitHub Repos Link</label>
            <input
              type="text"
              value={sectionHeaders.githubRepoBtnLink}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, githubRepoBtnLink: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>
      </div>

      {/* 2. Projects List */}
      <div className="space-y-4">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-slate-400 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                  #{idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-base font-sans flex items-center gap-2">
                    <span>{proj.title}</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-mono border border-slate-200">
                      {proj.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-mono border border-teal-200">
                      {proj.size.toUpperCase()} CARD
                    </span>
                  </h4>
                  <p className="text-xs text-slate-500 font-mono flex items-center gap-3 mt-0.5">
                    <span>Metric: {proj.metric}</span>
                    <span className="flex items-center gap-1 text-amber-600 font-bold">
                      <Star size={12} className="fill-amber-500" /> {proj.stars}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingId(editingId === proj.id ? null : proj.id)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => deleteProject(proj.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {proj.description}
            </p>

            {proj.archSnippet && (
              <div className="text-xs font-mono bg-slate-900 text-teal-300 p-2.5 rounded-xl flex items-center gap-2">
                <Terminal size={14} className="text-teal-400" />
                <span className="text-slate-400">System Flow:</span> {proj.archSnippet}
              </div>
            )}

            {/* Editable Expanded Details */}
            {editingId === proj.id && (
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Project Title</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].title = e.target.value;
                        setProjects(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Category</label>
                    <select
                      value={proj.category}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].category = e.target.value;
                        setProjects(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white"
                    >
                      <option value="Backend & APIs">Backend & APIs</option>
                      <option value="DevOps & Cloud">DevOps & Cloud</option>
                      <option value="AI Research">AI Research</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Bento Card Layout Size</label>
                    <select
                      value={proj.size}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].size = e.target.value as "large" | "small";
                        setProjects(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 bg-white font-bold"
                    >
                      <option value="large">Large (2 Columns)</option>
                      <option value="small">Small (1 Column)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Metric Badge</label>
                    <input
                      type="text"
                      value={proj.metric}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].metric = e.target.value;
                        setProjects(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">GitHub Stars Count</label>
                    <input
                      type="number"
                      value={proj.stars}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].stars = Number(e.target.value);
                        setProjects(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
                    />
                  </div>
                </div>

                {proj.size === "large" && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">System Flow Architecture Snippet</label>
                    <input
                      type="text"
                      value={proj.archSnippet || ""}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].archSnippet = e.target.value;
                        setProjects(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
