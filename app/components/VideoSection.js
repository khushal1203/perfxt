import Image from "next/image";

const cards = [
  {
    icon: "/images/home/vicon1.svg",
    title: "Data without direction",
    desc: "Your wearable gives you numbers, not answers. HRV, heart rate, sleep scores - but no clear action to take.",
  },
  {
    icon: "/images/home/vicon2.svg",
    title: "You're tired even with low strain",
    desc: "Meetings, deadlines, and mentalload drain you just as much astraining - but no tool tracks all of it.",
  },
  {
    icon: "/images/home/vicon3.svg",
    title: "Wrong timing, every day",
    desc: "You push hardest when you're mostdepleted. Your schedule ignoresrecovery and you only notice at theend of the week.",
  },
  {
    icon: "/images/home/viocn4.svg",
    title: "Incomplete recovery picture",
    desc: "Existing dashboards only show partof the picture. Real readinessrequires connecting workouts,sleep, stress, and daily load.",
  },
];

export default function VideoSection() {
  return (
    <section className="video-wrapper" id="video-section">
      <div className="video-box">
        <video
          className="video-bg"
          src="/images/home/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
        <div className="video-overlay" />

        {/* Top text block */}
        <div className="video-top-box">
          <div className="video-heading-group">
            <p className="video-label">Why Perfxt exists</p>
            <h2 className="video-heading">
              Your wearable gives you data.
              <br />
              But you cannot use it properly.
            </h2>
          </div>
          <p className="video-subtext">
            Wearables optimised for the gym. Productivity apps optimised for
            calendars. Nothing that looks at both — and tells you what today is
            actually good for.
          </p>
        </div>

        {/* Bottom cards */}
        <div className="video-cards">
          {cards.map((card, i) => (
            <div key={i} className="video-card">
              <div className="video-card-icon">
                <Image src={card.icon} alt="icon" width={20} height={20} />
              </div>
              <div className="video-card-body">
                <h3 className="video-card-title">{card.title}</h3>
                <p className="video-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
