import Image from "next/image";
import Link from "next/link";

const navItems = ["Benefits", "Integrate", "Pricing", "FAQ's", "Sweep"];

export default function Header() {
  return (
    <header className="header-wrapper" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <Image
            src="/images/home/logo.svg"
            alt="Logo"
            width={198}
            height={26}
            priority
          />
        </div>

        {/* Nav Menu */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <Link key={item} href="#" className="nav-item">
              {item}
            </Link>
          ))}
        </nav>

        {/* Download App Button */}
        <a href="#" className="download-btn">
          <span className="download-icon-wrap">
            <Image
              src="/images/home/icon.svg"
              alt="App icon"
              width={29}
              height={29}
            />
          </span>
          <span className="download-text">Download App</span>
        </a>
      </div>
    </header>
  );
}
