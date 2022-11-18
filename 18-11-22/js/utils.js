const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
const GET = async (URL) => {
  const response = await fetch(URL);
  return await response.json();
};

const POST = async (URL, body) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

const PATCH = async (URL, id, body) => {
  return await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

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

export { c, q, uuidv4, GET, POST, DELETE, PATCH };
