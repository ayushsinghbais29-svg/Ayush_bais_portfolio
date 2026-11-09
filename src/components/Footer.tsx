import React from 'react';
import { USER_INFO } from '../data/portfolioData';
import { playNetflixTudum } from '../utils/audio';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSwitchProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onOpenContact,
  onSwitchProfile,
}) => {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-[#101010] py-12 text-zinc-400 text-xs font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Help line */}
        <p className="mb-6 text-sm text-zinc-400">
          Questions or inquiries? Call{' '}
          <a
            href={`tel:${USER_INFO.rawPhone}`}
            className="hover:underline text-white font-mono"
          >
            +91 {USER_INFO.rawPhone}
          </a>{' '}
          or reach out at{' '}
          <a
            href={`mailto:${USER_INFO.email}`}
            className="hover:underline text-[#E50914] font-medium"
          >
            {USER_INFO.email}
          </a>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="space-y-2.5">
            <button
              onClick={onOpenResume}
              className="hover:underline text-left block hover:text-white"
            >
              Original Resume Scan
            </button>
            <a href="#projects" className="hover:underline block hover:text-white">
              AI Food Waste Agent
            </a>
            <a href="#projects" className="hover:underline block hover:text-white">
              Ai Mystery Agent
            </a>
            <a href="#projects" className="hover:underline block hover:text-white">
              Webpage Slowness Analyzer
            </a>
            <a href="#projects" className="hover:underline block hover:text-white">
              Predictive Maintenance
            </a>
          </div>

          <div className="space-y-2.5">
            <a href="#experience" className="hover:underline block hover:text-white">
              TATA iQ AI Consultant
            </a>
            <a href="#experience" className="hover:underline block hover:text-white">
              Ordnance Factory Chanda
            </a>
            <a href="#experience" className="hover:underline block hover:text-white">
              TechServ Inventions
            </a>
            <a href="#experience" className="hover:underline block hover:text-white">
              GAO TEK Web Dev
            </a>
          </div>

          <div className="space-y-2.5">
            <a href="#certifications" className="hover:underline block hover:text-white">
              TCS iQN Hackathon
            </a>
            <a href="#certifications" className="hover:underline block hover:text-white">
              Google Cloud Gen AI Academy
            </a>
            <a href="#certifications" className="hover:underline block hover:text-white">
              HP LIFE AI Business
            </a>
            <a href="#certifications" className="hover:underline block hover:text-white">
              Responsive Web (NxtWave)
            </a>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={onSwitchProfile}
              className="hover:underline text-left block hover:text-white"
            >
              Switch Viewing Persona
            </button>
            <a
              href={USER_INFO.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="hover:underline block hover:text-white"
            >
              LinkedIn Profile
            </a>
            <button
              onClick={onOpenContact}
              className="hover:underline text-left block hover:text-white"
            >
              Direct Messaging
            </button>
            <button
              onClick={playNetflixTudum}
              className="hover:underline text-left block text-[#E50914] font-medium"
            >
              Play Tudum Chime
            </button>
          </div>
        </div>

        {/* Candidate Service Code Button */}
        <div className="mb-6">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white text-[11px] uppercase tracking-wider rounded font-mono transition-colors"
          >
            Candidate Profile Code: AYUSH-ECE-2026
          </button>
        </div>

        {/* Legal & Attributions */}
        <div className="pt-6 border-t border-zinc-900 text-[11px] text-zinc-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>
            © 2026 {USER_INFO.name}. All verified qualifications, experiences, and academic achievements are documented.
          </p>
          <p className="text-zinc-600">
            Digital Portfolio Netflix Edition · Chandrapur, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};
