const assert = require('assert'),
      ToDo = require('../../db/models/ToDoItem');

describe('Creating Items to our db', () => {
  it('add todo to db', (done) => {
    const item = new ToDo({ 
      item: 'Entered Successfully!',
      obj: {
        hello: 'world'
      } 
    });

    item.save()
      .then(() => {
        assert(!item.isNew);
        done();
      });
  });
});