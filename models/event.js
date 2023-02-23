const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        title: 'Hay Bail Ride',
        starttime: '9/25/2023', 
        endtime:'11/15/2023',
        location: 'Main Field',
        content: 'Red Tractor (Short Path), '+ 'Blue Tractor (Medium path), '+'Green Tractor (Long Path)',
        image:'',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'Corn Maze',
        starttime: '9/25/2023', 
        endtime:'11/20/2023',
        location: 'Corn Field',
        content: 'Beginner (All Ages), ' + 'Intermediate (6 and up), '+ 'Expert (12 and up)',
        image: '',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => events;

exports.findById = id => events.find(event => event.id === id);

exports.save = function (event){
    event.id = uuidv4();
    event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    events.push(event);
}