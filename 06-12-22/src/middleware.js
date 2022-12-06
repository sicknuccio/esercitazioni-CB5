const middlewareProva = (req, res, next) => {
  console.log("Richiesta ricevuta");
  next();
};

module.exports = middlewareProva;
