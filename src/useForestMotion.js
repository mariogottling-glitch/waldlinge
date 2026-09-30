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
        base: "(min-width: 0px)",
        desktop: "(min-width: 960px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduce } = context.conditions;
        if (reduce || reduceMotion) return;
        const scope = gsap.utils.selector(node);
        const hero = scope(".chapter--hero")[0];
        const welcome = scope(".chapter--welcome")[0];
        const loops = [];
        const syncLoops = () => {
          loops.forEach(({ animation, active }) => {
            if (active && !document.hidden) animation.resume();
            else animation.pause();
          });
        };
        // Ambient life has its own clock. Scroll controls its route, while
        // wingbeats and wind continue when the reader stops to look.
        const watchLoop = (
          animation,
          trigger,
          start = "top bottom",
          end = "bottom top",
        ) => {
          const loop = { animation, active: false };
          loops.push(loop);
          const update = (self) => {
            loop.active = self.isActive;
            syncLoops();
          };
          ScrollTrigger.create({
            trigger,
            start,
            end,
            onToggle: update,
            onRefresh: update,
          });
        };
        document.addEventListener("visibilitychange", syncLoops);
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
        scope(".tree-canopy").forEach((crown, index) => {
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
        scope(".tree-crown").forEach((crown, index) => {
          const wind = gsap.fromTo(
            crown,
            { rotation: -0.45 },
            {
              rotation: 0.65,
              duration: 4.8 + index,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              paused: true,
            },
          );
          watchLoop(wind, hero);
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
        const flap = gsap.timeline({ paused: true, repeat: -1 });
        flap
          .fromTo(
            scope(".bird-wing--near"),
            { rotationX: -12, rotation: -5 },
            { rotationX: 155, rotation: 7, duration: 0.27, ease: "power1.in" },
            0,
          )
          .to(
            scope(".bird-wing--near"),
            { rotationX: -12, rotation: -5, duration: 0.37, ease: "sine.out" },
            0.27,
          )
          .fromTo(
            scope(".bird-wing--far"),
            { rotationX: 15, rotation: -14 },
            { rotationX: 145, rotation: -2, duration: 0.27, ease: "power1.in" },
            0.035,
          )
          .to(
            scope(".bird-wing--far"),
            { rotationX: 15, rotation: -14, duration: 0.335, ease: "sine.out" },
            0.305,
          )
          .to(
            scope(".bird-body"),
            { y: -2, duration: 0.27, ease: "sine.inOut" },
            0,
          )
          .to(
            scope(".bird-body"),
            { y: 0, duration: 0.37, ease: "sine.inOut" },
            0.27,
          );
        watchLoop(flap, welcome, "clamp(top 90%)", "top 28%");
        const bird = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: welcome,
            start: "clamp(top 90%)",
            end: "top 28%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        bird.fromTo(
          scope(".journey-bird"),
          {
            x: () => -scope(".journey-bird")[0].clientWidth * 0.85,
            y: -8,
            rotation: 8,
            opacity: 1,
          },
          {
            x: () =>
              scope(".bird-flight")[0].clientWidth +
              scope(".journey-bird")[0].clientWidth * 0.25,
            y: -92,
            rotation: -12,
            duration: 1,
          },
          0,
        );
        scope("[data-cloud]").forEach((cloud, index) => {
          const drift = gsap.fromTo(
            cloud.querySelector("img"),
            { x: -12 },
            {
              x: 18,
              duration: 18 + index * 3,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              paused: true,
            },
          );
          watchLoop(drift, cloud);
        });
        scope("[data-ambient]").forEach((item, index) => {
          const foliage = item.querySelector("img");
          const wind = gsap.fromTo(
            foliage,
            { rotation: -2, x: -2 },
            {
              rotation: 2.5,
              x: 3,
              duration: 3.8 + index * 0.65,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              paused: true,
            },
          );
          watchLoop(wind, item);
        });
        scope(".forest-butterfly").forEach((item, index) => {
          const wings = gsap.fromTo(
            item.querySelector("img"),
            { rotationY: -12 },
            {
              rotationY: 72,
              duration: 0.23,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              paused: true,
            },
          );
          watchLoop(wings, item.closest("section"));
          const wander = gsap.timeline({
            paused: true,
            repeat: -1,
            yoyo: true,
          });
          wander
            .to(item, {
              x: index ? -28 : 34,
              y: -26,
              rotation: 18,
              duration: 2.7,
              ease: "sine.inOut",
            })
            .to(item, {
              x: index ? -8 : 8,
              y: -53,
              rotation: -12,
              duration: 2.9,
              ease: "sine.inOut",
            });
          watchLoop(wander, item.closest("section"));
        });
        scope(".photo-fern").forEach((item) => {
          const breeze = gsap.fromTo(
            item,
            { rotation: -2 },
            {
              rotation: 2.5,
              duration: 4.3,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              paused: true,
            },
          );
          watchLoop(breeze, item.closest("section"));
        });
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
            { y: 30 },
            {
              y: -20,
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
        return () =>
          document.removeEventListener("visibilitychange", syncLoops);
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
