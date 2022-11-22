const os = require("os");

const calc = require("./calc.js");
const url = require("url");

const http = require("http");

const server = http.createServer((req, res) => {
  const values = url.parse(req.url, true).query;
  const my_URL = url.parse(req.url, true).pathname;

  for (n in values) {
    if (isNaN(values[n])) {
      res.end("Errore: Valori non validi");
      return;
    }
  }

  switch (my_URL) {
    case "/home":
      res.write("Benvenuti nella home");
      break;
    case "/sum":
      let sum = calc.sum(...Object.values(values));
      res.write("Il risultato e' = " + sum);
      break;
    case "/sub":
      let sub = calc.sub(values.a, values.b);
      res.write("Il risultato e' = " + sub);
      break;
    case "/mul":
      let mul = calc.mul(...Object.values(values));
      res.write("Il risultato e' = " + mul);
      break;
    case "/div":
      let div = calc.dev(values.a, values.b);
      res.write("Il risultato e' = " + div);
      break;
    default:
      "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Home<a></p>";
      break;
  }
  res.end();
});
server.listen(3000);
