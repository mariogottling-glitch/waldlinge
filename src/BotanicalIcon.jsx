// Small botanical drawings: translucent leaf layers and fine, irregular veins.
function Leaf({ transform, paint }) {
  return (
    <g transform={transform}>
      <path
        d="M0 0C-16-9-19-26-13-43C-9-34 10-22 0 0Z"
        fill={paint}
        stroke="#788760"
        strokeWidth=".65"
        strokeOpacity=".5"
      />
      <path
        d="M0 0C-4-15-8-29-13-43M-3-11L-12-19M-6-21L-14-28M-4-15L0-24M-8-29L-6-34"
        fill="none"
        stroke="#748363"
        strokeWidth=".65"
        strokeOpacity=".6"
      />
    </g>
  );
}

export function BotanicalIcon({ variant }) {
  const id = `leaf-wash-${variant}`;
  const paint = `url(#${id})`;
  return (
    <svg
      className="value-botanical"
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2=".6">
          <stop stopColor="#d9dec4" stopOpacity=".65" />
          <stop offset=".45" stopColor="#aab68c" stopOpacity=".78" />
          <stop offset=".7" stopColor="#c8cfac" stopOpacity=".65" />
          <stop offset="1" stopColor="#8f9f78" stopOpacity=".8" />
        </linearGradient>
      </defs>
      {variant === 0 && (
        <>
          <path
            d="M47 87Q59 57 52 29"
            fill="none"
            stroke="#879873"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <Leaf transform="translate(54 66) rotate(-35)" paint={paint} />
          <Leaf
            transform="translate(55 49) rotate(67) scale(.85)"
            paint={paint}
          />
          <Leaf
            transform="translate(54 35) rotate(9) scale(.75)"
            paint={paint}
          />
        </>
      )}
      {variant === 1 && (
        <>
          <path
            d="M31 85Q51 80 72 85M51 82Q47 62 51 44"
            fill="none"
            stroke="#879873"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <Leaf
            transform="translate(50 65) rotate(-47) scale(.9)"
            paint={paint}
          />
          <Leaf transform="translate(50 54) rotate(72)" paint={paint} />
          <Leaf
            transform="translate(51 44) rotate(12) scale(.62)"
            paint={paint}
          />
        </>
      )}
      {variant === 2 && (
        <>
          <path
            d="M63 87Q31 70 29 41M38 87Q69 67 72 37"
            fill="none"
            stroke="#879873"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <Leaf
            transform="translate(37 62) rotate(-37) scale(.75)"
            paint={paint}
          />
          <Leaf
            transform="translate(30 46) rotate(23) scale(.66)"
            paint={paint}
          />
          <Leaf
            transform="translate(62 64) rotate(75) scale(.78)"
            paint={paint}
          />
          <Leaf
            transform="translate(70 46) rotate(40) scale(.66)"
            paint={paint}
          />
        </>
      )}
    </svg>
  );
}
