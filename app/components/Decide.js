"use client";
import { useRef, useEffect } from "react";

const cards = [
  { src: "/images/home/img1.png", icon: "/images/home/dicon3.svg", title: "Are too many calls draining the rest of your week?", label: "Call budget", value: "3/5", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img2.png", icon: "/images/home/dicon2.svg", title: "Stack meetings into one day, or spread them out?", label: "Best meeting day", value: "Tue", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img3.png", icon: "/images/home/dicon1.svg", title: "Train in the morning, or save energy for work?", label: "AM Readiness", value: "74%", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img4.png", icon: "/images/home/dicon4.svg", title: "Protect today for deep work, or use it for admin?", label: "Mode today", value: "Deep", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img5.png", icon: "/images/home/dicon5.svg", title: "Is your schedule helping recovery or hurting it?", label: "Sleep debt", value: "-42m", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
];

const DOUBLED = [...cards, ...cards];

export default function Decide() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const w = window.innerWidth;
    const CARD_W = w <= 425 ? w - 32 : w <= 768 ? (w - 48) / 3 : w <= 1024 ? 260 : w <= 1440 ? 300 : 340;
    const GAP = 16;
    const STEP = CARD_W + GAP;
    const TOTAL = STEP * cards.length;
    const SPEED = 0.5;

    const animate = () => {
      if (!isDragging.current) {
        posRef.current += SPEED;
        if (posRef.current >= TOTAL) posRef.current -= TOTAL;
        if (posRef.current < 0) posRef.current += TOTAL;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    const onMouseDown = (e) => {
      isDragging.current = true;
      dragStartX.current = e.clientX;
      dragStartPos.current = posRef.current;
      track.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const delta = dragStartX.current - e.clientX;
      let next = (dragStartPos.current + delta) % TOTAL;
      if (next < 0) next += TOTAL;
      posRef.current = next;
      track.style.transform = `translateX(-${posRef.current}px)`;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      track.style.cursor = "grab";
    };

    const onTouchStart = (e) => {
      isDragging.current = true;
      dragStartX.current = e.touches[0].clientX;
      dragStartPos.current = posRef.current;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      const delta = dragStartX.current - e.touches[0].clientX;
      let next = (dragStartPos.current + delta) % TOTAL;
      if (next < 0) next += TOTAL;
      posRef.current = next;
      track.style.transform = `translateX(-${posRef.current}px)`;
    };

    const onTouchEnd = () => { isDragging.current = false; };

    track.style.cursor = "grab";
    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd);

    animRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animRef.current);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

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

      <div className="decide-marquee-outer">
        <div className="decide-marquee-fade decide-marquee-fade--left" />
        <div className="decide-marquee-fade decide-marquee-fade--right" />
        <div className="decide-marquee-track" ref={trackRef}>
          {DOUBLED.map((card, i) => (
            <div key={i} className="decide-card-item">
              <img src={card.src} alt="" draggable={false} className="decide-card-bg" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
