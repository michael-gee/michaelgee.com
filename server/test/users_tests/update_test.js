const assert = require('assert'),
      ToDo = require('../../db/models/ToDoItem');

describe('Updating Items in our db', () => {
  let item;

  beforeEach(done => {
    item = new ToDo({ item: 'MERN' });
    item.save()
      .then(() => { done(); });
  });

  // DRY - if you have a lot of the same functionality in your code place it in a function to be reused
  function assertName(operation, done) {
    operation.then(() => {
        // passing an empty object to .find() wil return all instances inside of the db collection
        ToDo.find({})
          .then(users => {
            assert(users.length === 1);
            assert(users[0].item === 'MEAN');
            done();
          });
      });
  }

  // ****** MODEL INSTANCE METHODS  ******
  it('instance update using set & save', done => {
    // the .set() method will change the instance value but will not submit the changes to the db. the changes are only held in memory until acted upon
    item.set('item', 'MEAN');
    // to reflect the changes made to the model instance, we use the .save() method to push the changes made to our db.
    assertName(item.save(), done);
  });

  it('instance update using update', done => {
    assertName(item.update({ item: "MEAN" }), done);
  });


  // ****** MODEL CLASS METHODS  ******
  it('model class using update', done => {
    // finds and updates all todo items with the entered criteria (item: "MERN")
    assertName(
      ToDo.update({ item: "MERN" }, { item: "MEAN" }), 
      done
    );

  });

  it('model class using findOneAndUpdate', done => {
    // finds one record by the provided criteria and updates it
    assertName(
      ToDo.findOneAndUpdate({ item: "MERN" }, { item: "MEAN" }),
      done
    );
  });

  it('model class using findByIdAndUpdate', done => {
    assertName(
      ToDo.findOneAndUpdate(item._uid, { item: "MEAN" }),
      done
    );
  });

});