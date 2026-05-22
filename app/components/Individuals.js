"use client";
import { useEffect, useState } from "react";

const POSITION_CLASSES = ["ind-img-1", "ind-img-2", "ind-img-3", "ind-img-4", "ind-img-5"];

export default function Individuals() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(p => (p + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ind-wrapper" id="integrate">
      <div className="ind-top-box">
        <div className="ind-heading-group">
          <p className="ind-label">You Want to Achieve More</p>
          <h2 className="ind-heading">
            <span className="ind-heading--black">We Built for</span>
            <br />
            Busy Individuals
          </h2>
        </div>
        <p className="ind-subtext">
          Whether you&apos;re raising kids, building a career, juggling high-stakes work, or just living a busy life - Perfxt helps you stop guessing and start adjusting, so you can achieve more with less stress and fatigue.
        </p>
      </div>

      <div className="ind-images-row">
        {POSITION_CLASSES.map((cls, i) => {
          const imgNum = ((i + offset) % 5) + 1;
          return (
            <div key={i} className={`ind-image-item ${cls}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/mobile/mobile${imgNum}.svg`}
                alt={`Mobile screen ${imgNum}`}
                style={{ width: "100%", height: "auto", transition: "opacity 0.5s ease" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
