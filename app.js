const fragment = document.createDocumentFragment();
const bar = document.querySelectorAll('.bar');
const firstBar = document.querySelector('.first-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainBarItems = document.querySelector('.main-bar__items');
const mainBarItemsLists = document.querySelectorAll('.main-bar__items li');
const mylogo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-bar');
const secondBar = document.querySelector('.second-bar');
const thirdBar = document.querySelector('.third-bar');
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

const projectObjects = [
  {
    title: 'Tonic',
    dataFrame: ['<p>CANOPY</p><ul><li>Back End Dev</li><li>2015</li></ul>'],
    image: [
      './img/Snapshoot-Portfolio.svg',
      'images/Snapshoot Portfolio copy.png',
    ],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    ],
    technologies: [
      'Ruby on rails',
      'CSS',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_link: 'https://ilynette.github.io/my-portfolio',
    source_link:
      'https://github.com/MohammedElseddik/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    title: 'Multi-Post Stories',
    dataFrame: ['<p>CANOPY</p><ul><li>Back End Dev</li><li>2015</li></ul>'],
    image: ['./img/work2.svg', './images/Snapshoot Portfolio copy.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    ],
    technologies: [
      'Ruby on rails',
      'CSS',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_link: 'https://ilynette.github.io/my-portfolio',
    source_link:
      'https://github.com/MohammedElseddik/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    title: 'Tonic',
    dataFrame: ['<p>CANOPY</p><ul><li>Back End Dev</li><li>2015</li></ul>'],
    image: ['./img/work3.svg', './images/Snapshoot Portfolio copy.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    ],
    technologies: [
      'Ruby on rails',
      'CSS',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_link: 'https://ilynette.github.io/my-portfolio',
    source_link:
      'https://github.com/MohammedElseddik/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    title: 'Multi-Post Stories',
    dataFrame: ['<p>CANOPY</p><ul><li>Back End Dev</li><li>2015</li></ul>'],
    image: ['./img/work4.svg', './images/Snapshoot Portfolio copy.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    ],
    technologies: [
      'Ruby on rails',
      'CSS',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_link: 'https://ilynette.github.io/my-portfolio',
    source_link:
      'https://github.com/MohammedElseddik/Portfolio-setup-and-mobile-version-skeleton',
  },
];

function projectFuction() {
  for (let i = 1; i <= projectObjects.length; i += 1) {
    const projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', `card${i} card-work`);
    projectContainer.setAttribute('id', `project${i}`);
    fragment.appendChild(projectContainer);
  }
  workSection.appendChild(fragment);
}

projectFuction();

const workSectionDivs = [...document.querySelectorAll('.card-work')];

let counter = 0;
function createElements(project) {
  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'card-work__img');
  imgDiv.innerHTML = `<img
  src=${projectObjects[counter].image[0]}
  alt="Project-${counter + 1} image"
  data-img="card-image"/>`;
  const infoDiv = document.createElement('div');
  infoDiv.setAttribute('class', 'card-work__info');
  infoDiv.innerHTML = `<h2 data-title="title">${projectObjects[counter].title}</h2>
  <div class="frame2" data-frame="frame-list">${projectObjects[counter].dataFrame}</div>
  <p data-p="paragraph">${projectObjects[counter].description[0]}}</p>
  <ul class="programing-lamguages" data-language="language-list">
  <li>html</li>
  <li>css</li>
  <li>javaScript</li>
  </ul>
  <button
  class="btn work-section__btn"
  type="submit"
  data-btn="#project1"
  >
  See Project
  </button>`;
  fragment.appendChild(imgDiv);
  fragment.appendChild(infoDiv);
  project.appendChild(fragment);
  counter += 1;
}

workSectionDivs.forEach(createElements);

const btn = [...document.querySelectorAll('.work-section__btn')];
const popDiv = document.createElement('div');

function createPopup(button) {
  for (let i = 0; i <= btn.indexOf(button); i += 1) {
    popDiv.setAttribute('class', 'popup');
    popDiv.innerHTML = `<div class="popup-container"><div class="popup__div1">
    <div class="popup-exit">
    <button class="exit-btn" id="exit-btn">X</button>
    </div>
    <div class="popup-title">
    <h2 data-title="title">${projectObjects[i].title}</h2>
    <div class="frame2" data-frame="frame-list">${projectObjects[i].dataFrame}</div>
          </div>
          </div>
          <div class="popup-img__div2">
          <img src=${projectObjects[i].image[0]} alt="Project-${i + 1} image" 
          data-img="card-image" />;
          </div>
          <div class="popup__div3">
          <div class="discription">
          <p>
          ${projectObjects[i].description[1]}
          </p>
          </div>
          <div class="popup-div3__programing">
    <ul class="program-lamguages" data-language="language-list">
    <li>html</li>
    <li>css</li>
    <li>javaScript</li>
    <li>Bootstrap</li>
    <li>Ruby on rails</li>
    <li>Saas</li>
    </ul>
    <div class="exit-btn__div">
    <button class="btn popup-btn" type="submit">
    <span>See live</span> 
    <img src=./img/pop-arrow.svg alt=arrow></i>
    </button>
    <button class="btn popup-btn" type="submit">
    <span>See Source</span> 
    <img src="./img/github.svg" alt="github-icon">
    </button>
    </div>
    </div>
    </div></div>`;
  }

  fragment.appendChild(popDiv);
  workSection.appendChild(fragment);
  const exitbtn = document.querySelector('.exit-btn');

  ['click', 'keypress'].forEach((event) => {
    exitbtn.addEventListener(event, () => {
      filterDiv.classList.remove('active');
      workSection.removeChild(popDiv);
      document.body.classList.remove('no-scroll');
    });
  });
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    filterDiv.classList.toggle('active');
    createPopup(button);
    document.body.classList.add('no-scroll');
  });
});
