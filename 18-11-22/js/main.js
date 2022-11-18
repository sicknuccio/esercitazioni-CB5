import { c, q, uuidv4, GET, DELETE, POST, PATCH } from "./utils.js";
const ul = q(".cards__list");
const form = document.forms.pokemon;
const editForm = document.forms.editPokemon;
const elements = form.elements;
const editElements = editForm.elements;
const url = "http://localhost:3000/pokemon";

const btnMod = q(".btn-modify");
const cards__list = q(".cards__list");

//crea card
const createCard = (url, parent, pkm) => {
  const wrapperEl = c("li");
  const cardEl = c("div");
  const nameEl = c("p");
  const typeEl = c("p");
  const btnDel = c("button");
  const btnEdit = c("button");

  wrapperEl.className = "list__card";

  nameEl.textContent = pkm.name;
  typeEl.textContent = pkm.type;
  btnDel.textContent = "Delete";
  btnEdit.textContent = "Edit";
  //elimina
  btnDel.addEventListener("click", () => {
    DELETE(url, pkm.id).then(() => location.reload());
  });
  //modifica
  btnEdit.addEventListener("click", (e) => {
    editElements.id.value = pkm.id;
    editElements.Edit_name.value = nameEl.textContent;
    editElements.Edit_type.value = typeEl.textContent;
  });

  cardEl.append(nameEl, typeEl, btnDel, btnEdit);
  wrapperEl.append(cardEl);
  parent.appendChild(wrapperEl);
};
//aggiungi card
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    id: uuidv4(),
    name: elements.name.value,
    type: elements.type.value,
  };

  POST(url, data).then(() => location.reload());
});

//modifica card
btnMod.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: editForm.id.value,
    name: editForm.Edit_name.value,
    type: editForm.Edit_type.value,
  };
  PATCH(url, data.id, data);
});
window.onload = GET(url).then((res) =>
  res.map((pkm) => createCard(url, cards__list, pkm))
);
