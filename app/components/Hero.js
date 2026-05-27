"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./Header";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="hero-section">
      <Header />
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="hero-bg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/images/home/hero.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(228.68deg, rgba(229, 233, 255, 0.8) 19.15%, rgba(255, 255, 255, 0.56) 49.44%)", opacity: 0.7, zIndex: 1 }} />

      {/* Top content box */}
      <div className="hero-top-box">
        <div className="hero-label-wrap">
          <Image src="/images/home/heroicon.svg" alt="" width={12} height={12} />
          <span className="hero-label">Achieve more with your body data</span>
        </div>
        <h1 className="hero-heading">
          <span className="desktop-heading">
            Turn Your Body Data Into
            <br />
            Better Decisions
          </span>
          <span className="mobile-heading">
            Turn Your Body
            <br />
            Data Into Better
            <br />
            Decisions
          </span>
        </h1>
      </div>

      {/* Bottom image */}
      <div className="hero-bottom-img">
        <div className="hero-img-default">
          <Image
            src="/images/home/hero1.webp"
            alt="Hero dashboard"
            width={1367}
            height={936}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
        <div className="hero-img-mobile">
          <Image
            src="/images/home/hero2.webp"
            alt="Hero dashboard"
            width={1367}
            height={936}
            style={{ width: "100%", height: "100%", display: "block", objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
