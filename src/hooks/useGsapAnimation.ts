import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a section's heading and staggered card children on scroll.
 *
 * Usage:
 *   1. Attach `sectionRef` to the outer `<section>` element.
 *   2. Add class `gsap-stagger` to any container whose direct children should
 *      stagger in (e.g. the grid div holding skill-cards, experience-cards, etc.)
 *   3. Pass `data` (or any state that controls rendering) as the second arg so
 *      the effect re-runs after the section is actually in the DOM.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGsapAnimation(sectionRef: RefObject<HTMLElement>, deps: any[] = []) {
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            // ── Heading ──────────────────────────────────────────────────────────
            const heading = el.querySelector("h2");
            if (heading) {
                gsap.fromTo(
                    heading,
                    { y: 48, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: heading,
                            start: "top 88%",
                        },
                    }
                );
            }

            // ── Staggered children ────────────────────────────────────────────────
            const staggerContainers = el.querySelectorAll(".gsap-stagger");
            staggerContainers.forEach((container) => {
                const children = Array.from(container.children);
                if (children.length === 0) return;

                gsap.fromTo(
                    children,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 88%",
                        },
                    }
                );
            });

            // ── Generic fade-up blocks ────────────────────────────────────────────
            const fadeBlocks = el.querySelectorAll(".gsap-fade-up");
            fadeBlocks.forEach((block) => {
                gsap.fromTo(
                    block,
                    { y: 36, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.65,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 90%",
                        },
                    }
                );
            });
        }, el);

        // Recalculate trigger positions after data loads and layout settles
        ScrollTrigger.refresh();

        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionRef, ...deps]);
}

/**
 * Hero section load animation — fires immediately on mount (no scroll trigger).
 * Attach heroRef to the outer <section>.
 * Pass `data` as the second arg so the effect fires after banner data loads.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useHeroAnimation(heroRef: RefObject<HTMLElement>, deps: any[] = []) {
    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const h1 = el.querySelector("h1");
            const subtitle = el.querySelector("p");
            const cards = el.querySelectorAll(".competency-item");

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (h1) tl.from(h1, { y: -40, opacity: 0, duration: 0.8 });
            if (subtitle) tl.from(subtitle, { y: -24, opacity: 0, duration: 0.6 }, "-=0.4");
            if (cards.length)
                tl.from(
                    cards,
                    { y: 20, opacity: 0, duration: 0.5, stagger: 0.06 },
                    "-=0.3"
                );
        }, el);

        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heroRef, ...deps]);
}
