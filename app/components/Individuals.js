import Image from "next/image";

const mobiles = [
  { n: 1, cls: "ind-img-1" },
  { n: 2, cls: "ind-img-2" },
  { n: 3, cls: "ind-img-3" },
  { n: 4, cls: "ind-img-4" },
  { n: 5, cls: "ind-img-5" },
];

export default function Individuals() {
  return (
    <section className="ind-wrapper">
      {/* Top box */}
      <div className="ind-top-box">
        <div className="ind-heading-group">
          <p className="ind-label">You Want to Achieve More</p>
          <h2 className="ind-heading">
            <span className="ind-heading--black">We Built for</span>
            <br />
            Busy Individuals
          </h2>
        </div>
        <p className="ind-subtext">
          Whether you&apos;re raising kids, building a career, juggling high-stakes work, or just living a busy life - Perfxt helps you stop guessing and start adjusting, so you can achieve more with less stress and fatigue.
        </p>
      </div>

      {/* Bottom images row */}
      <div className="ind-images-row">
        {mobiles.map(({ n, cls }) => (
          <div key={n} className={`ind-image-item ${cls}`}>
            <Image
              src={`/images/mobile/mobile${n}.svg`}
              alt={`Mobile screen ${n}`}
              width={370}
              height={784}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
