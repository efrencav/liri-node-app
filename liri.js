require("dotenv").config();

var keys = require("./keys.js"); // Grab data from keys.js
var fs = require("fs"); // node package for reading and writing files
var request = require('request'); // node package for making http requests
var spotify = new Spotify(keys.spotify);  // node package that handles Spotify requests

//Prompts for command line syntax
var action = process.argv[2];
var value = process.argv[3];

//Spotify Exercise

//End Spotify Exercise
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});