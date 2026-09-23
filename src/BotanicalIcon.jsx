// A shared illustration language: soft pigment washes and fine organic outlines.
export function BotanicalIcon({ variant }) {
  const id = `value-wash-${variant}`;
  const wash = `url(#${id})`;
  return (
    <svg
      className="value-botanical"
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2=".9" y2="1">
          <stop stopColor="#dce1c9" stopOpacity=".5" />
          <stop offset=".5" stopColor="#b7c39e" stopOpacity=".7" />
          <stop offset="1" stopColor="#91a782" stopOpacity=".55" />
        </linearGradient>
      </defs>
      <g
        stroke="#73866b"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {variant === 0 && (
          <>
            <path d="M59 61L79 82Q82 85 85 82Q88 79 84 76L64 56" fill={wash} />
            <path
              d="M70 40C71 55 59 67 44 67C28 68 17 56 17 41C16 26 28 15 44 15C59 14 71 25 70 40Z"
              fill={wash}
            />
            <path
              d="M64 40C65 52 55 61 44 61C31 62 23 52 23 41C22 29 32 21 44 21C56 20 65 29 64 40Z"
              fill="#f7f3e9"
              fillOpacity=".8"
              strokeOpacity=".5"
            />
            <path
              d="M35 49C28 35 43 29 54 29C50 35 54 47 43 50C40 51 37 50 35 49Z"
              fill={wash}
            />
            <path
              d="M31 55Q40 42 49 35M39 44L38 37M43 40L48 41"
              fill="none"
              strokeWidth=".85"
            />
          </>
        )}
        {variant === 1 && (
          <>
            <path
              d="M16 73C24 69 35 68 48 68L63 68C68 65 69 57 75 55C81 52 86 57 85 64C85 72 75 79 65 80L28 80C22 80 18 77 16 73Z"
              fill={wash}
            />
            <path
              d="M26 68C18 60 19 45 26 37C34 27 49 26 59 34C69 42 70 58 62 68Z"
              fill={wash}
            />
            <path
              d="M29 65C20 52 30 36 43 36C56 35 64 48 59 58C55 67 42 69 36 61C30 54 34 44 43 44C51 44 55 54 48 58C44 61 39 57 41 53"
              fill="none"
              strokeWidth="1.5"
            />
            <path d="M75 56L71 46M81 55L86 44M21 86Q45 89 71 85" fill="none" />
            <circle cx="71" cy="45" r="1.7" fill="#73866b" stroke="none" />
            <circle cx="86" cy="43" r="1.7" fill="#73866b" stroke="none" />
          </>
        )}
        {variant === 2 && (
          <>
            <path
              d="M19 80C15 69 16 51 24 47C31 44 39 50 40 61L39 81Z"
              fill={wash}
            />
            <path
              d="M62 81L61 61C62 50 70 44 77 48C85 53 85 70 81 80Z"
              fill={wash}
            />
            <path d="M39 81C35 70 38 57 49 56C60 55 65 68 61 81Z" fill={wash} />
            <path
              d="M35 32C35 39 31 43 26 42C20 42 18 36 19 31C20 25 25 23 30 25C34 26 36 28 35 32Z"
              fill={wash}
            />
            <path
              d="M81 32C82 38 78 43 72 42C66 42 64 36 65 31C66 25 71 23 76 25C79 26 81 29 81 32Z"
              fill={wash}
            />
            <path
              d="M57 44C57 50 53 53 49 52C44 52 42 48 43 43C44 39 47 37 51 38C55 38 58 41 57 44Z"
              fill={wash}
            />
            <path d="M25 57Q27 68 39 70M75 57Q72 68 61 70" fill="none" />
            <path
              d="M43 22C38 17 43 12 47 16L50 19L53 16C57 12 62 17 57 22L50 28Z"
              fill="#d8c28a"
              fillOpacity=".45"
              stroke="#b3a278"
              strokeWidth="1"
            />
          </>
        )}
      </g>
    </svg>
  );
}
