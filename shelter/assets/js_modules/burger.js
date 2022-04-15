const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__navigation'); 
const menuItems = [...document.querySelectorAll('.navigation__link')]
const logo = document.querySelector('.main__logo'); 
const mask = document.querySelector('.mask-content');
const burgerLogo = document.querySelector('.burger__logo');
const head = document.querySelector('.header__wrapper');



function toggleMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    mask.classList.toggle('open');
    head.classList.toggle('open');
    logo.classList.toggle('open');
};


function burgerSubscribe() {
    burger.addEventListener('click', toggleMenu);
    mask.addEventListener("click", toggleMenu);
    
    menuItems.forEach(el => {
        el.addEventListener('click', toggleMenu)
    });
}

export default burgerSubscribe;