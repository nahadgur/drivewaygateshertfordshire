// components/HeritageHeroEditorial.tsx - E1 Full-Bleed Cover for editorial pages
interface HeritageHeroEditorialProps {
  eyebrow: string;
  headline: React.ReactNode;
  byline?: string;
  meta?: string;
  image?: string;
  imageLabel?: string;
}

export function HeritageHeroEditorial({ eyebrow, headline, byline, meta, image, imageLabel }: HeritageHeroEditorialProps) {
  return (
    <section className="relative h-[540px] md:h-[640px] overflow-hidden">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={imageLabel || ''} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="heritage-ph absolute inset-0">
          {imageLabel && (
            <div className="absolute bottom-5 left-5 text-xs uppercase font-semibold tracking-[0.2em]" style={{ color: 'rgba(245,237,224,0.6)' }}>— {imageLabel}</div>
          )}
        </div>
      )}
      {/* Darkening overlay for text contrast */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(26,31,46,0.2) 0%, rgba(26,31,46,0.85) 100%)' }} />

      <div className="absolute inset-0 px-6 md:px-14 py-14 md:py-16 flex flex-col justify-between z-[3]" style={{ color: 'var(--cream)' }}>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          {meta && <div className="text-[10px] uppercase tracking-[0.22em] font-medium opacity-70">{meta}</div>}
        </div>
        <div className="max-w-[960px]">
          <h1 className="h1-display h1-display-light text-[44px] sm:text-[64px] lg:text-[84px] mb-6 text-balance" style={{ color: 'var(--cream)' }}>{headline}</h1>
          {byline && (
            <div className="font-display italic text-[17px] font-light" style={{ color: 'rgba(245,237,224,0.75)' }}>
              <span className="uppercase tracking-[0.15em] text-[12px] not-italic font-semibold font-sans mr-3" style={{ color: 'var(--brass)' }}>Driveway Gates Hertfordshire</span>
              {byline}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
