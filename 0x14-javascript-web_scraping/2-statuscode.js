const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.log('Usage: node 2-statuscode.js <URL>');
  process.exit(1);
}

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log('code:', response.statusCode);
  }
});
