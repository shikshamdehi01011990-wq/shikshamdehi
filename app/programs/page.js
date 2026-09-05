"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Lightbulb,
  Rocket,
  Settings,
} from "lucide-react";

const programs = [
  {
    title: "Foundation Learning",
    subtitle: "Classes 3–5",
    description:
      "Build curiosity through simple experiments, creative activities and small working projects.",
    image: "/images/shikshamdehi-practical-sessions.jpeg",
    icon: Lightbulb,
    color: "lime",
    href: "/programs/foundation",
    skills: [
      "Basic electronics",
      "Creative problem solving",
      "Simple machines",
      "Introduction to coding",
      "Hands-on experiments",
    ],
  },
  {
    title: "Maker Classes",
    subtitle: "Classes 6–8",
    description:
      "Move from learning concepts to designing and building real working prototypes.",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    icon: Settings,
    color: "cyan",
    href: "/programs/maker",
    skills: [
      "Arduino",
      "Electronics",
      "Robotics",
      "3D Design",
      "3D Printing",
    ],
  },
  {
    title: "Innovator Program",
    subtitle: "Classes 9–12",
    description:
      "Solve real-world problems using technology, design thinking and engineering.",
    image: "/images/shikshamdehi-robotics-projects.jpeg",
    icon: Rocket,
    color: "purple",
    href: "/programs/innovator",
    skills: [
      "Advanced Arduino",
      "IoT",
      "Robotics",
      "AI basics",
      "Design thinking",
    ],
  },
  {
    title: "Technical Programs",
    subtitle: "ITI • Polytechnic • College",
    description:
      "Industry-oriented practical training focused on technical skills, prototyping and projects.",
    image: "/images/shikshamdehi-3d-printing-training.jpeg",
    icon: Cpu,
    color: "orange",
    href: "/programs/technical",
    skills: [
      "3D CAD",
      "3D Printing",
      "Electronics",
      "Embedded systems",
      "Prototype development",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main className="programs-page">

      {/* NAVBAR */}
      <nav className="site-nav">
        <div className="nav-inner">
          <Link href="/" className="logo">
            SHIKSHAM<span>DEHI</span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs" className="active">
              Programs
            </Link>
            <Link href="/#schools">For Schools</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <Link href="/#contact" className="nav-cta">
            Partner With Us
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="programs-hero">
        <div className="container">

          <div className="section-eyebrow">
            <span></span>
            LEARNING PROGRAMS
          </div>

          <h1>
            Learn concepts.
            <br />
            <span>Build real things.</span>
          </h1>

          <p>
            Structured practical-learning programs designed to take students
            from curiosity to working prototypes.
          </p>

          <div className="programs-hero-points">
            <div>
              <CheckCircle2 size={18} />
              Age-based learning
            </div>

            <div>
              <CheckCircle2 size={18} />
              100% hands-on
            </div>

            <div>
              <CheckCircle2 size={18} />
              Real-world projects
            </div>
          </div>

        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs-list">
        <div className="container">

          <div className="programs-heading">
            <div>
              <div className="section-eyebrow">
                <span></span>
                CHOOSE YOUR PATH
              </div>

              <h2>
                Programs built around
                <br />
                <em>making, not memorising.</em>
              </h2>
            </div>

            <p>
              Every program combines concepts, activities, tools and projects
              so students understand not only <strong>what</strong> something
              is, but also <strong>how it works</strong> and <strong>how to build it.</strong>
            </p>
          </div>

          <div className="program-cards">

            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <article className="program-card" key={program.title}>

                  <div className="program-card-image">
                    <img
                      src={program.image}
                      alt={program.title}
                    />

                    <div className={`program-number ${program.color}`}>
                      0{index + 1}
                    </div>
                  </div>

                  <div className="program-card-content">

                    <div className="program-card-top">
                      <div className={`program-icon ${program.color}`}>
                        <Icon size={21} />
                      </div>

                      <span className="program-age">
                        {program.subtitle}
                      </span>
                    </div>

                    <h3>{program.title}</h3>

                    <p>{program.description}</p>

                    <div className="program-skills">
                      {program.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={program.href}
                      className="program-learn-more"
                    >
                      Explore Program
                      <ArrowRight size={18} />
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* LEARNING MODEL */}
      <section className="program-learning-model">
        <div className="container">

          <div className="learning-model-box">

            <div className="learning-model-text">

              <div className="section-eyebrow">
                <span></span>
                OUR LEARNING MODEL
              </div>

              <h2>
                From classroom concept
                <br />
                <em>to working prototype.</em>
              </h2>

              <p>
                We don't want students to stop at understanding a concept.
                They use that concept to design, build, test and improve
                something that actually works.
              </p>

            </div>

            <div className="learning-flow">

              <div>
                <strong>01</strong>
                <span>Learn</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Understand</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Design</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Build</span>
              </div>

              <div>
                <strong>05</strong>
                <span>Test</span>
              </div>

              <div>
                <strong>06</strong>
                <span>Improve</span>
              </div>

              <div>
                <strong>07</strong>
                <span>Demonstrate</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="programs-cta">
        <div className="container">

          <div className="programs-cta-box">

            <div>
              <div className="section-eyebrow">
                <span></span>
                FOR SCHOOLS & INSTITUTIONS
              </div>

              <h2>
                Want practical learning
                <br />
                <em>at your institution?</em>
              </h2>

              <p>
                We can design workshops, bootcamps and long-term programs
                according to your students, curriculum and infrastructure.
              </p>
            </div>

            <Link href="/#contact" className="primary-button">
              Discuss a Program
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">

          <div className="footer-inner">

            <Link href="/" className="logo">
              SHIKSHAM<span>DEHI</span>
            </Link>

            <p>
              Learn it. Build it. Make it real.
            </p>

            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/#schools">For Schools</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </div>

          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} ShikshamDehi. All rights reserved.
            </span>

            <span>
              Practical Learning • STEM • Innovation
            </span>
          </div>

        </div>
      </footer>

    </main>
  );
}
