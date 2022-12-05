function getDirectors(id) {
  const url = `http://localhost:3000/regista?id=${id}`;
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
  getDirectors(idEl.value).then((regista) => {
    container.textContent = "";
    createCard(regista);
  });
});

const createCard = (regista) => {
  const cardEl = document.createElement("div");
  const infoEl = document.createElement("h2");
  const nameEl = document.createElement("p");
  const surnameEl = document.createElement("p");
  const data_nascitaEl = document.createElement("p");

  infoEl.textContent = "Informazioni";
  cardEl.classList = "card";
  nameEl.classList = "actor_name";
  surnameEl.classList = "actor_surname";
  data_nascitaEl.classList = "actor_data_nascita";

  nameEl.textContent = "Nome: " + regista.nome;
  surnameEl.textContent = "Cognome: " + regista.cognome;
  data_nascitaEl.textContent = "Data di nascita: " + regista.data_nascita;

  cardEl.append(infoEl, nameEl, surnameEl, data_nascitaEl);
  container.append(cardEl);
};
