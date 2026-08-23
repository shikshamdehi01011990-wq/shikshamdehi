'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import styles from './contact.module.css';

const institutionTypes = [
  'School',
  'ATL / Maker Lab',
  'ITI',
  'Polytechnic',
  'College',
  'Training Institute',
  'Other',
];

const interests = [
  '3D Design & Printing',
  'Arduino & Electronics',
  'Robotics',
  'IoT',
  'AI & Future Skills',
  'STEM / Maker Programs',
  'Teacher Training',
  'Project / Exhibition Support',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    institution: formData.get('institution'),
    interest: formData.get('interest'),
    message: formData.get('message'),
  };

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbzgYWv8POVg2dC25ptIrzCrDl_QhLMOgJdP7-LSWfXZHSETMlBvNEd3BDuMTXxOymgC/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      }
    );

    form.reset();
    setSubmitted(true);

  } catch (error) {
    console.error('Form submission error:', error);

    alert(
      'Unable to send your enquiry. Please try again or contact us directly.'
    );
  }
}

  return (
    <main className={styles.page}>

      {/* NAV */}
      <header className={styles.nav}>
        <a href="/" className={styles.brand}>
          <span className={styles.mark}>SD</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </a>

        <a href="/" className={styles.back}>
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.eyebrow}>
          <span />
          LET&apos;S BUILD TOGETHER
        </div>

        <h1>
          Let&apos;s build the
          <br />
          <em>future.</em>
        </h1>

        <p>
          Tell us about your school, institution, training centre or
          project. We&apos;ll help you design the right STEM, 3D
          printing, robotics and future-skills program.
        </p>
      </section>

      {/* CONTACT */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>

          {/* LEFT */}
          <div className={styles.info}>

            <div className={styles.eyebrow}>
              <span />
              TALK TO SHIKSHAMDEHI
            </div>

            <h2>
              Tell us what
              <br />
              you want to <em>build.</em>
            </h2>

            <p className={styles.lead}>
              Whether you are a school, ATL lab, ITI, Polytechnic,
              college, educator or training institute, we can help
              create practical technology learning experiences.
            </p>

            <div className={styles.infoCards}>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <Mail size={19} />
                </div>

                <div>
                  <b>Email</b>
                  <span>hello@shikshamdehi.com</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <Phone size={19} />
                </div>

                <div>
                  <b>Phone / WhatsApp</b>
                  <span>Available for program enquiries</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MapPin size={19} />
                </div>

                <div>
                  <b>India</b>
                  <span>STEM & Maker Education Programs</span>
                </div>
              </div>

            </div>

            <div className={styles.experience}>
              <strong>16+</strong>

              <div>
                <b>Years of 3D Design Experience</b>
                <span>
                  Practical experience brought into
                  education, prototyping and maker learning.
                </span>
              </div>
            </div>

          </div>

          {/* FORM */}
          {!submitted ? (
            <div className={styles.formCard}>

              <div className={styles.formHeader}>
                <span>START A CONVERSATION</span>
                <Sparkles size={16} />
              </div>

              <form onSubmit={handleSubmit}>

                <div className={styles.formRow}>

                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </label>

                </div>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label>
                  Institution Type

                  <select name="institution" required>
                    <option value="">
                      Select institution type
                    </option>

                    {institutionTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  What are you interested in?

                  <select name="interest" required>
                    <option value="">
                      Select a program
                    </option>

                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Tell us about your requirement

                  <textarea
                    name="message"
                    placeholder="For example: We want to start a 3D printing and robotics program for Classes 8–10..."
                    required
                  />
                </label>

                <button type="submit" className={styles.submit}>
                  Send Enquiry
                  <Send size={17} />
                </button>

                <div className={styles.formNote}>
                  We&apos;ll get back to you regarding your requirement.
                </div>

              </form>
            </div>
          ) : (

            /* SUCCESS */
            <div className={styles.formCard}>
              <div className={styles.success}>

                <CheckCircle2 size={58} />

                <div className={styles.successTag}>
                  MESSAGE RECEIVED
                </div>

                <h2>
                  Let&apos;s make something
                  <br />
                  <em>real.</em>
                </h2>

                <p>
                  Thank you for contacting ShikshamDehi.
                  We&apos;ll review your requirement and get
                  back to you soon.
                </p>

                <button
                  className={styles.submit}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                  <ArrowRight size={17} />
                </button>

              </div>
            </div>

          )}

        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className={styles.direct}>

        <div className={styles.directInner}>

          <div>
            <div className={styles.eyebrow}>
              <span />
              PREFER A DIRECT CHAT?
            </div>

            <h2>
              Let&apos;s talk about
              <br />
              your <em>next project.</em>
            </h2>
          </div>

          <div className={styles.directLinks}>

            <a href="mailto:hello@shikshamdehi.com">
              <Mail size={20} />

              <span>
                <small>Email us</small>
                hello@shikshamdehi.com
              </span>

              <ArrowRight size={17} />
            </a>

            <a
              href="https://wa.me/918796289333"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} />

              <span>
                <small>WhatsApp</small>
                Start a conversation
              </span>

              <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>

        <a href="/">
          Shiksham<span>Dehi</span>
        </a>

        <small>
          Future skills. Real projects.
        </small>

        <small>
          © 2026 ShikshamDehi. All rights reserved.
        </small>

      </footer>

    </main>
  );
}
