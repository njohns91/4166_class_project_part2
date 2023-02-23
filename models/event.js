const { DateTime } = require("luxon");

const events = [
    {
        id: '1',
        title: 'Hay Bail Ride',
        content1: 'Red Tractor (Short Path)',
        content2: 'Blue Tractor (Medium path)',
        content3: 'Green Tractor (Long Path)',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'Corn Maze',
        content1: 'Beginner (All Ages)',
        content2: 'Intermediate (6 and up)',
        content3: 'Expert (12 and up)',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => events;

exports.findById = id => events.find(event => event.id === id);
