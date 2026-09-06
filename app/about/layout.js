export const metadata = {
  title: "About ShikshamDehi | Practical STEM & Project-Based Learning",

  description:
    "Learn about ShikshamDehi and our approach to practical STEM education. We help students turn classroom concepts into real-world projects through hands-on learning, robotics, electronics, Arduino, 3D design, 3D printing and innovation.",

  keywords: [
    "ShikshamDehi",
    "about ShikshamDehi",
    "practical STEM education",
    "project based learning",
    "hands-on STEM education",
    "STEM education",
    "maker education",
    "innovation education",
    "future skills education",
    "learning by doing",
    "robotics education",
    "Arduino education",
    "electronics education",
    "3D design education",
    "3D printing education",
    "IoT education",
    "student innovation",
    "practical learning",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About ShikshamDehi | Practical STEM & Project-Based Learning",

    description:
      "Discover how ShikshamDehi turns classroom concepts into practical projects through hands-on STEM, technology and project-based learning.",

    url: "/about",

    siteName: "ShikshamDehi",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/shikshamdehi-group-projects.png",
        width: 1200,
        height: 630,
        alt:
          "Students working together on a practical STEM project with ShikshamDehi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About ShikshamDehi | Practical STEM & Project-Based Learning",

    description:
      "ShikshamDehi helps students learn by building, testing, solving and improving real-world projects.",

    images: [
      "/images/shikshamdehi-group-projects.png",
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

export default function AboutLayout({ children }) {
  return children;
}
