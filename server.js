const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join('public/views')));

// Require our routes into the application.

require('./server/routes')(app);
app.get('/api/*', (req, res) => res.status(200).send({
}));

app.listen(port, () => {
  console.log(`Server is up. on port ${port}`);
});

module.exports = app;
