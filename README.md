# liri-node-app
## LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:

* Bands in town
* spotify-this-song
* movie-this
* do-what-it-says

**Technologies used:**
* Node.js
* Javascript
* npm packages: require, spotify, chalk, inquire, moment, node-spotify-api

**How to Run LIRI-Bot**
1: node liri.js my-tweets This will show your last 20 tweets and when they were created at in your terminal/bash window.
2: node liri.js spotify-this-song <song name here> This will show the following information about the song in your terminal/bash window * Artist(s) * The song's name * A preview link of the song from Spotify * The album that the song is from. If no song is provided then the program will default to I Want it That Way"
3: node liri.js movie-this <movie name here>

This will output the following information to your terminal/bash window:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Plot of the movie.
* Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'undefined.'

4: node liri.js 

