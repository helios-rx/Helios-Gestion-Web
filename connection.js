const mongoose = require("mongoose");
// localhost:27017
const uri = "mongodb+srv://ezequiel:eraeze29@cluster0.xoepino.mongodb.net/servicios?";
mongoose
.connect(uri)
  .catch(err => console.log(err));

  const db = mongoose.connection;
  
  db.once("open", _ => {
    console.log("Database is connected to:", uri);
  });
  
  // to test the error stop mongod
  db.on("error", err => {
    console.log(err);
  });