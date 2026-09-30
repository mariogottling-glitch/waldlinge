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

function ForestWorld() {
  const frame = useRef(null);
  const [segments, setSegments] = useState(24);
  const [birdTop, setBirdTop] = useState(840);
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
            <div className="section-heading" data-reveal>
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
                Waldkindergarten aus Elterninitiative. Jeden Tag draußen. Immer
                auf Augenhöhe.
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
            <div
              className="partners"
              aria-label="Zusammenarbeit und pädagogische Impulse"
            >
              <div>
                <p>Wir arbeiten zusammen mit</p>
                <img
                  src="/images/wildnisschule-logo.webp"
                  alt="Natur- und Wildnisschule Teutoburger Wald"
                  width="700"
                  height="237"
                  loading="lazy"
                />
              </div>
              <div>
                <p>Geschult von Nicola Schmidt vom</p>
                <img
                  src="/images/artgerecht-logo.webp"
                  alt="artgerecht-Projekt"
                  width="800"
                  height="179"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section
            className="chapter chapter--adventure section-shell"
            id="alltag"
            tabIndex="-1"
            aria-labelledby="adventure-title"
          >
            <div className="clearing-visual" data-photo-reveal>
              <figure>
                <img
                  src="/images/waldlinge-baumwurzel.webp"
                  width="1400"
                  height="1050"
                  alt="Ein Waldlinge-Kind erkundet eine große Baumwurzel im Wald"
                  loading="lazy"
                />
                <figcaption>
                  Vom Bauwagen am SSV Merten geht es hinaus in den Wald.
                </figcaption>
              </figure>
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
            <figure className="moment" data-photo-reveal>
              <img
                src="/images/waldlinge-werkeln.webp"
                alt="Zwei Kinder probieren kleine Sägen an einem Baumstamm aus"
                width="800"
                height="1200"
                loading="lazy"
              />
              <figcaption>Gemeinsam anpacken, gemeinsam wachsen.</figcaption>
            </figure>
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
