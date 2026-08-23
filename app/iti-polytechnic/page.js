import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  CircuitBoard,
  Cpu,
  GraduationCap,
  Printer,
  Settings,
  Sparkles,
  Wrench,
  Cuboid,
} from 'lucide-react';

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
    icon: CircuitBoard,
    title: 'Electronics',
    text: 'Hands-on training with electronic components, circuits, sensors, breadboards and practical applications.',
  },
  {
    icon: Cpu,
    title: 'Arduino & Embedded Systems',
    text: 'Learn microcontroller fundamentals, programming, sensors, inputs, outputs and practical automation.',
  },
  {
    icon: Bot,
    title: 'Robotics & Automation',
    text: 'Build practical robotic systems using motors, controllers, sensors and mechanical components.',
  },
  {
    icon: Settings,
    title: 'Product Prototyping',
    text: 'Convert an idea into a functional prototype through design, fabrication, testing and improvement.',
  },
];

const programs = [
  {
    number: '01',
    title: 'Short-Term Workshops',
    text: 'Focused hands-on workshops for introducing students to 3D design, printing, electronics and emerging technologies.',
  },
  {
    number: '02',
    title: 'Skill Development Programs',
    text: 'Structured programs designed to build practical technical skills over multiple sessions.',
  },
  {
    number: '03',
    title: 'Project-Based Training',
    text: 'Students work on practical projects from concept and design to prototype and final demonstration.',
  },
  {
    number: '04',
    title: 'Faculty Training',
    text: 'Hands-on enablement for teachers, trainers and faculty members to confidently conduct technology-based learning.',
  },
];

const workflow = [
  'Understand the problem',
  'Create the design',
  'Build the prototype',
  'Test the solution',
  'Improve the design',
  'Present the project',
];

export default function ITIPolytechnicPage() {
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
          FOR ITIs & POLYTECHNIC INSTITUTIONS
        </div>

        <h1>
          Turn technical
          <br />
          education into
          <br />
          <em>real-world skills.</em>
        </h1>

        <p>
          Practical training in 3D Design, CAD, 3D Printing, Electronics,
          Arduino, Robotics, Automation and Product Prototyping for ITI and
          Polytechnic students.
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.primary} href="/contact">
            Discuss Your Institution
            <ArrowRight size={17} />
          </Link>

          <a className={styles.secondary} href="#training">
            Explore Training
          </a>
        </div>

        <div className={styles.heroMeta}>
          <div>
            <strong>3D</strong>
            <span>Design & Printing</span>
          </div>

          <i />

          <div>
            <strong>CAD</strong>
            <span>Design & Prototyping</span>
          </div>

          <i />

          <div>
            <strong>STEM</strong>
            <span>Technology Training</span>
          </div>
        </div>

      </section>


      {/* INTRO */}
      <section className={styles.introBand}>

        <div className={styles.introInner}>

          <div className={styles.eyebrow}>
            <span />
            WHY TECHNICAL INSTITUTIONS
          </div>

          <h2>
            Give students skills
            <br />
            they can <em>actually use.</em>
          </h2>

          <p>
            Technical education becomes more valuable when students get the
            opportunity to design, fabricate, test and improve real products.
            ShikshamDehi complements classroom learning with practical,
            project-driven technology training.
          </p>

        </div>

      </section>


      {/* TRAINING AREAS */}
      <section
        className={styles.section}
        id="training"
      >

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
            student level, available lab infrastructure and institutional
            objectives.
          </p>

        </div>


        <div className={styles.trainingGrid}>

          {trainingAreas.map(
            ({ icon: Icon, title, text }) => (

              <article
                className={styles.trainingCard}
                key={title}
              >

                <div className={styles.icon}>
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <span className={styles.cardLine} />

              </article>

            )
          )}

        </div>

      </section>


      {/* PROGRAM TYPES */}
      <section className={styles.programBand}>

        <div className={styles.section}>

          <div className={styles.sectionHead}>

            <div>
              <div className={styles.eyebrow}>
                <span />
                PROGRAM FORMATS
              </div>

              <h2>
                From workshops
                <br />
                to <em>complete programs.</em>
              </h2>
            </div>

            <p>
              Choose a format based on your institution's requirements,
              academic calendar and student skill level.
            </p>

          </div>


          <div className={styles.programGrid}>

            {programs.map((program) => (

              <article
                className={styles.programCard}
                key={program.number}
              >

                <span className={styles.programNo}>
                  {program.number}
                </span>

                <h3>{program.title}</h3>

                <p>{program.text}</p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* STUDENT OUTCOMES */}
      <section className={styles.section}>

        <div className={styles.outcomeGrid}>

          <div>

            <div className={styles.eyebrow}>
              <span />
              STUDENT OUTCOMES
            </div>

            <h2>
              More than
              <br />
              <em>just certificates.</em>
            </h2>

            <p className={styles.lead}>
              The focus is on practical capability—students should be able
              to understand a problem, create a solution and demonstrate
              what they have built.
            </p>

          </div>


          <div className={styles.outcomes}>

            {[
              'Create 3D models using CAD tools',
              'Prepare designs for 3D printing',
              'Operate and understand basic 3D printers',
              'Build electronic circuits',
              'Program Arduino-based systems',
              'Work with sensors and automation',
              'Build basic robotic prototypes',
              'Document and present technical projects',
            ].map((item) => (

              <div
                className={styles.outcome}
                key={item}
              >

                <Check size={17} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECT WORKFLOW */}
      <section className={styles.workflowBand}>

        <div className={styles.section}>

          <div className={styles.workflowHead}>

            <div className={styles.eyebrow}>
              <span />
              PROJECT-BASED LEARNING
            </div>

            <h2>
              Idea to
              <br />
              <em>working prototype.</em>
            </h2>

          </div>


          <div className={styles.workflow}>

            {workflow.map((item, index) => (

              <div
                className={styles.workflowItem}
                key={item}
              >

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <b>{item}</b>

                {index < workflow.length - 1 && (
                  <ArrowRight size={16} />
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* INSTITUTION SUPPORT */}
      <section className={styles.section}>

        <div className={styles.supportGrid}>

          <div>

            <div className={styles.eyebrow}>
              <span />
              INSTITUTION SUPPORT
            </div>

            <h2>
              Build a stronger
              <br />
              <em>technical learning ecosystem.</em>
            </h2>

          </div>


          <div className={styles.supportList}>

            {[
              'Curriculum-aligned practical sessions',
              'Hands-on student workshops',
              'Lab-based training',
              'Faculty & trainer enablement',
              'Project and prototype support',
              'Innovation challenges',
              'Exhibition and demonstration support',
              'Customized institutional programs',
            ].map((item) => (

              <div
                className={styles.supportItem}
                key={item}
              >

                <Check size={16} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className={styles.cta}>

        <div className={styles.ctaInner}>

          <div className={styles.ctaIcon}>
            <GraduationCap size={28} />
          </div>

          <div className={styles.eyebrow}>
            <span />
            FOR ITIs & POLYTECHNICS
          </div>

          <h2>
            Ready to build
            <br />
            <em>industry-ready skills?</em>
          </h2>

          <p>
            Tell us about your institution, students and training
            requirements. We can design a practical program around them.
          </p>

          <Link
            className={styles.primary}
            href="/contact"
          >
            Discuss Your Training Program
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
          © 2026 ShikshamDehi
        </small>

      </footer>

    </main>
  );
}
