'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  ArrowRight,
  Bot,
  Boxes,
  Building2,
  CircuitBoard,
  Cpu,
  Cuboid,
  GraduationCap,
  Layers3,
  Lightbulb,
  Menu,
  Printer,
  School,
  Settings2,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const modules = [
  {
    number: '01',
    icon: Wrench,
    category: 'TECHNICAL TRAINING',
    title: 'ITI',
    description:
      'Technical training focused on CAD, 3D printing, prototyping, digital manufacturing and practical industry skills.',
    skills: ['CAD', '3D Printing', 'Prototyping'],
    href: '/iti-polytechnic',
  },
  {
    number: '02',
    icon: GraduationCap,
    category: 'ENGINEERING EDUCATION',
    title: 'Polytechnic',
    description:
      'Practical engineering learning through CAD, 3D modelling, rapid prototyping, robotics and technical projects.',
    skills: ['CAD', 'Design', 'Projects'],
    href: '/iti-polytechnic',
  },
  {
    number: '03',
    icon: Bot,
    category: 'AUTOMATION',
    title: 'Robotics',
    description:
      'Build robots and understand motors, sensors, controllers, programming and automation systems.',
    skills: ['Sensors', 'Motors', 'Automation'],
    href: '/programs',
  },
  {
    number: '04',
    icon: Cpu,
    category: 'MICROCONTROLLERS',
    title: 'Arduino',
    description:
      'Learn Arduino programming and create practical electronics, automation and robotics projects.',
    skills: ['Arduino', 'Coding', 'Sensors'],
    href: '/programs',
  },
  {
    number: '05',
    icon: Cuboid,
    category: 'DIGITAL DESIGN',
    title: '3D Design',
    description:
      'Learn CAD and 3D modelling to design products, mechanical parts and functional prototypes.',
    skills: ['CAD', '3D Modelling', 'Product Design'],
    href: '/programs',
  },
  {
    number: '06',
    icon: Printer,
    category: 'DIGITAL FABRICATION',
    title: '3D Printing',
    description:
      'Convert digital models into physical objects through slicing, printing, testing and improvement.',
    skills: ['STL', 'Slicing', 'Prototyping'],
    href: '/programs',
  },
  {
    number: '07',
    icon: Settings2,
    category: 'ENGINEERING DESIGN',
    title: 'Reverse Engineering',
    description:
      'Understand existing components and recreate their dimensions and geometry as accurate CAD models.',
    skills: ['Measurement', 'CAD', 'Product Analysis'],
    href: '/programs',
  },
  {
    number: '08',
    icon: Zap,
    category: 'CONNECTED TECHNOLOGY',
    title: 'IoT',
    description:
      'Create connected devices using sensors, controllers and communication technologies for smart systems.',
    skills: ['Sensors', 'Smart Devices', 'Automation'],
    href: '/programs',
  },
  {
    number: '09',
    icon: CircuitBoard,
    category: 'ELECTRONICS',
    title: 'Electronics',
    description:
      'Understand circuits, components, sensors and electronic systems through practical hands-on learning.',
    skills: ['Circuits', 'Components', 'Sensors'],
    href: '/programs',
  },
  {
    number: '10',
    icon: Lightbulb,
    category: 'MAKER EDUCATION',
    title: 'STEM Projects',
    description:
      'Explore science, technology, engineering and mathematics through creative hands-on projects.',
    skills: ['STEM', 'Innovation', 'Making'],
    href: '/projects',
  },
  {
    number: '11',
    icon: School,
    category: 'SCHOOL EDUCATION',
    title: 'School Projects',
    description:
      'Build age-appropriate working models and technology projects for classes 6–12, exhibitions and competitions.',
    skills: ['Models', 'Experiments', 'Innovation'],
    href: '/projects',
  },
  {
    number: '12',
    icon: Boxes,
    category: 'PROJECT SUPPORT',
    title: 'Get Materials',
    description:
      'Find project components and materials such as Arduino boards, sensors, motors, electronics and 3D printing supplies.',
    skills: ['Components', 'Project Kits', 'Materials'],
    href: '/contact',
    featured: true,
  },
];

const audiences = [
  {
    icon: School,
    title: 'Schools',
    text: 'STEM, maker education and project-based learning.',
    href: '/programs',
  },
  {
    icon: Layers3,
    title: 'ATL Labs',
    text: 'Lab activation, mentoring and innovation projects.',
    href: '/programs',
  },
  {
    icon: Wrench,
    title: 'ITI',
    text: 'CAD, 3D printing, prototyping and technical skills.',
    href: '/iti-polytechnic',
  },
  {
    icon: GraduationCap,
    title: 'Polytechnic',
    text: 'Engineering design and digital manufacturing.',
    href: '/iti-polytechnic',
  },
  {
    icon: Building2,
    title: 'Colleges',
    text: 'Engineering projects, IoT, robotics and prototypes.',
    href: '/projects',
  },
  {
    icon: Lightbulb,
    title: 'Educators',
    text: 'Faculty development and practical technology training.',
    href: '/contact',
  },
];

const workflow = [
  'IDEA',
  'DESIGN',
  'MODEL',
  'BUILD',
  'TEST',
  'IMPROVE',
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main className="homePage">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="nav">

        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
          aria-label="ShikshamDehi Home"
        >
          <span className="brandMark">SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={open ? 'mobileOpen' : ''}
          aria-label="Main navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link href="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link href="/iti-polytechnic" onClick={closeMenu}>
            ITI & Polytechnic
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            Journal
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <Link href="/contact" className="navCta">
          Partner With Us
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="gridGlow" aria-hidden="true" />

        <div className="heroCopy">

          <div className="eyebrow">
            <span />
            FUTURE SKILLS • REAL PROJECTS
          </div>

          <h1>
            Learn.
            <br />
            <em>Build.</em>
            <br />
            Create the future.
          </h1>

          <p className="heroText">
            Practical technology education in{' '}
            <strong>
              3D Design, 3D Printing, Robotics, Arduino, IoT,
              Electronics and AI
            </strong>{' '}
            for students, educators and institutions.
          </p>

          <div className="heroActions">

            <a href="#modules" className="primary">
              Explore All Modules
              <ArrowRight size={18} />
            </a>

            <Link href="/contact" className="secondary">
              Partner With Us
            </Link>

          </div>

          <div className="heroAudience">
            <span>Schools</span>
            <i>•</i>
            <span>ATL Labs</span>
            <i>•</i>
            <span>ITI</span>
            <i>•</i>
            <span>Polytechnic</span>
            <i>•</i>
            <span>Colleges</span>
          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="heroVisual" aria-hidden="true">

          <div className="orb orb1" />
          <div className="orb orb2" />

          <div className="heroCore">

            <div className="coreLabel">
              SHIKSHAMDEHI
            </div>

            <div className="coreCube">
              <span />
              <span />
              <span />
            </div>

            <div className="coreText">
              <b>IDEA → PROTOTYPE</b>
              <small>
                LEARN • BUILD • INNOVATE
              </small>
            </div>

          </div>

          <div className="floating f1">
            <Cuboid size={18} />
            <span>3D CAD</span>
          </div>

          <div className="floating f2">
            <Bot size={18} />
            <span>Robotics</span>
          </div>

          <div className="floating f3">
            <Zap size={18} />
            <span>Arduino</span>
          </div>

          <div className="floating f4">
            <Printer size={18} />
            <span>3D Print</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          MODULE INTRO
      ===================================================== */}

      <section className="moduleIntro">

        <div className="section">

          <div className="eyebrow">
            <span />
            EXPLORE SHIKSHAMDEHI
          </div>

          <h2>
            Everything you need
            <br />
            to <em>learn and build.</em>
          </h2>

          <p>
            Choose a technology, training area or project service
            and explore what ShikshamDehi can help you build.
          </p>

        </div>

      </section>


      {/* =====================================================
          12 MODULES
      ===================================================== */}

      <section
        className="section modulesSection"
        id="modules"
      >

        <div className="moduleGrid">

          {modules.map(
            ({
              number,
              icon: Icon,
              category,
              title,
              description,
              skills,
              href,
              featured,
            }) => (

              <Link
                href={href}
                className={`moduleCard ${
                  featured ? 'moduleFeatured' : ''
                }`}
                key={title}
              >

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <Icon size={24} />
                  </div>

                  <span className="moduleNumber">
                    {number}
                  </span>

                </div>

                <div className="moduleCategory">
                  {category}
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="moduleSkills">

                  {skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="moduleLink">
                  {featured
                    ? 'Get Project Materials'
                    : `Explore ${title}`}
                  <ArrowRight size={16} />
                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          LEARNING WORKFLOW
      ===================================================== */}

      <section className="journeyBand">

        <div className="section">

          <div className="sectionHead">

            <div>

              <div className="eyebrow">
                <span />
                HOW WE LEARN
              </div>

              <h2>
                Idea
                <br />
                <em>to real project.</em>
              </h2>

            </div>

            <p>
              Our approach connects learning with making.
              Students understand a concept and then use it to
              create something real.
            </p>

          </div>

          <div className="workflow">

            {workflow.map((item, index) => (

              <div
                className="workflowItem"
                key={item}
              >

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


      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section
        className="section"
        id="institutions"
      >

        <div className="sectionHead">

          <div>

            <div className="eyebrow">
              <span />
              WHO WE WORK WITH
            </div>

            <h2>
              Built for
              <br />
              <em>different learners.</em>
            </h2>

          </div>

          <p>
            Programs can be adapted according to age, curriculum,
            technical level, lab infrastructure and institutional goals.
          </p>

        </div>


        <div className="audienceGrid">

          {audiences.map(
            ({ icon: Icon, title, text, href }) => (

              <Link
                href={href}
                className="audienceCard"
                key={title}
              >

                <div className="icon">
                  <Icon size={22} />
                </div>

                <div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <span>
                    Explore
                    <ArrowRight size={15} />
                  </span>

                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          PROJECT CTA
      ===================================================== */}

      <section className="projectBanner">

        <div>

          <div className="eyebrow">
            <span />
            PROJECT-BASED LEARNING
          </div>

          <h2>
            What will you
            <br />
            <em>build next?</em>
          </h2>

          <p>
            Explore working project ideas in robotics, Arduino,
            IoT, electronics, 3D printing and STEM.
          </p>

        </div>

        <Link
          href="/projects"
          className="largeArrow"
        >
          <span>Explore Projects</span>
          <ArrowRight size={24} />
        </Link>

      </section>


      {/* =====================================================
          WHY SHIKSHAMDEHI
      ===================================================== */}

      <section className="section">

        <div className="about">

          <div>

            <div className="eyebrow">
              <span />
              WHY SHIKSHAMDEHI
            </div>

            <h2>
              Learn technology.
              <br />
              <em>Become a maker.</em>
            </h2>

          </div>

          <div className="aboutText">

            <p>
              ShikshamDehi brings together
              <strong>
                {' '}design, electronics, coding, fabrication
                and robotics
              </strong>{' '}
              into practical learning experiences.
            </p>

            <p>
              Students don't just consume technology.
              They learn to
              <strong>
                {' '}design it, build it, test it and improve it.
              </strong>
            </p>

            <div className="quote">
              “The goal is not just to teach technology.
              <br />
              <b>The goal is to create makers.</b>”
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="cta"
        id="contact"
      >

        <div className="ctaGlow" aria-hidden="true" />

        <div className="eyebrow">
          <span />
          READY TO BUILD?
        </div>

        <h2>
          Start with an idea.
          <br />
          <em>Build something real.</em>
        </h2>

        <p>
          Choose a module, explore projects or talk to us about
          training and project requirements.
        </p>

        <div className="heroActions">

          <Link
            href="/programs"
            className="primary"
          >
            Explore Programs
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="secondary light"
          >
            Talk to ShikshamDehi
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <Link href="/" className="brand">

          <span className="brandMark">
            SD
          </span>

          <span>
            Shiksham<span>Dehi</span>
          </span>

        </Link>

        <p>
          STEM Education • Digital Manufacturing • Future Skills
        </p>

        <div className="footerLinks">

          <Link href="/programs">
            Programs
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/iti-polytechnic">
            ITI & Polytechnic
          </Link>

          <Link href="/blog">
            Journal
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>

      </footer>

    </main>
  );
}

