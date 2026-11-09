import React, { useState } from 'react';
import {
  USER_INFO,
  WORK_EXPERIENCES,
  FEATURED_PROJECTS,
  CERTIFICATIONS,
  SKILL_CATEGORIES,
} from '../data/portfolioData';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  Eye,
  FileText,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from 'lucide-react';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'original' | 'digital'>('original');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const text = `CANDIDATE SUMMARY: ${USER_INFO.name}
Role: ${USER_INFO.headline}
Contact: ${USER_INFO.email} | +91 ${USER_INFO.rawPhone}
LinkedIn: ${USER_INFO.linkedIn}
Location: ${USER_INFO.location}
Education: ${USER_INFO.education.degree} in ${USER_INFO.education.branch} (${USER_INFO.education.college}) - CGPA: ${USER_INFO.education.cgpa}
Certifications: Google Cloud Gen AI Academy APAC (Hack2skill), Microsoft Certified Fabric Data Engineer Associate, TCS iQN Hackathon Completion, HP LIFE AI for Business, NxtWave Responsive & Static Web, Tata iQ GenAI Job Simulation.
Key Experience: Tata iQ (AI Transformation Consultant), GAO TEK (Web Development), Ordnance Factory Chanda.
Projects: AI Food Waste Reduction Agent, Ai Mystery Agent, Webpage Slowness Analyzer Agent, Predictive Maintenance Hybrid Model, Eye's On The City, Solar Power Shock Machine.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#181818] border border-zinc-700/80 rounded-lg shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-[#141414] border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-[#E50914] text-white flex items-center justify-center font-bold text-sm">
              N
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-['Montserrat']">
                Official Resume & Qualifications Document
              </h2>
              <p className="text-xs text-zinc-400">
                {USER_INFO.name} · Verified Digital Credentials
              </p>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-md border border-zinc-800 text-xs">
            <button
              onClick={() => setActiveTab('original')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                activeTab === 'original'
                  ? 'bg-[#E50914] text-white font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Original Scanned Resume</span>
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                activeTab === 'digital'
                  ? 'bg-[#E50914] text-white font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Interactive ATS View</span>
            </button>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Pane */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-zinc-950/80">
          {activeTab === 'original' ? (
            <div className="flex flex-col items-center">
              {/* Image Controls toolbar */}
              <div className="flex items-center gap-3 mb-4 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-xs text-zinc-300">
                <span>Zoom:</span>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
                  className="p-1 hover:text-white hover:bg-zinc-800 rounded"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="font-mono text-zinc-400">{Math.round(zoomLevel * 100)}%</span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.15))}
                  className="p-1 hover:text-white hover:bg-zinc-800 rounded"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="px-2 py-0.5 text-[11px] bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded"
                >
                  Reset
                </button>
                <a
                  href={USER_INFO.resumePhotoUrl}
                  download="Ayush_Sunil_Singh_Bais_Resume.jpeg"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 flex items-center gap-1 text-[#E50914] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Scan</span>
                </a>
              </div>

              {/* High-Resolution Scanned Document Container */}
              <div className="relative overflow-auto max-w-full rounded-md shadow-2xl border border-zinc-700 bg-white p-2">
                <img
                  src={USER_INFO.resumePhotoUrl}
                  alt={`Official Resume Scanned Document of ${USER_INFO.name}`}
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                  className="transition-transform duration-200 max-w-full sm:max-w-2xl h-auto block mx-auto"
                />
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white text-zinc-900 p-6 sm:p-10 rounded-md shadow-2xl space-y-6 font-['Plus_Jakarta_Sans']">
              {/* Digital ATS Resume Layout */}
              <div className="border-b-2 border-zinc-900 pb-4">
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-zinc-950 font-['Montserrat']">
                  {USER_INFO.name}
                </h1>
                <p className="text-base font-semibold text-zinc-700 mt-0.5">
                  {USER_INFO.headline}
                </p>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-600 mt-3 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {USER_INFO.location}
                  </span>
                  <span>·</span>
                  <a
                    href={`tel:${USER_INFO.rawPhone}`}
                    className="flex items-center gap-1 hover:text-black font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-zinc-500" />
                    +91 {USER_INFO.rawPhone}
                  </a>
                  <span>·</span>
                  <a
                    href={`mailto:${USER_INFO.email}`}
                    className="flex items-center gap-1 hover:text-black"
                  >
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    {USER_INFO.email}
                  </a>
                  <span>·</span>
                  <a
                    href={USER_INFO.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-blue-700 hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Objective */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                  OBJECTIVE
                </h2>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {USER_INFO.objective}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3 font-mono">
                  EXPERIENCE
                </h2>
                <div className="space-y-4">
                  {WORK_EXPERIENCES.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-sm font-bold text-zinc-900">
                          {exp.role} — <span className="font-semibold text-zinc-700">{exp.company}</span>
                        </h3>
                        <span className="text-xs text-zinc-500 font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-zinc-700">
                        {exp.detailedAchievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                  EDUCATION
                </h2>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      {USER_INFO.education.college}
                    </h3>
                    <p className="text-xs text-zinc-600">
                      {USER_INFO.education.degree} ({USER_INFO.education.branch})
                    </p>
                  </div>
                  <span className="text-xs font-bold font-mono text-zinc-800">
                    CGPA: {USER_INFO.education.cgpa}
                  </span>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                  PROJECTS
                </h2>
                <div className="space-y-2">
                  {FEATURED_PROJECTS.map((proj) => (
                    <div key={proj.id}>
                      <span className="text-xs font-bold text-zinc-900">• {proj.title}:</span>{' '}
                      <span className="text-xs text-zinc-700">{proj.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-200">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                    SKILLS
                  </h2>
                  <div className="space-y-1 text-xs text-zinc-700">
                    <p><strong className="text-zinc-900">Languages:</strong> Python, HTML5, CSS3, JavaScript</p>
                    <p><strong className="text-zinc-900">Analytics:</strong> Data Analysis, Pandas, NumPy, Scikit-learn</p>
                    <p><strong className="text-zinc-900">Frameworks:</strong> Flask, Google Gemini API</p>
                    <p><strong className="text-zinc-900">Developer Tools:</strong> GitHub, VS Code, Git</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                    CERTIFICATIONS
                  </h2>
                  <div className="space-y-1 text-xs text-zinc-700">
                    {CERTIFICATIONS.map((c) => (
                      <p key={c.id}>• {c.title} ({c.issuer})</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-[#141414] border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Candidate Summary!' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 bg-[#E50914] hover:bg-[#B81D24] text-white rounded font-bold uppercase tracking-wider transition-colors"
            >
              Contact Ayush Directly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
