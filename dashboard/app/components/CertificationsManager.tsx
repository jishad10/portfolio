"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Plus, Trash2, Save, CheckCircle2, ShieldCheck, Eye } from "lucide-react";

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  abbr: string;
  color: string;
  verifyLink: string;
}

export default function CertificationsManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Certifications",
    sectionHeadingPrefix: "Credentials & ",
    sectionHeadingAccent: "Verified Expertise",
    sectionHeadingSuffix: "",
    sectionSubheading: "Industry-recognized certifications validating cloud architecture, DevOps, and AI proficiency.",
  });

  const [certs, setCerts] = useState<CertItem[]>([
    { id: "1", title: "IBM DevOps and Software Engineering Professional Certificate", issuer: "IBM — Coursera", year: "Professional Certificate · Verified", abbr: "IBM", color: "#0F62FE", verifyLink: "https://www.coursera.org/professional-certificates/devops-and-software-engineering" },
    { id: "2", title: "Google Project Management Professional Certificate", issuer: "Google — Coursera", year: "Professional Certificate · Verified", abbr: "Google", color: "#4285F4", verifyLink: "https://www.coursera.org/professional-certificates/google-project-management" },
    { id: "3", title: "AWS Cloud Infrastructure & Services Specialization", issuer: "Amazon Web Services", year: "EC2, S3, RDS, ASG, ELB, CDN · Active", abbr: "AWS", color: "#FF9900", verifyLink: "#" },
    { id: "4", title: "Docker & CI/CD Pipeline Automation", issuer: "DevOps & Containers Specialization", year: "GitHub Actions, Docker & Nginx · Verified", abbr: "Docker", color: "#0DB7ED", verifyLink: "#" },
  ]);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addCert = () => {
    const newCert: CertItem = {
      id: Date.now().toString(),
      title: "New Professional Certification",
      issuer: "Issuing Organization",
      year: "Issued 2024 · Active",
      abbr: "CERT",
      color: "#3CBBB1",
      verifyLink: "#",
    };
    setCerts([newCert, ...certs]);
  };

  const deleteCert = (id: string) => {
    setCerts(certs.filter((c) => c.id !== id));
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
            <Award size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Certifications &amp; Verified Credentials ({certs.length} Badges)
            </h3>
            <p className="text-xs text-slate-500">
              Manage certification badges, abbreviation shields, verification URLs &amp; status lines
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addCert} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add Credential
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save Certifications"}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Live Preview Header */}
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE CERTIFICATIONS PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {certs.length} Active Badges
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

      {/* 2. Credentials Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certs.map((cert, idx) => (
          <div key={cert.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-slate-400 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-xs">
                  {cert.abbr}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-sans">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
              </div>

              <button onClick={() => deleteCert(cert.id)} className="text-slate-400 hover:text-slate-900 transition-colors p-1">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-600">Shield Abbreviation</label>
                <input
                  type="text"
                  value={cert.abbr}
                  onChange={(e) => {
                    const updated = [...certs];
                    updated[idx].abbr = e.target.value;
                    setCerts(updated);
                  }}
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono font-bold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-600">Issued Date & Status</label>
                <input
                  type="text"
                  value={cert.year}
                  onChange={(e) => {
                    const updated = [...certs];
                    updated[idx].year = e.target.value;
                    setCerts(updated);
                  }}
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
