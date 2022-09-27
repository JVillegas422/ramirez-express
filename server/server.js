const express = require('express');

const app = express();

// app.listen(3000, () => {
//     console.log('We\'re live!');
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log('I\'m listening!');
});

console.log('In server.js!');