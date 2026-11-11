"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Plus, Trash2, Save, CheckCircle2, Eye, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
}

export default function ServicesManager() {
  const [saved, setSaved] = useState(false);

  const [sectionHeaders, setSectionHeaders] = useState({
    sectionLabel: "Services",
    sectionHeadingPrefix: "Engineering & ",
    sectionHeadingAccent: "Cloud Solutions",
    sectionHeadingSuffix: "",
    sectionSubheading: "End-to-end technical capabilities from backend architecture to automated cloud deployment.",
    ctaBannerTitle: "Need a custom backend or cloud infrastructure setup?",
    ctaBannerSub: "Available for consulting engagements, architecture reviews, and full-stack backend contracts.",
    ctaBannerBtnText: "Get In Touch",
  });

  const [services, setServices] = useState<ServiceItem[]>([
    {
      id: "1",
      title: "Backend Architecture & APIs",
      badge: "Core Backend",
      description: "Architecting scalable REST & GraphQL microservices, JWT authentication, Redis caching, and BullMQ background queues.",
      deliverables: ["RESTful API design with OpenAPI / Swagger docs", "BullMQ async background workers & Redis pub/sub", "PostgreSQL database indexing & query tuning"],
    },
    {
      id: "2",
      title: "Cloud & DevOps Engineering",
      badge: "DevOps & Cloud",
      description: "AWS cloud infrastructure management, Docker containerization, Terraform IaC, and zero-downtime production deployments.",
      deliverables: ["AWS ECS, EC2, S3, and Lambda cloud setup", "Docker & Docker Compose container orchestration", "Infrastructure as Code using Terraform scripts"],
    },
    {
      id: "3",
      title: "CI/CD Pipeline Automation",
      badge: "CI/CD Automation",
      description: "End-to-end GitHub Actions automated testing, multi-stage Docker builds, ECR registry push, and automated deployment pipelines.",
      deliverables: ["Automated unit & integration test suites", "Docker image security scanning & ECR push", "Zero-downtime rolling ECS deployments"],
    },
  ]);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addService = () => {
    const newService: ServiceItem = {
      id: Date.now().toString(),
      title: "New Service Offering",
      badge: "Service Tag",
      description: "Service description and value proposition...",
      deliverables: ["Deliverable 1", "Deliverable 2"],
    };
    setServices([...services, newService]);
  };

  const deleteService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
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
            <Wrench size={20} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base font-sans">
              Services &amp; Deliverables ({services.length} Services)
            </h3>
            <p className="text-xs text-slate-500">
              Manage professional engineering services, packages &amp; key deliverables
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={addService} className="btn-outline-slate text-xs font-bold">
            <Plus size={15} /> Add Service
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="btn-primary-dark"
          >
            {saved ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Save size={16} />}
            <span>{saved ? "Saved!" : "Save Services"}</span>
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
            <Eye size={14} className="text-teal-400 animate-pulse" /> LIVE SERVICES PREVIEW
          </span>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
            {services.length} Services Offerings
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
          Section Title & Bottom CTA Banner Settings
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

        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label className="text-xs font-semibold text-slate-700">Bottom CTA Banner Title</label>
          <input
            type="text"
            value={sectionHeaders.ctaBannerTitle}
            onChange={(e) => setSectionHeaders({ ...sectionHeaders, ctaBannerTitle: e.target.value })}
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200 font-bold"
          />
        </div>
      </div>

      {/* 2. Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((sec) => (
          <div key={sec.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-slate-400 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  {sec.badge}
                </span>
                <button onClick={() => deleteService(sec.id)} className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>

              <h4 className="font-bold text-slate-900 text-base font-sans leading-snug">
                {sec.title}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {sec.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                Key Deliverables
              </span>
              <ul className="space-y-1 text-xs text-slate-600">
                {sec.deliverables.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
