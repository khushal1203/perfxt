import Image from "next/image";

const logos = [1, 2, 3, 4, 5, 6];

export default function Brands() {
  return (
    <section className="brands-section">
      <p className="brands-label">
        Connects with wearables &amp; calendars you already use
      </p>
      <div className="brands-track-wrapper">
        <div className="brands-track">
          {[...logos, ...logos].map((n, i) => (
            <div key={i} className="brand-logo">
              <Image
                src={`/images/home/logo${n}.svg`}
                alt={`Brand logo ${n}`}
                width={163}
                height={44}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
