const mongoose = require('mongoose');
const { Schema } = mongoose;

const MockEntrySchema = new Schema({
  data: {
    type: Object,
    required: true
  }
});

const MockEntry = mongoose.model('mock_entries', MockEntrySchema);

module.exports = MockEntry;