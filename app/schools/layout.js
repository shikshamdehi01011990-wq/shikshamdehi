export const metadata = {
  title: "STEM Education Programs for Schools | Practical Learning",

  description:
    "Bring practical, project-based STEM learning to your school with ShikshamDehi. Explore robotics, Arduino, electronics, 3D design, 3D printing, IoT, mechanical systems, teacher training and innovation programs.",

  keywords: [
    "STEM education for schools",
    "STEM programs for schools",
    "school STEM programs",
    "practical learning for schools",
    "project based learning",
    "STEM workshops for schools",
    "robotics workshops for schools",
    "Arduino training for students",
    "electronics workshops for schools",
    "3D printing workshops for schools",
    "3D design training for students",
    "IoT projects for students",
    "maker education",
    "innovation programs for schools",
    "teacher training STEM",
    "teacher maker training",
    "school robotics training",
    "student project based learning",
    "hands-on learning",
    "ShikshamDehi",
  ],

  alternates: {
    canonical: "/schools",
  },

  openGraph: {
    title:
      "STEM Education Programs for Schools | Practical Learning | ShikshamDehi",

    description:
      "Hands-on STEM and technology programs for schools covering robotics, Arduino, electronics, 3D design, 3D printing, IoT, mechanical systems and innovation.",

    url: "/schools",

    siteName: "ShikshamDehi",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/shikshamdehi-practical-sessions.jpeg",
        width: 1200,
        height: 630,
        alt:
          "Students participating in practical STEM learning with ShikshamDehi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "STEM Education Programs for Schools | ShikshamDehi",

    description:
      "Practical, project-based STEM learning for schools through robotics, Arduino, electronics, 3D design, 3D printing, IoT and innovation projects.",

    images: [
      "/images/shikshamdehi-practical-sessions.jpeg",
    ],
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

export default function SchoolsLayout({ children }) {
  return children;
}
