document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript încărcat');
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    });
});

console.log(document.querySelector('.burger-menu')); // Ar trebui să fie afișat elementul burger-menu
console.log(document.querySelector('.nav-links')); // Ar trebui să fie afișat elementul nav-links