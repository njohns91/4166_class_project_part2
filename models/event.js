const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        category: 'hay',
        title: 'Green Tractor (Short Path)',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023', 
        enddate:'11/15/2023',
        location: 'Main Field',
        image:'',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        category: 'hay',
        title: 'Blue Tractor (Medium path)',
        skill: 'Intermediate (6 and up)',
        startdate: '9/25/2023', 
        enddate:'11/15/2023',
        location: 'Main Field',
        image:'',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        category: 'hay',
        title: 'Red Tractor (Long Path)',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023', 
        enddate:'11/15/2023',
        location: 'Main Field',
        image:'/images/red_tractor.jpeg',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '4',
        category: 'maze',
        title: 'Green Maze',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '5',
        category: 'maze',
        title: 'Blue Maze',
        skill: 'Intermediate (6 and up)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '6',
        category: 'maze',
        title: 'Red Maze',
        skill: 'Expert (12 and up)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '7',
        category: 'carving',
        title: 'Pumpkin Carving',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Pumpkin field',
        image: '',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '8',
        category: 'haunted',
        title: 'Haunted house',
        skill: 'Intermediate (6 and up)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Haunted House',
        image: '',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '9',
        category: 'other',
        title: 'Corn Husking',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        host: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
];

exports.find = () => events;

exports.findById = id => events.find(event => event.id === id);

exports.findByCategory = (category) => {
    return events.filter((event) => event.category === category);
};

exports.save = function (event){
    event.id = uuidv4();
    event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    events.push(event);
};

exports.updateById = function(id, newEvent) {
    let event = events.find(event=>event.id === id);
    if(event) {
    event.title = newEvent.title;
    event.content = newEvent.content;
    event.startdate = newEvent.startdate;
    event.enddate = newEvent.enddate;
    event.location = newEvent.location;
    console.log(newEvent);
    if(newEvent.image){
    event.image = newEvent.image;
    }
    return true;
    } else {
        return false;
    }
};

exports.deleteById = function(id) {
    let index = events.findIndex(event => event.id === id)
    if(index !== -1) {
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
};