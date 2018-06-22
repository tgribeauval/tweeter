/ configures and starts an express app: acquires a db, uses it to build some data helpers, and uses those to define routes




"use strict";

// Basic express setup:

const PORT = 8080;   //setting up the PORT
const express = require("express");   // including the express library
const bodyParser = require("body-parser");
const app = express();     // storing the library within a variable named app.
const MongoClient = require("mongodb").MongoClient; // creating a variable called MongoClient which is required our mongo database.
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
app.use(bodyParser.urlencoded({ extended: true }));   // Parses the text as URL encoded data and exposes the resulting object (containing the keys and values) on req.body. If extended is false, you can not post "nested object"
app.use(express.static("public"));







MongoClient.connect(MONGODB_URI, (err, db) => { //using to connect command to connect to the database on line 16, db channel to database.
  if (err) { // if err console.log:
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
   const DataHelpers = require("./lib/data-helpers.js")(db); //
   const tweetsRoutes = require("./routes/tweets")(DataHelpers);
   app.use("/tweets", tweetsRoutes);

});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
