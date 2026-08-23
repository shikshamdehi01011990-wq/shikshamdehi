'use client';

import Link from 'next/link';
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
  Settings2,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

import styles from './iti-polytechnic.module.css';

const trainingAreas = [
  {
    icon: Cuboid,
    title: '3D Design & CAD',
    text: 'Learn practical 3D modelling, CAD fundamentals, design thinking and preparation of models for manufacturing.',
  },
  {
    icon: Printer,
    title: '3D Printing',
    text: 'Understand slicing, printer operation, materials, print settings, troubleshooting and rapid prototyping.',
  },
  {
    icon: Cpu,
    title: 'Electronics',
    text: 'Hands-on training with electronic components, circuits, sensors, breadboards and practical applications.',
  },
  {
    icon: Bot,
    title: 'Robotics',
    text: 'Build practical robots using motors, sensors, controllers, Arduino and automation concepts.',
  },
  {
    icon: Settings2,
    title: 'Prototyping',
    text: 'Convert engineering ideas into physical prototypes through design, fabrication, testing and iteration.',
  },
  {
    icon: Zap,
    title: 'STEM Technology',
    text: 'Connect engineering concepts with modern technology through practical, project-based learning.',
  },
];

const benefits = [
  'Industry-oriented practical skills',
  '3D CAD and digital design',
  '3D printing and prototyping',
  'Electronics and Arduino',
  'Robotics and automation',
  'Project-based learning',
  'Workshop and bootcamp training',
  'Faculty development programs',
];

const workflow = [
  'UNDERSTAND',
  'DESIGN',
  'MODEL',
  'BUILD',
  'TEST',
  'IMPROVE',
];

export default function ITIPolytechnicPage() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main className={styles.page}>
      {/* ================= NAVBAR ================= */}

      <header className={styles.nav}>
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav
          className={`${styles.navLinks} ${
            open ? styles.mobileOpen : ''
          }`}
        >
          <Link href="/programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link href="/iti-polytechnic" onClick={closeMenu}>
            ITI / Polytechnic
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>

          <Link href="/faq" onClick={closeMenu}>
            FAQ
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <Link href="/contact" className={styles.navCta}>
          Discuss Your Institution
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className={styles.menu}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span />
            ITI • POLYTECHNIC • TECHNICAL EDUCATION
          </div>

          <h1>
            Technical skills.
            <br />
            <em>Built for the real world.</em>
          </h1>

          <p className={styles.heroText}>
            Practical technology training for ITI and Polytechnic
            students covering 3D design, CAD, 3D printing,
            electronics, robotics, prototyping and STEM technologies.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primary}>
              Discuss Your Institution
              <ArrowRight size={18} />
            </Link>

            <Link href="/programs" className={styles.secondary}>
              Explore Training
            </Link>
          </div>

          <div className={styles.heroTags}>
            <span>3D Design & Printing</span>
            <span>CAD</span>
            <span>Design & Prototyping</span>
            <span>STEM Technology</span>
          </div>
        </div>

        {/* HERO VISUAL */}

        <div className={styles.heroVisual}>
          <div className={styles.visualGrid} />

          <div className={styles.techCard}>
            <div className={styles.techCardTop}>
              <span className={styles.liveDot} />
              SHIKSHAMDEHI / TECHNICAL LAB
            </div>

            <div className={styles.techDiagram}>
              <div className={styles.diagramCircle}>
                <Cuboid size={48} strokeWidth={1.2} />
              </div>

              <div className={styles.diagramLine} />

              <div className={styles.diagramNodes}>
                <span>CAD</span>
                <span>PRINT</span>
                <span>BUILD</span>
              </div>
            </div>

            <div className={styles.techBottom}>
              <div>
                <small>FOCUS</small>
                <b>SKILL + PROJECT</b>
              </div>

              <div>
                <small>MODE</small>
                <b className={styles.green}>HANDS-ON</b>
              </div>
            </div>
          </div>

          <div className={`${styles.floating} ${styles.floatingOne}`}>
            <Cuboid size={18} />
            <span>3D CAD</span>
          </div>

          <div className={`${styles.floating} ${styles.floatingTwo}`}>
            <Bot size={18} />
            <span>Robotics</span>
          </div>

          <div className={`${styles.floating} ${styles.floatingThree}`}>
            <Printer size={18} />
            <span>3D Print</span>
          </div>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}

      <section className={styles.statement}>
        <span>LEARN</span>
        <i>→</i>
        <span>DESIGN</span>
        <i>→</i>
        <span>BUILD</span>
        <i>→</i>
        <span>TEST</span>
        <i>→</i>
        <span>IMPROVE</span>
      </section>

      {/* ================= WHY TECHNICAL INSTITUTIONS ================= */}

      <section className={styles.section}>
        <div className={styles.twoColumn}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              WHY TECHNICAL INSTITUTIONS
            </div>

            <h2>
              Give students skills
              <br />
              they can <em>actually use.</em>
            </h2>
          </div>

          <div className={styles.sectionText}>
            <p>
              Technical education becomes more valuable when
              students get the opportunity to design, fabricate,
              test and improve real products.
            </p>

            <p>
              ShikshamDehi complements classroom learning with
              practical, project-driven technology training.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRAINING AREAS ================= */}

      <section className={styles.section} id="training">
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              TRAINING AREAS
            </div>

            <h2>
              Learn technology.
              <br />
              <em>Build with it.</em>
            </h2>
          </div>

          <p>
            Training can be customized according to the department,
            student level, available lab infrastructure and
            institutional objectives.
          </p>
        </div>

        <div className={styles.trainingGrid}>
          {trainingAreas.map(
            ({ icon: Icon, title, text }) => (
              <article
                className={styles.trainingCard}
                key={title}
              >
                <div className={styles.cardIcon}>
                  <Icon size={26} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <Link href="/contact">
                  Discuss This Area
                  <ArrowRight size={15} />
                </Link>
              </article>
            )
          )}
        </div>
      </section>

      {/* ================= PRACTICAL LEARNING ================= */}

      <section className={styles.darkBand}>
        <div className={styles.section}>
          <div className={styles.twoColumn}>
            <div>
              <div className={styles.eyebrow}>
                <span />
                PRACTICAL LEARNING
              </div>

              <h2>
                From classroom
                <br />
                <em>to working prototype.</em>
              </h2>
            </div>

            <div className={styles.sectionText}>
              <p>
                Students learn by creating. Every training program
                can connect theory with practical activities,
                experiments and real project development.
              </p>

              <p>
                The objective is simple: students should leave with
                skills they can demonstrate, not just concepts they
                can describe.
              </p>
            </div>
          </div>

          <div className={styles.workflow}>
            {workflow.map((item, index) => (
              <div className={styles.workflowItem} key={item}>
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

      {/* ================= BENEFITS ================= */}

      <section className={styles.section}>
        <div className={styles.twoColumn}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              WHAT STUDENTS CAN LEARN
            </div>

            <h2>
              Skills that
              <br />
              <em>create opportunities.</em>
            </h2>
          </div>

          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => (
              <div
                className={styles.benefit}
                key={benefit}
              >
                <span>✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTITUTION PROGRAM ================= */}

      <section className={styles.institutionBand}>
        <div className={styles.section}>
          <div className={styles.institutionGrid}>
            <div>
              <div className={styles.eyebrow}>
                <span />
                INSTITUTIONAL PROGRAMS
              </div>

              <h2>
                Training designed
                <br />
                <em>for your institution.</em>
              </h2>

              <p className={styles.institutionText}>
                We can design short-term workshops, semester-based
                programs, bootcamps, lab activation programs and
                project mentoring according to your requirements.
              </p>

              <div className={styles.institutionActions}>
                <Link href="/contact" className={styles.primary}>
                  Request a Program
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/programs"
                  className={styles.secondary}
                >
                  View Programs
                </Link>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programLabel}>
                POSSIBLE FORMAT
              </div>

              <h3>Flexible Learning Models</h3>

              <div className={styles.programList}>
                <div>
                  <strong>01</strong>
                  <span>1–2 Day Workshop</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Technology Bootcamp</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Semester Program</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Project Mentoring</span>
                </div>

                <div>
                  <strong>05</strong>
                  <span>Faculty Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SHIKSHAMDEHI ================= */}

      <section className={styles.section}>
        <div className={styles.twoColumn}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              WHY SHIKSHAMDEHI
            </div>

            <h2>
              Experience
              <br />
              meets <em>education.</em>
            </h2>
          </div>

          <div className={styles.sectionText}>
            <p>
              ShikshamDehi brings practical experience in 3D design,
              3D printing, digital fabrication and emerging
              technologies into technical education.
            </p>

            <p>
              Our approach combines{' '}
              <strong>
                design + electronics + coding + fabrication +
                robotics
              </strong>{' '}
              into practical learning experiences.
            </p>

            <div className={styles.quote}>
              “Don&apos;t just learn technology.
              <br />
              <strong>Learn to build with it.</strong>”
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <div className={styles.eyebrow}>
          <span />
          PARTNER WITH SHIKSHAMDEHI
        </div>

        <h2>
          Ready to build
          <br />
          <em>better technical skills?</em>
        </h2>

        <p>
          Tell us about your ITI, Polytechnic, department,
          students and training requirements.
        </p>

        <div className={styles.ctaActions}>
          <Link href="/contact" className={styles.primary}>
            Contact ShikshamDehi
            <ArrowRight size={18} />
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            WhatsApp Us
          </a>
        </div>

        <div className={styles.ctaTags}>
          <span>ITI</span>
          <span>Polytechnic</span>
          <span>Engineering</span>
          <span>Technical Institutes</span>
          <span>Skill Development</span>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className={styles.footer}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

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
