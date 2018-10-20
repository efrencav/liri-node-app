require("dotenv").config();
// console.log(process.env.SPOTIFY_ID);

const keys = require("./keys.js"); // Grab data from keys.js
const fs = require("fs"); // node package for reading and writing files
const request = require('request'); // node package for making http requests
const questions = require("./questions");

//End Spotify Exercise
const Spotify = require('node-spotify-api');
const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
});

//Prompts for command line syntax
var action = process.argv[2];
var value = process.argv[3];

function liriAppPrompts() {
  inquirer.prompt(questions.array).then(answers => {
      switch (answers.choice) {
          case questions.array[0].choices[0]:
              searchConcerts(answers.concert, true);
              break;
          case questions.array[0].choices[1]:
              searchSpotify(answers.song, true);
              break;
          case questions.array[0].choices[2]:
              searchOMBD(answers.movie, true);
              break;
          case questions.array[0].choices[3]:
              randomDemo();
              break;
          default:
              console.log("Goodbye!");
              break;
      }
  });
}

// Reset  =======================================================
function checkReset(check) {
  if (check) {
      inquirer.prompt(reset).then(ans => {
          if (ans.resetLiri) liriAppPrompts();
      });
  }
}
//Spotify =======================================================
spotify
.search({ type: 'track', query: 'Smells Like Teen Spirit', limit: 3 })
.then(function(response) {
  console.log(response.tracks);
})
.catch(function(err) {
  console.log(err);
  console.log("================= Artist Information ==================");
  console.log(`Artist(s): ${response.tracks.items[0].artists[0].name}`);
  console.log(`Song Title: ${response.tracks.items[0].name}`);
  console.log(`Listen Here: ${response.tracks.items[0].album.external_urls.spotify}`);
  console.log(`Name of Album: ${response.tracks.items[0].album.name}\n`);
  checkReset(check);
 
  console.log(response); 
});

// OMDb =======================================================
function searchOMBD(movie, check) {

  request(`http://www.omdbapi.com/?t=${movie}&apikey=${keys.OMDB.id}`, function (err, response, body) {
      if (err||JSON.parse(body).Response === "False") {
          console.log("That is not a valid movie");
          return checkReset(check);
      }
      console.log("================= Movie Information ==================")
      console.log(`\nTitle: ${JSON.parse(body).Title}`);
      console.log(`\nRelease Year: ${JSON.parse(body).Year}`);
      console.log(`\nIMDB Rating: ${JSON.parse(body).imdbRating}`);
      console.log(`\nRotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`);
      console.log(`\nCountry: ${JSON.parse(body).Country}`);
      console.log(`\nPlot: ${JSON.parse(body).Plot}`);
      console.log(`\nActors: ${JSON.parse(body).Actors}\n`);
      checkReset(check);
  })
}
