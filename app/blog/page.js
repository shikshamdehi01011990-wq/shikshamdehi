'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Cpu,
  Cuboid,
  Lightbulb,
  Printer,
  Sparkles,
} from 'lucide-react';

const posts = [
  {
    icon: Cuboid,
    category: '3D DESIGN',
    title: 'What is 3D Design and Why Should Students Learn It?',
    text: 'Understand how 3D modelling helps students turn ideas into digital products and real-world prototypes.',
    date: 'Future Skills',
  },
  {
    icon: Printer,
    category: '3D PRINTING',
    title: '3D Printing for Schools: From Idea to Prototype',
    text: 'Learn how students can use 3D printing to design, test and improve their own projects.',
    date: 'Maker Education',
  },
  {
    icon: Cpu,
    category: 'ARDUINO & IoT',
    title: 'Arduino Projects Every Student Should Try',
    text: 'Explore practical Arduino and IoT projects that make electronics and programming easier to understand.',
    date: 'Electronics',
  },
  {
    icon: Bot,
    category: 'ROBOTICS',
    title: 'How Robotics Builds Problem-Solving Skills',
    text: 'Robotics combines coding, electronics, mechanics and creativity into one powerful learning experience.',
    date: 'Robotics',
  },
  {
    icon: Sparkles,
    category: 'AI + HARDWARE',
    title: 'The Future of AI and Hardware Education',
    text: 'Discover how AI, sensors, robotics and smart devices are changing the way students learn technology.',
    date: 'Future Skills',
  },
  {
    icon: Lightbulb,
    category: 'INNOVATION',
    title: 'How to Turn a School Project into a Prototype',
    text: 'A practical approach to moving from an idea and sketch to a working physical model.',
    date: 'Innovation',
  },
];

export default function BlogPage() {
  return (
    <main className="blogPage">

      <header className="blogNav">
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

      <section className="blogHero">
        <div className="eyebrow">
          <span />
          SHIKSHAMDEHI JOURNAL
        </div>

        <h1>
          Learn.
          <br />
          <em>Build. Innovate.</em>
        </h1>

        <p>
          Ideas, guides and practical knowledge about 3D design,
          3D printing, robotics, Arduino, IoT, AI and future skills.
        </p>
      </section>

      <section className="blogGrid">
        {posts.map(({ icon: Icon, category, title, text, date }) => (
          <article className="blogCard" key={title}>

            <div className="blogIcon">
              <Icon size={25} />
            </div>

            <div className="blogCategory">
              {category}
            </div>

            <h2>{title}</h2>

            <p>{text}</p>

            <div className="blogBottom">
              <span>{date}</span>

              <Link href="/contact">
                Discuss With Us
                <ArrowRight size={15} />
              </Link>
            </div>

          </article>
        ))}
      </section>

      <section className="blogCTA">
        <div className="eyebrow">
          <span />
          HAVE AN IDEA?
        </div>

        <h2>
          Let&apos;s build something
          <br />
          <em>real.</em>
        </h2>

        <p>
          Have a school project, innovation idea or institutional
          training requirement?
        </p>

        <Link href="/contact" className="primary">
          Start a Conversation
          <ArrowRight size={18} />
        </Link>
      </section>

      <footer className="blogFooter">
        <span>ShikshamDehi</span>
        <small>
          STEM Education • Digital Manufacturing • Future Skills
        </small>
      </footer>

    </main>
  );
}
