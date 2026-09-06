export const metadata = {
  title: "Student STEM Projects | Robotics, Arduino & 3D Printing",
  description:
    "Explore hands-on STEM projects for students including Arduino, robotics, electronics, IoT, 3D printing and mechanical engineering. Build, test and improve real working prototypes with ShikshamDehi.",

  keywords: [
    "student STEM projects",
    "STEM projects for students",
    "school STEM projects",
    "Arduino projects for students",
    "robotics projects for students",
    "electronics projects",
    "IoT projects for students",
    "3D printing projects",
    "3D design projects",
    "engineering projects for students",
    "hands-on STEM projects",
    "project based learning",
    "maker projects",
    "ShikshamDehi projects",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title:
      "Student STEM Projects | Robotics, Arduino & 3D Printing | ShikshamDehi",
    description:
      "Explore practical STEM projects covering Arduino, robotics, electronics, IoT, 3D printing and mechanical engineering.",
    url: "/projects",
    siteName: "ShikshamDehi",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Student STEM Projects | Robotics, Arduino & 3D Printing | ShikshamDehi",
    description:
      "Explore hands-on STEM projects designed around real concepts, practical skills and working prototypes.",
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
