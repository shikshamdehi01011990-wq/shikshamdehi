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

import styles from './blog.module.css';

const articles = [
  {
    icon: Cuboid,
    category: '3D DESIGN',
    title: 'Why 3D Design Is Becoming an Essential Future Skill',
    excerpt:
      'Understand how 3D modelling and CAD help students develop design thinking, problem-solving and product development skills.',
    date: 'August 2026',
    read: '5 min read',
  },
  {
    icon: Printer,
    category: '3D PRINTING',
    title: 'From Digital Model to Physical Prototype',
    excerpt:
      'Explore the complete 3D printing workflow—from CAD and STL files to slicing, printing, testing and improving a prototype.',
    date: 'August 2026',
    read: '6 min read',
  },
  {
    icon: Bot,
    category: 'ROBOTICS',
    title: 'How Students Can Start Learning Robotics',
    excerpt:
      'A practical introduction to motors, sensors, controllers, Arduino and project-based robotics learning.',
    date: 'August 2026',
    read: '7 min read',
  },
  {
    icon: Cpu,
    category: 'ARDUINO + IOT',
    title: 'Arduino and IoT: Learning Electronics Through Projects',
    excerpt:
      'Learn how Arduino, sensors and connected devices can turn classroom concepts into practical technology projects.',
    date: 'August 2026',
    read: '6 min read',
  },
  {
    icon: Lightbulb,
    category: 'FUTURE SKILLS',
    title: 'Why Hands-on Learning Matters in Technology Education',
    excerpt:
      'Technology becomes easier to understand when students design, build, test and improve real projects.',
    date: 'August 2026',
    read: '5 min read',
  },
  {
    icon: Sparkles,
    category: 'EDUCATION',
    title: 'Building a Maker Mindset in Students',
    excerpt:
      'Discover how project-based learning can encourage curiosity, creativity, experimentation and innovation.',
    date: 'August 2026',
    read: '5 min read',
  },
];

const topics = [
  '3D Design',
  '3D Printing',
  'Arduino',
  'IoT',
  'Robotics',
  'AI',
  'STEM Education',
  'Maker Education',
  'Future Skills',
];

export default function BlogPage() {
  return (
    <main className={styles.page}>
      {/* NAVBAR */}
      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/" className={styles.back}>
          ← Back to Home
        </Link>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.eyebrow}>
          <span />
          SHIKSHAMDEHI JOURNAL
        </div>

        <h1>
          Ideas.
          <br />
          <em>Skills. Innovation.</em>
        </h1>

        <p>
          Explore practical insights about 3D design, 3D printing,
          robotics, Arduino, IoT, AI, maker education and future skills.
        </p>
      </section>

      {/* FEATURED ARTICLE */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionLabel}>FEATURED ARTICLE</div>

        <article className={styles.featured}>
          <div className={styles.featuredVisual}>
            <div className={styles.visualGrid} />

            <div className={styles.cube}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.visualTag}>
              3D DESIGN → PROTOTYPE
            </div>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.articleMeta}>
              <span>3D DESIGN</span>
              <i>•</i>
              <span>August 2026</span>
            </div>

            <h2>
              From Learning Technology
              <br />
              <em>to Building with Technology.</em>
            </h2>

            <p>
              The future of education is not only about understanding
              technology. It is about giving learners the confidence
              and practical skills to create with it.
            </p>

            <Link href="/contact" className={styles.textLink}>
              Start a Learning Journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </section>

      {/* ARTICLES */}
      <section className={styles.articlesSection}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              LATEST ARTICLES
            </div>

            <h2>
              Learn.
              <br />
              <em>Build. Explore.</em>
            </h2>
          </div>

          <p>
            Practical knowledge for students, educators and institutions
            working with emerging technologies.
          </p>
        </div>

        <div className={styles.articleGrid}>
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                className={styles.articleCard}
                key={article.title}
              >
                <div className={styles.articleIcon}>
                  <Icon size={22} />
                </div>

                <div className={styles.articleCategory}>
                  {article.category}
                </div>

                <h3>{article.title}</h3>

                <p>{article.excerpt}</p>

                <div className={styles.articleBottom}>
                  <span>
                    {article.date}
                    <b>•</b>
                    {article.read}
                  </span>

                  <Link href="/contact">
                    Discuss This Topic
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TOPICS */}
      <section className={styles.topics}>
        <div className={styles.topicsInner}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              EXPLORE TOPICS
            </div>

            <h2>
              Technology
              <br />
              <em>without the complexity.</em>
            </h2>
          </div>

          <div className={styles.topicList}>
            {topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <div className={styles.eyebrow}>
          <span />
          WANT TO BUILD SOMETHING?
        </div>

        <h2>
          Turn an idea into
          <br />
          <em>a real project.</em>
        </h2>

        <p>
          Talk to ShikshamDehi about workshops, institutional programs,
          project mentoring or technology training.
        </p>

        <div className={styles.ctaActions}>
          <Link href="/programs" className={styles.primary}>
            Explore Programs
            <ArrowRight size={18} />
          </Link>

          <Link href="/contact" className={styles.secondary}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/" className={styles.footerBrand}>
          <span className={styles.brandMark}>SD</span>

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
