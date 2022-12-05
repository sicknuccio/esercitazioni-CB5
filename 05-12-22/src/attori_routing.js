const express = require("express");
const fs = require("fs");
const attori = express.Router();
const app = express();
attori.use(express.urlencoded({ extended: false }));

attori.get("/all", function (req, res) {
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  const arr_attori = attori.map((att) => {
    const id = att.id;
    const nome = att.nome;
    const cognome = att.cognome;

    return { id, nome, cognome };
  });

  res.json(arr_attori);
});

/**GET ATTORE */
attori.get("/", function (req, res) {
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });
  if (typeof attr === "undefined") {
    res.status(400).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});

/**POST ATTORE */

attori.post("/", function (req, res) {
  console.log("entrato");
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  const nuovo_attore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  attori.push(nuovo_attore);

  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).send("Attore creato");
});

/**PUT ATTORE */

attori.put("/", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const index = attori.findIndex((attore) => {
    console.log(attore);
    return attore.id == nuovo_attore.id;
  });

  if (index >= 0) {
    attori.splice(index, 1, nuovo_attore);
    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore aggiornato");
  } else {
    res.status(200).send("Attore non trovato");
  }
});

/**DELETE ATTORE  */
attori.delete("/", function (req, res) {
  console.log("entrato r");
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const attr = attori.filter((attore) => {
    return attore.id == id_da_cancellare;
  });

  if (attr.length > 0) {
    const array_deleted = attori.filter((attore) => {
      return attore.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/attori.json", JSON.stringify(array_deleted));
    res.status(200).send("Attore cancellato");
  } else {
    res.status(200).send("Attore da cancellare non trovato");
  }
});

module.exports = attori;
