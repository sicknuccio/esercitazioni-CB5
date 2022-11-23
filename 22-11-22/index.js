const os = require("os");

const calc = require("./calc.js");
const url = require("url");

const http = require("http");

const server = http.createServer((req, res) => {
  const values = url.parse(req.url, true).query;
  const my_URL = url.parse(req.url, true).pathname;

  const Calcolatrice =
    '<form method="GET"><input type="textbox" name="a"><br /><input type="textbox" name="b"><br /><input type="submit" value="Calcola"></form>';

  const Home =
    '<h1> Scegli operazione </h1> <a href="/sum"> Somma </a> <br /> <a href="/sub"> Sottrazione </a> <br/> <a href="/mul"> Moltiplicazione </a> <br /> <a href="/div"> Divisione </a>';

  res.writeHead(200, { "Content-Type": "text/html" });
  for (n in values) {
    if (isNaN(values[n])) {
      res.end("Errore: Valori non validi");
      return;
    }
  }

  switch (my_URL) {
    case "/home":
      res.write(Home);
      break;
    case "/sum":
      if (Object.values(values).length >= 2) {
        let sum = calc.sum(...Object.values(values));
        res.write("La somma e': " + sum);
      } else {
        res.write(Calcolatrice);
      }
      break;
    case "/sub":
      if (Object.values(values).length >= 2) {
        let sum = calc.sum(...Object.values(values));
        res.write("La somma e': " + sum);
      } else {
        res.write(Calcolatrice);
      }
      break;
    case "/mul":
      if (Object.values(values).length >= 2) {
        let sum = calc.sum(...Object.values(values));
        res.write("La somma e': " + sum);
      } else {
        res.write(Calcolatrice);
      }
      break;
    case "/div":
      if (Object.values(values).length >= 2) {
        let sum = calc.sum(...Object.values(values));
        res.write("La somma e': " + sum);
      } else {
        res.write(Calcolatrice);
      }
      break;
    default:
      res.write(
        "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Home<a></p>"
      );
      break;
  }
  res.end();
});
server.listen(3000);
