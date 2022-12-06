const GET = async (id) => {
  const url = `http://localhost:3000/attore/id?id=${id}`;
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
  nameEl.setAttribute("placeholder", actor[0].nome);

  surnameEl.classList = "actor_surname";
  surnameEl.setAttribute("placeholder", actor[0].cognome);

  data_nascitaEl.classList = "actor_data_nascita";
  data_nascitaEl.setAttribute("placeholder", actor[0].data_nascita);

  saveEl.classList = "save-btn";
  saveEl.textContent = "Salva";

  deleteEl.classList = "delete-btn";
  deleteEl.textContent = "Elimina";

  nameEl.textContent = "Nome: " + actor[0].nome;
  surnameEl.textContent = "Cognome: " + actor[0].cognome;
  data_nascitaEl.textContent = "Data di nascita: " + actor[0].data_nascita;

  /**
   * Eventi bottoni card
   */

  saveEl.addEventListener("click", (e) => {
    e.preventDefault();
    let upActor = {
      id: idEl.value,
      nome: nameEl.value == "" ? actor[0].nome : nameEl.value,
      cognome: surnameEl.value == "" ? actor[0].cognome : surnameEl.value,
      data_nascita:
        data_nascitaEl.value == ""
          ? actor[0].data_nascita
          : data_nascitaEl.value,
    };
    console.log(upActor);
    console.log(
      PUT(upActor).then((res) => {
        console.log(res);
      })
    );
  });

  deleteEl.addEventListener("click", (e) => {
    e.preventDefault();
    let body = {
      id: actor[0]._id,
    };
    console.log(
      DELETE(body).then((res) => {
        console.log(res);
      })
    );
  });

  cardEl.append(infoEl, nameEl, surnameEl, data_nascitaEl, saveEl, deleteEl);
  container.append(cardEl);
};
