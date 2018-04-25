const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on('error', err => {
  console.log(`There was an error connecting to the database: ${err}`)
});
db.once('open', () => {
  console.log(
    `You have successfully connected to your mongo database: ${process.env.MONGO_URI}`
  )
});

module.exports = db;