/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Generic how-to posts single-owned by a sibling site on 2026-11-23; each
      // former URL goes to the closest Hertfordshire page.
      { source: '/blog/how-wide-should-driveway-gates-be-measuring-guide/', destination: '/blog/electric-sliding-vs-swing-gates-hertfordshire/', permanent: true },
      { source: '/blog/how-long-do-electric-gates-last-before-replacing/', destination: '/blog/electric-gate-maintenance-hertfordshire/', permanent: true },
      { source: '/blog/best-electric-gate-motor-brands-uk-compared/', destination: '/blog/electric-gate-automation-retrofit-hertfordshire/', permanent: true },
      { source: '/blog/what-to-do-when-electric-gates-stop-working/', destination: '/services/gate-repair-and-maintenance/', permanent: true },
      { source: '/blog/can-you-install-driveway-gates-on-a-sloped-driveway/', destination: '/blog/electric-sliding-vs-swing-gates-hertfordshire/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

module.exports = nextConfig;
