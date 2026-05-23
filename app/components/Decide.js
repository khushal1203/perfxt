"use client";

import { useEffect, useRef } from "react";

const cards = [
  { src: "/images/home/img1.jpg", icon: "/images/home/dicon3.svg", title: "Are too many calls draining the rest of your week?", label: "Call budget", value: "3/5" },
  { src: "/images/home/img2.jpg", icon: "/images/home/dicon2.svg", title: "Stack meetings into one day, or spread them out?", label: "ABest meeting day", value: "Tue" },
  { src: "/images/home/img3.jpg", icon: "/images/home/dicon1.svg", title: "Train in the morning, or save energy for work?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img4.jpg", icon: "/images/home/dicon4.svg", title: "Protect today for deep work, or use it for admin?", label: "Mode today", value: "Deep" },
  { src: "/images/home/img5.jpg", icon: "/images/home/dicon5.svg", title: "Is your schedule helping recovery or hurting it?", label: "Sleep debt", value: "-42m" },
];

const looped = [...cards, ...cards, ...cards];
const SPEED = 1.2;
const BASE_W = 320;
const MAX_W = 440;
const BASE_H = 500;
const MAX_H = 620;
const MAX_ROTATE = 15;

export default function Decide() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);
  const halfWRef = useRef(0);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    // Set base size on all cards first
    const items = track.querySelectorAll(".decide-card-item");
    items.forEach((el) => {
      el.style.width = `${BASE_W}px`;
      el.style.flex = `0 0 ${BASE_W}px`;
      el.style.height = `${BASE_H}px`;
    });

    // Measure half width after base sizes set
    halfWRef.current = track.scrollWidth / 3;

    const applyEffects = () => {
      const outerRect = outer.getBoundingClientRect();
      const cx = outerRect.left + outerRect.width / 2;

      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        const elCx = r.left + r.width / 2;
        const dist = cx - elCx;
        const absDist = Math.abs(dist);
        const ratio = Math.max(0, 1 - absDist / (BASE_W * 2.2));

        const w = Math.round(BASE_W + (MAX_W - BASE_W) * ratio);
        const h = Math.round(BASE_H + (MAX_H - BASE_H) * ratio);
        const rotateY = (1 - ratio) * MAX_ROTATE * (dist > 0 ? 1 : -1);

        el.style.width = `${w}px`;
        el.style.flex = `0 0 ${w}px`;
        el.style.height = `${h}px`;
        el.style.transform = `perspective(900px) rotateY(${rotateY.toFixed(2)}deg)`;
        el.style.zIndex = Math.round(ratio * 10);
      });
    };

    const tick = () => {
      if (!pausedRef.current) {
        xRef.current -= SPEED;
        if (Math.abs(xRef.current) >= halfWRef.current) {
          xRef.current += halfWRef.current;
        }
        track.style.transform = `translateX(${xRef.current}px)`;
      }
      applyEffects();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    outer.addEventListener("mouseenter", pause);
    outer.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      outer.removeEventListener("mouseenter", pause);
      outer.removeEventListener("mouseleave", resume);
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

      <div className="decide-track-outer" ref={outerRef}>
        <div className="decide-track" ref={trackRef}>
          {looped.map((card, i) => (
            <div className="decide-card-item" key={i}>
              <img src={card.src} alt="" draggable={false} className="decide-card-bg" />
              <div className="decide-card-gradient" />
              <div className="decide-card-content">
                <p className="decide-card-title">{card.title}</p>
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
