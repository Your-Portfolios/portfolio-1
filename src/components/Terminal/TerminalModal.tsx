"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Send } from "lucide-react";
import { PERSONAL_INFO, WORK_EXPERIENCES, PROJECTS, SKILL_CATEGORIES, ARCHITECTURE_CASES } from "@/data/portfolioData";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      cmd: "welcome",
      output: (
        <div className="space-y-1 text-cyan-300">
          <p className="font-bold text-sm">{PERSONAL_INFO.name} Dev CLI</p>
          <p className="text-gray-400">Type <span className="text-cyan-400 font-bold">help</span> to list available commands or <span className="text-emerald-400 font-bold">sudo hire</span> to view hiring specs.</p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    setCommandHistory((prev) => [...prev, cleanCmd]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        outputNode = <p>Commands: bio, summary, skills, experience, projects, architecture, contact, resume, clear, sudo hire</p>;
        break;
      case "bio":
      case "summary":
        outputNode = <div className="space-y-2"><p>{PERSONAL_INFO.summary}</p><p>{PERSONAL_INFO.education.degree} - {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.period})</p></div>;
        break;
      case "skills":
        outputNode = <div>{SKILL_CATEGORIES.map(category => <p key={category.title}>{category.title}: {category.skills.map(skill => skill.name).join(", ")}</p>)}</div>;
        break;
      case "experience":
        outputNode = <div>{WORK_EXPERIENCES.map(exp => <p key={exp.id}>{exp.role} at {exp.company} ({exp.period}): {exp.summary}</p>)}</div>;
        break;
      case "projects":
        outputNode = <div>{PROJECTS.map(project => <p key={project.id}>{project.title}: {project.description}</p>)}</div>;
        break;
      case "architecture":
      case "mfe":
      case "monorepo":
        outputNode = <div>{ARCHITECTURE_CASES.map(study => <p key={study.id}>{study.title}: {study.pillars.map(pillar => pillar.description).join(" ")}</p>)}</div>;
        break;
      case "sudo hire":
      case "contact":
        outputNode = <div><p>{PERSONAL_INFO.title}</p><a className="text-cyan-300 underline" href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a><p>{PERSONAL_INFO.linkedin}</p></div>;
        break;
      case "resume":
        onOpenResume();
        outputNode = <p>Opening resume...</p>;
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        outputNode = <p>Command not recognized. Type help for available commands.</p>;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: outputNode }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="terminal-window max-w-[92vw] sm:max-w-2xl w-full h-[78vh] sm:h-[520px] flex flex-col overflow-hidden shadow-2xl relative rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-[11px] sm:text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-bold truncate">
                <TerminalIcon className="w-4 h-4 shrink-0" />
                awais@developer-terminal:~
              </span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Body Output */}
          <div className="flex-1 p-3 sm:p-4 font-mono text-xs overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.cmd !== "welcome" && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-cyan-400 font-bold">awais@portfolio:~$</span>
                    <span className="text-white font-bold">{item.cmd}</span>
                  </div>
                )}
                <div className="pl-2">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Bar */}
          <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 font-mono text-xs">
            <span className="text-cyan-400 font-bold shrink-0">awais@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'bio', 'projects', 'sudo hire')..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-600 min-w-0"
            />
            <button type="submit" className="text-cyan-400 hover:text-cyan-300 p-1 shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
