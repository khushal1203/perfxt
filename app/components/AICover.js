import Image from "next/image";

const cards = [
  {
    title: "Daily Check-in",
    desc: "Start your day with clarity, end with reflection. Plan tasks, review progress, reset intentions.",
  },
  {
    title: "Smart Scheduling",
    desc: "Perfxt learns your habits and suggests the ideal time for deep work, meetings, and recovery.",
  },
  {
    title: "Productivity Heatmap",
    desc: "Visualise your high-focus time windows to protect your most productive hours and cut distractions.",
  },
  {
    title: "AI-Powered Feedback",
    desc: "Meeting summaries, efficiency scores, and actionable insights to make every call count.",
  },
  {
    title: "Chat First",
    desc: "Skip the logging. Just tell the assistant what you did - it keeps track and learns.",
  },
];

export default function AICover() {
  return (
    <section className="aicover-wrapper">
      <div className="aicover-box">
        <Image
          src="/images/home/aicover.png"
          alt=""
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
                <Image src={`/images/home/aicover${i + 1}.svg`} alt="" width={18} height={18} />
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
