const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        category: 'hay',
        title: 'Red Tractor (Short Path)',
        startdate: '9/25/2023', 
        enddate:'11/15/2023',
        location: 'Main Field',
        image:'',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        category: 'hay',
        title: 'Blue Tractor (Medium path)',
        startdate: '9/25/2023', 
        enddate:'11/15/2023',
        location: 'Main Field',
        image:'',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        category: 'hay',
        title: 'Green Tractor (Long Path)',
        startdate: '9/25/2023', 
        enddate:'11/15/2023',
        location: 'Main Field',
        image:'',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '4',
        category: 'maze',
        title: 'Beginner (All Ages)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '5',
        category: 'maze',
        title: 'Intermediate (6 and up)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '6',
        category: 'maze',
        title: 'Expert (12 and up)',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '7',
        category: 'carving',
        title: 'All ages',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Pumpkin field',
        image: '',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '8',
        category: 'haunted',
        title: 'Haunted house',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Haunted House',
        image: '',
        author: 'Nick Johnson',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '9',
        category: 'other',
        title: 'Corn Husking',
        startdate: '9/25/2023', 
        enddate:'11/20/2023',
        location: 'Corn Field',
        image: '',
        author: 'Nick Johnson',
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
}

