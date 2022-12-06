// inclusione dei moduli esterni
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const database = require("./src/Database.js");

// istanza express
const app = express();
//Routing
const attoriRouting = require("./src/attori_routing.js");
const registiRouting = require("./src/registi_routing.js");
app.use("/attore", attoriRouting);
app.use("/regista", registiRouting);

// apertura cartella public
app.use(express.static("public"));

// urlencoded per leggere i parametri post
app.use(express.urlencoded({ extended: false }));

// const middlewareProva = (req, res, next) => {
//   console.log(1);
//   console.log("Richiesta ricevuta");
//   next();
// };

// app.use(middlewareProva);

/**
 *
 * DATABASE
 *
 */
database.connect();

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
