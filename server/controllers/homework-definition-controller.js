const HomeworkDefinition = require('../model/homework-definition');
const constant = require('../mixin/constant');

function homeworkDefinitionController() {

}
homeworkDefinitionController.prototype.saveHomeworkDefinition = (req, res, next)=> {
    var _id = req.params.id;
    var title = req.body.title;
    var stack = req.body.stack;

    new  HomeworkDefinition({
        _id,
        title,
        stack
    }).save((err, result)=> {
        if (err) {
            res.sendStatus(400);
        }
        res.status(201).send(result);
    });
};

homeworkDefinitionController.prototype.getHomeworkList = (res, req, next)=> {
    let pageCount = req.query.pageCount || 10;
    let page = req.query.page || 1;
    let skipCount = pageCount * (page - 1);

    HomeworkDefinition.find({isDeleted: false}).limit(Number(pageCount)).skip(skipCount).exec((err, data)=> {
        HomeworkDefinition.count({isDeleted: false}, (error, count) => {
            if (!err && !error && count && data) {
                var totalPage = Math.ceil(count / pageCount);
                res.send({total: totalPage, data: data});
            } else {
                res.sendStatus(404);
            }
        });
    });

};

module.exports = homeworkDefinitionController;