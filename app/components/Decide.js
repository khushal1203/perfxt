"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  { title: "Are too many calls draining the rest of your week?", src: "/images/home/img1.jpg", stat: "3/5",  label: "CALL BUDGET" },
  { title: "Stack meetings into one day, or spread them out?",   src: "/images/home/img2.jpg", stat: "Tue",  label: "BEST MEETING DAY" },
  { title: "Train in the morning, or save energy for work?",     src: "/images/home/img3.jpg", stat: "74%", label: "AM READINESS" },
  { title: "Protect today for deep work, or use it for admin?",  src: "/images/home/img4.jpg", stat: "Deep", label: "MODE TODAY" },
  { title: "Is your schedule helping recovery or hurting it?",   src: "/images/home/img5.jpg", stat: "-42m", label: "SLEEP DEBT" },
  { title: "Are too many calls draining the rest of your week?", src: "/images/home/img1.jpg", stat: "3/5",  label: "CALL BUDGET" },
  { title: "Stack meetings into one day, or spread them out?",   src: "/images/home/img2.jpg", stat: "Tue",  label: "BEST MEETING DAY" },
  { title: "Train in the morning, or save energy for work?",     src: "/images/home/img3.jpg", stat: "74%", label: "AM READINESS" },
  { title: "Protect today for deep work, or use it for admin?",  src: "/images/home/img4.jpg", stat: "Deep", label: "MODE TODAY" },
  { title: "Is your schedule helping recovery or hurting it?",   src: "/images/home/img5.jpg", stat: "-42m", label: "SLEEP DEBT" },
];

export default function Decide() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 700,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 2,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, centerPadding: "0px" } },
      { breakpoint: 768,  settings: { slidesToShow: 1, centerPadding: "0px" } },
    ],
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
          .decide-slider-wrapper .slick-slide.slick-active {
            outline: none;
            width: 333px !important;
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
                    <div className="decide-icon-box">⌘</div>
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
