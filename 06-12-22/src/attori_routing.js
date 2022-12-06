const express = require("express");
const fs = require("fs");
const attori = express.Router();
const app = express();
const database = require("./Database.js");
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
  const name_actor = req.query.nome;
  database.searchAttore({ nome: name_actor }).then((actor) => res.send(actor));
});

attori.get("/id", function (req, res) {
  const id_actor = req.query.id;
  database.searchAttore({ _id: id_actor }).then((actor) => res.send(actor));
});

/**POST ATTORE */

attori.post("/", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }
  const nuovo_attore = {
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
  database
    .insertAttore(nuovo_attore)
    .then((actor) => res.status(200).send("Attore creato"));
});

/**PUT ATTORE */

attori.put("/", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  find_object = { _id: req.body.id };

  const update_object = {
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

  const attore = database.updateAttore(find_object, update_object);
  attore.then((actor) => {
    res.send(actor);
  });
});

/**DELETE ATTORE  */
attori.delete("/", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }

  const id_da_cancellare = req.body.id;
  const attore = database.deleteAttore(id_da_cancellare);
  attore.then((actor) => {
    console.log(actor);
    res.send(actor);
  });
});

module.exports = attori;
