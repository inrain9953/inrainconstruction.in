const BASE_URL = 'https://www.inrainconstruction.in'
const Location = [
  { loc: 'Noida', slug: 'noida', pincode: '201301', id: 1 },
  { loc: 'Gurgaon', slug: 'gurgaon', pincode: '122001', id: 2 },
  { loc: 'Bengaluru', slug: 'bengaluru', pincode: '560001', id: 3 },
  { loc: 'Hyderabad', slug: 'hyderabad', pincode: '500001', id: 4 },
  { loc: 'Pune', slug: 'pune', pincode: '411001', id: 5 },
  { loc: 'Chennai', slug: 'chennai', pincode: '600001', id: 6 }
]

function generateSiteMap () {
  const staticPages = [
    '/',
    '/about',
    '/products',
    '/contact-us',
    '/rainwater-harvesting-system',
    '/modular-rainwater-harvesting-system',
    '/rainwater-harvesting-system-for-industries',
    '/blogs',
    '/blogs/rainwater-harvesting-system-empower-your-life-with-sustainable-practices',
    '/blogs/advancing-sustainability-with-modular-rainwater-harvesting',
    '/blogs/rainwater-harvesting-for-industries',
    '/blogs/stormwater-management-in-india-a-growing-need',
    "/blogs/a-bengaluru-architect's-blueprint-for-sustainable-living"
  ]

  // Static pages
  const staticUrls = staticPages
    .map(
      page => `
      <url>
        <loc>${BASE_URL}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join('')

  // Dynamic pages
  const RWHSystem = Location.map(loc => {
    return `
        <url>
          <loc>${BASE_URL}/${loc.slug}/rainwater-harvesting-system</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
  }).join('')

  const ModularRWHSystem = Location.map(loc => {
    return `
        <url>
          <loc>${BASE_URL}/${loc.slug}/modular-rainwater-harvesting-system</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
  }).join('')

  const RWHForIndustry = Location.map(loc => {
    return `
        <url>
          <loc>${BASE_URL}/${
      loc.slug
    }/rainwater-harvesting-system-for-industries</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${staticUrls}
    ${RWHSystem}
    ${ModularRWHSystem}
    ${RWHForIndustry}
  </urlset>`
}

export async function getServerSideProps ({ res }) {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default function Sitemap () {
  return null
}
