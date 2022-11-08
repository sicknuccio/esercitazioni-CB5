fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  .then((response) => response.json())
  .then((poke) => {
    poke.results.forEach((item) =>
      fetch(item.url).then((res) =>
        res.json().then((pokemon) => createPokeCard(pokemon))
      )
    );
  });
//  colors = {
//   fire: "#FDDFDF",
//   grass: "#DEFDE0",
//   electric: "#FCF7DE",
//   water: "#DEF3FD",
//   ground: "#f4e7da",
//   rock: "#d5d5d4",
//   fairy: "#fceaff",
//   poison: "#98d7a5",
//   bug: "#f8d5a3",
//   dragon: "#97b3e6",
//   psychic: "#eaeda1",
//   flying: "#F5F5F5",
//   fighting: "#E6E0D4",
//   normal: "#F5F5F5",
// };

const containerEl = document.querySelector(".container");

const createPokeCard = (object) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", object.sprites.other.dream_world.front_default);

  const idEl = document.createElement("p");
  idEl.className = "pokemonId";
  idEl.textContent = `#${object.id}`;

  const nameEl = document.createElement("h1");
  nameEl.textContent = object.name;

  const typeEl = document.createElement("p");
  idEl.className = "pokemonType";
  typeEl.textContent = `Type: ${object.types[0].type.name}`;

  cardEl.append(imgEl, idEl, nameEl, typeEl);
  containerEl.appendChild(cardEl);

  // if (object.type[0].type.name === "fire") {
  //   cardEl.style = "background-color:#FDDFDF;";
  // }
};
