"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = ["Benefits", "Integrate", "Pricing", "FAQ's", "Sweep"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <Image src="/images/home/logo.svg" alt="Logo" width={198} height={26} priority />
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <Link key={item} href="#" className="nav-item">{item}</Link>
          ))}
        </nav>

        {/* Download Button — desktop */}
        <a href="#" className="download-btn">
          <span className="download-icon-wrap">
            <Image src="/images/home/icon.svg" alt="App icon" width={29} height={29} />
          </span>
          <span className="download-text">Download App</span>
        </a>

        {/* Hamburger — mobile */}
        <button className="header-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`ham-line ${open ? "ham-line--open-1" : ""}`} />
          <span className={`ham-line ${open ? "ham-line--open-2" : ""}`} />
          <span className={`ham-line ${open ? "ham-line--open-3" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="header-mobile-menu">
          {navItems.map((item) => (
            <Link key={item} href="#" className="mobile-nav-item" onClick={() => setOpen(false)}>{item}</Link>
          ))}
          <a href="#" className="download-btn mobile-download-btn">
            <span className="download-icon-wrap">
              <Image src="/images/home/icon.svg" alt="App icon" width={29} height={29} />
            </span>
            <span className="download-text">Download App</span>
          </a>
        </div>
      )}
    </header>
  );
}
