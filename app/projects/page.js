'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Cpu,
  Cuboid,
  Lightbulb,
  Printer,
  Radio,
  Settings2,
  Zap,
} from 'lucide-react';

import styles from './projects.module.css';

const projects = [
  {
    icon: Bot,
    number: '01',
    category: 'ROBOTICS',
    title: 'Line Following Robot',
    description:
      'Build a working autonomous robot using sensors, motors, motor drivers and a microcontroller.',
    skills: ['Arduino', 'Sensors', 'Motors', 'Robotics'],
    level: 'BEGINNER',
  },
  {
    icon: Cpu,
    number: '02',
    category: 'ARDUINO',
    title: 'Smart Dustbin',
    description:
      'Create an automatic dustbin using an ultrasonic sensor, servo motor and Arduino.',
    skills: [
      'Arduino',
      'Ultrasonic Sensor',
      'Servo',
      'Automation',
    ],
    level: 'BEGINNER',
  },
  {
    icon: Radio,
    number: '03',
    category: 'IoT',
    title: 'Smart Plant Monitoring',
    description:
      'Build a smart plant monitoring system that measures environmental conditions and enables automated watering.',
    skills: ['IoT', 'Sensors', 'Arduino', 'Automation'],
    level: 'INTERMEDIATE',
  },
  {
    icon: Cuboid,
    number: '04',
    category: '3D DESIGN',
    title: '3D Printed Product',
    description:
      'Design a useful product in CAD and transform the digital model into a physical prototype using 3D printing.',
    skills: ['3D CAD', 'Modelling', 'STL', '3D Printing'],
    level: 'BEGINNER',
  },
  {
    icon: Printer,
    number: '05',
    category: '3D PRINTING',
    title: 'Functional Prototype',
    description:
      'Learn the complete digital manufacturing workflow from CAD model to slicing, printing and testing.',
    skills: ['CAD', 'Slicing', '3D Printer', 'Prototype'],
    level: 'INTERMEDIATE',
  },
  {
    icon: Settings2,
    number: '06',
    category: 'AUTOMATION',
    title: 'Obstacle Avoiding Robot',
    description:
      'Design and build a robot that detects obstacles and automatically changes its direction.',
    skills: ['Robotics', 'Sensors', 'Arduino', 'Programming'],
    level: 'INTERMEDIATE',
  },
  {
    icon: Zap,
    number: '07',
    category: 'ELECTRONICS',
    title: 'Automatic Lighting System',
    description:
      'Build an intelligent lighting system using sensors and a microcontroller to control lights automatically.',
    skills: ['Electronics', 'Sensors', 'Arduino', 'Automation'],
    level: 'BEGINNER',
  },
  {
    icon: Lightbulb,
    number: '08',
    category: 'INNOVATION',
    title: 'Student Innovation Prototype',
    description:
      'Take an original problem-solving idea through research, design, prototyping, testing and improvement.',
    skills: ['Ideation', 'Design', 'Prototype', 'Testing'],
    level: 'ADVANCED',
  },
];

const learningSteps = [
  {
    number: '01',
    title: 'Identify',
    text: 'Find a real-world problem worth solving.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Plan the solution and create the design.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Use electronics, code, CAD and fabrication.',
  },
  {
    number: '04',
    title: 'Test',
    text: 'Test the prototype and identify improvements.',
  },
  {
    number: '05',
    title: 'Improve',
    text: 'Iterate until the solution works better.',
  },
];

const suitableFor = [
  'School STEM Programs',
  'ATL Labs',
  'ITI Students',
  'Polytechnic Students',
  'Engineering Colleges',
  'Workshops & Bootcamps',
];

export default function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      {/* ================= NAVBAR ================= */}

      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/programs">Programs</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/iti-polytechnic">
            ITI & Polytechnic
          </Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Journal</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className={styles.navCta}>
          Partner With Us
          <ArrowRight size={16} />
        </Link>
      </header>

      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.eyebrow}>
          <span />
          PROJECT-BASED LEARNING
        </div>

        <h1>
          Learn by
          <br />
          <em>building real projects.</em>
        </h1>

        <p>
          Real projects turn technology concepts into practical
          skills. Students learn to design, build, test and improve
          working prototypes using modern technologies.
        </p>

        <div className={styles.heroActions}>
          <Link
            href="#projects"
            className={styles.primary}
          >
            Explore Projects
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className={styles.secondary}
          >
            Build a Custom Project
          </Link>
        </div>

        <div className={styles.heroStats}>
          <div>
            <strong>3D</strong>
            <span>
              Design &
              <br />
              Printing
            </span>
          </div>

          <i />

          <div>
            <strong>IoT</strong>
            <span>
              Smart
              <br />
              Devices
            </span>
          </div>

          <i />

          <div>
            <strong>AI</strong>
            <span>
              Smart
              <br />
              Hardware
            </span>
          </div>

          <i />

          <div>
            <strong>Robotics</strong>
            <span>
              Automation
              <br />
              Systems
            </span>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        className={styles.section}
        id="projects"
      >
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              WHAT CAN STUDENTS BUILD?
            </div>

            <h2>
              From simple ideas
              <br />
              <em>to working prototypes.</em>
            </h2>
          </div>

          <p>
            Projects can be adapted according to student age,
            technical level, curriculum, available equipment and
            institutional objectives.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className={styles.projectCard}
                key={project.number}
              >
                <div className={styles.projectTop}>
                  <div className={styles.projectIcon}>
                    <Icon size={23} />
                  </div>

                  <span>{project.number}</span>
                </div>

                <div className={styles.projectCategory}>
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.skills}>
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className={styles.projectBottom}>
                  <span className={styles.level}>
                    {project.level}
                  </span>

                  <Link href="/contact">
                    Build This
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}

      <section className={styles.workflowSection}>
        <div className={styles.section}>
          <div className={styles.workflowIntro}>
            <div>
              <div className={styles.eyebrow}>
                <span />
                THE MAKER WORKFLOW
              </div>

              <h2>
                Idea
                <br />
                <em>to product.</em>
              </h2>
            </div>

            <p>
              Every project follows a practical learning cycle.
              Students are encouraged to experiment, make mistakes,
              test their ideas and improve their prototypes.
            </p>
          </div>

          <div className={styles.steps}>
            {learningSteps.map((step) => (
              <div
                className={styles.step}
                key={step.number}
              >
                <span>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className={styles.section}>
        <div className={styles.skillsBlock}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              SKILLS STUDENTS DEVELOP
            </div>

            <h2>
              Technology is the tool.
              <br />
              <em>Problem solving is the skill.</em>
            </h2>

            <p>
              Project-based learning helps students connect
              multiple technology domains while developing
              creativity, logical thinking and practical
              problem-solving ability.
            </p>
          </div>

          <div className={styles.skillList}>
            <div>
              <strong>01</strong>
              <span>Design Thinking</span>
            </div>

            <div>
              <strong>02</strong>
              <span>CAD & 3D Modelling</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Electronics</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Coding & Programming</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Robotics & Automation</span>
            </div>

            <div>
              <strong>06</strong>
              <span>Testing & Iteration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSTITUTIONS ================= */}

      <section className={styles.institutionSection}>
        <div className={styles.section}>
          <div className={styles.institutionGrid}>
            <div>
              <div className={styles.eyebrow}>
                <span />
                FOR INSTITUTIONS
              </div>

              <h2>
                Projects designed
                <br />
                <em>for your learners.</em>
              </h2>

              <p>
                We can customise projects according to your
                students, curriculum, lab infrastructure and
                learning objectives.
              </p>

              <Link
                href="/contact"
                className={styles.primary}
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className={styles.suitableCard}>
              <span>SUITABLE FOR</span>

              {suitableFor.map((item, index) => (
                <div key={item}>
                  <strong>
                    {String(index + 1).padStart(2, '0')}
                  </strong>

                  <b>{item}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <div className={styles.eyebrow}>
          <span />
          HAVE AN IDEA?
        </div>

        <h2>
          Let&apos;s turn your
          <br />
          <em>idea into a prototype.</em>
        </h2>

        <p>
          Tell us what you want your students to build and we can
          design a practical project-based learning program around
          it.
        </p>

        <div className={styles.heroActions}>
          <Link
            href="/contact"
            className={styles.primary}
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/programs"
            className={styles.secondary}
          >
            Explore Programs
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark}>SD</span>

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
