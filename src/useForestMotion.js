import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useForestMotion(root, reduceMotion = false) {
  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    const initialScroll = window.scrollY;
    let alive = true;
    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 960px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduce } = context.conditions;
        if (reduce || reduceMotion) return;
        const scope = gsap.utils.selector(node);
        const hero = scope(".chapter--hero")[0];
        const welcome = scope(".chapter--welcome")[0];
        gsap.to(scope(".reading-progress"), {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: node,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        // Real document positions form the camera path from crown to roots.
        // No pinned sections or artificial extra scroll distance.
        scope(".tree-crown").forEach((crown, index) => {
          gsap.to(crown, {
            y: desktop ? -65 - index * 15 : -28,
            x: desktop ? -18 : -8,
            rotation: index ? -1.8 : 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top 84px",
              end: "bottom top",
              scrub: true,
            },
          });
        });
        gsap.to(scope(".hero-copy"), {
          y: desktop ? 42 : 14,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "60% 84px",
            end: "bottom 84px",
            scrub: true,
          },
        });
        const bird = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: welcome,
            start: "top 92%",
            end: "65% 25%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        bird
          .fromTo(
            scope(".journey-bird"),
            {
              x: () => -welcome.clientWidth * 0.3,
              y: 40,
              rotation: 8,
              opacity: 0,
            },
            { opacity: 1, duration: 0.12 },
            0,
          )
          .to(
            scope(".journey-bird"),
            {
              x: () => welcome.clientWidth * 0.65,
              y: -55,
              rotation: -12,
              duration: 1,
            },
            0,
          )
          .to(scope(".journey-bird"), { opacity: 0, duration: 0.15 }, 0.85);
        scope("[data-value] .value-botanical").forEach((item, index) => {
          gsap.from(item, {
            y: 25,
            rotation: index === 1 ? -8 : 5,
            opacity: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              end: "top 72%",
              scrub: true,
            },
          });
        });
        gsap.fromTo(
          scope(".journey-loupe"),
          { rotation: -18, y: 35, x: -15 },
          {
            rotation: 10,
            y: -25,
            x: 15,
            ease: "none",
            scrollTrigger: {
              trigger: scope(".chapter--adventure")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        scope("[data-reveal]").forEach((item) => {
          gsap.from(item, {
            y: 22,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 94%",
              toggleActions: "play none none none",
            },
          });
        });
        scope("[data-photo-reveal]").forEach((item) => {
          gsap.from(item, {
            y: 45,
            scale: 0.97,
            opacity: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 98%",
              end: "top 70%",
              scrub: true,
            },
          });
        });
        scope("[data-drift]").forEach((item) => {
          gsap.fromTo(
            item,
            { y: 30, rotation: -3 },
            {
              y: -20,
              rotation: 2,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      },
      node,
    );
    // GSAP media reversion may restore a cached scroll position. Keep the
    // reader in place when the motion preference changes or FAQ height grows.
    if (window.scrollY !== initialScroll) window.scrollTo(0, initialScroll);
    const refresh = () => {
      if (!alive) return;
      const position = window.scrollY;
      ScrollTrigger.refresh();
      if (window.scrollY !== position) window.scrollTo(0, position);
    };
    document.fonts.ready.then(refresh);
    const images = [...node.querySelectorAll("img")];
    images.forEach((img) => img.addEventListener("load", refresh));
    const resize = new ResizeObserver(refresh);
    resize.observe(node);
    return () => {
      alive = false;
      images.forEach((img) => img.removeEventListener("load", refresh));
      resize.disconnect();
      const position = window.scrollY;
      media.revert();
      if (window.scrollY !== position) window.scrollTo(0, position);
    };
  }, [root, reduceMotion]);
}
