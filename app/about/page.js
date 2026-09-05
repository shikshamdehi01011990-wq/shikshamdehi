import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
  Wrench,
  Rocket,
  School,
} from "lucide-react";

const philosophy = [
  {
    number: "01",
    title: "Learn",
    text: "Understand the concept and why it matters.",
  },
  {
    number: "02",
    title: "Design",
    text: "Think about the problem and plan a solution.",
  },
  {
    number: "03",
    title: "Build",
    text: "Turn an idea into a physical working project.",
  },
  {
    number: "04",
    title: "Test",
    text: "Check what works, what doesn't and why.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Modify the design and make the solution better.",
  },
  {
    number: "06",
    title: "Demonstrate",
    text: "Present the project and explain what was learned.",
  },
];

const values = [
  {
    icon: Wrench,
    title: "Learning by Doing",
    text: "Students understand concepts better when they get the opportunity to apply them through hands-on activities.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity First",
    text: "We encourage students to ask questions, experiment with ideas and explore how things work.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    text: "Projects are designed to encourage students to identify problems, think of solutions and improve their designs.",
  },
  {
    icon: Users,
    title: "Team Learning",
    text: "Students learn to collaborate, divide responsibilities, share ideas and build together.",
  },
];

const areas = [
  "STEM Education",
  "Robotics",
  "Arduino & Electronics",
  "3D Design & Printing",
  "Mechanical Systems",
  "Design Thinking",
  "IoT & Smart Projects",
  "Innovation Programs",
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* NAVBAR */}
      <nav className="about-nav">
        <div className="about-container about-nav-inner">

          <Link href="/" className="about-logo">
            Shiksham<span>Dehi</span>
          </Link>

          <div className="about-nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/schools">For Schools</Link>
            <Link href="/about" className="active">
              About
            </Link>
          </div>

          <Link href="/contact" className="about-nav-btn">
            Enquire Now
            <ArrowRight size={16} />
          </Link>

        </div>
      </nav>

      {/* HERO */}
      <section className="about-hero">

        <div className="about-container">

          <div className="about-eyebrow">
            <Lightbulb size={16} />
            ABOUT SHIKSHAMDEHI
          </div>

          <h1>
            Education should not stop
            <span> at the classroom.</span>
          </h1>

          <p className="about-hero-text">
            ShikshamDehi is built around a simple idea: students learn
            differently when they get the opportunity to build something
            themselves.
          </p>

          <div className="about-hero-line">
            <span></span>
            <p>
              We turn classroom concepts into small, practical and
              real-world projects.
            </p>
          </div>

        </div>

      </section>

      {/* OUR STORY */}
      <section className="about-section story-section">

        <div className="about-container story-grid">

          <div className="about-section-heading">

            <div className="about-label">
              OUR APPROACH
            </div>

            <h2>
              From knowing
              <span> to doing.</span>
            </h2>

          </div>

          <div className="story-content">

            <p className="story-large">
              A student may know how a circuit works, what a sensor does or
              what a bridge structure is. But the real learning begins when
              they try to use that knowledge to build something.
            </p>

            <p>
              That's where ShikshamDehi comes in. We create practical
              learning experiences around projects, experiments and
              challenges so students can connect what they learn in class
              with what happens in the real world.
            </p>

            <p>
              The objective is not simply to complete a project. The
              objective is to develop the habit of thinking, building,
              testing, solving and improving.
            </p>

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="about-section philosophy-section">

        <div className="about-container">

          <div className="about-section-heading centered">

            <div className="about-label">
              OUR LEARNING PHILOSOPHY
            </div>

            <h2>
              Learn it.
              <span> Build it. Make it real.</span>
            </h2>

            <p>
              Every practical learning experience follows a simple journey.
            </p>

          </div>

          <div className="philosophy-grid">

            {philosophy.map((item) => (
              <div className="philosophy-card" key={item.number}>

                <span className="philosophy-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* REAL PROJECTS */}
      <section className="about-section project-belief-section">

        <div className="about-container project-belief-grid">

          <div className="project-belief-image">

            <img
              src="/images/shikshamdehi-group-projects.png"
              alt="Students working together on a practical project"
            />

            <div className="project-image-tag">
              <Wrench size={17} />
              <span>BUILD • TEST • IMPROVE</span>
            </div>

          </div>

          <div className="project-belief-content">

            <div className="about-label">
              WHY PROJECTS?
            </div>

            <h2>
              Because a working project
              <span> changes the way students learn.</span>
            </h2>

            <p>
              A project gives students a reason to use what they have
              learned. They have to make decisions, deal with mistakes,
              troubleshoot problems and find better solutions.
            </p>

            <div className="belief-list">

              <div>
                <CheckCircle2 size={18} />
                <span>Concepts become tangible</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Mistakes become part of learning</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Students learn through experimentation</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Ideas turn into working prototypes</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Students gain confidence by demonstrating their work</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="about-section values-section">

        <div className="about-container">

          <div className="about-section-heading centered">

            <div className="about-label">
              WHAT WE BELIEVE
            </div>

            <h2>
              Practical learning
              <span> needs the right mindset.</span>
            </h2>

          </div>

          <div className="values-grid">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div className="value-card" key={value.title}>

                  <div className="value-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* FOR STUDENTS */}
      <section className="about-section student-section">

        <div className="about-container student-grid">

          <div>

            <div className="about-label">
              THE STUDENT JOURNEY
            </div>

            <h2>
              From consumer
              <span> to maker.</span>
            </h2>

            <p>
              Technology surrounds students every day. Our goal is to help
              them move from simply using technology to understanding how
              things work and eventually creating something of their own.
            </p>

          </div>

          <div className="student-journey">

            <div className="journey-box">
              <span>01</span>
              <strong>Consumer</strong>
              <small>Uses technology</small>
            </div>

            <ArrowRight className="journey-arrow" size={20} />

            <div className="journey-box">
              <span>02</span>
              <strong>Explorer</strong>
              <small>Understands technology</small>
            </div>

            <ArrowRight className="journey-arrow" size={20} />

            <div className="journey-box">
              <span>03</span>
              <strong>Maker</strong>
              <small>Builds with technology</small>
            </div>

            <ArrowRight className="journey-arrow" size={20} />

            <div className="journey-box">
              <span>04</span>
              <strong>Problem Solver</strong>
              <small>Creates solutions</small>
            </div>

          </div>

        </div>

      </section>

      {/* LEARNING AREAS */}
      <section className="about-section areas-section">

        <div className="about-container">

          <div className="about-section-heading centered">

            <div className="about-label">
              OUR LEARNING AREAS
            </div>

            <h2>
              Explore.
              <span> Build. Innovate.</span>
            </h2>

          </div>

          <div className="areas-grid">

            {areas.map((area, index) => (
              <div className="area-item" key={area}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{area}</strong>

                <ArrowRight size={17} />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SCHOOLS */}
      <section className="about-section school-belief-section">

        <div className="about-container school-belief-card">

          <div className="school-belief-icon">
            <School size={28} />
          </div>

          <div>

            <div className="about-label">
              FOR SCHOOLS
            </div>

            <h2>
              Building a culture of
              <span> practical learning.</span>
            </h2>

            <p>
              We work with schools to bring structured hands-on learning
              through workshops, bootcamps, project-based programs, teacher
              training and innovation activities.
            </p>

          </div>

          <Link href="/schools" className="school-belief-btn">
            Explore School Programs
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

      {/* MISSION */}
      <section className="about-section mission-section">

        <div className="about-container mission-grid">

          <div>
            <div className="about-label">
              OUR MISSION
            </div>

            <h2>
              Make practical learning
              <span> a natural part of education.</span>
            </h2>
          </div>

          <div className="mission-text">

            <p>
              We want students to experience education as something they
              can interact with, question and create with — not something
              they only read about.
            </p>

            <p>
              By combining concepts, hands-on activities, technology,
              projects and problem solving, we aim to help students develop
              skills that remain useful beyond the classroom.
            </p>

            <div className="mission-statement">
              <Rocket size={22} />
              <strong>
                Learn. Build. Solve. Improve.
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="about-container about-cta-inner">

          <div>

            <div className="about-label">
              LET'S BUILD THE FUTURE
            </div>

            <h2>
              Don't just teach students.
              <span> Give them something to build.</span>
            </h2>

            <p>
              Explore our programs and project-based learning experiences
              for students, schools and educators.
            </p>

          </div>

          <div className="about-cta-actions">

            <Link href="/programs" className="about-primary-btn">
              Explore Programs
              <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="about-secondary-btn">
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="about-footer">

        <div className="about-container footer-top">

          <div>

            <Link href="/" className="about-logo">
              Shiksham<span>Dehi</span>
            </Link>

            <p>
              Practical learning through projects, technology and
              real-world problem solving.
            </p>

          </div>

          <div className="about-footer-links">

            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/schools">For Schools</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

          </div>

        </div>

        <div className="about-container footer-bottom">

          <span>
            © {new Date().getFullYear()} ShikshamDehi
          </span>

          <span>
            Learn. Build. Make it real.
          </span>

        </div>

      </footer>

    </main>
  );
}
