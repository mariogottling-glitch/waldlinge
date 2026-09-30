const illustrations = [
  "nature",
  "pace",
  "community",
  "shelter",
  "discovery",
  "growth",
];

export function BotanicalIcon({ variant }) {
  return (
    <img
      className="value-botanical"
      src={`/images/adobe-values/${illustrations[variant]}.png`}
      alt=""
      width="1024"
      height="1024"
      loading="lazy"
      aria-hidden="true"
    />
  );
}
