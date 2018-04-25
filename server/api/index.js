const express = require('express'),
      mongoose = require('mongoose'),
      router = express.Router();

const MockEntry = require('../db/models/MockData');

router.get('/', (req, res, next) => {
  res.send('API Routes');
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