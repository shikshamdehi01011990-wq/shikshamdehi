import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Box,
  Building2,
  Check,
  CircuitBoard,
  GraduationCap,
  Lightbulb,
  Printer,
  School,
  Sparkles,
  Wrench,
  Factory,
  Users,
} from 'lucide-react';

import styles from './programs.module.css';

const programs = [
  {
    n: '01',
    icon: School,
    title: 'School STEM Programs',
    text: 'Hands-on technology programs designed for school students, from foundational making to advanced project development.',
    items: [
      'Classes 6–8 Maker Foundation',
      'Classes 9–10 STEM & Robotics',
      'Classes 11–12 Advanced Projects',
      '3D Design & 3D Printing',
      'Arduino & Electronics',
      'Robotics & Innovation',
    ],
  },
  {
    n: '02',
    icon: Lightbulb,
    title: 'ATL & Maker Lab Programs',
    text: 'Structured programs that help schools turn their labs into active learning and innovation spaces.',
    items: [
      'ATL Lab Sessions',
      'Maker Lab Activities',
      'Project-Based Learning',
      'Teacher Training',
      'Innovation Challenges',
      'Exhibition & Project Support',
    ],
  },
  {
    n: '03',
    icon: Factory,
    title: 'ITI & Polytechnic Training',
    text: 'Practical technical training focused on 3D design, additive manufacturing and industry-relevant prototyping skills.',
    items: [
      '3D CAD Design',
      '3D Printing',
      'Product Design',
      'Rapid Prototyping',
      'Design for Manufacturing',
      'Hands-on Technical Projects',
    ],
  },
  {
    n: '04',
    icon: GraduationCap,
    title: 'College & University Programs',
    text: 'Advanced training for students and faculty who want to develop practical digital manufacturing and prototyping skills.',
    items: [
      'Advanced 3D Design',
      'Additive Manufacturing',
      '3D Printing Applications',
      'Robotics Projects',
      'Product Prototyping',
      'Faculty Training',
    ],
  },
];

const technologyPrograms = [
  {
    icon: Box,
    title: '3D Design & CAD',
    text: 'Learn how to transform ideas into accurate digital 3D models ready for prototyping and manufacturing.',
  },
  {
    icon: Printer,
    title: '3D Printing',
    text: 'Understand the complete workflow from digital model and slicing to printing, testing and finishing.',
  },
  {
    icon: CircuitBoard,
    title: 'Arduino & Electronics',
    text: 'Build practical electronic systems using Arduino, sensors, inputs, outputs and basic programming.',
  },
  {
    icon: Bot,
    title: 'Robotics & Automation',
    text: 'Design and build robots using motors, sensors, controllers and mechanical components.',
  },
];

const formats = [
  'Regular Weekly Programs',
  'One-Day Workshops',
  'Multi-Day Bootcamps',
  'Summer & Holiday Programs',
  'Teacher & Faculty Training',
  'Project-Based Training',
];

const reasons = [
  '16+ years of hands-on 3D Design & 3D Printing experience',
  'Project-based and practical learning approach',
  'Programs adaptable to different age groups and institutions',
  'Focus on real-world skills instead of theory alone',
  'Support for school projects, exhibitions and innovation challenges',
  'Training designed for both beginners and advanced learners',
];

export default function ProgramsPage() {
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <header className={styles.nav}>
        <Link className={styles.brand} href="/">
          <span className={styles.mark}>SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <Link className={styles.back} href="/">
          <ArrowLeft size={16} />
          Home
        </Link>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.eyebrow}>
          <span />
          TECHNOLOGY EDUCATION • TRAINING • INNOVATION
        </div>

        <h1>
          Learn. Design.
          <br />
          <em>Build. Innovate.</em>
        </h1>

        <p>
          Practical technology education and training in 3D Design, 3D
          Printing, Arduino, Electronics, Robotics, IoT and emerging
          technologies — from school students to technical institutions.
        </p>

        <div className={styles.heroMeta}>
          <span>
            <strong>16+</strong> Years 3D Design Experience
          </span>

          <i />

          <span>
            <strong>100%</strong> Project-Based Learning
          </span>

          <i />

          <span>
            <strong>4+</strong> Institution Categories
          </span>
        </div>
      </section>

      {/* PROGRAM CATEGORIES */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>WHO WE TRAIN</div>

            <h2>
              Programs for
              <br />
              <em>every learner.</em>
            </h2>
          </div>

          <p>
            From young makers in schools to technical students in ITIs,
            polytechnics and colleges, our programs are designed around
            practical skills, real projects and measurable outcomes.
          </p>
        </div>

        <div className={styles.moduleGrid}>
          {programs.map(
            ({ n, icon: Icon, title, text, items }) => (
              <article className={styles.module} key={n}>
                <div className={styles.moduleTop}>
                  <span>{n}</span>
                  <Icon size={22} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <div
                  style={{
                    marginTop: '22px',
                    display: 'grid',
                    gap: '9px',
                  }}
                >
                  {items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--muted)',
                        fontSize: '12px',
                      }}
                    >
                      <Check
                        size={14}
                        style={{
                          color: 'var(--lime)',
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* TECHNOLOGY PROGRAMS */}
      <section className={styles.band}>
        <div className={styles.section}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>
                CORE TECHNOLOGY PROGRAMS
              </div>

              <h2>
                From digital
                <br />
                <em>idea to prototype.</em>
              </h2>
            </div>

            <p>
              Students learn technology by creating. Every subject connects
              concepts with tools, experiments, prototypes and real-world
              projects.
            </p>
          </div>

          <div className={styles.sessionGrid}>
            {technologyPrograms.map(
              ({ icon: Icon, title, text }) => (
                <article className={styles.session} key={title}>
                  <div className={styles.sessionNo}>
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{title}</h3>

                    <p>{text}</p>

                    <div className={styles.project}>
                      <Sparkles size={15} />
                      <span>Hands-on project learning</span>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* INSTITUTION SUPPORT */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.eyebrow}>
              INSTITUTIONAL TRAINING
            </div>

            <h2>
              More than
              <br />
              <em>just training.</em>
            </h2>

            <p className={styles.lead}>
              ShikshamDehi works with institutions to create structured,
              practical learning experiences — from individual workshops to
              complete annual technology programs.
            </p>
          </div>

          <div className={styles.outcomes}>
            {[
              [
                School,
                'School STEM & Maker Programs',
              ],
              [
                Lightbulb,
                'ATL & Innovation Lab Support',
              ],
              [
                Factory,
                'ITI & Polytechnic Skill Training',
              ],
              [
                GraduationCap,
                'College & Faculty Programs',
              ],
              [
                Wrench,
                'Project & Exhibition Support',
              ],
              [
                Users,
                'Teacher & Faculty Enablement',
              ],
            ].map(([Icon, text]) => (
              <div key={text}>
                <Icon size={17} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING FORMATS */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              TRAINING FORMATS
            </div>

            <h2>
              Choose the
              <br />
              <em>right format.</em>
            </h2>
          </div>

          <p>
            Programs can be customised according to your institution's
            schedule, student level, available lab facilities and learning
            objectives.
          </p>
        </div>

        <div className={styles.kitGrid}>
          {formats.map((format, index) => (
            <div className={styles.kitItem} key={format}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <Sparkles size={17} />

              <b>{format}</b>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SHIKSHAMDEHI */}
      <section className={styles.band}>
        <div className={styles.section}>
          <div className={styles.twoCol}>
            <div>
              <div className={styles.eyebrow}>
                WHY SHIKSHAMDEHI
              </div>

              <h2>
                Experience that
                <br />
                <em>builds makers.</em>
              </h2>

              <p className={styles.lead}>
                With more than 16 years of hands-on experience in 3D Design
                and 3D Printing, we bring practical maker and prototyping
                knowledge into education.
              </p>
            </div>

            <div className={styles.outcomes}>
              {reasons.map((reason) => (
                <div key={reason}>
                  <Check size={17} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.challenge}>
        <div className={styles.challengeInner}>
          <div className={styles.eyebrow}>
            LET'S BUILD TOGETHER
          </div>

          <h2>
            Bring practical
            <br />
            <em>technology learning</em>
            <br />
            to your institution.
          </h2>

          <p>
            Tell us about your school, ATL lab, ITI, polytechnic or college
            and we will help you design the right training program.
          </p>

          <Link
            className={styles.primary}
            href="/#contact"
          >
            Request a Training Program
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/">
          Shiksham<span>Dehi</span>
        </Link>

        <span>
          Future skills. Real projects.
        </span>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
