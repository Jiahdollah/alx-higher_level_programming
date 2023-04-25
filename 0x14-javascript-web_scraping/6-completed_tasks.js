#!/usr/bin/node

const request = require('request');
request(process.argv[2], function (error, response, content) {
  if (!error) {
    const todos = JSON.parse(content);
    let completed = {};
    todos.forEach((todo) => {
      if (todo.completed && completed[todo.userId] === undefined) {
        completed[todo.userId] = 1;
      } else if (todo.completed) {
        completed[todo.userId] += 1;
      }
    });
    console.log(completed);
  }
});
