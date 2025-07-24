const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/:userId', todoController.getTodos);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo); 
router.delete('/:id', todoController.deleteTodo);


router.put('/:id', todoController.editTodo);

module.exports = router;