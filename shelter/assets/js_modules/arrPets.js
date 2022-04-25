export const arrPets = []; // Массив животных

async function getData() {
  const res = await fetch("../../assets/js_modules/pets.json");
  const data = await res.json();
  showData(data);
}

function showData(data) {
  for (let i = 0; i < data.length; i++) {
    arrPets.push(data[i]);
  }
}

document.addEventListener("DOMContentLoaded", getData);
