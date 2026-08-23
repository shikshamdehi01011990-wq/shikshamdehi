```jsx
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
  Clock3,
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
    slug: '3d-design-future-skill',
  },
  {
    icon: Printer,
    category: '3D PRINTING',
    title: 'From Digital Model to Physical Prototype',
    excerpt:
      'Explore the complete workflow from CAD and STL files to slicing, printing, testing and improving a real prototype.',
    date: 'August 2026',
    read: '6 min read',
    slug: 'digital-model-to-physical-prototype',
  },
  {
    icon: Bot,
    category: 'ROBOTICS',
    title: 'How Students Can Start Learning Robotics',
    excerpt:
      'A practical introduction to motors, sensors, controllers, Arduino and project-based robotics learning.',
    date: 'August 2026',
    read: '7 min read',
    slug: 'students-learning-robotics',
  },
  {
    icon: Cpu,
    category: 'ARDUINO + IOT',
    title: 'Arduino and IoT: Learning Electronics Through Projects',
    excerpt:
      'Learn how Arduino, sensors and connected devices can turn classroom concepts into practical technology projects.',
    date: 'August 2026',
    read: '6 min read',
    slug: 'arduino-iot-project-learning',
  },
  {
    icon: Lightbulb,
    category: 'FUTURE SKILLS',
    title: 'Why Hands-on Learning Matters in Technology Education',
    excerpt:
      'Technology becomes easier to understand when students design, build, test and improve real projects.',
    date: 'August 2026',
    read: '5 min read',
    slug: 'hands-on-technology-learning',
  },
  {
    icon: Sparkles,
    category: 'EDUCATION',
    title: 'Building a Maker Mindset in Students',
    excerpt:
      'Discover how project-based learning can encourage curiosity, creativity, experimentation and innovation.',
    date: 'August 2026',
    read: '5 min read',
    slug: 'building-maker-mindset',
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
      {/* ================= NAVBAR ================= */}

      <header className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="ShikshamDehi Home">
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <nav className={styles.navLinks} aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/" className={styles.back}>
          ← Back to Home
        </Link>
      </header>

      {/* ================= HERO ================= */}

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
          Practical insights about 3D design, 3D printing, robotics,
          Arduino, IoT, AI, STEM education and the future of learning.
        </p>

        <div className={styles.heroTopics}>
          <span>3D</span>
          <span>ROBOTICS</span>
          <span>IoT</span>
          <span>AI</span>
          <span>STEM</span>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}

      <section className={styles.featuredSection}>
        <div className={styles.sectionLabel}>
          FEATURED ARTICLE
        </div>

        <article className={styles.featured}>
          <div className={styles.featuredVisual}>
            <div className={styles.visualGrid} />

            <div className={styles.cube}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.visualRing} />

            <div className={styles.visualTag}>
              3D DESIGN → PROTOTYPE
            </div>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.articleMeta}>
              <span>3D DESIGN</span>
              <i>•</i>
              <span>August 2026</span>
              <i>•</i>
              <span>6 min read</span>
            </div>

            <h2>
              From Learning Technology
              <br />
              <em>to Building with Technology.</em>
            </h2>

            <p>
              The future of education is not only about understanding
              technology. It is about giving learners the confidence,
              curiosity and practical skills to create with it.
            </p>

            <Link
              href="/blog/3d-design-future-skill"
              className={styles.textLink}
            >
              Read Featured Article
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </section>

      {/* ================= LATEST ARTICLES ================= */}

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
                key={article.slug}
              >
                <div className={styles.articleTop}>
                  <div className={styles.articleIcon}>
                    <Icon size={22} />
                  </div>

                  <span className={styles.articleNumber}>
                    {String(
                      articles.indexOf(article) + 1
                    ).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.articleCategory}>
                  {article.category}
                </div>

                <h3>{article.title}</h3>

                <p>{article.excerpt}</p>

                <div className={styles.articleBottom}>
                  <span className={styles.articleInfo}>
                    <span>{article.date}</span>
                    <b>•</b>
                    <span className={styles.readTime}>
                      <Clock3 size={12} />
                      {article.read}
                    </span>
                  </span>

                  <Link
                    href={`/blog/${article.slug}`}
                    className={styles.articleLink}
                    aria-label={`Read ${article.title}`}
                  >
                    Read
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= TOPICS ================= */}

      <section className={styles.topics}>
        <div className={styles.topicsInner}>
          <div className={styles.topicsCopy}>
            <div className={styles.eyebrow}>
              <span />
              EXPLORE TOPICS
            </div>

            <h2>
              Technology
              <br />
              <em>without the complexity.</em>
            </h2>

            <p>
              Start with a topic, understand the fundamentals and
              gradually move towards building real projects.
            </p>
          </div>

          <div className={styles.topicList}>
            {topics.map((topic, index) => (
              <span key={topic}>
                <small>
                  {String(index + 1).padStart(2, '0')}
                </small>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

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
          Talk to ShikshamDehi about workshops, institutional
          programs, project mentoring or technology training.
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

      {/* ================= FOOTER ================= */}

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

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
```
