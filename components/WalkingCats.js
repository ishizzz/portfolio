// A few tiny cats that stroll along the bottom of the page. Pure SVG + CSS, no
// image files. Each cat gets its own color, speed, and start delay so they don't
// march in lockstep. Hidden for anyone who prefers reduced motion.

const cats = [
  { color: '#f472b6', duration: 26, delay: 0, scale: 1 },
  { color: '#60a5fa', duration: 34, delay: -8, scale: 0.85 },
  { color: '#fbbf24', duration: 30, delay: -18, scale: 1.1 },
  { color: '#34d399', duration: 38, delay: -24, scale: 0.9 }
];

function Cat({ color, scale }) {
  return (
    <svg
      className="cat-svg"
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
  return (
    <div className="cats-layer" aria-hidden="true">
      {cats.map((cat, i) => (
        <div
          key={i}
          className="cat"
          style={{
            animationDuration: `${cat.duration}s`,
            animationDelay: `${cat.delay}s`
          }}
        >
          <Cat color={cat.color} scale={cat.scale} />
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
          overflow: hidden;
        }
        .cat {
          position: absolute;
          bottom: 2px;
          left: -60px;
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
