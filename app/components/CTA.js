import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta-wrapper">
      <div className="cta-box">
        {/* Left */}
        <div className="cta-left">
          <div className="cta-text-group">
            <p className="cta-label">Ready in 2 minutes</p>
            <h2 className="cta-heading">
              Stop guessing your days. Start designing them.
            </h2>
          </div>
          <p className="cta-subtext">
            Not another wearable. Not another dashboard. Perfxt is the decision
            layer on top of the data you already have.
          </p>
        </div>

        {/* Right */}
        <div className="cta-right">
          <a href="https://apps.apple.com/us/app/perfxt/id6758935129" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
            <Image src="/images/home/icon2.svg" alt="Start" width={24} height={24} />
            <span>Start Free Trial</span>
          </a>
         
        </div>
      </div>
    </section>
  );
}
