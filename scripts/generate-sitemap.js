import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://estimatingflorida.com';
const WP_API_BASE = 'https://cms.estimatingflorida.com/wp-json/wp/v2';

const STATIC_ROUTES = [
  '/',
  '/about',
  '/services',
  '/locations',
  '/contact',
  '/quote',
  '/sample',
  '/blog',
  '/pricing'
];

async function fetchWPRoutes() {
  try {
    const [pagesRes, postsRes] = await Promise.all([
      fetch(`${WP_API_BASE}/pages?per_page=100`),
      fetch(`${WP_API_BASE}/posts?per_page=100`)
    ]);

    const pages = await pagesRes.json();
    const posts = await postsRes.json();

    const pageRoutes = pages
      .filter(page => page.slug !== 'home')
      .map(page => `/${page.slug}`);
    const postRoutes = posts.map(post => `/blog/${post.slug}`);

    return [...pageRoutes, ...postRoutes];
  } catch (error) {
    console.error('Error fetching WP routes:', error);
    return [];
  }
}

function generateSitemap(routes) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;

  return xml;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Sitemap: ${DOMAIN}/sitemap.xml
`;
}

async function main() {
  console.log('Generating sitemap...');
  
  const dynamicRoutes = await fetchWPRoutes();
  const allRoutes = [...new Set([...STATIC_ROUTES, ...dynamicRoutes])];
  
  const sitemap = generateSitemap(allRoutes);
  const robots = generateRobotsTxt();
  
  // Ensure dist directory exists (if running after build) or public (if before)
  // We'll write to public so it's copied to dist on build
  const publicDir = path.resolve(__dirname, '../public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  
  console.log(`Generated sitemap with ${allRoutes.length} locations`);
  console.log('Generated robots.txt');
}

main();
