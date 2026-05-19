import Image from "next/image";

const cards = [
  {
    title: "Daily Check-in",
    desc: "Start your day with clarity, end with reflection. Plan tasks, review progress, reset intentions.",
  },
  {
    title: "Sleep Tracking",
    desc: "Monitor your sleep cycles and wake up refreshed. Get personalized tips to improve rest quality.",
  },
  {
    title: "AI Scheduling",
    desc: "Let AI plan your perfect day based on your energy levels, priorities, and recovery data.",
  },
  {
    title: "Recovery Insights",
    desc: "Understand your body's readiness. Optimize workouts and rest days with smart recovery scores.",
  },
  {
    title: "Weekly Reports",
    desc: "Get a full breakdown of your week — habits, performance, sleep, and personalized next steps.",
  },
];

export default function AICover() {
  return (
    <section className="aicover-wrapper">
      <div className="aicover-box">
        <Image
          src="/images/home/aicover.png"
          alt="AI Cover"
          fill
          className="aicover-bg"
          priority
        />

        {/* Top content box */}
        <div className="aicover-top-box">
          <div className="aicover-heading-group">
            <div className="aicover-inner-group">
              <p className="aicover-label">More then 100+ Features</p>
              <h2 className="aicover-heading">
                AI-powered productivity,{"\n"}tuned to your body.
              </h2>
            </div>
          </div>
          <p className="aicover-subtext">
            Your AI personal assistant for scheduling the perfect day.
          </p>
        </div>

        {/* Bottom cards row */}
        <div className="aicover-cards-row">
          {cards.map((card, i) => (
            <div key={i} className="aicover-card">
              <div className="aicover-card-icon">
                <Image src="/images/home/right.svg" alt="" width={18} height={18} />
              </div>
              <div className="aicover-card-body">
                <p className="aicover-card-title">{card.title}</p>
                <p className="aicover-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
