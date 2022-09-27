const express = require('express');

const app = express();

// Make files in the server/public folder
// available to who wants some
app.use(express.static('server/public'));

// app.listen(3000, () => {
//     console.log('We\'re live!');
// });

const port = 3000;

app.listen(port, () => {
    console.log('listening on port', port);
  });

console.log('In server.js!');
