"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookMarked, Plus, Trash2, Save, CheckCircle2, Eye, Edit3 } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  story: string;
}

export default function MyStoryManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "My Story",
    sectionHeadingPrefix: "The ",
    sectionHeadingAccent: "Engineering",
    sectionHeadingSuffix: " Journey",
    sectionSubheading: "From writing first lines of code to architecting cloud-native systems and publishing AI research.",
  });

  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: "1", year: "2021", title: "AIUB Computer Science Foundation", story: "Began B.Sc. in Computer Science and Engineering at AIUB (graduated CGPA: 3.57 / 4.00), building a strong foundation in C++, C#, algorithms, and system programming." },
    { id: "2", year: "2022 — 2023", title: "Backend & Systems Deep Dive", story: "Specialized in backend engineering with Node.js, Express, MongoDB, PostgreSQL, and Redis caching. Built high-concurrency real-time features using Socket.IO." },
    { id: "3", year: "2024", title: "Solutya Pvt. Ltd & Professional Certs", story: "Joined Solutya as Software Engineer Intern, shipping production features across MERN and Next.js applications. Earned IBM DevOps and Google Project Management Professional Certificates." },
    { id: "4", year: "2025", title: "IEEE BECITHCON Publication", story: "Authored peer-reviewed IEEE conference paper on Inception v3 Deep Learning for Automated Retinopathy Detection using OCT Images (DOI: 10.1109/BECITHCON69222.2025.11504241)." },
    { id: "5", year: "2025 — Present", title: "Betopia Group (Backend & DevOps Engineer)", story: "Designing scalable NestJS backend services, architecting AWS and Linux VPS infrastructure, automating CI/CD with Docker & GitHub Actions (~70% deployment speedup), and co-leading engineering initiatives." },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addMilestone = () => {
    const newItem: Milestone = {
      id: Date.now().toString(),
      year: "2025",
      title: "New Journey Milestone",
      story: "Detailed story narrative...",
    };
    setMilestones([...milestones, newItem]);
    setEditingId(newItem.id);
  };

  const deleteMilestone = (id: string) => {
    setMilestones(milestones.filter((m) => m.id !== id));
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
            <BookMarked size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              My Story Timeline Manager ({milestones.length} Milestones)
            </h3>
            <p className="text-xs text-slate-500">
              Manage life story milestones, year shields, and career evolution narratives
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addMilestone} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add Milestone
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save Story"}</span>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE STORY PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {milestones.length} Milestones Timeline
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
          Section Title & Subheading Settings
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

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700">Subheading Description</label>
          <input
            type="text"
            value={sectionHeaders.sectionSubheading}
            onChange={(e) => setSectionHeaders({ ...sectionHeaders, sectionSubheading: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
          />
        </div>
      </div>

      {/* 2. Milestones List */}
      <div className="space-y-4">
        {milestones.map((m, idx) => (
          <div key={m.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-slate-400 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold font-mono">
                  {m.year}
                </span>
                <h4 className="font-bold text-slate-900 text-base font-sans">
                  {m.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingId(editingId === m.id ? null : m.id)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <Edit3 size={16} />
                </button>
                <button onClick={() => deleteMilestone(m.id)} className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {m.story}
            </p>

            {editingId === m.id && (
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Year Shield Label</label>
                    <input
                      type="text"
                      value={m.year}
                      onChange={(e) => {
                        const updated = [...milestones];
                        updated[idx].year = e.target.value;
                        setMilestones(updated);
                      }}
                      className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono font-bold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Milestone Title</label>
                    <input
                      type="text"
                      value={m.title}
                      onChange={(e) => {
                        const updated = [...milestones];
                        updated[idx].title = e.target.value;
                        setMilestones(updated);
                      }}
                      className="w-full text-xs p-2 rounded-lg border border-slate-200 font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Milestone Story Body</label>
                  <textarea
                    rows={2}
                    value={m.story}
                    onChange={(e) => {
                      const updated = [...milestones];
                      updated[idx].story = e.target.value;
                      setMilestones(updated);
                    }}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 leading-relaxed"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
