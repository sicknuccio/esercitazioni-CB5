import products from "./products.js";

const body = document.body;

// const heroEl = document.querySelector("hero");
// const hero = document.createElement("p");
// heroEl.appendChild(hero);

const createCard = (title, imgUrl, description, category, parent) => {
    const cardEl = document.createElement("div");

    cardEl.className = "card";
   
      // title
    const titleEl = document.createElement("h1");
    titleEl.textContent = title;
  
    // img
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", category);
  
    // paragraph
    const parEl = document.createElement("p");
    parEl.textContent = description;
  
    cardEl.append(titleEl, imgEl, parEl);
    parent.appendChild(cardEl);
  };
const mostpopularEl = document.querySelector(".most-popular");
const headerMostPop = document.createElement("h1");
headerMostPop.textContent = "Sale";
mostpopularEl.appendChild(headerMostPop);

products
  .filter((product) => product.price <= 60)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      mostpopularEl
    );
  });

  //ESERCITAZIONE ICOMPLETA 
  //APPROFONDIRE GESTIONE DOM 
  //DOPO AVER CREATO LA HERO ALL'INTERNO DELLO SCRIPT.JS LA HERO VENIVA AUTOMATICAMENTE MESSA SOTTO LE CARD E NON HO TROVATO LA SOLUZIONE AL PROBLEMA
  //togliendo i commenti a inizio script la pagina scompare e non capisco come far si che cio che viene creato tramite createCard appenderlo alla hero che creo ma che non si vede
  //ho provato a creare tutto da 0, dopo non esserci riuscito ho provato con il codice scritto a lezione ma non sono riuscito a terminare l'esercitazione con ciò che era richiesto fare