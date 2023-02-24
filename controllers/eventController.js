const model = require('../models/event');

exports.index = (req, res) => {
    let events = model.find();
    res.render('./event/index', { 
        events: model.find(),
        hay: model.findByCategory("hay"),
        maze: model.findByCategory("maze"),
        carving: model.findByCategory("carving"),
        haunted: model.findByCategory("haunted"),
        other: model.findByCategory("other"),
    });
};

exports.new = (req, res) => {
    res.render('./event/new');
};

exports.create = (req, res) => {
    //res.send('Created a new story');
    let event = req.body;
    model.save(event);
    res.redirect('/events');
};

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

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let events = model.findById(id);
    if(events){
        res.render('./event/edit', {events});
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next)=>{
    let events = req.body;
    let id = req.params.id;
    if (model.updateById(id, events)) {
        res.redirect('/events/' +id);
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)) {
        res.redirect('/events');
    } else {
    let err = new Error('Cannot find a event with id ' + id);
    err.status = 404;
    next(err);
    }
};
