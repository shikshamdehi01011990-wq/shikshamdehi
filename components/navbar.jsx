"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Programs",
      href: "/programs",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "For Schools",
      href: "/schools",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
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


        {/* NAVIGATION */}
        <nav className={`navLinks ${open ? "mobileOpen" : ""}`}>

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}


          {/* PARTNER BUTTON */}
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
          className="menuButton"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </header>
  );
}
