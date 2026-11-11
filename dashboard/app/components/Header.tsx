"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Save, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { TabId } from "./Sidebar";

interface HeaderProps {
  activeTab: TabId;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSaveAll: () => void;
  isSaved: boolean;
}

const TAB_TITLES: Record<TabId, { title: string; subtitle: string }> = {
  overview: { title: "Dashboard Overview", subtitle: "Real-time metrics & section quick controls" },
  hero: { title: "Hero Section Manager", subtitle: "Manage headline, availability badge, resume link & stats" },
  about: { title: "About Section Manager", subtitle: "Edit biography paragraphs, quick facts & highlights" },
  experience: { title: "Experience Timeline", subtitle: "Add, edit or reorder job history & achievements" },
  projects: { title: "Projects & Bento Grid", subtitle: "Manage project cards, tech stack tags & GitHub links" },
  research: { title: "Research & Publications", subtitle: "Manage academic papers, journals & download PDFs" },
  skills: { title: "Skills & Orbit Engine", subtitle: "Configure technical skill bars & 3D orbital nodes" },
  certifications: { title: "Certifications Grid", subtitle: "Manage professional badges & credentials" },
  testimonials: { title: "Testimonials & Reviews", subtitle: "Manage peer quotes, ratings & avatar images" },
  services: { title: "Services Offered", subtitle: "Define service packages, deliverables & rate tags" },
  github: { title: "GitHub Activity Manager", subtitle: "Configure contribution heatmap & metrics" },
  mystory: { title: "My Story Timeline", subtitle: "Manage editorial life milestones & journey" },
  faq: { title: "FAQ Accordions", subtitle: "Edit frequent questions & detailed answers" },
  contact: { title: "Contact Messages Inbox", subtitle: "View received inquiries & form endpoint config" },
  settings: { title: "Global SEO & Site Settings", subtitle: "Configure meta tags, social links & site defaults" },
};

export default function Header({
  activeTab,
  searchQuery,
  setSearchQuery,
  onSaveAll,
  isSaved,
}: HeaderProps) {
  const current = TAB_TITLES[activeTab] || TAB_TITLES.overview;

  return (
    <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs transition-all">
      {/* Title & Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs text-teal-600 font-bold font-mono">
          <span className="flex items-center gap-1 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            <Sparkles size={11} className="text-teal-600" /> ADMIN CONTROL
          </span>
          <span className="text-slate-300">/</span>
          <span className="capitalize text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{activeTab}</span>
        </div>
        <h2 className="text-xl font-extrabold text-slate-900 font-sans tracking-tight mt-1 flex items-center gap-2">
          {current.title}
        </h2>
      </div>

      {/* Center Search Input */}
      <div className="hidden md:flex items-center gap-2.5 bg-slate-50/90 border border-slate-200/90 rounded-xl px-3.5 py-2 w-80 focus-within:border-teal-500 focus-within:bg-white focus-within:ring-3 focus-within:ring-teal-500/15 transition-all shadow-inner">
        <Search size={16} className="text-slate-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search fields, skills, or sections..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none w-full font-medium"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Status Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-emerald-800 text-xs font-semibold font-mono shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Port 3001 Active</span>
        </div>

        {/* Live Preview CTA */}
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100/80 text-slate-800 hover:bg-slate-900 hover:text-white font-bold text-xs border border-slate-200/90 transition-all shadow-xs"
        >
          <span>Live Site</span>
          <ExternalLink size={13} />
        </a>

        {/* Global Save Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSaveAll}
          className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
            isSaved
              ? "bg-emerald-600 text-white shadow-emerald-500/30"
              : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20"
          }`}
        >
          {isSaved ? (
            <>
              <CheckCircle2 size={15} className="text-white animate-bounce" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <Save size={15} />
              <span>Save Changes</span>
            </>
          )}
        </motion.button>
      </div>
    </header>
  );
}
