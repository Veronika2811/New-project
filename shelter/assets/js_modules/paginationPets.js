const arrPets = []; // Массив животных

async function getData() {
  const res = await fetch("../../assets/js_modules/pets.json");
  const data = await res.json();
  showData(data);
}

function showData(data) {
  for (let i = 0; i < data.length; i++) {
    arrPets.push(data[i]);
  }
  randomPets(arrPets)
  first()
}

document.addEventListener("DOMContentLoaded", getData);

function first() {
  const petsCards = document.querySelectorAll(".card");
  const newPetsArr = randomPets(petsCards);
    petsCards.forEach((item, index) => {
      item.childNodes[1].src = newPetsArr[index].img;
      item.childNodes[1].alt = newPetsArr[index].name;
      item.childNodes[3].textContent = newPetsArr[index].name;
    });
}

function randomPets(current) {
  const shuffle = arrPets.sort(() => Math.random() - 0.5);
  return shuffle;
}

const firstPagePets = document.querySelector(".first__page");
const prevPage = document.querySelector(".previous__page");
let activePage = document.querySelector(".slider__number");
const nextPage = document.querySelector(".next__page");
const lastPageBtn = document.querySelector(".last__page");
const slides = document.querySelectorAll(".card");

let numberOfCards;

let generalArray = [];
let visibleArray = [];

function numberOfCardsPerPage() {
  let widthDocument = document.documentElement.clientWidth;
  if (widthDocument >= 1280) {
    numberOfCards = 8;
  }
  if (widthDocument >= 768 && widthDocument < 1280) {
    numberOfCards = 6;
  }
  if (widthDocument < 768) {
    numberOfCards = 3;
  }
}

numberOfCardsPerPage()

function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function amountPets(amount) {
  if (visibleArray.length < amount) {
    let number = randomIndex(0, 7);

    if (visibleArray.includes(number)) {
      amountPets(amount);
    } else {
      visibleArray.push(number);
      amountPets(amount);
    }
  } else {
    return;
  }
}

while (generalArray.length < 48) {
  amountPets(8);
  if (generalArray.slice(-4).includes(visibleArray.slice(0, 4)[0])) {
    visibleArray = [];
  } else if (generalArray.slice(-4).includes(visibleArray.slice(0, 4)[1])) {
    visibleArray = [];
  } else if (generalArray.slice(-4).includes(visibleArray.slice(0, 4)[2])) {
    visibleArray = [];
  } else if (generalArray.slice(-4).includes(visibleArray.slice(0, 4)[3])) {
    visibleArray = [];
  } else {
    generalArray.push(...visibleArray);
    visibleArray = [];
  }
}

function pagination(number) {
  for (let i = 0; i < numberOfCards; i++) {
    slides[i].childNodes[3].textContent =
      arrPets[generalArray[i + number * numberOfCards]].name;
    slides[i].childNodes[1].alt =
      arrPets[generalArray[i + number * numberOfCards]].name;
    slides[i].childNodes[1].src =
      arrPets[generalArray[i + number * numberOfCards]].img;
  }
}


export function rightPage() {
  numberOfCardsPerPage();
  if (!arrPets[generalArray[(+activePage.textContent + 1) * numberOfCards]]) {
    nextPage.disabled = true;
    lastPageBtn.disabled = true;
    pagination(activePage.textContent);
    activePage.textContent++;
  } else {
    prevPage.disabled = false;
    firstPagePets.disabled = false;
    pagination(activePage.textContent);
    activePage.textContent++;
  }
}

function firstPage() {
  nextPage.disabled = false;
  lastPageBtn.disabled = false;
  prevPage.disabled = true;
  firstPagePets.disabled = true;
  pagination(0);
  activePage.textContent = 1;
}

function leftPage() {
  if (+activePage.innerHTML == 2) {
    prevPage.disabled = true;
    firstPagePets.disabled = true;
    pagination(activePage.textContent - 2);
    activePage.textContent--;
  } else {
    nextPage.disabled = false;
    lastPageBtn.disabled = false;
    pagination(activePage.textContent - 2);
    activePage.textContent--;
  }
}

function lastPage() {
  numberOfCardsPerPage();
  pagination(generalArray.length / numberOfCards - 1);
  activePage.innerHTML = generalArray.length / numberOfCards;
  nextPage.disabled = true;
  lastPageBtn.disabled = true;
  prevPage.disabled = false;
  firstPagePets.disabled = false;
}

function paginationSubscribe() {
  nextPage.addEventListener("click", rightPage);
  prevPage.addEventListener("click", leftPage);
  firstPagePets.addEventListener("click", firstPage);
  lastPageBtn.addEventListener("click", lastPage);

}

export default paginationSubscribe;
