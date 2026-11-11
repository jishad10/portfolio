"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Plus, Trash2, Save, CheckCircle2, Eye, Edit3 } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "FAQ",
    sectionHeadingPrefix: "Frequently Asked ",
    sectionHeadingAccent: "Questions",
    sectionHeadingSuffix: "",
    sectionSubheading: "Answers to common questions from recruiters, engineering leads, and academic research collaborators.",
    ctaBannerTitle: "Have a question not listed here?",
    ctaBannerSub: "Feel free to send a direct message. I reply within 12 hours.",
    ctaBannerBtnText: "Ask a Question",
  });

  const [faqs, setFaqs] = useState<FAQItem[]>([
    { id: "1", category: "Recruitment & Roles", question: "Are you available for full-time or remote backend/DevOps positions?", answer: "Yes — I am actively open to full-time remote backend engineering and DevOps roles, contract engagements, and technical consulting. I am based in Bangladesh and available for global remote work." },
    { id: "2", category: "Tech Stack & Tools", question: "What is your primary engineering technology stack?", answer: "Node.js + TypeScript for backend services, PostgreSQL + Redis for data persistence & caching, BullMQ for background job queues, Docker + AWS (ECS/EC2) for infrastructure, and GitHub Actions for CI/CD. For AI/ML work, I utilize Python with PyTorch and TensorFlow." },
    { id: "3", category: "Graduate Research", question: "Are you applying for Erasmus Mundus or other CS graduate programmes?", answer: "Yes. I am targeting Erasmus Mundus and top international graduate programmes in Computer Science with a research focus on AI, deep learning, computer vision, and privacy-preserving machine learning." },
    { id: "4", category: "Consulting & Freelance", question: "Can you take on freelance backend architecture or DevOps consulting work?", answer: "Absolutely. I take on freelance backend architecture reviews, REST API design, CI/CD pipeline automation, Docker containerization, and cloud deployment contracts of varying lengths." },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addFaq = () => {
    const newItem: FAQItem = {
      id: Date.now().toString(),
      category: "General Inquiry",
      question: "New Frequently Asked Question?",
      answer: "Detailed answer response...",
    };
    setFaqs([...faqs, newItem]);
    setEditingId(newItem.id);
  };

  const deleteFaq = (id: string) => {
    setFaqs(faqs.filter((f) => f.id !== id));
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
            <HelpCircle size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Frequently Asked Questions Manager ({faqs.length} FAQs)
            </h3>
            <p className="text-xs text-slate-500">
              Manage category tags, questions, answers, and bottom prompt banner
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addFaq} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add FAQ
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save FAQs"}</span>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE FAQ PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {faqs.length} FAQ Accordion Cards
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

      {/* 1. Section Title & Banner Settings */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans">
          Section Title & Bottom Ask Banner Settings
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

        <div className="space-y-[10px] pt-3 border-t border-slate-100">
          <label className="text-xs font-semibold text-slate-700">Bottom Ask Banner Title</label>
          <input
            type="text"
            value={sectionHeaders.ctaBannerTitle}
            onChange={(e) => setSectionHeaders({ ...sectionHeaders, ctaBannerTitle: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold"
          />
        </div>
      </div>

      {/* 2. FAQ Accordion Items */}
      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <div key={f.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-slate-400 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold font-mono border border-slate-200">
                  {f.category}
                </span>
                <h4 className="font-bold text-slate-900 text-sm font-sans">
                  {f.question}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingId(editingId === f.id ? null : f.id)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <Edit3 size={16} />
                </button>
                <button onClick={() => deleteFaq(f.id)} className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              {f.answer}
            </p>

            {editingId === f.id && (
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Category Tag</label>
                    <input
                      type="text"
                      value={f.category}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[idx].category = e.target.value;
                        setFaqs(updated);
                      }}
                      className="w-full text-xs p-2 rounded-lg border border-slate-200 font-mono font-bold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700">Question Title</label>
                    <input
                      type="text"
                      value={f.question}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[idx].question = e.target.value;
                        setFaqs(updated);
                      }}
                      className="w-full text-xs p-2 rounded-lg border border-slate-200 font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">Answer Text</label>
                  <textarea
                    rows={2}
                    value={f.answer}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[idx].answer = e.target.value;
                      setFaqs(updated);
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
