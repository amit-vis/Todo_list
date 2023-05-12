// here we have called all the require library or module here

const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const port = 5000;
const db = require('./config/mongoose');
const Todo = require('./models/todo')

// here we have called assets folder
app.use(express.static('assets'));

// here we have called our middleware
app.use(express.urlencoded());

// here we have set our view and ejs file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// here we have route/setup our home page.
app.get('/', async function (req, res) {
    try {
        const todo = await Todo.find({});
        if (todo) {
            return res.render('home', {
                title: 'TODO List',
                todo_list: todo
            })
        }

    } catch (err) {
        console.log('error', err);

    }
});

// here is the function to create a todo list
app.post('/create-todo', async function (req, res) {
    try {
        const todo_li = await Todo.create({
            description: req.body.description,
            select: req.body.select,
            date: req.body.date
        });
        if (todo_li) {
            console.log('*******************', todo_li);
            return res.redirect('back');
        }
    } catch (err) {
        console.log('error', err);
    }
});

// here is the function to delete the todo list
app.post('/delete-todo', async function(req, res){
    const deleteId = req.body.delete;
    console.log(deleteId)
    try {
        await Todo.deleteMany({_id: {$in: deleteId}});
        res.redirect('/');
        
    } catch (error) {
        console.log('Error', error)
        
    }
})

// here we have run our server on port.
app.listen(port, function (err) {
    if (err) {
        console.log(`server is not reunning on port ${err}`);
        return
    }
    console.log(`server in running on ${port}`)
});