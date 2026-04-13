// components/Footer.tsx - Heritage Editorial
import Link from 'next/link';
import { services } from '@/data/services';

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center mb-5">
              <span className="logo-mark" />
              <span className="font-display font-medium text-[21px] leading-none tracking-tight">Driveway Gates Hertfordshire</span>
            </div>
            <p className="font-display italic text-[17px] leading-[1.55] font-light max-w-md" style={{ color: 'rgba(245,237,224,0.65)' }}>
              A matching network for Hertfordshire homeowners seeking vetted gate installation specialists. Free surveys, written quotes, no obligation.
            </p>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(245,237,224,0.12)' }}>
              <div className="text-[10px] uppercase font-semibold tracking-[0.22em] mb-3" style={{ color: 'var(--brass)' }}>— Network Standard</div>
              <div className="flex gap-6 text-[12px]" style={{ color: 'rgba(245,237,224,0.75)' }}>
                <span><span className="font-display text-[18px] mr-1.5" style={{ color: 'var(--brass)' }}>47</span>Installers</span>
                <span><span className="font-display text-[18px] mr-1.5" style={{ color: 'var(--brass)' }}>75</span>Towns</span>
                <span><span className="font-display text-[18px] mr-1.5" style={{ color: 'var(--brass)' }}>£2m</span>Insurance</span>
                <span><span className="font-display text-[18px] mr-1.5" style={{ color: 'var(--brass)' }}>4hr</span>Response</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-semibold tracking-[0.22em] mb-5" style={{ color: 'var(--brass)' }}>— Gate Types</h4>
            <ul className="space-y-3 text-[13px]">
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brass transition-colors" style={{ color: 'rgba(245,237,224,0.75)' }}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-semibold tracking-[0.22em] mb-5" style={{ color: 'var(--brass)' }}>— Popular Locations</h4>
            <ul className="space-y-3 text-[13px]">
              {[
                { label: 'Gates in St Albans', href: '/location/st-albans/' },
                { label: 'Gates in Harpenden', href: '/location/harpenden/' },
                { label: 'Gates in Hertford', href: '/location/hertford/' },
                { label: 'Gates in Welwyn Garden City', href: '/location/welwyn-garden-city/' },
                { label: 'Gates in Watford', href: '/location/watford/' },
                { label: 'Gates in Hitchin', href: '/location/hitchin/' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brass transition-colors" style={{ color: 'rgba(245,237,224,0.75)' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-wrap justify-between items-center gap-6" style={{ borderColor: 'rgba(245,237,224,0.12)' }}>
          <div className="text-[11px] uppercase tracking-[0.15em]" style={{ color: 'rgba(245,237,224,0.5)' }}>
            © {new Date().getFullYear()} Driveway Gates Hertfordshire
          </div>
          <div className="flex gap-6 text-[12px]" style={{ color: 'rgba(245,237,224,0.65)' }}>
            <Link href="/sitemap.xml" className="hover:text-brass transition-colors">Sitemap</Link>
            <Link href="/services/" className="hover:text-brass transition-colors">Services</Link>
            <Link href="/location/" className="hover:text-brass transition-colors">Locations</Link>
            <Link href="/how-we-match-you/" className="hover:text-brass transition-colors">How We Match You</Link>
            <Link href="/costs/" className="hover:text-brass transition-colors">Costs</Link>
            <Link href="/guides/" className="hover:text-brass transition-colors">Guides</Link>
            <Link href="/planning-permissions/" className="hover:text-brass transition-colors">Planning</Link>
            <Link href="/join-our-network/" className="hover:text-brass transition-colors">For Installers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
