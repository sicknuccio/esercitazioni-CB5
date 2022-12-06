const express = require("express");
const fs = require("fs");
const registi = express.Router();
const app = express();
registi.use(express.urlencoded({ extended: false }));

/**GET REGISTA */
registi.get("/", function (req, res) {
  const id_regista = parseInt(req.query.id);
  if (isNaN(id_regista)) {
    res.status(400).send("Parametro mancante!");
  }
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const regista = JSON.parse(registi_text);
  const reg = regista.find((regista) => {
    return regista.id == id_regista;
  });
  if (typeof reg === "undefined") {
    res.status(400).send("Regista non trovato!");
  } else {
    res.json(reg);
  }
});

/**POST REGISTA */
registi.post("/", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  const nuovo_regista = {
    id: registi.length == 0 ? 1 : registi[registi.length - 1].id + 1,
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

  registi.push(nuovo_regista);

  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).send("Regista creato");
});

/**PUT REGISTA */
registi.put("/", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);

  const index = registi.findIndex((regista) => {
    return regista.id == nuovo_regista.id;
  });

  if (index >= 0) {
    registi.splice(index, 1, nuovo_regista);
    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).send("Regista aggiornato");
  } else {
    res.status(200).send("Regista non trovato");
  }
});

/**DELETE REGISTA */
registi.delete("/", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);

  const reg = registi.filter((regista) => {
    return regista.id == id_da_cancellare;
  });

  if (reg.length > 0) {
    const array_deleted = registi.filter((regista) => {
      return regista.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
    res.status(200).send("Regista cancellato");
  } else {
    res.status(200).send("Regista da cancellare non trovato");
  }
});

module.exports = registi;
