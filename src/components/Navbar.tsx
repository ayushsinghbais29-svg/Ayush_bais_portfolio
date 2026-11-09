import React, { useState, useEffect } from 'react';
import { Profile, USER_INFO } from '../data/portfolioData';
import { Search, Volume2, VolumeX, Bookmark, PhoneCall, ChevronDown, FileText } from 'lucide-react';
import { playNetflixTudum } from '../utils/audio';

interface NavbarProps {
  currentProfile: Profile;
  myListCount: number;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  onOpenMyList: () => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  onSwitchProfile: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  myListCount,
  isAudioMuted,
  onToggleAudio,
  onOpenMyList,
  onOpenSearch,
  onOpenContact,
  onOpenResume,
  onSwitchProfile,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-md shadow-2xl border-b border-zinc-800/80'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              playNetflixTudum();
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wider text-[#E50914] font-black group-hover:scale-105 transition-transform">
              AYUSH
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-bold text-zinc-400 bg-zinc-800/90 px-1.5 py-0.5 rounded border border-zinc-700">
              ECE & AI
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation Links (Single-line prose, clean hover states) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#projects"
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors pb-1 ${
              activeSection === 'projects' ? 'text-white border-b-2 border-[#E50914]' : ''
            }`}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors pb-1 ${
              activeSection === 'experience' ? 'text-white border-b-2 border-[#E50914]' : ''
            }`}
          >
            Experience
          </a>
          <a
            href="#certifications"
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors pb-1 ${
              activeSection === 'certifications' ? 'text-white border-b-2 border-[#E50914]' : ''
            }`}
          >
            Certifications
          </a>
          <a
            href="#skills"
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors pb-1 ${
              activeSection === 'skills' ? 'text-white border-b-2 border-[#E50914]' : ''
            }`}
          >
            Skills & Tooling
          </a>
          <a
            href="#education"
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors pb-1 ${
              activeSection === 'education' ? 'text-white border-b-2 border-[#E50914]' : ''
            }`}
          >
            Education
          </a>
        </nav>

        {/* Zone 3: Interactive Utilities & Primary Action */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-full transition-colors focus:outline-none"
            aria-label="Search portfolio"
            title="Search projects, skills & certs"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Audio Chime Mute/Unmute */}
          <button
            onClick={() => {
              onToggleAudio();
              if (isAudioMuted) playNetflixTudum();
            }}
            className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-full transition-colors focus:outline-none"
            aria-label={isAudioMuted ? 'Unmute Tudum sound' : 'Mute audio'}
            title={isAudioMuted ? 'Unmute Sound' : 'Sound Active (Tudum enabled)'}
          >
            {isAudioMuted ? (
              <VolumeX className="w-5 h-5 text-zinc-500" />
            ) : (
              <Volume2 className="w-5 h-5 text-[#E50914]" />
            )}
          </button>

          {/* My List / Recruiter Shortlist */}
          <button
            onClick={onOpenMyList}
            className="relative p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-full transition-colors focus:outline-none"
            aria-label="View My List"
            title="My List (Recruiter Shortlist)"
          >
            <Bookmark className="w-5 h-5" />
            {myListCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#E50914] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-[#141414]">
                {myListCount}
              </span>
            )}
          </button>

          {/* Resume Quick Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-800/90 hover:bg-zinc-700 rounded transition-colors border border-zinc-700 shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Resume</span>
          </button>

          {/* Primary Action: Hire / Contact */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-[#E50914] hover:bg-[#B81D24] rounded transition-colors whitespace-nowrap shadow-md hover:shadow-red-900/30 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Connect</span>
            <span className="sm:hidden">Hire</span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-1 p-0.5 rounded focus:outline-none group"
              aria-label="Profile Menu"
            >
              <div
                className={`w-8 h-8 rounded bg-gradient-to-br ${currentProfile.avatarBg} overflow-hidden flex items-center justify-center border border-zinc-700 group-hover:border-white transition-colors`}
              >
                {currentProfile.id === 'ayush' ? (
                  <img
                    src={USER_INFO.photoUrl}
                    alt={USER_INFO.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-xs font-bold uppercase">
                    {currentProfile.name.charAt(0)}
                  </span>
                )}
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform" />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-[#181818] border border-zinc-700/80 rounded-md shadow-2xl py-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-2 border-b border-zinc-800">
                  <p className="text-xs text-zinc-400 uppercase tracking-wider">Browsing As</p>
                  <p className="font-semibold text-white truncate">{currentProfile.name}</p>
                  <p className="text-xs text-zinc-400">{currentProfile.role}</p>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onSwitchProfile();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between"
                  >
                    <span>Switch Persona</span>
                    <span className="text-xs text-[#E50914] font-medium">Change</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between"
                  >
                    <span>Official Resume Scan</span>
                    <span className="text-xs text-zinc-400">View</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      playNetflixTudum();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between"
                  >
                    <span>Play Tudum Chime</span>
                    <span className="text-xs text-zinc-400">Audio</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-zinc-800 px-4">
                  <p className="text-[11px] text-zinc-500">
                    {USER_INFO.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
