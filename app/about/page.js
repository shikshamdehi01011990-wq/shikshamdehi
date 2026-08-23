import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Box,
  Check,
  Cpu,
  GraduationCap,
  Lightbulb,
  Printer,
  School,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';

import styles from './about.module.css';

const capabilities = [
  {
    icon: Box,
    title: '3D Design',
    text: 'Students and learners develop digital models and understand how ideas become manufacturable objects.',
  },
  {
    icon: Printer,
    title: '3D Printing',
    text: 'Learn slicing, printer basics, material handling, troubleshooting and rapid prototyping.',
  },
  {
    icon: Cpu,
    title: 'Arduino & Electronics',
    text: 'Hands-on learning with circuits, components, sensors, inputs, outputs and microcontrollers.',
  },
  {
    icon: Bot,
    title: 'Robotics',
    text: 'Build practical robots using motors, sensors, controllers and mechanical components.',
  },
  {
    icon: Zap,
    title: 'IoT & Automation',
    text: 'Understand connected devices, automation and how data can be used to control real systems.',
  },
  {
    icon: Sparkles,
    title: 'AI & Innovation',
    text: 'Introduce future-ready thinking through problem solving, experimentation and technology projects.',
  },
];

const audiences = [
  'Schools & ATL Labs',
  'Students – Classes 6–12',
  'ITI Institutions',
  'Polytechnic Colleges',
  'Teachers & Educators',
  'Innovation & Maker Programs',
];

const approach = [
  'Learn the concept',
  'Design the solution',
  'Build the prototype',
  'Test and troubleshoot',
  'Improve the design',
  'Present the final project',
];

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* NAV */}
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
          ABOUT SHIKSHAMDEHI
        </div>

        <h1>
          We help people
          <br />
          <em>build with technology.</em>
        </h1>

        <p>
          ShikshamDehi brings practical technology education into schools,
          ATL Labs, ITIs and Polytechnic institutions through 3D design,
          3D printing, electronics, Arduino, robotics, IoT and innovation
          projects.
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.primary} href="/programs">
            Explore Programs
            <ArrowRight size={17} />
          </Link>

          <Link className={styles.secondary} href="/contact">
            Talk to Us
          </Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.experienceBand}>
        <div className={styles.experienceGrid}>

          <div className={styles.experienceNumber}>
            <strong>16+</strong>
            <span>Years</span>
          </div>

          <div>
            <div className={styles.eyebrow}>
              <span />
              EXPERIENCE
            </div>

            <h2>
              From design experience
              <br />
              <em>to practical education.</em>
            </h2>
          </div>

          <p>
            Our approach connects technology concepts with actual making.
            Learners don't just watch a demonstration—they design, build,
            test, improve and explain their work.
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={styles.section}>
        <div className={styles.twoCol}>

          <div>
            <div className={styles.eyebrow}>
              <span />
              WHO WE ARE
            </div>

            <h2>
              Technology becomes
              <br />
              <em>powerful when you build.</em>
            </h2>
          </div>

          <div className={styles.copy}>
            <p>
              ShikshamDehi is focused on practical, project-based technology
              learning. We create programs that help learners understand
              technology by actually using it.
            </p>

            <p>
              Our learning ecosystem combines 3D design and printing with
              electronics, Arduino, robotics, IoT and emerging technologies.
            </p>

            <p>
              The objective is simple: move learners from being technology
              consumers to becoming confident creators and problem solvers.
            </p>
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={`${styles.section} ${styles.capabilitySection}`}>

        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              WHAT WE DO
            </div>

            <h2>
              One ecosystem.
              <br />
              <em>Multiple technologies.</em>
            </h2>
          </div>

          <p>
            Our programs can be structured according to the learner's age,
            institution and learning objectives—from foundational making to
            advanced technical projects.
          </p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className={styles.capability} key={title}>
              <div className={styles.icon}>
                <Icon size={23} />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>

      </section>

      {/* AUDIENCE */}
      <section className={styles.audienceBand}>
        <div className={styles.section}>

          <div className={styles.twoCol}>

            <div>
              <div className={styles.eyebrow}>
                <span />
                WHO WE WORK WITH
              </div>

              <h2>
                Built for
                <br />
                <em>different learning environments.</em>
              </h2>

              <p className={styles.lead}>
                From school students to technical education learners,
                programs can be adapted to the needs of the institution.
              </p>
            </div>

            <div className={styles.audienceGrid}>
              {audiences.map((item) => (
                <div className={styles.audienceItem} key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className={styles.section}>

        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              OUR APPROACH
            </div>

            <h2>
              Learning should
              <br />
              <em>lead to making.</em>
            </h2>
          </div>

          <p>
            Every project follows a simple maker cycle. Students learn to
            think through a problem instead of simply following instructions.
          </p>
        </div>

        <div className={styles.approachGrid}>
          {approach.map((item, index) => (
            <article className={styles.approach} key={item}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{item}</h3>

              {index !== approach.length - 1 && (
                <ArrowRight className={styles.approachArrow} size={18} />
              )}
            </article>
          ))}
        </div>

      </section>

      {/* MISSION */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>

          <div className={styles.missionIcon}>
            <Lightbulb size={28} />
          </div>

          <div className={styles.eyebrow}>
            <span />
            OUR MISSION
          </div>

          <h2>
            Make technology
            <br />
            <em>accessible, practical and exciting.</em>
          </h2>

          <p>
            We want learners to develop the confidence to ask questions,
            experiment with ideas and build solutions to real-world problems.
          </p>

          <Link className={styles.primary} href="/contact">
            Start a Conversation
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/">
          Shiksham<span>Dehi</span>
        </Link>

        <span>Future skills. Real projects.</span>

        <small>© 2026 ShikshamDehi</small>
      </footer>

    </main>
  );
}
