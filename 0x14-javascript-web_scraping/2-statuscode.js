#!/usr/bin/node

const request = require('request');
//import the request module

request.get(process.argv[2])
//use a request module to perform a get request to the url

    .on('response', function (response) {
        //set up an event listener for the response event emmitted by http request

        console.log(`code: ${response.statusCode}`);
        //log the http statuscode of the response to the console.
});
