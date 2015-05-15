var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoListSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TodoList', todoListSchema);