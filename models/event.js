const { DateTime } = require("luxon");
const { v4: uuidv4 } = require('uuid');

const events = [
    {
        id: '1',
        category: 'hay',
        title: 'Green Tractor (Short Path)',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023 5:00pm',
        enddate: '9/25/2023 9:00pm',
        location: 'Main Field',
        image: '/images/green_tractor.png',
        host: 'Nick Johnson',
        duration:'~5 Minutes',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        category: 'hay',
        title: 'Blue Tractor (Medium path)',
        skill: 'Intermediate (6 and up)',
        startdate: '9/25/2023 5:00pm',
        enddate: '9/25/2023 9:00pm',
        location: 'Main Field',
        image: '/images/blue_tractor.png',
        host: 'Nick Johnson',
        duration:'~10 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        category: 'hay',
        title: 'Red Tractor (Long Path)',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023 5:00pm',
        enddate: '9/25/2023 9:00pm',
        location: 'Main Field',
        image: '/images/red_tractor.jpg',
        host: 'Nick Johnson',
        duration:'~15 minues',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '4',
        category: 'maze',
        title: 'Green Maze',
        skill: 'Easy (All ages)',
        startdate: '9/25/2023 3:00pm',
        enddate: '9/25/2023 9:00pm',
        location: 'Corn Field',
        image: '/images/corn_maze.jpg',
        host: 'Nick Johnson',
        duration: '~10 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '5',
        category: 'maze',
        title: 'Blue Maze',
        skill: 'Intermediate (6 and up)',
        startdate: '9/25/2023 3:00pm',
        enddate: '9/25/2023 9:00pm',
        location: 'Corn Field',
        image: '/images/corn_maze.jpg',
        host: 'Nick Johnson',
        duration: '~30 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '6',
        category: 'maze',
        title: 'Red Maze',
        skill: 'Expert (12 and up)',
        startdate: '9/25/2023 3:00pm',
        enddate: '9/25/2023 9:00pm',
        location: 'Corn Field',
        image: '/images/corn_maze.jpg',
        host: 'Nick Johnson',
        duration: '~45 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '7',
        category: 'carving',
        title: 'Pumpkin Carving',
        skill: 'Easy (All ages)',
        startdate: '9/28/2023 4:00pm',
        enddate: '9/28/2023 8:00pm',
        location: 'Pumpkin field',
        image: '/images/pumpkin.png',
        host: 'Nick Johnson',
        duration: '~60 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '8',
        category: 'carving',
        title: 'Wood Carving (Combs)',
        skill: 'Intermediate (6 and up)',
        startdate: '9/01/2023 4:00pm',
        enddate: '10/311/2023 8:00pm',
        location: 'Main Field',
        image: '/images/woodcomb.png',
        host: 'Nick Johnson',
        duration: '~60+ mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '9',
        category: 'carving',
        title: 'Wood Carving (Wands)',
        skill: 'Easy (All ages)',
        startdate: '9/18/2023 3:00pm',
        enddate: '9/20/2023 6:00pm',
        location: 'Corn Field',
        image: '/images/woodenwand.jpg',
        host: 'Nick Johnson',
        duration: '~30 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '10',
        category: 'haunted',
        title: 'Haunted House',
        skill: 'Easy (All ages)',
        startdate: '9/18/2023 6:00pm',
        enddate: '9/20/2023 9:00pm',
        location: 'Corn Field',
        image: '/images/haunted_house.png',
        host: 'Nick Johnson',
        duration: '~20 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '11',
        category: 'haunted',
        title: 'Haunted Forest',
        skill: 'Easy (All ages)',
        startdate: '9/18/2023 6:00pm',
        enddate: '9/20/2023 9:00pm',
        location: 'Corn Field',
        image: '/images/hauntedforest.png',
        host: 'Nick Johnson',
        duration: '~45 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '12',
        category: 'haunted',
        title: 'Haunted Cabin',
        skill: 'Easy (All ages)',
        startdate: '9/18/2023 6:00pm',
        enddate: '9/20/2023 9:00pm',
        location: 'Corn Field',
        image: '/images/hauntedcabin.png',
        host: 'Nick Johnson',
        duration: '~10 mins',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
];

exports.find = () => events;

exports.findById = id => events.find(event => event.id === id);

exports.findByCategory = (category) => {
    return events.filter((event) => event.category === category);
};

exports.save = function (event) {
    event.id = uuidv4();
    event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    events.push(event);
};

exports.updateById = function (id, newEvent) {
    let event = events.find(event => event.id === id);
    if (event) {
        event.title = newEvent.title;
        event.content = newEvent.content;
        event.startdate = newEvent.startdate;
        event.enddate = newEvent.enddate;
        event.location = newEvent.location;
        return true;
    } else {
        return false;
    }
};

exports.deleteById = function (id) {
    let index = events.findIndex(event => event.id === id)
    if (index !== -1) {
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
};