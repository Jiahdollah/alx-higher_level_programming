const request = require('request');
const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0])) {
  console.error('Please provide a valid movie ID');
  process.exit(1);
}

const movieID = parseInt(args[0]);

request(`https://swapi-api.alx-tools.com/api/films/${movieID}`, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to retrieve data (${response.statusCode})`);
    process.exit(1);
  }

  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
