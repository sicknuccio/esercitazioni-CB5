function getActor(id) {
  const url = `http://localhost:3000/attore?id=${id}`;
  const GET = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };
  return GET(url);
}

const search_btn = document.getElementById("search-btn");
const idEl = document.getElementById("id");

const container = document.getElementById("container");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getActor(idEl.value).then((actor) => {
    container.textContent = "";
    createCard(actor);
  });
});

const createCard = (actor) => {
  const cardEl = document.createElement("div");
  const nameEl = document.createElement("p");
  const surnameEl = document.createElement("p");
  const data_nascitaEl = document.createElement("p");

  nameEl.textContent = actor.nome;
  surnameEl.textContent = actor.cognome;
  data_nascitaEl.textContent = actor.data_nascita;

  cardEl.append(nameEl, surnameEl, data_nascitaEl);
  container.append(cardEl);
};
