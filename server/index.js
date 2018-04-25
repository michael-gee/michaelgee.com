require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      routes = require('./api'),
      dbConnection = require('./db'),
      app = express(),
      port = process.env.PORT ? process.env.PORT : 5000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api', routes);

app.listen(port, () => {
  console.log('Express Server Listening on Port 5000!');
});
