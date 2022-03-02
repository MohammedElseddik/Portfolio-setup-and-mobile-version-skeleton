const bar = document.querySelectorAll('.bar');
const firstBar = document.querySelector('.first-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainBarItems = document.querySelector('.main-bar__items');
const mainBarItemsLists = document.querySelectorAll('.main-bar__items li');
const mylogo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-bar');
const secondBar = document.querySelector('.second-bar');
const thirdBar = document.querySelector('.third-bar');
const btn = document.querySelectorAll('.btn');
const workSection = document.querySelector('#work-section');
const filterDiv = document.querySelector('.filter');

function applyStyles() {
  bar.forEach((elem) => {
    elem.classList.toggle('bar-color');
  });
  document.body.classList.toggle('no-scroll');
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

const projectsList = [];

// Factory function
function objFac(title, frames, images, paragraphs, languages) {
  return {
    title,
    frames,
    images,
    paragraphs,
    languages,
  };
}

function createElements() {
  const div = document.createElement('div');
  const containerdiv = document.createElement('div');
  const BtnDiv = document.createElement('div');
  const seeLiveBtn = document.createElement('button');
  const seeSourceBtn = document.createElement('button');
  const popHeader = document.createElement('div');
  const exitIcon = document.createElement('button');

  div.setAttribute('class', 'popup');
  containerdiv.setAttribute('class', 'popup-container');
  popHeader.setAttribute('class', 'pop-header');
  BtnDiv.setAttribute('class', 'pop-btn');
  seeLiveBtn.innerText = 'Live Site';
  seeSourceBtn.innerText = 'Live Site';
  seeLiveBtn.innerHTML = '<span>See Live</span><img src=\'./img/pop-arrow.svg\' alt=\'arrow\'></i>';
  seeSourceBtn.innerHTML = '<span>See Scource</span><i class=\'fa-brands fa-github\'></i>';
  exitIcon.textContent = 'X';
  exitIcon.setAttribute('class', 'exit-btn');

  containerdiv.append(popHeader);
  Object.values(projectsList[0]).forEach((item) => {
    containerdiv.appendChild(item);
  });

  popHeader.appendChild(exitIcon);
  BtnDiv.appendChild(seeLiveBtn);
  BtnDiv.appendChild(seeSourceBtn);
  containerdiv.appendChild(BtnDiv);
  div.appendChild(containerdiv);
  workSection.appendChild(div);

  ['click', 'keypress'].forEach((event) => {
    exitIcon.addEventListener(event, () => {
      filterDiv.classList.remove('active');
      workSection.removeChild(div);
      projectsList.pop();
    });
  });
}

function selectElement(button) {
  const div = document.createElement('div');
  div.setAttribute('class', 'pop-paragraph');
  const title = document.querySelector(`${button.dataset.btn} [data-title]`).cloneNode(true);
  const frame = document.querySelector(`${button.dataset.btn} [data-frame]`).cloneNode(true);
  const image = document.querySelector(`${button.dataset.btn} [data-img]`).cloneNode(true);
  const paragraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nesciunt dolor minus doloribus ea blanditiis quasi maxime dicta fugiat, facilis atque, corporis aliquid? Praesentium rem ut accusantium, voluptatibus aperiam dolor';
  div.innerHTML = `<p>${paragraph}</p>`;
  const paragraphs = div;
  const language = document.querySelector(`${button.dataset.btn} [data-language]`).cloneNode(true);
  const elemObject = objFac(title, frame, image, paragraphs, language);
  projectsList.push(elemObject);
  createElements();
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    filterDiv.classList.toggle('active');
    selectElement(button);
    document.body.classList.toggle('no-scroll');
  });
});