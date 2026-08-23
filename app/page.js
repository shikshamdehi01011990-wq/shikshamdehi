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
    tag: 'FLAGSHIP',
    title: '3D Design & CAD',
    text: 'Learn professional 3D modelling, CAD thinking, product design and design-for-manufacturing concepts.',
  },
  {
    icon: Printer,
    tag: 'DIGITAL FABRICATION',
    title: '3D Printing',
    text: 'From STL and slicing to printer setup, troubleshooting, prototyping and functional parts.',
  },
  {
    icon: Cpu,
    tag: 'ELECTRONICS',
    title: 'Arduino & IoT',
    text: 'Build practical electronics projects using Arduino, sensors, actuators and connected devices.',
  },
  {
    icon: Bot,
    tag: 'AUTOMATION',
    title: 'Robotics',
    text: 'Learn motors, drivers, sensors, controllers and robotic systems through real projects.',
  },
  {
    icon: Sparkles,
    tag: 'FUTURE SKILLS',
    title: 'AI + Hardware',
    text: 'Explore AI thinking, smart devices, automation and hardware-based innovation.',
  },
  {
    icon: Lightbulb,
    tag: 'INNOVATION',
    title: 'Project Development',
    text: 'Turn ideas into prototypes for exhibitions, competitions, academic projects and startups.',
  },
];

const audiences = [
  {
    icon: School,
    title: 'Schools',
    text: 'Classes 6–12 STEM, maker programs, workshops and project-based learning.',
  },
  {
    icon: Layers3,
    title: 'ATL Labs',
    text: 'Lab activation, robotics, 3D printing, project mentoring and innovation challenges.',
  },
  {
    icon: Wrench,
    title: 'ITI',
    text: 'Technical skill training in 3D CAD, printing, prototyping and digital manufacturing.',
  },
  {
    icon: Settings2,
    title: 'Polytechnics',
    text: 'CAD, rapid prototyping, 3D printing, robotics and engineering project training.',
  },
  {
    icon: GraduationCap,
    title: 'Colleges',
    text: 'Product development, engineering prototypes, IoT, robotics and innovation programs.',
  },
  {
    icon: Building2,
    title: 'Educators',
    text: 'Faculty development and practical training in modern maker technologies.',
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
          aria-label="ShikshamDehi Home"
        >
          <span className="brandMark">SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav
          className={open ? 'mobileOpen' : ''}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#institutions" onClick={closeMenu}>
            For Institutions
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="navCta">
          Partner With Us <ArrowRight size={16} />
        </a>

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

      {/* ================= HERO ================= */}

      <section className="hero" id="top">
        <div className="gridGlow" aria-hidden="true" />

        <div className="heroCopy">
          <div className="eyebrow">
            <span />
            STEM EDUCATION • DIGITAL MANUFACTURING
          </div>

          <h1>
            Learn technology.
            <br />
            <em>Build the real world.</em>
          </h1>

          <p className="heroText">
            Hands-on training in{' '}
            <b>
              3D Design, 3D Printing, Arduino, Robotics, IoT and AI
            </b>{' '}
            for students and institutions.
          </p>

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

          <div className="heroActions">
            <Link href="/programs" className="primary">
              Explore Programs <ArrowRight size={18} />
            </Link>

            <a href="#contact" className="secondary">
              Partner With Us
            </a>
          </div>

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
              <strong>7</strong>
              <span>
                Technology
                <br />
                Domains
              </span>
            </div>
          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}

        <div className="heroVisual" aria-hidden="true">
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
                <b>Design → Print</b>
              </div>

              <div>
                <small>MODE</small>
                <b className="green">BUILDING</b>
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

      {/* ================= WORKFLOW BAR ================= */}

      <section className="ticker" aria-label="Learning workflow">
        <div>DESIGN</div>
        <span>→</span>
        <div>MAKE</div>
        <span>→</span>
        <div>TEST</div>
        <span>→</span>
        <div>IMPROVE</div>
        <span>→</span>
        <div>INNOVATE</div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="section" id="services">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">WHAT WE DO</div>

            <h2>
              From digital ideas
              <br />
              <em>to physical products.</em>
            </h2>
          </div>

          <p>
            ShikshamDehi combines education, digital design, electronics and
            fabrication to help learners move from concepts to working
            prototypes.
          </p>
        </div>

        <div className="programGrid">
          {services.map(({ icon: Icon, tag, title, text }) => (
            <article className="program" key={title}>
              <div className="icon" aria-hidden="true">
                <Icon size={24} />
              </div>

              <div className="tag">{tag}</div>

              <h3>{title}</h3>

              <p>{text}</p>

              <a href="#contact">
                Enquire <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ================= INSTITUTIONS ================= */}

      <section className="schoolBand" id="institutions">
        <div className="section">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">
                WHO WE WORK WITH
              </div>

              <h2>
                One technology platform.
                <br />
                <em>Multiple learning environments.</em>
              </h2>
            </div>

            <p>
              Programs can be customised according to age, curriculum,
              technical level, lab infrastructure and institutional goals.
            </p>
          </div>

          <div className="programGrid">
            {audiences.map(({ icon: Icon, title, text }) => (
              <article className="program" key={title}>
                <div className="icon" aria-hidden="true">
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <a href="#contact">
                  Discuss Program <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3D DESIGN / MANUFACTURING ================= */}

      <section className="section">
        <div className="about">
          <div>
            <div className="eyebrow">
              3D DESIGN → 3D PRINTING
            </div>

            <h2>
              From CAD
              <br />
              <em>to prototype.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              Learn the complete digital manufacturing workflow—from
              designing a part to producing a physical prototype.
            </p>

            <div className="workflow">
              {workflow.map((item, index) => (
                <div className="workflowItem" key={item}>
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <b>{item}</b>

                  {index < workflow.length - 1 && <i>→</i>}
                </div>
              ))}
            </div>

            <p>
              Ideal for{' '}
              <strong>
                ITI, Polytechnic, Engineering College and professional skill
                programs.
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
              Build skills that
              <br />
              <em>students can use.</em>
            </h2>

            <p>
              We design practical training programs for educational
              institutions—from foundation-level maker education to
              technical 3D design, printing, robotics and prototyping.
            </p>

            <div className="checkGrid">
              <span>✓ Student training</span>
              <span>✓ Faculty development</span>
              <span>✓ 3D CAD & design</span>
              <span>✓ 3D printing</span>
              <span>✓ Arduino & robotics</span>
              <span>✓ Project mentoring</span>
              <span>✓ Workshop & bootcamp</span>
              <span>✓ Innovation challenges</span>
            </div>

            <a href="#contact" className="primary">
              Request Institutional Program
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="schoolCard">
            <div className="cardLabel">
              LEARNING PATH
            </div>

            <h3>Idea → Product</h3>

            {workflow.slice(0, 6).map((item, index) => (
              <div className="journey" key={item}>
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <b>{item}</b>

                <i
                  style={{
                    width: `${45 + index * 9}%`,
                  }}
                />
              </div>
            ))}

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

      {/* ================= ABOUT ================= */}

      <section className="section" id="about">
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
                16+ years of 3D design and printing experience
              </strong>{' '}
              into education and technical skill development.
            </p>

            <p>
              Our approach connects{' '}
              <strong>
                design + electronics + coding + fabrication + robotics
              </strong>{' '}
              into practical learning experiences.
            </p>

            <p>
              Students don&apos;t just consume technology. They learn to{' '}
              <strong>
                design it, build it, test it and improve it.
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

      {/* ================= CTA ================= */}

      <section className="cta" id="contact">
        <div className="ctaGlow" aria-hidden="true" />

        <div className="eyebrow">
          START A PARTNERSHIP
        </div>

        <h2>
          Let&apos;s build the
          <br />
          <em>next generation of makers.</em>
        </h2>

        <p>
          Schools, ATL Labs, ITIs, Polytechnics, Colleges and educators—
          tell us what you want to build.
        </p>

        <div className="heroActions">
          <a
            className="primary"
            href="mailto:hello@shikshamdehi.com"
          >
            Start a Conversation <ArrowRight size={18} />
          </a>

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
          <span>College</span>
          <span>Educators</span>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="brand">
          <span className="brandMark">SD</span>

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

