import { c, q, GET, POST, uuidv4 } from "./utils.js";

const form = document.forms.pokemon;
const element = form.elements;
const URL = "http://localhost:3000/pokemon";

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.name.value,
    type: element.type.value,
  };
  POST(URL, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

const getPokemon = () => {
  GET(URL).then((res) =>
    res.map((pkm) => (ul.innerHTML += `<li>${pkm.name}</li>`))
  );
};

window.onload = getPokemon();
