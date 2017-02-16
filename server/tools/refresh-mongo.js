const rawData = require('./raw-data');
const HomeworkDefinition = require('../model/homework-definition');
const PaperDefinition = require('../model/paper-definition');


const modelMap = {HomeworkDefinition, PaperDefinition};
// mongoose.connect('mongodb://localhost/exam');
var docs = Object.keys(rawData);
module.exports = function refresh() {

    Object.keys(rawData).forEach(v=> {
        modelMap[v].remove(()=> {
            modelMap[v].create(rawData[v], ()=> {
                docs = docs.filter(doc => doc !== v);
                if (docs.length === 0) {
                    // process.exit(0);
                }
            })
        })
    });
};