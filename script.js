// ===============================
// SMOOTH FADE EFFECT
// ===============================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

// ===============================
// BUTTON HOVER GLOW
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

  link.addEventListener("mouseenter", () => {

    link.style.transition = "0.35s ease";

  });

});

// ===============================
// PARALLAX BACKGROUND
// ===============================

const background = document.querySelector(".background");

window.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.clientX) / 90;

  const y = (window.innerHeight / 2 - e.clientY) / 90;

  background.style.transform = `scale(1.03) translate(${x}px, ${y}px)`;

});

// ===============================
// SOFT BUTTON INTERACTION
// ===============================

const ctaButton = document.querySelector(".cta a");

ctaButton.addEventListener("mouseenter", () => {

  ctaButton.style.letterSpacing = "2.5px";

});

ctaButton.addEventListener("mouseleave", () => {

  ctaButton.style.letterSpacing = "2px";

});