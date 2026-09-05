"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  School,
  Settings,
  Users,
  Wrench,
  Rocket,
} from "lucide-react";

const formats = [
  {
    title: "1-Day Practical Workshop",
    text: "A focused hands-on session where students learn one concept and build a working mini project.",
    points: [
      "Concept introduction",
      "Hands-on activity",
      "Guided project building",
      "Testing & demonstration",
    ],
  },
  {
    title: "2–5 Day Bootcamp",
    text: "An intensive learning experience designed around a complete project-building journey.",
    points: [
      "Concept + skill building",
      "Team-based projects",
      "Testing & troubleshooting",
      "Final project demonstration",
    ],
  },
  {
    title: "Monthly School Program",
    text: "Regular practical-learning sessions that help students gradually develop maker and problem-solving skills.",
    points: [
      "Structured curriculum",
      "Regular projects",
      "Progress tracking",
      "Challenges & upgrades",
    ],
  },
  {
    title: "Annual Innovation Program",
    text: "A complete year-long practical learning journey for schools that want to build a strong maker culture.",
    points: [
      "Multiple technology domains",
      "Project library",
      "Teacher support",
      "Innovation Day / Exhibition",
    ],
  },
];

const services = [
  {
    icon: GraduationCap,
    title: "Student Training",
    text: "Hands-on sessions where students learn concepts by actually building and testing projects.",
  },
  {
    icon: Wrench,
    title: "Project-Based Learning",
    text: "Classroom concepts are converted into small, achievable real-world projects.",
  },
  {
    icon: Settings,
    title: "STEM & Technology Programs",
    text: "Robotics, electronics, Arduino, 3D design & printing, mechanical systems and more.",
  },
  {
    icon: Users,
    title: "Teacher Training",
    text: "Teachers can learn how to conduct practical activities, guide projects and create maker experiences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Programs",
    text: "Students identify problems, design solutions, build prototypes and improve them.",
  },
  {
    icon: Rocket,
    title: "Exhibition Support",
    text: "Support for project demonstrations, innovation days, competitions and school exhibitions.",
  },
];

const outcomes = [
  "Students understand concepts through practical application",
  "Students learn to design and build working prototypes",
  "Students develop problem-solving skills",
  "Students learn testing and troubleshooting",
  "Students work effectively in teams",
  "Students become more confident presenting their work",
  "Students learn to improve an existing design",
  "Students develop a maker and innovation mindset",
];

const domains = [
  "Robotics",
  "Arduino & Microcontrollers",
  "Electronics",
  "3D Design & Printing",
  "Mechanical Systems",
  "Design Thinking",
  "IoT & Smart Projects",
  "STEM Experiments",
];

export default function SchoolsPage() {
  return (
    <main className="schools-page">

      {/* NAVBAR */}
      <nav className="schools-nav">
        <div className="schools-container nav-inner">
          <Link href="/" className="school-logo">
            Shiksham<span>Dehi</span>
          </Link>

          <div className="school-nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/schools" className="active">
              For Schools
            </Link>
            <Link href="/about">About</Link>
          </div>

          <Link href="/contact" className="school-nav-btn">
            Enquire Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="schools-hero">
        <div className="schools-container schools-hero-grid">

          <div className="schools-hero-content">
            <div className="schools-eyebrow">
              <School size={16} />
              PRACTICAL LEARNING FOR SCHOOLS
            </div>

            <h1>
              Turn Classrooms Into
              <span> Learning Labs.</span>
            </h1>

            <p className="schools-hero-text">
              We help schools bring practical, project-based learning into
              the classroom — so students don't just learn concepts, they
              use them to build, test and demonstrate real working projects.
            </p>

            <div className="schools-hero-actions">
              <Link href="/contact" className="primary-school-btn">
                Discuss Your School Program
                <ArrowRight size={18} />
              </Link>

              <Link href="/programs" className="secondary-school-btn">
                Explore Programs
              </Link>
            </div>

            <div className="schools-hero-note">
              <CheckCircle2 size={17} />
              <span>Hands-on • Project-based • Student-focused</span>
            </div>
          </div>

          <div className="schools-hero-image">
            <img
              src="/images/shikshamdehi-practical-sessions.jpeg"
              alt="Students participating in practical STEM learning"
            />

            <div className="hero-floating-card">
              <div className="floating-icon">
                <Wrench size={19} />
              </div>

              <div>
                <strong>Learn by Building</strong>
                <small>Concept → Project → Prototype</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY PRACTICAL LEARNING */}
      <section className="schools-section practical-section">
        <div className="schools-container">

          <div className="section-heading centered">
            <div className="section-label">WHY PRACTICAL LEARNING?</div>

            <h2>
              Learning becomes powerful
              <span> when students make something.</span>
            </h2>

            <p>
              Instead of stopping at theory, students get opportunities to
              apply classroom concepts through experiments, projects and
              working prototypes.
            </p>
          </div>

          <div className="learning-flow">
            <div className="flow-item">
              <span>01</span>
              <strong>Learn</strong>
              <p>Understand the concept</p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>02</span>
              <strong>Design</strong>
              <p>Plan the solution</p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>03</span>
              <strong>Build</strong>
              <p>Create the prototype</p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>04</span>
              <strong>Test</strong>
              <p>Find what works</p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>05</span>
              <strong>Improve</strong>
              <p>Make it better</p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-item">
              <span>06</span>
              <strong>Demonstrate</strong>
              <p>Show what you built</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="schools-section services-section">
        <div className="schools-container">

          <div className="section-heading">
            <div className="section-label">WHAT WE PROVIDE</div>

            <h2>
              A practical learning ecosystem
              <span> for your school.</span>
            </h2>

            <p>
              Schools can choose individual workshops or build a long-term
              practical learning program around their students' needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="service-card" key={service.title}>
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROGRAM FORMATS */}
      <section className="schools-section formats-section">
        <div className="schools-container">

          <div className="section-heading centered">
            <div className="section-label">PROGRAM FORMATS</div>

            <h2>
              Choose the format that
              <span> fits your school.</span>
            </h2>

            <p>
              From a single practical workshop to a complete annual
              innovation program.
            </p>
          </div>

          <div className="formats-grid">
            {formats.map((format, index) => (
              <div className="format-card" key={format.title}>

                <div className="format-number">
                  0{index + 1}
                </div>

                <h3>{format.title}</h3>

                <p>{format.text}</p>

                <div className="format-points">
                  {format.points.map((point) => (
                    <div className="format-point" key={point}>
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="schools-section implementation-section">
        <div className="schools-container implementation-grid">

          <div className="implementation-image">
            <img
              src="/images/shikshamdehi-group-projects.png"
              alt="Students working together on a project"
            />
          </div>

          <div className="implementation-content">

            <div className="section-label">
              SCHOOL IMPLEMENTATION
            </div>

            <h2>
              From planning to
              <span> project demonstration.</span>
            </h2>

            <p className="implementation-intro">
              We structure practical sessions so schools can focus on
              student learning while the implementation remains organized
              and measurable.
            </p>

            <div className="implementation-steps">

              <div className="implementation-step">
                <span>01</span>
                <div>
                  <h3>Understand the Requirement</h3>
                  <p>
                    We understand the school's students, grade levels,
                    objectives and available infrastructure.
                  </p>
                </div>
              </div>

              <div className="implementation-step">
                <span>02</span>
                <div>
                  <h3>Select the Learning Program</h3>
                  <p>
                    Choose workshops, bootcamps or a structured long-term
                    program according to your requirement.
                  </p>
                </div>
              </div>

              <div className="implementation-step">
                <span>03</span>
                <div>
                  <h3>Students Learn & Build</h3>
                  <p>
                    Students work through concepts, activities and
                    project-building exercises.
                  </p>
                </div>
              </div>

              <div className="implementation-step">
                <span>04</span>
                <div>
                  <h3>Test, Improve & Demonstrate</h3>
                  <p>
                    Students test their projects, solve problems, improve
                    designs and demonstrate their final work.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* OUTCOMES */}
      <section className="schools-section outcomes-section">
        <div className="schools-container outcomes-grid">

          <div>
            <div className="section-label">STUDENT OUTCOMES</div>

            <h2>
              What students take
              <span> beyond the classroom.</span>
            </h2>

            <p>
              The goal is not simply to complete a project. It is to develop
              the ability to understand, create, test, solve and improve.
            </p>

            <div className="outcome-highlight">
              <Lightbulb size={22} />
              <div>
                <strong>From consumer to maker.</strong>
                <span>
                  Students start seeing technology as something they can
                  understand, modify and build.
                </span>
              </div>
            </div>
          </div>

          <div className="outcomes-list">
            {outcomes.map((outcome) => (
              <div className="outcome-item" key={outcome}>
                <CheckCircle2 size={19} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOMAINS */}
      <section className="schools-section domains-section">
        <div className="schools-container">

          <div className="section-heading centered">
            <div className="section-label">LEARNING DOMAINS</div>

            <h2>
              Explore technology
              <span> through projects.</span>
            </h2>
          </div>

          <div className="school-domains">
            {domains.map((domain, index) => (
              <div className="school-domain" key={domain}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{domain}</strong>
                <ArrowRight size={17} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TEACHER TRAINING */}
      <section className="schools-section teacher-section">
        <div className="schools-container teacher-card">

          <div className="teacher-icon">
            <Users size={28} />
          </div>

          <div className="teacher-content">
            <div className="section-label">
              TEACHER MAKER TRAINING
            </div>

            <h2>
              Empower teachers to
              <span> facilitate practical learning.</span>
            </h2>

            <p>
              Practical education becomes stronger when teachers are
              comfortable guiding activities, projects and student
              problem-solving.
            </p>

            <div className="teacher-points">
              <span>
                <CheckCircle2 size={16} />
                Activity facilitation
              </span>

              <span>
                <CheckCircle2 size={16} />
                Project guidance
              </span>

              <span>
                <CheckCircle2 size={16} />
                Troubleshooting
              </span>

              <span>
                <CheckCircle2 size={16} />
                Maker methodology
              </span>
            </div>
          </div>

          <Link href="/contact" className="teacher-btn">
            Talk to Us
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="schools-cta">
        <div className="schools-container schools-cta-inner">

          <div>
            <div className="section-label">START PRACTICAL LEARNING</div>

            <h2>
              Ready to build a stronger
              <span> practical learning culture?</span>
            </h2>

            <p>
              Tell us about your school, students and learning goals.
              We'll help you choose the right practical learning format.
            </p>
          </div>

          <Link href="/contact" className="cta-school-btn">
            Discuss Your School Program
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="schools-footer">
        <div className="schools-container footer-inner">

          <div>
            <Link href="/" className="school-logo">
              Shiksham<span>Dehi</span>
            </Link>

            <p>
              Practical learning through projects, technology and
              real-world problem solving.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/schools">For Schools</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>

        <div className="schools-container footer-bottom">
          <span>© {new Date().getFullYear()} ShikshamDehi</span>
          <span>Learn. Build. Make it real.</span>
        </div>
      </footer>

    </main>
  );
}
