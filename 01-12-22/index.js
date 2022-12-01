// inclusione dei moduli esterni
const express = require("express");
const fs = require("fs");

// istanza express
const app = express();

// apertura cartella public
app.use(express.static("public"));

// urlencoded per leggere i parametri post
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000!");
});

/**
 *
 * GET ATTORI
 *
 */

app.get("/search", function (req, res) {
  res.sendFile("search.html", { root: __dirname + "/src/html" });
});

app.get("/create", function (req, res) {
  res.sendFile("create.html", { root: __dirname + "/src/html" });
});

app.get("/edit", function (req, res) {
  res.sendFile("edit.html", { root: __dirname + "/src/html" });
});

/**
 *
 * GET REGISTI
 *
 */

app.get("/search_directors", function (req, res) {
  res.sendFile("search_directors.html", { root: __dirname + "/src/html" });
  console.log(__dirname + "/src/html");
});

app.get("/create_directors", function (req, res) {
  res.sendFile("create_directors.html", { root: __dirname + "/src/html" });
});

app.get("/edit_directors", function (req, res) {
  res.sendFile("edit_directors.html", { root: __dirname + "/src/html" });
});

/**
 * GET ATTORI
 */

app.get("/attori", function (req, res) {
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

/**
 * GET ATTORE
 */

app.get("/attore", function (req, res) {
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

/**
 * CREAZIONE ATTORE
 */

app.post("/attore", function (req, res) {
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

/**
 * AGGIORNA ATTORE
 */

app.put("/attore", function (req, res) {
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

/**
 * RIMUOVI ATTORE
 */
app.delete("/attore", function (req, res) {
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

/**
 * GET REGISTA
 */
app.get("/regista", function (req, res) {
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

/**
 * CREAZIONE REGISTA
 */

app.post("/regista", function (req, res) {
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

/**
 * AGGIORNA REGISTA
 */

app.put("/regista", function (req, res) {
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

/**
 * RIMUOVI REGISTA
 */
app.delete("/regista", function (req, res) {
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
