"use client";

const cards = [
  { src: "/images/home/img1.jpg", icon: "/images/home/dicon3.svg", title: "Are too many calls draining the rest of your week?", label: "Call budget", value: "3/5", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img2.jpg", icon: "/images/home/dicon2.svg", title: "Stack meetings into one day, or spread them out?", label: "ABest meeting day", value: "Tue", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img3.jpg", icon: "/images/home/dicon1.svg", title: "Train in the morning, or save energy for work?", label: "AM Readiness", value: "74%", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img4.jpg", icon: "/images/home/dicon4.svg", title: "Protect today for deep work, or use it for admin?", label: "Mode today", value: "Deep", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
  { src: "/images/home/img5.jpg", icon: "/images/home/dicon5.svg", title: "Is your schedule helping recovery or hurting it?", label: "Sleep debt", value: "-42m", desc: "Your HRV, strain and sleep profile tell us when training today helps your performance - and when it quietly drains it." },
];

const CENTER = 2;

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

      <div className="decide-track-outer">
        <div className="decide-track">
          {cards.map((card, i) => (
            <div className={`decide-card-item${i === CENTER ? " decide-card-center" : ""}`} key={i}>
              <img src={card.src} alt="" draggable={false} className="decide-card-bg" />
              <div className="decide-card-gradient" />
              <div className="decide-card-content">
                <div className="decide-card-hover-area">
                  <p className="decide-card-title">{card.title}</p>
                  <p className="decide-card-desc">{card.desc}</p>
                </div>
                <div className="decide-card-stats">
                  <div className="decide-card-icon-wrap">
                    <img src={card.icon} alt="" />
                  </div>
                  <div className="decide-card-stat-info">
                    <span className="decide-card-stat-label">{card.label}</span>
                    <span className="decide-card-stat-value">{card.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
