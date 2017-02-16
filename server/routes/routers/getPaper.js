var express = require('express');
var router = express.Router();
var PaperDefinitionController = require('../../controllers/paper-definition-controller');

var paperDefinitionController = new PaperDefinitionController();

router.get('/papers/:id', paperDefinitionController.getOne);
router.get('/papers', paperDefinitionController.getAll);
router.post('/papers', paperDefinitionController.create);
router.put('/papers/:id', paperDefinitionController.update);
router.delete('/papers/:id', paperDefinitionController.delete);

module.exports = router;