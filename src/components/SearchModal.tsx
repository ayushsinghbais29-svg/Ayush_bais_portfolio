import React, { useState, useMemo } from 'react';
import { Search, X, Play, Bookmark, Check } from 'lucide-react';
import {
  FEATURED_PROJECTS,
  WORK_EXPERIENCES,
  CERTIFICATIONS,
  SKILL_CATEGORIES,
} from '../data/portfolioData';
import { RowCardData } from './ContentRow';
import { playNetflixTudum } from '../utils/audio';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCard: (card: RowCardData) => void;
  onToggleMyList: (id: string) => void;
  isInMyList: (id: string) => boolean;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCard,
  onToggleMyList,
  isInMyList,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  // Assemble unified searchable cards
  const allCards = useMemo<RowCardData[]>(() => {
    const projectCards: RowCardData[] = FEATURED_PROJECTS.map((p) => ({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      category: p.category,
      matchScore: p.matchScore,
      badge: p.badge,
      yearOrPeriod: p.year,
      tags: p.technologies,
      accentColor: p.accentColor,
      summarySnippet: p.description,
      type: 'project',
    }));

    const expCards: RowCardData[] = WORK_EXPERIENCES.map((e) => ({
      id: e.id,
      title: e.role,
      subtitle: e.company,
      category: 'Experience Series',
      matchScore: e.matchScore,
      badge: e.badge,
      yearOrPeriod: e.period,
      tags: e.technologies,
      accentColor: e.accentColor,
      summarySnippet: e.summary,
      type: 'experience',
    }));

    const certCards: RowCardData[] = CERTIFICATIONS.map((c) => ({
      id: c.id,
      title: c.title,
      subtitle: c.issuer,
      category: 'Award & Credential',
      matchScore: c.matchScore,
      badge: c.badge,
      yearOrPeriod: c.cohortYear,
      tags: c.skillsVerified,
      accentColor: c.accentColor,
      summarySnippet: c.description,
      type: 'certificate',
    }));

    return [...projectCards, ...expCards, ...certCards];
  }, []);

  const filteredCards = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allCards;
    return allCards.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.subtitle && c.subtitle.toLowerCase().includes(q)) ||
        c.summarySnippet.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q)) ||
        (c.category && c.category.toLowerCase().includes(q))
    );
  }, [allCards, query]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#181818] border border-zinc-700/80 rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 bg-[#141414] border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-6 h-6 text-[#E50914] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, certificates, companies, or tools (e.g. Python, Gemini, TATA)..."
            autoFocus
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-white rounded"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white px-2 py-1 rounded border border-zinc-700"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-6 py-2.5 bg-zinc-900/60 border-b border-zinc-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-zinc-500 shrink-0 font-medium">Quick filters:</span>
          {['Mystery Agent', 'Webpage Slowness', 'TCS iQN', 'HP LIFE', 'Python', 'Gemini API', 'TATA iQ', 'Data Analysis', 'Microsoft Fabric'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors whitespace-nowrap"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results Grid */}
        <div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-zinc-400">
              Showing <strong className="text-white font-mono">{filteredCards.length}</strong> matching results
            </p>
          </div>

          {filteredCards.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="text-sm">No matches found for "{query}"</p>
              <p className="text-xs text-zinc-600 mt-1">
                Try searching for "Data Analysis", "Predictive", "HTML5", or "Flask".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCards.map((card) => {
                const isBookmarked = isInMyList(card.id);
                return (
                  <div
                    key={card.id}
                    onClick={() => {
                      playNetflixTudum();
                      onSelectCard(card);
                    }}
                    className="p-4 rounded bg-zinc-900/90 border border-zinc-800 hover:border-zinc-500 transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase text-[#E50914] bg-red-950/40 px-1.5 py-0.2 rounded border border-red-900/40">
                          {card.category || card.type}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {card.matchScore}% Match
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-white line-clamp-1 mb-1 font-['Montserrat']">
                        {card.title}
                      </h4>
                      {card.subtitle && (
                        <p className="text-xs text-zinc-400 line-clamp-1 mb-2">
                          {card.subtitle}
                        </p>
                      )}
                      <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-3">
                        {card.summarySnippet}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-500 truncate max-w-[140px]">
                        {card.tags.slice(0, 2).join(' · ')}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleMyList(card.id);
                          }}
                          className={`p-1.5 rounded-full border transition-all ${
                            isBookmarked
                              ? 'bg-[#E50914] border-[#E50914] text-white'
                              : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
                          }`}
                        >
                          {isBookmarked ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Bookmark className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            playNetflixTudum();
                            onSelectCard(card);
                          }}
                          className="p-1.5 bg-white text-black rounded-full hover:scale-105"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
