//Controls the javascript for the navbar.
//Detects when the burger menu is clicked.
const burgerMenu = document.querySelector('#burger-menu');
const navbar = document.getElementById("navbar-links");
const bodyWrapper = document.getElementById("body-wrapper");
burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    bodyWrapper.classList.toggle('active');
});