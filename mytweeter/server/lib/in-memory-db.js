"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.

// parses a JSON file and returns it in a JS object; a general purpose (if simplistic) database

const db = {
  tweets: require("../data-files/initial-tweets") // declaring a varible db, that requires the initial-tweets.json file
}

module.exports = db; // export this variable
