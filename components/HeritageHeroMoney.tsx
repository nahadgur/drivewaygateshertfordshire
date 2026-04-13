// components/HeritageHeroMoney.tsx - M3 Floating Form hero
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
    <section className="relative overflow-hidden" style={{ minHeight: '640px' }}>
      <div className="absolute inset-y-0 left-0 w-[55%] bg-cream-soft z-[1] hidden md:block" />
      <div className="absolute inset-y-0 right-0 left-0 md:left-[40%]">
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
        <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(180deg, rgba(26,31,46,0.3), rgba(26,31,46,0.8))' }} />
      </div>

      <div className="relative z-[2] px-6 md:px-14 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[640px] text-cream md:text-ink">
        <div className="md:pr-8">
          <span className="eyebrow mb-8 block" style={{ color: 'var(--brass)' }}>{eyebrow}</span>
          <h1 className="h1-display text-[42px] sm:text-[54px] lg:text-[62px] mb-8 text-balance">{headline}</h1>
          <p className="text-[17px] leading-[1.55] mb-6 max-w-[440px] font-display italic font-light" style={{ color: 'rgba(245,237,224,0.85)' }}>
            <span className="hidden md:inline" style={{ color: 'var(--muted)' }}>{lede}</span>
            <span className="md:hidden">{lede}</span>
          </p>
        </div>
        <div />
      </div>

      <div className="absolute top-1/2 right-6 lg:right-14 -translate-y-1/2 w-[360px] lg:w-[380px] z-[4] hidden md:block" style={{ boxShadow: '0 30px 80px rgba(26,31,46,0.25)' }}>
        <HeritageLeadForm city={city} service={service} title={formTitle} />
      </div>

      <div className="md:hidden px-6 pb-10 -mt-10 relative z-[5]">
        <HeritageLeadForm city={city} service={service} title={formTitle} />
      </div>
    </section>
  );
}
