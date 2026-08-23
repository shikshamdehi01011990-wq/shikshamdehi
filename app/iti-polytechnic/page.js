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
  School,
  Settings,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';

import styles from './iti-polytechnic.module.css';

const trainingAreas = [
  {
    n: '01',
    icon: Cuboid,
    title: '3D Design',
    text: 'Learn professional 3D modelling, CAD thinking, dimensions, assemblies and design for manufacturing.',
  },
  {
    n: '02',
    icon: Printer,
    title: '3D Printing',
    text: 'Understand slicing, print settings, materials, machine operation, troubleshooting and post-processing.',
  },
  {
    n: '03',
    icon: CircuitBoard,
    title: 'Electronics',
    text: 'Build a strong foundation in components, circuits, sensors, power and practical electronics.',
  },
  {
    n: '04',
    icon: Wrench,
    title: 'Prototyping',
    text: 'Turn digital designs into functional prototypes using 3D printing and workshop practices.',
  },
  {
    n: '05',
    icon: Settings,
    title: 'Machine & Workshop',
    text: 'Learn safe machine operation, maintenance basics, calibration and production-oriented workflows.',
  },
  {
    n: '06',
    icon: Sparkles,
    title: 'Innovation Projects',
    text: 'Work on practical projects that combine design, printing, electronics and problem solving.',
  },
];

const levels = [
  {
    tag: 'LEVEL 01',
    title: 'Foundation',
    text: 'For students who are new to 3D design and digital fabrication.',
    items: [
      '3D design fundamentals',
      'Basic CAD modelling',
      'Measurements & dimensions',
      '3D printer introduction',
    ],
  },
  {
    tag: 'LEVEL 02',
    title: 'Intermediate',
    text: 'Build confidence through practical modelling and printing projects.',
    items: [
      'Advanced modelling',
      'Design optimisation',
      'Slicing & print settings',
      'Troubleshooting & iteration',
    ],
  },
  {
    tag: 'LEVEL 03',
    title: 'Industry Ready',
    text: 'Move towards real-world design, prototyping and production workflows.',
    items: [
      'Product design projects',
      'Functional prototypes',
      'Design for manufacturing',
      'Portfolio development',
    ],
  },
];

const process = [
  {
    n: '01',
    title: 'Learn',
    text: 'Understand the design concept, tools, machines and workflow.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Create a digital model based on dimensions and real requirements.',
  },
  {
    n: '03',
    title: 'Prepare',
    text: 'Convert the model into a printable file and optimise settings.',
  },
  {
    n: '04',
    title: 'Print',
    text: 'Operate the 3D printer and produce the physical prototype.',
  },
  {
    n: '05',
    title: 'Test',
    text: 'Inspect the result, identify problems and improve the design.',
  },
  {
    n: '06',
    title: 'Build Portfolio',
    text: 'Document projects and develop industry-relevant practical skills.',
  },
];

const benefits = [
  'Hands-on 3D design training',
  'Real 3D printing experience',
  'Industry-oriented projects',
  'CAD and digital fabrication skills',
  'Machine operation & troubleshooting',
  'Portfolio-ready student projects',
  'Trainer-led practical sessions',
  'Workshop and lab support',
];

const delivery = [
  {
    icon: School,
    title: 'College Training',
    text: 'Structured training programs for ITI and Polytechnic students.',
  },
  {
    icon: GraduationCap,
    title: 'Student Workshops',
    text: 'Short-term intensive workshops focused on practical skills.',
  },
  {
    icon: Printer,
    title: '3D Printing Lab',
    text: 'Support for setting up and running educational 3D printing labs.',
  },
  {
    icon: Box,
    title: 'Project Support',
    text: 'Help students develop prototypes, models and final-year projects.',
  },
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
          ITI • POLYTECHNIC • SKILL DEVELOPMENT
        </div>

        <h1>
          Build skills that
          <br />
          <em>build the future.</em>
        </h1>

        <p>
          Industry-oriented training in 3D Design, 3D Printing,
          CAD, Prototyping and Digital Fabrication for ITI and
          Polytechnic students.
        </p>

        <div className={styles.heroActions}>

          <Link className={styles.primary} href="/#contact">
            Discuss Training
            <ArrowRight size={17} />
          </Link>

          <Link className={styles.secondary} href="#programs">
            Explore Programs
          </Link>

        </div>

        <div className={styles.heroStats}>

          <div>
            <strong>16+</strong>
            <span>
              Years of 3D Design
              <br />
              Experience
            </span>
          </div>

          <i />

          <div>
            <strong>100%</strong>
            <span>
              Practical & Project
              <br />
              Based Learning
            </span>
          </div>

          <i />

          <div>
            <strong>3D</strong>
            <span>
              Design → Print
              <br />
              → Prototype
            </span>
          </div>

        </div>

      </section>


      {/* TRAINING AREAS */}
      <section className={styles.section} id="programs">

        <div className={styles.sectionHead}>

          <div>
            <div className={styles.eyebrow}>
              WHAT WE TEACH
            </div>

            <h2>
              Practical skills.
              <br />
              <em>Real machines.</em>
            </h2>
          </div>

          <p>
            Our programs are designed for ITI and Polytechnic
            students who want practical exposure to modern
            design, manufacturing and prototyping technologies.
          </p>

        </div>


        <div className={styles.trainingGrid}>

          {trainingAreas.map(
            ({ n, icon: Icon, title, text }) => (

              <article
                className={styles.trainingCard}
                key={n}
              >

                <div className={styles.cardTop}>
                  <span>{n}</span>
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


      {/* 3D DESIGN FEATURE */}
      <section className={styles.featureBand}>

        <div className={styles.featureInner}>

          <div className={styles.featureVisual}>

            <span className={styles.visualLabel}>
              DIGITAL FABRICATION
            </span>

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
              3D DESIGN + 3D PRINTING
            </div>

            <h2>
              From digital idea
              <br />
              to <em>physical product.</em>
            </h2>

            <p>
              Students learn the complete workflow used in
              modern prototyping: understanding an idea,
              creating a 3D model, preparing the print,
              producing the part and improving the final result.
            </p>

            <div className={styles.workflow}>
              <span>IDEA</span>
              <ArrowRight size={13} />
              <span>CAD</span>
              <ArrowRight size={13} />
              <span>SLICE</span>
              <ArrowRight size={13} />
              <span>PRINT</span>
              <ArrowRight size={13} />
              <span>TEST</span>
              <ArrowRight size={13} />
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
              Start anywhere.
              <br />
              <em>Grow with projects.</em>
            </h2>
          </div>

          <p>
            Training can be customised according to the
            existing skill level, branch, available lab
            equipment and duration of the institution program.
          </p>

        </div>


        <div className={styles.levelGrid}>

          {levels.map((level) => (

            <article
              className={styles.levelCard}
              key={level.title}
            >

              <div className={styles.levelTag}>
                {level.tag}
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
                LEARNING PROCESS
              </div>

              <h2>
                Learn by
                <br />
                <em>making.</em>
              </h2>
            </div>

            <p>
              Every training program follows a practical
              workflow so students understand not only
              what a tool does, but how it is used to solve
              real problems.
            </p>

          </div>


          <div className={styles.processGrid}>

            {process.map((item) => (

              <article
                className={styles.processCard}
                key={item.n}
              >

                <span>{item.n}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

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
              STUDENT OUTCOMES
            </div>

            <h2>
              Skills students
              <br />
              can <em>use.</em>
            </h2>

            <p className={styles.lead}>
              The objective is not simply to teach software
              or operate a printer. Students should develop
              the confidence to design, make, test and improve
              their own ideas.
            </p>

            <Link
              className={styles.primary}
              href="/#contact"
            >
              Plan a Training Program
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


      {/* FOR INSTITUTES */}
      <section className={styles.instituteBand}>

        <div className={styles.instituteInner}>

          <div>

            <div className={styles.eyebrow}>
              FOR ITI & POLYTECHNIC INSTITUTES
            </div>

            <h2>
              Training that fits
              <br />
              your <em>institution.</em>
            </h2>

            <p>
              ShikshamDehi can work with institutes for
              workshops, semester programs, lab training,
              project mentoring and structured skill
              development programs.
            </p>

          </div>


          <div className={styles.deliveryGrid}>

            {delivery.map(
              ({ icon: Icon, title, text }) => (

                <div key={title}>

                  <Icon size={22} />

                  <b>{title}</b>

                  <span>{text}</span>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className={styles.challenge}>

        <div className={styles.challengeInner}>

          <div className={styles.eyebrow}>
            LET'S BUILD SKILLS
          </div>

          <h2>
            Ready to bring
            <br />
            <em>3D making</em> to your institute?
          </h2>

          <p>
            Talk to us about student training, workshops,
            3D printing labs, project support or a customised
            institutional program.
          </p>

          <Link
            className={styles.primary}
            href="/#contact"
          >
            Discuss Your Requirement
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
