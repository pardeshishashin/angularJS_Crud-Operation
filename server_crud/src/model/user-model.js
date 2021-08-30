var mongoose = require('mongoose');

var USER =mongoose.model('User', mongoose.Schema({
    name :  {
        type:String , 
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date_visited:{
        type: Date,
        required: true
    }
}));
module.exports = USER;