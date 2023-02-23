const { DateTime } = require("luxon");

const events = [
    {
        id: '1',
        title: 'Hay Bail Ride',
        content: 'Red Tractor (Short Path), '+ 'Blue Tractor (Medium path), '+'Green Tractor (Long Path)',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'Corn Maze',
        content: 'Beginner (All Ages)' + 'Intermediate (6 and up)'+ 'Expert (12 and up)',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => events;

exports.findById = id => events.find(event => event.id === id);
