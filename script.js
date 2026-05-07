const galleryImages = [
  "src/bfd63196-e36e-4eb9-866c-4f787a80f82c.jpg",
  "src/Photoroom_20260506_222921.png",
];

function preloadImages(images) {
  images.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}

function setViewportHeightVariable() {
  document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
}

function addMagneticLinks() {
  document.querySelectorAll(".menu-link, .primary-cta, .ghost-cta").forEach((link) => {
    link.addEventListener("pointermove", (event) => {
      const rect = link.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
      link.style.setProperty("--hover-x", `${x}px`);
      link.style.setProperty("--hover-y", `${y}px`);
    });

    link.addEventListener("pointerleave", () => {
      link.style.removeProperty("--hover-x");
      link.style.removeProperty("--hover-y");
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  preloadImages(galleryImages);
  setViewportHeightVariable();
  addMagneticLinks();
  document.body.classList.add("is-loaded");
});

window.addEventListener("resize", setViewportHeightVariable, { passive: true });
