'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Box,
  Cpu,
  GraduationCap,
  Layers3,
  Printer,
  Settings2,
  Sparkles,
  Wrench,
} from 'lucide-react';

import styles from './iti-polytechnic.module.css';

const trainingAreas = [
  {
    icon: Box,
    number: '01',
    title: '3D Design & CAD',
    text: 'Learn practical 3D modelling, CAD fundamentals, design thinking and preparation of models for manufacturing.',
  },
  {
    icon: Printer,
    number: '02',
    title: '3D Printing',
    text: 'Understand slicing, printer operation, materials, print settings, troubleshooting and rapid prototyping.',
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Electronics',
    text: 'Hands-on training with electronic components, circuits, sensors, breadboards and practical applications.',
  },
  {
    icon: Bot,
    number: '04',
    title: 'Robotics',
    text: 'Build practical robots using motors, sensors, controllers, Arduino and robotic mechanisms.',
  },
  {
    icon: Sparkles,
    number: '05',
    title: 'IoT & Smart Systems',
    text: 'Learn sensors, connected devices, automation and practical Internet of Things applications.',
  },
  {
    icon: Wrench,
    number: '06',
    title: 'Prototyping',
    text: 'Convert engineering ideas into functional prototypes through design, fabrication, testing and improvement.',
  },
];

const suitableFor = [
  'ITI students',
  'Polytechnic students',
  'Engineering students',
  'Technical faculty',
  'Lab instructors',
  'Skill development programs',
];

const learningPath = [
  {
    number: '01',
    title: 'Understand',
    text: 'Learn the technology and its real-world applications.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Create concepts, drawings and digital models.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Use tools, machines, electronics and fabrication techniques.',
  },
  {
    number: '04',
    title: 'Test',
    text: 'Test the prototype and identify practical problems.',
  },
  {
    number: '05',
    title: 'Improve',
    text: 'Iterate the design and make the product better.',
  },
];

export default function ITIPolytechnicPage() {
  return (
    <main className={styles.page}>

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
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className={styles.navButton}>
          Discuss Your Institution
          <ArrowRight size={16} />
        </Link>
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
            Practical technology training for ITI, Polytechnic and
            engineering learners in 3D design, 3D printing,
            electronics, robotics, IoT and prototyping.
          </p>

          <div className={styles.heroButtons}>
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
            <span>STEM Technology Training</span>
          </div>

        </div>

        <div className={styles.heroVisual}>

          <div className={styles.visualGrid} />

          <div className={styles.techCard}>

            <div className={styles.techCardTop}>
              <span className={styles.liveDot} />
              SHIKSHAMDEHI / TECH LAB
            </div>

            <div className={styles.techCube}>
              <div className={styles.cubeTop} />
              <div className={styles.cubeFront} />
              <div className={styles.cubeSide} />
            </div>

            <div className={styles.techCardBottom}>
              <span>DESIGN</span>
              <b>→</b>
              <span>BUILD</span>
              <b>→</b>
              <span>TEST</span>
            </div>

          </div>

          <div className={`${styles.floatCard} ${styles.floatOne}`}>
            <Box size={18} />
            <span>3D CAD</span>
          </div>

          <div className={`${styles.floatCard} ${styles.floatTwo}`}>
            <Bot size={18} />
            <span>Robotics</span>
          </div>

          <div className={`${styles.floatCard} ${styles.floatThree}`}>
            <Cpu size={18} />
            <span>IoT</span>
          </div>

        </div>

      </section>

      {/* ================= STATEMENT ================= */}

      <section className={styles.statement}>

        <div>LEARN</div>
        <span>→</span>
        <div>DESIGN</div>
        <span>→</span>
        <div>BUILD</div>
        <span>→</span>
        <div>TEST</div>
        <span>→</span>
        <div>IMPROVE</div>

      </section>

      {/* ================= WHY ================= */}

      <section className={styles.section}>

        <div className={styles.sectionHeader}>

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

          <p>
            Technical education becomes more valuable when students
            get the opportunity to design, fabricate, test and improve
            real products. ShikshamDehi complements classroom learning
            with practical, project-driven technology training.
          </p>

        </div>

      </section>

      {/* ================= TRAINING AREAS ================= */}

      <section className={styles.section}>

        <div className={styles.sectionHeader}>

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

          {trainingAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className={styles.trainingCard}
                key={item.title}
              >

                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <Icon size={24} />
                  </div>

                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <Link href="/contact" className={styles.cardLink}>
                  Discuss Training
                  <ArrowRight size={16} />
                </Link>

              </article>
            );
          })}

        </div>

      </section>

      {/* ================= LEARNING PATH ================= */}

      <section className={styles.darkBand}>

        <div className={styles.section}>

          <div className={styles.sectionHeader}>

            <div>
              <div className={styles.eyebrow}>
                <span />
                PROJECT-BASED LEARNING
              </div>

              <h2>
                From classroom
                <br />
                <em>to working prototype.</em>
              </h2>
            </div>

            <p>
              Students learn by working through a complete
              technology-development cycle instead of only studying
              theoretical concepts.
            </p>

          </div>

          <div className={styles.pathGrid}>

            {learningPath.map((item) => (
              <div className={styles.pathItem} key={item.number}>

                <span className={styles.pathNumber}>
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SUITABLE FOR ================= */}

      <section className={styles.section}>

        <div className={styles.twoColumn}>

          <div>

            <div className={styles.eyebrow}>
              <span />
              DESIGNED FOR TECHNICAL LEARNERS
            </div>

            <h2>
              Practical skills
              <br />
              <em>for every level.</em>
            </h2>

            <p className={styles.largeText}>
              Whether students are learning basic fabrication or
              preparing engineering prototypes, the training can be
              structured around their existing technical knowledge.
            </p>

            <Link href="/contact" className={styles.primary}>
              Plan a Training Program
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className={styles.checkList}>

            {suitableFor.map((item, index) => (
              <div className={styles.checkItem} key={item}>

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <b>{item}</b>

                <ArrowRight size={16} />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= OUTCOMES ================= */}

      <section className={styles.outcomes}>

        <div className={styles.section}>

          <div className={styles.eyebrow}>
            <span />
            LEARNING OUTCOMES
          </div>

          <h2>
            Students don't just
            <br />
            <em>learn technology.</em>
          </h2>

          <div className={styles.outcomeGrid}>

            <div>
              <GraduationCap size={28} />
              <h3>Technical Confidence</h3>
              <p>
                Develop confidence in using modern technology tools,
                equipment and workflows.
              </p>
            </div>

            <div>
              <Layers3 size={28} />
              <h3>Design Thinking</h3>
              <p>
                Learn to approach problems through ideation,
                modelling, prototyping and iteration.
              </p>
            </div>

            <div>
              <Settings2 size={28} />
              <h3>Practical Problem Solving</h3>
              <p>
                Understand how to identify problems and develop
                working technical solutions.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>

        <div className={styles.ctaGlow} />

        <div className={styles.eyebrow}>
          <span />
          START A TRAINING PROGRAM
        </div>

        <h2>
          Let's build
          <br />
          <em>industry-ready skills.</em>
        </h2>

        <p>
          Tell us about your institution, department, student strength
          and technology training requirements.
        </p>

        <div className={styles.ctaButtons}>

          <Link href="/contact" className={styles.primary}>
            Contact ShikshamDehi
            <ArrowRight size={18} />
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryLight}
          >
            WhatsApp Us
          </a>

        </div>

        <div className={styles.ctaTags}>
          <span>ITI</span>
          <span>Polytechnic</span>
          <span>Engineering</span>
          <span>Technical Faculty</span>
          <span>Skill Development</span>
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

        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>

      </footer>

    </main>
  );
}
