"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [1, 2, 3, 4, 5];

export default function Individuals() {
  const settings = {
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
      { breakpoint: 768,  settings: { slidesToShow: 1, centerPadding: "60px" } },
      { breakpoint: 425,  settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px", swipe: true, draggable: true } },
    ],
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

      <div className="ind-slider-wrapper">
        <Slider {...settings}>
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
    </section>
  );
}
