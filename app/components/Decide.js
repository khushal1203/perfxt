"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const cards = [
  { title: "Are too many calls draining the rest of your week?", src: "/images/home/img1.jpg", stat: "3/5",  label: "CALL BUDGET",      icon: "/images/home/imgeicon1.svg" },
  { title: "Stack meetings into one day, or spread them out?",   src: "/images/home/img2.jpg", stat: "Tue",  label: "BEST MEETING DAY", icon: "/images/home/imageicon2.svg" },
  { title: "Train in the morning, or save energy for work?",     src: "/images/home/img3.jpg", stat: "74%",  label: "AM READINESS",     icon: "/images/home/imgeicon3.svg" },
  { title: "Protect today for deep work, or use it for admin?",  src: "/images/home/img4.jpg", stat: "Deep", label: "MODE TODAY",       icon: "/images/home/imageiocn4.svg" },
  { title: "Is your schedule helping recovery or hurting it?",   src: "/images/home/img5.jpg", stat: "-42m", label: "SLEEP DEBT",       icon: "/images/home/imageicon5.svg" },
  { title: "Are too many calls draining the rest of your week?", src: "/images/home/img1.jpg", stat: "3/5",  label: "CALL BUDGET",      icon: "/images/home/imgeicon1.svg" },
  { title: "Stack meetings into one day, or spread them out?",   src: "/images/home/img2.jpg", stat: "Tue",  label: "BEST MEETING DAY", icon: "/images/home/imageicon2.svg" },
  { title: "Train in the morning, or save energy for work?",     src: "/images/home/img3.jpg", stat: "74%",  label: "AM READINESS",     icon: "/images/home/imgeicon3.svg" },
  { title: "Protect today for deep work, or use it for admin?",  src: "/images/home/img4.jpg", stat: "Deep", label: "MODE TODAY",       icon: "/images/home/imageiocn4.svg" },
  { title: "Is your schedule helping recovery or hurting it?",   src: "/images/home/img5.jpg", stat: "-42m", label: "SLEEP DEBT",       icon: "/images/home/imageicon5.svg" },
];

function getConfig(w) {
  if (w <= 480)  return { slides: 1, width: 260 };
  if (w <= 768)  return { slides: 1, width: 300 };
  if (w <= 1024) return { slides: 3, width: 230 };
  if (w <= 1280) return { slides: 3, width: 270 };
  if (w <= 1600) return { slides: 5, width: 310 };
  return               { slides: 5, width: 335 };
}

export default function Decide() {
  const [cfg, setCfg] = useState({ slides: 5, width: 335.3 });

  useEffect(() => {
    const update = () => setCfg(getConfig(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: cfg.slides,
    speed: 700,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 2,
  };

  return (
    <section className="decide-section">
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

      <div className="decide-slider-wrapper">
        <style>{`
          .decide-slider-wrapper .slick-slide {
            width: 333.3px !important;
          }
        `}</style>
        <Slider {...settings}>
          {cards.map((card, i) => (
            <div key={i} className="decide-slide-item">
              <div className="decide-card-transform">
                <div className="decide-card-new">
                  <img src={card.src} alt={card.title} className="decide-card-img" />
                  <div className="decide-card-overlay-new" />
                  <div className="decide-card-content">
                    <h2 className="decide-card-title">{card.title}</h2>
                    <div className="decide-bottom-box">
                      <div className="decide-icon-box"><img src={card.icon} alt="" /></div>
                      <div className="decide-info">
                        <span>{card.label}</span>
                        <h3>{card.stat}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
