// ===============================
// FADE IN
// ===============================

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

// ===============================
// SOFT HOVER EFFECTS
// ===============================

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

  link.addEventListener("mouseenter", () => {

    link.style.transition = "0.35s ease";

  });

});

// ===============================
// BUTTON MICRO INTERACTION
// ===============================

const button = document.querySelector(".catalog-btn");

button.addEventListener("mouseenter", () => {

  button.style.letterSpacing = "0.5px";

});

button.addEventListener("mouseleave", () => {

  button.style.letterSpacing = "0px";

});