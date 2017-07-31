const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.'
}));

app.listen(port, () => {
  console.log('Server is up on port');
});

module.exports = app;
