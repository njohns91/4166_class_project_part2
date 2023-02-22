const express = require('express');
const router = express.Router();

//GET /events: send all events to the user
router.get('/', (req, res) => {
    res.send('Send all events');
});

//GET /events/new: send html form for creating a new event
router.get('/new', (req, res) => {
    res.send('Send the new form');
});

//POST /events: create a new event
router.post('/', (req, res) => {
    res.send('created a new event');
});

//GET /events/:id: send details of evetn identified by id
router.get('/:id', (req, res) => {
    res.send('Send event with id ' + req.params.id);
});

//GET /events/:id/edit: send html form for editing an existing event
router.get('/:id/edit', (req, res) => {
    res.send('Send edit form');
});

//PUT /events/:id: update the story identified by id
router.post('/:id', (req, res) => {
    res.send('Update event with id ' + req.params.id);
});

//DELETE /events/:id, delete the story identified by id
router.delete('/:id', (req, res) => {
    res.send('Delete event with id ' + req.params.id);
});


module.exports = router;