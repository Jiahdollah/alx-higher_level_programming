#!/usr/bin/node

const fs = require('fs');
//import the biult in node js fs module

fs.writeFile(process.argv[2], process.argv[3], 'utf8',  error => {
//use fs.writer to write data to a file specified to (process.argv[2]
//thw data to written is taken from (process.argv[3]

  if (error) 
     console.log(error);
});
