"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  School,
  Users,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  setSubmitting(true);
  setError("");

  // Your form uses "domain" for Learning Areas.
  // Google Apps Script expects "learningAreas".
  data.learningAreas = data.domain || "";

  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.error || "Unable to submit enquiry."
      );
    }

    form.reset();
    setSubmitted(true);

  } catch (err) {
    console.error("Enquiry submission error:", err);

    setError(
      "Something went wrong while submitting your enquiry. Please try again or contact us directly on WhatsApp."
    );

  } finally {
    setSubmitting(false);
  }
}

  return (
    <main className="contact-page">

      {/* NAVBAR */}
      <nav className="contact-nav">
        <div className="contact-container contact-nav-inner">

          <Link href="/" className="contact-logo">
            Shiksham<span>Dehi</span>
          </Link>

          <div className="contact-nav-links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/schools">For Schools</Link>
            <Link href="/about">About</Link>
          </div>

          <Link href="/contact" className="contact-nav-btn">
            Enquire Now
            <ArrowRight size={16} />
          </Link>

        </div>
      </nav>

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-container contact-hero-grid">

          <div className="contact-hero-content">

            <div className="contact-eyebrow">
              <MessageCircle size={16} />
              SCHOOL ENQUIRY
            </div>

            <h1>
              Let's bring
              <span> practical learning</span>
              to your school.
            </h1>

            <p>
              Tell us about your school, students and learning goals.
              We'll help you explore the right practical learning program.
            </p>

            <div className="contact-quick-points">

              <div>
                <CheckCircle2 size={17} />
                <span>Hands-on student programs</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Project-based learning</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Teacher & school support</span>
              </div>

            </div>

          </div>

          <div className="contact-side-card">

            <div className="contact-side-icon">
              <School size={25} />
            </div>

            <h3>Planning a program for your school?</h3>

            <p>
              Whether you need a one-day workshop, bootcamp, monthly
              program or annual innovation initiative, tell us what you're
              looking for.
            </p>

            <div className="contact-side-divider"></div>

            <div className="contact-side-info">
              <Users size={18} />
              <div>
                <strong>For</strong>
                <span>Schools • Teachers • Coordinators</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FORM SECTION */}
      <section className="contact-section">

        <div className="contact-container contact-form-grid">

          {/* LEFT INFO */}
          <div className="contact-info">

            <div className="contact-label">
              TELL US ABOUT YOUR REQUIREMENT
            </div>

            <h2>
              Start with a
              <span> conversation.</span>
            </h2>

            <p>
              Share a few details and we'll understand your requirement
              before suggesting a suitable program.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <School size={19} />
                </div>

                <div>
                  <strong>School Programs</strong>
                  <span>
                    Workshops, bootcamps, monthly and annual programs
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Users size={19} />
                </div>

                <div>
                  <strong>Student Programs</strong>
                  <span>
                    Programs based on age, class and learning level
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <strong>Discuss Your Requirement</strong>
                  <span>
                    Tell us what you want students to learn and build
                  </span>
                </div>
              </div>

            </div>

            <div className="contact-direct">

              <span>Prefer to talk directly?</span>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>

              <a href="mailto:hello@shikshamdehi.com">
                <Mail size={17} />
                Email Us
              </a>

            </div>

          </div>

          {/* FORM */}
          <div className="contact-form-card">

            {submitted ? (

              <div className="contact-success">

                <div className="success-icon">
                  <CheckCircle2 size={34} />
                </div>

                <h2>Thank you!</h2>

                <p>
                  Your enquiry has been recorded on this page.
                  We'll connect with you regarding your school program.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="success-again-btn"
                >
                  Submit Another Enquiry
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                <div className="form-title">
                  <span>01</span>
                  <div>
                    <strong>School Details</strong>
                    <small>Tell us about your institution</small>
                  </div>
                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Your Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Designation
                    </label>

                    <select name="designation">
                      <option value="">Select designation</option>
                      <option>Principal</option>
                      <option>Vice Principal</option>
                      <option>School Coordinator</option>
                      <option>ATL In-charge</option>
                      <option>Teacher</option>
                      <option>School Management</option>
                      <option>Other</option>
                    </select>
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label>
                      School Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="school"
                      placeholder="Enter school name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      placeholder="Enter city"
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Phone / WhatsApp <span>*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="school@example.com"
                    />
                  </div>

                </div>

                <div className="form-divider"></div>

                <div className="form-title">
                  <span>02</span>
                  <div>
                    <strong>Program Requirement</strong>
                    <small>Help us understand what you need</small>
                  </div>
                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Classes / Age Group
                    </label>

                    <select name="classes">
                      <option value="">Select</option>
                      <option>Classes 3–5</option>
                      <option>Classes 6–8</option>
                      <option>Classes 9–12</option>
                      <option>ITI / Polytechnic</option>
                      <option>College Students</option>
                      <option>Multiple Classes</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Approx. Students
                    </label>

                    <select name="students">
                      <option value="">Select</option>
                      <option>Under 30</option>
                      <option>30–60</option>
                      <option>60–100</option>
                      <option>100–200</option>
                      <option>200+</option>
                    </select>
                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Program Format
                  </label>

                  <select name="format">
                    <option value="">Select preferred format</option>
                    <option>1-Day Practical Workshop</option>
                    <option>2-Day Bootcamp</option>
                    <option>3-Day Bootcamp</option>
                    <option>5-Day Bootcamp</option>
                    <option>Monthly School Program</option>
                    <option>Annual Innovation Program</option>
                    <option>Teacher Training</option>
                    <option>Not Sure — Need Guidance</option>
                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Learning Areas
                  </label>

                  <select name="domain">
                    <option value="">Select area</option>
                    <option>Robotics</option>
                    <option>Arduino & Electronics</option>
                    <option>3D Design & Printing</option>
                    <option>Mechanical Systems</option>
                    <option>Design Thinking</option>
                    <option>IoT & Smart Projects</option>
                    <option>STEM Experiments</option>
                    <option>Multiple Areas</option>
                    <option>Need Guidance</option>
                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Tell us about your requirement
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Example: We want a practical robotics workshop for Classes 6–8..."
                  ></textarea>

                </div>

                {error && (
                  <div className="form-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={submitting}
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit School Enquiry
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="form-note">
                  Your details will only be used to understand and respond
                  to your enquiry.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta">

        <div className="contact-container contact-bottom-inner">

          <div>
            <div className="contact-label">
              EXPLORE BEFORE YOU ENQUIRE
            </div>

            <h2>
              See what students can
              <span> actually build.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="contact-project-btn"
          >
            Explore Project Library
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="contact-footer">

        <div className="contact-container contact-footer-top">

          <div>

            <Link href="/" className="contact-logo">
              Shiksham<span>Dehi</span>
            </Link>

            <p>
              Practical learning through projects, technology and
              real-world problem solving.
            </p>

          </div>

          <div className="contact-footer-links">

            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/schools">For Schools</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

          </div>

        </div>

        <div className="contact-container contact-footer-bottom">

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
