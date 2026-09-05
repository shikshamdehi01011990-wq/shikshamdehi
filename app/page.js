"use client";

import { useState } from "react";
import {
  ArrowRight,
  Box,
  Bot,
  Cpu,
  Cuboid,
  GraduationCap,
  Lightbulb,
  Menu,
  Printer,
  School,
  Sparkles,
  X,
  Zap,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    icon: Cuboid,
    tag: "DESIGN + MAKING",
    title: "3D Design & Printing",
    text: "Students turn ideas into CAD designs, physical models and real prototypes.",
  },
  {
    icon: Cpu,
    tag: "ELECTRONICS",
    title: "Arduino & Electronics",
    text: "Students learn circuits, sensors and coding by building small working projects.",
  },
  {
    icon: Bot,
    tag: "ROBOTICS",
    title: "Robotics & Automation",
    text: "Students build machines, use sensors and learn how systems work through testing.",
  },
  {
    icon: Sparkles,
    tag: "FUTURE SKILLS",
    title: "AI, IoT & Innovation",
    text: "Students connect technology with real-world problems and build smart solutions.",
  },
];

const projects = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Smart Plant Monitor",
    text: "Learn sensors, Arduino and automation by monitoring plant conditions.",
    image: "/shikshamdehiarduino-projects.jpeg",
  },
  {
    number: "02",
    icon: Zap,
    title: "Electronics Projects",
    text: "Understand electricity, circuits and components by building working systems.",
    image: "/shikshamdehi-electronics-sessions.jpeg",
  },
  {
    number: "03",
    icon: Bot,
    title: "Robotics Projects",
    text: "Build, program and test robots using motors, sensors and controllers.",
    image: "/shikshamdehi-robotics-projects.jpeg",
  },
  {
    number: "04",
    icon: Printer,
    title: "3D Printed Products",
    text: "Go from an idea to a digital design and finally to a physical object.",
    image: "/shikshamdehi-3d-printing.jpeg",
  },
];

const learningSteps = [
  ["01", "LEARN", "Understand the concept"],
  ["02", "DESIGN", "Plan a solution"],
  ["03", "BUILD", "Make it real"],
  ["04", "TEST", "See what works"],
  ["05", "IMPROVE", "Learn from failure"],
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* NAVBAR */}
      <header className="nav">
        <a href="#top" className="brand">
          <span className="brandMark">SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </a>

        <nav className={open ? "mobileOpen" : ""}>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#programs" onClick={() => setOpen(false)}>
            Programs
          </a>
          <a href="#schools" onClick={() => setOpen(false)}>
            For Schools
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </nav>

        <a href="#contact" className="navCta">
          Partner With Us <ArrowRight size={16} />
        </a>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="heroGrid" />

        <div className="heroCopy">
          <div className="eyebrow">
            <span></span>
            PRACTICAL EDUCATION • STEM • MAKER LEARNING
          </div>

          <h1>
            Learn it.
            <br />
            <em>Build it.</em>
            <br />
            Make it real.
          </h1>

          <p className="heroText">
            We turn classroom concepts into{" "}
            <b>small, real-world projects.</b> Students learn by designing,
            building, testing and improving things that actually work.
          </p>

          <div className="heroTags">
            <span>3D Design</span>
            <span>3D Printing</span>
            <span>Electronics</span>
            <span>Robotics</span>
            <span>IoT</span>
            <span>AI</span>
          </div>

          <div className="heroActions">
            <a href="#programs" className="primary">
              Explore Programs <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary">
              Bring Practical Learning to Your School
            </a>
          </div>

          <div className="proof">
            <div>
              <strong>16+</strong>
              <span>
                Years of
                <br />
                making experience
              </span>
            </div>

            <i></i>

            <div>
              <strong>100%</strong>
              <span>
                Hands-on
                <br />
                project learning
              </span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="heroVisual">
          <div className="heroImageCard">
            <img
              src="/shikshamdehi-practical-sessions.jpeg"
              alt="Students participating in practical learning sessions"
            />

            <div className="imageShade"></div>

            <div className="imageLabel topLabel">
              <span className="liveDot"></span>
              PRACTICAL LEARNING
            </div>

            <div className="imageLabel bottomLabel">
              <small>FROM CONCEPT</small>
              <b>TO WORKING PROJECT</b>
            </div>
          </div>

          <div className="floating f1">
            <Box size={17} />
            <span>Design</span>
          </div>

          <div className="floating f2">
            <Bot size={17} />
            <span>Build</span>
          </div>

          <div className="floating f3">
            <Zap size={17} />
            <span>Test</span>
          </div>
        </div>
      </section>

      {/* LEARNING PROCESS */}
      <section className="learningBar">
        {learningSteps.map(([number, title, text], index) => (
          <div key={title}>
            <span>{number}</span>
            <b>{title}</b>
            <small>{text}</small>

            {index !== learningSteps.length - 1 && <i>→</i>}
          </div>
        ))}
      </section>

      {/* PROJECT SECTION */}
      <section className="section" id="projects">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">LEARNING THROUGH PROJECTS</div>

            <h2>
              What will students
              <br />
              <em>actually build?</em>
            </h2>
          </div>

          <p>
            Every activity connects a classroom concept to something students
            can make, test and demonstrate. Small projects become the starting
            point for bigger ideas.
          </p>
        </div>

        <div className="projectCards">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="projectCard" key={project.title}>
                <div className="projectImage">
                  <img src={project.image} alt={project.title} />
                  <div></div>
                  <span>{project.number}</span>
                </div>

                <div className="projectContent">
                  <div className="projectIcon">
                    <Icon size={21} />
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <div className="projectResult">
                    <CheckCircle2 size={15} />
                    Working project
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section programsSection" id="programs">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">PRACTICAL LEARNING PROGRAMS</div>

            <h2>
              Technology becomes
              <br />
              <em>useful when you build.</em>
            </h2>
          </div>

          <p>
            Project-led learning programs for students, schools and educators.
            Technology is the tool. Understanding, creativity and problem
            solving are the real outcomes.
          </p>
        </div>

        <div className="programGrid">
          {programs.map(({ icon: Icon, tag, title, text }) => (
            <article className="program" key={title}>
              <div className="icon">
                <Icon size={24} />
              </div>

              <div className="tag">{tag}</div>

              <h3>{title}</h3>

              <p>{text}</p>

              <a href="#contact">
                Discuss program <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* SCHOOL SECTION */}
      <section className="schoolBand" id="schools">
        <div className="section schoolInner">
          <div className="schoolCopy">
            <div className="eyebrow">FOR SCHOOLS & ATL LABS</div>

            <h2>
              Make your classroom a place where{" "}
              <em>students build.</em>
            </h2>

            <p>
              Bring structured practical learning into your institution through
              workshops, bootcamps, project programs, teacher enablement and
              innovation challenges.
            </p>

            <div className="checkGrid">
              <span>✓ Project-based curriculum</span>
              <span>✓ Trainer-led sessions</span>
              <span>✓ 3D printing & making</span>
              <span>✓ Arduino & robotics</span>
              <span>✓ Teacher enablement</span>
              <span>✓ Project & exhibition support</span>
            </div>

            <a href="#contact" className="primary">
              Plan a School Program <ArrowRight size={18} />
            </a>
          </div>

          <div className="schoolCard">
            <div className="cardLabel">
              THE PRACTICAL LEARNING LOOP
            </div>

            <h3>From question to prototype.</h3>

            {learningSteps.map(([number, title], index) => (
              <div className="journey" key={title}>
                <span>{number}</span>

                <b>{title}</b>

                <i style={{ width: `${48 + index * 9}%` }}></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="about">
          <div>
            <div className="eyebrow">WHY SHIKSHAMDEHI</div>

            <h2>
              Education that
              <br />
              <em>ends in action.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              With 16 years of hands-on experience in 3D design and making,
              ShikshamDehi brings real-world skills and maker thinking into
              education.
            </p>

            <p>
              Our goal is simple: move students from{" "}
              <strong>consuming technology to creating with technology.</strong>
            </p>

            <div className="quote">
              “The best lesson is the one where a student asks:{" "}
              <b>Can I build one more?</b>”
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="ctaGlow"></div>

        <div className="eyebrow">MAKE LEARNING PRACTICAL</div>

        <h2>
          Let&apos;s build something
          <br />
          <em>students remember.</em>
        </h2>

        <p>
          Schools, educators and institutions—tell us what your students
          should learn by building.
        </p>

        <div className="heroActions">
          <a href="mailto:hello@shikshamdehi.com" className="primary">
            Start a Conversation <ArrowRight size={18} />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="secondary light"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="brand">
          <span className="brandMark">SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </div>

        <p>Practical education. Real projects.</p>

        <small>© 2026 ShikshamDehi. All rights reserved.</small>
      </footer>
    </main>
  );
}
