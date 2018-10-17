console.log('this is loaded');

// Spotify key information
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "282f834858e84faab5e1813afb6611ac",
  secret: "6fc5a6cc2ab64a60a2a6c7723b744d32"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
