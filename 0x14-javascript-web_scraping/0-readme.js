const fs = require('fs');

// Check if the file path argument is provided
if (process.argv.length < 3) {
  console.log('Usage: node 0-readme.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line argument
const filePath = process.argv[2];

// Read the content of the file in utf-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

