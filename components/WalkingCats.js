// A few tiny cats that stroll along the bottom of the page. Pure SVG + CSS, no
// image files. Each cat gets its own color, speed, and start delay so they don't
// march in lockstep. Click one and it hops with a little speech bubble. Hidden
// for anyone who prefers reduced motion.

import { useState } from 'react';

const cats = [
  { color: '#f472b6', duration: 26, delay: 0, scale: 1 },
  { color: '#60a5fa', duration: 34, delay: -8, scale: 0.85 },
  { color: '#fbbf24', duration: 30, delay: -18, scale: 1.1 },
  { color: '#34d399', duration: 38, delay: -24, scale: 0.9 }
];

const boops = ['meow!', 'hi!', 'purr', '♥', 'boop'];

function CatSvg({ color, scale }) {
  return (
    <svg
      width={40 * scale}
      height={28 * scale}
      viewBox="0 0 40 28"
      fill="none"
      aria-hidden="true"
    >
      {/* tail */}
      <path
        className="cat-tail"
        d="M6 18 C0 16 1 8 5 9"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* body */}
      <ellipse cx="20" cy="17" rx="13" ry="8" fill={color} />
      {/* head */}
      <circle cx="31" cy="13" r="7" fill={color} />
      {/* ears */}
      <path d="M27 7 L28 2 L31 6 Z" fill={color} />
      <path d="M35 7 L36 2 L32 6 Z" fill={color} />
      {/* eyes */}
      <circle cx="30" cy="13" r="1.1" fill="#1f2937" />
      <circle cx="34" cy="13" r="1.1" fill="#1f2937" />
      {/* legs */}
      <rect className="cat-leg cat-leg-a" x="13" y="22" width="3" height="5" rx="1.5" fill={color} />
      <rect className="cat-leg cat-leg-b" x="19" y="22" width="3" height="5" rx="1.5" fill={color} />
      <rect className="cat-leg cat-leg-a" x="24" y="22" width="3" height="5" rx="1.5" fill={color} />
    </svg>
  );
}

export default function WalkingCats() {
  const [msgs, setMsgs] = useState({});

  const boop = (i) => {
    const msg = boops[Math.floor(Math.random() * boops.length)];
    setMsgs((prev) => ({ ...prev, [i]: msg }));
    setTimeout(() => {
      setMsgs((prev) => {
        const next = { ...prev };
        delete next[i];
        return next;
      });
    }, 1100);
  };

  return (
    <div className="cats-layer" aria-hidden="true">
      {cats.map((cat, i) => (
        <div
          key={i}
          className={'cat' + (msgs[i] ? ' boop' : '')}
          style={{
            animationDuration: `${cat.duration}s`,
            animationDelay: `${cat.delay}s`
          }}
          onClick={() => boop(i)}
        >
          {msgs[i] && <span className="cat-bubble">{msgs[i]}</span>}
          <div className="cat-inner">
            <CatSvg color={cat.color} scale={cat.scale} />
          </div>
        </div>
      ))}

      <style jsx>{`
        .cats-layer {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: 30px;
          pointer-events: none;
          z-index: 5;
        }
        .cat {
          position: absolute;
          bottom: 2px;
          left: -60px;
          pointer-events: auto;
          cursor: pointer;
          animation-name: walk;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes walk {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(100vw + 80px));
          }
        }
        .cat-inner {
          transform-origin: bottom center;
        }
        .cat.boop .cat-inner {
          animation: hop 0.5s ease;
        }
        @keyframes hop {
          0% {
            transform: translateY(0) scale(1);
          }
          30% {
            transform: translateY(-12px) scale(1.05);
          }
          60% {
            transform: translateY(0) scale(1);
          }
          80% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .cat-bubble {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 4px;
          white-space: nowrap;
          font-size: 11px;
          font-weight: 600;
          color: #111827;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 9999px;
          padding: 2px 8px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
          animation: pop 1.1s ease forwards;
        }
        @keyframes pop {
          0% {
            opacity: 0;
            transform: translate(-50%, 4px) scale(0.8);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -6px) scale(1);
          }
        }
        .cat :global(.cat-leg) {
          transform-origin: top center;
          animation: step 0.35s ease-in-out infinite;
        }
        .cat :global(.cat-leg-b) {
          animation-delay: 0.17s;
        }
        @keyframes step {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        .cat :global(.cat-tail) {
          transform-origin: 6px 14px;
          animation: sway 1s ease-in-out infinite;
        }
        @keyframes sway {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-12deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .cats-layer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
