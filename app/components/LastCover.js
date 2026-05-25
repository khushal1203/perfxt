import Image from "next/image";

export default function LastCover() {
  return (
    <section className="lastcover-wrapper">
      <div className="lastcover-box">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="lastcover-bg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/home/lastcover.mp4" type="video/mp4" />
        </video>

        <div className="lastcover-overlay" style={{ background: 'rgba(21, 21, 21, 0.70)' }} />

        {/* Left content */}
        <div className="lastcover-left">
          <div className="lastcover-top">
            <div className="lastcover-label-group">
              <p className="lastcover-label">Unlock Your Day's Potential</p>
              <h2 className="lastcover-heading">Design Your Days with Precision</h2>
            </div>
            <p className="lastcover-subtext">
              Perfxt is your trusted decision guide, turning everyday data into your best choices.
            </p>
          </div>

          <div className="lastcover-btns">
            <a href="#" className="lastcover-btn lastcover-btn--white">
              <Image src="/images/home/r.svg" alt="" width={24} height={24} style={{filter: 'brightness(0)'}} />
              <span>Try Perfxt free</span>
            </a>
            <a href="#" className="lastcover-btn lastcover-btn--outline">
              <Image src="/images/home/app.svg" alt="" width={24} height={24} style={{filter: 'brightness(0) invert(1)'}} />
              <span>Open App Store</span>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="lastcover-right">
          <Image
            src="/images/home/last1.png"
            alt=""
            width={866}
            height={959}
            className="lastcover-right-img"
          />
        </div>
      </div>
    </section>
  );
}
