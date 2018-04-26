const express = require('express'),
      mongoose = require('mongoose'),
      router = express.Router();

const MockEntry = require('../db/models/MockData');
const ToDos = require('../db/models/ToDos');

router.get('/', (req, res, next) => {
  res.send('API Routes');
});

router.get('/fetch', (req, res, send) => {
  ToDos.find()
    .then(todos => {
      res.status(200).send(todos);
    })
    .catch(err => {
      res.send('Error!', err);
    });
});

router.get('/mock-data', (req, res, send) => {
  MockEntry.find()
    .then(mongoRes => {
      res.send(mongoRes);
    })
    .catch(err => {
      res.send('Error!', err);
    });
});

module.exports = router;