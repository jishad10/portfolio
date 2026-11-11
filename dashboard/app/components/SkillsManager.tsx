"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Save, CheckCircle2, Eye, Code2, Server, Terminal, Plus, Trash2 } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  domain: string;
  detail: string;
  color: string;
  orbitRadius: number;
  speed: number;
  level: number;
}

export default function SkillsManager() {
  const [saved, setSaved] = useState(false);

  // Section Headers
  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Skills",
    sectionHeadingPrefix: "Technical ",
    sectionHeadingAccent: "Arsenal",
    sectionHeadingSuffix: "",
    sectionSubheading: "Production-grade engineering & research capabilities refined through real-world systems.",
  });

  const [nodes, setNodes] = useState<SkillNode[]>([
    { id: "nestjs", name: "NestJS & Node.js", domain: "Backend Architecture", detail: "Modules · DI · Scalable Microservices", color: "#E0234E", orbitRadius: 185, speed: 0.42, level: 96 },
    { id: "aws", name: "AWS Cloud Services", domain: "Cloud & DevOps", detail: "EC2 · S3 · ELB · ASG · RDS · CDN", color: "#FF9900", orbitRadius: 185, speed: 0.42, level: 92 },
    { id: "docker", name: "Docker & Linux VPS", domain: "Containers & OS", detail: "Multi-stage Builds · Nginx · SSL", color: "#0DB7ED", orbitRadius: 185, speed: 0.42, level: 94 },
    { id: "postgres", name: "PostgreSQL & MongoDB", domain: "Databases", detail: "Prisma ORM · Index Tuning · NoSQL", color: "#38BDF8", orbitRadius: 185, speed: 0.42, level: 90 },
    { id: "redis", name: "BullMQ & Redis Queues", domain: "Async Processing", detail: "Background Jobs · Pub/Sub · Caching", color: "#EF4444", orbitRadius: 260, speed: -0.28, level: 94 },
    { id: "socketio", name: "Socket.IO & WebSockets", domain: "Real-time", detail: "Live Chat · Geospatial · Lifecycle Jobs", color: "#818CF8", orbitRadius: 260, speed: -0.28, level: 90 },
    { id: "cicd", name: "GitHub Actions CI/CD", domain: "DevOps Pipeline", detail: "Automated Deployments · ~70% Speedup", color: "#14B8A6", orbitRadius: 260, speed: -0.28, level: 92 },
    { id: "inception", name: "Inception v3 AI", domain: "Deep Learning Research", detail: "OCT Retinopathy · IEEE BECITHCON 2025", color: "#F59E0B", orbitRadius: 260, speed: -0.28, level: 88 },
  ]);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateNode = (id: string, field: keyof SkillNode, value: any) => {
    setNodes(nodes.map((n) => (n.id === id ? { ...n, [field]: value } : n)));
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
            <Cpu size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Technical Arsenal &amp; Orbiting Skills Manager ({nodes.length} Active Skills)
            </h3>
            <p className="text-xs text-slate-500">
              Configure proficiency percentages, 3D orbit radius, hex colors &amp; angular velocity
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
          <span>{saved ? "Saved!" : "Save Skills"}</span>
        </motion.button>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE SKILLS PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-mono font-bold text-[11px] border border-teal-500/30">
            {nodes.length} Technical Skills Mapped
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

      {/* 2. Nodes Table */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
              <th className="pb-3">Skill Node</th>
              <th className="pb-3">Domain</th>
              <th className="pb-3">Proficiency %</th>
              <th className="pb-3">Hex Color</th>
              <th className="pb-3">Orbit Radius</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {nodes.map((node) => (
              <tr key={node.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 font-bold text-slate-900 flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-full shadow-xs"
                    style={{ backgroundColor: node.color }}
                  />
                  <span>{node.name}</span>
                </td>
                <td className="py-3 text-slate-600 font-mono text-[11px]">
                  {node.domain}
                </td>
                <td className="py-3 font-mono">
                  <input
                    type="number"
                    value={node.level}
                    onChange={(e) => updateNode(node.id, "level", Number(e.target.value))}
                    className="text-xs p-1.5 rounded-lg border border-slate-200 w-16 font-bold"
                  />
                  <span className="text-[11px] text-slate-400 ml-1">%</span>
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    value={node.color}
                    onChange={(e) => updateNode(node.id, "color", e.target.value)}
                    className="text-xs p-1.5 rounded-lg border border-slate-200 font-mono w-24"
                  />
                </td>
                <td className="py-3 font-mono">
                  <input
                    type="number"
                    value={node.orbitRadius}
                    onChange={(e) => updateNode(node.id, "orbitRadius", Number(e.target.value))}
                    className="text-xs p-1.5 rounded-lg border border-slate-200 w-20"
                  />
                  <span className="text-[11px] text-slate-400 ml-1">px</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
