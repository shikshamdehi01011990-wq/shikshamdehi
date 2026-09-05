'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Cpu,
  Cuboid,
  Menu,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const programs = [
  {
    icon: Cuboid,
    tag: 'CORE PROGRAM',
    title: '3D Design & Printing',
    text: 'From imagination to a real, printed product. Students learn CAD, slicing, printer basics and prototyping.',
  },
  {
    icon: Cpu,
    tag: 'ELECTRONICS',
    title: 'Arduino & Electronics',
    text: 'Learn circuits, sensors, inputs, outputs and coding through hands-on projects—not just theory.',
  },
  {
    icon: Bot,
    tag: 'ROBOTICS',
    title: 'Robotics & Automation',
    text: 'Build moving machines using motors, drivers, Arduino and sensors. Progress from simple bots to smart robots.',
  },
  {
    icon: Sparkles,
    tag: 'FUTURE SKILLS',
    title: 'AI, IoT & Innovation',
    text: 'Introduce students to connected devices, AI thinking and real-world problem solving.',
  },
];

const journey = ['Explore', 'Design', 'Build', 'Print', 'Program', 'Innovate'];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main id="top">
      <section className="hero">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroOverlay" aria-hidden="true" />

        <header className="nav">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brandMark">SD</span>
            <span>
              Shiksham<span>Dehi</span>
            </span>
          </a>

          <nav className={open ? 'mobileOpen' : ''}>
            <a href="#top" onClick={() => setOpen(false)}>Home</a>
            <a href="#programs" onClick={() => setOpen(false)}>Programs</a>
            <a href="#schools" onClick={() => setOpen(false)}>For Schools</a>
            <a href="#about" onClick={() => setOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>

          <a className="navCta" href="#contact" onClick={() => setOpen(false)}>
            Partner With Us <ArrowRight size={16} />
          </a>

          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </header>

        <div className="heroContent">
          <div className="heroCopy">
            <div className="eyebrow">
              <span />
              STEM EDUCATION • ROBOTICS • ATL • INNOVATION
            </div>

            <h1>
              Learn today.
              <br />
              <em>Build tomorrow.</em>
            </h1>

            <p className="heroText">
              Hands-on learning in <b>Robotics, Arduino, Coding, 3D Design,
              3D Printing, IoT and AI</b>—where students turn ideas into
              real-world projects.
            </p>

            <div className="heroAudience">
              Schools <span>•</span> ATL Labs <span>•</span> Students <span>•</span> Educators
            </div>

            <div className="heroActions">
              <a className="primary" href="#programs">
                Explore Programs <ArrowRight size={18} />
              </a>
              <a className="secondary heroSecondary" href="#contact">
                Partner With Us
              </a>
            </div>

            <div className="proof">
              <div>
                <strong>16+</strong>
                <span>Years of 3D<br />Experience</span>
              </div>
              <i />
              <div>
                <strong>100%</strong>
                <span>Hands-on<br />Learning</span>
              </div>
              <i />
              <div>
                <strong>7</strong>
                <span>Technology<br />Domains</span>
              </div>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <span>DESIGN</span>
          <b>→</b>
          <span>BUILD</span>
          <b>→</b>
          <span>TEST</span>
          <b>→</b>
          <span>IMPROVE</span>
          <b>→</b>
          <span>INNOVATE</span>
        </div>
      </section>

      <section className="section" id="programs">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">WHAT WE TEACH</div>
            <h2>
              Learning that ends
              <br />
              <em>with something real.</em>
            </h2>
          </div>
          <p>
            Designed for schools, students and educators. Every program is
            project-led, age-appropriate and built around practical outcomes.
          </p>
        </div>

        <div className="programGrid">
          {programs.map(({ icon: Icon, tag, title, text }) => (
            <article className="program" key={title}>
              <div className="icon"><Icon size={24} /></div>
              <div className="tag">{tag}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Explore <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="schoolBand" id="schools">
        <div className="section schoolInner">
          <div className="schoolCopy">
            <div className="eyebrow">FOR SCHOOLS & ATL LABS</div>
            <h2>
              Build a <em>maker culture</em> inside your school.
            </h2>
            <p>
              Don&apos;t just set up a lab. Make it active. ShikshamDehi can
              support your school with structured STEM programs, trainer-led
              sessions, projects, teacher training and innovation challenges.
            </p>

            <div className="checkGrid">
              <span>✓ Curriculum & lesson plans</span>
              <span>✓ 3D printing programs</span>
              <span>✓ Arduino & robotics</span>
              <span>✓ Teacher enablement</span>
              <span>✓ Project & exhibition support</span>
              <span>✓ Annual STEM programs</span>
            </div>

            <a className="primary" href="#contact">
              Discuss Your School <ArrowRight size={18} />
            </a>
          </div>

          <div className="schoolCard">
            <div className="cardLabel">CLASSES 6–8 / FOUNDATION</div>
            <h3>Maker Journey</h3>
            {journey.map((item, i) => (
              <div className="journey" key={item}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <b>{item}</b>
                <i style={{ width: `${45 + i * 10}%` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="about">
          <div>
            <div className="eyebrow">WHY SHIKSHAMDEHI</div>
            <h2>
              Experience that
              <br />
              <em>builds confidence.</em>
            </h2>
          </div>

          <div className="aboutText">
            <p>
              With 16 years of hands-on experience in 3D design and printing,
              ShikshamDehi brings practical maker knowledge into education.
            </p>
            <p>
              Our goal is simple: help students move from consuming technology
              to <strong>creating technology.</strong>
            </p>
            <div className="quote">
              “The best STEM lesson is the one where a student says:
              <b> Can I build one more?</b>”
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="ctaGlow" />
        <div className="eyebrow">LET&apos;S BUILD THE FUTURE</div>
        <h2>
          Ready to start a
          <br />
          <em>maker journey?</em>
        </h2>
        <p>
          Schools, parents, educators and students—tell us what you want to build.
        </p>
        <div className="heroActions">
          <a className="primary" href="mailto:hello@shikshamdehi.com">
            Start a Conversation <ArrowRight size={18} />
          </a>
          <a
            className="secondary light"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <footer>
        <div className="brand">
          <span className="brandMark">SD</span>
          <span>Shiksham<span>Dehi</span></span>
        </div>
        <p>Future skills. Real projects.</p>
        <small>© 2026 ShikshamDehi. All rights reserved.</small>
      </footer>
    </main>
  );
}
