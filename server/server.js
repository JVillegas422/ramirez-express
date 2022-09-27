const express = require('express');

const app = express();

// Make files in the server/public folder
// available to who wants some
app.use(express.static('server/public'));

// app.listen(3000, () => {
//     console.log('We\'re live!');
// });

const port = 3000;

let comments = [
    'Servers are neat!',
    'Well akhshully',
    'They are not..'
];

// Like an "Event Handler"
// When Jimmy asks for comments
// call this function
app.get('/comments', (req, res) => {
    console.log('Jimmy wants those comments!');

    res.send(comments);
});

app.get('/comments/first', (req, res) => {
    console.log('In comments/first!');

    res.send(comments[0]);
});

app.listen(port, () => {
    console.log('listening on port', port);
  });

console.log('In server.js!');
