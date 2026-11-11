"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Save, CheckCircle2, Globe, Share2 } from "lucide-react";

export default function SettingsManager() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteTitle: "Jahidul Islam — Backend & DevOps Engineer | AI Researcher",
    metaDescription:
      "Portfolio of Jahidul Islam specializing in scalable cloud-native architectures, FastAPI microservices, Docker/K8s deployments, AWS infrastructure, and AI research.",
    keywords: "Backend Engineer, DevOps, AWS, FastAPI, Docker, Kubernetes, AI Researcher, PyTorch, Dhaka",
    linkedinUrl: "https://linkedin.com/in/",
    githubUrl: "https://github.com/",
    twitterUrl: "https://twitter.com/",
    scholarUrl: "https://scholar.google.com/",
    emailAddress: "jahidul.islam@example.com",
    googleAnalyticsId: "G-XXXXXXXXXX",
    themeDefault: "Light & Dark Mode Switch Enabled",
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
            <Settings size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Global SEO &amp; Social Links Settings
            </h3>
            <p className="text-xs text-slate-500">
              Configure page meta titles, OpenGraph descriptions, social media URLs &amp; analytics
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
          <span>{saved ? "Saved!" : "Save All Settings"}</span>
        </motion.button>
      </motion.div>

      {/* SEO Meta Tags Card */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
          <Globe size={16} className="text-slate-900" />
          <span>SEO & Search Engine Metadata</span>
        </h4>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">Site Title Tag (`&lt;title&gt;`)</label>
          <input
            type="text"
            value={settings.siteTitle}
            onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
            className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-slate-900"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">Meta Description (`&lt;meta name="description"&gt;`)</label>
          <textarea
            rows={3}
            value={settings.metaDescription}
            onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
            className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-slate-900 leading-relaxed"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700">Keywords (Comma Separated)</label>
          <input
            type="text"
            value={settings.keywords}
            onChange={(e) => setSettings({ ...settings, keywords: e.target.value })}
            className="w-full text-xs p-3 rounded-xl border border-slate-200 font-mono focus:border-slate-900"
          />
        </div>
      </div>

      {/* Social Links Card */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
          <Share2 size={16} className="text-slate-900" />
          <span>Social Media & Academic Profile Links</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">LinkedIn Profile</label>
            <input
              type="text"
              value={settings.linkedinUrl}
              onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">GitHub Profile</label>
            <input
              type="text"
              value={settings.githubUrl}
              onChange={(e) => setSettings({ ...settings, githubUrl: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Google Scholar Profile</label>
            <input
              type="text"
              value={settings.scholarUrl}
              onChange={(e) => setSettings({ ...settings, scholarUrl: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Public Contact Email</label>
            <input
              type="text"
              value={settings.emailAddress}
              onChange={(e) => setSettings({ ...settings, emailAddress: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
