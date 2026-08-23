export default function robots() {
  const baseUrl = 'https://shikshamdehi-cyan.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
