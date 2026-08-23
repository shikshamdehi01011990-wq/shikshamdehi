"use client";

import { useState } from "react";

const modules = [
  {
    number: "01",
    category: "FOUNDATION",
    title: "AI & Creative Technology",
    description:
      "Build a strong foundation in artificial intelligence, creative thinking and future-ready technology.",
    skills: ["AI", "Prompting", "Creativity"],
  },
  {
    number: "02",
    category: "ROBOTICS",
    title: "Robotics & Automation",
    description:
      "Learn robotics through hands-on experiments, sensors, motors and intelligent automation.",
    skills: ["Robotics", "Sensors", "Automation"],
  },
  {
    number: "03",
    category: "ELECTRONICS",
    title: "Arduino & Electronics",
    description:
      "Understand electronics by building real circuits and programmable hardware projects.",
    skills: ["Arduino", "Circuits", "Sensors"],
  },
  {
    number: "04",
    category: "CONNECTED TECH",
    title: "IoT & Smart Systems",
    description:
      "Create connected devices and smart systems using IoT concepts and real-world applications.",
    skills: ["IoT", "Wi-Fi", "Smart Systems"],
  },
  {
    number: "05",
    category: "DIGITAL DESIGN",
    title: "3D Design & CAD",
    description:
      "Turn ideas into precise digital models using 3D design, CAD and engineering workflows.",
    skills: ["3D CAD", "Modeling", "Design"],
    featured: true,
  },
  {
    number: "06",
    category: "MAKER LAB",
    title: "3D Printing",
    description:
      "Transform digital designs into physical prototypes using modern 3D printing technology.",
    skills: ["3D Printing", "Prototyping", "STEM"],
  },
  {
    number: "07",
    category: "PROJECTS",
    title: "School Innovation Projects",
    description:
      "Design and build meaningful technology projects for school exhibitions and competitions.",
    skills: ["Projects", "Innovation", "Exhibitions"],
  },
  {
    number: "08",
    category: "ATL LAB",
    title: "ATL Lab Training",
    description:
      "Practical training for Atal Tinkering Labs with structured activities and project-based learning.",
    skills: ["ATL", "STEM", "Maker"],
  },
  {
    number: "09",
    category: "CODING",
    title: "Coding & Programming",
    description:
      "Develop programming fundamentals through creative challenges, applications and hardware projects.",
    skills: ["Coding", "Logic", "Programming"],
  },
  {
    number: "10",
    category: "DESIGN",
    title: "Product Design",
    description:
      "Learn how ideas become useful products through design thinking, prototyping and iteration.",
    skills: ["Design Thinking", "UX", "Prototype"],
  },
  {
    number: "11",
    category: "BOOTCAMP",
    title: "Technology Bootcamps",
    description:
      "Intensive hands-on learning experiences designed around real tools, projects and outcomes.",
    skills: ["Bootcamp", "Hands-on", "Skills"],
  },
  {
    number: "12",
    category: "FUTURE SKILLS",
    title: "Innovation & Future Skills",
    description:
      "Develop the creativity, problem-solving and technology skills needed for the future.",
    skills: ["Innovation", "Problem Solving", "Future"],
  },
];

const audience = [
  {
    icon: "01",
    title: "Students",
    text: "Explore technology by building real projects instead of only learning theory.",
  },
  {
    icon: "02",
    title: "Schools",
    text: "Bring structured technology programs, workshops and innovation experiences to students.",
  },
  {
    icon: "03",
    title: "ATL Labs",
    text: "Strengthen maker culture with practical robotics, IoT, electronics and prototyping.",
  },
  {
    icon: "04",
    title: "Educators",
    text: "Upgrade teaching capabilities through practical technology training and resources.",
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

      <header className="nav">
        <a href="#top" className="brand" onClick={closeMenu}>
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
            Learning Journey
          </a>

          <a href="#schools" onClick={closeMenu}>
            For Schools
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </nav>

        <a href="#contact" className="navCta">
          Start Learning <span>→</span>
        </a>

        <button
          className="menu"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span style={{ fontSize: "24px" }}>☰</span>
        </button>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="top">
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
            <em>Innovate.</em>
          </h1>

          <p className="heroText">
            <strong>ShikshamDehi</strong> is a practical technology learning
            platform where students turn ideas into real projects through AI,
            robotics, coding, electronics, IoT, 3D design and innovation.
          </p>

          <div className="heroAudience">
            <span>Students</span>
            <i>•</i>
            <span>Schools</span>
            <i>•</i>
            <span>ATL Labs</span>
            <i>•</i>
            <span>Educators</span>
          </div>

          <div className="heroActions">
            <a href="#programs" className="primary">
              Explore Programs <span>→</span>
            </a>

            <a href="#schools" className="secondary">
              For Schools <span>↗</span>
            </a>
          </div>
        </div>

        {/* =================================================
            IMPORTANT HERO IMAGE
        ================================================= */}

        <div className="heroVisual">
          <img
            src="/home-hero.png"
            alt="Students learning 3D printing, coding, robotics, design and STEM projects"
            className="heroImage"
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
            From <em>ideas</em>
            <br />
            to real-world
            <br />
            technology.
          </h2>

          <p>
            Structured learning experiences designed around practical
            technology, creativity, experimentation and project-based learning.
          </p>
        </div>
      </section>

      {/* =====================================================
          12 MODULES
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
              <em>future.</em>
            </h2>
          </div>

          <p>
            Choose from a growing ecosystem of hands-on programs covering
            emerging technology, digital design, electronics, robotics,
            programming and innovation.
          </p>
        </div>

        <div className="moduleGrid">
          {modules.map((module) => (
            <a
              href="#contact"
              className={`moduleCard ${
                module.featured ? "moduleFeatured" : ""
              }`}
              key={module.number}
            >
              <div className="moduleTop">
                <div className="moduleIcon">
                  <span>✦</span>
                </div>

                <div className="moduleNumber">{module.number}</div>
              </div>

              <div className="moduleCategory">{module.category}</div>

              <h3>{module.title}</h3>

              <p>{module.description}</p>

              <div className="moduleSkills">
                {module.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="moduleLink">
                <span>EXPLORE MODULE</span>
                <span>→</span>
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
          <div className="eyebrow">
            <span />
            LEARNING JOURNEY
          </div>

          <div className="sectionHead">
            <div>
              <h2>
                Learn by
                <br />
                <em>doing.</em>
              </h2>
            </div>

            <p>
              Our approach connects knowledge with action. Students move from
              understanding a concept to building, testing and presenting a
              real outcome.
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
              Learn
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>03</span>
              Build
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>04</span>
              Test
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>05</span>
              Improve
              <i>→</i>
            </div>

            <div className="workflowItem">
              <span>06</span>
              Showcase
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
              BUILT FOR
            </div>

            <h2>
              One ecosystem.
              <br />
              <em>Many learners.</em>
            </h2>
          </div>

          <p>
            ShikshamDehi connects students, schools, ATL labs and educators
            through practical technology education.
          </p>
        </div>

        <div className="audienceGrid">
          {audience.map((item) => (
            <a href="#contact" className="audienceCard" key={item.title}>
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
            Every concept becomes more powerful when students can experiment
            with it, make something tangible and explain how it works.
          </p>
        </div>

        <a href="#contact" className="largeArrow">
          <span>START A PROJECT</span>
          <span>↗</span>
        </a>
      </section>

      {/* =====================================================
          SCHOOL SECTION
      ===================================================== */}

      <section className="schoolBand" id="schools">
        <div className="section">
          <div className="schoolInner">
            <div className="schoolCopy">
              <div className="eyebrow">
                <span />
                FOR SCHOOLS
              </div>

              <h2>
                Build a
                <br />
                <em>future-ready</em>
                <br />
                campus.
              </h2>

              <p>
                Bring practical technology education directly into your school
                through workshops, structured programs, ATL support, bootcamps
                and project-based learning.
              </p>

              <div className="checkGrid">
                <span>✓ Robotics Programs</span>
                <span>✓ AI Workshops</span>
                <span>✓ ATL Lab Training</span>
                <span>✓ 3D Design & Printing</span>
                <span>✓ IoT & Electronics</span>
                <span>✓ Innovation Projects</span>
              </div>

              <a href="#contact" className="primary">
                Partner With Us <span>→</span>
              </a>
            </div>

            <div className="schoolCard">
              <div className="cardLabel">A TYPICAL JOURNEY</div>

              <h3>Idea → Prototype → Impact</h3>

              <div className="journey">
                <span>01</span>
                <b>Explore</b>
                <i />
              </div>

              <div className="journey">
                <span>02</span>
                <b>Design</b>
                <i />
              </div>

              <div className="journey">
                <span>03</span>
                <b>Build</b>
                <i />
              </div>

              <div className="journey">
                <span>04</span>
                <b>Test</b>
                <i />
              </div>

              <div className="journey">
                <span>05</span>
                <b>Showcase</b>
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
              <em>textbooks.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              <strong>ShikshamDehi</strong> is envisioned as a future-focused
              education ecosystem built around creativity, technology and
              practical learning.
            </p>

            <p>
              From AI and robotics to Arduino, IoT, 3D design and 3D printing,
              learners get opportunities to understand how modern technology
              works by actually creating with it.
            </p>

            <p>
              The goal is simple: help learners become confident creators,
              problem solvers and innovators.
            </p>

            <div className="quote">
              <b>“</b> Learn something. Build something. Make an impact.
              <b>”</b>
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
          READY TO BUILD?
        </div>

        <h2>
          Your next
          <br />
          <em>idea starts here.</em>
        </h2>

        <p>
          Join the ShikshamDehi learning ecosystem and turn curiosity into
          practical technology skills.
        </p>

        <div className="heroActions">
          <a href="mailto:hello@shikshamdehi.com" className="primary">
            Get Started <span>→</span>
          </a>
        </div>

        <div className="ctaTags">
          <span>AI</span>
          <span>ROBOTICS</span>
          <span>ARDUINO</span>
          <span>IOT</span>
          <span>3D DESIGN</span>
          <span>3D PRINTING</span>
          <span>STEM</span>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <a href="#top" className="brand">
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
