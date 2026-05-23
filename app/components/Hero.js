import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-bg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/images/home/hero.mp4" type="video/mp4" />
      </video>

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
          style={{ width: "100%", height: "auto", display: "block", maxWidth: "100%" }}
          priority
        />
      </div>
    </section>
  );
}
