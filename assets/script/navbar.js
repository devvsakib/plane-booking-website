const btn = document.querySelector('#menu-open');
const navClose = document.querySelector('#menu-close');
const nav = document.querySelector('.main-nav');
btn.addEventListener('click', function () {
    nav.classList.toggle('hide');
})
navClose.addEventListener('click', function () {
    nav.classList.toggle('hide');
})