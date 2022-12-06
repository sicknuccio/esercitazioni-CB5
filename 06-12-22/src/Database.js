const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/attori", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
  });
};

const schema_attore = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: String,
});
const modelAttore = mongoose.model("attoris", schema_attore);

const insertAttore = async (obj) => {
  console.log(obj);
  const user = new modelAttore(obj);
  try {
    return await user.save();
  } catch (error) {
    return error;
  }
};

const searchAttore = async (find_object) => {
  try {
    const actor = await modelAttore.find(find_object);
    return actor;
  } catch (error) {
    return error;
  }
};

const deleteAttore = async (id_attore) => {
  try {
    const actor = await modelAttore.deleteOne({ _id: id_attore });
    return actor;
  } catch (error) {
    return error;
  }
};

const updateAttore = async (find_object, update_object) => {
  try {
    const actor = await modelAttore.findOneAndUpdate(
      find_object,
      update_object
    );
    return actor;
  } catch (error) {
    return error;
  }
};

module.exports = {
  connect,
  insertAttore,
  searchAttore,
  updateAttore,
  deleteAttore,
};
