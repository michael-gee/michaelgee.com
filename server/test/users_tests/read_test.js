const assert = require('assert'),
      ToDo = require('../../db/models/ToDoItem');

describe('Reading Items from db', () => {
  let item;

  beforeEach(done => {
    item = new ToDo({ item: "MERN" });
    item.save()
      .then(() => { done(); });
  });

  it('find and read all "MERN" items from db', done => {
    ToDo.find({ item: 'MERN' })
      .then((todo) => {
        assert(todo[0]._id.toString() === item._id.toString());
        done();
      });
  });

  it('find and read a todo item with a specific id', done => {
    ToDo.findOne({ _id: item._id })
      .then(todo => {
        assert(todo.item === 'MERN');
        done();
      });
  });
});