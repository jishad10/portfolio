"use client";

import React from "react";
import {
  LayoutDashboard,
  Sparkles,
  User,
  Briefcase,
  FolderGit2,
  BookOpen,
  Cpu,
  Award,
  MessageSquareQuote,
  Wrench,
  BookMarked,
  HelpCircle,
  Mail,
  Settings,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export type TabId =
  | "overview"
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "research"
  | "skills"
  | "certifications"
  | "testimonials"
  | "services"
  | "github"
  | "mystory"
  | "faq"
  | "contact"
  | "settings";

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  unreadCount?: number;
}

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  badge?: string | number;
  badgeColor?: string;
}

const NAV_SECTIONS: { group: string; items: NavItem[] }[] = [
  {
    group: "MAIN",
    items: [
      { id: "overview", label: "Dashboard Overview", icon: LayoutDashboard },
    ],
  },
  {
    group: "PORTFOLIO SECTIONS",
    items: [
      { id: "hero", label: "Hero Section", icon: Sparkles },
      { id: "about", label: "About Bio", icon: User },
      { id: "experience", label: "Experience", icon: Briefcase, badge: "3 Jobs" },
      { id: "projects", label: "Projects", icon: FolderGit2, badge: "15 Items", badgeColor: "bg-pink-100 text-pink-700" },
      { id: "research", label: "Research & Papers", icon: BookOpen, badge: "1 Pub" },
      { id: "skills", label: "Skills & Orbit", icon: Cpu, badge: "10 Nodes" },
      { id: "certifications", label: "Certifications", icon: Award },
      { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
      { id: "services", label: "Services Offered", icon: Wrench },
      { id: "github", label: "GitHub Activity", icon: GithubIcon },
      { id: "mystory", label: "My Story", icon: BookMarked },
      { id: "faq", label: "FAQ Accordions", icon: HelpCircle },
    ],
  },
  {
    group: "INBOX & SYSTEM",
    items: [
      { id: "contact", label: "Contact Inbox", icon: Mail, badge: "4 New", badgeColor: "bg-slate-900 text-white" },
      { id: "settings", label: "Global SEO & Links", icon: Settings },
    ],
  },
];

export default function Sidebar({ activeTab, setActiveTab, unreadCount = 4 }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-screen sticky top-0 z-30 select-none shadow-xs">
      {/* Top Brand Header */}
      <div>
        <div className="p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
            J
          </div>
          <div>
            <h1 className="font-bold text-slate-900 text-base leading-tight font-sans">
              Jahidul <span className="text-pink-600 font-extrabold">Admin</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-medium text-slate-500 font-mono">Portfolio Control</span>
            </div>
          </div>
        </div>

        {/* Scrollable Nav List */}
        <nav className="p-3 overflow-y-auto max-h-[calc(100vh-170px)] space-y-5">
          {NAV_SECTIONS.map((section, idx) => (
            <div key={idx}>
              <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                {section.group}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  const badgeText = item.id === "contact" ? `${unreadCount} New` : item.badge;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-xs transition-all duration-150 cursor-pointer ${
                        isActive
                          ? "bg-slate-900 text-white shadow-sm font-semibold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} className={isActive ? "text-pink-400" : "text-slate-400 group-hover:text-slate-700"} />
                        <span>{item.label}</span>
                      </div>
                      {badgeText && (
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-white/20 text-white"
                              : item.badgeColor || "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {badgeText}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Live Preview Link Footer */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/60">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all text-xs font-semibold shadow-xs group"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>View Live Site</span>
          </div>
          <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>
    </aside>
  );
}
