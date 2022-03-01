const bar = document.querySelectorAll(".bar");
const firstBar = document.querySelector(".first-bar");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainBarItems = document.querySelector(".main-bar__items");
const mainBarItemsLists = document.querySelectorAll(".main-bar__items li");
const mylogo = document.querySelector(".logo");
const navBar = document.querySelector(".nav-bar");
const secondBar = document.querySelector(".second-bar");
const thirdBar = document.querySelector(".third-bar");
const btn = document.querySelectorAll(".btn");
const workSection = document.querySelector("#work-section");

function applyStyles() {
  bar.forEach((elem) => {
    elem.classList.toggle("bar-color");
  });
  firstBar.classList.toggle("transform");
  hamburgerMenu.classList.toggle("mobile-hamburger-menu");
  mainBarItems.classList.toggle("main-bar__items-visible");
  mylogo.classList.toggle("mobile-logo");
  navBar.classList.toggle("expand-navbar");
  secondBar.classList.toggle("hidden");
  thirdBar.classList.toggle("transform");
}

["click", "keypress"].forEach((event) => {
  hamburgerMenu.addEventListener(event, applyStyles);
});

mainBarItemsLists.forEach((list) => {
  list.addEventListener("click", applyStyles);
});

const projectsList = [];

function selectElement(button) {
  const object = {};
  const images = document.querySelector(`${button.dataset.btn} [data-img]`);
  const titles = document.querySelector(`${button.dataset.btn} [data-title]`);
  const paragraphs = document.querySelector(`${button.dataset.btn} [data-p]`);
  const frames = document.querySelector(`${button.dataset.btn} [data-frame]`);
  const languages = document.querySelector(
    `${button.dataset.btn} [data-language]`
  );
  object.image = images;
  object.title = titles;
  object.paragraph = paragraphs;
  object.frame = frames;
  object.language = languages;
  projectsList.push(object);
  createElements();
}

function createElements() {
  const div = document.createElement("div");
  div.setAttribute("class", "popup");
  for (let items of Object.values(projectsList[0])) {
    div.appendChild(items);
  }
  const liveSiteBtn = document.createElement("button");
  liveSiteBtn.innerText = "Live Site";
  div.appendChild(liveSiteBtn);
  workSection.appendChild(div);
}

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    selectElement(button);
    document.body.classList.toggle("no-scroll");
  });
});
