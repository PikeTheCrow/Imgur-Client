var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '3a8147ac2eec110';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, { //ajax request to whatever url we passed to it
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){ //promise
      return response.json();
    });
  }
};
