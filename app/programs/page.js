import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Box,
  Check,
  CircuitBoard,
  Cuboid,
  GraduationCap,
  Lightbulb,
  Printer,
  School,
  Settings,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';

import styles from './programs.module.css';

const categories = [
  {
    icon: School,
    tag: 'SCHOOLS • CLASSES 6–8',
    title: 'Young Maker Program',
    text: 'A foundation program where students learn electronics, Arduino, sensors, 3D design, 3D printing and simple robotics through hands-on projects.',
    points: [
      'Basic Electronics',
      'Arduino Fundamentals',
      'Sensors & Automation',
      '3D Design & Printing',
      'Simple Robotics',
      'Innovation Projects',
    ],
    href: '/programs#schools',
  },
  {
    icon: GraduationCap,
    tag: 'SCHOOLS • CLASSES 9–12',
    title: 'Advanced STEM & Innovation',
    text: 'Build deeper technical skills through electronics, robotics, IoT, 3D design, prototyping and real-world problem solving.',
    points: [
      'Advanced Arduino',
      'Robotics & Automation',
      'IoT Projects',
      '3D CAD & Prototyping',
      'Engineering Projects',
      'Innovation Challenges',
    ],
    href: '/programs#schools',
  },
  {
    icon: Cuboid,
    tag: 'ITI • POLYTECHNIC',
    title: '3D Design & Printing',
    text: 'Industry-oriented training in CAD, 3D modelling, slicing, printing, prototyping and digital fabrication.',
    points: [
      '3D CAD Modelling',
      'Design Fundamentals',
      '3D Printer Operation',
      'Slicing & Print Settings',
      'Troubleshooting',
      'Prototype Development',
    ],
    href: '/iti-polytechnic',
  },
  {
    icon: Wrench,
    tag: 'ITI • POLYTECHNIC',
    title: 'Project & Skill Training',
    text: 'Practical workshops and project support for students who want to turn technical knowledge into working prototypes.',
    points: [
      'Practical Workshops',
      'Final Year Projects',
      'Product Prototyping',
      'Electronics Integration',
      'Design Documentation',
      'Project Mentoring',
    ],
    href: '/iti-polytechnic',
  },
  {
    icon: Settings,
    tag: 'INSTITUTES • TRAINERS',
    title: 'Faculty & Trainer Training',
    text: 'Enable teachers and trainers to confidently conduct maker, 3D printing, electronics and robotics activities.',
    points: [
      '3D Printing Basics',
      'CAD Workflow',
      'Arduino & Electronics',
      'Robotics Activities',
      'Lab Practices',
      'Project-Based Teaching',
    ],
    href: '/#contact',
  },
  {
    icon: Printer,
    tag: 'SCHOOLS • COLLEGES',
    title: '3D Printing Lab Support',
    text: 'Support for institutions that want to start, improve or actively operate a 3D printing and maker lab.',
    points: [
      'Lab Planning',
      'Printer Orientation',
      'Software Workflow',
      'Student Training',
      'Trainer Support',
      'Project Activities',
    ],
    href: '/#contact',
  },
];

const journey = [
  ['01', 'Explore', 'Understand the concept and discover how technology works.'],
  ['02', 'Design', 'Convert an idea into a digital design or project plan.'],
  ['03', 'Build', 'Use real components, tools and machines to create.'],
  ['04', 'Test', 'Check the prototype and identify what needs improvement.'],
  ['05', 'Improve', 'Iterate, troubleshoot and make the solution better.'],
  ['06', 'Innovate', 'Present the final project and think beyond the first idea.'],
];

const technologies = [
  { icon: Cuboid, title: '3D Design', text: 'CAD, modelling and digital product design.' },
  { icon: Printer, title: '3D Printing', text: 'Slicing, printing, calibration and prototyping.' },
  { icon: CircuitBoard, title: 'Electronics', text: 'Components, circuits, sensors and controls.' },
  { icon: Zap, title: 'Arduino', text: 'Programming inputs, outputs and interactive systems.' },
  { icon: Bot, title: 'Robotics', text: 'Motors, sensors, mechanisms and automation.' },
  { icon: Sparkles, title: 'AI & IoT', text: 'Connected devices and future-ready thinking.' },
];

export default function ProgramsPage() {
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
          STEM • MAKER • SKILL DEVELOPMENT
        </div>

        <h1>
          Programs that turn
          <br />
          <em>learning into making.</em>
        </h1>

        <p>
          Practical technology education for schools, students,
          ITI and Polytechnic colleges, educators and institutions.
          Learn 3D Design, 3D Printing, Arduino, Electronics,
          Robotics, IoT and innovation through real projects.
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.primary} href="#programs">
            Explore Programs
            <ArrowRight size={17} />
          </Link>

          <Link className={styles.secondary} href="/#contact">
            Talk to ShikshamDehi
          </Link>
        </div>

        <div className={styles.heroStats}>
          <div>
            <strong>3D</strong>
            <span>
              Design & Printing
              <br />
              Training
            </span>
          </div>

          <i />

          <div>
            <strong>STEM</strong>
            <span>
              Hands-on Project
              <br />
              Learning
            </span>
          </div>

          <i />

          <div>
            <strong>16+</strong>
            <span>
              Years of 3D Design
              <br />
              Experience
            </span>
          </div>
        </div>
      </section>


      {/* PROGRAMS */}
      <section className={styles.section} id="programs">

        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              OUR PROGRAMS
            </div>

            <h2>
              One platform.
              <br />
              <em>Multiple learning paths.</em>
            </h2>
          </div>

          <p>
            Choose a program according to the learner, institution
            and desired outcome. Every program can be customised
            according to age, duration, equipment and project goals.
          </p>
        </div>

        <div className={styles.programGrid}>
          {categories.map(
            ({ icon: Icon, tag, title, text, points, href }) => (
              <article className={styles.programCard} key={title}>

                <div className={styles.programTop}>
                  <div className={styles.programIcon}>
                    <Icon size={23} />
                  </div>

                  <span>{tag}</span>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <div className={styles.points}>
                  {points.map((point) => (
                    <div key={point}>
                      <Check size={14} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <Link href={href} className={styles.programLink}>
                  Explore Program
                  <ArrowRight size={15} />
                </Link>

              </article>
            )
          )}
        </div>

      </section>


      {/* TECHNOLOGY BAND */}
      <section className={styles.techBand}>

        <div className={styles.section}>

          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>
                WHAT STUDENTS WORK WITH
              </div>

              <h2>
                From first circuit
                <br />
                to <em>working prototype.</em>
              </h2>
            </div>

            <p>
              Students progressively move from basic concepts
              to designing, building, testing and presenting
              their own technology projects.
            </p>
          </div>

          <div className={styles.techGrid}>
            {technologies.map(
              ({ icon: Icon, title, text }) => (
                <div className={styles.techCard} key={title}>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              )
            )}
          </div>

        </div>

      </section>


      {/* JOURNEY */}
      <section className={styles.section}>

        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              OUR LEARNING METHOD
            </div>

            <h2>
              Learn.
              <br />
              <em>Make. Improve.</em>
            </h2>
          </div>

          <p>
            We focus on project-based learning rather than
            technology demonstrations alone. Students learn
            by actually making and improving things.
          </p>
        </div>

        <div className={styles.journeyGrid}>
          {journey.map(([number, title, text]) => (
            <article className={styles.journeyCard} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

      </section>


      {/* SCHOOL */}
      <section className={styles.audienceBand} id="schools">

        <div className={styles.audienceInner}>

          <div>
            <div className={styles.eyebrow}>
              FOR SCHOOLS & ATL LABS
            </div>

            <h2>
              Build a
              <br />
              <em>maker culture.</em>
            </h2>

            <p>
              Structured STEM programs for schools that want
              students to actively use their ATL or maker lab
              instead of simply having the equipment.
            </p>
          </div>

          <div className={styles.audiencePoints}>
            <div>
              <Check size={17} />
              <span>Curriculum & lesson plans</span>
            </div>

            <div>
              <Check size={17} />
              <span>3D printing programs</span>
            </div>

            <div>
              <Check size={17} />
              <span>Arduino & robotics</span>
            </div>

            <div>
              <Check size={17} />
              <span>Teacher enablement</span>
            </div>

            <div>
              <Check size={17} />
              <span>Project & exhibition support</span>
            </div>

            <div>
              <Check size={17} />
              <span>Annual STEM programs</span>
            </div>
          </div>

        </div>

      </section>


      {/* ITI / POLYTECHNIC */}
      <section className={styles.section}>

        <div className={styles.twoCol}>

          <div>
            <div className={styles.eyebrow}>
              FOR ITI & POLYTECHNIC
            </div>

            <h2>
              Skills for
              <br />
              <em>real applications.</em>
            </h2>

            <p className={styles.lead}>
              Give technical students practical exposure to
              3D CAD, digital fabrication, 3D printing,
              prototyping and project development.
            </p>

            <Link
              href="/iti-polytechnic"
              className={styles.primary}
            >
              View ITI & Polytechnic Program
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className={styles.collegeCard}>

            <div className={styles.collegeIcon}>
              <GraduationCap size={24} />
            </div>

            <div className={styles.collegeLabel}>
              INSTITUTIONAL TRAINING
            </div>

            <h3>
              3D Design + 3D Printing
            </h3>

            <p>
              From digital modelling to physical prototypes,
              students learn the complete workflow used in
              modern digital fabrication.
            </p>

            <div className={styles.collegeTags}>
              <span>CAD</span>
              <span>3D PRINTING</span>
              <span>PROTOTYPING</span>
              <span>PROJECTS</span>
            </div>

          </div>

        </div>

      </section>


      {/* INSTITUTIONS */}
      <section className={styles.institutionBand}>

        <div className={styles.institutionInner}>

          <div className={styles.institutionText}>
            <div className={styles.eyebrow}>
              FOR INSTITUTIONS
            </div>

            <h2>
              Training that fits
              <br />
              your <em>requirements.</em>
            </h2>

            <p>
              Schools, colleges, ITIs, Polytechnics, training
              centres and educational organisations can choose
              short workshops, structured programs, lab support
              or customised training.
            </p>
          </div>

          <div className={styles.institutionCards}>

            <div>
              <Lightbulb size={20} />
              <b>Workshops</b>
              <span>Short-term intensive practical sessions.</span>
            </div>

            <div>
              <Box size={20} />
              <b>Project Support</b>
              <span>Prototype and project mentoring.</span>
            </div>

            <div>
              <Printer size={20} />
              <b>Lab Training</b>
              <span>3D printing and maker lab enablement.</span>
            </div>

            <div>
              <GraduationCap size={20} />
              <b>Faculty Training</b>
              <span>Trainer and teacher skill development.</span>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className={styles.challenge}>

        <div className={styles.challengeInner}>

          <div className={styles.eyebrow}>
            START A PROGRAM
          </div>

          <h2>
            Have a school,
            <br />
            college or lab?
            <br />
            <em>Let's build together.</em>
          </h2>

          <p>
            Tell us your institution, learner group,
            available equipment and training requirement.
            We can help design the right program.
          </p>

          <div className={styles.ctaActions}>

            <Link
              className={styles.primary}
              href="/#contact"
            >
              Discuss Your Requirement
              <ArrowRight size={17} />
            </Link>

            <Link
              className={styles.secondary}
              href="/iti-polytechnic"
            >
              ITI & Polytechnic
            </Link>

          </div>

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
