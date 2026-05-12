// ===============================
// BUTTON INTERACTION
// ===============================

const button = document.querySelector(".catalog-btn");

button.addEventListener("mouseenter", () => {
  button.style.transform = "translateY(-3px) scale(1.01)";
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "translateY(0px) scale(1)";
});

// ===============================
// MENU FADE IN (Optimizado para móvil)
// ===============================

const menuItems = document.querySelectorAll(".menu a");

// Solo animamos el desplazamiento en pantallas grandes
if (window.innerWidth > 850) {
  menuItems.forEach((item, i) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(15px)";
    item.style.transition = "opacity .6s ease, transform .6s ease";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0px)";
    }, 150 + (i * 120));
  });
} else {
  // En móvil aseguramos visibilidad inmediata para evitar fallos de carga
  menuItems.forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "none";
  });
}

// ===============================
// SOCIALS GLOW
// ===============================

const socials = document.querySelectorAll(".socials a");

socials.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.boxShadow = "0 0 25px rgba(255, 180, 90, .28)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.boxShadow = "none";
  });
});