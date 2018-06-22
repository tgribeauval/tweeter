// when given a db, provides functions that use it to store and retrieve tweets


"use strict";


const simulateDelay = require("./util/simulate-delay"); // creating a variable simulateDelay that imports the simulateDelay function from the simulate-delay.js

module.exports = function makeDataHelpers(db) { // exporting a function called makeDataHelpers that takes (db) as an argument.
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {   // <-- Ask question about this.
      simulateDelay(() => {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {         // <--- Ask question about this.
      db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);
      });
    }

  };
}
