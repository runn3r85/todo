var express = require('express');
var router = express.Router();
var todoListCtrl = require('../controllers/todoListController');
var todoItemsCtrl = require('../controllers/todoItemsController');

/* GET home page. */
router.get('/api/lists', function(req, res, next) {
  return todoListCtrl.index(req, res);
});

/* Post Todo list */
router.post('/api/lists', function(req, res, next) {
  return todoListCtrl.create(req, res);
});

// Get Todo list
router.get('/api/lists/:listId', function(req, res, next) {
  return todoListCtrl.show(req, res);
});

router.post('/todo/:listId/items/new', function(req, res, next) {
  return todoItemsCtrl.create(req, res);
});

module.exports = router;
