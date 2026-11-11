"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Save, CheckCircle2, MapPin, Clock, Eye } from "lucide-react";

export default function ContactManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Contact",
    sectionHeadingPrefix: "Let's ",
    sectionHeadingAccent: "Connect",
    sectionHeadingSuffix: " & Collaborate",
    sectionSubheading: "Whether it's an engineering role, contract project, or AI research opportunity — I'd love to hear from you.",
    availabilityStatus: "Open for Opportunities",
    availabilityText: "Available for full-time remote backend/DevOps roles, technical consulting contracts, and AI research projects.",
    responseTime: "< 12 Hours",
  });

  const [channels, setChannels] = useState({
    email: "jishadfuture@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    scholar: "https://scholar.google.com/",
    location: "Dhaka, Bangladesh 🇧🇩 · Available for Worldwide Remote Work",
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
            <Mail size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Contact Channels &amp; Inbox Settings Manager
            </h3>
            <p className="text-xs text-slate-500">
              Manage email address, social channels, availability banner &amp; response SLA metrics
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
          <span>{saved ? "Saved!" : "Save Contact Settings"}</span>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE CONTACT PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            SLA: {sectionHeaders.responseTime}
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

      {/* 2. Availability Status Card Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
          <Clock size={16} className="text-emerald-600" /> Availability & SLA Response Settings
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Availability Status Badge</label>
            <input
              type="text"
              value={sectionHeaders.availabilityStatus}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, availabilityStatus: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold text-emerald-700 bg-emerald-50/40"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Average Response SLA</label>
            <input
              type="text"
              value={sectionHeaders.responseTime}
              onChange={(e) => setSectionHeaders({ ...sectionHeaders, responseTime: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700">Availability Description Body</label>
          <textarea
            rows={2}
            value={sectionHeaders.availabilityText}
            onChange={(e) => setSectionHeaders({ ...sectionHeaders, availabilityText: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200 leading-relaxed"
          />
        </div>
      </div>

      {/* 3. Direct Channels Form */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Direct Channels & Social Links
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Direct Email Address</label>
            <input
              type="email"
              value={channels.email}
              onChange={(e) => setChannels({ ...channels, email: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono font-bold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">GitHub Profile URL</label>
            <input
              type="text"
              value={channels.github}
              onChange={(e) => setChannels({ ...channels, github: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">LinkedIn URL</label>
            <input
              type="text"
              value={channels.linkedin}
              onChange={(e) => setChannels({ ...channels, linkedin: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Google Scholar URL</label>
            <input
              type="text"
              value={channels.scholar}
              onChange={(e) => setChannels({ ...channels, scholar: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>

        <div className="space-y-1 pt-2 border-t border-slate-100">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <MapPin size={14} className="text-teal-600" /> Location Footer Pill
          </label>
          <input
            type="text"
            value={channels.location}
            onChange={(e) => setChannels({ ...channels, location: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-medium"
          />
        </div>
      </div>
    </div>
  );
}
