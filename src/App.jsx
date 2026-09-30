import { useEffect, useRef, useState } from "react";
import { BotanicalIcon } from "./BotanicalIcon";
import { Waldreise, usePageMotion } from "./Waldreise";
import {
  ArrowRight,
  ArrowUpRight,
  List,
  X,
  Plus,
  Minus,
  Play,
} from "@phosphor-icons/react";

const nav = [
  ["Unser Kindergarten", "#kindergarten"],
  ["Alltag", "#alltag"],
  ["Gemeinschaft", "#gemeinschaft"],
  ["Für Eltern", "#eltern"],
];
const values = [
  [
    "Natur entdecken",
    "Mit allen Sinnen die Jahreszeiten erleben, Tiere und Pflanzen kennenlernen und die Vielfalt unserer Umgebung staunend erforschen.",
  ],
  [
    "Im eigenen Tempo",
    "Jedes Kind ist einzigartig. Im Wald hat es die Zeit, die es braucht, um seine Fähigkeiten zu entfalten und selbstbewusst seinen Weg zu gehen.",
  ],
  [
    "Gemeinschaft leben",
    "Wir erleben ein wertschätzendes Miteinander, in dem Kinder, Familien und das pädagogische Team zusammengehören.",
  ],
];
const questions = [
  [
    "Wie lernen wir die Waldlinge kennen?",
    <>
      Schreibt uns an <a href="mailto:info@waldlinge.org">info@waldlinge.org</a>
      . Wir beantworten eure Fragen zum Konzept und besprechen mit euch, wie ihr
      uns kennenlernen könnt.
    </>,
  ],
  [
    "Wie melden wir unser Kind an?",
    <>
      Die Anmeldung führt über den{" "}
      <a
        href="https://bornheim.kita-navigator.org/"
        target="_blank"
        rel="noreferrer"
      >
        Kita-Navigator der Stadt Bornheim (öffnet einen neuen Tab)
      </a>
      . Dort könnt ihr euch über das aktuelle Aufnahmeverfahren informieren.
      Eine Vormerkung ist noch keine Platzzusage.
    </>,
  ],
  [
    "Was bedeutet Elterninitiative?",
    "Die Waldlinge sind ein Gemeinschaftsprojekt. Eltern bringen sich mit ihren Möglichkeiten ein, zum Beispiel beim Gärtnern, bei handwerklichen Aufgaben oder in der Organisation. Welche Aufgaben aktuell dazugehören, besprechen wir gemeinsam.",
  ],
  [
    "Wie gestaltet sich die Eingewöhnung?",
    "Eine vertrauensvolle Beziehung braucht Zeit. Wir begleiten die Eingewöhnung individuell und stimmen die einzelnen Schritte mit euch ab. Das Tempo orientiert sich an eurem Kind.",
  ],
  [
    "Was braucht unser Kind für den Wald?",
    "Kleidung und Ausrüstung sollen zu eurem Kind und zur Jahreszeit passen. Die aktuelle Ausstattungsliste und alle praktischen Hinweise erhaltet ihr direkt von unserem Team.",
  ],
  [
    "Wo erfahren wir Betreuungszeiten und Kosten?",
    <>
      Für aktuelle Betreuungszeiten, Beiträge und Fragen zur Aufnahme wendet
      euch bitte an <a href="mailto:info@waldlinge.org">unser Team</a>. Wir
      helfen euch dabei, den Rahmen für eure Familie zu klären.
    </>,
  ],
];
function TextLink({ href, children, ...props }) {
  return (
    <a className="text-link" href={href} {...props}>
      {children}
      <ArrowRight aria-hidden="true" size={23} weight="light" />
    </a>
  );
}

function WaldlingeFilm() {
  const [active, setActive] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const confirmButton = useRef(null);
  const playButton = useRef(null);
  const closeButton = useRef(null);
  const wasActive = useRef(false);
  useEffect(() => {
    if (confirming) confirmButton.current?.focus();
    else if (active) closeButton.current?.focus();
    else if (wasActive.current) playButton.current?.focus();
    wasActive.current = active || confirming;
  }, [active, confirming]);
  return (
    <section
      className="film section-shell"
      id="film"
      aria-labelledby="film-title"
    >
      <div className="film-heading">
        <p className="eyebrow">Ein kleiner Einblick. Ein großes Gefühl.</p>
        <h2 id="film-title">Kommt mit in unseren Wald.</h2>
        <p className="section-intro">
          Begegnungen, Entdeckungen und ganz viel Draußensein: Unser Film nimmt
          euch mit zu den Waldlingen.
        </p>
      </div>
      <div className={`film-frame${confirming ? " film-confirming" : ""}`}>
        {active ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/9mYhH0tuum4?autoplay=1&playsinline=1&rel=0&hl=de"
            title="Waldlinge Bornheim e.V. – unser Waldkindergarten im Film"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : confirming ? (
          <div
            className="film-consent"
            role="group"
            aria-labelledby="film-consent-title"
            onKeyDown={(event) => {
              if (event.key === "Escape") setConfirming(false);
            }}
          >
            <h3 id="film-consent-title">Video von YouTube laden?</h3>
            <p id="film-privacy">
              Mit eurer Zustimmung laden wir den Film von YouTube. Dabei wird
              unter anderem eure IP-Adresse an YouTube übermittelt.
            </p>
            <div className="film-consent-actions">
              <button
                ref={confirmButton}
                className="button button-gold"
                aria-describedby="film-privacy"
                onClick={() => {
                  setConfirming(false);
                  setActive(true);
                }}
              >
                Zustimmen &amp; abspielen
              </button>
              <button
                className="film-cancel"
                onClick={() => setConfirming(false)}
              >
                Zurück
              </button>
            </div>
          </div>
        ) : (
          <button
            ref={playButton}
            className="film-poster"
            onClick={() => setConfirming(true)}
          >
            <img
              src="/images/waldlinge-film.jpg"
              alt=""
              width="480"
              height="360"
              loading="lazy"
            />
            <span className="film-play">
              <Play size={30} weight="fill" aria-hidden="true" />
            </span>
            <span className="film-caption">
              Film ansehen <span>2 Minuten bei den Waldlingen · YouTube</span>
            </span>
          </button>
        )}
      </div>
      <div className="film-details">
        <div className="film-actions">
          {active && (
            <button
              ref={closeButton}
              className="film-close"
              onClick={() => setActive(false)}
            >
              Video schließen
            </button>
          )}
          <a
            href="https://www.youtube.com/watch?v=9mYhH0tuum4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auf YouTube ansehen <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (öffnet einen neuen Tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function App() {
  usePageMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const menuButton = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onClick = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !menuButton.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)");
    const close = () => setMenuOpen(false);
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  function navigate(event) {
    setMenuOpen(false);
    document
      .querySelector(event.currentTarget.getAttribute("href"))
      ?.focus({ preventScroll: true });
  }
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
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
              alt=""
              width="92"
              height="92"
            />
            <span>
              <span className="brand-name">Waldlinge</span>
              <span className="brand-subtitle">
                Waldkindergarten in Bornheim
              </span>
            </span>
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="hauptnavigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <List size={25} aria-hidden="true" />
            )}
            <span>{menuOpen ? "Schließen" : "Menü"}</span>
          </button>
          <nav
            ref={navRef}
            id="hauptnavigation"
            aria-label="Hauptnavigation"
            className={menuOpen ? "navigation is-open" : "navigation"}
          >
            {nav.map(([name, href]) => (
              <a key={href} href={href} onClick={navigate}>
                {name}
              </a>
            ))}
            <a
              className="button button-green nav-contact"
              href="#kontakt"
              onClick={navigate}
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>
      <main id="inhalt" tabIndex="-1">
        <section className="hero" id="start" aria-labelledby="hero-title">
          <picture className="hero-picture">
            <source
              media="(max-width: 700px)"
              srcSet="/images/forest-hero-mobile.webp"
            />
            <img
              src="/images/forest-hero.webp"
              alt="Kinder mit Rucksäcken auf einem sonnenbeschienenen Waldweg"
              width="1920"
              height="1100"
              fetchPriority="high"
            />
          </picture>
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="mobile-eyebrow">
                Waldkindergarten in Bornheim
              </span>
              <h1 id="hero-title">
                Draußen wachsen.
                <br />
                Gemeinsam geborgen.
              </h1>
              <p>
                Raum zum Entdecken. Zeit zum Wachsen.
                <br className="desktop-break" /> Ein Waldkindergarten, der
                Kinder achtsam
                <br className="desktop-break" /> begleitet und Familien
                verbindet.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#kindergarten">
                  Waldlinge kennenlernen
                </a>
                <TextLink href="#anmeldung">Infos zur Anmeldung</TextLink>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#waldreise">
            Unseren Wald entdecken <ArrowRight size={18} aria-hidden="true" />
          </a>
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
            />
          </div>
          <div>
            <p>Geschult von Nicola Schmidt vom</p>
            <img
              src="/images/artgerecht-logo.webp"
              alt="artgerecht-Projekt"
              width="800"
              height="179"
            />
          </div>
        </section>
        <Waldreise />
        <section
          className="values section-shell"
          id="kindergarten"
          tabIndex="-1"
          aria-labelledby="values-title"
        >
          <p className="location-line">
            <span>Bornheim · Natur erleben · Gemeinsam wachsen</span>
          </p>
          <h2 id="values-title">Kleine Entdeckungen. Großes Wachsen.</h2>
          <p className="section-intro">
            Die Lauten und die Leisen. Die Wilden und die Schüchternen.
            <br className="desktop-break" /> Bei uns darf jedes Kind ganz es
            selbst sein.
          </p>
          <div className="values-grid">
            {values.map(([title, text], index) => (
              <article
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <BotanicalIcon variant={index} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="about-kindergarten section-shell"
          aria-labelledby="about-title"
          data-reveal
        >
          <div>
            <p className="eyebrow">Waldlinge Bornheim e.V.</p>
            <h2 id="about-title">
              Draußen zu Hause.
              <br />
              Mitten in Bornheim.
            </h2>
          </div>
          <div>
            <p>
              Seit Januar 2020 gibt es die Waldlinge: einen aus Elterninitiative
              gegründeten Waldkindergarten für Kinder ab drei Jahren bis zum
              Schuleintritt.
            </p>
            <p>
              Unser Gruppenbauwagen steht auf dem Gelände des SSV Merten. Von
              dort geht es in den angrenzenden Wald – zum Spielen, Forschen und
              Erleben. Unser pädagogisches Team begleitet die Kinder
              bedürfnisorientiert, individuell und auf Augenhöhe.
            </p>
            <TextLink href="https://waldlinge.org/wer-wir-sind/">
              Mehr über die Waldlinge
            </TextLink>
          </div>
        </section>
        <section
          className="discovery"
          id="alltag"
          tabIndex="-1"
          aria-labelledby="discovery-title"
        >
          <img
            className="discovery-photo"
            src="/images/waldlinge-baumwurzel.webp"
            alt="Ein Kind mit roter Mütze erkundet eine große Baumwurzel im Wald"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <div className="discovery-copy" data-reveal>
            <p className="eyebrow">Natur. Neugier. Perspektiven.</p>
            <h2 id="discovery-title">
              Ein Wald voller
              <br /> Möglichkeiten.
            </h2>
            <p>
              Ob beim Bauen, Forschen, Spielen oder stillen Beobachten – der
              Wald ist unser vielfältiger Lern- und Lebensraum. Hier entstehen
              jeden Tag neue Geschichten, Fragen und Ideen.
            </p>
            <TextLink href="#waldalltag">Unser Alltag im Wald</TextLink>
          </div>
        </section>
        <section
          className="day section-shell"
          id="waldalltag"
          tabIndex="-1"
          aria-labelledby="day-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Draußen ist jeder Tag anders</p>
            <h2 id="day-title">Viel Raum für kleine Abenteuer.</h2>
            <p>
              Ein Stock wird zur Angel. Eine Wurzel zum Kletterberg.
              <br className="desktop-break" /> Und aus einer Frage wird eine
              ganze Entdeckungsreise.
            </p>
          </div>
          <div className="day-grid">
            <article data-reveal>
              <BotanicalIcon variant={3} />
              <h3>Ankommen & dazugehören</h3>
              <p>
                Vertraute Menschen und ein wertschätzendes Miteinander geben
                Kindern Sicherheit – und Raum, ganz sie selbst zu sein.
              </p>
            </article>
            <article data-reveal style={{ "--reveal-delay": "100ms" }}>
              <BotanicalIcon variant={4} />
              <h3>Entdecken & ausprobieren</h3>
              <p>
                Der Wald lädt zum Spielen, Beobachten und Bewegen ein. Wir
                begleiten neugierige Fragen und lassen Platz für eigene Ideen.
              </p>
            </article>
            <article data-reveal style={{ "--reveal-delay": "200ms" }}>
              <BotanicalIcon variant={5} />
              <h3>Gemeinsam wachsen</h3>
              <p>
                Zuhören, miteinander Lösungen finden und aufeinander achten:
                Gemeinschaft wird in den kleinen Momenten des Alltags lebendig.
              </p>
            </article>
          </div>
        </section>
        <WaldlingeFilm />
        <section
          className="original-moments section-shell"
          aria-labelledby="moments-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Einblicke bei den Waldlingen</p>
            <h2 id="moments-title">Mitten im echten Waldleben.</h2>
          </div>
          <div className="moments-grid">
            <figure data-reveal>
              <img
                src="/images/waldlinge-werkeln.webp"
                alt="Zwei Kinder probieren kleine Sägen an einem Baumstamm aus"
                width="800"
                height="1200"
                loading="lazy"
              />
              <figcaption>Mit den eigenen Händen entdecken.</figcaption>
            </figure>
            <figure data-reveal style={{ "--reveal-delay": "120ms" }}>
              <img
                src="/images/waldlinge-bollerwagen.webp"
                alt="Eine Erwachsene und Kinder mit einem Bollerwagen auf einem grünen Waldweg"
                width="1200"
                height="800"
                loading="lazy"
              />
              <figcaption>Zusammen draußen unterwegs.</figcaption>
            </figure>
          </div>
        </section>
        <section
          className="community"
          id="gemeinschaft"
          tabIndex="-1"
          aria-labelledby="community-title"
        >
          <div className="section-shell community-inner">
            <div>
              <p className="eyebrow">Mit Herz. Mit Händen. Miteinander.</p>
              <h2 id="community-title">
                Ein Kindergarten.
                <br />
                Eine Gemeinschaft.
              </h2>
            </div>
            <div>
              <p>
                Die Waldlinge sind aus einer Elterninitiative entstanden. Uns
                verbindet der Wunsch, Kindern eine zugewandte Kindheit in der
                Natur zu ermöglichen.
              </p>
              <p>
                Ob beim Gärtnern, Werkeln oder Organisieren: Familien bringen
                ihre Stärken ein. Gemeinsam mit dem pädagogischen Team gestalten
                wir einen Ort, an dem alle dazugehören.
              </p>
              <p>
                Wertschätzung und gewaltfreie Kommunikation prägen unser
                Miteinander. Eltern sind im pädagogischen Alltag ausdrücklich
                willkommen und unterstützen das Team mit ihren Möglichkeiten.
              </p>
              <TextLink href="https://waldlinge.org/die-geschichte-der-waldlinge/">
                Unsere Geschichte lesen
              </TextLink>
            </div>
          </div>
        </section>
        <section
          className="story section-shell"
          aria-labelledby="story-title"
          data-reveal
        >
          <p className="eyebrow">Eine Idee, die Wurzeln geschlagen hat</p>
          <h2 id="story-title">
            Es braucht ein Dorf.
            <br />
            Und manchmal einen Wald.
          </h2>
          <p>
            Aus dem Wunsch nach einer fürsorglichen Kindheit entstand ein
            gemeinsames Projekt. Jenni Klein und weitere Familien entwickelten
            die Idee eines Kindergartens, in dem Kinder, Eltern und pädagogische
            Fachkräfte zusammengehören.
          </p>
          <TextLink href="https://waldlinge.org/die-geschichte-der-waldlinge/">
            Jenni erzählt unsere Geschichte
          </TextLink>
        </section>
        <section
          className="parents section-shell"
          id="eltern"
          tabIndex="-1"
          aria-labelledby="parents-title"
        >
          <div className="parents-intro">
            <p className="eyebrow">Gut zu wissen</p>
            <h2 id="parents-title">
              Große Fragen.
              <br />
              Ein offenes Ohr.
            </h2>
            <p>
              Ein neuer Lebensabschnitt bringt viele Fragen mit sich. Hier
              findet ihr erste Antworten – und wir sind gerne persönlich für
              euch da.
            </p>
            <TextLink href="#kontakt">Mit uns ins Gespräch kommen</TextLink>
          </div>
          <div className="faq-list">
            {questions.map(([question, answer], index) => (
              <div className="faq" key={question}>
                <h3>
                  <button
                    aria-expanded={openFaq === index}
                    aria-controls={`answer-${index}`}
                    id={`question-${index}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {question}
                    {openFaq === index ? (
                      <Minus size={20} aria-hidden="true" />
                    ) : (
                      <Plus size={20} aria-hidden="true" />
                    )}
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`answer-${index}`}
                  role="region"
                  aria-labelledby={`question-${index}`}
                  hidden={openFaq !== index}
                >
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          className="forest-playgroup section-shell"
          aria-labelledby="playgroup-title"
          data-reveal
        >
          <div>
            <p className="eyebrow">Für kleine und große Waldneugierige</p>
            <h2 id="playgroup-title">Erst mal Waldluft schnuppern.</h2>
          </div>
          <div>
            <p>
              Gemeinsam draußen sein und die Natur entdecken: Jenni organisiert
              eine Eltern-Kind-Waldspielgruppe. Informationen zu aktuellen
              Treffen bekommt ihr direkt bei ihr.
            </p>
            <TextLink href="mailto:jenni@waldlinge.org">
              Zur Waldspielgruppe anfragen
            </TextLink>
          </div>
        </section>
        <section
          className="join"
          id="anmeldung"
          tabIndex="-1"
          aria-labelledby="join-title"
        >
          <div className="section-shell join-inner">
            <p className="eyebrow">Der erste Schritt beginnt mit Neugier</p>
            <h2 id="join-title">Vielleicht beginnt euer Weg im Wald.</h2>
            <p>
              Ihr möchtet die Waldlinge kennenlernen? Erzählt uns von euch.
              <br className="desktop-break" /> Die Anmeldung erfolgt über den
              Kita-Navigator der Stadt Bornheim.
            </p>
            <div className="join-actions">
              <a
                className="button button-green"
                href="mailto:info@waldlinge.org"
              >
                Fragen stellen
                <ArrowRight size={22} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="https://bornheim.kita-navigator.org/"
                target="_blank"
                rel="noreferrer"
              >
                Zum Kita-Navigator
                <ArrowUpRight size={22} aria-hidden="true" />
                <span className="sr-only"> (öffnet einen neuen Tab)</span>
              </a>
            </div>
            <p className="small-note">
              Eine Vormerkung im Kita-Navigator ist noch keine Platzzusage.
            </p>
          </div>
        </section>
      </main>
      <footer id="kontakt" tabIndex="-1">
        <div className="section-shell">
          <div className="footer-grid">
            <div>
              <a className="footer-brand" href="#start">
                Waldlinge
              </a>
              <p>
                Draußen wachsen.
                <br />
                Gemeinsam geborgen.
              </p>
            </div>
            <div>
              <h2>Besucht uns</h2>
              <address>
                Waldlinge Bornheim e.V.
                <br />
                Rüttersweg 177a
                <br />
                53332 Bornheim
              </address>
              <a
                className="footer-link"
                href="https://www.openstreetmap.org/search?query=R%C3%BCttersweg%20177a%2053332%20Bornheim"
                target="_blank"
                rel="noreferrer"
              >
                Anreise planen
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="sr-only"> (öffnet einen neuen Tab)</span>
              </a>
            </div>
            <div>
              <h2>Lasst uns sprechen</h2>
              <a href="mailto:info@waldlinge.org">info@waldlinge.org</a>
              <p className="footer-subheading">Teil des Teams werden</p>
              <a href="mailto:personal@waldlinge.org">personal@waldlinge.org</a>
              <p className="footer-subheading">
                Waldhandy · pädagogisches Team
              </p>
              <a href="tel:+4915733809336">0157 33809336</a>
              <p className="footer-subheading">
                <a href="https://waldlinge.org/kontakt/">
                  Alle Kontaktmöglichkeiten
                </a>
              </p>
            </div>
            <div>
              <h2>Gemeinsam möglich machen</h2>
              <p>Ihr möchtet die Waldlinge unterstützen?</p>
              <a href="mailto:finanzen@waldlinge.org">finanzen@waldlinge.org</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Waldlinge Bornheim e.V.</span>
            <div>
              <a href="https://waldlinge.org/impressum/">Impressum</a>
              <a href="https://waldlinge.org/datenschutz/">Datenschutz</a>
              <a href="#start">Nach oben</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
