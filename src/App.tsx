import React, { useState, useEffect, useMemo } from 'react';
import {
  USER_INFO,
  PROFILES,
  Profile,
  FEATURED_PROJECTS,
  WORK_EXPERIENCES,
  CERTIFICATIONS,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroBillboard } from './components/HeroBillboard';
import { ContentRow, RowCardData } from './components/ContentRow';
import { CardModal } from './components/CardModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { MyListDrawer } from './components/MyListDrawer';
import { SearchModal } from './components/SearchModal';
import { ContactModal } from './components/ContactModal';
import { ProfileSelector } from './components/ProfileSelector';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { getAudioMuted, setAudioMuted, playNetflixTudum } from './utils/audio';

export default function App() {
  // Profile state: initially Tech Recruiter for instant usefulness
  const [currentProfile, setCurrentProfile] = useState<Profile>(PROFILES[0]);
  const [showInitialProfileScreen, setShowInitialProfileScreen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Modals state
  const [selectedCard, setSelectedCard] = useState<RowCardData | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMyListOpen, setIsMyListOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Audio mute state
  const [isMuted, setIsMuted] = useState(getAudioMuted());

  // Active section tracking
  const [activeSection, setActiveSection] = useState('home');

  // Recruiter shortlist / My List state
  const [myListIds, setMyListIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ayush_portfolio_my_list');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return ['ai-food-waste-agent', 'google-cloud-genai-academy', 'tata-iq-consultant'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('ayush_portfolio_my_list', JSON.stringify(myListIds));
    } catch {
      // storage unavailable
    }
  }, [myListIds]);

  // Keyboard shortcuts (Escape closes modals, 'M' toggles audio, '/' opens search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
        setIsResumeOpen(false);
        setIsMyListOpen(false);
        setIsSearchOpen(false);
        setIsContactOpen(false);
        setIsProfileModalOpen(false);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleMyList = (id: string) => {
    setMyListIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isInMyList = (id: string) => myListIds.includes(id);

  const handleToggleAudio = () => {
    const next = !isMuted;
    setIsMuted(next);
    setAudioMuted(next);
  };

  // Prepare card rows data
  const projectCards: RowCardData[] = useMemo(
    () =>
      FEATURED_PROJECTS.map((p) => ({
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
      })),
    []
  );

  const experienceCards: RowCardData[] = useMemo(
    () =>
      WORK_EXPERIENCES.map((e) => ({
        id: e.id,
        title: e.role,
        subtitle: e.company,
        category: 'Industry Series',
        matchScore: e.matchScore,
        badge: e.badge,
        yearOrPeriod: e.period,
        tags: e.technologies,
        accentColor: e.accentColor,
        summarySnippet: e.summary,
        type: 'experience',
      })),
    []
  );

  const certificationCards: RowCardData[] = useMemo(
    () =>
      CERTIFICATIONS.map((c) => ({
        id: c.id,
        title: c.title,
        subtitle: c.issuer,
        category: 'Official Credential',
        matchScore: c.matchScore,
        badge: c.badge,
        yearOrPeriod: c.cohortYear,
        tags: c.skillsVerified,
        accentColor: c.accentColor,
        summarySnippet: c.description,
        type: 'certificate',
      })),
    []
  );

  // Recommendations tailored to selected profile persona
  const recommendedCards: RowCardData[] = useMemo(() => {
    if (currentProfile.id === 'recruiter') {
      return [certificationCards[0], experienceCards[0], projectCards[4], certificationCards[9] || certificationCards[1]];
    }
    if (currentProfile.id === 'cto') {
      return [projectCards[4], projectCards[5], projectCards[1], certificationCards[0]];
    }
    if (currentProfile.id === 'client') {
      return [projectCards[5], projectCards[2], certificationCards[7] || projectCards[0], experienceCards[3]];
    }
    return [projectCards[4], projectCards[5], certificationCards[0], experienceCards[0]];
  }, [currentProfile.id, projectCards, experienceCards, certificationCards]);

  const handleOpenProjectDetailById = (projectId: string) => {
    const card =
      projectCards.find((c) => c.id === projectId) ||
      experienceCards.find((c) => c.id === projectId) ||
      certificationCards.find((c) => c.id === projectId);
    if (card) setSelectedCard(card);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#E5E5E5] flex flex-col font-['Plus_Jakarta_Sans']">
      {/* Top Navigation */}
      <Navbar
        currentProfile={currentProfile}
        myListCount={myListIds.length}
        isAudioMuted={isMuted}
        onToggleAudio={handleToggleAudio}
        onOpenMyList={() => setIsMyListOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onSwitchProfile={() => setIsProfileModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Cinematic Hero Billboard */}
      <HeroBillboard
        currentProfile={currentProfile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenProjectDetail={handleOpenProjectDetailById}
        onToggleMyList={handleToggleMyList}
        isInMyList={isInMyList}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Carousel Rows Container */}
      <main className="flex-1 space-y-4 sm:space-y-8 -mt-8 sm:-mt-16 relative z-20">
        {/* Recommended for current persona */}
        <ContentRow
          rowId="recommended"
          title={`Top Picks for ${currentProfile.name}`}
          subtitle={currentProfile.recommendedTag}
          cards={recommendedCards}
          onCardClick={(card) => setSelectedCard(card)}
          onToggleMyList={handleToggleMyList}
          isInMyList={isInMyList}
        />

        {/* Row 1: Featured Projects */}
        <ContentRow
          rowId="projects"
          title="Trending Now: Blockbuster Projects & AI Agents"
          subtitle="Autonomous agents, predictive modeling & civic tech"
          cards={projectCards}
          onCardClick={(card) => setSelectedCard(card)}
          onToggleMyList={handleToggleMyList}
          isInMyList={isInMyList}
        />

        {/* Row 2: Professional Experience Series */}
        <ContentRow
          rowId="experience"
          title="Critically Acclaimed: Experience & Roles"
          subtitle="TATA iQ, Ordnance Factory Chanda, GAO TEK, TechServ"
          cards={experienceCards}
          onCardClick={(card) => setSelectedCard(card)}
          onToggleMyList={handleToggleMyList}
          isInMyList={isInMyList}
        />

        {/* Row 3: Certifications & Masteries */}
        <ContentRow
          rowId="certifications"
          title="Award-Winning: Certifications & Masteries"
          subtitle="Google Cloud GenAI Academy, Microsoft Fabric, NxtWave, Kaggle"
          cards={certificationCards}
          onCardClick={(card) => setSelectedCard(card)}
          onToggleMyList={handleToggleMyList}
          isInMyList={isInMyList}
        />

        {/* Technical Skills Section ("Browse by Genre") */}
        <SkillsSection />

        {/* Education & Community Section */}
        <EducationSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onSwitchProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Popups & Drawers */}
      {/* 1. Detail / Preview Modal */}
      <CardModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        onToggleMyList={handleToggleMyList}
        isInMyList={isInMyList}
        onOpenResume={() => {
          setSelectedCard(null);
          setIsResumeOpen(true);
        }}
      />

      {/* 2. Official Scanned Resume Document & ATS Modal */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={() => {
          setIsResumeOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* 3. Recruiter Shortlist / My List Drawer */}
      <MyListDrawer
        isOpen={isMyListOpen}
        onClose={() => setIsMyListOpen(false)}
        myListIds={myListIds}
        onRemoveItem={(id) => handleToggleMyList(id)}
        onClearAll={() => setMyListIds([])}
        onOpenCardDetail={(id) => handleOpenProjectDetailById(id)}
        onOpenContact={() => {
          setIsMyListOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* 4. Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCard={(card) => {
          setIsSearchOpen(false);
          setSelectedCard(card);
        }}
        onToggleMyList={handleToggleMyList}
        isInMyList={isInMyList}
      />

      {/* 5. Direct Connect / Hire Me Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* 6. Persona Profile Switcher Modal */}
      {isProfileModalOpen && (
        <ProfileSelector
          currentProfile={currentProfile}
          onSelectProfile={(profile) => {
            setCurrentProfile(profile);
            setIsProfileModalOpen(false);
          }}
          onClose={() => setIsProfileModalOpen(false)}
          isModal={true}
        />
      )}
    </div>
  );
}
