const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect('mongodb://localhost:27017/practice_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (err) => {
      console.warn('Error:', err);
    });
});

beforeEach(done => {
  mongoose.connection.collections["todo-items"].drop(() => {
    done();
  });
});