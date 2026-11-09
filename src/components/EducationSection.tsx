import React from 'react';
import { USER_INFO, EXTRACURRICULAR } from '../data/portfolioData';
import { GraduationCap, Award, Users, Code, CheckCircle, ExternalLink } from 'lucide-react';
import { playHoverTick } from '../utils/audio';

interface EducationSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <section id="education" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Montserrat'] flex items-center gap-2">
          <span>Watch Next: Education & Community Leadership</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Academic foundation in Electronics & Communication Engineering and active technical club contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Education Card */}
        <div
          onMouseEnter={playHoverTick}
          className="lg:col-span-2 p-6 sm:p-8 bg-[#181818] border border-zinc-800 rounded-lg flex flex-col justify-between relative overflow-hidden group hover:border-zinc-600 transition-colors"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-950/40 text-[#E50914] rounded-md border border-red-900/40">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Undergraduate Degree Program
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat']">
                  {USER_INFO.education.college}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 mb-4 font-medium">
              <span className="text-white font-semibold">{USER_INFO.education.degree}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-[#E50914]">{USER_INFO.education.branch}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="font-mono bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-700 text-emerald-400">
                CGPA: {USER_INFO.education.cgpa}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
              Rigorous curriculum blending hardware engineering (embedded microcontrollers, analog & digital communication, industrial instrumentation) with software foundations (object-oriented systems, data processing, algorithm design).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-zinc-900/80 rounded border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Discipline</span>
                <span className="font-bold text-white">Electronics & Comm.</span>
              </div>
              <div className="p-3 bg-zinc-900/80 rounded border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Academic Merit</span>
                <span className="font-bold text-emerald-400 font-mono">6.91 / 10.0</span>
              </div>
              <div className="p-3 bg-zinc-900/80 rounded border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Location</span>
                <span className="font-bold text-white">Maharashtra</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Verified Academic Credential
            </span>
            <button
              onClick={onOpenResume}
              className="text-xs text-[#E50914] hover:underline font-semibold flex items-center gap-1"
            >
              <span>View Transcript in Resume Document</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Extracurricular Activities Column */}
        <div className="space-y-4 flex flex-col justify-between">
          {EXTRACURRICULAR.map((act, i) => (
            <div
              key={i}
              onMouseEnter={playHoverTick}
              className="p-5 sm:p-6 bg-[#181818] border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700">
                    {act.badge}
                  </span>
                  {i === 0 ? (
                    <Users className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Code className="w-4 h-4 text-emerald-400" />
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white font-['Montserrat'] mb-1">
                  {act.title}
                </h4>
                <p className="text-xs text-[#E50914] font-medium mb-2">
                  {act.role}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-zinc-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Active Collaborative Participant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
