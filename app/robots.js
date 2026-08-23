export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://shikshamdehi-cyan.vercel.app/sitemap.xml',
  };
}
