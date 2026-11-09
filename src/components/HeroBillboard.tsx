import React from 'react';
import { USER_INFO, FEATURED_PROJECTS, Profile } from '../data/portfolioData';
import { Play, Info, Bookmark, Check, Sparkles, Mail, MessageSquare, Linkedin, Phone } from 'lucide-react';
import { playNetflixTudum } from '../utils/audio';

interface HeroBillboardProps {
  currentProfile: Profile;
  onOpenResume: () => void;
  onOpenProjectDetail: (projectId: string) => void;
  onToggleMyList: (id: string) => void;
  isInMyList: (id: string) => boolean;
  onOpenContact: () => void;
}

export const HeroBillboard: React.FC<HeroBillboardProps> = ({
  currentProfile,
  onOpenResume,
  onOpenProjectDetail,
  onToggleMyList,
  isInMyList,
  onOpenContact,
}) => {
  const topProject = FEATURED_PROJECTS[0]; // AI Food Waste Reduction Agent
  const isBookmarked = isInMyList(topProject.id);

  const handlePlay = () => {
    playNetflixTudum();
    onOpenResume();
  };

  const handleMoreInfo = () => {
    playNetflixTudum();
    onOpenProjectDetail(topProject.id);
  };

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-between overflow-hidden pt-20 pb-16">
      {/* Background Graphic & Poster Backdrop with Scrim Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={USER_INFO.photoUrl}
          alt={USER_INFO.name}
          className="w-full h-full object-cover object-top filter brightness-[0.7] contrast-[1.08] lg:object-right-top"
        />
        {/* Gradients to blend seamlessly into Netflix #141414 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent lg:via-[#141414]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/90 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#141414]/30 to-[#141414]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 lg:pt-0">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Netflix Series Tagline */}
          <div className="flex items-center gap-3 mb-3 text-xs tracking-wider uppercase font-semibold">
            <span className="flex items-center gap-1.5 text-[#E50914] font-black tracking-widest text-sm">
              <span className="bg-[#E50914] text-white px-1.5 py-0.2 rounded-sm text-[11px] font-bold">N</span>
              SERIES
            </span>
            <span className="text-zinc-500 font-mono">·</span>
            <span className="text-zinc-300 font-medium tracking-widest">
              PORTFOLIO 2026 EDITION
            </span>
          </div>

          {/* Top 10 Today Ribbon */}
          <div className="inline-flex items-center gap-2 mb-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/60 rounded px-2.5 py-1 text-xs text-white">
            <span className="w-5 h-5 rounded-full bg-[#E50914] text-white flex items-center justify-center font-black text-[11px]">
              #1
            </span>
            <span className="font-bold tracking-wide">
              #1 IN TALENT TODAY · DATA & WEB DEV
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 font-['Montserrat'] uppercase drop-shadow-md">
            {USER_INFO.name}
          </h1>

          {/* Metadata Row (Zero-pill discipline: unboxed text with typographic separators) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300 mb-4 font-medium">
            <span className="text-emerald-400 font-bold">99% Match</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>2026</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="border border-zinc-600 px-1 py-0.2 text-[10px] text-zinc-300 rounded-sm">
              B.TECH ECE
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="border border-zinc-600 px-1 py-0.2 text-[10px] text-zinc-300 rounded-sm">
              4K UHD
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Google Cloud GenAI Academy</span>
          </div>

          {/* Logline / Bio */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 line-clamp-3 sm:line-clamp-4 max-w-xl mb-6 leading-relaxed drop-shadow">
            {USER_INFO.objective}
          </p>

          {/* Persona Recommendation Callout */}
          <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-md p-2.5 max-w-lg">
            <Sparkles className="w-4 h-4 text-[#E50914] shrink-0" />
            <span>
              <strong className="text-white">{currentProfile.name} Mode:</strong>{' '}
              {currentProfile.description}
            </span>
          </div>

          {/* Primary Action Buttons (Netflix Play & More Info style) */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={handlePlay}
              className="flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold px-6 py-2.5 sm:px-8 sm:py-3 rounded transition-all transform hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>View Resume</span>
            </button>

            <button
              onClick={handleMoreInfo}
              className="flex items-center justify-center gap-2 bg-zinc-800/80 hover:bg-zinc-700/90 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded backdrop-blur-sm transition-all text-sm sm:text-base border border-zinc-700"
            >
              <Info className="w-5 h-5 text-zinc-300" />
              <span>Featured Project</span>
            </button>

            <button
              onClick={() => onToggleMyList(topProject.id)}
              className={`p-2.5 sm:p-3 rounded-full border transition-all ${
                isBookmarked
                  ? 'bg-[#E50914] border-[#E50914] text-white'
                  : 'bg-zinc-900/70 border-zinc-600 text-zinc-300 hover:text-white hover:border-white'
              }`}
              title={isBookmarked ? 'Remove from My List' : 'Add to Recruiter My List'}
              aria-label="Add to recruiter shortlist"
            >
              {isBookmarked ? <Check className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
          </div>

          {/* Quick Connect Dock */}
          <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Direct Channels:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${USER_INFO.email}`}
                className="p-2 bg-zinc-900 hover:bg-[#E50914] text-zinc-300 hover:text-white rounded transition-colors"
                title={`Email: ${USER_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${USER_INFO.rawPhone}?text=Hi%20Ayush,%20I%20saw%20your%20Netflix%20portfolio`}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-emerald-600 text-zinc-300 hover:text-white rounded transition-colors"
                title={`WhatsApp: +91 ${USER_INFO.rawPhone}`}
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={USER_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-[#0A66C2] text-zinc-300 hover:text-white rounded transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${USER_INFO.rawPhone}`}
                className="p-2 bg-zinc-900 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded transition-colors"
                title={`Call: +91 ${USER_INFO.rawPhone}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={onOpenContact}
              className="ml-auto text-xs text-zinc-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              All Contact Details →
            </button>
          </div>
        </div>
      </div>

      {/* Right Edge Netflix Mature Badge / Season Tag */}
      <div className="hidden lg:flex absolute right-0 bottom-24 items-center bg-black/60 backdrop-blur-md border-l-4 border-zinc-500 py-1.5 px-4 text-xs font-semibold text-zinc-300">
        <span>TATA iQ · GAO TEK · ORDNANCE FACTORY</span>
        <span className="ml-3 bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded text-[10px]">U/A 13+</span>
      </div>
    </section>
  );
};
