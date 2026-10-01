import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  List,
  X,
  Plus,
  Minus,
} from "@phosphor-icons/react";
import { BotanicalIcon } from "./BotanicalIcon";
import { WaldlingeFilm } from "./WaldlingeFilm";
import { questions } from "./content";
import { useForestMotion } from "./useForestMotion";

const navigation = [
  ["Unser Wald", "#kindergarten"],
  ["Waldalltag", "#alltag"],
  ["Für Eltern", "#eltern"],
];
const values = [
  [
    "Natur entdecken",
    "Mit allen Sinnen staunen, fragen und die Natur verstehen.",
  ],
  [
    "Im eigenen Tempo",
    "Ausprobieren oder erst beobachten. Jedes Kind findet seinen Weg.",
  ],
  ["Gemeinschaft leben", "Sich gesehen fühlen, Neues wagen und dazugehören."],
];
const steps = [
  [
    3,
    "Ankommen & dazugehören",
    "Vertraute Menschen und ein wertschätzendes Miteinander geben Sicherheit. So entsteht Vertrauen – und Lust auf Neues.",
  ],
  [
    4,
    "Entdecken & ausprobieren",
    "Balancieren, bauen, matschen und beobachten. Der Wald bietet Platz für eigene Ideen und kleine, große Erfolgserlebnisse.",
  ],
  [
    5,
    "Gemeinsam wachsen",
    "Wir hören einander zu, finden Lösungen und achten aufeinander. Gemeinschaft wächst in den kleinen Momenten.",
  ],
];
// Sparse, stable positions keep the atmosphere consistent across rerenders.
// The first eight also form the quieter mobile composition.
const airParticles = [
  [8, 21, 22, 0.72, false],
  [91, 54, 16, 0.66, false],
  [15, 60, 9, 0.48, false],
  [82, 83, 18, 0.62, false],
  [47, 8, 7, 0.36, false],
  [57, 88, 10, 0.4, false],
  [18, 38, 10, 0.62, true],
  [77, 64, 9, 0.58, true],
  [22, 13, 6, 0.4, false],
  [29, 82, 8, 0.4, false],
  [72, 27, 8, 0.44, false],
  [87, 13, 17, 0.66, false],
  [43, 55, 7, 0.4, true],
  [10, 83, 10, 0.5, false],
  [95, 79, 7, 0.6, false],
];

function Link({ href, children, external = false, ...props }) {
  return (
    <a
      className="text-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external ? (
        <ArrowUpRight size={20} aria-hidden="true" />
      ) : (
        <ArrowRight size={20} aria-hidden="true" />
      )}
      {external && <span className="sr-only"> (öffnet einen neuen Tab)</span>}
    </a>
  );
}

function ConceptPhoto({ src, width, height, alt, title, className = "" }) {
  return (
    <figure className={`concept-photo ${className}`}>
      <div className="photo-window">
        <img
          src={src}
          width={width}
          height={height}
          alt={`KI-Konzeptfoto: ${alt}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>
        {title}
        <span className="photo-provenance">KI-Konzeptfoto</span>
      </figcaption>
    </figure>
  );
}

function ForestWorld() {
  const frame = useRef(null);
  const [segments, setSegments] = useState(24);
  const [birdTop, setBirdTop] = useState(840);
  const [owlTop, setOwlTop] = useState(3900);
  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    // Alternate the same Adobe bark passage vertically so every joint meets
    // its matching edge. The scene itself never repeats.
    const measure = () => {
      const welcome = node.parentElement.querySelector("#kindergarten");
      if (welcome) {
        const inset = window.matchMedia("(max-width: 700px)").matches
          ? -15
          : 30;
        setBirdTop(
          Math.round(
            welcome.getBoundingClientRect().top -
              node.getBoundingClientRect().top +
              inset,
          ),
        );
      }
      const parents = node.parentElement.querySelector("#eltern");
      if (parents) {
        setOwlTop(
          Math.round(
            parents.getBoundingClientRect().top -
              node.getBoundingClientRect().top +
              (window.matchMedia("(max-width: 700px)").matches ? 20 : 100),
          ),
        );
      }
      const trunk = node.querySelector(".tree-trunk");
      const tile = node.querySelector(".trunk-segment");
      if (!trunk || !tile) return;
      const height = tile.getBoundingClientRect().height;
      if (height) setSegments(Math.ceil(trunk.clientHeight / height) + 1);
    };
    const resize = new ResizeObserver(measure);
    resize.observe(node);
    return () => resize.disconnect();
  }, []);
  return (
    <div ref={frame} className="forest-frame" aria-hidden="true">
      <ForestAtmosphere />
      {["entry", "clearing", "distance"].map((place) => (
        <div
          key={place}
          className={`forest-cloud forest-cloud--${place}`}
          data-cloud
        >
          <img
            src="/images/adobe-life/clouds.png"
            width="1000"
            height="571"
            alt=""
            loading={place === "entry" ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="bird-flight" style={{ top: birdTop }}>
        <LivingBird />
      </div>
      <div className="owl-perch" style={{ top: owlTop }}>
        <div className="owl-peek">
          <div className="owl-anatomy">
            <img
              className="owl-body"
              src="/images/adobe-owl/body.png"
              width="320"
              height="505"
              alt=""
              loading="lazy"
            />
            <img
              className="owl-head"
              src="/images/adobe-owl/head.png"
              width="260"
              height="202"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {["left", "right"].map((side) => (
        <div key={side} className={`edge-tree edge-tree--${side}`}>
          <div className="tree-trunk">
            {Array.from({ length: segments }, (_, index) => (
              <img
                key={index}
                className="trunk-segment"
                src="/images/adobe-oaks/trunk.png"
                width="384"
                height="523"
                alt=""
              />
            ))}
          </div>
          <div className="tree-canopy">
            <img
              className="tree-crown"
              src="/images/adobe-oaks/canopy.png"
              width="1100"
              height="1414"
              alt=""
              fetchPriority="high"
            />
          </div>
          <img
            className="tree-roots"
            src="/images/adobe-oaks/roots.png"
            width="1100"
            height="856"
            alt=""
            loading="lazy"
          />
        </div>
      ))}
      <SquirrelCompanion />
      <div className="forest-twig forest-twig--left" data-ambient>
        <img
          src="/images/adobe-life/oak-twig.png"
          width="600"
          height="600"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="forest-twig forest-twig--right" data-ambient>
        <img
          src="/images/adobe-life/oak-twig.png"
          width="600"
          height="600"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="ground-fern" data-ambient>
        <img
          src="/images/adobe-forest/ferns.png"
          width="1152"
          height="896"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ForestAtmosphere() {
  return (
    <div className="forest-air-track">
      <div className="forest-air">
        <div className="forest-air-depth">
          {airParticles.map(([x, y, size, opacity, glow], index) => (
            <div
              key={index}
              className={`air-particle${glow ? " air-particle--glimmer" : ""}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                "--grain-size": `${size}px`,
                "--grain-opacity": opacity,
              }}
              data-air-opacity={opacity}
            >
              <div className="air-drift">
                <img
                  src="/images/adobe-atmosphere/pollen.png"
                  width="96"
                  height="110"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SquirrelCompanion() {
  return (
    <div className="squirrel-track">
      <div className="squirrel-companion">
        <div className="squirrel-anatomy">
          <img
            className="squirrel-tail"
            src="/images/adobe-squirrel/tail.png"
            width="320"
            height="480"
            alt=""
          />
          {["hind", "fore"].map((limb) => (
            <img
              key={limb}
              className={`squirrel-leg squirrel-${limb}leg squirrel-${limb}leg--far`}
              src={`/images/adobe-squirrel/${limb}leg.png`}
              width="220"
              height="201"
              alt=""
            />
          ))}
          <img
            className="squirrel-body"
            src="/images/adobe-squirrel/body.png"
            width="320"
            height="421"
            alt=""
          />
          {["hind", "fore"].map((limb) => (
            <img
              key={limb}
              className={`squirrel-leg squirrel-${limb}leg squirrel-${limb}leg--near`}
              src={`/images/adobe-squirrel/${limb}leg.png`}
              width="220"
              height="201"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LivingBird() {
  return (
    <div className="journey-bird" aria-hidden="true">
      <div className="bird-anatomy">
        <img
          className="bird-wing bird-wing--far"
          src="/images/adobe-life/bird-wing.png"
          width="300"
          height="267"
          alt=""
        />
        <img
          className="bird-body"
          src="/images/adobe-life/bird-body.png"
          width="400"
          height="239"
          alt=""
        />
        <img
          className="bird-wing bird-wing--near"
          src="/images/adobe-life/bird-wing.png"
          width="300"
          height="267"
          alt=""
        />
      </div>
    </div>
  );
}

function Butterfly({ className = "" }) {
  return (
    <div className={`forest-butterfly ${className}`} aria-hidden="true">
      <img
        src="/images/adobe-life/butterfly.png"
        width="260"
        height="260"
        alt=""
        loading="lazy"
      />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const key = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (
        !nav.current?.contains(event.target) &&
        !toggle.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("click", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", outside);
    };
  }, [menuOpen]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)");
    const close = () => setMenuOpen(false);
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="reading-progress" aria-hidden="true" />
      <div className="header-inner">
        <a
          className="brand"
          href="#start"
          aria-label="Waldlinge – zur Startseite"
        >
          <img
            src="/images/waldlinge-logo.webp"
            width="92"
            height="92"
            alt=""
          />
          <span>
            <span className="brand-name">
              waldlinge<span className="brand-dot">.</span>
            </span>
            <span className="brand-subtitle">Waldkindergarten Bornheim</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="hauptnavigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <List size={22} aria-hidden="true" />
          )}
          <span>{menuOpen ? "Schließen" : "Menü"}</span>
        </button>
        <nav
          ref={nav}
          id="hauptnavigation"
          className={`navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Hauptnavigation"
        >
          {navigation.map(([name, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {name}
            </a>
          ))}
          <a
            className="button button-green nav-contact"
            href="#kontakt"
            onClick={closeMenu}
          >
            Waldluft schnuppern <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Parents() {
  const [open, setOpen] = useState(null);
  return (
    <section
      className="parents section-shell"
      id="eltern"
      tabIndex="-1"
      aria-labelledby="parents-title"
    >
      <div className="parents-intro" data-reveal>
        <p className="eyebrow">Für euch als Familie</p>
        <h2 id="parents-title">
          Große Fragen.
          <br />
          <em>Ein offenes Ohr.</em>
        </h2>
        <p>
          Hier findet ihr erste Antworten. Für alles Weitere sind wir persönlich
          da.
        </p>
        <Link href="mailto:info@waldlinge.org">Fragt uns einfach</Link>
        <aside className="playgroup-note">
          <h3>Erst mal Waldluft schnuppern?</h3>
          <p>
            Jenni organisiert unsere Eltern-Kind-Waldspielgruppe. Fragt sie nach
            aktuellen Treffen.
          </p>
          <Link href="mailto:jenni@waldlinge.org">Zur Waldspielgruppe</Link>
        </aside>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <div className="faq" key={question}>
            <h3>
              <button
                aria-expanded={open === index}
                aria-controls={`answer-${index}`}
                id={`question-${index}`}
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{question}</span>
                {open === index ? (
                  <Minus size={19} aria-hidden="true" />
                ) : (
                  <Plus size={19} aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              className="faq-answer"
              id={`answer-${index}`}
              role="region"
              aria-labelledby={`question-${index}`}
              hidden={open !== index}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ reduceMotion, onMotionChange }) {
  return (
    <footer>
      <div className="section-shell">
        <div className="footer-grid">
          <div>
            <a className="footer-brand" href="#start">
              waldlinge.
            </a>
            <p>
              Kleine Schritte.
              <br />
              Große Welt.
            </p>
          </div>
          <div>
            <h2>Hier sind wir zu Hause</h2>
            <address>
              Waldlinge Bornheim e.V.
              <br />
              Rüttersweg 177a
              <br />
              53332 Bornheim
            </address>
            <Link
              href="https://www.openstreetmap.org/search?query=R%C3%BCttersweg%20177a%2053332%20Bornheim"
              external
            >
              Anreise planen
            </Link>
          </div>
          <div>
            <h2>Lasst uns sprechen</h2>
            <a href="mailto:info@waldlinge.org">info@waldlinge.org</a>
            <p className="footer-label">Waldhandy · pädagogisches Team</p>
            <a href="tel:+4915733809336">0157 33809336</a>
            <Link href="https://waldlinge.org/kontakt/">
              Alle Kontaktmöglichkeiten
            </Link>
          </div>
          <div>
            <h2>Mitwirken</h2>
            <p className="footer-label">Teil des Teams werden</p>
            <a href="mailto:personal@waldlinge.org">personal@waldlinge.org</a>
            <p className="footer-label">Die Waldlinge unterstützen</p>
            <a href="mailto:finanzen@waldlinge.org">finanzen@waldlinge.org</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Waldlinge Bornheim e.V.</span>
          <div>
            <button
              className="motion-toggle"
              aria-pressed={reduceMotion}
              onClick={onMotionChange}
            >
              {reduceMotion
                ? "Bewegung wieder einschalten"
                : "Bewegung reduzieren"}
            </button>
            <a href="https://waldlinge.org/impressum/">Impressum</a>
            <a href="https://waldlinge.org/datenschutz/">Datenschutz</a>
            <a href="#start">
              Nach oben <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ForestHome() {
  const root = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  useForestMotion(root, reduceMotion);
  return (
    <div
      ref={root}
      className={`forest-home${reduceMotion ? " motion-reduced" : ""}`}
    >
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      <div className="forest-journey">
        <ForestWorld />
        <main id="inhalt" tabIndex="-1">
          <section
            className="chapter chapter--hero section-shell"
            id="start"
            aria-labelledby="hero-title"
          >
            <div className="hero-copy">
              <p className="eyebrow">Waldkindergarten · Bornheim-Merten</p>
              <h1 id="hero-title">
                Kleine Schritte.
                <br />
                <em>Große Welt.</em>
              </h1>
              <p className="hero-intro">
                Ein Wald voller Möglichkeiten.
                <br />
                Ein Ort, an dem dein Kind es selbst sein darf.
              </p>
              <a className="button button-green" href="#kindergarten">
                Kommt mit in unseren Wald{" "}
                <ArrowDown size={19} aria-hidden="true" />
              </a>
              <div className="hero-shortcuts">
                <a href="#alltag">Unser Waldalltag</a>
                <span aria-hidden="true">·</span>
                <a href="#eltern">Eure Fragen</a>
              </div>
            </div>
            <div
              className="partners"
              aria-label="Zusammenarbeit und pädagogische Impulse"
            >
              <div>
                <p>Wir arbeiten zusammen mit</p>
                <div className="partner-mark">
                  <img
                    src="/images/wildnisschule-logo.webp"
                    alt="Natur- und Wildnisschule Teutoburger Wald"
                    width="700"
                    height="237"
                  />
                </div>
              </div>
              <div>
                <p>Geschult von Nicola Schmidt vom</p>
                <div className="partner-mark">
                  <img
                    src="/images/artgerecht-logo.webp"
                    alt="artgerecht-Projekt"
                    width="800"
                    height="179"
                  />
                </div>
              </div>
            </div>
            <div className="hero-bottom" aria-hidden="true">
              <ArrowDown size={18} aria-hidden="true" />
            </div>
          </section>

          <section
            className="chapter chapter--welcome section-shell"
            id="kindergarten"
            tabIndex="-1"
            aria-labelledby="welcome-title"
          >
            <div className="welcome-story">
              <div className="welcome-intro" data-reveal>
                <div className="section-heading">
                  <p className="eyebrow">Unser Kindergarten</p>
                  <h2 id="welcome-title">
                    Weniger vorgeben.
                    <br />
                    <em>Mehr entdecken.</em>
                  </h2>
                </div>
                <div className="welcome-note">
                  <p>
                    Wir sind die Waldlinge: ein bedürfnisorientierter
                    Waldkindergarten aus Elterninitiative. Jeden Tag draußen.
                    Immer auf Augenhöhe.
                  </p>
                  <div
                    className="forest-facts"
                    aria-label="Die Waldlinge auf einen Blick"
                  >
                    <span>3 Jahre bis Schuleintritt</span>
                    <span>Seit Januar 2020</span>
                    <span>Bornheim-Merten</span>
                  </div>
                </div>
              </div>
              <div className="welcome-photo" data-photo-reveal>
                <ConceptPhoto
                  src="/images/adobe-photography/woodland-path.png"
                  width="1120"
                  height="871"
                  alt="Drei Kinder gehen mit kleinen Rucksäcken von hinten gesehen einen lichten Waldweg entlang"
                  title="Gemeinsam auf Entdeckung."
                />
                <p className="concept-note">
                  Unsere KI-Konzeptfotos zeigen beispielhafte Waldmomente, keine
                  tatsächlichen Waldlinge-Kinder.
                </p>
              </div>
            </div>
            <div className="values-panel">
              <div className="values-grid" id="entdeckungen">
                {values.map(([title, text], index) => (
                  <article key={title} data-value>
                    <BotanicalIcon variant={index} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <Link href="https://waldlinge.org/wer-wir-sind/">
                Mehr über unsere Haltung
              </Link>
            </div>
          </section>

          <section
            className="chapter chapter--adventure section-shell"
            id="alltag"
            tabIndex="-1"
            aria-labelledby="adventure-title"
          >
            <div className="clearing-visual" data-photo-reveal>
              <figure className="clearing-original">
                <img
                  src="/images/waldlinge-baumwurzel.webp"
                  width="1400"
                  height="1050"
                  alt="Ein Waldlinge-Kind erkundet eine große Baumwurzel im Wald"
                  loading="lazy"
                />
                <figcaption>
                  Vom Bauwagen am SSV Merten geht es hinaus in den Wald.
                  <span className="photo-provenance">
                    Originalaufnahme · Waldlinge
                  </span>
                </figcaption>
              </figure>
              <ConceptPhoto
                className="discovery-photo"
                src="/images/adobe-photography/nature-find.png"
                width="720"
                height="926"
                alt="Kleine Hände halten einen Zapfen und Moos über grünem Farn"
                title="Ein Fund. Viele Fragen."
              />
              <img
                className="photo-fern"
                src="/images/adobe-forest/ferns.png"
                width="1152"
                height="896"
                alt=""
                aria-hidden="true"
                loading="lazy"
                data-drift
              />
              <img
                className="journey-loupe"
                src="/images/adobe-values/nature.png"
                width="1024"
                height="1024"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <Butterfly className="butterfly--clearing" />
            </div>
            <div className="chapter-copy" data-reveal>
              <p className="eyebrow">Unser Waldalltag</p>
              <h2 id="adventure-title">
                „Ich kann das.“
                <br />
                <em>Auf meine Weise.</em>
              </h2>
              <p>
                Balancieren, bauen, matschen. Im freien Spiel entdecken Kinder
                die Welt – und was in ihnen steckt.
              </p>
              <div className="day-list">
                {steps.map(([icon, title, text]) => (
                  <details key={title}>
                    <summary>
                      <BotanicalIcon variant={icon} />
                      <span>{title}</span>
                      <Plus size={17} aria-hidden="true" />
                    </summary>
                    <p>{text}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section
            className="together section-shell"
            id="gemeinschaft"
            tabIndex="-1"
            aria-labelledby="together-title"
          >
            <div className="together-copy" data-reveal>
              <p className="eyebrow">Unsere Elterninitiative</p>
              <h2 id="together-title">
                Es braucht ein Dorf.
                <br />
                <em>Und einen Wald.</em>
              </h2>
              <p>
                Kinder, Familien und unser pädagogisches Team gestalten diesen
                Ort gemeinsam. Achtsam, wertschätzend und mit Raum für jeden.
              </p>
              <details className="community-detail">
                <summary>
                  Wie wir diesen Ort gemeinsam gestalten{" "}
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>
                  Eltern bringen ihre Stärken beim Gärtnern, Werkeln und
                  Organisieren ein und sind auch im pädagogischen Alltag
                  willkommen. Gewaltfreie Kommunikation prägt unser Miteinander.
                  Aus einer Idee von Jenni Klein und weiteren Familien wurde im
                  Januar 2020 unser Kindergarten.
                </p>
                <Link href="https://waldlinge.org/die-geschichte-der-waldlinge/">
                  Unsere Geschichte
                </Link>
              </details>
            </div>
            <div className="community-photos" data-photo-reveal>
              <ConceptPhoto
                src="/images/adobe-photography/mud-kitchen.png"
                width="1100"
                height="856"
                alt="Zwei Kinder rühren mit Stöcken und Blättern an einer hölzernen Matschküche im Wald"
                title="Zusammen wird mehr daraus."
              />
              <figure className="moment moment--original">
                <img
                  src="/images/waldlinge-werkeln.webp"
                  alt="Zwei Waldlinge-Kinder probieren kleine Sägen an einem Baumstamm aus"
                  width="800"
                  height="1200"
                  loading="lazy"
                />
                <figcaption>
                  Gemeinsam anpacken, gemeinsam wachsen.
                  <span className="photo-provenance">
                    Originalaufnahme · Waldlinge
                  </span>
                </figcaption>
              </figure>
            </div>
          </section>

          <WaldlingeFilm />
          <Parents />

          <section
            className="join section-shell"
            id="kontakt"
            tabIndex="-1"
            aria-labelledby="join-title"
          >
            <div className="join-inner" data-reveal>
              <p className="eyebrow">Kennenlernen</p>
              <h2 id="join-title">
                Ein kleiner Schritt.
                <br />
                <em>Ein gutes Gefühl.</em>
              </h2>
              <p>Ihr möchtet uns kennenlernen? Wir freuen uns auf euch.</p>
              <div className="join-actions">
                <a
                  className="button button-green"
                  href="mailto:info@waldlinge.org"
                >
                  Hallo, Waldlinge!{" "}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
                <Link href="https://bornheim.kita-navigator.org/" external>
                  Zur Anmeldung
                </Link>
              </div>
              <p className="small-note" id="anmeldung" tabIndex="-1">
                Vormerkung im Kita-Navigator Bornheim – noch keine Platzzusage.
              </p>
            </div>
            <Butterfly className="butterfly--ground" />
          </section>
        </main>
        <Footer
          reduceMotion={reduceMotion}
          onMotionChange={() => setReduceMotion(!reduceMotion)}
        />
      </div>
    </div>
  );
}
