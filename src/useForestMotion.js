import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useForestMotion(root, reduceMotion = false) {
  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    const media = gsap.matchMedia();
    let alive = true;
    media.add(
      {
        desktop: "(min-width: 960px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduce } = context.conditions;
        const scope = gsap.utils.selector(node);
        if (reduce || reduceMotion) return;
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
        if (desktop) {
          const forest = scope(".world-forest");
          const birches = scope(".world-birches");
          const ferns = scope(".world-ferns");
          const swing = scope(".world-swing");
          gsap.set(forest, { xPercent: 0, yPercent: -50, y: 0 });
          gsap.set(birches, { opacity: 0, yPercent: -50, y: 40 });
          gsap.set(ferns, { opacity: 0, y: 70 });
          gsap.set(swing, { opacity: 0, yPercent: -50, y: 50 });
          const journey = gsap.timeline({
            defaults: { ease: "power1.inOut" },
            scrollTrigger: {
              trigger: scope(".forest-journey")[0],
              start: "top 84px",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          journey
            .to(
              forest,
              { left: "5%", width: "43%", scale: 1.035, duration: 0.3 },
              0.12,
            )
            .to(ferns, { opacity: 1, y: 0, duration: 0.24 }, 0.52)
            .to(forest, { opacity: 0, scale: 0.94, duration: 0.28 }, 1.23)
            .to(birches, { opacity: 0.65, y: 0, duration: 0.25 }, 1.27)
            .to(
              ferns,
              {
                right: "1%",
                width: "12%",
                y: -30,
                opacity: 0.6,
                duration: 0.3,
              },
              1.3,
            )
            .to(
              birches,
              { left: "73%", width: "20%", opacity: 0.9, duration: 0.36 },
              2.08,
            )
            .to(
              ferns,
              { right: "14%", width: "28%", y: 0, opacity: 1, duration: 0.35 },
              2.08,
            )
            .to(swing, { opacity: 1, y: 0, duration: 0.25 }, 2.22)
            .to({}, { duration: 0.7 }, 2.47);
          scope("[data-value]").forEach((item, index) =>
            gsap.from(item, {
              y: 45 + index * 10,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: `top ${90 - index * 3}%`,
                end: "top 67%",
                scrub: 0.4,
              },
            }),
          );
        } else {
          scope(".mobile-art").forEach((item) =>
            gsap.fromTo(
              item,
              { y: 24 },
              {
                y: -12,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.3,
                },
              },
            ),
          );
        }
        scope("[data-reveal]").forEach((item) =>
          gsap.from(item, {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 93%",
              toggleActions: "play none none none",
            },
          }),
        );
        scope("[data-photo-reveal]").forEach((item) =>
          gsap.from(item, {
            y: 50,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              end: "top 65%",
              scrub: 0.5,
            },
          }),
        );
        scope("[data-drift]").forEach((item) =>
          gsap.fromTo(
            item,
            { y: 25 },
            {
              y: -25,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
              },
            },
          ),
        );
        gsap.from(scope("[data-join-art]"), {
          scale: 0.88,
          opacity: 0.25,
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: scope(".join")[0],
            start: "top bottom",
            end: "top 20%",
            scrub: 0.5,
          },
        });
      },
      node,
    );
    const refresh = () => {
      if (alive) ScrollTrigger.refresh();
    };
    document.fonts.ready.then(refresh);
    const images = [...node.querySelectorAll("img")];
    images.forEach((img) => img.addEventListener("load", refresh));
    // FAQ expansion changes all subsequent scroll positions.
    const resize = new ResizeObserver(refresh);
    resize.observe(node);
    return () => {
      alive = false;
      images.forEach((img) => img.removeEventListener("load", refresh));
      resize.disconnect();
      media.revert();
    };
  }, [root, reduceMotion]);
}
