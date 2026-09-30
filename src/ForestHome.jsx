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
    "Ein Käfer. Ein Blatt. Tausend Fragen. Wir geben der Neugier Raum und erleben die Natur mit allen Sinnen.",
  ],
  [
    "Im eigenen Tempo",
    "Mutig voran oder erst einmal beobachten: Jedes Kind darf seinen Weg gehen. Wir begleiten es aufmerksam.",
  ],
  [
    "Gemeinschaft leben",
    "Sich gesehen fühlen. Zusammen Neues wagen. Kinder, Familien und unser Team gehören hier zusammen.",
  ],
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

function MobileArt({ variant = "forest" }) {
  const [width, height] = {
    forest: [1111, 1082],
    birches: [896, 1168],
    ferns: [1152, 896],
  }[variant];
  return (
    <img
      className={`mobile-art mobile-art--${variant}`}
      src={`/images/adobe-forest/${variant}.png`}
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      loading={variant === "forest" ? "eager" : "lazy"}
    />
  );
}

function ForestWorld() {
  return (
    <div className="world-layer" aria-hidden="true">
      <div className="world-canvas">
        <img
          className="world-forest"
          src="/images/adobe-forest/forest.png"
          width="1111"
          height="1082"
          alt=""
          fetchPriority="high"
        />
        <img
          className="world-birches"
          src="/images/adobe-forest/birches.png"
          width="896"
          height="1168"
          alt=""
        />
        <img
          className="world-ferns"
          src="/images/adobe-forest/ferns.png"
          width="1152"
          height="896"
          alt=""
        />
        <img
          className="world-swing"
          src="/images/adobe-values/discovery.png"
          width="1024"
          height="1024"
          alt=""
        />
      </div>
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
            Kommt uns kennenlernen <ArrowUpRight size={18} aria-hidden="true" />
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
        <p className="eyebrow">06 / Gut zu wissen</p>
        <h2 id="parents-title">
          Große Fragen.
          <br />
          <em>Ein offenes Ohr.</em>
        </h2>
        <p>
          Ein neuer Lebensabschnitt bringt viele Fragen mit sich. Hier findet
          ihr erste Antworten. Und wir sind gerne persönlich für euch da.
        </p>
        <Link href="mailto:info@waldlinge.org">Fragt uns einfach</Link>
        <img
          className="parents-fern"
          src="/images/adobe-forest/ferns.png"
          width="1152"
          height="896"
          alt=""
          aria-hidden="true"
          loading="lazy"
          data-drift
        />
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
      <main id="inhalt" tabIndex="-1">
        <div className="forest-journey">
          <ForestWorld />
          <section
            className="chapter chapter--hero section-shell"
            id="start"
            aria-labelledby="hero-title"
          >
            <div className="hero-copy">
              <p className="eyebrow">
                Waldkindergarten in Bornheim · Seit 2020
              </p>
              <h1 id="hero-title">
                Kleine Schritte.
                <br />
                <em>Große Welt.</em>
              </h1>
              <p className="hero-intro">
                Ein Wald voller Möglichkeiten.
                <br />
                Und ein Ort, an dem dein Kind
                <br className="desktop-break" /> ganz es selbst sein darf.
              </p>
              <a className="button button-green" href="#kindergarten">
                Entdeckt die Waldlinge{" "}
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
            <MobileArt />
            <div className="hero-bottom">
              <a className="scroll-invitation" href="#kindergarten">
                <ArrowDown size={21} weight="light" aria-hidden="true" />
                <span>Ein Stück Wald. Ein großes Abenteuer.</span>
              </a>
              <span className="hero-location">
                Draußen wachsen. Gemeinsam geborgen.
              </span>
            </div>
          </section>
          <section
            className="chapter chapter--welcome section-shell"
            id="kindergarten"
            tabIndex="-1"
            aria-labelledby="welcome-title"
          >
            <div className="chapter-copy chapter-copy--right">
              <p className="eyebrow">01 / Dem Weg folgen</p>
              <h2 id="welcome-title">
                Hier beginnt
                <br />
                <em>das große Staunen.</em>
              </h2>
              <p>
                Ein Rascheln im Laub. Eine Wurzel, die zum Kletterberg wird. Im
                Wald braucht es oft nur einen kleinen Moment, um eine ganze Welt
                zu entdecken.
              </p>
              <p>
                Wir sind die Waldlinge: ein aus Elterninitiative gegründeter
                Waldkindergarten für Kinder ab drei Jahren bis zum
                Schuleintritt. Bedürfnisorientiert, auf Augenhöhe – und jeden
                Tag draußen.
              </p>
              <Link href="https://waldlinge.org/wer-wir-sind/">
                Lernt uns näher kennen
              </Link>
            </div>
            <MobileArt variant="birches" />
          </section>
          <section
            className="chapter chapter--values section-shell"
            id="entdeckungen"
            tabIndex="-1"
            aria-labelledby="values-title"
          >
            <div className="section-heading">
              <p className="eyebrow">02 / Kleine Wunder, großes Wachsen</p>
              <h2 id="values-title">
                Alles beginnt
                <br />
                <em>mit Neugier.</em>
              </h2>
              <p>
                Für die Lauten und die Leisen. Die Wilden und die Vorsichtigen.
                <br className="desktop-break" /> Für jedes Kind und seinen ganz
                eigenen Weg.
              </p>
            </div>
            <div className="values-grid">
              {values.map(([title, text], index) => (
                <article key={title} data-value>
                  <BotanicalIcon variant={index} />
                  <span className="value-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>
          <section
            className="chapter chapter--adventure section-shell"
            id="alltag"
            tabIndex="-1"
            aria-labelledby="adventure-title"
          >
            <div className="chapter-copy">
              <p className="eyebrow">03 / Jeden Tag ein kleines Abenteuer</p>
              <h2 id="adventure-title">
                „Ich kann das.“
                <br />
                <em>Auf meine Weise.</em>
              </h2>
              <p>
                Ein Stock wird zur Angel. Eine Pfütze zum Ozean. Und aus einer
                Frage wird eine Entdeckungsreise. Im freien Spiel erleben
                Kinder, was in ihnen steckt.
              </p>
              <div className="day-list">
                {steps.map(([icon, title, text]) => (
                  <article key={title} data-reveal>
                    <BotanicalIcon variant={icon} />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <MobileArt variant="ferns" />
          </section>
        </div>
        <section
          className="clearing section-shell"
          id="gemeinschaft"
          tabIndex="-1"
          aria-labelledby="clearing-title"
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
              <figcaption>Ein echter Einblick in unser Waldleben.</figcaption>
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
          </div>
          <div className="clearing-copy" data-reveal>
            <p className="eyebrow">04 / Mitten im Wald. Mitten im Leben.</p>
            <h2 id="clearing-title">
              Frei entdecken.
              <br />
              <em>Geborgen sein.</em>
            </h2>
            <p>
              Wer sich sicher fühlt, kann Neues wagen. Unser pädagogisches Team
              begleitet die Kinder individuell, achtsam und mit einem offenen
              Blick für ihre Bedürfnisse.
            </p>
            <p>
              Unser Gruppenbauwagen steht auf dem Gelände des SSV Merten. Von
              hier geht es in den angrenzenden Wald: unser Lern- und Lebensraum
              voller Möglichkeiten.
            </p>
            <div className="place-note">
              <span>Unser Ort</span>
              <p>
                Bornheim-Merten
                <br />
                Wald. Bauwagen. Ganz viel Freiraum.
              </p>
            </div>
          </div>
        </section>
        <section
          className="partners section-shell"
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
        </section>
        <WaldlingeFilm />
        <section
          className="together section-shell"
          aria-labelledby="together-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">05 / Mit Herz. Mit Händen. Miteinander.</p>
            <h2 id="together-title">
              Es braucht ein Dorf.
              <br />
              <em>Und manchmal einen Wald.</em>
            </h2>
            <p>
              Die Waldlinge sind ein Gemeinschaftsprojekt. Eltern, Kinder und
              unser
              <br className="desktop-break" /> pädagogisches Team gestalten
              diesen Ort gemeinsam.
            </p>
          </div>
          <div className="together-grid">
            <figure className="moment moment--tall" data-photo-reveal>
              <img
                src="/images/waldlinge-werkeln.webp"
                alt="Zwei Kinder probieren kleine Sägen an einem Baumstamm aus"
                width="800"
                height="1200"
                loading="lazy"
              />
              <figcaption>
                Mit den eigenen Händen die Welt entdecken.
              </figcaption>
            </figure>
            <div className="together-middle" data-reveal>
              <BotanicalIcon variant={2} />
              <h3>
                Hier gehören
                <br />
                wir zusammen.
              </h3>
              <p>
                Gärtnern, Werkeln, Organisieren: Familien bringen ihre Stärken
                ein. Wertschätzung und gewaltfreie Kommunikation prägen unser
                Miteinander. Eltern sind auch im pädagogischen Alltag
                willkommen.
              </p>
              <Link href="https://waldlinge.org/die-geschichte-der-waldlinge/">
                Unsere Geschichte
              </Link>
            </div>
            <figure className="moment moment--wide" data-photo-reveal>
              <img
                src="/images/waldlinge-bollerwagen.webp"
                alt="Eine Erwachsene und Kinder sind mit einem Bollerwagen auf einem grünen Waldweg unterwegs"
                width="1200"
                height="800"
                loading="lazy"
              />
              <figcaption>Zusammen draußen unterwegs.</figcaption>
            </figure>
          </div>
          <p className="story-note">
            Aus einer Idee von Jenni Klein und weiteren Familien ist ein Ort zum
            Wachsen geworden. Seit Januar 2020.
          </p>
        </section>
        <Parents />
        <section
          className="playgroup section-shell"
          aria-labelledby="playgroup-title"
        >
          <div data-reveal>
            <p className="eyebrow">Für kleine und große Waldneugierige</p>
            <h2 id="playgroup-title">
              Erst mal
              <br />
              <em>Waldluft schnuppern.</em>
            </h2>
            <p>
              Gemeinsam draußen sein und die Natur entdecken: Jenni organisiert
              eine Eltern-Kind-Waldspielgruppe. Aktuelle Treffen und weitere
              Informationen bekommt ihr direkt bei ihr.
            </p>
            <Link href="mailto:jenni@waldlinge.org">
              Zur Waldspielgruppe anfragen
            </Link>
          </div>
          <img
            src="/images/adobe-forest/birches.png"
            className="playgroup-art"
            width="896"
            height="1168"
            alt=""
            aria-hidden="true"
            loading="lazy"
            data-drift
          />
        </section>
        <section
          className="join"
          id="kontakt"
          tabIndex="-1"
          aria-labelledby="join-title"
        >
          <div className="join-forest" aria-hidden="true">
            <img
              src="/images/adobe-forest/forest.png"
              width="1111"
              height="1082"
              alt=""
              loading="lazy"
              data-join-art
            />
          </div>
          <div className="join-inner section-shell">
            <p className="eyebrow">07 / Vielleicht beginnt euer Weg hier</p>
            <h2 id="join-title">
              Ein kleiner Schritt.
              <br />
              <em>Ein gutes Gefühl.</em>
            </h2>
            <p>
              Ihr möchtet die Waldlinge kennenlernen?
              <br />
              Erzählt uns von euch. Wir freuen uns auf euch.
            </p>
            <div className="join-actions">
              <a
                className="button button-green"
                href="mailto:info@waldlinge.org"
              >
                Hallo, Waldlinge! <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <Link href="https://bornheim.kita-navigator.org/" external>
                Zur Anmeldung
              </Link>
            </div>
            <p className="small-note" id="anmeldung" tabIndex="-1">
              Die Anmeldung erfolgt über den Kita-Navigator der Stadt Bornheim.
              <br />
              Eine Vormerkung ist noch keine Platzzusage.
            </p>
          </div>
        </section>
      </main>
      <Footer
        reduceMotion={reduceMotion}
        onMotionChange={() => setReduceMotion(!reduceMotion)}
      />
    </div>
  );
}
