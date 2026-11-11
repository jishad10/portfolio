"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Plus, Trash2, Edit3, Save, CheckCircle2, Calendar, MapPin, Building2, Eye } from "lucide-react";

interface JobEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
  accentColor: string;
}

export default function ExperienceManager() {
  const [saved, setSaved] = useState(false);

  // Section level headers
  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Experience",
    sectionHeadingPrefix: "My ",
    sectionHeadingAccent: "Professional",
    sectionHeadingSuffix: " Journey",
    sectionSubheading: "A proven track record — from building backend microservices to architecting cloud-native infrastructure.",
  });

  const [jobs, setJobs] = useState<JobEntry[]>([
    {
      id: "1",
      role: "Backend & DevOps Engineer | Previously Junior Backend Developer",
      company: "Betopia Group",
      period: "Apr 2025 — Present",
      type: "Full-time",
      location: "Mohakhali, Dhaka, Bangladesh",
      description: "Designing and owning production backend services, optimizing reliability patterns, and architecting AWS & Linux VPS infrastructure.",
      bullets: [
        "Design and own production backend services using NestJS, Node.js, TypeScript, Express, SQL/NoSQL databases, and Redis, covering API architecture, business logic, third-party integrations, and scalable service design.",
        "Engineer and optimize backend systems using caching, asynchronous processing, concurrency, rate limiting, and reliability patterns to improve performance, scalability, and system efficiency.",
        "Architect and maintain AWS and Linux VPS infrastructure, taking applications from staging to production through server configuration, DNS/domain setup, SSL/TLS, Nginx, networking, monitoring, security, and deployment troubleshooting.",
        "Automate deployment workflows using Docker and GitHub Actions CI/CD, reducing deployment time by ~70%, while applying system design principles and co-leading a 15+ member cross-functional engineering team.",
      ],
      tags: ["NestJS", "Node.js", "TypeScript", "AWS", "Docker", "GitHub Actions CI/CD", "Redis", "Linux VPS", "Nginx"],
      accentColor: "#3CBBB1",
    },
    {
      id: "2",
      role: "Software Engineer Intern",
      company: "Solutya Pvt. Ltd",
      period: "Nov 2024 — Feb 2025",
      type: "Internship",
      location: "Uttara, Dhaka, Bangladesh",
      description: "Developed and shipped production features across MERN and Next.js applications, contributing to backend functionality and integration.",
      bullets: [
        "Developed and shipped production features across MERN and Next.js applications, contributing to backend functionality, integration, and performance improvements while working with existing production codebases and delivery workflows.",
        "Collaborated with cross-functional engineering teams to implement RESTful APIs, optimize database operations, and ensure rapid feature delivery.",
      ],
      tags: ["Node.js", "Express", "Next.js", "MERN", "MongoDB", "REST APIs", "Git"],
      accentColor: "#2DD4BF",
    },
    {
      id: "3",
      role: "Undergraduate Software Engineer & AI Researcher",
      company: "American International University-Bangladesh (AIUB)",
      period: "Feb 2021 — Jun 2025",
      type: "B.Sc. in CSE (CGPA: 3.57)",
      location: "Dhaka, Bangladesh",
      description: "Graduated with B.Sc. in CSE (CGPA: 3.57 / 4.00), authoring an IEEE conference publication and engineering scalable project backends.",
      bullets: [
        "Authored peer-reviewed IEEE conference paper: Deep Learning Model (Inception v3) for Automated Retinopathy Detection using OCT Images (BECITHCON 2025, DOI: 10.1109/BECITHCON69222.2025.11504241).",
        "Engineered high-concurrency systems, real-time Socket.IO applications, and database-driven platforms across C++, C#, Python, and JavaScript.",
      ],
      tags: ["Python", "Inception v3", "Deep Learning", "C++", "C#", "SQL", "IEEE Publication"],
      accentColor: "#F59E0B",
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addJob = () => {
    const newJob: JobEntry = {
      id: Date.now().toString(),
      role: "New Engineering Role",
      company: "Company Name",
      period: "2024 — Present",
      type: "Full-time",
      location: "Remote",
      description: "Summary of responsibilities and technical ownership...",
      bullets: ["Achievement bullet point line 1..."],
      tags: ["Docker", "AWS", "Python"],
      accentColor: "#3CBBB1",
    };
    setJobs([newJob, ...jobs]);
    setEditingId(newJob.id);
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter((j) => j.id !== id));
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
            <Briefcase size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Experience Timeline Manager ({jobs.length} Positions)
            </h3>
            <p className="text-xs text-slate-500">
              Manage work history, company names, period badges, descriptions &amp; tech pills
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addJob} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add Job
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save Experience"}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Live Render Preview Header */}
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE EXPERIENCE RENDER PREVIEW
          </span>
          <span className="text-[11px] bg-teal-500/20 text-teal-300 font-mono font-bold px-2.5 py-0.5 rounded-full border border-teal-500/30">
            {jobs.length} Timeline Entries
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

        <div className="space-y-1 pt-1">
          <label className="text-xs font-semibold text-slate-700">Subheading Description</label>
          <input
            type="text"
            value={sectionHeaders.sectionSubheading}
            onChange={(e) => setSectionHeaders({ ...sectionHeaders, sectionSubheading: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
          />
        </div>
      </div>

      {/* 2. Timeline Job Cards List */}
      <div className="space-y-4">
        {jobs.map((job, idx) => (
          <div
            key={job.id}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-slate-400 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                  #{idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-base font-sans">
                    {job.role}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <span>{job.company}</span>
                    <span className="text-slate-400 font-mono font-normal">{job.period}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">{job.type}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingId(editingId === job.id ? null : job.id)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => deleteJob(job.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {job.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {job.tags.map((t, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200">
                  {t}
                </span>
              ))}
            </div>

            {/* Editable Fields if Expanded */}
            {editingId === job.id && (
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Role Title</label>
                    <input
                      type="text"
                      value={job.role}
                      onChange={(e) => {
                        const updated = [...jobs];
                        updated[idx].role = e.target.value;
                        setJobs(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Company Name</label>
                    <input
                      type="text"
                      value={job.company}
                      onChange={(e) => {
                        const updated = [...jobs];
                        updated[idx].company = e.target.value;
                        setJobs(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Employment Type</label>
                    <input
                      type="text"
                      value={job.type}
                      onChange={(e) => {
                        const updated = [...jobs];
                        updated[idx].type = e.target.value;
                        setJobs(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Period Range</label>
                    <input
                      type="text"
                      value={job.period}
                      onChange={(e) => {
                        const updated = [...jobs];
                        updated[idx].period = e.target.value;
                        setJobs(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Location</label>
                    <input
                      type="text"
                      value={job.location}
                      onChange={(e) => {
                        const updated = [...jobs];
                        updated[idx].location = e.target.value;
                        setJobs(updated);
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Role Summary Description</label>
                  <textarea
                    rows={2}
                    value={job.description}
                    onChange={(e) => {
                      const updated = [...jobs];
                      updated[idx].description = e.target.value;
                      setJobs(updated);
                    }}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200"
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
