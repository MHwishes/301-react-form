var express = require('express');
var router = express.Router();
var HomeworkDefinitionController = require('../../controllers/homework-definition-controller');

var paperDefinitionController = new HomeworkDefinitionController();

router.get('/homework', paperDefinitionController.getAll);
router.post('/homework', paperDefinitionController.create);
router.put('/homework/:id', paperDefinitionController.update);
router.delete('/homework/:id', paperDefinitionController.delete);
router.get('/homework/:id', paperDefinitionController.getOne);

module.exports = router;