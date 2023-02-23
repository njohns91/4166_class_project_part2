const model = require('../models/event');

exports.index = (req, res) => {
    let events = model.find();
    res.render('./event/index', { events });
};

exports.new = ('/newEvent', (req, res) => {
    res.render('./event/newEvent');
});

exports.create = ('/', (req, res) => {
    res.send('created a new event');
});

exports.show = (req,res, next) => {
    let id = req.params.id;
    let events = model.findById(id);
    if(events) {
        res.render('./event/show', {events})
    }else {
        let err = new Error('Cannot find a story with id ' +id)
        err.status = 404;
        next(err);
    }
};

exports.edit = ('/:id/edit', (req, res) => {
    res.send('Send edit form');
});

exports.update = ('/:id', (req, res) => {
    res.send('Update event with id ' + req.params.id);
});

exports.delete = ('/:id', (req, res) => {
    res.send('Delete event with id ' + req.params.id);
});
