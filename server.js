const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const port = process.env.port || 5000;

app.use('/', routes());
app.listen(port);

console.log(`Listening on port ${port}`);
