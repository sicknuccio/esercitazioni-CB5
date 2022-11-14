const postEl = document.getElementById("post");

const idEl = document.createElement("p");
idEl.className = "id";

const titleEl = document.createElement("h1");
titleEl.className = "title";

const bodyEl = document.createElement("p");
bodyEl.className = "chest";

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

const laoderEl = document.querySelector(".loader");

//Indice per spostarmi tra i post
let i = 1;

//bottone prossimo post
btnNext.addEventListener("click", () => {
  if (i >= 1) {
    btnPrev.classList.remove("inactive");
    btnPrev.removeAttribute("disabled", "");
  }
  i++;

  post(i);
});

//bottone precedente post
btnPrev.addEventListener("click", () => {
  i--;
  if (i === 1) {
    btnPrev.classList.toggle("inactive");
    btnPrev.setAttribute("disabled", "");
  }

  post(i);
});

//creazione dinamica dei post
const createPost = (el) => {
  idEl.innerHTML = `${el.id}`;
  titleEl.innerHTML = `Title: ${el.title}`;
  bodyEl.innerHTML = `Body: ${el.body}`;
  postEl.append(idEl, titleEl, bodyEl);
};

//scorri tra i post in arrivo
const post = async (i) => {
  laoderEl.classList.toggle("active");
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
    cache: "no-cache",
  });
  let data = await res.json();
  createPost(data);
  laoderEl.classList.toggle("active");
};

post(i);
