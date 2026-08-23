'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
ArrowRight,
Bot,
Building2,
Cpu,
Cuboid,
GraduationCap,
Lightbulb,
Menu,
Printer,
School,
Sparkles,
Wrench,
X,
Zap,
} from 'lucide-react';

const programs = [
{
icon: Cuboid,
number: '01',
tag: 'DESIGN',
title: '3D Design & CAD',
text: 'Learn professional 3D modelling and CAD from basic concepts to product-ready designs.',
points: [
'3D modelling fundamentals',
'CAD & product design',
'Design thinking',
'Design for manufacturing',
],
audience: 'Schools • ITI • Polytechnic • College',
},
{
icon: Printer,
number: '02',
tag: 'MANUFACTURING',
title: '3D Printing',
text: 'Understand the complete workflow from digital model to physical prototype.',
points: [
'3D printer fundamentals',
'Slicing & print settings',
'Printer operation',
'Troubleshooting & maintenance',
],
audience: 'Schools • ATL Labs • ITI • Polytechnic • College',
},
{
icon: Cpu,
number: '03',
tag: 'ELECTRONICS',
title: 'Arduino & Electronics',
text: 'Build practical electronics projects using Arduino, sensors and actuators.',
points: [
'Basic electronics',
'Arduino programming',
'Sensors & actuators',
'Hands-on project building',
],
audience: 'Schools • ATL Labs • ITI • Polytechnic • College',
},
{
icon: Bot,
number: '04',
tag: 'AUTOMATION',
title: 'Robotics & Automation',
text: 'Design and build robots while learning motors, sensors, controllers and automation.',
points: [
'Robot fundamentals',
'Motors & motor drivers',
'Sensors & control',
'Autonomous systems',
],
audience: 'Schools • ATL Labs • ITI • Polytechnic • College',
},
{
icon: Zap,
number: '05',
tag: 'CONNECTED TECHNOLOGY',
title: 'IoT & Smart Devices',
text: 'Explore connected devices and create smart systems using sensors and controllers.',
points: [
'IoT fundamentals',
'Connected sensors',
'Smart devices',
'Real-world automation',
],
audience: 'ATL Labs • ITI • Polytechnic • College',
},
{
icon: Sparkles,
number: '06',
tag: 'FUTURE SKILLS',
title: 'AI + Hardware',
text: 'Introduce learners to the combination of artificial intelligence, hardware and automation.',
points: [
'AI concepts',
'Smart hardware',
'Automation ideas',
'AI-enabled prototypes',
],
audience: 'Polytechnic • College • Advanced Students',
},
{
icon: School,
number: '07',
tag: 'SCHOOL STEM',
title: 'School STEM Programs',
text: 'Project-based STEM learning designed for school students with age-appropriate activities.',
points: [
'STEM workshops',
'Maker projects',
'3D design & printing',
'Robotics & electronics',
],
audience: 'Classes 6–12',
},
{
icon: Lightbulb,
number: '08',
tag: 'ATL LAB',
title: 'ATL Lab Programs',
text: 'Activate your ATL Lab with structured projects, mentoring, workshops and innovation challenges.',
points: [
'ATL lab activation',
'Student projects',
'Mentoring',
'Exhibition preparation',
],
audience: 'Atal Tinkering Labs',
},
{
icon: Wrench,
number: '09',
tag: 'TECHNICAL TRAINING',
title: 'ITI & Polytechnic Training',
text: 'Technical skill development focused on CAD, 3D printing, prototyping and digital manufacturing.',
points: [
'Technical CAD training',
'3D printing',
'Rapid prototyping',
'Industry-oriented projects',
],
audience: 'ITI • Polytechnic',
},
{
icon: GraduationCap,
number: '10',
tag: 'HIGHER EDUCATION',
title: 'College & Engineering Projects',
text: 'Support students in developing functional prototypes for academic and engineering projects.',
points: [
'Project ideation',
'CAD & modelling',
'Prototype development',
'Testing & improvement',
],
audience: 'Colleges • Engineering Students',
},
{
icon: Building2,
number: '11',
tag: 'INSTITUTIONAL',
title: 'Workshops & Bootcamps',
text: 'Short-term intensive programs designed around specific technologies and project outcomes.',
points: [
'Technology workshops',
'Bootcamps',
'Faculty training',
'Custom institutional programs',
],
audience: 'Schools • Colleges • Institutions',
},
];

const audiences = [
'Schools',
'ATL Labs',
'ITI',
'Polytechnics',
'Colleges',
'Educators',
];

const workflow = [
'EXPLORE',
'DESIGN',
'MODEL',
'BUILD',
'PRINT',
'PROGRAM',
'TEST',
'INNOVATE',
];

const institutions = [
{
icon: School,
title: 'Schools',
text: 'STEM, maker education, robotics, electronics and project-based learning.',
},
{
icon: Lightbulb,
title: 'ATL Labs',
text: 'Lab activation, mentoring, innovation challenges and project support.',
},
{
icon: Wrench,
title: 'ITI',
text: 'Technical CAD, 3D printing, prototyping and digital manufacturing.',
},
{
icon: Cuboid,
title: 'Polytechnics',
text: 'Engineering design, rapid prototyping, CAD and technical projects.',
},
{
icon: GraduationCap,
title: 'Colleges',
text: 'Engineering projects, product development, IoT and robotics.',
},
{
icon: Building2,
title: 'Educators',
text: 'Faculty development and practical technology training.',
},
];

export default function ProgramsPage() {
const [open, setOpen] = useState(false);

const closeMenu = () => setOpen(false);

return ( <main className="page">
{/* ================= NAVBAR ================= */}


  <header className="nav">
    <Link href="/" className="brand" onClick={closeMenu} aria-label="ShikshamDehi home">
      <span className="mark">SD</span>

      <span>
        Shiksham<span>Dehi</span>
      </span>
    </Link>

    <nav className={open ? 'mobileOpen' : ''} aria-label="Main navigation">
      <Link href="/" onClick={closeMenu}>
        Home
      </Link>

      <Link href="/programs" className="active" onClick={closeMenu}>
        Programs
      </Link>

      <Link href="/iti-polytechnic" onClick={closeMenu}>
        ITI & Polytechnic
      </Link>

      <Link href="/projects" onClick={closeMenu}>
        Projects
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

    <Link href="/contact" className="navCta">
      Partner With Us <ArrowRight size={16} />
    </Link>

    <button
      type="button"
      className="menu"
      onClick={() => setOpen((value) => !value)}
      aria-label={open ? 'Close navigation' : 'Open navigation'}
      aria-expanded={open}
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  </header>

  {/* ================= HERO ================= */}

  <section className="hero" aria-labelledby="programs-title">
    <div className="heroGlow" />

    <div className="eyebrow">
      <span />
      SHIKSHAMDEHI PROGRAMS
    </div>

    <h1 id="programs-title">
      Learn.
      <br />
      <em>Build.</em>
      <br />
      Innovate.
    </h1>

    <p>
      Practical technology programs that connect{' '}
      <strong>
        3D Design, 3D Printing, Electronics, Robotics, IoT and AI
      </strong>{' '}
      with real-world projects.
    </p>

    <div className="heroTags">
      {audiences.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>

    <div className="heroActions">
      <a href="#programs" className="primary">
        Explore Programs <ArrowRight size={18} />
      </a>

      <Link href="/contact" className="secondary">
        Talk to Us
      </Link>
    </div>
  </section>

  {/* ================= INTRO ================= */}

  <section className="intro section">
    <div>
      <div className="eyebrow">
        <span />
        WHAT WE TEACH
      </div>

      <h2>
        Technology should be
        <br />
        <em>built, not just studied.</em>
      </h2>
    </div>

    <p>
      Our programs are designed around hands-on learning. Learners move
      from understanding a technology to designing, building, testing and
      improving something real.
    </p>
  </section>

  {/* ================= PROGRAMS ================= */}

  <section className="programSection section" id="programs">
    <div className="sectionHead">
      <div>
        <div className="eyebrow">
          <span />
          OUR PROGRAMS
        </div>

        <h2>
          Choose a skill.
          <br />
          <em>Build a future.</em>
        </h2>
      </div>

      <p>
        From beginner maker education to advanced technical training,
        programs can be customised according to age, curriculum,
        technical level and institutional requirements.
      </p>
    </div>

    <div className="programGrid">
      {programs.map(
        ({
          icon: Icon,
          number,
          tag,
          title,
          text,
          points,
          audience,
        }) => (
          <article className="programCard" key={title}>
            <div className="programTop">
              <div className="icon" aria-hidden="true">
                <Icon size={23} />
              </div>

              <span>{number}</span>
            </div>

            <div className="tag">{tag}</div>

            <h3>{title}</h3>

            <p className="description">{text}</p>

            <div className="points">
              {points.map((point) => (
                <div key={point}>
                  <span aria-hidden="true">✓</span>
                  {point}
                </div>
              ))}
            </div>

            <div className="audience">
              <small>SUITABLE FOR</small>
              <b>{audience}</b>
            </div>

            <Link href="/contact" className="cardLink">
              Enquire About Program <ArrowRight size={16} />
            </Link>
          </article>
        )
      )}
    </div>
  </section>

  {/* ================= WORKFLOW ================= */}

  <section className="workflowBand">
    <div className="section workflowSection">
      <div className="eyebrow">
        <span />
        OUR LEARNING APPROACH
      </div>

      <h2>
        From <em>idea</em>
        <br />
        to real-world output.
      </h2>

      <div className="workflow">
        {workflow.map((item, index) => (
          <div className="workflowItem" key={item}>
            <span>
              {String(index + 1).padStart(2, '0')}
            </span>

            <b>{item}</b>

            {index < workflow.length - 1 && <i>→</i>}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ================= INSTITUTIONS ================= */}

  <section className="section institutions">
    <div className="sectionHead">
      <div>
        <div className="eyebrow">
          <span />
          FOR INSTITUTIONS
        </div>

        <h2>
          One platform.
          <br />
          <em>Different learning needs.</em>
        </h2>
      </div>

      <p>
        We work with institutions to create structured technology
        learning experiences—from single-day workshops to long-term skill
        development programs.
      </p>
    </div>

    <div className="institutionGrid">
      {institutions.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <Icon size={24} aria-hidden="true" />

          <h3>{title}</h3>

          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>

  {/* ================= CTA ================= */}

  <section className="cta">
    <div className="ctaGlow" />

    <div className="eyebrow">
      <span />
      READY TO START?
    </div>

    <h2>
      Build a program
      <br />
      <em>that fits your institution.</em>
    </h2>

    <p>
      Tell us about your students, lab, institution or project. We can
      create a suitable training plan around your goals.
    </p>

    <div className="heroActions">
      <Link href="/contact" className="primary">
        Discuss Your Program <ArrowRight size={18} />
      </Link>

      <Link href="/iti-polytechnic" className="secondary">
        ITI & Polytechnic Training
      </Link>
    </div>
  </section>

  {/* ================= FOOTER ================= */}

  <footer className="footer">
    <Link href="/" className="brand" onClick={closeMenu}>
      <span className="mark">SD</span>

      <span>
        Shiksham<span>Dehi</span>
      </span>
    </Link>

    <p>
      STEM Education • Digital Manufacturing • Future Skills
    </p>

    <small>© 2026 ShikshamDehi. All rights reserved.</small>
  </footer>
</main>


);
}
