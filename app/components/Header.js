"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Benefits", href: "#benefits" },
  { label: "Integrate", href: "#integrate" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ's", href: "#faqs" },
  { label: "Sweep", href: "#sweep" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    const onScroll = () => {
      setScrolled((el.scrollTop || document.body.scrollTop) > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className={`header-wrapper${scrolled ? " header-wrapper--scrolled" : ""}`}>
      <div className={`header-inner${scrolled ? " header-inner--scrolled" : ""}`}>
        {/* Logo */}
        <div className={`header-logo${scrolled ? " header-logo--hidden" : ""}`}>
          <Image src="/images/home/logo.svg" alt="Logo" width={198} height={26} priority />
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <button key={item.label} className="nav-item" onClick={() => scrollTo(item.href.slice(1))}>{item.label}</button>
          ))}
        </nav>

        {/* Download Button — desktop */}
        <div className={`header-cta${scrolled ? " header-cta--hidden" : ""}`}>
          <a href="#" className="download-btn">
            <span className="download-icon-wrap">
              <Image src="/images/home/icon.svg" alt="App icon" width={29} height={29} />
            </span>
            <span className="download-text">Download App</span>
          </a>
        </div>

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
            <button key={item.label} className="mobile-nav-item" onClick={() => { scrollTo(item.href.slice(1)); setOpen(false); }}>{item.label}</button>
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
