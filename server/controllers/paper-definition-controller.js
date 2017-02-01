const PaperDefinition = require('../model/paper-definition');
const constant = require('../mixin/constant');

function PaperDefinitionController() {

}
PaperDefinitionController.prototype.savePaperDefinition = (req, res, next)=> {
    var paperId = req.params.id;
    var name = req.body.name;
    var description = req.body.description;
    var makerId = req.body.makerId;
    var createTime = parseInt(new Date().getTime()) /
        (constant.time.SECONDS_PER_MINUTE *
        constant.time.MINUTE_PER_HOUR *
        constant.time.HOURS_PER_DAY *
        constant.time.MILLISECOND_PER_SECONDS);
    var updateTime = createTime;
    var sections = req.body.sections;
    new PaperDefinition({
        paperId,
        name,
        isDistribution: false,
        description,
        makerId,
        createTime,
        updateTime,
        isDeleted: false,
        sections
    }).save((err, result)=> {
        if (err) {
            res.sendStatus(400);
        }
        res.status(201).send(result);
    });
};

PaperDefinitionController.prototype.getPaperDefinition = (req, res, next) => {
    var paperId = req.params.id;
    PaperDefinition.findOne({paperId: paperId}, (err, data) => {
        if (!err && data) {
            res.status(200).send(data);
        } else {
            res.status(400).end();
        }
    });
};

PaperDefinitionController.prototype.updatePaperDefinition = (req, res, next)=> {
    var paperId = req.params.id;
    var name = req.body.name;
    var description = req.body.description;
    var makerId = req.body.makerId;
    var createTime = parseInt(new Date().getTime()) /
        (constant.time.SECONDS_PER_MINUTE *
        constant.time.MINUTE_PER_HOUR *
        constant.time.HOURS_PER_DAY *
        constant.time.MILLISECOND_PER_SECONDS);
    var updateTime = createTime;
    var sections = req.body.sections;
    PaperDefinition.update({paperId: paperId}, ({$set: {updateTime, name, description, makerId, sections}}), (err)=> {
        if (err) {
            res.sendStatus(400);
        }
        res.sendStatus(201);
    });
};


module.exports = PaperDefinitionController;