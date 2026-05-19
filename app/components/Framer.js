"use client";

const ORANGE = "#E05C3B";
const BLUE   = "#3B50E0";

const LINES = [
  { id: "l0", d: "M2004.43 0.55957C1802.52 299.673 1416.86 547.127 1002.63 547.127C588.401 547.127 202.734 299.674 0.828857 0.562125",  gx1: 2004.43, gx2: 0.828857, gy: 273.843 },
  { id: "l1", d: "M2004.9 280.148C1802.99 436.752 1417.33 566.308 1003.1 566.308C588.875 566.308 203.207 436.752 1.30273 280.15",        gx1: 2004.9,  gx2: 1.30273,  gy: 423.228 },
  { id: "l2", d: "M2004.7 414.308C1802.8 507.714 1417.14 584.988 1002.9 584.988C588.673 584.988 203.006 507.714 1.1012 414.308",         gx1: 2004.7,  gx2: 1.1012,   gy: 499.648 },
  { id: "l3", d: "M2004.46 531.294C1802.56 572.1 1416.9 605.859 1002.66 605.859C588.435 605.859 202.769 572.1 0.863892 531.294",         gx1: 2004.46, gx2: 0.863892, gy: 568.577 },
  { id: "l4", d: "M2004.95 625.996C1803.04 625.999 1417.37 626.001 1003.14 626.001C588.916 626.001 203.25 625.999 1.34436 625.996",      gx1: 2004.95, gx2: 1.34436,  gy: 625.999 },
  { id: "l5", d: "M2004.46 721.126C1802.56 680.319 1416.9 646.561 1002.66 646.561C588.435 646.561 202.769 680.319 0.863892 721.125",     gx1: 2004.46, gx2: 0.863892, gy: 683.843 },
  { id: "l6", d: "M2004.7 839.143C1802.8 745.737 1417.14 668.463 1002.9 668.463C588.673 668.463 203.006 745.737 1.1012 839.142",         gx1: 2004.7,  gx2: 1.1012,   gy: 753.803 },
  { id: "l7", d: "M2003.52 974.784C1801.89 818.396 1416.76 689.019 1003.1 689.019C589.447 689.019 204.312 818.396 2.68713 974.782",      gx1: 2003.52, gx2: 2.68713,  gy: 831.901 },
];

const N_DOTS = 5;
const DUR    = 14;
const STEP   = DUR / N_DOTS;

const TAG_W = 305;
const TAG_H = 34;

const TAG_LINES = [
  {
    lineIdx: 0,
    ox1: 50,  ot1: "Confused data from your wearable",
    ox2: 420, ot2: "Burnout creeping in unnoticed",
    bx1: 1200, bt1: "Daily tasks tied to real outcomes",
    bx2: 1650, bt2: "Clear dashboard on how your body feels",
  },
  {
    lineIdx: 2,
    ox1: 200, ot1: "You push through fatigue",
    ox2: 580, ot2: "Great sleep score but no idea how to use it",
    bx1: 1100, bt1: "Schedule deep work, calls, or rest based on your recovery",
    bx2: 1580, bt2: "Spot hidden strain before burnout builds up",
  },
  {
    lineIdx: 3,
    ox1: 80,  ot1: "Overworked, yet underproductive",
    ox2: 500, ot2: "Deep work at the wrong time",
    bx1: 1300, bt1: "10–15 hours/month freed up for strategy or rest",
    bx2: 1640, bt2: "Daily tasks tied to real outcomes",
  },
  {
    lineIdx: 5,
    ox1: 150, ot1: "Sleep data with no clear way to act on it",
    ox2: 480, ot2: "Confused data from your wearable",
    bx1: 1150, bt1: "Clear dashboard on how your body feels",
    bx2: 1600, bt2: "Spot hidden strain before burnout builds up",
  },
  {
    lineIdx: 7,
    ox1: 60,  ot1: "Burnout creeping in unnoticed",
    ox2: 550, ot2: "You push through fatigue",
    bx1: 1250, bt1: "Schedule deep work, calls, or rest based on your recovery",
    bx2: 1660, bt2: "10–15 hours/month freed up for strategy or rest",
  },
];

function XIcon({ cx, cy, color }) {
  const o = 3.5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={8} fill={color} />
      <line x1={cx - o} y1={cy - o} x2={cx + o} y2={cy + o} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx + o} y1={cy - o} x2={cx - o} y2={cy + o} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

function Tag({ x, y, text, color, bg, borderColor }) {
  return (
    <g transform={`translate(${x}, ${y - TAG_H / 2})`}>
      <rect width={TAG_W} height={TAG_H} rx="10" fill={bg} stroke={borderColor} strokeWidth="1" />
      <XIcon cx={18} cy={TAG_H / 2} color={color} />
      <text
        x="34"
        y={TAG_H / 2}
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fontWeight="400"
        fill={color}
        dominantBaseline="middle"
      >
        {text}
      </text>
    </g>
  );
}

export default function Framer() {
  return (
    <section className="framer-section">
      <div className="framer-header">
        <p className="framer-label">Before vs After</p>
        <h2 className="framer-heading">{"Get more done —\nwithout working more."}</h2>
        <p className="framer-subtext">
          Perfxt turns your wearable data into a smart daily game plan,<br />so you work when you&apos;re sharp and rest before burnout hits.
        </p>
      </div>
      <div className="framer-svg-wrap">
        <svg
          className="framer-svg"
          viewBox="0 0 2006 976"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {LINES.map(({ id, d, gx1, gx2, gy }) => (
            <path key={id} id={id} d={d} stroke={`url(#grad-${id})`} strokeWidth="2" />
          ))}

          {LINES.flatMap(({ id }) =>
            Array.from({ length: N_DOTS }, (_, dotIdx) => {
              const begin  = `${(-(dotIdx * STEP)).toFixed(3)}s`;
              const durStr = `${DUR}s`;
              return (
                <circle key={`${id}-${dotIdx}`} r="4.5">
                  <animateMotion dur={durStr} begin={begin} repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                    <mpath href={`#${id}`} />
                  </animateMotion>
                  <animate attributeName="fill" values={`${ORANGE};${BLUE}`} keyTimes="0;1" calcMode="linear" dur={durStr} begin={begin} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.88;1" calcMode="linear" dur={durStr} begin={begin} repeatCount="indefinite" />
                </circle>
              );
            })
          )}

          {TAG_LINES.map(({ lineIdx, ox1, ot1, ox2, ot2, bx1, bt1, bx2, bt2 }) => {
            const y = LINES[lineIdx].gy;
            return (
              <g key={lineIdx}>
                <Tag x={ox1} y={y} text={ot1} color={ORANGE} bg="#FCEFEC" borderColor="#E05C3B4D" />
                <Tag x={ox2} y={y} text={ot2} color={ORANGE} bg="#FCEFEC" borderColor="#E05C3B4D" />
                <Tag x={bx1} y={y} text={bt1} color={BLUE}   bg="#ECEFFE" borderColor="#3B50E04D" />
                <Tag x={bx2} y={y} text={bt2} color={BLUE}   bg="#ECEFFE" borderColor="#3B50E04D" />
              </g>
            );
          })}

          <image href="/images/home/lineicon.svg" x="703" y="365" width="600" height="600" />

          <defs>
            {LINES.map(({ id, gx1, gx2, gy }) => (
              <linearGradient key={`grad-${id}`} id={`grad-${id}`} x1={gx1} y1={gy} x2={gx2} y2={gy} gradientUnits="userSpaceOnUse">
                <stop stopColor={BLUE}  stopOpacity="0" />
                <stop offset="0.485577" stopColor={BLUE} />
                <stop offset="0.509615" stopColor={ORANGE} />
                <stop offset="1"        stopColor={ORANGE} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    </section>
  );
}
