import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Database, Layout, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { playHoverTick } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Data')) return <Database className="w-5 h-5 text-[#E50914]" />;
    if (category.includes('Web')) return <Layout className="w-5 h-5 text-emerald-400" />;
    if (category.includes('Tools')) return <Terminal className="w-5 h-5 text-blue-400" />;
    return <Cpu className="w-5 h-5 text-amber-400" />;
  };

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIndex];

  return (
    <section id="skills" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Montserrat'] flex items-center gap-2">
          <span>Top Picks by Genre: Technical Arsenal</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Proficiencies across data analytics, modern web engineering, developer tooling, and ECE systems.
        </p>
      </div>

      {/* Genre Filter Tabs (Functional Button Controls with Segmented UI) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isActive = selectedCategoryIndex === idx;
          return (
            <button
              key={cat.category}
              onMouseEnter={playHoverTick}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                isActive
                  ? 'bg-zinc-800 text-white border-zinc-500 shadow-md ring-1 ring-white/20'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Category Skill Matrix */}
      <div className="bg-[#181818] border border-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-800">
          <div>
            <h3 className="text-lg font-bold text-white font-['Montserrat'] flex items-center gap-2">
              {getCategoryIcon(activeCategory.category)}
              <span>{activeCategory.category}</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {activeCategory.description}
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 self-start sm:self-auto">
            {activeCategory.skills.length} Core Competencies
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {activeCategory.skills.map((skill, i) => (
            <div
              key={i}
              onMouseEnter={playHoverTick}
              className="p-4 rounded-md bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-600 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-white font-['Montserrat']">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="text-[10px] font-mono font-semibold text-[#E50914] bg-red-950/40 px-1.5 py-0.2 rounded border border-red-900/40">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-400">
                    {skill.level} · {skill.proficiency}%
                  </span>
                </div>

                {/* Animated Proficiency Bar */}
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-[#E50914] transition-all duration-500 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-300 font-medium">Applied Use Case:</strong> {skill.useCases}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
