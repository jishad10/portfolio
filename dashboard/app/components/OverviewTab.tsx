"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  FolderGit2,
  BookOpen,
  Cpu,
  Mail,
  ArrowUpRight,
  TrendingUp,
  Zap,
  Eye,
  CheckCircle2,
  Sliders,
  Activity,
  Layers,
} from "lucide-react";
import { TabId } from "./Sidebar";

interface OverviewTabProps {
  setActiveTab: (tab: TabId) => void;
  availableStatus: boolean;
  setAvailableStatus: (status: boolean) => void;
}

export default function OverviewTab({
  setActiveTab,
  availableStatus,
  setAvailableStatus,
}: OverviewTabProps) {
  const STATS_CARDS = [
    { label: "Projects Shipped", value: "15", change: "+2 this month", icon: FolderGit2, color: "#3CBBB1", bgLight: "rgba(60, 187, 177, 0.12)", tab: "projects" as TabId },
    { label: "Research Papers", value: "1", change: "1 Published", icon: BookOpen, color: "#A855F7", bgLight: "rgba(168, 85, 247, 0.12)", tab: "research" as TabId },
    { label: "Skill Nodes", value: "10", change: "3D Orbit Active", icon: Cpu, color: "#2DD4BF", bgLight: "rgba(45, 212, 191, 0.12)", tab: "skills" as TabId },
    { label: "Unread Messages", value: "4", change: "Requires reply", icon: Mail, color: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.12)", tab: "contact" as TabId },
  ];

  const SECTION_GRID = [
    { title: "Hero Section", desc: "Main headline, bio & status badge", count: "3 CTAs", tab: "hero" as TabId },
    { title: "About Section", desc: "Personal bio paragraphs & stats", count: "4 Facts", tab: "about" as TabId },
    { title: "Work Experience", desc: "Career timeline & job roles", count: "3 Positions", tab: "experience" as TabId },
    { title: "Projects Grid", desc: "Bento grid cards & tech stack", count: "15 Items", tab: "projects" as TabId },
    { title: "Research & Papers", desc: "Publications & IEEE paper links", count: "1 Paper", tab: "research" as TabId },
    { title: "Skills Engine", desc: "Skill bars & 3D orbiting nodes", count: "10 Orbiters", tab: "skills" as TabId },
    { title: "Certifications", desc: "Credentials & verified badges", count: "5 Badges", tab: "certifications" as TabId },
    { title: "Testimonials", desc: "Client quotes & ratings", count: "4 Reviews", tab: "testimonials" as TabId },
    { title: "Services", desc: "Offerings & deliverables list", count: "3 Services", tab: "services" as TabId },
    { title: "GitHub Activity", desc: "Heatmap & pinned repos config", count: "Active", tab: "github" as TabId },
    { title: "My Story", desc: "Life journey timeline milestones", count: "6 Milestones", tab: "mystory" as TabId },
    { title: "FAQ Accordions", desc: "Frequent questions & answers", count: "6 Accordions", tab: "faq" as TabId },
  ];

  return (
    <div className="space-y-8">
      {/* Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden border border-slate-800"
      >
        {/* Ambient Cyan/Purple Radial Glow Background */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold font-mono text-teal-300 border border-teal-500/30 shadow-xs">
              <Sparkles size={13} className="text-teal-400 animate-pulse" />
              <span>Full Portfolio Control Center</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-sans tracking-tight leading-tight">
              Welcome back, Jahidul!
            </h1>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans">
              Manage all 13 sections of your portfolio from this unified admin console. Toggle live availability, update projects, edit skills, and manage contact inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-slate-950 hover:bg-teal-400 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 font-sans"
            >
              <Eye size={15} />
              <span>Preview Live Site (Port 3000)</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Top 4 Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS_CARDS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => setActiveTab(stat.tab)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-500/40 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-3 rounded-2xl transition-transform group-hover:scale-110 flex items-center justify-center"
                  style={{ background: stat.bgLight, color: stat.color }}
                >
                  <Icon size={22} />
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1 font-mono border border-emerald-200/80">
                  <TrendingUp size={11} />
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-500 mt-1 flex items-center justify-between">
                <span>{stat.label}</span>
                <ArrowUpRight size={15} className="text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Availability & System Toggles Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200/60 flex items-center justify-center font-bold flex-shrink-0 shadow-2xs">
            <Zap size={22} className="animate-pulse" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm font-sans flex items-center gap-2">
              <span>Live Work Availability Indicator</span>
              <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-200">System State</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Controls the green pulsing availability badge &amp; response time text in the portfolio Hero &amp; Contact sections
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full border ${availableStatus ? "bg-emerald-50 text-emerald-700 border-emerald-300" : "bg-slate-100 text-slate-600 border-slate-200"}`}>
            {availableStatus ? "● Available for Hire" : "○ Currently Busy"}
          </span>
          <button
            onClick={() => setAvailableStatus(!availableStatus)}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
              availableStatus ? "bg-slate-950" : "bg-slate-300"
            }`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`bg-white w-6 h-6 rounded-full shadow-md ${
                availableStatus ? "translate-x-6 bg-teal-400" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </motion.div>

      {/* Grid of Portfolio Section Managers */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-extrabold text-slate-900 font-sans flex items-center gap-2">
            <Layers size={18} className="text-teal-600" />
            <span>Manage Portfolio Sections</span>
          </h3>
          <span className="text-xs font-mono text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">12 Active Sections</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTION_GRID.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + idx * 0.03 }}
              whileHover={{ y: -3, scale: 1.01 }}
              onClick={() => setActiveTab(sec.tab)}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-500/50 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 height-1 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-teal-600 transition-colors font-sans">
                    {sec.title}
                  </h4>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {sec.count}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                <span>Edit Section</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
