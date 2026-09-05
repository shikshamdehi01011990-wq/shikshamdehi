"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Filter,
  Search,
} from "lucide-react";

const projects = [
  {
    slug: "smart-plant-monitor",
    title: "Smart Plant Monitor",
    category: "Arduino",
    age: "Classes 6–8",
    difficulty: "Beginner",
    duration: "2–3 Hours",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    description:
      "Build a sensor-based system that monitors soil conditions and helps understand how plants can be monitored using technology.",
  },
  {
    slug: "line-following-robot",
    title: "Line Following Robot",
    category: "Robotics",
    age: "Classes 6–10",
    difficulty: "Intermediate",
    duration: "4–6 Hours",
    image: "/images/shikshamdehi-robotics-projects.jpeg",
    description:
      "Design and program a robot that detects a path and follows it automatically using sensors and motors.",
  },
  {
    slug: "automatic-night-lamp",
    title: "Automatic Night Lamp",
    category: "Electronics",
    age: "Classes 3–6",
    difficulty: "Beginner",
    duration: "1–2 Hours",
    image: "/images/shikshamdehi-electronics-sessions.jpeg",
    description:
      "Understand light sensing and build a simple circuit that automatically responds to changing light conditions.",
  },
  {
    slug: "mini-weather-station",
    title: "Mini Weather Station",
    category: "IoT",
    age: "Classes 7–10",
    difficulty: "Intermediate",
    duration: "4–6 Hours",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    description:
      "Use sensors to collect environmental data and understand how real-world information can be measured.",
  },
  {
    slug: "smart-dustbin",
    title: "Smart Dustbin",
    category: "Arduino",
    age: "Classes 6–9",
    difficulty: "Beginner",
    duration: "3–4 Hours",
    image: "/images/shikshamdehiarduino-projects.jpeg",
    description:
      "Create an automatic dustbin using a distance sensor, servo motor and Arduino.",
  },
  {
    slug: "solar-tracker",
    title: "Solar Tracker",
    category: "Electronics",
    age: "Classes 8–12",
    difficulty: "Advanced",
    duration: "5–8 Hours",
    image: "/images/shikshamdehi-electronics-sessions.jpeg",
    description:
      "Build a mechanism that responds to light direction and explores the engineering behind solar tracking.",
  },
  {
    slug: "3d-printed-prototype",
    title: "3D Printed Prototype",
    category: "3D Printing",
    age: "Classes 7–12",
    difficulty: "Intermediate",
    duration: "4–6 Hours",
    image: "/images/shikshamdehi-3d-printing.jpeg",
    description:
      "Take an idea from digital 3D design to a physical prototype using 3D printing.",
  },
  {
    slug: "paper-bridge",
    title: "Engineering Paper Bridge",
    category: "Mechanical",
    age: "Classes 3–8",
    difficulty: "Beginner",
    duration: "1–2 Hours",
    image: "/images/shikshamdehi-mechanicals.jpeg",
    description:
      "Explore structure, load and strength by designing and testing a paper bridge.",
  },
];

const categories = [
  "All",
  "Arduino",
  "Robotics",
  "Electronics",
  "IoT",
  "3D Printing",
  "Mechanical",
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function ProjectsPage() {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      category === "All" || project.category === category;

    const difficultyMatch =
      difficulty === "All" || project.difficulty === difficulty;

    const searchMatch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.category.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && difficultyMatch && searchMatch;
  });

  return (
    <main className="projects-page">

      {/* NAVBAR */}

      <nav className="site-nav">
        <div className="nav-inner">

          <Link href="/" className="logo">
            SHIKSHAM<span>DEHI</span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects" className="active">
              Projects
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

      <section className="projects-hero">

        <div className="container">

          <div className="section-eyebrow">
            <span></span>
            PROJECT LIBRARY
          </div>

          <h1>
            Don't just learn.
            <br />
            <em>Build something.</em>
          </h1>

          <p>
            Explore hands-on STEM projects designed around real concepts,
            practical skills and working prototypes.
          </p>

          <div className="project-stats">

            <div>
              <strong>08+</strong>
              <span>Project Ideas</span>
            </div>

            <div>
              <strong>06</strong>
              <span>Technology Areas</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Difficulty Levels</span>
            </div>

          </div>

        </div>

      </section>

      {/* LIBRARY */}

      <section className="project-library">

        <div className="container">

          {/* FILTER BAR */}

          <div className="project-filter-bar">

            <div className="filter-title">
              <Filter size={18} />
              <span>Explore Projects</span>
            </div>

            <div className="project-search">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

          </div>

          {/* CATEGORY */}

          <div className="filter-section">

            <span className="filter-label">
              Technology
            </span>

            <div className="filter-buttons">

              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "selected" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* DIFFICULTY */}

          <div className="filter-section difficulty-filter">

            <span className="filter-label">
              Difficulty
            </span>

            <div className="filter-buttons">

              {difficulties.map((item) => (
                <button
                  key={item}
                  className={difficulty === item ? "selected" : ""}
                  onClick={() => setDifficulty(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* RESULTS */}

          <div className="project-results-head">

            <span>
              Showing <strong>{filteredProjects.length}</strong> projects
            </span>

            {(category !== "All" ||
              difficulty !== "All" ||
              search) && (
              <button
                onClick={() => {
                  setCategory("All");
                  setDifficulty("All");
                  setSearch("");
                }}
              >
                Clear filters
              </button>
            )}

          </div>

          {/* CARDS */}

          {filteredProjects.length > 0 ? (

            <div className="project-library-grid">

              {filteredProjects.map((project) => (

                <article
                  className="library-project-card"
                  key={project.slug}
                >

                  <div className="library-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <span>
                      {project.category}
                    </span>

                  </div>

                  <div className="library-project-content">

                    <div className="library-project-meta">

                      <span>
                        {project.age}
                      </span>

                      <span>
                        {project.difficulty}
                      </span>

                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-duration">
                      <Clock3 size={15} />
                      {project.duration}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="project-explore"
                    >
                      Explore Project
                      <ArrowRight size={17} />
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="no-projects">

              <Search size={30} />

              <h3>No projects found</h3>

              <p>
                Try changing your filters or search term.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* LEARNING PHILOSOPHY */}

      <section className="project-philosophy">

        <div className="container">

          <div className="philosophy-box">

            <div>

              <div className="section-eyebrow">
                <span></span>
                OUR APPROACH
              </div>

              <h2>
                Every project follows
                <br />
                <em>a maker journey.</em>
              </h2>

            </div>

            <div className="philosophy-flow">

              <div>
                <strong>01</strong>
                <span>Problem</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Concept</span>
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

      <section className="projects-cta">

        <div className="container">

          <div className="projects-cta-box">

            <div>

              <div className="section-eyebrow">
                <span></span>
                FOR SCHOOLS
              </div>

              <h2>
                Want students to build
                <br />
                <em>projects like these?</em>
              </h2>

              <p>
                Bring project-based STEM learning to your school through
                workshops, bootcamps or long-term programs.
              </p>

            </div>

            <Link
              href="/#contact"
              className="project-cta-button"
            >
              Talk to Us
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
              <Link href="/projects">Projects</Link>
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
