var express = require('express');
var router = express.Router();
var todoListCtrl = require('../controllers/todoListController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  return todoListCtrl.index(req, res);
});

/* GET home page. */
router.post('/todo', function(req, res, next) {
  return todoListCtrl.create(req, res);
});

module.exports = router;
