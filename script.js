const galleryAssets = [
  "src/bfd63196-e36e-4eb9-866c-4f787a80f82c.jpg",
  "src/Photoroom_20260506_222921.png",
];

function preloadGalleryImages(assets) {
  assets.forEach((asset) => {
    const image = new Image();
    image.src = asset;
  });
}

function addPointerGlow() {
  document.querySelectorAll(".link-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  preloadGalleryImages(galleryAssets);
  addPointerGlow();
  document.body.classList.add("is-loaded");
});
