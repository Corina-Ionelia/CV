document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript încărcat');
    // Cod pentru burger-menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    });

    // Verifică dacă secțiunea este vizibilă după încărcarea paginii
    console.log(document.getElementById('about'));
});