'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Cpu,
  Cuboid,
  GraduationCap,
  Layers3,
  Lightbulb,
  Menu,
  Printer,
  Settings2,
  Sparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: Cuboid,
    title: '3D Design & CAD',
    short: 'Design',
    text: 'Learn 3D modelling, CAD and product design by creating real digital models.',
    href: '/programs',
  },
  {
    icon: Printer,
    title: '3D Printing',
    short: 'Make',
    text: 'Turn digital designs into physical prototypes using 3D printing.',
    href: '/programs',
  },
  {
    icon: Bot,
    title: 'Robotics',
    short: 'Build',
    text: 'Build robots using motors, sensors, controllers and programming.',
    href: '/projects',
  },
  {
    icon: Cpu,
    title: 'Arduino & IoT',
    short: 'Connect',
    text: 'Create smart electronics projects using Arduino, sensors and IoT.',
    href: '/programs',
  },
  {
    icon: Sparkles,
    title: 'AI + Hardware',
    short: 'Innovate',
    text: 'Explore AI, automation and intelligent hardware-based projects.',
    href: '/programs',
  },
  {
    icon: Lightbulb,
    title: 'Project Development',
    short: 'Create',
    text: 'Convert ideas into working prototypes for exhibitions and projects.',
    href: '/projects',
  },
];

const audiences = [
  {
    icon: Layers3,
    title: 'Schools',
    text: 'STEM, maker education & project-based learning.',
    href: '/programs',
  },
  {
    icon: Lightbulb,
    title: 'ATL Labs',
    text: 'Lab activation, mentoring & innovation projects.',
    href: '/programs',
  },
  {
    icon: Wrench,
    title: 'ITI',
    text: 'CAD, 3D printing, prototyping & technical skills.',
    href: '/iti-polytechnic',
  },
  {
    icon: Settings2,
    title: 'Polytechnic',
    text: 'Engineering design, CAD & digital manufacturing.',
    href: '/iti-polytechnic',
  },
  {
    icon: GraduationCap,
    title: 'Colleges',
    text: 'Engineering projects, IoT, robotics & prototypes.',
    href: '/projects',
  },
  {
    icon: Building2,
    title: 'Educators',
    text: 'Faculty development & technology training.',
    href: '/contact',
  },
];

const workflow = [
  'IDEA',
  'DESIGN',
  'MODEL',
  'BUILD',
  'TEST',
  'IMPROVE',
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main className="homePage">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="nav">
        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
          aria-label="ShikshamDehi Home"
        >
          <span className="brandMark">SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={open ? 'mobileOpen' : ''}
          aria-label="Main navigation"
        >
          <Link href="/programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link href="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link href="/iti-polytechnic" onClick={closeMenu}>
            ITI & Polytechnic
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            Journal
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <Link href="/contact" className="navCta">
          Partner With Us
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>


      {/* =====================================================
          HERO — FIRST IMPRESSION
      ===================================================== */}

      <section className="hero" id="top">
        <div className="gridGlow" aria-hidden="true" />

        <div className="heroCopy">

          <div className="eyebrow">
            <span />
            FUTURE SKILLS • REAL PROJECTS
          </div>

          <h1>
            Learn.
            <br />
            <em>Build.</em>
            <br />
            Create the future.
          </h1>

          <p className="heroText">
            ShikshamDehi helps students and institutions learn
            <strong> 3D Design, 3D Printing, Robotics, Arduino,
            IoT and AI</strong> through hands-on projects.
          </p>

          <div className="heroMessage">
            <span>NOT JUST THEORY.</span>
            <b>REAL SKILLS. REAL PROJECTS.</b>
          </div>

          <div className="heroActions">

            <Link href="/programs" className="primary">
              Explore Programs
              <ArrowRight size={18} />
            </Link>

            <Link href="/projects" className="secondary">
              See Student Projects
            </Link>

          </div>

          <div className="heroAudience">
            <span>Schools</span>
            <i>•</i>
            <span>ATL Labs</span>
            <i>•</i>
            <span>ITI</span>
            <i>•</i>
            <span>Polytechnic</span>
            <i>•</i>
            <span>Colleges</span>
          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="heroVisual" aria-hidden="true">

          <div className="orb orb1" />
          <div className="orb orb2" />

          <div className="heroCore">

            <div className="coreLabel">
              SHIKSHAMDEHI
            </div>

            <div className="coreCube">
              <span />
              <span />
              <span />
            </div>

            <div className="coreText">
              <b>IDEA → PROTOTYPE</b>
              <small>LEARN • BUILD • INNOVATE</small>
            </div>

          </div>


          <div className="floating f1">
            <Cuboid size={18} />
            <span>3D CAD</span>
          </div>

          <div className="floating f2">
            <Bot size={18} />
            <span>Robotics</span>
          </div>

          <div className="floating f3">
            <Zap size={18} />
            <span>Arduino</span>
          </div>

          <div className="floating f4">
            <Printer size={18} />
            <span>3D Print</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK VALUE STRIP
      ===================================================== */}

      <section className="valueStrip">

        <div>
          <strong>3D</strong>
          <span>Design & Printing</span>
        </div>

        <i />

        <div>
          <strong>ROBOTICS</strong>
          <span>Build Autonomous Systems</span>
        </div>

        <i />

        <div>
          <strong>IoT</strong>
          <span>Create Smart Devices</span>
        </div>

        <i />

        <div>
          <strong>AI</strong>
          <span>Explore Future Technology</span>
        </div>

      </section>


      {/* =====================================================
          WHAT IS SHIKSHAMDEHI
      ===================================================== */}

      <section className="section introduction">

        <div className="introVisual">

          <div className="eyebrow">
            <span />
            WHAT IS SHIKSHAMDEHI?
          </div>

          <div className="bigNumber">
            <span>01</span>
            <b>LEARN<br />BY<br />MAKING.</b>
          </div>

        </div>

        <div className="introContent">

          <h2>
            Technology is not
            <br />
            something to just
            <br />
            <em>study.</em>
          </h2>

          <p>
            It is something you can design, build, test and improve.
          </p>

          <p>
            ShikshamDehi creates practical learning experiences where
            students work with real technologies and turn ideas into
            working projects.
          </p>

          <div className="introPoints">

            <div>
              <Check size={16} />
              Hands-on learning
            </div>

            <div>
              <Check size={16} />
              Real technology
            </div>

            <div>
              <Check size={16} />
              Project-based skills
            </div>

            <div>
              <Check size={16} />
              Future-ready thinking
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY DOMAINS
      ===================================================== */}

      <section className="section" id="services">

        <div className="sectionHead">

          <div>

            <div className="eyebrow">
              <span />
              WHAT WE TEACH
            </div>

            <h2>
              One place to learn
              <br />
              <em>future technologies.</em>
            </h2>

          </div>

          <p>
            Start with one skill or combine multiple technologies
            into a complete project-based learning journey.
          </p>

        </div>


        <div className="programGrid">

          {services.map(
            ({ icon: Icon, title, short, text, href }) => (

              <article className="program" key={title}>

                <div className="programNumber">
                  {short}
                </div>

                <div className="icon" aria-hidden="true">
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <Link href={href}>
                  Explore
                  <ArrowRight size={16} />
                </Link>

              </article>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          THE JOURNEY
      ===================================================== */}

      <section className="journeyBand">

        <div className="section">

          <div className="sectionHead">

            <div>

              <div className="eyebrow">
                <span />
                HOW LEARNING WORKS
              </div>

              <h2>
                Idea
                <br />
                <em>to real project.</em>
              </h2>

            </div>

            <p>
              Students don't just follow instructions. They move
              through a practical maker workflow and learn by doing.
            </p>

          </div>


          <div className="workflow">

            {workflow.map((item, index) => (

              <div
                className="workflowItem"
                key={item}
              >

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <b>{item}</b>

                {index < workflow.length - 1 && (
                  <i>→</i>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO IS IT FOR
      ===================================================== */}

      <section
        className="section"
        id="institutions"
      >

        <div className="sectionHead">

          <div>

            <div className="eyebrow">
              <span />
              WHO WE WORK WITH
            </div>

            <h2>
              Built for
              <br />
              <em>different learners.</em>
            </h2>

          </div>

          <p>
            Whether you are a school, ATL Lab, ITI, Polytechnic,
            college or educator, programs can be adapted to your
            learning goals.
          </p>

        </div>


        <div className="audienceGrid">

          {audiences.map(
            ({ icon: Icon, title, text, href }) => (

              <Link
                href={href}
                className="audienceCard"
                key={title}
              >

                <div className="icon">
                  <Icon size={22} />
                </div>

                <div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <span>
                    Explore
                    <ArrowRight size={15} />
                  </span>

                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          3D MANUFACTURING FEATURE
      ===================================================== */}

      <section className="manufacturingBand">

        <div className="section manufacturing">

          <div>

            <div className="eyebrow">
              <span />
              DIGITAL MANUFACTURING
            </div>

            <h2>
              From CAD
              <br />
              <em>to something real.</em>
            </h2>

            <p>
              Learn the complete journey of designing a digital
              model and turning it into a physical prototype.
            </p>

            <Link
              href="/iti-polytechnic"
              className="primary"
            >
              Explore Technical Training
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="manufacturingSteps">

            <div className="manufacturingCard active">
              <span>01</span>
              <b>DESIGN</b>
              <small>CAD MODEL</small>
            </div>

            <div className="arrow">→</div>

            <div className="manufacturingCard">
              <span>02</span>
              <b>PRINT</b>
              <small>PHYSICAL PART</small>
            </div>

            <div className="arrow">→</div>

            <div className="manufacturingCard">
              <span>03</span>
              <b>TEST</b>
              <small>REAL PROTOTYPE</small>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT CTA
      ===================================================== */}

      <section className="projectBanner">

        <div>

          <div className="eyebrow">
            <span />
            PROJECT-BASED LEARNING
          </div>

          <h2>
            What will your
            <br />
            students <em>build?</em>
          </h2>

          <p>
            Explore robotics, Arduino, IoT, 3D printing and
            innovation projects designed for hands-on learning.
          </p>

        </div>

        <Link
          href="/projects"
          className="largeArrow"
        >
          <span>Explore Projects</span>
          <ArrowRight size={24} />
        </Link>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section
        className="section"
        id="about"
      >

        <div className="about">

          <div>

            <div className="eyebrow">
              <span />
              WHY SHIKSHAMDEHI
            </div>

            <h2>
              Education
              <br />
              that leads to
              <br />
              <em>making.</em>
            </h2>

          </div>


          <div className="aboutText">

            <p>
              ShikshamDehi connects
              <strong>
                {' '}design, electronics, coding,
                fabrication and robotics
              </strong>{' '}
              into practical learning experiences.
            </p>

            <p>
              The focus is simple:
              <strong>
                {' '}understand → build → test → improve.
              </strong>
            </p>

            <div className="quote">
              “The goal is not just to teach technology.
              <br />
              <b>The goal is to create makers.</b>”
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="cta"
        id="contact"
      >

        <div className="ctaGlow" aria-hidden="true" />

        <div className="eyebrow">
          <span />
          READY TO BUILD?
        </div>

        <h2>
          Start with an idea.
          <br />
          <em>Build something real.</em>
        </h2>

        <p>
          Explore our programs, see project possibilities or talk
          to us about a customised institutional program.
        </p>


        <div className="heroActions">

          <Link
            href="/programs"
            className="primary"
          >
            Explore Programs
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="secondary light"
          >
            Talk to ShikshamDehi
          </Link>

        </div>


        <div className="ctaTags">

          <span>Schools</span>
          <span>ATL Labs</span>
          <span>ITI</span>
          <span>Polytechnic</span>
          <span>Colleges</span>
          <span>Educators</span>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <Link href="/" className="brand">

          <span className="brandMark">
            SD
          </span>

          <span>
            Shiksham<span>Dehi</span>
          </span>

        </Link>

        <p>
          STEM Education • Digital Manufacturing • Future Skills
        </p>

        <div className="footerLinks">

          <Link href="/programs">
            Programs
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/iti-polytechnic">
            ITI & Polytechnic
          </Link>

          <Link href="/blog">
            Journal
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>

      </footer>

    </main>
  );
}

