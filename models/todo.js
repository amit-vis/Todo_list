const mongoose = require('mongoose');

// here is the code to define the Schema
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    select:{
        type: String,
        enum: ['school','work','cleaning','others','personal'],
        required: true
    },
    date:{
        type: Date,
        default: Date.now(),
        get: function(date){
            return date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
        }
    }
})

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;