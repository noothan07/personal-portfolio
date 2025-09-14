import Lenis from "@studio-freight/lenis";

export default function initLenis() {
  const lenis = new Lenis({
    duration: 3,
    easing: (t) => 1 - Math.pow(2, -10 * t),
    smooth: true,
    smoothTouch: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}
