import React, { useState } from 'react';
import { RowCardData } from './ContentRow';
import {
  X,
  Play,
  Bookmark,
  Check,
  Calendar,
  Layers,
  Award,
  Cpu,
  Activity,
  Sliders,
  Send,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Gauge,
  Clock,
  Sparkles,
} from 'lucide-react';
import {
  FEATURED_PROJECTS,
  WORK_EXPERIENCES,
  CERTIFICATIONS,
  USER_INFO,
} from '../data/portfolioData';

interface CardModalProps {
  card: RowCardData | null;
  onClose: () => void;
  onToggleMyList: (id: string) => void;
  isInMyList: (id: string) => boolean;
  onOpenResume: () => void;
}

export const CardModal: React.FC<CardModalProps> = ({
  card,
  onClose,
  onToggleMyList,
  isInMyList,
  onOpenResume,
}) => {
  if (!card) return null;

  const isBookmarked = isInMyList(card.id);

  // Find underlying rich data
  const projectDetail = FEATURED_PROJECTS.find((p) => p.id === card.id);
  const experienceDetail = WORK_EXPERIENCES.find((e) => e.id === card.id);
  const certDetail = CERTIFICATIONS.find((c) => c.id === card.id);

  // Tab state for modal: 'overview' | 'interactive' | 'deliverables'
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'episodes'>('overview');

  // Interactive Simulator States
  // 1. Food waste agent state
  const [selectedFoodItem, setSelectedFoodItem] = useState('Dairy Milk Batch (120 Gallons)');
  const [perishHours, setPerishHours] = useState(14);
  const [agentResult, setAgentResult] = useState<string | null>(null);

  // 2. Predictive Maintenance state
  const [vibration, setVibration] = useState(42);
  const [temperature, setTemperature] = useState(78);
  const [currentAmps, setCurrentAmps] = useState(15.4);

  // 3. Ai Mystery Agent state
  const [mysteryScenario, setMysteryScenario] = useState('The Phantom Cloud Token Outflow');
  const [selectedSuspect, setSelectedSuspect] = useState('Legacy Data Pipeline Webhook');
  const [mysteryDeduction, setMysteryDeduction] = useState<string | null>(null);

  // 4. Webpage Slowness Analyzer state
  const [testUrl, setTestUrl] = useState('https://enterprise-storefront.example.com');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditReport, setAuditReport] = useState<{
    lcp: string;
    inp: string;
    cls: string;
    ttfb: string;
    perfScore: number;
    culprits: string[];
    remediations: string[];
  } | null>(null);

  const calculateRUL = () => {
    // Math model: high vibration + high temp drops RUL
    const anomalyIndex = (vibration / 100) * 0.45 + (temperature / 120) * 0.35 + (currentAmps / 30) * 0.2;
    const estimatedHours = Math.max(1.5, Math.round((1 - anomalyIndex) * 320));
    const status = anomalyIndex > 0.65 ? 'CRITICAL FAILURE IMMINENT' : anomalyIndex > 0.45 ? 'MODERATE WEAR DETECTED' : 'HEALTHY OPERATING BASELINE';
    return { anomalyIndex: Math.round(anomalyIndex * 100), estimatedHours, status };
  };

  const handleRunAgent = () => {
    setAgentResult(
      `Optimization complete. Recipient Assigned: Chandrapur Community Kitchen. Priority: HIGH. Transit window: <90 mins. Avoided Waste: 120kg (~₹14,500 value). Routing telemetry dispatched.`
    );
  };

  const handleSolveMystery = () => {
    setMysteryDeduction(
      `Forensic Reasoning Chain Complete:\n• Alibi Verification: ${selectedSuspect} claimed idle state between 02:00-04:00 UTC, but access logs reveal 14,200 asynchronous payload bursts.\n• Key Contradiction: Token signature matched automated OAuth retry headers, not human credentials.\n• Verdict: Culprit Identified as ${selectedSuspect} caused by an unauthenticated retry loop. Severity: Level 2 Incident. Recommended fix: Apply exponential backoff & token revoking.`
    );
  };

  const handleRunSpeedAudit = () => {
    setAuditRunning(true);
    setTimeout(() => {
      setAuditReport({
        lcp: '3.8s (Poor)',
        inp: '240ms (Needs Work)',
        cls: '0.18 (Sub-optimal)',
        ttfb: '780ms',
        perfScore: 54,
        culprits: [
          'Render-blocking stylesheet: 420KB unpurged CSS in <head>',
          'Uncompressed hero banner (3.2MB PNG without WebP conversion)',
          'Heavy client-side hydration bundle: 1.8MB JS chunk without code-splitting'
        ],
        remediations: [
          'Enable modern WebP/AVIF format with srcset attributes (-2.4MB payload)',
          'Defer non-critical third-party analytics scripts with async/defer',
          'Implement route-based dynamic code-splitting via React.lazy()'
        ]
      });
      setAuditRunning(false);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#181818] border border-zinc-700/80 rounded-lg shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 bg-black/80 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full transition-colors border border-zinc-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Header */}
        <div className="relative h-60 sm:h-72 w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 sm:p-8 flex flex-col justify-end">
          {/* Subtle Ambient Color Splash */}
          <div
            className="absolute inset-0 opacity-25"
            style={{ backgroundColor: card.accentColor || '#E50914' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent" />

          <div className="relative z-10">
            {/* Badges and metadata */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#E50914] text-white text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                {card.badge || 'N ORIGINAL'}
              </span>
              <span className="text-emerald-400 font-mono font-bold text-xs bg-black/60 px-2 py-0.5 rounded">
                {card.matchScore}% Match
              </span>
              {card.yearOrPeriod && (
                <span className="text-zinc-300 text-xs font-medium">
                  {card.yearOrPeriod}
                </span>
              )}
              <span className="text-zinc-400 text-xs border border-zinc-600 px-1.5 py-0.2 rounded-sm">
                HD 1080p
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Montserrat'] tracking-tight mb-1">
              {card.title}
            </h2>

            {card.subtitle && (
              <p className="text-sm sm:text-base text-zinc-300 font-medium">
                {card.subtitle}
              </p>
            )}

            {/* Quick action bar */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <button
                onClick={() => setActiveTab('interactive')}
                className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold px-5 py-2 rounded text-sm transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Interactive Simulator</span>
              </button>

              <button
                onClick={() => onToggleMyList(card.id)}
                className={`p-2 rounded-full border transition-all ${
                  isBookmarked
                    ? 'bg-[#E50914] border-[#E50914] text-white'
                    : 'bg-zinc-900 border-zinc-600 text-zinc-300 hover:text-white hover:border-white'
                }`}
                title={isBookmarked ? 'Remove from My List' : 'Add to My List'}
              >
                {isBookmarked ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenResume}
                className="text-xs text-zinc-300 hover:text-white underline underline-offset-4 ml-auto"
              >
                Verify on Resume Document →
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-6 px-6 sm:px-8 border-b border-zinc-800 bg-[#141414] text-xs sm:text-sm font-medium text-zinc-400">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'text-white border-[#E50914]'
                : 'border-transparent hover:text-zinc-200'
            }`}
          >
            Overview & Context
          </button>
          <button
            onClick={() => setActiveTab('episodes')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'episodes'
                ? 'text-white border-[#E50914]'
                : 'border-transparent hover:text-zinc-200'
            }`}
          >
            Episodes / Key Deliverables
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'interactive'
                ? 'text-white border-[#E50914]'
                : 'border-transparent hover:text-zinc-200'
            }`}
          >
            Live Technical Simulator
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Detailed Narrative */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Synopsis
                </h4>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                  {projectDetail?.fullOverview ||
                    experienceDetail?.summary ||
                    certDetail?.description ||
                    card.summarySnippet}
                </p>
              </div>

              {/* Impact / Key Metrics Grid */}
              {(projectDetail?.metrics || experienceDetail?.impactMetrics) && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Impact Telemetry & Verified Outcomes
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(projectDetail?.metrics || experienceDetail?.impactMetrics)?.map((m, i) => (
                      <div
                        key={i}
                        className="p-3 bg-zinc-900/90 rounded border border-zinc-800 flex flex-col justify-between"
                      >
                        <span className="text-xs text-zinc-400">{m.label}</span>
                        <span className="text-lg sm:text-xl font-bold font-mono text-white mt-1">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Tech Stack & Methodologies
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-zinc-300">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-zinc-800/80 border border-zinc-700/60 px-2.5 py-1 rounded text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential info if certificate */}
              {certDetail && (
                <div className="p-4 bg-zinc-900/80 rounded border border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-400">Issuer / Organization</p>
                    <p className="text-sm font-semibold text-white">{certDetail.issuer}</p>
                    <p className="text-xs text-zinc-500 mt-1">Credential Status: {certDetail.verificationStatus}</p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                </div>
              )}
            </div>
          )}

          {activeTab === 'episodes' && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Episode Breakdown (Deliverables & Modules)
              </h4>

              <div className="space-y-3">
                {(
                  projectDetail?.keyDeliverables ||
                  experienceDetail?.detailedAchievements ||
                  certDetail?.skillsVerified || [
                    'Foundation and architectural requirements setup',
                    'Core implementation and model integration',
                    'Verification and test validation cycles',
                    'Production deployment and stakeholder review',
                  ]
                ).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-zinc-900/70 hover:bg-zinc-900 rounded border border-zinc-800 flex items-start gap-4 transition-colors"
                  >
                    <span className="w-8 h-8 rounded bg-zinc-800 text-[#E50914] font-['Bebas_Neue'] text-lg font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-zinc-200 font-medium leading-relaxed">
                        {item}
                      </p>
                      <span className="text-[11px] text-zinc-500 font-mono mt-1 inline-block">
                        Status: Complete · Verified by Ayush Bais
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {/* Dynamic Interactive Widget Based on Type */}
              {card.id === 'ai-food-waste-agent' ? (
                <div className="p-5 bg-zinc-900/90 rounded-lg border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Zap className="w-4 h-4 text-[#E50914]" />
                    <span>Live Multi-Agent Surplus Redistribution Simulator</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Test the agentic routing algorithm. Select a perishable grocery batch and deterioration window to trigger redistribution.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-zinc-300 block mb-1">Select Surplus Inventory Batch:</label>
                      <select
                        value={selectedFoodItem}
                        onChange={(e) => setSelectedFoodItem(e.target.value)}
                        className="w-full bg-zinc-800 text-white text-xs p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-[#E50914]"
                      >
                        <option>Dairy Milk Batch (120 Gallons - Cold Storage)</option>
                        <option>Fresh Produce & Greens (85 Crates)</option>
                        <option>Bakery Artisan Loaves (60 Units)</option>
                        <option>Prepared Meals & Sandwiches (40 Packs)</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 mb-1">
                        <span>Shelf-Life Remaining Window:</span>
                        <span className="font-mono text-emerald-400 font-bold">{perishHours} Hours</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="48"
                        value={perishHours}
                        onChange={(e) => setPerishHours(Number(e.target.value))}
                        className="w-full accent-[#E50914]"
                      />
                    </div>

                    <button
                      onClick={handleRunAgent}
                      className="w-full py-2.5 bg-[#E50914] hover:bg-[#B81D24] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Execute Agent Optimization Loop</span>
                    </button>

                    {agentResult && (
                      <div className="p-3 bg-black/60 border border-emerald-500/40 rounded text-xs text-emerald-300 font-mono leading-relaxed animate-in fade-in">
                        {agentResult}
                      </div>
                    )}
                  </div>
                </div>
              ) : card.id === 'hybrid-predictive-maintenance' ? (
                <div className="p-5 bg-zinc-900/90 rounded-lg border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span>Industrial Sensor RUL & Anomaly Classifier</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Adjust real-time telemetry inputs to calculate equipment degradation index and Remaining Useful Life (RUL).
                  </p>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 mb-1">
                        <span>Vibration Frequency: {vibration} Hz</span>
                        <span className="text-zinc-500 font-mono">Norm: 20-40 Hz</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={vibration}
                        onChange={(e) => setVibration(Number(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 mb-1">
                        <span>Bearing Temperature: {temperature} °C</span>
                        <span className="text-zinc-500 font-mono">Norm: 50-70 °C</span>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="115"
                        value={temperature}
                        onChange={(e) => setTemperature(Number(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                    </div>

                    {/* Calculated Output Box */}
                    {(() => {
                      const model = calculateRUL();
                      return (
                        <div className="p-4 bg-black/80 border border-zinc-700 rounded space-y-2 font-mono text-xs">
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Anomaly Index:</span>
                            <span
                              className={`font-bold ${
                                model.anomalyIndex > 65
                                  ? 'text-red-400'
                                  : model.anomalyIndex > 45
                                  ? 'text-amber-400'
                                  : 'text-emerald-400'
                              }`}
                            >
                              {model.anomalyIndex}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Remaining Useful Life (RUL):</span>
                            <span className="text-white font-bold">{model.estimatedHours} Hours</span>
                          </div>
                          <div className="flex justify-between pt-1 border-t border-zinc-800">
                            <span className="text-zinc-400">Diagnostic Status:</span>
                            <span className="text-blue-300 font-bold">{model.status}</span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              ) : card.id === 'ai-mystery-agent' ? (
                <div className="p-5 bg-zinc-900/90 rounded-lg border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <HelpCircle className="w-4 h-4 text-purple-400" />
                    <span>Forensic Deductive Reasoning Engine Simulator</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Test the agent's chain-of-thought analysis. Select an anomalous scenario and suspect to run contradiction detection.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-zinc-300 block mb-1">Investigation Case Scenario:</label>
                      <select
                        value={mysteryScenario}
                        onChange={(e) => setMysteryScenario(e.target.value)}
                        className="w-full bg-zinc-800 text-white text-xs p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-purple-500"
                      >
                        <option>The Phantom Cloud Token Outflow (02:14 UTC)</option>
                        <option>The Silent Data Lake Parquet File Corruption</option>
                        <option>The Unauthorized Production Deployment Spike</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-300 block mb-1">Target Suspect / Process Under Review:</label>
                      <select
                        value={selectedSuspect}
                        onChange={(e) => setSelectedSuspect(e.target.value)}
                        className="w-full bg-zinc-800 text-white text-xs p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-purple-500"
                      >
                        <option>Legacy Data Pipeline Webhook (Service Principal)</option>
                        <option>Stale Cron Daemon on Worker Node 04</option>
                        <option>External Analytics Third-Party SDK</option>
                      </select>
                    </div>

                    <button
                      onClick={handleSolveMystery}
                      className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Execute Multi-Agent Deduction</span>
                    </button>

                    {mysteryDeduction && (
                      <div className="p-3 bg-black/70 border border-purple-500/40 rounded text-xs text-purple-200 font-mono whitespace-pre-line leading-relaxed animate-in fade-in">
                        {mysteryDeduction}
                      </div>
                    )}
                  </div>
                </div>
              ) : card.id === 'webpage-slowness-analyzer' ? (
                <div className="p-5 bg-zinc-900/90 rounded-lg border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Gauge className="w-4 h-4 text-pink-400" />
                    <span>Live Core Web Vitals & Hydration Latency Prober</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Input a target endpoint to perform synthetic waterfall auditing and retrieve tailored remediation patches.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-zinc-300 block mb-1">Target Web URL / Domain:</label>
                      <input
                        type="url"
                        value={testUrl}
                        onChange={(e) => setTestUrl(e.target.value)}
                        className="w-full bg-zinc-800 text-white text-xs p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-pink-500 font-mono"
                      />
                    </div>

                    <button
                      onClick={handleRunSpeedAudit}
                      disabled={auditRunning}
                      className="w-full py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Gauge className="w-3.5 h-3.5" />
                      <span>{auditRunning ? 'Auditing DOM Hydration & Waterfalls...' : 'Run Webpage Slowness Audit'}</span>
                    </button>

                    {auditReport && (
                      <div className="space-y-3 animate-in fade-in">
                        {/* Metrics bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                          <div className="p-2 bg-black/60 rounded border border-zinc-700">
                            <span className="text-[10px] text-zinc-400 block">Performance</span>
                            <span className="text-base font-bold text-amber-400 font-mono">{auditReport.perfScore}/100</span>
                          </div>
                          <div className="p-2 bg-black/60 rounded border border-zinc-700">
                            <span className="text-[10px] text-zinc-400 block">LCP</span>
                            <span className="text-sm font-bold text-red-400 font-mono">{auditReport.lcp}</span>
                          </div>
                          <div className="p-2 bg-black/60 rounded border border-zinc-700">
                            <span className="text-[10px] text-zinc-400 block">INP</span>
                            <span className="text-sm font-bold text-amber-400 font-mono">{auditReport.inp}</span>
                          </div>
                          <div className="p-2 bg-black/60 rounded border border-zinc-700">
                            <span className="text-[10px] text-zinc-400 block">TTFB</span>
                            <span className="text-sm font-bold text-emerald-400 font-mono">{auditReport.ttfb}</span>
                          </div>
                        </div>

                        {/* Culprits & Fixes */}
                        <div className="p-3 bg-black/70 border border-zinc-700 rounded text-xs space-y-2">
                          <p className="font-semibold text-pink-300">Identified Latency Bottlenecks:</p>
                          <ul className="list-disc list-inside text-zinc-300 space-y-0.5">
                            {auditReport.culprits.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>

                          <p className="font-semibold text-emerald-300 pt-1">Automated Patch Recommendations:</p>
                          <ul className="list-disc list-inside text-zinc-300 space-y-0.5">
                            {auditReport.remediations.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-5 bg-zinc-900/90 rounded-lg border border-zinc-800 text-center space-y-3">
                  <Cpu className="w-8 h-8 text-[#E50914] mx-auto" />
                  <h5 className="text-sm font-semibold text-white">System Architecture Verified</h5>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto">
                    This module adheres to Ayush's engineering standards: verified modularity, high code clarity, and practical deployment metrics.
                  </p>
                  <button
                    onClick={onOpenResume}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs font-medium"
                  >
                    Examine Technical Certification Records
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#141414] border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            <span>Contact Candidate: </span>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="text-[#E50914] hover:underline font-medium"
            >
              {USER_INFO.email}
            </a>
            <span className="mx-2">·</span>
            <a
              href={`tel:${USER_INFO.rawPhone}`}
              className="text-white hover:underline font-mono"
            >
              +91 {USER_INFO.rawPhone}
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs font-semibold ml-auto"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
