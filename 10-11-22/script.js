//Dichiarazioni
const btn = document.getElementById("btn-generator");
const advice = document.getElementById("advice");
const idEl = document.querySelector(".number");
const urlAdvice = "https://api.adviceslip.com/advice";

/**
 * Prendi dati da url
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      advice.innerHTML = `"` + res.slip.advice + `"`;
      idEl.textContent = "Advice # " + res.slip.id;
    })

    .catch((e) => console.log("Error:" + e));
};
/**
 *Al primo caricamento
 * @param void
 */
const onFirstLoad = () => {
  btn.addEventListener("click", () => {
    getAdvice(urlAdvice);
  });

  getAdvice(urlAdvice);
};

window.onload = onFirstLoad;
