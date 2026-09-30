import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "@phosphor-icons/react";

export function WaldlingeFilm() {
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
              src="/images/waldlinge-bollerwagen.webp"
              alt=""
              width="1200"
              height="800"
              loading="lazy"
            />
            <span className="film-play">
              <Play size={30} weight="fill" aria-hidden="true" />
            </span>
            <span className="film-caption">
              Film ansehen <span>Unser Vereinsfilm · YouTube</span>
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
