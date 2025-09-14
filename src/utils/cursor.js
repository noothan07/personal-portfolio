export default function initCursor() {
  if (!("ontouchstart" in window)) {
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hidden"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hidden"));
    });
  }
}
