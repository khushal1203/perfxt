"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  { src: "/images/home/img1.svg", w: 300, h: 450, angle: -15 },
  { src: "/images/home/img2.svg", w: 400, h: 600, angle: -10 },
  { src: "/images/home/img3.svg", w: 470, h: 705, angle: 0   },
  { src: "/images/home/img4.svg", w: 400, h: 600, angle: 10  },
  { src: "/images/home/img5.svg", w: 300, h: 450, angle: 15  },
  { src: "/images/home/img1.svg", w: 300, h: 450, angle: -15 },
  { src: "/images/home/img2.svg", w: 400, h: 600, angle: -10 },
  { src: "/images/home/img3.svg", w: 470, h: 705, angle: 0   },
  { src: "/images/home/img4.svg", w: 400, h: 600, angle: 10  },
  { src: "/images/home/img5.svg", w: 300, h: 450, angle: 15  },
];

export default function Decide() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 700,
    initialSlide: 2,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 1 } },
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
        <Slider {...settings}>
          {cards.map((card, i) => (
            <div key={i} className="decide-slide-item">
              <div className="decide-card-new">
                <img
                  src={card.src}
                  alt={card.title}
                  width={card.w}
                  height={card.h}
                  className="decide-card-img"
                />
                <div className="decide-card-overlay-new" />
                <div className="decide-card-content">
                  <h2 className="decide-card-title">{card.title}</h2>
                
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
