var TodoList = require("../models/todoListModel");

// Index method
exports.index = function(req, res) {
  var query = TodoList.find();

  query.sort({ createdOn: 'desc' })
       .limit(12)
       .exec(function(err, results){
          res.send(results)
       });
}

// Show Method
exports.show = function(req, res) {
  TodoList.findById(req.params.listId).populate('items').exec(function(err, list){
    if (err) {
      res.status(500).send({ error: err });
    } else if (list) {
      res.status(200).send(list);
    } else {
      res.status(404).send("Todo List not found.");
    }
  });
}

// Create Method
exports.create = function(req, res) {
  var list = new TodoList({
    title: req.body.title,
    description: req.body.description
  });

  list.save(function(err){
    if(err) {
      var errMsg = "Sorry, there was an error saving the todo list. " + err;
      res.render('new', { title: 'New Todo List (error)', message: errMsg });
    } else {
      //rediect to home page...
      res.status(200).send(list);
    }
  });
};