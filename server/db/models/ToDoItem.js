const mongoose = require('mongoose');
const { Schema } = mongoose;

const ToDoSchema = new Schema({
  item: {
    type: String,
    required: true
  }
});

const ToDo = mongoose.model('todo-item', ToDoSchema);

module.exports = ToDo;