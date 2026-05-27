"use client";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#integrate" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#process" },
      { label: "Download",href: "https://apps.apple.com/us/app/perfxt/id6758935129"  },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How it Works", href: "#process" },
      { label: "Download", href: "https://apps.apple.com/us/app/perfxt/id6758935129"  },
      { label: "Win G-Wagon", href: "https://perfxtapp.framer.ai/sweepstake" },
      { label: "FAQ", href: "#faqs" },
      
    ],
  },
  {
  title: "Company",
  links: [
    { label: "About", href: "#video-section" },
    { label: "Terms & Condition", href: "/terms&condition" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
},
  {
    title: "Connect",
    links: [
      { label: "Los Angeles County, California, USA", href: "#" },
      { label: "info@perfxt.online", href: "mailto:info@perfxt.online" },
    ],
  },
];

const socialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Perfxt/61585128770791/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/perfxt_official/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="4" stroke="#151515" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#151515"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="#151515" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    svg: (
      <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none">
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#151515"/>
      </svg>
    ),
  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-left">
          <Image
            src="/images/home/logo.svg"
            alt="Perfxt Logo"
            width={198}
            height={26}
          />
          <p className="footer-desc">
            The decision layer on top of the wearable data you already have.
            Train, focus, meet, and recover at the right time - every day.
          </p>
        </div>

        <div className="footer-right">
          {footerLinks.map((col) => (
            <div key={col.title} className="footer-col">
              <span className="footer-col-title">{col.title}</span>
              <div className="footer-col-links">
                {col.links.map((link) => (
  link.href.startsWith("http") ? (
    <a
      key={link.label}
      href={link.href}
      className="footer-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
    </a>
  ) : link.href.startsWith("mailto") ? (
    <a key={link.label} href={link.href} className="footer-link">
      {link.label}
    </a>
  ) : link.href.startsWith("/") ? (
    <Link key={link.label} href={link.href} className="footer-link">
      {link.label}
    </Link>
  ) : (
    <button
      key={link.label}
      className="footer-link"
      onClick={() => scrollTo(link.href.slice(1))}
    >
      {link.label}
    </button>
  )
))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          {socialIcons.map((icon) => (
            <a key={icon.name} href={icon.href} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label={icon.name}>
              {icon.svg}
            </a>
          ))}
        </div>
        <p className="footer-copy">
          © 2026 Perfxt · Made for people whose performance matters
        </p>
      </div>
    </footer>
  );
}
