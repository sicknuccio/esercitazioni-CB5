// nel terminare fare npm install os poi questo
const os = require("os");
//richiamare le sue funzioni
console.log(os.userInfo());
console.log(os.arch());

const calc = require("./calc.js");
const url = require("url");

//creare un server
//utilizzando il modulo http
const http = require("http");
//req è la richiesta che ricevo dal browser
//res è la risposta alla chiamata
const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  const my_url = url.parse(req.url, true).pathname;

  for (key in params) {
    if (isNaN(params[key])) {
      res.end("Errore: Valori non validi");
      return;
    }
  }

  switch (my_url) {
    case "/home":
      res.write("Benvenuti nella home");
      break;
    case "/sum":
      let sum = calc.sum(...Object.values(params));
      res.write("Il risultato e' = " + sum);
      break;
    case "/sub":
      let sub = calc.sub(...Object.values(params));
      res.write("Il risultato e' = " + sub);
      break;
    case "/mul":
      let mul = calc.mul(...Object.values(params));
      res.write("Il risultato e' = " + mul);
      break;
    case "/dev":
      let dev = calc.dev(params.a, params.b);
      res.write("Il risultato e' = " + dev);
      break;
    default:
      "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Home<a></p>";
      break;
  }
  res.end();
});

//in ascolto sulla porta 3000
server.listen(3000);

// sul terminale: node index.js
// sul browser -> localhost:3000
//ctrl+c per interrompere il server
