var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoListSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  items: [{ type: Schema.Types.ObjectId, ref: 'TodoItem' }],
  createdOn: { type: Date, default: Date.now }
});

var todoItemSchema = new Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now }
});


var todoList = mongoose.model('TodoList', todoListSchema);
var todoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = {
    TodoList: todoList,
    TodoItem: todoItem
};
