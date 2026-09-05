"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Lightbulb,
  Menu,
  Rocket,
  School,
  Settings,
  X,
} from "lucide-react";

const programs = [
  {
    icon: Lightbulb,
    title: "Foundation Learning",
    classes: "Classes 3–5",
    description:
      "Curiosity-led activities that help students understand science and technology through simple hands-on projects.",
    image: "/images/shikshamdehi-practical-sessions.jpeg",
    points: [
      "Science through activities",
      "Build simple working models",
      "Observe, ask & experiment",
    ],
  },
  {
    icon: Settings,
    title: "Maker Classes",
    classes: "Classes 6–8",
    description:
      "Students learn to design, build and test real working projects using electronics, mechanics and digital fabrication.",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    points: [
      "Arduino & electronics",
      "Robotics & mechanisms",
      "3D Design & Printing",
    ],
  },
  {
    icon: Cpu,
    title: "Innovator Program",
    classes: "Classes 9–12",
    description:
      "Students move from following instructions to solving problems and creating their own technology-based prototypes.",
    image: "/images/shikshamdehi-robotics-projects.jpeg",
    points: [
      "IoT & automation",
      "Design thinking",
      "Innovation projects",
    ],
  },
  {
    icon: Rocket,
    title: "Technical Programs",
    classes: "ITI • Polytechnic • College",
    description:
      "Industry-oriented practical training focused on real tools, technologies, prototyping and project development.",
    image: "/images/shikshamdehi-3d-printing-training.jpeg",
    points: [
      "Advanced prototyping",
      "3D CAD & fabrication",
      "Technical project work",
    ],
  },
];

const projects = [
  {
    title: "Arduino Smart Projects",
    category: "Electronics",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    description:
      "Learn electronics and programming by building useful working prototypes.",
  },
  {
    title: "Robotics Projects",
    category: "Robotics",
    image: "/images/shikshamdehi-robotics-projects.jpeg",
    description:
      "Design, assemble, program and test robots that respond to real-world problems.",
  },
  {
    title: "Electronics Experiments",
    category: "Electronics",
    image: "/images/shikshamdehi-electronics-sessions.jpeg",
    description:
      "Understand circuits and components by making and testing them yourself.",
  },
  {
    title: "3D Design & Printing",
    category: "Digital Fabrication",
    image: "/images/shikshamdehi-3d-printing.jpeg",
    description:
      "Turn an idea into a digital 3D model and then into a physical object.",
  },
];

const journey = [
  {
    number: "01",
    title: "Learn",
    text: "Understand the concept.",
  },
  {
    number: "02",
    title: "Design",
    text: "Plan how it can work.",
  },
  {
    number: "03",
    title: "Build",
    text: "Create a working prototype.",
  },
  {
    number: "04",
    title: "Test",
    text: "Find what works and what doesn't.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Modify, experiment and make it better.",
  },
  {
    number: "06",
    title: "Demonstrate",
    text: "Present the final working solution.",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Programs", "#programs"],
    ["Projects", "#projects"],
    ["For Schools", "#schools"],
    ["About Us", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="navInner">
        <a href="#home" className="logo">
          <span className="logoMark">S</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </a>

        <nav className={`navLinks ${open ? "mobileOpen" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="navButton"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </a>
        </nav>

        <button
          className="menuButton"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="heroGrid">
          <div className="heroContent">
            <div className="eyebrow">
              <span className="eyebrowDot" />
              PRACTICAL STEM EDUCATION
            </div>

            <h1>
              Learn it.
              <br />
              <span>Build it.</span>
              <br />
              Make it real.
            </h1>

            <p className="heroText">
              We turn classroom concepts into small real-world projects
              where students learn, design, build, test and improve
              working solutions.
            </p>

            <div className="heroButtons">
              <a href="#programs" className="primaryButton">
                Explore Programs
                <ArrowRight size={18} />
              </a>

              <a href="#schools" className="secondaryButton">
                For Schools
              </a>
            </div>

            <div className="heroStats">
              <div>
                <strong>16+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Hands-on Learning</span>
              </div>

              <div>
                <strong>7+</strong>
                <span>STEM Domains</span>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroImageCard">
              <img
                src="/images/shikshamdehi-practical-sessions.jpeg"
                alt="Students participating in practical STEM learning"
              />

              <div className="imageOverlay" />

              <div className="heroImageText">
                <span>LEARNING BY DOING</span>
                <strong>
                  From classroom
                  <br />
                  concept to prototype.
                </strong>
              </div>

              <div className="floatingTag tagOne">
                <CheckCircle2 size={15} />
                Build
              </div>

              <div className="floatingTag tagTwo">
                <CheckCircle2 size={15} />
                Test
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY STRIP */}
      <section className="journeyStrip">
        <div className="journeyStripInner">
          {journey.map((item, index) => (
            <div className="journeyMini" key={item.number}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>

              {index !== journey.length - 1 && (
                <ArrowRight size={15} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section introSection">
        <div className="sectionLabel">
          WHY PRACTICAL LEARNING?
        </div>

        <div className="introGrid">
          <h2>
            Don't just learn
            <br />
            <span>technology.</span>
            <br />
            Create with it.
          </h2>

          <div>
            <p className="largeText">
              Education becomes powerful when students can see an
              idea working in front of them.
            </p>

            <p className="mutedText">
              At ShikshamDehi, students don't only listen to
              explanations. They work with components, tools and
              materials. They make prototypes, test them, identify
              problems and improve their designs.
            </p>

            <p className="mutedText">
              The goal is simple: turn students from consumers of
              technology into makers and problem solvers.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section programsSection" id="programs">
        <div className="sectionTop">
          <div>
            <div className="sectionLabel">
              LEARNING PROGRAMS
            </div>

            <h2>
              Learning designed
              <br />
              <span>around building.</span>
            </h2>
          </div>

          <p>
            Structured programs for different age groups — from
            curiosity-driven activities to advanced innovation
            projects.
          </p>
        </div>

        <div className="programGrid">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article className="programCard" key={program.title}>
                <div className="programImage">
                  <img
                    src={program.image}
                    alt={program.title}
                  />

                  <div className="programImageOverlay" />

                  <div className="programIcon">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="programBody">
                  <div className="programMeta">
                    {program.classes}
                  </div>

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <ul>
                    {program.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="textLink"
                  >
                    Enquire about program
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projectsSection" id="projects">
        <div className="sectionTop">
          <div>
            <div className="sectionLabel">
              PROJECT-BASED LEARNING
            </div>

            <h2>
              What will students
              <br />
              <span>actually build?</span>
            </h2>
          </div>

          <p>
            Small working projects make concepts visible,
            measurable and exciting.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article
              className="projectCard"
              key={project.title}
            >
              <div className="projectImage">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="projectCategory">
                  {project.category}
                </div>
              </div>

              <div className="projectBody">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href="#contact"
                  className="textLink"
                >
                  Build something like this
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="section darkSection">
        <div className="sectionLabel">
          THE SHIKSHAMDEHI METHOD
        </div>

        <div className="methodHeading">
          <h2>
            From curiosity
            <br />
            to <span>confidence.</span>
          </h2>

          <p>
            Every program follows a practical learning cycle that
            gives students multiple opportunities to experiment
            and improve.
          </p>
        </div>

        <div className="journeyGrid">
          {journey.map((item) => (
            <div
              className="journeyCard"
              key={item.number}
            >
              <span className="journeyNumber">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="section schoolsSection" id="schools">
        <div className="schoolGrid">
          <div className="schoolImage">
            <img
              src="/images/shikshamdehi-robotics-training.jpeg"
              alt="Students working together on robotics"
            />

            <div className="schoolImageBadge">
              <School size={18} />
              School & ATL Programs
            </div>
          </div>

          <div className="schoolContent">
            <div className="sectionLabel">
              FOR SCHOOLS & ATL LABS
            </div>

            <h2>
              Build a culture
              <br />
              of <span>making.</span>
            </h2>

            <p className="largeText">
              We help schools turn labs and classrooms into spaces
              where students actively create, experiment and solve
              problems.
            </p>

            <div className="schoolPoints">
              <div>
                <CheckCircle2 />
                <span>
                  Structured STEM curriculum and project plans
                </span>
              </div>

              <div>
                <CheckCircle2 />
                <span>
                  Trainer-led practical sessions and bootcamps
                </span>
              </div>

              <div>
                <CheckCircle2 />
                <span>
                  Student projects, assessment and demonstrations
                </span>
              </div>

              <div>
                <CheckCircle2 />
                <span>
                  Teacher training and maker-space support
                </span>
              </div>

              <div>
                <CheckCircle2 />
                <span>
                  Innovation challenges and exhibition support
                </span>
              </div>
            </div>

            <a href="#contact" className="primaryButton">
              Discuss Your School
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="section domainsSection">
        <div className="sectionLabel">
          WHAT STUDENTS EXPLORE
        </div>

        <h2>
          Seven domains.
          <br />
          <span>One maker mindset.</span>
        </h2>

        <div className="domainGrid">
          <div className="domainItem">
            <span>01</span>
            <strong>3D Design</strong>
          </div>

          <div className="domainItem">
            <span>02</span>
            <strong>3D Printing</strong>
          </div>

          <div className="domainItem">
            <span>03</span>
            <strong>Arduino</strong>
          </div>

          <div className="domainItem">
            <span>04</span>
            <strong>Electronics</strong>
          </div>

          <div className="domainItem">
            <span>05</span>
            <strong>Robotics</strong>
          </div>

          <div className="domainItem">
            <span>06</span>
            <strong>IoT</strong>
          </div>

          <div className="domainItem">
            <span>07</span>
            <strong>AI & Innovation</strong>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section aboutSection" id="about">
        <div className="aboutGrid">
          <div>
            <div className="sectionLabel">
              ABOUT SHIKSHAMDEHI
            </div>

            <h2>
              Experience that
              <br />
              <span>builds makers.</span>
            </h2>
          </div>

          <div className="aboutContent">
            <p className="largeText">
              With more than 16 years of experience in 3D design,
              fabrication and practical technology, ShikshamDehi
              brings real making experience into education.
            </p>

            <p className="mutedText">
              We believe students should not be limited to consuming
              technology. They should understand how things work,
              build their own versions, test ideas and learn from
              failure.
            </p>

            <div className="aboutStats">
              <div>
                <strong>16+</strong>
                <span>Years of Experience</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Project Based</span>
              </div>

              <div>
                <strong>7+</strong>
                <span>Technology Domains</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection" id="contact">
        <div className="ctaGlow" />

        <div className="ctaContent">
          <div className="sectionLabel">
            LET'S BUILD THE FUTURE
          </div>

          <h2>
            Give students
            <br />
            something real <span>to build.</span>
          </h2>

          <p>
            Bring practical STEM learning, project-based education
            and maker culture to your school or institution.
          </p>

          <div className="ctaButtons">
            <a
              href="mailto:hello@shikshamdehi.com"
              className="primaryButton"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="secondaryButton"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerGrid">
          <div>
            <a href="#home" className="logo footerLogo">
              <span className="logoMark">S</span>

              <span>
                Shiksham<span>Dehi</span>
              </span>
            </a>

            <p>
              Practical education for students who want to
              understand, build and create.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="#programs">Programs</a>
            <a href="#projects">Projects</a>
            <a href="#schools">For Schools</a>
            <a href="#about">About Us</a>
          </div>

          <div>
            <h4>Learning</h4>
            <a href="#programs">Foundation</a>
            <a href="#programs">Maker Classes</a>
            <a href="#programs">Innovator Program</a>
            <a href="#programs">Technical Programs</a>
          </div>

          <div>
            <h4>Contact</h4>

            <a href="mailto:hello@shikshamdehi.com">
              hello@shikshamdehi.com
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            © 2026 ShikshamDehi. All rights reserved.
          </span>

          <span>
            Learn → Design → Build → Test → Improve → Demonstrate
          </span>
        </div>
      </footer>
    </main>
  );
}
