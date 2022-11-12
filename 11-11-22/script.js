const cardEl = document.getElementById("card");

const imgEl = document.createElement("img");
imgEl.className = "pokeImg";

const nameEl = document.createElement("h1");
nameEl.className = "pokeName";

const idEl = document.createElement("p");
idEl.className = "pokeId";

const typeEl = document.createElement("p");
typeEl.className = "pokeType";

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
//Variabile che mi serve per potermi spostare tra le card
let i = 1;
//Bottone per passare al pokemon successivo
btnNext.addEventListener("click", () => {
  if (i >= 1) {
    btnPrev.classList.remove("inactive");
  }
  i++;
  pokemon(i);
});
//Bottone per tornare al pokemon precedente
btnPrev.addEventListener("click", () => {
  if (i === 1) {
    btnPrev.classList.toggle("inactive");
    return;
  }
  i--;
  pokemon(i);
});
//Funzione per la creazione degli ID dei pokemon
function createId(id) {
  if (!id) return null;
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  }
  return id;
}

const createCard = (el) => {
  cardEl.className = `bg-${el.types[0].type.name}`;
  imgEl.setAttribute("src", el.sprites.other.dream_world.front_default);
  nameEl.textContent = el.name;
  idEl.textContent = `#${createId(el.id)}`;
  typeEl.textContent = `Type: ${el.types[0].type.name}`;
  cardEl.append(imgEl, nameEl, idEl, typeEl);
};
//Funzione per richieste in modo asincrono e creazione di una card
const pokemon = async (i) => {
  cardEl.classList.toggle("active");
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let data = await response.json();
  cardEl.classList.toggle("active");
  createCard(data);
};
// Richiamare la funzione per creare la card
pokemon(i);
