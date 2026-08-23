"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="nav">
        <Link href="/" className="brand">
          <span className="brandMark">SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav className={menuOpen ? "mobileOpen" : ""}>
          <Link href="#programs" onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
          <Link href="#journey" onClick={() => setMenuOpen(false)}>
            Learning Journey
          </Link>
          <Link href="#schools" onClick={() => setMenuOpen(false)}>
            For Schools
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </nav>

        <Link href="/contact" className="navCta">
          Talk to us <span>↗</span>
        </Link>

        <button
          className="menu"
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
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
            <em>Create.</em>
          </h1>

          <p className="heroText">
            Practical technology education for the next generation —
            <strong> AI, Robotics, IoT, Arduino, 3D Design, 3D Printing</strong>
            and real-world projects.
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
            <Link href="/programs" className="primary">
              Explore Programs <span>↗</span>
            </Link>

            <Link href="/projects" className="secondary">
              See Student Projects <span>→</span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            HERO IMAGE
            IMPORTANT: direct image from /public/home-hero.png
        ===================================================== */}
        <div className="heroVisual">
          <img
            src="/home-hero.png"
            alt="ShikshamDehi future technology education"
            className="heroImage"
            draggable="false"
          />

          <div className="heroImageGlow" />
        </div>
      </section>

      {/* =========================================================
          MODULE INTRO
      ========================================================= */}
      <section className="moduleIntro" id="programs">
        <div className="section">
          <div className="eyebrow">
            <span />
            WHAT WE TEACH
          </div>

          <h2>
            Technology that
            <br />
            students can <em>build.</em>
          </h2>

          <p>
            From first experiments to advanced prototypes, students learn by
            creating real things — not just watching tutorials.
          </p>
        </div>
      </section>

      {/* =========================================================
          MODULES
      ========================================================= */}
      <section className="section modulesSection">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">
              <span />
              LEARNING MODULES
            </div>

            <h2>
              Explore the
              <br />
              <em>future.</em>
            </h2>
          </div>

          <p>
            Structured programs designed around creativity, engineering,
            technology and hands-on problem solving.
          </p>
        </div>

        <div className="moduleGrid">
          {[
            {
              number: "01",
              category: "ARTIFICIAL INTELLIGENCE",
              title: "AI & Machine Learning",
              text: "Understand AI concepts and build intelligent applications.",
              skills: ["AI", "ML", "Computer Vision"],
            },
            {
              number: "02",
              category: "ROBOTICS",
              title: "Robotics",
              text: "Design, build and program robots through hands-on challenges.",
              skills: ["Robots", "Sensors", "Automation"],
            },
            {
              number: "03",
              category: "ELECTRONICS",
              title: "Arduino & Electronics",
              text: "Turn ideas into working electronic prototypes.",
              skills: ["Arduino", "Circuits", "Sensors"],
            },
            {
              number: "04",
              category: "CONNECTED TECHNOLOGY",
              title: "IoT",
              text: "Build connected devices and smart technology solutions.",
              skills: ["IoT", "WiFi", "Cloud"],
            },
            {
              number: "05",
              category: "3D DESIGN",
              title: "3D Design & CAD",
              text: "Create digital models and engineering-ready designs.",
              skills: ["CAD", "3D Modeling", "Design"],
            },
            {
              number: "06",
              category: "DIGITAL FABRICATION",
              title: "3D Printing",
              text: "Transform digital designs into physical prototypes.",
              skills: ["Printing", "Prototyping", "Fabrication"],
            },
            {
              number: "07",
              category: "CREATIVITY",
              title: "Creative Technology",
              text: "Combine design, technology and imagination to create.",
              skills: ["Design", "Ideas", "Innovation"],
            },
            {
              number: "08",
              category: "PROJECTS",
              title: "School Projects",
              text: "Build meaningful projects around real-world problems.",
              skills: ["Projects", "Research", "Build"],
            },
            {
              number: "09",
              category: "ATL LABS",
              title: "ATL Lab Programs",
              text: "Hands-on innovation programs for Atal Tinkering Labs.",
              skills: ["ATL", "Innovation", "STEM"],
            },
            {
              number: "10",
              category: "TRAINING",
              title: "Workshops",
              text: "Focused technology workshops for students and educators.",
              skills: ["Training", "Workshop", "STEM"],
            },
            {
              number: "11",
              category: "BOOTCAMP",
              title: "Technology Bootcamps",
              text: "Intensive learning experiences built around projects.",
              skills: ["Bootcamp", "Build", "Learn"],
            },
            {
              number: "12",
              category: "FUTURE SKILLS",
              title: "Future Technology",
              text: "Prepare students for the technologies shaping tomorrow.",
              skills: ["Future", "Technology", "Skills"],
            },
          ].map((module) => (
            <Link
              href="/programs"
              className={`moduleCard ${
                module.number === "01" ? "moduleFeatured" : ""
              }`}
              key={module.number}
            >
              <div className="moduleTop">
                <div className="moduleIcon">✦</div>
                <span className="moduleNumber">{module.number}</span>
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
                <span>EXPLORE</span>
                <span>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          LEARNING JOURNEY
      ========================================================= */}
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
                to <em>innovation.</em>
              </h2>
            </div>

            <p>
              A simple progression that turns curiosity into confidence,
              technical skills and real projects.
            </p>
          </div>

          <div className="workflow">
            {[
              "Discover",
              "Learn",
              "Experiment",
              "Build",
              "Prototype",
              "Present",
            ].map((item, index) => (
              <div className="workflowItem" key={item}>
                <span>0{index + 1}</span>
                {item}
                {index < 5 && <i>→</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          AUDIENCE
      ========================================================= */}
      <section className="section" id="schools">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">
              <span />
              WHO WE WORK WITH
            </div>

            <h2>
              Built for
              <br />
              <em>learners.</em>
            </h2>
          </div>

          <p>
            Programs that can be adapted for students, schools, educators and
            innovation labs.
          </p>
        </div>

        <div className="audienceGrid">
          {[
            ["01", "Students", "Hands-on technology learning and project building."],
            ["02", "Schools", "Technology programs integrated into school learning."],
            ["03", "ATL Labs", "Innovation-focused activities for ATL ecosystems."],
            ["04", "Educators", "Practical training to teach future technologies."],
          ].map(([num, title, text]) => (
            <Link href="/programs" className="audienceCard" key={num}>
              <div className="icon moduleIcon">{num}</div>

              <div>
                <h3>{title}</h3>

                <p>{text}</p>

                <span>
                  Explore <b>→</b>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROJECT BANNER
      ========================================================= */}
      <section className="projectBanner">
        <div>
          <div className="eyebrow">
            <span />
            REAL PROJECTS
          </div>

          <h2>
            Don't just
            <br />
            <em>learn it.</em>
            <br />
            Build it.
          </h2>

          <p>
            Students turn concepts into working prototypes, experiments and
            technology projects.
          </p>
        </div>

        <Link href="/projects" className="largeArrow">
          VIEW PROJECTS
          <span>↗</span>
        </Link>
      </section>

      {/* =========================================================
          SCHOOL
      ========================================================= */}
      <section className="schoolBand">
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
                through structured programs, workshops, ATL support and
                project-based learning.
              </p>

              <div className="checkGrid">
                <span>✓ STEM Programs</span>
                <span>✓ ATL Support</span>
                <span>✓ Teacher Training</span>
                <span>✓ Student Projects</span>
              </div>

              <Link href="/contact" className="primary">
                Partner With Us <span>↗</span>
              </Link>
            </div>

            <div className="schoolCard">
              <div className="cardLabel">IMPLEMENTATION MODEL</div>

              <h3>Learn → Build → Showcase</h3>

              {[
                ["01", "Learn", "Foundation"],
                ["02", "Build", "Hands-on"],
                ["03", "Prototype", "Innovation"],
                ["04", "Showcase", "Confidence"],
              ].map(([num, title, subtitle]) => (
                <div className="journey" key={num}>
                  <span>{num}</span>
                  <b>{title}</b>
                  <i title={subtitle} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
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
              beyond the
              <br />
              <em>classroom.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              <strong>ShikshamDehi</strong> is built around a simple idea:
              students should not only consume technology — they should learn
              how to create with it.
            </p>

            <p>
              Through AI, robotics, electronics, IoT, 3D design, 3D printing
              and project-based learning, we help learners move from curiosity
              to creation.
            </p>

            <div className="quote">
              <b>Learn by making.</b>
              <br />
              Because the future belongs to people who can build it.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="cta">
        <div className="ctaGlow" />

        <div className="eyebrow">
          <span />
          START BUILDING
        </div>

        <h2>
          Ready to
          <br />
          <em>create?</em>
        </h2>

        <p>
          Let's bring future-ready technology learning to your students,
          classroom or innovation lab.
        </p>

        <div className="heroActions">
          <Link href="/contact" className="primary">
            Get Started <span>↗</span>
          </Link>

          <Link href="/programs" className="secondary light">
            Explore Programs <span>→</span>
          </Link>
        </div>

        <div className="ctaTags">
          <span>AI</span>
          <span>Robotics</span>
          <span>IoT</span>
          <span>Arduino</span>
          <span>3D</span>
          <span>Innovation</span>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer>
        <Link href="/" className="brand">
          <span className="brandMark">SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <div className="footerLinks">
          <Link href="/programs">Programs</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <small>© 2026 ShikshamDehi</small>
      </footer>
    </main>
  );
}

