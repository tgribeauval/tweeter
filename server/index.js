"use strict";

// Basic express setup:

const PORT = 8080;   //setting up the PORT
const express = require("express");   // including the express library
const bodyParser = require("body-parser");
const app = express();     // storing the library within a variable named app.

app.use(bodyParser.urlencoded({ extended: true }));   // Parses the text as URL encoded data and exposes the resulting object (containing the keys and values) on req.body. If extended is false, you can not post "nested object"
app.use(express.static("public")); // <--- Ask questiobn about this line.

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("./lib/in-memory-db"); // this line of code requires the in-memory-db.js file, which is a data base of our tweets

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require("./lib/data-helpers.js")(db);

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
