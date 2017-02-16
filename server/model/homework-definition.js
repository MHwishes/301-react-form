var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeworkDefinition = new Schema({
    title:String,
    stack: String
});

module.exports = mongoose.model('HomeworkDefinition', homeworkDefinition);