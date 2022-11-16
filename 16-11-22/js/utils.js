import { DELETE } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

//Generatore id univoco
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
//Crea le card
const createCard = (url, parent, name, type, id) => {
  const wrapperEl = c("li");
  const cardEl = c("div");
  const nameEl = c("p");
  const typeEl = c("p");
  const btnDel = c("button");

  wrapperEl.className = "list__card";

  nameEl.textContent = name;
  typeEl.textContent = type;
  btnDel.textContent = "Delete";

  btnDel.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  cardEl.append(nameEl, typeEl, btnDel);
  wrapperEl.append(cardEl);
  parent.appendChild(wrapperEl);
};

export { c, q, uuidv4, createCard };
