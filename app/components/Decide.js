"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const cards = [
  { src: "/images/home/img1.jpg", icon: "/images/home/dicon3.svg", title: "Are too many calls draining the rest of your week?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img2.jpg", icon: "/images/home/dicon2.svg", title: "Stack meetings into one day, or spread them out?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img3.jpg", icon: "/images/home/dicon1.svg", title: "Train in the morning, or save energy for work?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img4.jpg", icon: "/images/home/dicon4.svg", title: "Protect today for deep work, or use it for admin?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img5.jpg", icon: "/images/home/dicon5.svg", title: "Is your schedule helping recovery or hurting it?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img1.jpg", icon: "/images/home/dicon3.svg", title: "Are too many calls draining the rest of your week?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img2.jpg", icon: "/images/home/dicon2.svg", title: "Stack meetings into one day, or spread them out?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img3.jpg", icon: "/images/home/dicon1.svg", title: "Train in the morning, or save energy for work?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img4.jpg", icon: "/images/home/dicon4.svg", title: "Protect today for deep work, or use it for admin?", label: "AM Readiness", value: "74%" },
  { src: "/images/home/img5.jpg", icon: "/images/home/dicon5.svg", title: "Is your schedule helping recovery or hurting it?", label: "AM Readiness", value: "74%" },
];

const css = `
  .decide-carousel {
    width: 100%;
    height: 560px;
    padding-bottom: 50px !important;
  }
  .decide-carousel .swiper-slide {
    width: 300px;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
  }
  .decide-carousel .swiper-pagination-bullet {
    background-color: #000 !important;
  }
  .decide-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 8.46px;
  }
  .decide-text-box {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 10px;
  }
  .decide-title {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #FFFFFF;
    margin: 0;
  }
  .decide-subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 22.56px;
    letter-spacing: 0;
    text-align: center;
    color: #FFFFFF;
    opacity: 0;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.4s ease, max-height 0.4s ease;
  }
  .swiper-slide-active:hover .decide-subtitle {
    opacity: 0.7;
    max-height: 100px;
  }
  .decide-stats-box {
    background: #3B50E080;
    backdrop-filter: blur(47px);
    border-radius: 18px;
    padding: 14.1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .decide-icon-wrap {
    width: 47px;
    height: 47px;
    border-radius: 11.28px;
    border: 0.94px solid rgba(255,255,255,0.3);
    overflow: hidden;
    flex-shrink: 0;
  }
  .decide-icon-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .decide-stat-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .decide-stat-label {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 13.16px;
    line-height: 15.04px;
    letter-spacing: 0.02em;
    text-align: right;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.5;
    margin: 0;
  }
  .decide-stat-value {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 28.2px;
    line-height: 110%;
    letter-spacing: -1.58px;
    text-align: right;
    color: #FFFFFF;
    margin: 0;
  }
`;

function updateOpacity(swiper) {
  const slides = swiper.slides;
  const active = swiper.activeIndex;
  slides.forEach((slide, i) => {
    slide.style.opacity = Math.abs(i - active) <= 2 ? "1" : "0";
  });
}

export default function Decide() {
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

      <style>{css}</style>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          speed={600}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          freeMode={true}
          modules={[EffectCoverflow, FreeMode]}
          className="decide-carousel"
          onSwiper={updateOpacity}
          onSlideChange={updateOpacity}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <img style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }} src={card.src} alt="" />
              <div className="decide-overlay">
                <div className="decide-text-box">
                  <p className="decide-title">{card.title}</p>
                  <p className="decide-subtitle">Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it.</p>
                </div>
                <div className="decide-stats-box">
                  <div className="decide-icon-wrap">
                    <img src={card.icon} alt="" />
                  </div>
                  <div className="decide-stat-info">
                    <p className="decide-stat-label">{card.label}</p>
                    <p className="decide-stat-value">{card.value}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
