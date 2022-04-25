import { arrPets } from "./arrPets.js";

const body = document.querySelector(".body");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModaBlock = document.querySelector(".btn__position");
const closeModalBtn = document.querySelector(".btn__close");
const petsCards = document.querySelectorAll(".card");

export function openModalWindow(event) {
  const namePetInCard = event.currentTarget.childNodes[3].textContent; // Получила имя pets
  const petInformation = arrPets.find(
    (petInformation) => petInformation.name === namePetInCard
  ); // Получила объект по имени

  const imgPet = document.querySelector(".img__modal");
  const imgAlt = document.querySelector(".img__modal");
  const namePet = document.querySelector(".modal__name");
  const typePet = document.querySelector(".modal__type");
  const breedPet = document.querySelector(".modal__breed");
  const descriptionPet = document.querySelector(".modal__description");
  const agePet = document.querySelector(".age");
  const inoculationsPet = document.querySelector(".inoculations");
  const diseasesPet = document.querySelector(".diseases");
  const parasitesPet = document.querySelector(".parasites");

  imgPet.src = petInformation.img;
  imgAlt.alt = petInformation.name;
  namePet.textContent = petInformation.name;
  typePet.textContent = petInformation.type;
  breedPet.textContent = petInformation.breed;
  descriptionPet.textContent = petInformation.description;
  agePet.textContent = petInformation.age;
  inoculationsPet.textContent = petInformation.inoculations;
  diseasesPet.textContent = petInformation.diseases;
  parasitesPet.textContent = petInformation.parasites;

  modal.style.display = "block";
  overlay.style.display = "block";
  body.classList.add("open");
}

export function closeModalWindow() {
  modal.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("open");
}

export function modalSubscribe() {
  petsCards.forEach((btn) => btn.addEventListener("click", openModalWindow));

  overlay.addEventListener("click", closeModalWindow);
  closeModaBlock.addEventListener("click", closeModalWindow);
  closeModalBtn.addEventListener("click", closeModalWindow);

  // Hover для Close button

  closeModaBlock.addEventListener("mouseenter", function (event) {
    closeModalBtn.style.backgroundColor = "#fddcc4";
    closeModalBtn.style.borderColor = "#fddcc4";
  });

  overlay.addEventListener("mouseenter", function (event) {
    closeModalBtn.style.backgroundColor = "#fddcc4";
    closeModalBtn.style.borderColor = "#fddcc4";
  });

  overlay.addEventListener("mouseleave", function (event) {
    closeModalBtn.style.backgroundColor = "transparent";
    closeModalBtn.style.borderColor = "#f1cdb3";
  });
  closeModaBlock.addEventListener("mouseleave", function (event) {
    closeModalBtn.style.backgroundColor = "transparent";
    closeModalBtn.style.borderColor = "##f1cdb3";
  });
}

// export default modalSubscribe;
