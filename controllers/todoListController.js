var todoList = require("../models/todoListModel.js");

// Index method
exports.index = function(req, res) {
  var query = todoList.find();

  query.sort({ createdOn: 'desc' })
       .limit(12)
       .exec(function(err, results){
          res.render('index', { title: 'Todo List', lists: results })
       });
}

// Create Method
exports.create = function(req, res) {
  var list = new todoList({
    title: req.body.title,
    description: req.body.description
  });

  list.save(function(err){
    if(err) {
      var errMsg = "Sorry, there was an error saving the todo list. " + err;
      res.render('new', { title: 'New Todo List (error)', message: errMsg });
    } else {
      console.log('Standup meeting note was saved.')
      //rediect to home page...
      res.redirect(301, '/');
    }
  });
};