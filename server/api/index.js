const express = require('express'),
      mongoose = require('mongoose'),
      router = express.Router();

const MockEntry = require('../db/models/MockData');
const ToDo = require('../db/models/ToDos');

router.get('/', (req, res, next) => {
  res.send('API Routes');
});

router.get('/fetch', (req, res, send) => {
  ToDo.find()
    .then(todos => {
      res.status(200).send(todos);
    })
    .catch(err => {
      res.send('Error!', err);
    });
});

router.post('/create', (req, res, send) => {
  const newItem = new ToDo({
    item: req.body.todo
  });
  
  newItem.save()
    .then(item => {
      res.send(item);
    })
});

router.route('/delete')
  .delete(function(req, res, next) {
    //ToDo.findByIdAndRemove({ _id: req.body.todo })
    console.log(req.body);
    res.send(req.body);
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