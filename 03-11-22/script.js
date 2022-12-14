import characters from "./object.js";



const bodyEl = document.body;
//CREAZIONE HERO
const heroEl = document.createElement("div");
heroEl.className = "hero";
heroEl.textContent = "TO DO LIST:ANIMAZIONE SUL PUNTATORE SULL'IMMAGINE,CONTINUARE A MIGLIORARE LA RESPONSIVENESS E MIGLIORARE LA GRAFICA,BOX PER UTENTE DOVE INSERIRE I DATI PER ACCEDERE,FILTRARE GLI OGGETTI IN BASE AL PULSANTE CHE CLICCA L'UTENTE";
//CREAZIONE BOTTONE DARKMODE
const buttonEl = document.createElement("button");
buttonEl.textContent ="Dark Mode";
bodyEl.append(heroEl,buttonEl);

//FUNZIONE PER CRARE LE CARD
const createCard =(data) =>{

    const cardEl = document.createElement("div");
    cardEl.className = "card";
    
    const cardTitleEl = document.createElement("h1");
    cardTitleEl.textContent = data.name;
    
    const cardImgEl = document.createElement("img");
    cardImgEl.setAttribute("src", data.image) || "pippo";
    cardImgEl.setAttribute("alt",data.name)
    
    const cardParEl = document.createElement("p");
    cardParEl.textContent = data.description;
    
    
    cardEl.append(cardTitleEl, cardImgEl, cardParEl);
    bodyEl.append(cardEl);
};
//CREAZIONE CARD
characters.map((character) => createCard(character));

//CREAZIONE DARKMODE TRAMITE BOTTONE
buttonEl.addEventListener("click", () => bodyEl.classList.toggle("darkmode"));

//FILTRARE OGGETTI - CREARE FUNZIONE PER FLITRARE

// characters.map((character) =>{ if(character.name )
// createCard(character)
// });
