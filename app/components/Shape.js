import Image from "next/image";

export default function Shape() {
  return (
    <section className="shape-wrapper">
      <div className="shape-box">
        {/* Left */}
        <div className="shape-left">
          <div className="shape-text-group">
            <p className="shape-label">Shape Your Future Fast</p>
            <h2 className="shape-heading">
              Design Your Days with
              <br />
              Precision.
            </h2>
          </div>
          <p className="shape-subtext">
           Perfxt isn't just another app; it's the smart layer that turns your daily data into actionable plans.
          </p>
        </div>

        {/* Right */}
        <div className="shape-right">
          <a href="#" className="shape-btn shape-btn--primary">
            <Image src="/images/home/icon2.svg" alt="Start" width={24} height={24} />
            <span>Try Perfxt Today</span>
          </a>
          <a href="#" className="shape-btn shape-btn--outline">
            <Image src="/images/home/icon4.svg" alt="Talk" width={24} height={24} />
            <span>Explore Features</span>
          </a>
        </div>
      </div>
    </section>
  );
}
