"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setSubmitting(true);
    setError("");

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
        throw new Error(result.error || "Unable to submit enquiry.");
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">

      {/* NAVBAR */}
      <nav className="contact-nav">
        <div className="contact-container nav-inner">

          <a href="/" className="brand">
            <span className="brand-mark">S</span>
            <span>ShikshamDehi</span>
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/programs">Programs</a>
            <a href="/projects">Projects</a>
            <a href="/schools">For Schools</a>
            <a href="/about">About</a>
          </div>

          <a href="/contact" className="nav-cta">
            Enquire Now
            <ArrowRight size={16} />
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container">

          <div className="contact-hero-content">

            <span className="eyebrow">
              SCHOOL ENQUIRY
            </span>

            <h1>
              Let&apos;s Build
              <span> Practical Learning</span>
              Together.
            </h1>

            <p>
              Tell us about your school, students and learning requirements.
              Our team will help you design a practical STEM and project-based
              learning program.
            </p>

          </div>

        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-container contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Bring real-world
              projects into your classroom.
            </h2>

            <p className="contact-description">
              Whether you are a school principal, coordinator, ATL in-charge,
              teacher or institution representative, tell us what your
              students need.
            </p>


            {/* CONTACT CARDS */}
            <div className="contact-cards">

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>Chat with our team</strong>
                </div>
              </a>


              <a
                href="mailto:hello@shikshamdehi.com"
                className="contact-card"
              >
                <div className="contact-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>hello@shikshamdehi.com</strong>
                </div>
              </a>


              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>Available on enquiry</strong>
                </div>
              </div>


              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <span>Programs</span>
                  <strong>Schools & Institutions</strong>
                </div>
              </div>

            </div>


            {/* WHAT HAPPENS NEXT */}
            <div className="next-steps">

              <span className="section-label">
                WHAT HAPPENS NEXT
              </span>

              <div className="next-step">
                <span>01</span>
                <div>
                  <strong>You send your requirement</strong>
                  <p>
                    Tell us about your students, classes and goals.
                  </p>
                </div>
              </div>

              <div className="next-step">
                <span>02</span>
                <div>
                  <strong>We understand your needs</strong>
                  <p>
                    We discuss the right program format and project level.
                  </p>
                </div>
              </div>

              <div className="next-step">
                <span>03</span>
                <div>
                  <strong>We design the learning plan</strong>
                  <p>
                    Projects, activities, duration and outcomes are planned.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* FORM */}
          <div className="contact-form-wrapper">

            {!submitted ? (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">
                  <span className="section-label">
                    SCHOOL ENQUIRY
                  </span>

                  <h2>
                    Tell us what you&apos;re looking for.
                  </h2>

                  <p>
                    Fill in the details below and our team will get back to
                    you.
                  </p>
                </div>


                {/* NAME + DESIGNATION */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name <span>*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="designation">
                      Designation
                    </label>

                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      placeholder="Principal / Coordinator / Teacher"
                    />
                  </div>

                </div>


                {/* SCHOOL + CITY */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="school">
                      School Name <span>*</span>
                    </label>

                    <input
                      id="school"
                      name="school"
                      type="text"
                      placeholder="Enter school name"
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="city">
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter city"
                    />
                  </div>

                </div>


                {/* PHONE + EMAIL */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone / WhatsApp <span>*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="school@example.com"
                    />
                  </div>

                </div>


                {/* CLASSES + STUDENTS */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="classes">
                      Classes / Age Group
                    </label>

                    <select
                      id="classes"
                      name="classes"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select class range
                      </option>

                      <option value="Classes 3–5">
                        Classes 3–5
                      </option>

                      <option value="Classes 6–8">
                        Classes 6–8
                      </option>

                      <option value="Classes 9–12">
                        Classes 9–12
                      </option>

                      <option value="ITI / Polytechnic">
                        ITI / Polytechnic
                      </option>

                      <option value="College">
                        College
                      </option>

                      <option value="Mixed">
                        Mixed
                      </option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="students">
                      Approx. Students
                    </label>

                    <input
                      id="students"
                      name="students"
                      type="number"
                      min="1"
                      placeholder="e.g. 40"
                    />
                  </div>

                </div>


                {/* PROGRAM FORMAT */}
                <div className="form-group">
                  <label htmlFor="format">
                    Program Format
                  </label>

                  <select
                    id="format"
                    name="format"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select program format
                    </option>

                    <option value="1-Day Workshop">
                      1-Day Workshop
                    </option>

                    <option value="2-Day Bootcamp">
                      2-Day Bootcamp
                    </option>

                    <option value="3-Day Bootcamp">
                      3-Day Bootcamp
                    </option>

                    <option value="5-Day Bootcamp">
                      5-Day Bootcamp
                    </option>

                    <option value="Monthly Program">
                      Monthly Program
                    </option>

                    <option value="Annual School Program">
                      Annual School Program
                    </option>

                    <option value="Teacher Training">
                      Teacher Training
                    </option>

                    <option value="Custom">
                      Custom Requirement
                    </option>
                  </select>
                </div>


                {/* LEARNING AREA */}
                <div className="form-group">
                  <label htmlFor="learningAreas">
                    Learning Area
                  </label>

                  <select
                    id="learningAreas"
                    name="learningAreas"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select learning area
                    </option>

                    <option value="Robotics">
                      Robotics
                    </option>

                    <option value="Arduino & Electronics">
                      Arduino & Electronics
                    </option>

                    <option value="IoT">
                      IoT
                    </option>

                    <option value="3D Design & Printing">
                      3D Design & Printing
                    </option>

                    <option value="Mechanical Projects">
                      Mechanical Projects
                    </option>

                    <option value="Design Thinking">
                      Design Thinking
                    </option>

                    <option value="AI & Emerging Technology">
                      AI & Emerging Technology
                    </option>

                    <option value="Multiple Areas">
                      Multiple Areas
                    </option>
                  </select>
                </div>


                {/* MESSAGE */}
                <div className="form-group">
                  <label htmlFor="message">
                    Tell us about your requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your students, goals, available time, lab setup or any specific requirement..."
                  />
                </div>


                {/* ERROR */}
                {error && (
                  <div className="form-error">
                    {error}
                  </div>
                )}


                {/* SUBMIT */}
                <button
                  type="submit"
                  className="form-submit"
                  disabled={submitting}
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>


                <p className="form-note">
                  Your information will only be used to respond to your
                  enquiry.
                </p>

              </form>

            ) : (

              /* SUCCESS */
              <div className="success-box">

                <div className="success-icon">
                  <CheckCircle2 size={42} />
                </div>

                <span className="section-label">
                  ENQUIRY RECEIVED
                </span>

                <h2>
                  Thank you for reaching out!
                </h2>

                <p>
                  Your enquiry has been submitted successfully. Our team will
                  review your requirement and get in touch with you shortly.
                </p>

                <div className="success-actions">

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="success-whatsapp"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>

                  <a
                    href="/"
                    className="success-home"
                  >
                    Back to Home
                  </a>

                </div>

              </div>

            )}

          </div>

        </div>
      </section>


      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta">
        <div className="contact-container">

          <div>
            <span className="section-label">
              PRACTICAL EDUCATION
            </span>

            <h2>
              Don&apos;t just teach concepts.
              <br />
              Let students build them.
            </h2>
          </div>

          <a
            href="/programs"
            className="bottom-cta-button"
          >
            Explore Programs
            <ArrowRight size={18} />
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="contact-footer">
        <div className="contact-container footer-inner">

          <div>
            <a href="/" className="brand">
              <span className="brand-mark">S</span>
              <span>ShikshamDehi</span>
            </a>

            <p>
              Learn it. Build it. Make it real.
            </p>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/programs">Programs</a>
            <a href="/projects">Projects</a>
            <a href="/schools">For Schools</a>
            <a href="/about">About</a>
          </div>

        </div>
      </footer>

    </main>
  );
}
