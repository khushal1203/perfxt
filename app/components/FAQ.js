"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Do I need to have a wearable?",
    a: "No, a wearable is not required. Perfxt works with manual inputs too, but connecting a wearable unlocks the full AI-powered experience.",
  },
  {
    q: "What is Perfxt and how does it work?",
    a: "Perfxt is an AI-powered personal assistant that syncs with your wearables to schedule your perfect day based on your body's data.",
  },
  {
    q: "Which devices and apps does Perfxt support?",
    a: "Perfxt integrates with Oura, Whoop, Apple Health, Garmin, and many more. Connect once and let AI do the rest.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! Every plan includes a 7-day free trial. No credit card required to get started.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. You can cancel anytime from your account settings with no hidden fees or penalties.",
  },
  {
    q: "How does Perfxt protect my health data?",
    a: "Your data is encrypted end-to-end and never sold to third parties. We follow strict privacy standards to keep your information safe.",
  },
  {
    q: "How accurate are the AI recommendations?",
    a: "Our AI learns from your patterns over time, becoming more accurate the longer you use it. Most users see meaningful improvements within the first week.",
  },
  {
    q: "Can I use Perfxt on multiple devices?",
    a: "Yes, Perfxt syncs across all your devices. Your data and schedule are always up to date wherever you are.",
  },
  {
    q: "What happens after my free trial ends?",
    a: "After the 7-day trial, you'll be prompted to choose a plan. If you don't subscribe, your account will be paused with no charges.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-wrapper">
      <div className="faq-box">
        {/* Left */}
        <div className="faq-left">
          <div className="faq-left-top">
            <div className="faq-heading-group">
              <div className="faq-inner-group">
                <p className="faq-label">Your queries, simplified</p>
                <h2 className="faq-heading">Frequently Asked Questions</h2>
              </div>
              <p className="faq-subtext">
                Find quick answers to the most common questions.
                <br />
                Still curious?{" "}
                <a href="mailto:info@perfxt.online" className="faq-email">
                  info@perfxt.online
                </a>
              </p>
            </div>
          </div>
          <a href="mailto:info@perfxt.online" className="faq-btn">
            <Image src="/images/home/icon3.svg" alt="" width={24} height={24} />
            <span>Contact Today</span>
          </a>
        </div>

        {/* Right — Accordion */}
        <div className="faq-right">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? " faq-item--open" : ""}`}>
              <button className="faq-item-btn" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-item-q">{faq.q}</span>
                <span className="faq-item-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="faq-item-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
