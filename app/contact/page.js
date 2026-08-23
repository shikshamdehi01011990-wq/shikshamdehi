'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';

import styles from './contact.module.css';

const institutionTypes = [
  'School',
  'ATL / Maker Lab',
  'ITI',
  'Polytechnic',
  'College / University',
  'Training Institute',
  'Other',
];

const programs = [
  '3D Design & CAD',
  '3D Printing',
  'Arduino & Electronics',
  'Robotics & Automation',
  'STEM / Maker Program',
  'ATL Lab Program',
  'ITI / Polytechnic Training',
  'College Training',
  'Faculty / Teacher Training',
  'Custom Program',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={styles.page}>
      {/* NAV */}
      <header className={styles.nav}>
        <Link className={styles.brand} href="/">
          <span className={styles.mark}>SD</span>
          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        <Link className={styles.back} href="/">
          <ArrowLeft size={16} />
          Home
        </Link>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.eyebrow}>
          <span />
          LET&apos;S BUILD TOGETHER
        </div>

        <h1>
          Start your
          <br />
          <em>maker journey.</em>
        </h1>

        <p>
          Tell us what you want to build, learn or bring to your
          institution. We&apos;ll help you design the right technology
          training program.
        </p>
      </section>

      {/* CONTACT AREA */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          {/* LEFT */}
          <div className={styles.info}>
            <div className={styles.eyebrow}>
              REQUEST A PROGRAM
            </div>

            <h2>
              Let&apos;s talk about
              <br />
              <em>your requirements.</em>
            </h2>

            <p className={styles.lead}>
              Whether you are a school, ATL lab, ITI, polytechnic,
              college or training institute, we can create a program
              around your learners, facilities and goals.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MessageCircle size={19} />
                </div>

                <div>
                  <b>WhatsApp</b>
                  <span>Quick program discussion</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <Mail size={19} />
                </div>

                <div>
                  <b>Email</b>
                  <span>Training & partnership enquiries</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MapPin size={19} />
                </div>

                <div>
                  <b>Training</b>
                  <span>On-site & institution-based programs</span>
                </div>
              </div>
            </div>

            <div className={styles.experience}>
              <strong>16+</strong>
              <div>
                <b>Years of 3D Design & Printing Experience</b>
                <span>
                  Practical experience brought directly into education.
                </span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className={styles.formCard}>
            {!submitted ? (
              <>
                <div className={styles.formHeader}>
                  <span>TRAINING ENQUIRY</span>
                  <Send size={18} />
                </div>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <label>
                      Full Name
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label>
                      Institution Name
                      <input
                        type="text"
                        name="institution"
                        placeholder="School / College / Institute"
                        required
                      />
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      Institution Type
                      <select name="institutionType" required>
                        <option value="">
                          Select institution
                        </option>

                        {institutionTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      Program Interested In
                      <select name="program" required>
                        <option value="">
                          Select program
                        </option>

                        {programs.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      Phone / WhatsApp
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </label>

                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    City
                    <input
                      type="text"
                      name="city"
                      placeholder="Your city"
                    />
                  </label>

                  <label>
                    Tell us about your requirement
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Number of students, preferred training, duration, lab facilities, etc."
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className={styles.submit}
                  >
                    Send Training Enquiry
                    <ArrowRight size={17} />
                  </button>

                  <small className={styles.formNote}>
                    We&apos;ll use your details only to respond to your
                    enquiry.
                  </small>
                </form>
              </>
            ) : (
              <div className={styles.success}>
                <CheckCircle2 size={48} />

                <div className={styles.successTag}>
                  ENQUIRY RECEIVED
                </div>

                <h2>
                  Thank you for
                  <br />
                  <em>reaching out.</em>
                </h2>

                <p>
                  Your enquiry has been recorded on this page. The next
                  step is to connect this form to your preferred email,
                  WhatsApp or lead-management system.
                </p>

                <button
                  className={styles.submit}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                  <ArrowRight size={17} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className={styles.direct}>
        <div className={styles.directInner}>
          <div>
            <div className={styles.eyebrow}>
              DIRECT CONTACT
            </div>

            <h2>
              Prefer a quick
              <br />
              <em>conversation?</em>
            </h2>
          </div>

          <div className={styles.directLinks}>
            <a href="mailto:hello@shikshamdehi.com">
              <Mail size={18} />
              <span>
                <small>Email</small>
                hello@shikshamdehi.com
              </span>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              <span>
                <small>WhatsApp</small>
                Start a conversation
              </span>
            </a>

            <a href="tel:+919999999999">
              <Phone size={18} />
              <span>
                <small>Phone</small>
                Call ShikshamDehi
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/">
          Shiksham<span>Dehi</span>
        </Link>

        <span>Future skills. Real projects.</span>

        <small>© 2026 ShikshamDehi. All rights reserved.</small>
      </footer>
    </main>
  );
}
