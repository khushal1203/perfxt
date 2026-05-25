"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = ["First Day", "First Week", "First Month", "First Year"];

const boxes = [
  {
    type: "card1",
    label: "First Day",
    bg: "/images/home/what1.png",
    heading: "See what your today should look like",
    icon: "/images/home/wicon1.svg",
    features: [
      "Connect your wearable and calendar in under 2 minutes.",
      "Get a personalized daily plan based on your body data.",
      "Track your performance and improve every week.",
    ],
    quote: "Perfxt helped me stop guessing - I finally know which days I can actually push and which I shouldn\u2019t.",
    stats: [
      { value: "-37%", label: "Meeting waste" },
      { value: "+24%", label: "Deep work time" },
    ],
    img: "/images/home/whatm1.png",
  },
  {
    type: "card1",
    label: "First Week",
    bg: "/images/home/what3.png",
    labelColor: "#E05C3B",
    heading: "Start noticing what helps or hurts your performance",
    icon: "/images/home/wicon2.svg",
    features: [
      "See whether morning training helps your workday or drains it",
      "Start spotting whether too many calls or meetings hurt your focus",
      "Learn when you are usually best for deep work, admin, training, or recovery",
    ],
    quote: "Perfxt helped me stop guessing - I finally know which days I can actually push and which I shouldn\u2019t.",
    stats: [
      { value: "-42%", label: "Meeting waste" },
      { value: "-83%", label: "Burnout flags" },
    ],
    img: "/images/home/whatm2.png",
  },
  {
    type: "card1",
    label: "First Month",
    bg: "/images/home/what6.png",
    labelColor: "#49BE76",
    iconFilter: "invert(63%) sepia(48%) saturate(500%) hue-rotate(95deg) brightness(95%) contrast(90%)",
    heading: "Start restructuring your week around your real energy",
    icon: "/images/home/wicon1.svg",
    features: [
      "Decide whether to batch meetings into one day or spread them across the week",
      "Protect your best hours for the work that matters most",
      "Reduce patterns that repeatedly leave you tired, distracted, or overloaded",
    ],
    quote: "I realized productivity wasn\u2019t about doing more \u2014 it was about timing things better.",
    stats: [
      { value: "+31%", label: "Focused work sessions" },
      { value: "-41%", label: "Overload days" },
    ],
    img: "/images/home/whatm3.png",
  },
  {
    type: "card1",
    label: "First Year",
    bg: "/images/home/what4.png",
    labelColor: "#32A0D0",
    iconFilter: "invert(58%) sepia(60%) saturate(400%) hue-rotate(165deg) brightness(95%) contrast(90%)",
    heading: "Build a life and work rhythm that fits your body",
    icon: "/images/home/wicon2.svg",
    features: [
      "Know how to structure your week around the way you actually perform best",
      "Stop wasting high-energy hours on low-value work",
      "Make training, meetings, focus time, and recovery work together instead of against each other",
    ],
    quote: "Perfxt helped me build a rhythm I can actually sustain without burning out.",
    stats: [
      { value: "+48%", label: "Energy consistency" },
      { value: "3.2x", label: "Recovery awareness" },
    ],
    img: "/images/home/whatm4.png",
  },
];

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayTab, setDisplayTab] = useState(0);
  const [animState, setAnimState] = useState("idle"); // idle | out | in
  const box = boxes[displayTab];

  function handleTabClick(i) {
    if (i === activeTab || animState !== "idle") return;
    setAnimState("out");
    setTimeout(() => {
      setDisplayTab(i);
      setActiveTab(i);
      setAnimState("in");
      setTimeout(() => setAnimState("idle"), 400);
    }, 350);
  }

  return (
    <section className="wyg-wrapper" id="benefits">
      <div className="wyg-top-box">
        <div className="wyg-heading-group">
          <div className="wyg-inner-group">
            <p className="wyg-label">Expectations</p>
            <h2 className="wyg-heading">What you get from Perfxt</h2>
          </div>
          <p className="wyg-subtext">
            Compounding returns - each week, Perfxt learns more about how you actually perform and gets sharper.
          </p>
        </div>

        <div className="wyg-tabs">
          {tabs.map((tab, i) => (
            <div key={tab} className={`wyg-tab${i === activeTab ? " wyg-tab--active" : ""}`} onClick={() => handleTabClick(i)} style={{ cursor: "pointer" }}>
              {tab}
            </div>
          ))}
        </div>
      </div>

      {box.type === "card1" ? (
        <div className="wyg-card" style={{
          backgroundImage: `url('${box.bg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: animState === "out" ? 0 : 1,
          filter: animState === "out" ? 'blur(6px)' : animState === "in" ? 'blur(0px)' : 'blur(0px)',
          transform: animState === "out" ? 'translateY(12px) scale(0.98)' : animState === "in" ? 'translateY(0px) scale(1)' : 'translateY(0px) scale(1)',
          transition: animState === "out"
            ? 'opacity 0.35s ease, filter 0.35s ease, transform 0.35s ease'
            : 'opacity 0.4s ease, filter 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}>
          <div className="wyg-card-left">
            <div className="wyg-card-heading-group">
              <p className="wyg-card-label" style={box.labelColor ? { color: box.labelColor } : {}}>{box.label}</p>
              <h3 className="wyg-card-heading" style={box.labelColor ? { color: box.labelColor } : {}}>{box.heading}</h3>
            </div>
            <div className="wyg-card-features">
              {box.features.map((text, i) => (
                <div key={i} className="wyg-card-feature-row">
                  <Image src={box.icon} alt="" width={20} height={20} style={box.iconFilter ? { filter: box.iconFilter } : {}} />
                  <span className="wyg-card-feature-text">{text}</span>
                </div>
              ))}
            </div>
            <div className="wyg-card-quote" style={box.labelColor ? { borderLeftColor: box.labelColor } : {}}>
              <p className="wyg-card-quote-text">&ldquo;{box.quote}&rdquo;</p>
            </div>
            <div className="wyg-card-stats">
              {box.stats.map((stat) => (
                <div key={stat.label} className="wyg-card-stat">
                  <p className="wyg-card-stat-value" style={box.labelColor ? { color: box.labelColor } : {}}>{stat.value}</p>
                  <p className="wyg-card-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="wyg-card-right">
            <Image src={box.img} alt="What you get visual" width={477} height={740} className="wyg-card-right-img" style={{ width: "auto", height: "100%", maxWidth: "100%", display: "block" }} />
          </div>
        </div>
      ) : (
        <div className="wyg-card2">
          <div className="wyg-card2-img">
            <Image src={box.img} alt="What you get visual" width={477} height={740} className="wyg-card2-img-el" style={{ width: "auto", height: "100%", maxWidth: "100%", display: "block" }} />
          </div>
          <div className="wyg-card2-content">
            <div className="wyg-card-heading-group">
              <p className="wyg-card-label">{box.label}</p>
              <h3 className={`wyg-card-heading${box.headingClass ? ` ${box.headingClass}` : ""}`}>{box.heading}</h3>
            </div>
            <div className="wyg-card-features">
              {box.features.map((text, i) => (
                <div key={i} className="wyg-card-feature-row">
                  <Image src={box.icon} alt="" width={20} height={20} />
                  <span className="wyg-card-feature-text">{text}</span>
                </div>
              ))}
            </div>
            <div className={`wyg-card-quote${box.quoteClass ? ` ${box.quoteClass}` : ""}`}>
              <p className="wyg-card-quote-text">&ldquo;{box.quote}&rdquo;</p>
            </div>
            <div className="wyg-card-stats">
              {box.stats.map((stat) => (
                <div key={stat.label} className="wyg-card-stat">
                  <p className="wyg-card-stat-value">{stat.value}</p>
                  <p className="wyg-card-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
