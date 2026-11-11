"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Plus, Trash2, Save, CheckCircle2, Star, Eye } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export default function TestimonialsManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Testimonials",
    sectionHeadingPrefix: "What ",
    sectionHeadingAccent: "Collaborators Say",
    sectionHeadingSuffix: "",
    sectionSubheading: "Endorsements from CTOs, engineering managers, and academic researchers who have worked with me.",
  });

  const [items, setItems] = useState<TestimonialItem[]>([
    { id: "1", name: "Sarah Jenkins", role: "CTO", company: "CloudScale Technologies", quote: "Jahidul delivered our backend API platform on time and beyond scope. His Redis caching & queue implementation cut our API response times by 60%. A rare engineer who truly thinks in system architectures.", rating: 5 },
    { id: "2", name: "Marcus Thorne", role: "Engineering Manager", company: "DevOps Solutions", quote: "Outstanding DevOps work. Jahidul set up our entire AWS infrastructure using Terraform IaC and GitHub Actions CI/CD pipelines. Zero downtime since the migration — exactly the engineer we needed.", rating: 5 },
    { id: "3", name: "Dr. Amir Hossain", role: "Professor", company: "CS Department", quote: "His research contribution to our deep learning project was invaluable. Bridging production software engineering with AI research is rare — Jahidul does it naturally and published at a top conference.", rating: 5 },
    { id: "4", name: "Elena Rostova", role: "Lead Backend Developer", company: "SaaS Platform", quote: "Jahidul redesigned our multi-tenant auth microservice with JWT + refresh rotation. Clean architecture, thorough documentation, and an absolute pleasure to collaborate with.", rating: 5 },
  ]);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addItem = () => {
    const newItem: TestimonialItem = {
      id: Date.now().toString(),
      name: "New Client / Peer Name",
      role: "Engineering Lead",
      company: "Company Name",
      quote: "Write glowing recommendation quote here...",
      rating: 5,
    };
    setItems([newItem, ...items]);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
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
            <MessageSquareQuote size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Testimonials &amp; Peer Reviews ({items.length} Reviews)
            </h3>
            <p className="text-xs text-slate-500">
              Manage client quotes, engineering peer reviews &amp; 5-star ratings
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addItem} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add Review
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save Testimonials"}</span>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE TESTIMONIALS PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {items.length} Endorsements Mapped
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

      {/* 1. Section Title Settings */}
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

      {/* 2. Testimonials List */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={item.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-slate-400 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm font-sans">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-sans">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700">
                    {item.role} • <span className="text-slate-400 font-normal">{item.company}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: item.rating }).map((_, rIdx) => (
                    <Star key={rIdx} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <button onClick={() => deleteItem(item.id)} className="text-slate-400 hover:text-slate-900 transition-colors p-1 ml-2">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 italic leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              "{item.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
