const containerEl = document.querySelector(".container");
//Metodo per formattare gli ID
const getId = (n) => {
  if (!n) return null;

  let id = n;
  if (id < 10) {
    id = "00" + id;
  } else if (id < 100) {
    id = "0" + id;
  }
  return id;
};
//Funzione per creare le card pokemon
const createPokeCard = (parent, imgLink, pokemonName, id, type) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.classList.add(type);

  const nameEl = document.createElement("h1");
  nameEl.textContent = pokemonName;

  const idEl = document.createElement("p");
  idEl.className = "pokemonId";
  idEl.textContent = `# ${getId(id)}`;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("alt", pokemonName);
  imgEl.setAttribute("src", imgLink);

  const typeEl = document.createElement("p");
  idEl.className = "pokemonType";
  typeEl.textContent = `Type: ${type ? type : ""}`;

  cardEl.append(imgEl, nameEl, idEl, typeEl);
  containerEl.appendChild(cardEl);
};
//API
const pokemons1 = [];

for (let i = 1; i <= 897; i++) {
  pokemons1.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
}

//Raggruppare promise
let request1 = pokemons1.map((url) => {
  return fetch(url).then((res) => res.json());
});

//Consumare le promise
Promise.all(request1).then((res) =>
  res.map((pokemon) => {
    if (!pokemon) {
      console.log("Error: Pokemon doesn't exist");
      return null;
    }

    return createPokeCard(
      containerEl,
      pokemon.sprites.front_default,
      pokemon.name,
      pokemon.id,
      pokemon.types[0].type.name
    );
  })
);

//DIVIDERE LE PROMISE PER 3 VOLTE ESERCIZIO 4
//DIVIDERE I BACKGROUND DEI POKEMON CHE HANNO DUE TIPI ESERCIZIO 3
