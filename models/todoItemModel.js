var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoItemSchema = new Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TodoItem', todoItemSchema);