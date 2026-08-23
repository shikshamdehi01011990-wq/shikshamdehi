"use client";

import { useState } from "react";
import "./globals.css";

const modules = [
  {
    no: "01",
    category: "AI & INTELLIGENCE",
    icon: "AI",
    title: "Artificial Intelligence",
    text: "Understand AI through practical experiments, intelligent systems and real-world problem solving.",
    skills: ["AI", "ML", "Prompting"],
  },
  {
    no: "02",
    category: "ROBOTICS",
    icon: "RB",
    title: "Robotics",
    text: "Build and program robots while learning sensors, motors, automation and control systems.",
    skills: ["Robotics", "Sensors", "Motors"],
  },
  {
    no: "03",
    category: "ELECTRONICS",
    icon: "EL",
    title: "Arduino & Electronics",
    text: "Learn electronics by creating interactive circuits, embedded systems and smart prototypes.",
    skills: ["Arduino", "Circuits", "Embedded"],
  },
  {
    no: "04",
    category: "CONNECTED TECH",
    icon: "IoT",
    title: "IoT & Smart Systems",
    text: "Connect devices, collect data and create smart systems using Internet of Things technology.",
    skills: ["IoT", "Wi-Fi", "Cloud"],
  },
  {
    no: "05",
    category: "DIGITAL DESIGN",
    icon: "3D",
    title: "3D Design & CAD",
    text: "Transform ideas into accurate digital models using modern 3D design and CAD workflows.",
    skills: ["CAD", "3D Design", "Modeling"],
  },
  {
    no: "06",
    category: "FABRICATION",
    icon: "3DP",
    title: "3D Printing",
    text: "Turn digital designs into physical prototypes and understand the complete 3D printing workflow.",
    skills: ["3D Print", "Prototype", "Fabrication"],
  },
  {
    no: "07",
    category: "CREATIVE TECHNOLOGY",
    icon: "CR",
    title: "Creative Technology",
    text: "Combine creativity and technology to develop interactive, innovative and meaningful projects.",
    skills: ["Creative", "Design", "Innovation"],
  },
  {
    no: "08",
    category: "PROJECT LEARNING",
    icon: "PR",
    title: "School Projects",
    text: "Build competition-ready school projects with structured guidance, prototyping and documentation.",
    skills: ["Projects", "Models", "Exhibitions"],
  },
  {
    no: "09",
    category: "ATL LAB",
    icon: "ATL",
    title: "ATL Lab Programs",
    text: "Bring structured innovation and technology learning to Atal Tinkering Labs and schools.",
    skills: ["ATL", "STEM", "Innovation"],
  },
  {
    no: "10",
    category: "TRAINING",
    icon: "TR",
    title: "Teacher Training",
    text: "Empower educators with practical technology skills for modern classrooms and innovation labs.",
    skills: ["Teachers", "Training", "STEM"],
  },
  {
    no: "11",
    category: "INTENSIVE LEARNING",
    icon: "BC",
    title: "Boot Camps",
    text: "Fast-paced hands-on learning experiences designed around building, experimentation and teamwork.",
    skills: ["Bootcamp", "Hands-on", "Teamwork"],
  },
  {
    no: "12",
    category: "FUTURE SKILLS",
    icon: "FS",
    title: "Future Skills",
    text: "Develop the technical thinking, creativity and problem-solving skills needed for tomorrow.",
    skills: ["Future", "Skills", "STEM"],
  },
];

const audiences = [
  {
    icon: "01",
    title: "Students",
    text: "Learn by building real technology projects instead of only studying theory.",
  },
  {
    icon: "02",
    title: "Schools",
    text: "Bring structured STEM, robotics, AI and innovation programs into your campus.",
  },
  {
    icon: "03",
    title: "Teachers",
    text: "Upgrade classroom technology skills and confidently mentor student projects.",
  },
  {
    icon: "04",
    title: "ATL Labs",
    text: "Get practical support, training and project-based learning for innovation labs.",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <main>
      {/* =====================================================
          NAVBAR
          ===================================================== */}
      <header>
        <div className="nav">
          <a className="brand" href="/" onClick={closeMenu}>
            <span className="brandMark">SD</span>
            <span>
              Shiksham<span>Dehi</span>
            </span>
          </a>

          <nav className={mobileOpen ? "mobileOpen" : ""}>
            <a href="#programs" onClick={closeMenu}>
              Programs
            </a>
            <a href="#journey" onClick={closeMenu}>
              Learning
            </a>
            <a href="#schools" onClick={closeMenu}>
              Schools
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </nav>

          <a className="navCta" href="#contact">
            Start Learning <span>→</span>
          </a>

          <button
            className="menu"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="hero">
        <div className="gridGlow" />

        <div className="heroCopy">
          <div className="eyebrow">
            <span />
            FUTURE-READY EDUCATION
          </div>

          <h1>
            Learn.
            <br />
            Build.
            <br />
            <em>Invent.</em>
          </h1>

          <p className="heroText">
            ShikshamDehi helps students and educators turn curiosity into
            <strong> real technology skills</strong> through AI, robotics,
            electronics, IoT, 3D design, 3D printing and project-based
            learning.
          </p>

          <div className="heroAudience">
            <span>Students</span>
            <i>•</i>
            <span>Schools</span>
            <i>•</i>
            <span>Teachers</span>
            <i>•</i>
            <span>ATL Labs</span>
          </div>

          <div className="heroActions">
            <a className="primary" href="#programs">
              Explore Programs <span>→</span>
            </a>

            <a className="secondary" href="#about">
              Discover ShikshamDehi
            </a>
          </div>
        </div>

        {/* =================================================
            IMPORTANT:
            REAL IMAGE ELEMENT — NOT CSS ::before
            ================================================= */}
        <div className="heroVisual">
          <div className="heroImageGlow" />

          <img
            className="heroImage"
            src="/home-hero.png"
            alt="ShikshamDehi future technology learning"
          />
        </div>
      </section>

      {/* =====================================================
          MODULE INTRO
          ===================================================== */}
      <section className="moduleIntro" id="programs">
        <div className="section">
          <div className="eyebrow">
            <span />
            WHAT WE TEACH
          </div>

          <h2>
            Technology skills for the{" "}
            <em>real world.</em>
          </h2>

          <p>
            From the first idea to a working prototype, students learn
            technology through experimentation, design, building and
            problem-solving.
          </p>
        </div>
      </section>

      {/* =====================================================
          MODULES
          ===================================================== */}
      <section className="section modulesSection">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">
              <span />
              LEARNING MODULES
            </div>

            <h2>
              Build your
              <br />
              <em>skill stack.</em>
            </h2>
          </div>

          <p>
            A practical learning ecosystem covering emerging technology,
            digital design, electronics, robotics and innovation.
          </p>
        </div>

        <div className="moduleGrid">
          {modules.map((module, index) => (
            <a
              href="#contact"
              className={`moduleCard ${
                index === 0 || index === 4 || index === 8
                  ? "moduleFeatured"
                  : ""
              }`}
              key={module.no}
            >
              <div className="moduleTop">
                <div className="moduleIcon">{module.icon}</div>
                <div className="moduleNumber">{module.no}</div>
              </div>

              <div className="moduleCategory">{module.category}</div>

              <h3>{module.title}</h3>

              <p>{module.text}</p>

              <div className="moduleSkills">
                {module.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="moduleLink">
                <span>EXPLORE MODULE</span>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          LEARNING JOURNEY
          ===================================================== */}
      <section className="journeyBand" id="journey">
        <div className="section">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">
                <span />
                LEARNING JOURNEY
              </div>

              <h2>
                From idea
                <br />
                to <em>impact.</em>
              </h2>
            </div>

            <p>
              Our approach is simple: understand the problem, imagine the
              solution, build it, test it and improve it.
            </p>
          </div>

          <div className="workflow">
            <div className="workflowItem">
              <span>01</span>
              Discover
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>02</span>
              Imagine
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>03</span>
              Design
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>04</span>
              Build
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>05</span>
              Test
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>06</span>
              Improve
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUDIENCE
          ===================================================== */}
      <section className="section">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">
              <span />
              WHO WE WORK WITH
            </div>

            <h2>
              Built for
              <br />
              <em>curious minds.</em>
            </h2>
          </div>

          <p>
            Whether you are learning, teaching or building an innovation
            ecosystem, ShikshamDehi is designed around practical outcomes.
          </p>
        </div>

        <div className="audienceGrid">
          {audiences.map((item) => (
            <a className="audienceCard" href="#contact" key={item.title}>
              <div className="moduleIcon icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span>
                  Learn more <b>→</b>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROJECT BANNER
          ===================================================== */}
      <section className="projectBanner">
        <div>
          <div className="eyebrow">
            <span />
            PROJECT-BASED LEARNING
          </div>

          <h2>
            Don't just
            <br />
            <em>learn it.</em>
            <br />
            Build it.
          </h2>

          <p>
            Students learn faster when they create something real. We turn
            concepts into prototypes, experiments and working projects.
          </p>
        </div>

        <a className="largeArrow" href="#contact">
          Start a Project
          <span>↗</span>
        </a>
      </section>

      {/* =====================================================
          SCHOOLS
          ===================================================== */}
      <section className="schoolBand" id="schools">
        <div className="section">
          <div className="schoolInner">
            <div className="schoolCopy">
              <div className="eyebrow">
                <span />
                FOR SCHOOLS & INSTITUTIONS
              </div>

              <h2>
                Build a stronger
                <br />
                <em>innovation culture.</em>
              </h2>

              <p>
                From ATL Lab support to structured STEM programs, teacher
                training and student boot camps, ShikshamDehi helps schools
                create meaningful technology learning experiences.
              </p>

              <div className="checkGrid">
                <span>✓ STEM Programs</span>
                <span>✓ ATL Lab Support</span>
                <span>✓ Teacher Training</span>
                <span>✓ Student Workshops</span>
                <span>✓ Project Mentoring</span>
                <span>✓ Technology Boot Camps</span>
              </div>

              <a className="primary" href="#contact">
                Partner With Us <span>→</span>
              </a>
            </div>

            <div className="schoolCard">
              <div className="cardLabel">LEARNING PATH</div>

              <h3>Build → Test → Learn → Repeat</h3>

              <div className="journey">
                <span>01</span>
                <b>Explore</b>
                <i />
              </div>

              <div className="journey">
                <span>02</span>
                <b>Experiment</b>
                <i />
              </div>

              <div className="journey">
                <span>03</span>
                <b>Prototype</b>
                <i />
              </div>

              <div className="journey">
                <span>04</span>
                <b>Build</b>
                <i />
              </div>

              <div className="journey">
                <span>05</span>
                <b>Present</b>
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
          ===================================================== */}
      <section className="section" id="about">
        <div className="about">
          <div>
            <div className="eyebrow">
              <span />
              ABOUT SHIKSHAMDEHI
            </div>

            <h2>
              Education
              <br />
              beyond
              <br />
              <em>the classroom.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              <strong>ShikshamDehi</strong> is an education and technology
              initiative focused on making emerging technology practical,
              accessible and exciting for learners.
            </p>

            <p>
              We bring together AI, robotics, Arduino, IoT, 3D design, 3D
              printing, creative technology and project-based learning to help
              students become creators rather than passive consumers of
              technology.
            </p>

            <p>
              Our goal is to create a generation that can look at a problem,
              imagine a solution and actually build it.
            </p>

            <div className="quote">
              <b>Our philosophy:</b> Learning becomes powerful when ideas turn
              into something you can see, touch, test and improve.
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="cta" id="contact">
        <div className="ctaGlow" />

        <div className="eyebrow">
          <span />
          LET'S BUILD THE FUTURE
        </div>

        <h2>
          Ready to
          <br />
          <em>start building?</em>
        </h2>

        <p>
          Bring future-ready technology learning to your students, school or
          innovation lab.
        </p>

        <div className="heroActions">
          <a className="primary" href="mailto:hello@shikshamdehi.com">
            Get in Touch <span>→</span>
          </a>

          <a className="secondary light" href="#programs">
            Explore Programs
          </a>
        </div>

        <div className="ctaTags">
          <span>AI</span>
          <span>Robotics</span>
          <span>Arduino</span>
          <span>IoT</span>
          <span>3D Design</span>
          <span>3D Printing</span>
          <span>STEM</span>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer>
        <a className="brand" href="/">
          <span className="brandMark">SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </a>

        <div className="footerLinks">
          <a href="#programs">Programs</a>
          <a href="#schools">Schools</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <small>© 2026 ShikshamDehi</small>
      </footer>
    </main>
  );
}
