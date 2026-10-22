import { PERSONAL_INFO } from "@/data/portfolioData";

export function AboutSection() {
  return <section id="about" className="py-20 px-4 sm:px-8 relative z-10 scroll-mt-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="text-gray-300 leading-relaxed">{PERSONAL_INFO.summary}</p>
        <p className="text-sm text-cyan-300">{PERSONAL_INFO.location}</p>
        <a href={PERSONAL_INFO.resumePdf} download className="inline-flex px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm">Download Resume</a>
      </div>
      <div id="education" className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold text-white">Education</h2>
        <h3 className="text-lg font-semibold text-cyan-300">{PERSONAL_INFO.education.degree}</h3>
        <p className="text-gray-300">{PERSONAL_INFO.education.institution}</p>
        <p className="text-sm font-mono text-gray-400">{PERSONAL_INFO.education.period}</p>
      </div>
    </div>
  </section>;
}
