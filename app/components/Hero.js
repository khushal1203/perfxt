import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background SVG */}
      <Image
        src="/images/home/hero.svg"
        alt="Hero background"
        fill
        className="hero-bg"
        priority
      />

      {/* Top content box */}
      <div className="hero-top-box">
        {/* Label */}
        <div className="hero-label-wrap">
          <span className="hero-label">Achieve more with your body data</span>
        </div>

        {/* Heading */}
        <h1 className="hero-heading">
          Turn Your Body Data Into
          <br />
          Better Decisions
        </h1>
      </div>

      {/* Bottom image */}
      <div className="hero-bottom-img">
        <Image
          src="/images/home/hero1.png"
          alt="Hero dashboard"
          width={1367}
          height={936}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </div>
    </section>
  );
}
