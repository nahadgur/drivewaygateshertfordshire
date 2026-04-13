// components/HeritageHeroMoney.tsx - M3 Floating Form hero, fixed overflow
'use client';

import { HeritageLeadForm } from './HeritageLeadForm';

interface HeritageHeroMoneyProps {
  eyebrow: string;
  headline: React.ReactNode;
  lede: string;
  image?: string;
  imageLabel?: string;
  city?: string;
  service?: string;
  formTitle?: string;
}

export function HeritageHeroMoney({ eyebrow, headline, lede, image, imageLabel, city, service, formTitle }: HeritageHeroMoneyProps) {
  return (
    <section className="relative overflow-hidden w-full" style={{ minHeight: '640px' }}>
      {/* Cream panel left (desktop only) */}
      <div className="absolute inset-y-0 left-0 w-[58%] bg-cream-soft z-[1] hidden md:block" />

      {/* Image right (desktop) / full-bleed behind (mobile) */}
      <div className="absolute inset-y-0 right-0 left-0 md:left-[42%] z-0">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={imageLabel || ''} className="w-full h-full object-cover" />
        ) : (
          <div className="heritage-ph w-full h-full relative">
            {imageLabel && (
              <div className="absolute bottom-5 left-5 text-xs uppercase font-semibold tracking-[0.2em]" style={{ color: 'rgba(245,237,224,0.6)' }}>— {imageLabel}</div>
            )}
          </div>
        )}
        {/* Mobile darkening overlay */}
        <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(180deg, rgba(26,31,46,0.3), rgba(26,31,46,0.85))' }} />
      </div>

      {/* Constrained content container */}
      <div className="relative z-[2] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[640px] px-6 md:px-14 py-20 md:py-24">
          {/* Text column — constrained to ~5 of 12 cols so it never crosses into image area */}
          <div className="md:col-span-5 md:pr-6 text-cream md:text-ink">
            <span className="eyebrow mb-7 block" style={{ color: 'var(--brass)' }}>{eyebrow}</span>
            <h1 className="h1-display text-[38px] sm:text-[46px] lg:text-[54px] mb-7 text-balance leading-[1.02]">{headline}</h1>
            <p className="text-[16px] leading-[1.6] mb-6 max-w-[420px] font-display italic font-light">
              <span className="hidden md:inline" style={{ color: 'var(--muted)' }}>{lede}</span>
              <span className="md:hidden" style={{ color: 'rgba(245,237,224,0.85)' }}>{lede}</span>
            </p>
          </div>
          <div className="hidden md:block md:col-span-7" />
        </div>
      </div>

      {/* Desktop floating form — positioned via right offset from viewport edge */}
      <div className="absolute top-1/2 right-6 lg:right-14 -translate-y-1/2 w-[360px] lg:w-[380px] z-[4] hidden md:block" style={{ boxShadow: '0 30px 80px rgba(26,31,46,0.25)' }}>
        <HeritageLeadForm city={city} service={service} title={formTitle} />
      </div>

      {/* Mobile form stacked below */}
      <div className="md:hidden px-6 pb-10 -mt-4 relative z-[5]">
        <HeritageLeadForm city={city} service={service} title={formTitle} />
      </div>
    </section>
  );
}
