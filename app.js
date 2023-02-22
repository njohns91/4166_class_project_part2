//requre modules
const express = require('express');
const morgan = require('morgan');
const eventRoutes = require('./routes/eventRoutes');

//create application
const app = express();

//configure application
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

//set up routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.use('/events', eventRoutes);

//start the server
app.listen(port, host, () =>{
    console.log('Server is runnint on port', port);
});