'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

const faqs = [
  {
    category: 'GENERAL',
    question: 'What is ShikshamDehi?',
    answer:
      'ShikshamDehi is a future-skills education platform focused on practical technology learning through 3D design, 3D printing, Arduino, IoT, robotics, AI and project-based learning.',
  },
  {
    category: 'PROGRAMS',
    question: 'Who can join ShikshamDehi programs?',
    answer:
      'Our programs can be designed for school students, ATL Labs, ITI students, Polytechnic students, college students, educators and institutions.',
  },
  {
    category: '3D',
    question: 'Do you provide 3D design and CAD training?',
    answer:
      'Yes. Training can cover 3D modelling, CAD fundamentals, product design, prototyping and design-for-manufacturing concepts.',
  },
  {
    category: '3D PRINTING',
    question: 'Do you teach 3D printing?',
    answer:
      'Yes. Students can learn the complete workflow from preparing a 3D model and STL file to slicing, printer setup, printing and troubleshooting.',
  },
  {
    category: 'ROBOTICS',
    question: 'Do you provide robotics training?',
    answer:
      'Yes. Robotics programs can include motors, sensors, controllers, drivers, Arduino and practical robot-building projects.',
  },
  {
    category: 'INSTITUTIONS',
    question: 'Can schools or colleges request customised programs?',
    answer:
      'Yes. Programs can be customised according to student age, curriculum, technical level, available lab infrastructure and institutional objectives.',
  },
  {
    category: 'ATL',
    question: 'Do you work with ATL Labs?',
    answer:
      'Yes. Programs can include ATL lab activation, student training, project mentoring, robotics, electronics, 3D printing and innovation challenges.',
  },
  {
    category: 'WORKSHOPS',
    question: 'Do you conduct workshops and bootcamps?',
    answer:
      'Yes. Short-term workshops, bootcamps and hands-on technology sessions can be designed for institutions and student groups.',
  },
  {
    category: 'PROJECTS',
    question: 'Can students get help with their projects?',
    answer:
      'Yes. Project development support can help students move from an idea to design, prototype, testing and improvement.',
  },
  {
    category: 'CONTACT',
    question: 'How can an institution partner with ShikshamDehi?',
    answer:
      'You can contact us through the Contact page and share your institution type, requirements, student count and preferred training area.',
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <main className="faqPage">

      <header className="faqNav">
        <Link href="/" className="brand">
          <span className="brandMark">SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <Link href="/" className="back">
          ← Back to Home
        </Link>
      </header>

      <section className="faqHero">

        <div className="eyebrow">
          <span />
          FREQUENTLY ASKED QUESTIONS
        </div>

        <h1>
          Questions?
          <br />
          <em>We have answers.</em>
        </h1>

        <p>
          Find answers about our technology training,
          institutional programs, workshops and project-based learning.
        </p>

      </section>

      <section className="faqList">

        {faqs.map((faq, index) => (
          <div
            className={`faqItem ${
              active === index ? 'active' : ''
            }`}
            key={faq.question}
          >

            <button
              className="faqQuestion"
              onClick={() => toggle(index)}
              aria-expanded={active === index}
            >

              <div>
                <span className="faqCategory">
                  {faq.category}
                </span>

                <h2>{faq.question}</h2>
              </div>

              <span className="faqArrow">
                <ChevronDown size={20} />
              </span>

            </button>

            {active === index && (
              <div className="faqAnswer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>
        ))}

      </section>

      <section className="faqCTA">

        <div className="eyebrow">
          <span />
          STILL HAVE QUESTIONS?
        </div>

        <h2>
          Let&apos;s talk about
          <br />
          <em>your requirements.</em>
        </h2>

        <p>
          Tell us what you want to build, teach or learn.
        </p>

        <Link href="/contact" className="primary">
          Contact ShikshamDehi
          <ArrowRight size={18} />
        </Link>

      </section>

      <footer className="faqFooter">
        <span>ShikshamDehi</span>

        <small>
          STEM Education • Digital Manufacturing • Future Skills
        </small>
      </footer>

    </main>
  );
}
