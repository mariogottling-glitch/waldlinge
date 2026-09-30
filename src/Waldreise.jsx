import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";

const chapters = [
  [
    "01",
    "Staunen",
    "Die Welt beginnt mit einer Frage.",
    "Ein Blatt. Eine Spur. Ein kleines Wunder am Weg. Im Wald gibt es jeden Tag etwas Neues zu entdecken.",
  ],
  [
    "02",
    "Ausprobieren",
    "Ich kann das. Auf meine Weise.",
    "Klettern, bauen, beobachten oder einfach einen Moment verweilen. Kinder finden ihren eigenen Weg – mit Menschen, die sie achtsam begleiten.",
  ],
  [
    "03",
    "Dazugehören",
    "Zusammen wird daraus ein Zuhause.",
    "Mit anderen Kindern, dem pädagogischen Team und den Familien entsteht ein Ort, an dem jede und jeder willkommen ist.",
  ],
];

export function usePageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;
    let frame = 0;
    const root = document.documentElement;
    const targets = [...document.querySelectorAll("[data-reveal]")];
    const start = () => {
      observer?.disconnect();
      if (preference.matches) {
        root.classList.remove("motion-ready");
        targets.forEach((node) => node.classList.add("is-visible"));
        return;
      }
      root.classList.add("motion-ready");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
              target.classList.add("is-visible");
              observer.unobserve(target);
            }
          });
        },
        { threshold: 0.08 },
      );
      targets.forEach((node) => observer.observe(node));
    };
    const scroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const distance = root.scrollHeight - window.innerHeight;
        root.style.setProperty(
          "--reading-progress",
          distance > 0 ? Math.min(1, window.scrollY / distance) : 0,
        );
        frame = 0;
      });
    };
    start();
    scroll();
    preference.addEventListener("change", start);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", start);
      window.removeEventListener("scroll", scroll);
      root.classList.remove("motion-ready");
    };
  }, []);
}

export function Waldreise() {
  const journey = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const section = journey.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const travel = Math.max(1, bounds.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -bounds.top / travel));
      const animated = !preference.matches && window.innerWidth > 700;
      section.style.setProperty("--journey-progress", animated ? progress : 1);
      setActive(Math.min(2, Math.floor(progress * 3)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <section
      ref={journey}
      className="waldreise"
      id="waldreise"
      aria-labelledby="reise-title"
      tabIndex={-1}
    >
      <div className="journey-sticky">
        <div className="journey-heading section-shell">
          <p className="eyebrow">Ein kleiner Schritt in den Wald</p>
          <h2 id="reise-title">Eine ganze Welt zum Wachsen.</h2>
          <p>Folgt der Neugier. Der Rest wächst mit.</p>
        </div>
        <div className="journey-scene section-shell">
          <img
            className="journey-art"
            src="/images/waldreise-firefly-original.png"
            width="2688"
            height="1536"
            alt="Aquarellillustration: neugierige Kinder entdecken mit einer Lupe ein Blatt in einem lichten Birkenwald"
            loading="lazy"
          />
          <div className="journey-narrative">
            <p className="journey-label">
              <span aria-hidden="true">{chapters[active][0]}</span>{" "}
              {chapters[active][1]}
            </p>
            <div className="journey-chapters">
              {chapters.map(([number, label, title, copy], index) => (
                <article
                  key={number}
                  className={`journey-chapter${active === index ? " is-current" : ""}`}
                  aria-hidden={active !== index ? true : undefined}
                >
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="journey-steps" aria-label="Kapitel der Waldreise">
              {chapters.map(([number, label], index) => (
                <a
                  key={number}
                  className={active === index ? "is-current" : ""}
                  href={`#reise-${number}`}
                  aria-label={`${label}: Kapitel ${number}`}
                >
                  {number}
                  <span>{label}</span>
                </a>
              ))}
            </div>
            <a className="text-link" href="#kindergarten">
              Was uns wichtig ist <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="journey-scroll">
          <ArrowDown size={16} aria-hidden="true" /> Ein Stück weiter entdecken
        </p>
      </div>
      <div className="journey-markers" aria-hidden="true">
        <span id="reise-01" />
        <span id="reise-02" />
        <span id="reise-03" />
      </div>
      <div className="journey-mobile-copy section-shell">
        {chapters.map(([number, label, title, copy]) => (
          <article key={number} data-reveal>
            <p className="eyebrow">
              {number} · {label}
            </p>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
