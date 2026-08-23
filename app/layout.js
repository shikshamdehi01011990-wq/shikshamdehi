import './globals.css';

export const metadata = {
  metadataBase: new URL('https://shikshamdehi-cyan.vercel.app'),

  title: {
    default: 'ShikshamDehi | Future Skills. Real Projects.',
    template: '%s | ShikshamDehi',
  },

  description:
    'ShikshamDehi provides hands-on STEM education and future-skills training in 3D Design, 3D Printing, Arduino, Robotics, IoT, AI and project-based learning for schools, ATL Labs, ITIs, Polytechnics, colleges and educators.',

  keywords: [
    'ShikshamDehi',
    'STEM Education',
    '3D Design Training',
    '3D Printing Training',
    'Arduino Training',
    'Robotics Training',
    'IoT Training',
    'AI Education',
    'Maker Education',
    'ATL Lab Training',
    'ITI Training',
    'Polytechnic Training',
    'Student Projects',
    'Future Skills',
  ],

  authors: [
    {
      name: 'ShikshamDehi',
    },
  ],

  creator: 'ShikshamDehi',
  publisher: 'ShikshamDehi',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shikshamdehi-cyan.vercel.app',
    siteName: 'ShikshamDehi',
    title: 'ShikshamDehi | Future Skills. Real Projects.',
    description:
      'Hands-on STEM education in 3D Design, 3D Printing, Arduino, Robotics, IoT, AI and project-based learning.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ShikshamDehi | Future Skills. Real Projects.',
    description:
      'Hands-on STEM education, digital manufacturing and future-skills training.',
  },

  alternates: {
    canonical: 'https://shikshamdehi-cyan.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
