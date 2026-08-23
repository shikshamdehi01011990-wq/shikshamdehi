'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Building2,
  Cpu,
  Cuboid,
  GraduationCap,
  Layers3,
  Lightbulb,
  Menu,
  Printer,
  School,
  Settings2,
  Sparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: Cuboid,
    tag: 'DESIGN',
    title: '3D Design & CAD',
    text: 'Learn 3D modelling, CAD, product design, engineering design and design-for-manufacturing concepts.',
  },
  {
    icon: Printer,
    tag: 'DIGITAL FABRICATION',
    title: '3D Printing',
    text: 'Learn slicing, printer operation, materials, print settings, troubleshooting and rapid prototyping.',
  },
  {
    icon: Cpu,
    tag: 'ELECTRONICS',
    title: 'Arduino & IoT',
    text: 'Build practical projects using Arduino, sensors, actuators, microcontrollers and connected devices.',
  },
  {
    icon: Bot,
    tag: 'AUTOMATION',
    title: 'Robotics',
    text: 'Build robots and automation systems using motors, sensors, controllers and mechanical components.',
  },
  {
    icon: Sparkles,
    tag: 'FUTURE TECHNOLOGY',
    title: 'AI + Smart Hardware',
    text: 'Explore AI thinking, intelligent devices, automation and hardware-based innovation.',
  },
  {
    icon: Lightbulb,
    tag: 'PROJECTS',
    title: 'Product Prototyping',
    text: 'Turn ideas into working prototypes for exhibitions, competitions, academic projects and innovation.',
  },
];

const audiences = [
  {
    icon: School,
    title: 'Schools',
    text: 'STEM, maker education, 3D printing, robotics, electronics and project-based learning for students.',
    href: '#contact',
  },
  {
    icon: Layers3,
    title: 'ATL Labs',
    text: 'Lab activation, project mentoring, robotics, 3D printing, innovation challenges and competitions.',
    href: '#contact',
  },
  {
    icon: Wrench,
    title: 'ITI',
    text: 'Practical technical training in CAD, 3D printing, prototyping, digital manufacturing and automation.',
    href: '/iti-polytechnic',
  },
  {
    icon: Settings2,
    title: 'Polytechnics',
    text: 'Engineering design, CAD, rapid prototyping, 3D printing, robotics and technical project training.',
    href: '/iti-polytechnic',
  },
  {
    icon: GraduationCap,
    title: 'Colleges',
    text: 'Engineering projects, product development, IoT, robotics, prototyping and innovation programs.',
    href: '#contact',
  },
  {
    icon: Building2,
    title: 'Educators',
    text: 'Faculty development, trainer enablement and practical training in modern maker technologies.',
    href: '#contact',
  },
];

const workflow = [
  'IDEA',
  'DESIGN',
  'MODEL',
  'PRINT',
  'BUILD',
  'TEST',
  'IMPROVE',
];

const highlights = [
  'Student Training',
  'Faculty Training',
  'Workshops',
  'Bootcamps',
  'Project Mentoring',
  'Innovation Programs',
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <header className="nav">

        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brandMark">SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav className={open ? 'mobileOpen' : ''}>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#institutions" onClick={closeMenu}>
            Institutions
          </a>

          <Link href="/programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

        <Link href="#contact" className="navCta">
          Partner With Us
          <ArrowRight size={16} />
        </Link>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="top">

        <div className="gridGlow" />

        <div className="heroCopy">

          <div className="eyebrow">
            <span />
            STEM • MAKER • DIGITAL MANUFACTURING
          </div>

          <h1>
            Learn technology.
            <br />
            <em>Build the real world.</em>
          </h1>

          <p className="heroText">
            Practical, project-based training in{' '}
            <b>
              3D Design, CAD, 3D Printing, Arduino,
              Robotics, IoT and AI
            </b>{' '}
            for students, educators and technical institutions.
          </p>


          {/* WHO WE SERVE */}

          <div className="heroAudience">

            <span>Schools</span>
            <i>•</i>

            <span>ATL Labs</span>
            <i>•</i>

            <span>ITI</span>
            <i>•</i>

            <span>Polytechnics</span>
            <i>•</i>

            <span>Colleges</span>

          </div>


          {/* ACTIONS */}

          <div className="heroActions">

            <Link
              href="/programs"
              className="primary"
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>

            <a
              href="#institutions"
              className="secondary"
            >
              Who We Serve
            </a>

          </div>


          {/* PROOF */}

          <div className="proof">

            <div>
              <strong>16+</strong>

              <span>
                Years of
                <br />
                3D Experience
              </span>
            </div>

            <i />

            <div>
              <strong>100%</strong>

              <span>
                Hands-on
                <br />
                Learning
              </span>
            </div>

            <i />

            <div>
              <strong>6+</strong>

              <span>
                Technology
                <br />
                Domains
              </span>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="heroVisual">

          <div className="orb orb1" />
          <div className="orb orb2" />


          <div className="printerCard">

            <div className="printerTop">
              <span className="liveDot" />
              SHIKSHAMDEHI / MAKER LAB
            </div>

            <div className="printerScene">

              <div className="printBed" />

              <div className="printObject">
                <span />
                <span />
                <span />
              </div>

              <div className="nozzle" />

            </div>

            <div className="printStats">

              <div>
                <small>WORKFLOW</small>
                <b>Design → Prototype</b>
              </div>

              <div>
                <small>MODE</small>
                <b className="green">
                  BUILDING
                </b>
              </div>

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

        </div>

      </section>


      {/* ================= QUICK SERVICE BAR ================= */}

      <section className="ticker">

        {highlights.map((item, index) => (
          <div key={item}>
            {item}

            {index < highlights.length - 1 && (
              <span>→</span>
            )}
          </div>
        ))}

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="section"
        id="services"
      >

        <div className="sectionHead">

          <div>

            <div className="eyebrow">
              WHAT WE DO
            </div>

            <h2>
              Technology education
              <br />
              <em>that ends with something real.</em>
            </h2>

          </div>

          <p>
            ShikshamDehi combines education, digital design,
            electronics, coding, fabrication and robotics to
            help learners move from concepts to working
            prototypes.
          </p>

        </div>


        <div className="programGrid">

          {services.map(
            ({ icon: Icon, tag, title, text }) => (

              <article
                className="program"
                key={title}
              >

                <div className="icon">
                  <Icon size={24} />
                </div>

                <div className="tag">
                  {tag}
                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

                <a href="#contact">
                  Enquire
                  <ArrowRight size={16} />
                </a>

              </article>

            )
          )}

        </div>

      </section>


      {/* ================= WHO WE SERVE ================= */}

      <section
        className="schoolBand"
        id="institutions"
      >

        <div className="section">

          <div className="sectionHead">

            <div>

              <div className="eyebrow">
                WHO WE SERVE
              </div>

              <h2>
                One platform.
                <br />
                <em>Every learning environment.</em>
              </h2>

            </div>

            <p>
              From school maker programs to technical
              education and engineering projects, our
              training can be customised according to
              learner level, curriculum, lab infrastructure
              and institutional goals.
            </p>

          </div>


          <div className="programGrid">

            {audiences.map(
              ({ icon: Icon, title, text, href }) => (

                <article
                  className="program"
                  key={title}
                >

                  <div className="icon">
                    <Icon size={24} />
                  </div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                  <Link href={href}>
                    Explore
                    <ArrowRight size={16} />
                  </Link>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= 3D MANUFACTURING ================= */}

      <section className="section">

        <div className="about">

          <div>

            <div className="eyebrow">
              3D DESIGN → DIGITAL MANUFACTURING
            </div>

            <h2>
              From CAD
              <br />
              <em>to physical product.</em>
            </h2>

          </div>


          <div className="aboutText">

            <p>
              Students learn the complete digital
              manufacturing workflow—from understanding
              an idea and creating a 3D model to producing
              and testing a physical prototype.
            </p>


            <div className="workflow">

              {workflow.map(
                (item, index) => (

                  <div
                    className="workflowItem"
                    key={item}
                  >

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <b>
                      {item}
                    </b>

                    {index < workflow.length - 1 && (
                      <i>→</i>
                    )}

                  </div>

                )
              )}

            </div>


            <p>

              Especially useful for{' '}

              <strong>
                Schools, ATL Labs, ITIs,
                Polytechnics and Engineering Colleges.
              </strong>

            </p>

          </div>

        </div>

      </section>


      {/* ================= INSTITUTIONAL TRAINING ================= */}

      <section className="schoolBand">

        <div className="section schoolInner">

          <div className="schoolCopy">

            <div className="eyebrow">
              INSTITUTIONAL TRAINING
            </div>

            <h2>
              Build skills
              <br />
              <em>students can use.</em>
            </h2>

            <p>
              We design practical technology programs
              for educational institutions—from
              foundation-level maker education to
              advanced technical training in CAD,
              3D printing, electronics, robotics and
              prototyping.
            </p>


            <div className="checkGrid">

              <span>✓ Student Training</span>
              <span>✓ Faculty Development</span>

              <span>✓ 3D CAD & Design</span>
              <span>✓ 3D Printing</span>

              <span>✓ Arduino & Robotics</span>
              <span>✓ IoT & Automation</span>

              <span>✓ Project Mentoring</span>
              <span>✓ Workshops & Bootcamps</span>

              <span>✓ Innovation Challenges</span>
              <span>✓ Exhibition Support</span>

            </div>


            <a
              href="#contact"
              className="primary"
            >
              Request Institutional Program
              <ArrowRight size={18} />
            </a>

          </div>


          <div className="schoolCard">

            <div className="cardLabel">
              LEARNING PATH
            </div>

            <h3>
              Idea → Product
            </h3>


            {workflow.slice(0, 6).map(
              (item, index) => (

                <div
                  className="journey"
                  key={item}
                >

                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <b>
                    {item}
                  </b>

                  <i
                    style={{
                      width: `${45 + index * 9}%`,
                    }}
                  />

                </div>

              )
            )}


            <Link
              href="/programs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '22px',
              }}
            >
              Explore Programs
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= ITI / POLYTECHNIC FEATURE ================= */}

      <section className="section">

        <div className="about">

          <div>

            <div className="eyebrow">
              ITI • POLYTECHNIC • ENGINEERING
            </div>

            <h2>
              Technical education
              <br />
              <em>meets digital manufacturing.</em>
            </h2>

          </div>


          <div className="aboutText">

            <p>
              Help technical students move beyond theory
              with practical training in{' '}
              <strong>
                CAD, 3D Printing, Product Design,
                Prototyping, Electronics, Robotics and
                Automation.
              </strong>
            </p>

            <p>
              Programs can be delivered as short-term
              workshops, skill-development programs,
              bootcamps, project training or customised
              institutional programs.
            </p>


            <Link
              href="/iti-polytechnic"
              className="primary"
            >
              Explore ITI & Polytechnic Programs
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="section"
        id="about"
      >

        <div className="about">

          <div>

            <div className="eyebrow">
              WHY SHIKSHAMDEHI
            </div>

            <h2>
              16+ years of
              <br />
              <em>real making experience.</em>
            </h2>

          </div>


          <div className="aboutText">

            <p>
              ShikshamDehi brings{' '}
              <strong>
                16+ years of 3D design and printing
                experience
              </strong>{' '}
              into education and technical skill
              development.
            </p>

            <p>
              Our approach connects{' '}
              <strong>
                design + electronics + coding +
                fabrication + robotics
              </strong>{' '}
              into practical learning experiences.
            </p>

            <p>
              Students don't just consume technology.
              They learn to{' '}
              <strong>
                design it, build it, test it and
                improve it.
              </strong>
            </p>


            <div className="quote">
              “The goal is not just to teach technology.
              <br />
              <b>
                The goal is to create makers.
              </b>
              ”
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section
        className="cta"
        id="contact"
      >

        <div className="ctaGlow" />

        <div className="eyebrow">
          START A PARTNERSHIP
        </div>

        <h2>
          Let's build the
          <br />
          <em>next generation of makers.</em>
        </h2>

        <p>
          Schools, ATL Labs, ITIs, Polytechnics,
          Colleges and educators—tell us what
          you want to build.
        </p>


        <div className="heroActions">

          <Link
            className="primary"
            href="/contact"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>

          <a
            className="secondary light"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>

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


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="brand">

          <span className="brandMark">
            SD
          </span>

          <span>
            Shiksham<span>Dehi</span>
          </span>

        </div>

        <p>
          STEM Education • Digital Manufacturing • Future Skills
        </p>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>

      </footer>

    </main>
  );
}
