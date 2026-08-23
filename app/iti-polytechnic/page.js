import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Check,
  CircuitBoard,
  Cuboid,
  GraduationCap,
  Printer,
  Settings,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';

import styles from './iti-polytechnic.module.css';

const trainingAreas = [
  {
    icon: Cuboid,
    number: '01',
    title: '3D Design & CAD',
    text: 'Learn professional 3D modelling, product design, measurements, assemblies and design thinking.',
  },
  {
    icon: Printer,
    number: '02',
    title: '3D Printing',
    text: 'Understand FDM 3D printers, slicing, materials, print settings, machine operation and troubleshooting.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Prototype Development',
    text: 'Convert a digital design into a functional physical prototype through an iterative design process.',
  },
  {
    icon: CircuitBoard,
    number: '04',
    title: 'Arduino & Electronics',
    text: 'Hands-on learning with Arduino, circuits, sensors, inputs, outputs and embedded projects.',
  },
  {
    icon: Settings,
    number: '05',
    title: 'Robotics & Automation',
    text: 'Build practical robotic systems using motors, sensors, controllers and mechanical structures.',
  },
  {
    icon: Sparkles,
    number: '06',
    title: 'Innovation Projects',
    text: 'Problem identification, concept development, prototyping, testing and final project presentation.',
  },
];

const levels = [
  {
    level: 'LEVEL 01',
    title: 'Foundation',
    text: 'For students who are new to 3D design and digital fabrication.',
    items: [
      'Introduction to 3D design',
      'Basic CAD modelling',
      '3D printer fundamentals',
      'Slicing basics',
      'Simple printed projects',
    ],
  },
  {
    level: 'LEVEL 02',
    title: 'Intermediate',
    text: 'For students who want to move from basic designs to functional prototypes.',
    items: [
      'Advanced modelling techniques',
      'Design for 3D printing',
      'Print optimisation',
      'Assembly & functional parts',
      'Prototype development',
    ],
  },
  {
    level: 'LEVEL 03',
    title: 'Advanced',
    text: 'For project-based and industry-oriented technical learning.',
    items: [
      'Product-oriented CAD',
      'Complex assemblies',
      'Rapid prototyping',
      'Design optimisation',
      'Industry-style projects',
    ],
  },
];

const process = [
  ['01', 'Understand', 'Identify the problem and define the objective.'],
  ['02', 'Design', 'Create the concept and develop the 3D model.'],
  ['03', 'Prepare', 'Check the model, orientation and printing parameters.'],
  ['04', 'Print', 'Produce the physical prototype using a 3D printer.'],
  ['05', 'Test', 'Evaluate the prototype and identify improvements.'],
  ['06', 'Improve', 'Modify, reprint and create a better solution.'],
];

const benefits = [
  'Hands-on practical training',
  'Real 3D design and printing projects',
  'CAD to physical prototype workflow',
  'Machine operation and troubleshooting',
  'Industry-oriented project approach',
  'Suitable for ITI, Polytechnic & technical institutes',
  'Custom training modules for institutions',
  'Workshop, bootcamp and semester programs',
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
          ITI • POLYTECHNIC • TECHNICAL EDUCATION
        </div>

        <h1>
          From digital design
          <br />
          to <em>real prototypes.</em>
        </h1>

        <p>
          Practical training in 3D Design, CAD, 3D Printing, Prototyping,
          Arduino, Electronics and Robotics for ITI, Polytechnic and
          technical education students.
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.primary} href="/contact">
            Discuss Institute Training
            <ArrowRight size={17} />
          </Link>

          <a className={styles.secondary} href="#programs">
            Explore Training
          </a>
        </div>

        <div className={styles.heroStats}>
          <div>
            <strong>16+</strong>
            <span>Years of 3D Design & Printing Experience</span>
          </div>

          <i />

          <div>
            <strong>100%</strong>
            <span>Practical & Project-Based Learning</span>
          </div>

          <i />

          <div>
            <strong>CAD →</strong>
            <span>Design to Physical Prototype</span>
          </div>
        </div>
      </section>

      {/* TRAINING AREAS */}

      <section className={styles.section} id="programs">

        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              WHAT WE TRAIN
            </div>

            <h2>
              Technical skills
              <br />
              <em>that students can build with.</em>
            </h2>
          </div>

          <p>
            Our programs combine digital design, fabrication and electronics
            so students learn how technology moves from an idea to a working
            product.
          </p>
        </div>

        <div className={styles.trainingGrid}>
          {trainingAreas.map(
            ({ icon: Icon, number, title, text }) => (
              <article className={styles.trainingCard} key={number}>

                <div className={styles.cardTop}>
                  <span>{number}</span>
                  <Icon size={22} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <div className={styles.cardLine} />

              </article>
            )
          )}
        </div>

      </section>

      {/* FEATURE */}

      <section className={styles.featureBand}>

        <div className={styles.featureInner}>

          <div className={styles.featureVisual}>

            <div className={styles.visualLabel}>
              DIGITAL → PHYSICAL
            </div>

            <div className={styles.cube}>
              <div className={styles.cubeTop} />
              <div className={styles.cubeFront} />
              <div className={styles.cubeSide} />
            </div>

            <div className={styles.printLines}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

          </div>

          <div className={styles.featureCopy}>

            <div className={styles.eyebrow}>
              THE COMPLETE WORKFLOW
            </div>

            <h2>
              Don't just learn
              <br />
              CAD. <em>Make something.</em>
            </h2>

            <p>
              Students follow a complete workflow—from understanding a
              design problem to creating a CAD model, preparing it for
              printing, producing the prototype and improving the final
              product.
            </p>

            <div className={styles.workflow}>
              <span>DESIGN</span>
              <ArrowRight size={16} />
              <span>SLICE</span>
              <ArrowRight size={16} />
              <span>PRINT</span>
              <ArrowRight size={16} />
              <span>TEST</span>
              <ArrowRight size={16} />
              <span>IMPROVE</span>
            </div>

          </div>

        </div>

      </section>

      {/* LEVELS */}

      <section className={styles.section}>

        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              TRAINING LEVELS
            </div>

            <h2>
              Start simple.
              <br />
              <em>Build expertise.</em>
            </h2>
          </div>

          <p>
            Training can be structured according to student experience,
            available lab infrastructure, academic schedule and institute
            requirements.
          </p>
        </div>

        <div className={styles.levelGrid}>

          {levels.map((level) => (
            <article className={styles.levelCard} key={level.level}>

              <div className={styles.levelTag}>
                {level.level}
              </div>

              <h3>{level.title}</h3>

              <p>{level.text}</p>

              <div className={styles.levelItems}>
                {level.items.map((item) => (
                  <div key={item}>
                    <Check size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </article>
          ))}

        </div>

      </section>

      {/* PROCESS */}

      <section className={styles.processBand}>

        <div className={styles.section}>

          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>
                PROJECT METHODOLOGY
              </div>

              <h2>
                Learn by
                <br />
                <em>building.</em>
              </h2>
            </div>

            <p>
              Every project follows a structured maker workflow that
              encourages students to design, test, troubleshoot and improve.
            </p>
          </div>

          <div className={styles.processGrid}>

            {process.map(([number, title, text]) => (
              <article className={styles.processCard} key={number}>

                <span>{number}</span>

                <h3>{title}</h3>

                <p>{text}</p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className={styles.section}>

        <div className={styles.twoCol}>

          <div>
            <div className={styles.eyebrow}>
              WHY INSTITUTES CHOOSE US
            </div>

            <h2>
              Practical training
              <br />
              <em>with real outcomes.</em>
            </h2>

            <p className={styles.lead}>
              Designed for institutions that want students to graduate with
              practical digital fabrication, design and prototyping skills—not
              just theoretical knowledge.
            </p>

            <Link className={styles.primary} href="/contact">
              Plan Your Training
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className={styles.benefits}>

            {benefits.map((item) => (
              <div key={item}>
                <Check size={17} />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* INSTITUTE PROGRAMS */}

      <section className={styles.instituteBand}>

        <div className={styles.instituteInner}>

          <div>
            <div className={styles.eyebrow}>
              FLEXIBLE DELIVERY
            </div>

            <h2>
              Training that fits
              <br />
              <em>your institute.</em>
            </h2>

            <p>
              Choose a format based on your academic calendar, student
              strength, lab facilities and learning objectives.
            </p>
          </div>

          <div className={styles.deliveryGrid}>

            <div>
              <GraduationCap size={22} />
              <b>Semester Programs</b>
              <span>Structured long-term technical training.</span>
            </div>

            <div>
              <Zap size={22} />
              <b>Workshops</b>
              <span>Focused hands-on sessions for specific skills.</span>
            </div>

            <div>
              <Box size={22} />
              <b>Bootcamps</b>
              <span>Intensive project-based learning experiences.</span>
            </div>

            <div>
              <Wrench size={22} />
              <b>Custom Programs</b>
              <span>Training designed around your institute's needs.</span>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className={styles.challenge}>

        <div className={styles.challengeInner}>

          <div className={styles.eyebrow}>
            FOR ITI • POLYTECHNIC • COLLEGES
          </div>

          <h2>
            Give students the skills
            <br />
            to <em>build the future.</em>
          </h2>

          <p>
            Let's design a practical training program for your institution.
          </p>

          <Link className={styles.primary} href="/contact">
            Request Institute Training
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
