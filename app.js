const bar = document.querySelectorAll('.bar');
const firstBar = document.querySelector('.first-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainBarItems = document.querySelector('.main-bar__items');
const mainBarItemsLists = document.querySelectorAll('.main-bar__items li');
const mylogo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-bar');
const secondBar = document.querySelector('.second-bar');
const thirdBar = document.querySelector('.third-bar');

function applyStyles() {
  bar.forEach((elem) => {
    elem.classList.toggle('bar-color');
  });
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

mainBarItemsLists.forEach((list) => {
  list.addEventListener('click', applyStyles);
});
