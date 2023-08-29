#!/usr/bin/node

const request = require('request');

//contruct url for specified starwars flm
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

//use the request module to make a http get request to the constructed url
request(url, function (error, response, body) {
    console.log(error || JSON.parse(body).tittle);
});
