const bar = document.querySelectorAll('.bar');
const firstBar = document.querySelector('.first-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainBarItems = document.querySelector('.main-bar__items');
const mylogo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-bar');
const secondBar = document.querySelector('.second-bar');
const thirdBar = document.querySelector('.third-bar');

function applyStyles() {
  bar.forEach((elem) => {
    elem.classList.toggle('bar-color');
  });
  document.body.classList.toggle('overlay');
  firstBar.classList.toggle('transform');
  hamburgerMenu.classList.toggle('mobile-hamburger-menu');
  mainBarItems.classList.toggle('main-bar__items-visible');
  mylogo.classList.toggle('mobile-logo');
  navBar.classList.toggle('expand-navbar');
  secondBar.classList.toggle('hidden');
  thirdBar.classList.toggle('transform');
}

['click', 'keypress'].forEach((event) => {
  hamburgerMenu.addEventListener(event, applyStyles);
});
