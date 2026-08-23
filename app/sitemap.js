export default function sitemap() {
  const baseUrl = 'https://shikshamdehi-cyan.vercel.app';

  const routes = [
    '',
    '/programs',
    '/iti-polytechnic',
    '/projects',
    '/blog',
    '/faq',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
