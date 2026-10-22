"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Box, CheckCircle2 } from "lucide-react";
import { ARCHITECTURE_CASES } from "@/data/portfolioData";

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const study = ARCHITECTURE_CASES[activeTab];
  return (
    <section id="architecture" className="py-24 px-4 sm:px-8 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300"><Layers className="w-3.5 h-3.5" />SYSTEM ARCHITECTURE</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">From Interface to API</h2>
          <p className="text-gray-400 text-base sm:text-lg">A closer look at the frontend, content, and backend work behind my projects.</p>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md gap-2" role="tablist" aria-label="Engineering case studies">
            {ARCHITECTURE_CASES.map((item, index) => <button key={item.id} id={`tab-${item.id}`} role="tab" aria-controls="architecture-panel" aria-selected={activeTab === index} onClick={() => setActiveTab(index)} className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === index ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20" : "text-gray-400 hover:text-white hover:bg-slate-800/60"}`}>{item.label}</button>)}
          </div>
        </div>
        <motion.div key={study.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} id="architecture-panel" role="tabpanel" aria-labelledby={`tab-${study.id}`} className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-xl space-y-6">
          <div className="pb-6 border-b border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"><Box className="w-5 h-5 text-cyan-400" />{study.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">{study.summary}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {study.pillars.map(pillar => <div key={pillar.title} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2"><h4 className="text-cyan-400 font-bold text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" />{pillar.title}</h4><p className="text-xs text-gray-300 leading-relaxed">{pillar.description}</p></div>)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">{study.nodes.map(node => <div key={node} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-cyan-300">{node}</div>)}</div>
        </motion.div>
      </div>
    </section>
  );
};
