"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = ["First Day", "First Week", "First Month", "First Year"];

const features = [
  "Connect your wearable and calendar in under 2 minutes.",
  "Get a personalized daily plan based on your body data.",
  "Track your performance and improve every week.",
];

const weekFeatures = [
  "See whether morning training helps your workday or drains it",
  "Start spotting whether too many calls or meetings hurt your focus",
  "Learn when you are usually best for deep work, admin, training, or recovery",
];

const weekStats = [
  { value: "-42%", label: "Meeting waste" },
  { value: "-83%", label: "Burnout flags" },
];

const stats = [
  { value: "-37%", label: "Meeting waste" },
  { value: "+24%", label: "Deep work time" },
];

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="wyg-wrapper" id="benefits">
      {/* Top heading box */}
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
            <div key={tab} className={`wyg-tab${i === activeTab ? " wyg-tab--active" : ""}`} onClick={() => setActiveTab(i)} style={{ cursor: "pointer" }}>
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Middle card */}
      <div className="wyg-card">
        {/* Left content */}
        <div className="wyg-card-left">
          {/* Heading group */}
          <div className="wyg-card-heading-group">
            <p className="wyg-card-label">First Day</p>
            <h3 className="wyg-card-heading">See what your today should look like</h3>
          </div>

          {/* Features list */}
          <div className="wyg-card-features">
            {features.map((text, i) => (
              <div key={i} className="wyg-card-feature-row">
                <Image src="/images/home/wicon1.svg" alt="" width={20} height={20} />
                <span className="wyg-card-feature-text">{text}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="wyg-card-quote">
            <p className="wyg-card-quote-text">
              &ldquo;Perfxt helped me stop guessing - I finally know which days I can actually push and which I shouldn&rsquo;t.&rdquo;
            </p>
          </div>

          {/* Stats */}
          <div className="wyg-card-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="wyg-card-stat">
                <p className="wyg-card-stat-value">{stat.value}</p>
                <p className="wyg-card-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right image */}
        <div className="wyg-card-right">
          <Image
            src="/images/home/what2.svg"
            alt="What you get visual"
            width={477}
            height={740}
            className="wyg-card-right-img"
            style={{ width: 'auto', height: '100%', maxWidth: '100%', display: 'block' }}
          />
        </div>
      </div>
      {/* Second card - image left, content right */}
      <div className="wyg-card2">
        {/* Left image */}
        <div className="wyg-card2-img">
          <Image
            src="/images/home/what4.svg"
            alt="What you get visual"
            width={477}
            height={740}
            className="wyg-card2-img-el"
            style={{ width: 'auto', height: '100%', maxWidth: '100%', display: 'block' }}
          />
        </div>

        {/* Right content */}
        <div className="wyg-card2-content">
          <div className="wyg-card-heading-group">
            <p className="wyg-card-label">First Week</p>
            <h3 className="wyg-card-heading wyg-card-heading--orange">Start noticing what helps or hurts your performance</h3>
          </div>
          <div className="wyg-card-features">
            {weekFeatures.map((text, i) => (
              <div key={i} className="wyg-card-feature-row">
                <Image src="/images/home/wicon2.svg" alt="" width={20} height={20} />
                <span className="wyg-card-feature-text">{text}</span>
              </div>
            ))}
          </div>
          <div className="wyg-card-quote wyg-card-quote--orange">
            <p className="wyg-card-quote-text">
              &ldquo;“Perfxt helped me stop guessing - I finally know which days I can actually push and which I shouldn't.&rdquo;
            </p>
          </div>
          <div className="wyg-card-stats">
            {weekStats.map((stat) => (
              <div key={stat.label} className="wyg-card-stat">
                <p className="wyg-card-stat-value">{stat.value}</p>
                <p className="wyg-card-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
