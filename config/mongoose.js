// here we have call the mongoose to connect the database.
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://amit200698:g2UpuxXvgsVPvBwy@cluster0.ajgkki6.mongodb.net/todo-list');
mongoose.connect('mongodb+srv://admin:TOQCVCNz9bfa9BsG@cluster0.at7i2.mongodb.net/todo_devlopment');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

db.once('open', function(){
    console.log('db is connecting successfully');
})