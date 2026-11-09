import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Info, Bookmark, Check } from 'lucide-react';
import { playHoverTick, playNetflixTudum } from '../utils/audio';

export interface RowCardData {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  matchScore: number;
  badge?: string;
  yearOrPeriod?: string;
  tags: string[];
  image?: string;
  accentColor?: string;
  summarySnippet: string;
  type: 'project' | 'experience' | 'certificate' | 'skill';
}

interface ContentRowProps {
  title: string;
  subtitle?: string;
  cards: RowCardData[];
  onCardClick: (card: RowCardData) => void;
  onToggleMyList: (id: string) => void;
  isInMyList: (id: string) => boolean;
  rowId: string;
}

export const ContentRow: React.FC<ContentRowProps> = ({
  title,
  subtitle,
  cards,
  onCardClick,
  onToggleMyList,
  isInMyList,
  rowId,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id={rowId} className="relative py-4 sm:py-6 group/row">
      {/* Row Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Montserrat'] hover:text-[#E50914] transition-colors cursor-pointer flex items-center gap-2">
            <span>{title}</span>
            <span className="text-xs text-[#E50914] font-semibold tracking-wider uppercase opacity-0 group-hover/row:opacity-100 transition-opacity">
              Explore All →
            </span>
          </h2>
          {subtitle && (
            <span className="hidden sm:inline-block text-xs text-zinc-400">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Row Content Wrapper */}
      <div className="relative">
        {/* Left Scroll Chevron */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-0 bottom-0 z-20 w-10 sm:w-12 bg-black/70 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label={`Scroll ${title} left`}
        >
          <ChevronLeft className="w-8 h-8 transform hover:scale-125 transition-transform" />
        </button>

        {/* Horizontal Carousel Track */}
        <div
          ref={rowRef}
          className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-6 lg:px-8 py-3"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {cards.map((card, idx) => {
            const bookmarked = isInMyList(card.id);
            return (
              <div
                key={card.id}
                onMouseEnter={playHoverTick}
                className="shrink-0 w-64 sm:w-80 md:w-88 group rounded-md bg-[#181818] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => {
                  playNetflixTudum();
                  onCardClick(card);
                }}
              >
                {/* Top Poster / Card Visual Banner */}
                <div className="relative h-36 sm:h-44 w-full bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
                  {/* Subtle Accent Ambient Glow */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity"
                    style={{ backgroundColor: card.accentColor || '#E50914' }}
                  />

                  {/* Visual Background / Badge */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <div className="flex items-start justify-between gap-2">
                      {card.badge ? (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-black/80 text-white border border-zinc-700">
                          {card.badge}
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-zinc-400">
                          {card.category || 'ORIGINAL'}
                        </span>
                      )}

                      <span className="text-[11px] font-mono font-bold text-emerald-400 bg-black/70 px-1.5 py-0.5 rounded">
                        {card.matchScore}% Match
                      </span>
                    </div>

                    {/* Middle watermark rank or title icon */}
                    <div className="text-right">
                      <span className="text-4xl sm:text-5xl font-['Bebas_Neue'] font-black text-white/10 group-hover:text-white/20 transition-colors">
                        #{idx + 1}
                      </span>
                    </div>

                    {/* Card Title on banner */}
                    <div>
                      {card.subtitle && (
                        <p className="text-[11px] font-medium text-zinc-400 truncate">
                          {card.subtitle}
                        </p>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-white font-['Montserrat'] tracking-tight group-hover:text-white line-clamp-1">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Gradient Scrim on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/40" />
                </div>

                {/* Card Body Details */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-zinc-300 line-clamp-2 mb-3 leading-relaxed">
                    {card.summarySnippet}
                  </p>

                  <div>
                    {/* Metadata line without pills */}
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-2.5 font-medium truncate">
                      {card.yearOrPeriod && <span>{card.yearOrPeriod}</span>}
                      {card.yearOrPeriod && <span aria-hidden="true">·</span>}
                      <span className="text-zinc-400 truncate">
                        {card.tags.slice(0, 3).join(' · ')}
                      </span>
                    </div>

                    {/* Action Bar on Card */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playNetflixTudum();
                            onCardClick(card);
                          }}
                          className="p-1.5 bg-white text-black hover:bg-zinc-200 rounded-full transition-transform hover:scale-110 shadow"
                          title="Inspect Details"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleMyList(card.id);
                          }}
                          className={`p-1.5 rounded-full border transition-all ${
                            bookmarked
                              ? 'bg-[#E50914] border-[#E50914] text-white'
                              : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400'
                          }`}
                          title={bookmarked ? 'Remove from My List' : 'Add to My List'}
                        >
                          {bookmarked ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Bookmark className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playNetflixTudum();
                          onCardClick(card);
                        }}
                        className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Episode Guide</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Scroll Chevron */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-10 sm:w-12 bg-black/70 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label={`Scroll ${title} right`}
        >
          <ChevronRight className="w-8 h-8 transform hover:scale-125 transition-transform" />
        </button>
      </div>
    </div>
  );
};
