"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [1, 2, 3, 4, 5];

const slickSettings = {
  infinite: true,
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3, centerPadding: "60px" } },
    { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "20px" } },
  ],
};

export default function Individuals() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const el = scrollRef.current;
    if (!el) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const slideWidth = el.querySelector(".ind-mobile-slide")?.offsetWidth + 16;
        const maxScroll = el.scrollWidth - el.offsetWidth;
        const next = el.scrollLeft + slideWidth > maxScroll ? 0 : el.scrollLeft + slideWidth;
        el.scrollTo({ left: next, behavior: "smooth" });
      }, 2500);
    };

    const stopAutoScroll = () => clearInterval(autoScrollRef.current);

    startAutoScroll();
    el.addEventListener("touchstart", stopAutoScroll);
    el.addEventListener("touchend", () => setTimeout(startAutoScroll, 3000));

    return () => {
      stopAutoScroll();
      el.removeEventListener("touchstart", stopAutoScroll);
    };
  }, [isMobile]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.querySelector(".ind-mobile-slide")?.offsetWidth + 16;
    setActive(Math.round(el.scrollLeft / slideWidth));
  };

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

      {isMobile ? (
        <>
          <div className="ind-mobile-scroll" ref={scrollRef} onScroll={handleScroll}>
            {slides.map((num) => (
              <div key={num} className="ind-mobile-slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/mobile/mobile${num}.png`} alt={`Mobile screen ${num}`} />
              </div>
            ))}
          </div>
          <div className="ind-mobile-dots">
            {slides.map((_, i) => (
              <span key={i} className={`ind-dot${i === active ? " ind-dot--active" : ""}`} />
            ))}
          </div>
        </>
      ) : (
        <div className="ind-slider-wrapper">
          <Slider {...slickSettings}>
            {slides.map((num) => (
              <div key={num} className="ind-slide-item">
                <div className="ind-phone-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/mobile/mobile${num}.png`} alt={`Mobile screen ${num}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
}
