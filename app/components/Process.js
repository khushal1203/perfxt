import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "/images/home/cicon1.svg",
    title: "Create your account",
    desc: "Download the app, create your profile, and tell us what kind",
    desc2: "of work actually matters to you.",
    tags: ["Login", "Register", "Start Free Trial"],
  },
  {
    number: "02",
    icon: "/images/home/cicon2.svg",
    title: "Connect your life",
    desc: "Download the app, create your profile, and tell us what kind ",
    desc2: "of work actually matters to you.",
    tags: ["Apple Health", "Oura", "Whoop","Garmin","Google Calendar"],
  },
  {
    number: "03",
    icon: "/images/home/cicon3.svg",
    title: "Get today's playbook",
    desc: "Perfxt analyzes your patterns and tells you when to",
    desc2: "train, focus, take meetings, or protect recovery.",
    tags: ["Every Morning", "Health", "Fitness"],
  },
];

export default function Process() {
  return (
    <section className="process-wrapper" id="process">
      {/* Top label row */}
      <div className="process-label-row">
        <div className="process-label-item">
          <Image src="/images/home/micon1.svg" alt="icon" width={24} height={24} />
          <span className="process-label-text">No new wearable needed</span>
        </div>
        <div className="process-label-item">
          <Image src="/images/home/micon2.svg" alt="icon" width={24} height={24} />
          <span className="process-label-text">Syncs automatically</span>
        </div>
      </div>

      {/* Middle heading */}
      <div className="process-heading-box">
        <video src="/images/home/cVideo.mp4" autoPlay loop muted playsInline preload="none" className="process-heading-video process-heading-video--mobile" />
        <h2 className="process-heading">
          <span>Simple</span>
          <span className="process-heading-img">
            <video src="/images/home/cVideo.mp4" autoPlay loop muted playsInline preload="none" className="process-heading-video" />
          </span>
          <span>Process</span>
        </h2>
        <h2 className="process-heading process-heading--muted">How It Works</h2>
      </div>

      {/* Steps row */}
      <div className="process-bottom">
        <div className="process-steps">
          {steps.map((step, i) => (
          <div key={i} className="process-step">
            <div className="process-step-left">
              <span className="process-step-number">{step.number}</span>
              {i < steps.length - 1 && <div className="process-step-line" />}
            </div>

            {/* Card */}
            <div className="process-step-card">
              {/* Card top */}
              <div className="process-step-top">
                <div className="process-step-icon">
                  <Image src={step.icon} alt="icon" width={24} height={24} />
                </div>
                <h3 className="process-step-title">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="process-step-desc">
                {step.desc}<br />{step.desc2}
              </p>

              {/* Tags */}
              <div className="process-step-tags">
                {step.tags.map((tag, j) => (
                  <span key={j} className="process-step-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Right image */}
        <div className="process-right-img">
          <Image src="/images/home/pcover.png" alt="process cover" width={1215} height={1026} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>
  );
}
