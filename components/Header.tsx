// components/Header.tsx - Heritage Editorial
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

interface HeaderProps {
  onOpenModal?: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-line' : 'bg-cream border-b border-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <span className="logo-mark" />
            <span className="font-display font-medium text-[21px] leading-none text-ink tracking-tight">Driveway Gates Hertfordshire</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <Link href="/services/" className="flex items-center gap-1 text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors tracking-tight">
                Gate Types <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute top-full left-0 w-72 bg-cream-soft border border-line opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 p-2 z-50 mt-2" style={{ boxShadow: '0 20px 40px rgba(26,31,46,0.08)' }}>
                {services.map(service => (
                  <Link key={service.id} href={`/services/${service.slug}/`} className="block px-4 py-2.5 text-sm text-ink-soft hover:text-brass-deep hover:bg-cream-deep transition-colors">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/location/" className="text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors">Locations</Link>
            <Link href="/costs/" className="text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors">Costs</Link>
            <Link href="/guides/" className="text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors">Guides</Link>
            <Link href="/planning-permissions/" className="text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors">Planning</Link>
            <Link href="/blog/" className="text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors">Blog</Link>
            <Link href="/contact/" className="text-[13px] font-medium text-ink-soft hover:text-brass-deep transition-colors">Contact</Link>
            <button onClick={onOpenModal} className="ml-2 btn-primary text-[12px] py-3 px-6">Request Quotes</button>
          </nav>

          <button className="lg:hidden p-2 text-ink" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-cream-soft border-t border-line absolute w-full left-0 shadow-xl z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-6 pt-4 pb-8 space-y-1">
            <div className="py-2">
              <div className="text-[10px] font-semibold text-brass-deep uppercase tracking-[0.2em] mb-3">Gate Types</div>
              {services.map(s => (
                <Link key={s.id} href={`/services/${s.slug}/`} className="block py-2 text-sm text-ink-soft">{s.title}</Link>
              ))}
            </div>
            <Link href="/location/" className="block py-3 text-base font-medium text-ink">Locations</Link>
            <Link href="/costs/" className="block py-3 text-base font-medium text-ink">Costs</Link>
            <Link href="/guides/" className="block py-3 text-base font-medium text-ink">Guides</Link>
            <Link href="/planning-permissions/" className="block py-3 text-base font-medium text-ink">Planning</Link>
            <Link href="/blog/" className="block py-3 text-base font-medium text-ink">Blog</Link>
            <Link href="/contact/" className="block py-3 text-base font-medium text-ink">Contact</Link>
            <div className="pt-6">
              <button onClick={() => { onOpenModal?.(); setMobileOpen(false); }} className="block w-full btn-primary">Request Quotes</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
