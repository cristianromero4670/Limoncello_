// ===============================
// PAGE FADE IN
// ===============================

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

// ===============================
// MENU INTERACTION
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

  link.addEventListener("mouseenter", () => {

    link.style.transition = "0.35s ease";

  });

});

// ===============================
// BUTTON EFFECT
// ===============================

const button = document.querySelector(".catalog-btn");

button.addEventListener("mouseenter", () => {

  button.style.transform = "translateY(-4px)";

});

button.addEventListener("mouseleave", () => {

  button.style.transform = "translateY(0px)";

});