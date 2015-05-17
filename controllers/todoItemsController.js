var TodoList = require("../models/todoListModel");
var TodoItem = require("../models/todoItemModel");

// Create Method
exports.create = function(req, res) {
  TodoList.findById(req.params.listId, function(err, list){
    if (err) {
      res.status(500)
      res.render('error', { error: err });
    } else {
      var item = new TodoItem({
        content: req.body.content
      });
      item.save(function(err){
        if(err) {
          res.status(500).send(err);
        } else {
          list.items.push(item)
          list.save()
          res.render('show', { title: list.title, list: list })
        }
      });
    }
  })
}