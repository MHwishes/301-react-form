var express = require('express');
var router = express.Router();
var PaperDefinitionController = require('../../controllers/paper-definition-controller');

var paperDefinitionController = new PaperDefinitionController();

router.get('/papers/:id', paperDefinitionController.getPaperDefinition);
router.get('/papers', paperDefinitionController.getPaperDefinitions);
router.post('/papers/:id', paperDefinitionController.savePaperDefinition);
router.put('/papers/:id', paperDefinitionController.updatePaperDefinition);
router.delete('/papers/:id', paperDefinitionController.deletePaperDefinition);

module.exports = router;