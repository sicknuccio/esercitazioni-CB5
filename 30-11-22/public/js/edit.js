const GET = async (id) => {
  const url = `http://localhost:3000/attore?id=${id}`;
  const res = await fetch(url);
  return await res.json();
};

const PUT = async (body) => {
  const url = `http://localhost:3000/attore`;
  return await fetch(`${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams(body),
  });
};

const DELETE = async (body) => {
  const url = `http://localhost:3000/attore`;
  return await fetch(`${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams(body),
  });
};

const search_btn = document.getElementById("search-btn");
const idEl = document.getElementById("id");

const container = document.getElementById("container");

/**
 * Eventi
 */
search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  GET(idEl.value).then((actor) => {
    container.textContent = "";
    createCard(actor);
  });
});

/**
 *
 * Creazione Card
 */
const createCard = (actor) => {
  const cardEl = document.createElement("div");
  const infoEl = document.createElement("h2");
  const nameEl = document.createElement("input");
  const surnameEl = document.createElement("input");
  const data_nascitaEl = document.createElement("input");
  const saveEl = document.createElement("button");
  const deleteEl = document.createElement("button");

  infoEl.textContent = "Informazioni";
  cardEl.classList = "card";

  nameEl.classList = "actor_name";
  nameEl.setAttribute("placeholder", actor.nome);

  surnameEl.classList = "actor_surname";
  surnameEl.setAttribute("placeholder", actor.cognome);

  data_nascitaEl.classList = "actor_data_nascita";
  data_nascitaEl.setAttribute("placeholder", actor.data_nascita);

  saveEl.classList = "save-btn";
  saveEl.textContent = "Salva";

  deleteEl.classList = "delete-btn";
  deleteEl.textContent = "Elimina";

  nameEl.textContent = "Nome: " + actor.nome;
  surnameEl.textContent = "Cognome: " + actor.cognome;
  data_nascitaEl.textContent = "Data di nascita: " + actor.data_nascita;

  /**
   * Eventi bottoni card
   */

  let upActor = {
    id: actor.id,
    nome: nameEl.value == "" ? actor.nome : nameEl.value,
    cognome: surnameEl.value == "" ? actor.cognome : surnameEl.value,
    data_nascita:
      data_nascitaEl.value == "" ? actor.data_nascita : data_nascitaEl.value,
    // riconoscimenti: riconoscimentiEl.value,
    // inizio_attivita: inizio_attivitaEl.value,
    // fine_attivita: fine_attivitaEl.value,
    // in_attivita: in_attivitaEl.value,
  };

  saveEl.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(
      PUT(upActor).then((res) => {
        console.log(res);
      })
    );
  });

  deleteEl.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(
      DELETE(upActor).then((res) => {
        console.log(res);
      })
    );
  });

  cardEl.append(infoEl, nameEl, surnameEl, data_nascitaEl, saveEl, deleteEl);
  container.append(cardEl);
};
