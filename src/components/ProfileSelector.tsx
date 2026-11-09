import React from 'react';
import { PROFILES, Profile, USER_INFO } from '../data/portfolioData';
import { playNetflixTudum } from '../utils/audio';
import { Check, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface ProfileSelectorProps {
  currentProfile: Profile | null;
  onSelectProfile: (profile: Profile) => void;
  onClose?: () => void;
  isModal?: boolean;
}

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  currentProfile,
  onSelectProfile,
  onClose,
  isModal = false,
}) => {
  const handleSelect = (profile: Profile) => {
    playNetflixTudum();
    onSelectProfile(profile);
    if (onClose) onClose();
  };

  return (
    <div
      className={`${
        isModal
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200'
          : 'min-h-screen flex flex-col items-center justify-center bg-[#141414] px-4 py-12 relative overflow-hidden'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-[#141414] to-[#141414] pointer-events-none" />

      {/* Brand logo in top left if full page */}
      {!isModal && (
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <span className="font-['Bebas_Neue'] text-3xl tracking-widest text-[#E50914] font-black">
            AYUSH
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold border-l border-zinc-700 pl-2">
            Portfolio
          </span>
        </div>
      )}

      {/* Close button if modal */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white text-sm uppercase tracking-wider font-medium px-4 py-2 rounded border border-zinc-700 hover:border-zinc-500 transition-colors"
        >
          Cancel
        </button>
      )}

      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-3xl md:text-5xl font-['Montserrat'] font-bold text-white tracking-tight mb-2">
          Who's watching?
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-10">
          Select your persona to customize recommendations, highlights, and insights for {USER_INFO.shortName}.
        </p>

        {/* Profiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center max-w-3xl mx-auto mb-12">
          {PROFILES.map((profile) => {
            const isSelected = currentProfile?.id === profile.id;
            return (
              <button
                key={profile.id}
                onClick={() => handleSelect(profile)}
                className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-lg transition-transform duration-200"
              >
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-md bg-gradient-to-br ${profile.avatarBg} relative flex items-center justify-center border-2 transition-all duration-300 shadow-lg group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white ${
                    isSelected ? 'border-white ring-2 ring-[#E50914]' : 'border-transparent'
                  }`}
                >
                  {/* Persona visual icon / initials */}
                  {profile.id === 'ayush' ? (
                    <img
                      src={USER_INFO.photoUrl}
                      alt={USER_INFO.name}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  ) : profile.id === 'recruiter' ? (
                    <UserCheck className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                  ) : profile.id === 'cto' ? (
                    <ShieldCheck className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Sparkles className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                  )}

                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#E50914] text-white p-0.5 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <span className="mt-3 text-sm md:text-base font-medium text-zinc-400 group-hover:text-white transition-colors duration-200 block">
                  {profile.name}
                </span>
                <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {profile.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <button
            onClick={() => handleSelect(PROFILES[0])}
            className="px-6 py-2.5 uppercase tracking-widest text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-400 transition-colors rounded-sm font-semibold"
          >
            Direct Recruiter Fast-Track
          </button>
          <button
            onClick={() => handleSelect(PROFILES[3])}
            className="px-6 py-2.5 uppercase tracking-widest bg-[#E50914] hover:bg-[#B81D24] text-white transition-colors rounded-sm font-semibold shadow-md"
          >
            Enter Full Cinema
          </button>
        </div>
      </div>
    </div>
  );
};
