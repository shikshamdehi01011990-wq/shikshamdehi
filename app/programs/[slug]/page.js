import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Rocket,
  Settings,
  Users,
} from "lucide-react";

const programData = {
  foundation: {
    title: "Foundation Learning",
    subtitle: "Classes 3–5",
    eyebrow: "BUILDING CURIOSITY",
    description:
      "A hands-on introduction to STEM where students explore how everyday things work and turn simple ideas into working projects.",
    image: "/images/shikshamdehi-practical-sessions.jpeg",
    icon: Lightbulb,

    duration: "1–5 Days / Custom",
    students: "Classes 3–5",
    format: "Workshop / Bootcamp / School Program",

    color: "lime",

    learning: [
      "Understand basic scientific and engineering concepts",
      "Explore simple electronics and circuits",
      "Learn through experiments and activities",
      "Develop observation and problem-solving skills",
      "Build simple working models",
      "Present and explain their projects",
    ],

    projects: [
      {
        title: "Automatic Night Lamp",
        description:
          "Understand light sensing and create a simple lamp that turns on automatically.",
      },
      {
        title: "Balloon Rocket",
        description:
          "Explore force, motion and propulsion through a simple hands-on experiment.",
      },
      {
        title: "Paper Bridge",
        description:
          "Learn about strength, structure and engineering by designing a bridge.",
      },
      {
        title: "Water Wheel",
        description:
          "Explore energy and motion by building a small working water wheel.",
      },
    ],

    skills: [
      "Observation",
      "Creativity",
      "Basic electronics",
      "Problem solving",
      "Teamwork",
      "Presentation",
    ],
  },

  maker: {
    title: "Maker Classes",
    subtitle: "Classes 6–8",
    eyebrow: "BECOME A MAKER",
    description:
      "Students move from simple experiments to designing and building their own electronic, robotic and technology-based prototypes.",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    icon: Settings,

    duration: "1–5 Days / Monthly",
    students: "Classes 6–8",
    format: "Workshop / Bootcamp / School Program",

    color: "cyan",

    learning: [
      "Understand basic electronics and components",
      "Learn Arduino and simple programming",
      "Build sensor-based projects",
      "Explore robotics and mechanisms",
      "Design simple 3D objects",
      "Test, troubleshoot and improve prototypes",
    ],

    projects: [
      {
        title: "Smart Plant Monitor",
        description:
          "Use sensors and Arduino to monitor the condition of a plant.",
      },
      {
        title: "Line Following Robot",
        description:
          "Build a robot that detects a path and follows it automatically.",
      },
      {
        title: "Smart Dustbin",
        description:
          "Create an automatic dustbin using sensors and a motor mechanism.",
      },
      {
        title: "Mini Weather Station",
        description:
          "Collect environmental information using sensors and display the data.",
      },
    ],

    skills: [
      "Arduino",
      "Electronics",
      "Sensors",
      "Robotics",
      "Coding",
      "3D Design",
      "3D Printing",
      "Troubleshooting",
    ],
  },

  innovator: {
    title: "Innovator Program",
    subtitle: "Classes 9–12",
    eyebrow: "SOLVE REAL PROBLEMS",
    description:
      "A project-driven program where students combine technology, engineering and design thinking to solve real-world problems.",
    image: "/images/shikshamdehi-robotics-projects.jpeg",
    icon: Rocket,

    duration: "2–5 Days / Monthly / Annual",
    students: "Classes 9–12",
    format: "Bootcamp / Innovation Program",

    color: "purple",

    learning: [
      "Apply engineering concepts to real problems",
      "Work with Arduino and advanced sensors",
      "Explore IoT and connected devices",
      "Understand robotics systems",
      "Learn design thinking and prototyping",
      "Use testing and iteration to improve solutions",
    ],

    projects: [
      {
        title: "IoT Smart Monitoring System",
        description:
          "Build a connected system that collects and monitors real-world data.",
      },
      {
        title: "Smart Robocar",
        description:
          "Design and program a robotic vehicle using sensors and motors.",
      },
      {
        title: "Solar Tracker",
        description:
          "Build a mechanism that changes its position according to the light source.",
      },
      {
        title: "Smart Automation System",
        description:
          "Design an automated solution for an everyday problem using sensors and control systems.",
      },
    ],

    skills: [
      "Arduino",
      "IoT",
      "Robotics",
      "Sensors",
      "Programming",
      "Design Thinking",
      "Prototyping",
      "Problem Solving",
    ],
  },

  technical: {
    title: "Technical Programs",
    subtitle: "ITI • Polytechnic • College",
    eyebrow: "INDUSTRY-ORIENTED LEARNING",
    description:
      "Practical technical training focused on CAD, 3D printing, electronics, prototyping and project development.",
    image: "/images/shikshamdehi-3d-printing-training.jpeg",
    icon: Settings,

    duration: "1–5 Days / Custom",
    students: "ITI • Polytechnic • College",
    format: "Workshop / Training / Project Program",

    color: "orange",

    learning: [
      "Understand practical engineering workflows",
      "Learn 3D CAD and digital design",
      "Understand 3D printing technologies",
      "Work with electronics and embedded systems",
      "Develop functional prototypes",
      "Follow testing and improvement cycles",
    ],

    projects: [
      {
        title: "3D Printed Functional Prototype",
        description:
          "Convert a digital CAD design into a physical 3D printed prototype.",
      },
      {
        title: "Mechanical Prototype",
        description:
          "Design and build a small mechanical system using engineering principles.",
      },
      {
        title: "Electronics Project",
        description:
          "Build and test an electronics system using components and sensors.",
      },
      {
        title: "Product Prototype",
        description:
          "Take an idea through design, fabrication, testing and presentation.",
      },
    ],

    skills: [
      "3D CAD",
      "3D Printing",
      "Electronics",
      "Embedded Systems",
      "Prototyping",
      "Fabrication",
      "Testing",
      "Technical Documentation",
    ],
  },
};

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = programData[slug];

  if (!program) {
    return (
      <main className="program-not-found">
        <div>
          <h1>Program not found</h1>
          <p>
            The program you are looking for does not exist.
          </p>

          <Link href="/programs">
            <ArrowLeft size={17} />
            Back to Programs
          </Link>
        </div>
      </main>
    );
  }

  const Icon = program.icon;

  return (
    <main className="program-detail-page">

      {/* NAVBAR */}
      <nav className="site-nav">
        <div className="nav-inner">

          <Link href="/" className="logo">
            SHIKSHAM<span>DEHI</span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs" className="active">
              Programs
            </Link>
            <Link href="/#schools">For Schools</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <Link href="/#contact" className="nav-cta">
            Partner With Us
          </Link>

        </div>
      </nav>

      {/* HERO */}
      <section className="program-detail-hero">

        <div className="container">

          <Link href="/programs" className="back-link">
            <ArrowLeft size={17} />
            All Programs
          </Link>

          <div className="program-detail-grid">

            <div className="program-detail-copy">

              <div className={`program-detail-icon ${program.color}`}>
                <Icon size={24} />
              </div>

              <div className="section-eyebrow">
                <span></span>
                {program.eyebrow}
              </div>

              <h1>
                {program.title}
                <span>{program.subtitle}</span>
              </h1>

              <p className="program-detail-description">
                {program.description}
              </p>

              <div className="program-meta">

                <div>
                  <Clock3 size={18} />
                  <div>
                    <small>Duration</small>
                    <strong>{program.duration}</strong>
                  </div>
                </div>

                <div>
                  <Users size={18} />
                  <div>
                    <small>For</small>
                    <strong>{program.students}</strong>
                  </div>
                </div>

                <div>
                  <Settings size={18} />
                  <div>
                    <small>Format</small>
                    <strong>{program.format}</strong>
                  </div>
                </div>

              </div>

              <Link href="/#contact" className="program-primary-button">
                Enquire About This Program
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="program-detail-image">

              <img
                src={program.image}
                alt={`${program.title} - ShikshamDehi`}
              />

              <div className="image-label">
                <span>PROJECT-BASED</span>
                <strong>LEARNING</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHAT STUDENTS LEARN */}
      <section className="program-learning-section">

        <div className="container">

          <div className="program-section-heading">

            <div>
              <div className="section-eyebrow">
                <span></span>
                WHAT STUDENTS LEARN
              </div>

              <h2>
                Concepts become
                <br />
                <em>skills through practice.</em>
              </h2>
            </div>

            <p>
              Students don't just listen to a lesson. They use concepts,
              tools and materials to create something, test it and improve it.
            </p>

          </div>

          <div className="learning-points">

            {program.learning.map((item, index) => (
              <div className="learning-point" key={item}>

                <span className="learning-point-number">
                  0{index + 1}
                </span>

                <CheckCircle2 size={20} />

                <p>{item}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="program-projects-section">

        <div className="container">

          <div className="section-eyebrow">
            <span></span>
            SAMPLE PROJECTS
          </div>

          <h2>
            What will students
            <br />
            <em>actually build?</em>
          </h2>

          <div className="detail-project-grid">

            {program.projects.map((project, index) => (
              <article
                className="detail-project-card"
                key={project.title}
              >

                <div className="detail-project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-arrow">
                  <ArrowRight size={18} />
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="program-skills-section">

        <div className="container">

          <div className="skills-box">

            <div>

              <div className="section-eyebrow">
                <span></span>
                SKILLS DEVELOPED
              </div>

              <h2>
                Beyond technology,
                <br />
                <em>students develop capability.</em>
              </h2>

            </div>

            <div className="detail-skills">

              {program.skills.map((skill) => (
                <span key={skill}>
                  <CheckCircle2 size={16} />
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* METHOD */}
      <section className="program-method-section">

        <div className="container">

          <div className="method-heading">

            <div className="section-eyebrow">
              <span></span>
              THE MAKER JOURNEY
            </div>

            <h2>
              Learn → Build →
              <br />
              <em>Make it real.</em>
            </h2>

          </div>

          <div className="method-steps">

            <div>
              <strong>01</strong>
              <span>Learn</span>
              <p>Understand the concept.</p>
            </div>

            <div>
              <strong>02</strong>
              <span>Design</span>
              <p>Think about the solution.</p>
            </div>

            <div>
              <strong>03</strong>
              <span>Build</span>
              <p>Create the prototype.</p>
            </div>

            <div>
              <strong>04</strong>
              <span>Test</span>
              <p>Find what works.</p>
            </div>

            <div>
              <strong>05</strong>
              <span>Improve</span>
              <p>Fix and refine the idea.</p>
            </div>

            <div>
              <strong>06</strong>
              <span>Demonstrate</span>
              <p>Explain what you built.</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="program-detail-cta">

        <div className="container">

          <div className="detail-cta-box">

            <div>

              <div className="section-eyebrow">
                <span></span>
                BRING THIS PROGRAM TO YOUR SCHOOL
              </div>

              <h2>
                Let's build a practical
                <br />
                <em>learning experience.</em>
              </h2>

              <p>
                Tell us about your students, requirements and available
                infrastructure. We'll help you plan the right program.
              </p>

            </div>

            <Link href="/#contact" className="program-primary-button dark">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="site-footer">

        <div className="container">

          <div className="footer-inner">

            <Link href="/" className="logo">
              SHIKSHAM<span>DEHI</span>
            </Link>

            <p>
              Learn it. Build it. Make it real.
            </p>

            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/#schools">For Schools</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </div>

          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} ShikshamDehi. All rights reserved.
            </span>

            <span>
              Practical Learning • STEM • Innovation
            </span>
          </div>

        </div>

      </footer>

    </main>
  );
}
