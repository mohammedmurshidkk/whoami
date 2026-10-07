import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

const EASE = "expo.out";

function smoothScroll() {
  const lenis = new Lenis({ anchors: { offset: -130 }, lerp: 0.12 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Sketch, then code, then the live product: the frame and the motto move together.
function studio() {
  const panels = $$(".studio .panel");
  const words = $$(".motto li");
  if (!panels.length) return;
  let i = 0;
  const show = (n: number) => {
    panels.forEach((p, k) => {
      p.classList.toggle("was-on", p.classList.contains("is-on") && k !== n);
      p.classList.toggle("is-on", k === n);
    });
    words.forEach((w, k) => w.classList.toggle("is-on", k === n));
  };
  show(0);
  gsap.from(".studio-frame", { y: 40, autoAlpha: 0, duration: 1.4, ease: EASE, delay: 0.3 });
  gsap.delayedCall(2.4, function tick() {
    i = (i + 1) % panels.length;
    show(i);
    if (i === 1) gsap.fromTo(".code i", { scaleX: 0 }, { scaleX: 1, stagger: 0.06, duration: 0.6, ease: "power3.out" });
    if (i === 2) gsap.fromTo(".ui-bars i", { scaleY: 0 }, { scaleY: 1, transformOrigin: "bottom", stagger: 0.06, duration: 0.7, ease: "power3.out" });
    gsap.delayedCall(2.4, tick);
  });
}

function hero() {
  const split = SplitText.create(".hero-title", { type: "lines", mask: "lines" });
  gsap.set(".hero-title", { autoAlpha: 1 });
  gsap
    .timeline({ defaults: { ease: EASE } })
    .from(split.lines, { yPercent: 105, duration: 1.2, stagger: 0.1 })
    .to(".reveal-hero", { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.3);
}

function reveals() {
  ScrollTrigger.batch(".reveal", {
    start: "top 88%",
    once: true,
    onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease: EASE }),
  });
}

function process() {
  gsap.fromTo(
    ".track-fill",
    { scaleX: 0 },
    { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process", start: "top 75%", end: "bottom 60%", scrub: 0.6 } }
  );
  $$(".step").forEach((step) => {
    gsap.from(step, { autoAlpha: 0, y: 30, duration: 1, ease: EASE, scrollTrigger: { trigger: step, start: "top 85%" } });
    gsap.from(step.querySelector(".step-dot"), {
      scale: 0.4,
      duration: 0.8,
      ease: "back.out(2)",
      scrollTrigger: { trigger: step, start: "top 85%" },
    });
  });
}

function counters() {
  $$(".count").forEach((el) => {
    const to = Number(el.dataset.to);
    const o = { v: 0 };
    gsap.to(o, {
      v: to,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => (el.textContent = String(Math.round(o.v))),
      onComplete: () => (el.textContent = String(to)),
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });
}

function contact() {
  gsap.from(".contact-line", {
    yPercent: 60,
    autoAlpha: 0,
    stagger: 0.15,
    duration: 1.2,
    ease: EASE,
    scrollTrigger: { trigger: ".contact-title", start: "top 85%" },
  });
}

export async function initMotion() {
  const root = document.documentElement;
  if (!root.classList.contains("motion")) return;

  gsap.set(".reveal, .reveal-hero", { autoAlpha: 0, y: 24 });
  gsap.set(".hero-title", { autoAlpha: 0 });
  root.classList.remove("motion");
  await document.fonts.ready;

  smoothScroll();
  hero();
  studio();
  reveals();
  process();
  counters();
  contact();
}
