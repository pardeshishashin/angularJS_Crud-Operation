const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/crud_operation', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected Database...");
}).catch(err => {
    console.log(err);
})

module.exports = {mongoose};