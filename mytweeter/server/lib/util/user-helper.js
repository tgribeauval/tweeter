"use strict";

const Chance = require("chance");   // require something called chance that is maybe a library of firstnames and lastname ?
const chance = new Chance(); // declaring a variable chance that is equal to?

const md5 = require('md5'); // is md5 a library.

module.exports = { // Here we are module.exporting a function

  generateRandomUser: () => { // this function is called generateRamdomUser
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName; // declaring a variabal userName and making it equal to the firstName + lastName

    let userHandle = "@"; //declaring a variable userHandle that holds a string '@'
    if (Math.random() > 0.5) { //if a random number between 0 and 1 is superior to 0.5, please do this:
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix // '@' = @ + random chance word?
    }

    userHandle += lastName; // or '@' = '@' + lastName

    if (Math.random() > 0.5) { // if a random number between 0 and 1 is inferior to 0.5, please do this:
      const suffix = Math.round(Math.random() * 100); // declare a variable called suffix making it = to a random number between 0 and 1, times 100 and rounded up.
      userHandle += suffix; // '@' = '@' + suffix
    }

    const avatarUrlPrefix = `https://vanillicon.com/${md5(userHandle)}`;
    const avatars = { // declaring a var avatar that hold an object that holds images imported from vanillicon.com/md5?
      small:   `${avatarUrlPrefix}_50.png`, //img
      regular: `${avatarUrlPrefix}.png`, //img
      large:   `${avatarUrlPrefix}_200.png` //img
    }

    return { // this line is returning what the function generateRandomUser wants
      name: userName, // line 14
      handle: userHandle, //line 20 or 23
      avatars: avatars // line 31-34
    };
  }
};
