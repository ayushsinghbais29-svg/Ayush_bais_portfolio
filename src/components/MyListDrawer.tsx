import React, { useState } from 'react';
import { X, Trash2, Copy, Check, Download, ExternalLink, Bookmark } from 'lucide-react';
import {
  FEATURED_PROJECTS,
  WORK_EXPERIENCES,
  CERTIFICATIONS,
  USER_INFO,
} from '../data/portfolioData';

interface MyListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  myListIds: string[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onOpenCardDetail: (id: string) => void;
  onOpenContact: () => void;
}

export const MyListDrawer: React.FC<MyListDrawerProps> = ({
  isOpen,
  onClose,
  myListIds,
  onRemoveItem,
  onClearAll,
  onOpenCardDetail,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  // Collect all saved items
  const savedItems = myListIds.map((id) => {
    const proj = FEATURED_PROJECTS.find((p) => p.id === id);
    if (proj) return { ...proj, itemType: 'Project' as const };

    const exp = WORK_EXPERIENCES.find((e) => e.id === id);
    if (exp) return { ...exp, itemType: 'Experience' as const };

    const cert = CERTIFICATIONS.find((c) => c.id === id);
    if (cert) return { ...cert, itemType: 'Certification' as const };

    return null;
  }).filter(Boolean);

  const handleExportList = () => {
    const lines = [
      `RECRUITER SHORTLIST — CANDIDATE: ${USER_INFO.name}`,
      `Role: ${USER_INFO.headline}`,
      `Contact: ${USER_INFO.email} | +91 ${USER_INFO.rawPhone}`,
      `LinkedIn: ${USER_INFO.linkedIn}`,
      `Portfolio: Verified Netflix Showcase`,
      `--- SAVED ITEMS (${savedItems.length}) ---`,
      ...savedItems.map((item, idx) => {
        if (!item) return '';
        const title = 'title' in item ? item.title : 'role' in item ? `${item.role} (${item.company})` : '';
        const desc = 'description' in item ? item.description : 'summary' in item ? item.summary : '';
        return `${idx + 1}. [${item.itemType}] ${title} — ${desc}`;
      }),
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#181818] border-l border-zinc-800 h-full flex flex-col shadow-2xl p-6 overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#E50914]" />
            <h2 className="text-lg font-bold text-white font-['Montserrat']">
              My List (Recruiter Shortlist)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded-full transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Subtitle */}
        <p className="text-xs text-zinc-400 mt-2 mb-4">
          Save projects, experience seasons, and certifications to review or copy for hiring teams.
        </p>

        {/* Saved List Content */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {savedItems.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-zinc-500">
              <Bookmark className="w-12 h-12 stroke-1 mb-2 text-zinc-600" />
              <p className="text-sm font-medium text-zinc-400">Your shortlist is empty</p>
              <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                Click the "+ Bookmark" button on any project or certification to add it to your review packet.
              </p>
            </div>
          ) : (
            savedItems.map((item) => {
              if (!item) return null;
              const title = 'title' in item ? item.title : 'role' in item ? `${item.role} @ ${item.company}` : '';
              const score = item.matchScore;

              return (
                <div
                  key={item.id}
                  className="p-3 bg-zinc-900/90 hover:bg-zinc-900 rounded border border-zinc-800 flex items-start justify-between gap-3 group transition-colors"
                >
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onOpenCardDetail(item.id);
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase text-[#E50914] bg-red-950/40 px-1.5 py-0.2 rounded border border-red-900/50">
                        {item.itemType}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                        {score}% Match
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#E50914] transition-colors line-clamp-1">
                      {title}
                    </h4>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-zinc-500 hover:text-red-400 p-1 rounded transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Actions */}
        {savedItems.length > 0 && (
          <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs">
            <button
              onClick={handleExportList}
              className="w-full py-2.5 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Recruiter Packet'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full py-2.5 bg-[#E50914] hover:bg-[#B81D24] text-white font-bold uppercase tracking-wider rounded transition-colors"
            >
              Contact Candidate About List
            </button>

            <button
              onClick={onClearAll}
              className="w-full py-1 text-center text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Clear Entire Shortlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
