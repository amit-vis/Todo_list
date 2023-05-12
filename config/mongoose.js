// here we have call the mongoose to connect the database.
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/TODO_lib');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

db.once('open', function(){
    console.log('db is connecting successfully');
})