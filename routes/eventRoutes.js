const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventController')

//GET /events: send all events to the user
router.get('/', controller.index);

//GET /events/new: send html form for creating a new event
router.get('/new', controller.new);

//POST /events: create a new event
router.post('/', controller.create)

//GET /events/:id: send details of evetn identified by id
router.get('/:id', controller.show);

//GET /events/:id/edit: send html form for editing an existing event
router.get('/:id/edit', controller.edit);

//PUT /events/:id: update the story identified by id
router.put('/:id', controller.update);

//DELETE /events/:id, delete the story identified by id
router.delete('/:id', controller.delete);


module.exports = router;