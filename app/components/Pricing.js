"use client";
import { useState } from "react";
import Image from "next/image";

const features = [
  "Unlimited integrations (Oura, Whoop, Apple, Garmin…)",
  "AI-powered daily recommendations",
  "Sleep, stress & recovery tracking",
  "Personalized weekly reports",
  "Priority customer support",
  "7-day free trial included",
];

const yearlyFeatures = [
  "Unlimited integrations (Oura, Whoop, Apple, Garmin…)",
  "Advanced KPI insights",
  "Unlimited conversations with AI Assistant",
  "Daily check-in & reflection",
  "KPI tracker",
  "AI meeting summaries",
  "Google Calendar sync",
  "Weekly performance report",
];

function PricingCard({ plan, price, desc, highlight, featureList, icon }) {
  return (
    <div className={`pc-card${highlight ? " pc-card--highlight" : ""}`}>
      {/* Top row: plan badge + calendar icon */}
      <div className="pc-card-top">
        <span className="pc-plan-badge">{plan}</span>
        <Image src={icon} alt="calendar" width={20} height={20} />
      </div>

      {/* Price block */}
      <div className="pc-price-block">
        <div className="pc-price-row">
          <span className="pc-price">${price}</span>
          <span className="pc-per">/month</span>
        </div>
        <p className="pc-price-desc">{desc}</p>
      </div>

      {/* CTA button */}
      <button className="pc-cta-btn">
        <Image src="/images/home/r.svg" alt="" width={20} height={20} />
        <span>Start Free Trial</span>
      </button>

      {/* Features */}
      <div className="pc-features">
        <p className="pc-features-title">What you get</p>
        <div className="pc-features-list">
          {featureList.map((f, i) => (
            <div key={i} className="pc-feature-row">
              <Image src="/images/home/picon.svg" alt="check" width={16} height={16} style={{ flexShrink: 0 }} />
              <span className="pc-feature-text">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState("yearly");

  return (
    <section className="pricing-wrapper">
      <div className="pricing-box">
        <video
          className="pricing-video-bg"
          src="/images/home/price.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pricing-overlay" />

        {/* Top content box */}
        <div className="pricing-top-box">
          <div className="pricing-heading-group">
            <div className="pricing-inner-group">
              <p className="pricing-label">50% off forever · limited time</p>
              <h2 className="pricing-heading">Costs less than your daily coffee</h2>
            </div>
            <p className="pricing-subtext">
              Transparent pricing, no surprises. 7-day free trial, cancel anytime.
            </p>
          </div>

          <div className="pricing-toggle">
            <button
              className={`pricing-toggle-btn${billing === "monthly" ? " pricing-toggle-btn--active-blue" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`pricing-toggle-btn${billing === "yearly" ? " pricing-toggle-btn--active-blue" : ""}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly - 50%
            </button>
          </div>
        </div>

        {/* Bottom cards row */}
        <div className="pricing-cards-row">
          <PricingCard
            plan="Monthly Plan"
            price="7"
            desc="Everything to start. Cancel anytime."
            highlight={billing === "monthly"}
            featureList={features}
            icon="/images/home/celender.svg"
          />
          <PricingCard
            plan="Yearly Plan"
            price="14"
            desc="Less than a coffee a week. Lock the 50% rate forever."
            highlight={billing === "yearly"}
            featureList={yearlyFeatures}
            icon="/images/home/vicon2.svg"
          />
        </div>
      </div>
    </section>
  );
}
