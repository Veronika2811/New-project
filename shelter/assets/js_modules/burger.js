const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu'); 
const menuItems = [...document.querySelectorAll('.menu__item')]
const logo = document.querySelector('.logo'); 
const mask = document.querySelector('.mask-content');
const burgerLogo = document.querySelector('.burger__logo');


function toggleMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    mask.classList.toggle('open');

    if (menu.classList.contains('open')) {
        logo.style.display = 'none';
    
    } else {
        logo.style.display = 'block';
    }
};


function burgerSubscribe() {
    burger.addEventListener('click', toggleMenu);
    mask.addEventListener("click", toggleMenu);
    burgerLogo.addEventListener("click", toggleMenu);
    
    menuItems.forEach(el => {
        el.addEventListener('click', toggleMenu)
        logo.style.display = 'block';
    });
}

export default burgerSubscribe;