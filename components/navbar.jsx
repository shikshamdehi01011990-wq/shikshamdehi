"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Projects", href: "/projects" },
    { label: "For Schools", href: "/schools" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navInner">

        {/* LOGO */}
        <Link
          href="/"
          className="logo"
          onClick={() => setOpen(false)}
        >
          <span className="logoMark">S</span>

          <span>
            Shiksham<span>Dehi</span>
          </span>
        </Link>

        {/* DESKTOP + MOBILE NAVIGATION */}
        <nav className={`navLinks ${open ? "mobileOpen" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="navButton"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="menuButton"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? (
            <span className="menuIcon">×</span>
          ) : (
            <span className="menuIcon">☰</span>
          )}
        </button>

      </div>
    </header>
  );
}
