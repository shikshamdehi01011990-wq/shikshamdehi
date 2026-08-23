'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Box,
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
} from 'lucide-react';

const programs = [
  {
    icon: Cuboid,
    tag: 'FLAGSHIP PROGRAM',
    title: '3D Design & Printing',
    text: 'From imagination to a real, printed product. Students learn 3D design, CAD thinking, slicing, printer basics and rapid prototyping.',
    link: '/programs',
  },
  {
    icon: Cpu,
    tag: 'ELECTRONICS',
    title: 'Arduino & Electronics',
    text: 'Learn circuits, sensors, inputs, outputs and coding through hands-on projects—not just theory.',
    link: '/programs',
  },
  {
    icon: Bot,
    tag: 'ROBOTICS',
    title: 'Robotics & Automation',
    text: 'Build moving machines using motors, drivers, Arduino and sensors. Progress from simple bots to smart robots.',
    link: '/programs',
  },
  {
    icon: Sparkles,
    tag: 'FUTURE SKILLS',
    title: 'AI, IoT & Innovation',
    text: 'Explore connected devices, AI thinking, automation and real-world problem solving through projects.',
    link: '/programs',
  },
];

const journey = [
  'Explore',
  'Design',
  'Build',
  'Print',
  'Program',
  'Innovate',
];

const audiences = [
  {
    icon: GraduationCap,
    title: 'For Students',
    text: 'Age-appropriate hands-on programs where students learn by building real projects.',
  },
  {
    icon: School,
    title: 'For Schools',
    text: 'Structured STEM programs, workshops, annual plans and maker-learning support.',
  },
  {
    icon: Printer,
    title: 'For ATL Labs',
    text: '3D printing, robotics, electronics and project mentoring for active ATL labs.',
  },
  {
    icon: Lightbulb,
    title: 'For Educators',
    text: 'Teacher enablement, practical training and project-based STEM teaching support.',
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main>
      {/* ================= NAVIGATION ================= */}

      <header className="nav">
        <Link className="brand" href="/" onClick={closeMenu}>
          <span className="brandMark">SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav className={open ? 'mobileOpen' : ''}>
          <a href="#programs" onClick={closeMenu}>
            Programs
          </a>

          <a href="#schools" onClick={closeMenu}>
            For Schools
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="navCta" href="#contact">
          Partner With Us <ArrowRight size={16} />
        </a>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
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
            <span></span> STEM • MAKER • INNOVATION
          </div>

          <h1>
            Turn curiosity into{' '}
            <em>real-world skills.</em>
          </h1>

          <p className="heroText">
            Future-ready learning through{' '}
            <b>
              3D Design & Printing, Arduino, Robotics, IoT and AI.
            </b>{' '}
            Students don&apos;t just learn technology—they build with it.
          </p>

          <div className="heroActions">
            <Link className="primary" href="/programs">
              Explore Programs <ArrowRight size={18} />
            </Link>

            <a className="secondary" href="#contact">
              Talk to ShikshamDehi
            </a>
          </div>

          <div className="proof">
            <div>
              <strong>16+</strong>
              <span>
                Years of 3D
                <br />
                Design Experience
              </span>
            </div>

            <i></i>

            <div>
              <strong>100%</strong>
              <span>
                Hands-on
                <br />
                Project Learning
              </span>
            </div>

            <i></i>

            <div>
              <strong>4+</strong>
              <span>
                Future Skill
                <br />
                Domains
              </span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}

        <div className="heroVisual">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>

          <div className="printerCard">
            <div className="printerTop">
              <span className="liveDot"></span>
              MAKER LAB / LIVE
            </div>

            <div className="printerScene">
              <div className="printBed"></div>

              <div className="printObject">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="nozzle"></div>
            </div>

            <div className="printStats">
              <div>
                <small>PROJECT</small>
                <b>Smart Rover</b>
              </div>

              <div>
                <small>STATUS</small>
                <b className="green">PRINTING</b>
              </div>
            </div>
          </div>

          <div className="floating f1">
            <Box size={18} />
            <span>3D Design</span>
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

      {/* ================= JOURNEY TICKER ================= */}

      <section className="ticker">
        <div>LEARN</div>
        <span>→</span>
        <div>MAKE</div>
        <span>→</span>
        <div>TEST</div>
        <span>→</span>
        <div>IMPROVE</div>
        <span>→</span>
        <div>INNOVATE</div>
      </section>

      {/* ================= PROGRAMS ================= */}

      <section className="section" id="programs">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">WHAT WE TEACH</div>

            <h2>
              Learning that ends
              <br />
              <em>with something real.</em>
            </h2>
          </div>

          <p>
            Designed for students, schools and educators. Every program is
            project-led, age-appropriate and built around practical outcomes.
          </p>
        </div>

        <div className="programGrid">
          {programs.map(
            ({ icon: Icon, tag, title, text, link }) => (
              <article className="program" key={title}>
                <div className="icon">
                  <Icon size={24} />
                </div>

                <div className="tag">{tag}</div>

                <h3>{title}</h3>

                <p>{text}</p>

                <Link href={link}>
                  Explore Program <ArrowRight size={16} />
                </Link>
              </article>
            )
          )}
        </div>

        <div
          style={{
            marginTop: '36px',
            textAlign: 'center',
          }}
        >
          <Link className="secondary" href="/programs">
            View Complete Programs <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ================= AUDIENCE ================= */}

      <section className="section" id="audience">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">WHO WE WORK WITH</div>

            <h2>
              One platform.
              <br />
              <em>Multiple learning journeys.</em>
            </h2>
          </div>

          <p>
            ShikshamDehi brings practical maker education to the people who
            matter most in the learning ecosystem.
          </p>
        </div>

        <div className="programGrid">
          {audiences.map(
            ({ icon: Icon, title, text }) => (
              <article className="program" key={title}>
                <div className="icon">
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <a href="#contact">
                  Know More <ArrowRight size={16} />
                </a>
              </article>
            )
          )}
        </div>
      </section>

      {/* ================= SCHOOL SECTION ================= */}

      <section className="schoolBand" id="schools">
        <div className="section schoolInner">
          <div className="schoolCopy">
            <div className="eyebrow">
              FOR SCHOOLS & ATL LABS
            </div>

            <h2>
              Build a <em>maker culture</em> inside your school.
            </h2>

            <p>
              Don&apos;t just set up a lab. Make it active. ShikshamDehi can
              support your school with structured STEM programs, trainer-led
              sessions, projects, teacher training and innovation challenges.
            </p>

            <div className="checkGrid">
              <span>✓ Curriculum & lesson plans</span>
              <span>✓ 3D printing programs</span>
              <span>✓ Arduino & robotics</span>
              <span>✓ Teacher enablement</span>
              <span>✓ Project & exhibition support</span>
              <span>✓ Annual STEM programs</span>
            </div>

            <a className="primary" href="#contact">
              Discuss Your School <ArrowRight size={18} />
            </a>
          </div>

          <div className="schoolCard">
            <div className="cardLabel">
              CLASSES 6–8 / FOUNDATION
            </div>

            <h3>Young Maker Journey</h3>

            {journey.map((x, i) => (
              <div className="journey" key={x}>
                <span>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <b>{x}</b>

                <i
                  style={{
                    width: `${45 + i * 10}%`,
                  }}
                ></i>
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
              View Young Maker Program
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="section" id="about">
        <div className="about">
          <div>
            <div className="eyebrow">
              WHY SHIKSHAMDEHI
            </div>

            <h2>
              Experience that
              <br />
              <em>builds confidence.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              With <strong>16+ years of hands-on experience</strong> in 3D
              design and printing, ShikshamDehi brings practical maker
              knowledge into education.
            </p>

            <p>
              We believe students should not only consume technology. They
              should understand it, design it, build it, test it and improve
              it.
            </p>

            <p>
              Our approach connects{' '}
              <strong>
                design + electronics + coding + fabrication + robotics
              </strong>{' '}
              into one practical learning experience.
            </p>

            <div className="quote">
              “The best STEM lesson is the one where a student says:{' '}
              <b>Can I build one more?</b>”
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="cta" id="contact">
        <div className="ctaGlow"></div>

        <div className="eyebrow">
          LET&apos;S BUILD THE FUTURE
        </div>

        <h2>
          Ready to start a
          <br />
          <em>maker journey?</em>
        </h2>

        <p>
          Schools, parents, educators and students—tell us what you want
          to build.
        </p>

        <div className="heroActions">
          <a
            className="primary"
            href="mailto:hello@shikshamdehi.com"
          >
            Start a Conversation <ArrowRight size={18} />
          </a>

          {/* IMPORTANT: Replace this number with your real WhatsApp number */}
          <a
            className="secondary light"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>

        <div
          style={{
            marginTop: '42px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            opacity: 0.75,
          }}
        >
          <span>School Programs</span>
          <span>•</span>
          <span>Student Workshops</span>
          <span>•</span>
          <span>ATL Training</span>
          <span>•</span>
          <span>3D Printing</span>
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

        <p>Future skills. Real projects.</p>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
