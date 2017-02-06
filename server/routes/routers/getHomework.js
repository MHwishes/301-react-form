var express = require('express');
var router = express.Router();
var HomeworkDefinitionController = require('../../controllers/homework-definition-controller');

var paperDefinitionController = new HomeworkDefinitionController();

router.get('/homework', paperDefinitionController.getHomeworkList);
router.post('/homework/:id', paperDefinitionController.saveHomeworkDefinition);

module.exports = router;