const express = require('express');
var about = require('./routes/about');

const app = express();

app.use(express.static('dist'));

app.use("/about", about);

app.listen(8080, () => console.log('Listening on port 8080!'));
