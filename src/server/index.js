const express = require('express');

const app = express();

app.use(express.static('dist'));

app.use("/api/", require('./routes/home'));
app.use("/api/about", require('./routes/about'));
app.use("/api/music", require('./routes/music'));
app.use("/api/posts", require('./routes/posts'));
app.use("/api/contact", require('./routes/contact'));

app.listen(8080, () => console.log('Listening on port 8080!'));
