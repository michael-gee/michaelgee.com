const assert = require('assert'),
      ToDo = require('../../db/models/ToDoItem');

describe('Removing Items from our db', () => {
  let item;
  
  beforeEach(done => {
    item = new ToDo({ item: 'MERN' });
    item.save()
      .then(() => { done(); });
  });

  // ****** MODEL INSTANCE METHODS  ******

  it('model instance remove', (done) => {
    // removing this very specific instance of the ToDo model instance. We stored the instance in a variable item so we can manipulate it directly without haveing to use the Model to search for it
    item.remove()
      .then(() => ToDo.findOne({ item: 'MERN' }))
      .then(item => {
        assert(item === null);
        done();
      });
  });


  // ****** MODEL CLASS METHODS  ******

  it('class method remove', (done) => {
    // remove a bunch of records at the same time with some given criteria
    ToDo.remove({ item: "MERN" })
      .then(() => ToDo.findOne({ item: 'MERN' }))
      .then(item => {
        assert(item === null);
        done();
      });
  });

  it('class method findOneAndRemove', (done) => {
    // Pass a certain criteria, and the first item found which matches that criteria will be removed

    // this method is good for finding items with unique values, like email for example. Emails must be unique so you know you will be targeting the exact item in your db when using it as the search criteria
    ToDo.findOneAndRemove({ item: "MERN" })
      .then(() => ToDo.findOne({ item: 'MERN' }))
      .then(item => {
        assert(item === null);
        done();
      });
  });

  it('model instance findByIdAndRemove', (done) => {
    // Finds the record by passing the ID and which will be removed
    ToDo.findByIdAndRemove({ _id: item._id })
      .then(() => ToDo.findOne({ _id: item._id }))
      .then(item => {
        assert(item === null);
        done();
      });
  });
});