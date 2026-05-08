// Opcional: Efecto de aparición suave
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-text');
    hero.style.opacity = '0';
    hero.style.transition = 'opacity 1.5s ease-in-out';
    
    setTimeout(() => {
        hero.style.opacity = '1';
    }, 300);
});