// Create a function to open and close menu when clicked
function toogleMenu() {
    const menu = document.querySelector('menu-links'); //Target elements
    const icon = document.querySelector('icon');
    menu.classList.toggleMenu("open") //Add or remove open class when clicked
    icon.classList.toggleMenu("open")
}