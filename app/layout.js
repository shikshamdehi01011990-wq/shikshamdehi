import './globals.css';

export const metadata = {
  metadataBase: new URL('https://shikshamdehi-cyan.vercel.app'),

  title: {
    default: 'ShikshamDehi | Future Skills. Real Projects.',
    template: '%s | ShikshamDehi',
  },

  description:
    'ShikshamDehi provides hands-on STEM education, 3D design, 3D printing, Arduino, robotics, IoT, AI and project-based technology training for schools, ATL Labs, ITI, polytechnics, colleges and educators.',

  keywords: [
    'ShikshamDehi',
    'STEM education',
    'future skills',
    '3D design training',
    '3D printing training',
    'Arduino training',
    'robotics training',
    'IoT training',
    'AI education',
    'ATL Lab training',
    'ITI training',
    'polytechnic training',
    'student projects',
    'maker education',
    'technology workshops',
  ],

  authors: [
    {
      name: 'ShikshamDehi',
    },
  ],

  creator: 'ShikshamDehi',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'ShikshamDehi | Future Skills. Real Projects.',
    description:
      'Hands-on STEM, 3D design, 3D printing, Arduino, robotics, IoT and AI learning programs.',
    url: 'https://shikshamdehi-cyan.vercel.app',
    siteName: 'ShikshamDehi',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ShikshamDehi | Future Skills. Real Projects.',
    description:
      'Hands-on technology education through 3D design, 3D printing, Arduino, robotics, IoT and AI.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'ShikshamDehi',
  url: 'https://shikshamdehi-cyan.vercel.app',
  description:
    'Future-skills education platform focused on STEM education, 3D design, 3D printing, Arduino, robotics, IoT, AI and project-based learning.',
  knowsAbout: [
    'STEM Education',
    '3D Design',
    '3D Printing',
    'Arduino',
    'Robotics',
    'IoT',
    'Artificial Intelligence',
    'Maker Education',
    'Digital Manufacturing',
    'Project-Based Learning',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ShikshamDehi',
  url: 'https://shikshamdehi-cyan.vercel.app',
  description:
    'Future-skills education and practical technology learning platform.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
