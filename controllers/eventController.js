const model = require('../models/event');

exports.index = (req, res) => {
    let events = model.find();
    res.render('./event/index', { events });
};

exports.new = ('/new', (req, res) => {
    res.send('Send the new form');
});

exports.create = ('/', (req, res) => {
    res.send('created a new event');
});

exports.show = ('/:id', (req, res) => {
    res.send('Send event with id ' + req.params.id);
});

exports.edit = ('/:id/edit', (req, res) => {
    res.send('Send edit form');
});

exports.update = ('/:id', (req, res) => {
    res.send('Update event with id ' + req.params.id);
});

exports.delete = ('/:id', (req, res) => {
    res.send('Delete event with id ' + req.params.id);
});
