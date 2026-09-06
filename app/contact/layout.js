export const metadata = {
  title: "Contact ShikshamDehi | STEM Programs for Schools",

  description:
    "Contact ShikshamDehi to bring practical STEM and technology learning to your school. Enquire about robotics, Arduino, electronics, 3D design, 3D printing, IoT, AI, workshops, bootcamps and teacher training.",

  keywords: [
    "contact ShikshamDehi",
    "STEM programs for schools",
    "STEM workshop enquiry",
    "school STEM training",
    "robotics training for schools",
    "Arduino workshops for schools",
    "electronics training for students",
    "3D printing workshops",
    "3D design training",
    "IoT training for students",
    "AI education programs",
    "teacher training STEM",
    "project based learning",
    "practical learning programs",
    "school technology programs",
    "STEM education India",
    "ShikshamDehi",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact ShikshamDehi | STEM Programs for Schools",

    description:
      "Enquire about practical STEM, robotics, Arduino, electronics, 3D design, 3D printing, IoT, AI and teacher training programs for your school.",

    url: "/contact",

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
      "Contact ShikshamDehi | STEM Programs for Schools",

    description:
      "Bring hands-on STEM, robotics, Arduino, electronics, 3D design, 3D printing and innovation learning to your school.",

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

export default function ContactLayout({ children }) {
  return children;
}
