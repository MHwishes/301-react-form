var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeworkDefinition = new Schema({
    _id:String,
    title:String,
    stack: String
});

module.exports = mongoose.model('HomeworkDefinition', homeworkDefinition);