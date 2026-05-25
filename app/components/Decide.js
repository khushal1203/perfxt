"use client";
import { useState, useRef } from "react";

const cards = [
  { src: "/images/home/img1.png", icon: "/images/home/dicon3.svg", title: "Are too many calls draining the rest of your week?", label: "Call budget", value: "3/5", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img2.png", icon: "/images/home/dicon2.svg", title: "Stack meetings into one day, or spread them out?", label: "Best meeting day", value: "Tue", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img3.png", icon: "/images/home/dicon1.svg", title: "Train in the morning, or save energy for work?", label: "AM Readiness", value: "74%", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img4.png", icon: "/images/home/dicon4.svg", title: "Protect today for deep work, or use it for admin?", label: "Mode today", value: "Deep", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img5.png", icon: "/images/home/dicon5.svg", title: "Is your schedule helping recovery or hurting it?", label: "Sleep debt", value: "-42m", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
];

const N = cards.length;

export default function Decide() {
  const [center, setCenter] = useState(2);
  const dragStart = useRef(null);

  const prev = () => { setCenter((c) => (c - 1 + N) % N); };
  const next = () => { setCenter((c) => (c + 1) % N); };

  const onMouseDown = (e) => { dragStart.current = e.pageX; };
  const onMouseUp = (e) => {
    if (dragStart.current === null) return;
    const delta = e.pageX - dragStart.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    dragStart.current = null;
  };
  const onTouchStart = (e) => { dragStart.current = e.touches[0].pageX; };
  const onTouchEnd = (e) => {
    if (dragStart.current === null) return;
    const delta = e.changedTouches[0].pageX - dragStart.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    dragStart.current = null;
  };

  const order = [-2, -1, 0, 1, 2].map((offset, i) => ({
    card: cards[(center + offset + N) % N],
    isCenter: i === 2,
    cardIndex: (center + offset + N) % N,
    position: i,
  }));

  return (
    <section className="decide-section" id="sweep">
      <div className="decide-top-box">
        <div className="decide-heading-box">
          <p className="decide-label">What to expect</p>
          <h2 className="decide-heading">What Perfxt helps you decide</h2>
        </div>
        <p className="decide-subtext">
          Not another wearable. Not another dashboard. Perfxt is the decision
          layer on top of the data you already have.
        </p>
      </div>

      <div
        className="decide-carousel"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ cursor: "grab" }}
      >
        <button className="decide-btn decide-btn--prev" onClick={prev}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#151515" fillOpacity="0.7" />
            <path d="M27 16L19 24L27 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="decide-row">
          {order.map(({ card, isCenter, cardIndex }) => (
            <div key={cardIndex} className={isCenter ? "decide-card-item decide-card-center" : "decide-card-item"}>
              <img src={card.src} alt="" draggable={false} className="decide-card-bg" />
              {isCenter && (
                <>
                  <div className="decide-card-gradient" />
                  <div className="decide-card-content">
                    <div className="decide-card-hover-area">
                      <p className="decide-card-title">{card.title}</p>
                      <p className="decide-card-desc">{card.desc}</p>
                    </div>
                    <div className="decide-card-stats">
                      <div className="decide-card-icon-wrap">
                        <img src={card.icon} alt="" />
                      </div>
                      <div className="decide-card-stat-info">
                        <span className="decide-card-stat-label">{card.label}</span>
                        <span className="decide-card-stat-value">{card.value}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button className="decide-btn decide-btn--next" onClick={next}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#151515" fillOpacity="0.7" />
            <path d="M21 16L29 24L21 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
