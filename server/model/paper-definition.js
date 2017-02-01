var mongoose = require('mongoose');

var paperDefinitionSchema = mongoose.Schema({
    paperId: String,
    name: String,
    isDistribution: Boolean,
    description: String,
    makerId: Number,
    createTime: Number,
    updateTime: String,
    isDeleted: Boolean,
    sections: Array
});

module.exports = mongoose.model('PaperDefinition', paperDefinitionSchema);
