const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server in esecuzione");
});

app.get("/pagina_somma", function (req, res) {
  res.sendFile("somma.html", { root: __dirname + "/src/html" });
});

app.get("/pagina_sottrazione", function (req, res) {
  res.sendFile("sottrazione.html", { root: __dirname + "/src/html" });
});

app.get("/pagina_moltiplicazione", function (req, res) {
  res.sendFile("moltiplicazione.html", { root: __dirname + "/src/html" });
});

app.get("/pagina_divisione", function (req, res) {
  res.sendFile("divisione.html", { root: __dirname + "/src/html" });
});

/*
 *
 *  SOMMA
 *
 */
app.get("/somma", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = parseInt(a) + parseInt(b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});

/*
 *
 *  SOTTRAZIONE
 *
 */
app.get("/sottrazione", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = parseInt(a) - parseInt(b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});

/*
 *
 *  MOLTIPLICAZIONE
 *
 */
app.get("/moltiplicazione", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = parseInt(a) * parseInt(b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});

/*
 *
 *  DIVISIONE
 *
 */
app.get("/divisione", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = parseInt(a) / parseInt(b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});
