'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  BookOpen,
  Cpu,
  Cuboid,
  Bot,
  Printer,
  Lightbulb,
} from 'lucide-react';

import styles from './blog.module.css';

const posts = [
  {
    category: '3D DESIGN',
    title: 'Why 3D Design Is Becoming an Essential Future Skill',
    excerpt:
      'Understand how 3D modelling and CAD help students develop design thinking, problem-solving and product development skills.',
    date: 'August 2026',
    readTime: '5 min read',
    icon: Cuboid,
  },
  {
    category: '3D PRINTING',
    title: 'From Digital Model to Physical Prototype',
    excerpt:
      'Explore the complete 3D printing workflow—from CAD and STL files to slicing, printing, testing and improving a prototype.',
    date: 'August 2026',
    readTime: '6 min read',
    icon: Printer,
  },
  {
    category: 'ROBOTICS',
    title: 'How Students Can Start Learning Robotics',
    excerpt:
      'A practical introduction to motors, sensors, controllers, Arduino and project-based robotics learning.',
    date: 'August 2026',
    readTime: '7 min read',
    icon: Bot,
  },
  {
    category: 'ARDUINO + IOT',
    title: 'Arduino and IoT: Learning Electronics Through Projects',
    excerpt:
      'Learn how Arduino, sensors and connected devices can turn classroom concepts into practical technology projects.',
    date: 'August 2026',
    readTime: '6 min read',
    icon: Cpu,
  },
  {
    category: 'FUTURE SKILLS',
    title: 'Why Hands-on Learning Matters in Technology Education',
    excerpt:
      'Technology becomes easier to understand when students design, build, test and improve real projects.',
    date: 'August 2026',
    readTime: '5 min read',
    icon: Lightbulb,
  },
  {
    category: 'EDUCATION',
    title: 'Building a Maker Mindset in Students',
    excerpt:
      'Discover how project-based learning can encourage curiosity, creativity, experimentation and innovation.',
    date: 'August 2026',
    readTime: '5 min read',
    icon: BookOpen,
  },
];

export default function BlogPage() {
  return (
    <main className={styles.page}>
      {/* ================= NAVBAR ================= */}

      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
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
          Explore practical insights about 3D design, 3D printing,
          robotics, Arduino, IoT, AI, maker education and future skills.
        </p>
      </section>

      {/* ================= FEATURED ================= */}

      <section className={styles.featuredSection}>
        <div className={styles.sectionLabel}>
          FEATURED ARTICLE
        </div>

        <article className={styles.featured}>
          <div className={styles.featuredVisual}>
            <div className={styles.featuredIcon}>
              <Cuboid size={58} />
            </div>

            <span>3D DESIGN → PROTOTYPE</span>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.postMeta}>
              <span>3D DESIGN</span>

              <i />

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

            <Link href="/contact" className={styles.readMore}>
              Start a Learning Journey
              <ArrowRight size={17} />
            </Link>
          </div>
        </article>
      </section>

      {/* ================= BLOG GRID ================= */}

      <section className={styles.blogSection}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>
              LATEST ARTICLES
            </div>

            <h2>
              Learn.
              <br />
              <em>Build. Explore.</em>
            </h2>
          </div>

          <p>
            Practical knowledge for students, educators and
            institutions working with emerging technologies.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((post) => {
            const Icon = post.icon;

            return (
              <article
                className={styles.card}
                key={post.title}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <Icon size={23} />
                  </div>

                  <span>{post.category}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <div className={styles.cardMeta}>
                  <span>
                    <CalendarDays size={14} />
                    {post.date}
                  </span>

                  <span>
                    <Clock3 size={14} />
                    {post.readTime}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className={styles.cardLink}
                >
                  Discuss This Topic
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= TOPICS ================= */}

      <section className={styles.topics}>
        <div className={styles.topicsInner}>
          <div>
            <div className={styles.eyebrow}>
              EXPLORE TOPICS
            </div>

            <h2>
              Technology
              <br />
              <em>without the complexity.</em>
            </h2>
          </div>

          <div className={styles.topicList}>
            <span>3D Design</span>
            <span>3D Printing</span>
            <span>Arduino</span>
            <span>IoT</span>
            <span>Robotics</span>
            <span>AI</span>
            <span>STEM Education</span>
            <span>Maker Education</span>
            <span>Future Skills</span>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <div className={styles.eyebrow}>
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
          <Link
            href="/programs"
            className={styles.primary}
          >
            Explore Programs
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className={styles.secondary}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </div>

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
