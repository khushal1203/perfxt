"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    quote: "Now I know that if I train in the morning I do 50% less tasks during the day. Perfxt made me realise I should train in the evening.",
    avatar: "/images/home/rev1.png",
    name: "Samantha L.",
    role: "Startup Founder",
    stars: 3,
  },
  {
    quote: "Perfxt completely changed how I structure my week. I used to guess — now I know exactly when I perform best.",
    avatar: "/images/home/rev2.png",
    name: "James K.",
    role: "Creator",
    stars: 3,
  },
  {
    quote: "As a consultant juggling multiple clients, Perfxt helps me protect my deep work hours and stay consistent.",
    avatar: "/images/home/rev3.png",
    name: "Priya M.",
    role: "Consultant",
    stars: 3,
  },
  {
    quote: "I never realized how much my sleep was affecting my output. Perfxt connected the dots for me.",
    avatar: "/images/home/rev4.png",
    name: "Alex R.",
    role: "Athlete",
    stars: 3,
  },
  {
    quote: "Finally a tool that tells me when to work, not just what to do. Game changer for my productivity.",
    avatar: "/images/home/rev5.png",
    name: "Nina T.",
    role: "Designer",
    stars: 3,
  },
];

const images = [
  { src: "/images/home/rev1.png", top: 140, left: 0 },
  { src: "/images/home/rev2.png", top: 60,  left: 240 },
  { src: "/images/home/rev3.png", top: 0,   left: 480 },
  { src: "/images/home/rev4.png", top: 0,   left: 720 },
  { src: "/images/home/rev5.png", top: 60,  left: 960 },
  { src: "/images/home/rev6.png", top: 140, left: 1200 },
];

export default function Reviews() {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = reviews.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 480);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prev = () => setStart((p) => (p - 1 + total) % total);
  const next = () => setStart((p) => (p + 1) % total);

  const visible = [reviews[start % total], reviews[(start + 1) % total], reviews[(start + 2) % total]];

  return (
    <section className="reviews-section">
      <div className="reviews-images-wrapper">
        {images.map((img, i) => (
          <div
            key={i}
            className={`reviews-img-item reviews-img-${i + 1}`}
            style={isMobile ? {} : { top: img.top, left: `${(img.left / 1420) * 100}%` }}
          >
            <img src={img.src} alt={`review ${i + 1}`} width={220} height={220} />
          </div>
        ))}
      </div>

      <div className="reviews-text-box">
        <div className="reviews-text-top">
          <p className="reviews-label">What users are saying</p>
          <h2 className="reviews-heading">Trusted by thousands</h2>
        </div>
        <p className="reviews-subtext">
          Hear from people who&apos;ve transformed their weeks with Perfxt —
          founders, creators, consultants and athletes.
        </p>
      </div>

      {/* Mobile: arrows above all cards */}
      <div className="reviews-nav-mobile">
        <button className="reviews-nav-btn" onClick={prev} aria-label="Previous">
          <img src="/images/home/rev8.svg" alt="prev" width={32} height={32} />
        </button>
        <button className="reviews-nav-btn" onClick={next} aria-label="Next">
          <img src="/images/home/rev9.svg" alt="next" width={32} height={32} />
        </button>
      </div>

      <div className="reviews-cards-row">
        {visible.map((r, i) => (
          <div key={`${start}-${i}`} className={`reviews-card-wrapper${i === 1 ? " reviews-card-wrapper--mid" : ""}`}>
            {/* Desktop: arrows only above middle card */}
            {i === 1 && (
              <div className="reviews-card-icons">
                <button className="reviews-nav-btn" onClick={prev} aria-label="Previous">
                  <img src="/images/home/rev8.svg" alt="prev" width={32} height={32} />
                </button>
                <button className="reviews-nav-btn" onClick={next} aria-label="Next">
                  <img src="/images/home/rev9.svg" alt="next" width={32} height={32} />
                </button>
              </div>
            )}
            <div className="reviews-card">
              <div className="reviews-card-top">
                <img src="/images/home/rev7.svg" alt="quote" width={28} height={28} className="reviews-card-icon" />
                <p className="reviews-card-quote">&ldquo;{r.quote}&rdquo;</p>
              </div>
              <div className="reviews-card-bottom">
                <div className="reviews-card-user">
                  <img src={r.avatar} alt={r.name} width={50} height={50} className="reviews-card-avatar" />
                  <div className="reviews-card-info">
                    <span className="reviews-card-name">{r.name}</span>
                    <span className="reviews-card-role">{r.role}</span>
                  </div>
                </div>
                <div className="reviews-card-stars">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} className="reviews-star">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
