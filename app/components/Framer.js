"use client";
import { useState, useEffect } from "react";

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

const TAG_H = 34;
const ICON_W = 20;
const PAD_L = 10;
const PAD_R = 12;
const CHAR_W = 7.5;

// each entry: tags sit exactly on that line's gy
// left side: orange tags (before), right side: blue tags (after)
// 2 tags per side on some lines, 1 tag per side on others — no overlaps
const TAG_LINES = [
  { lineIdx: 0, tags: [
    { x: 30,   side: "o", text: "Confused data from your wearable" },
    { x: 1580, side: "b", text: "Daily tasks tied to real outcomes" },
  ]},
  { lineIdx: 2, tags: [
    { x: 380,  side: "o", text: "Burnout creeping in unnoticed" },
    { x: 1500, side: "b", text: "Clear dashboard on how your body feels" },
  ]},
  { lineIdx: 3, tags: [
    { x: 30,   side: "o", text: "You push through fatigue" },
    { x: 380,  side: "o", text: "Great sleep score but no idea how to use it" },
    { x: 1200, side: "b", lines: ["Schedule deep work, calls,", "or rest based on your recovery"] },
    { x: 1580, side: "b", lines: ["Spot hidden strain", "before burnout builds up"] },
  ]},
  { lineIdx: 5, tags: [
    { x: 30,   side: "o", text: "Overworked, yet underproductive" },
    { x: 380,  side: "o", text: "Deep work at the wrong time" },
    { x: 1400, side: "b", text: "10–15 hours/month freed up for strategy or rest" },
  ]},
  { lineIdx: 6, tags: [
    { x: 1500, side: "b", text: "Use your data to make every day easier" },
  ]},
  { lineIdx: 7, tags: [
    { x: 30,   side: "o", text: "Sleep data with no clear way to act on it" },
    { x: 1500, side: "b", text: "Know exactly when to do calls, admin, or creative work" },
  ]},
];

const ORANGE_TAGS = TAG_LINES.flatMap(({ tags }) => tags.filter(t => t.side === "o").map(t => t.text || t.lines?.join(" ")));
const BLUE_TAGS   = TAG_LINES.flatMap(({ tags }) => tags.filter(t => t.side === "b").map(t => t.text || t.lines?.join(" ")));

function MobileTag({ text, side }) {
  const isBlue = side === "b";
  const color  = isBlue ? BLUE : ORANGE;
  const bg     = isBlue ? "#ECEFFE" : "#FCEFEC";
  const border = isBlue ? "#3B50E04D" : "#E05C3B4D";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "7px 12px 7px 8px" }}>
      {isBlue ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill={color} /><line x1="5.5" y1="5.5" x2="12.5" y2="12.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /><line x1="12.5" y1="5.5" x2="5.5" y2="12.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
      )}
      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
}

function Tag({ x, y, text, color, bg, borderColor, isBlue, lines }) {
  const isMulti = Array.isArray(lines);
  const maxLen = isMulti ? Math.max(...lines.map(l => l.length)) : text.length;
  const textW = maxLen * CHAR_W;
  const iconW = ICON_W + 6;
  const tagW = PAD_L + iconW + textW + PAD_R;
  const tagH = isMulti ? TAG_H + 18 : TAG_H;
  return (
    <g transform={`translate(${x}, ${y - tagH})`}>
      <rect width={tagW} height={tagH} rx="10" fill={bg} stroke={borderColor} strokeWidth="1" />
      {isBlue ? (
        <g transform={`translate(${PAD_L}, ${(tagH - 16) / 2})`}>
          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : (
        <g>
          <circle cx={PAD_L + 9} cy={tagH / 2} r={8} fill={color} />
          <line x1={PAD_L + 5.5} y1={tagH / 2 - 3.5} x2={PAD_L + 12.5} y2={tagH / 2 + 3.5} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={PAD_L + 12.5} y1={tagH / 2 - 3.5} x2={PAD_L + 5.5} y2={tagH / 2 + 3.5} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
      {isMulti ? (
        lines.map((line, i) => (
          <text key={i} x={PAD_L + iconW} y={tagH / 2 + (i - (lines.length - 1) / 2) * 18}
            fontFamily="Inter, sans-serif" fontSize="14" fontWeight="400" fill={color} dominantBaseline="middle">
            {line}
          </text>
        ))
      ) : (
        <text x={PAD_L + iconW} y={tagH / 2}
          fontFamily="Inter, sans-serif" fontSize="14" fontWeight="400" fill={color} dominantBaseline="middle">
          {text}
        </text>
      )}
    </g>
  );
}

export default function Framer() {
  const [isMobile, setIsMobile] = useState(false);
  const [is425, setIs425] = useState(false);
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);
      setIs425(window.innerWidth <= 425);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="framer-section" id="integrate">
      <div className="framer-header">
        <p className="framer-label">Before vs After</p>
        <h2 className="framer-heading">{"Get more done —\nwithout working more."}</h2>
        <p className="framer-subtext">
          Perfxt turns your wearable data into a smart daily game plan,<br />so you work when you&apos;re sharp and rest before burnout hits.
        </p>
      </div>
      {isMobile && is425 && (
        <div className="framer-mobile-col framer-mobile-col--orange">
          {ORANGE_TAGS.map((text, i) => <MobileTag key={i} text={text} side="o" />)}
        </div>
      )}
      <div className="framer-svg-wrap">
        <svg
          className="framer-svg"
          viewBox="0 0 2006 976"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
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

          {!isMobile && TAG_LINES.map(({ lineIdx, tags }) => {
            const y = LINES[lineIdx].gy;
            return (
              <g key={lineIdx}>
                {tags.map((tag, ti) => (
                  <Tag
                    key={ti}
                    x={tag.x} y={y}
                    text={tag.text}
                    lines={tag.lines}
                    color={tag.side === "o" ? ORANGE : BLUE}
                    bg={tag.side === "o" ? "#FCEFEC" : "#ECEFFE"}
                    borderColor={tag.side === "o" ? "#E05C3B4D" : "#3B50E04D"}
                    isBlue={tag.side === "b"}
                  />
                ))}
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
      {isMobile && !is425 && (
        <div className="framer-mobile-tags">
          <div className="framer-mobile-col">
            {ORANGE_TAGS.map((text, i) => <MobileTag key={i} text={text} side="o" />)}
          </div>
          <div className="framer-mobile-col">
            {BLUE_TAGS.map((text, i) => <MobileTag key={i} text={text} side="b" />)}
          </div>
        </div>
      )}
      {isMobile && is425 && (
        <div className="framer-mobile-col framer-mobile-col--blue">
          {BLUE_TAGS.map((text, i) => <MobileTag key={i} text={text} side="b" />)}
        </div>
      )}
    </section>
  );
}
