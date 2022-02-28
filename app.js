const hamburgerMenu = document.querySelector(".hamburger-menu");
const firstBar = document.querySelector(".first-bar");
const secondBar = document.querySelector(".second-bar");
const thirdBar = document.querySelector(".third-bar");
const bar = document.querySelectorAll(".bar");
const navBar = document.querySelector(".nav-bar");
const mainHeader = document.querySelector("header");
const mylogo = document.querySelector(".logo");
const mainBarItems = document.querySelector(".main-bar__items");

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("expand");
  mainHeader.classList.toggle("main-header");
  hamburgerMenu.classList.toggle("mobile-hamburger-menu");
  mylogo.classList.toggle("mobile-logo");
  bar.forEach((elem) => {
    elem.classList.toggle("bar-color");
  });
  secondBar.classList.toggle("hidden");
  firstBar.classList.toggle("tronsform");
  thirdBar.classList.toggle("tronsform");
  mainBarItems.classList.toggle("main-bar__items-visible");
});
