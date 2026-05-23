"use client";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <header className="header-wrapper">
      <div className="header-inner" style={scrolled ? {
        maxWidth: "fit-content",
        padding: "12px 32px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        justifyContent: "center",
      } : {
        border: "1px solid transparent",
        borderRadius: "0px",
      }}>
        {/* Logo */}
        {!scrolled && <div className="header-logo">
          <Image src="/images/home/logo.svg" alt="Logo" width={198} height={26} priority />
        </div>}

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-item">{item.label}</Link>
          ))}
        </nav>

        {/* Download Button — desktop */}
        {!scrolled && <a href="#" className="download-btn" style={scrolled ? { paddingTop: "8px", paddingBottom: "8px" } : {}}>
          <span className="download-icon-wrap">
            <Image src="/images/home/icon.svg" alt="App icon" width={29} height={29} />
          </span>
          <span className="download-text">Download App</span>
        </a>}

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
            <Link key={item.label} href={item.href} className="mobile-nav-item" onClick={() => setOpen(false)}>{item.label}</Link>
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
