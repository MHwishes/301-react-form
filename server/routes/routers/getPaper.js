var express = require('express');
var router = express.Router();
var PaperDefinitionController = require('../../controllers/paper-definition-controller');

var paperDefinitionController = new PaperDefinitionController();

router.get('/papers/:id', paperDefinitionController.getPaperDefinition);
router.post('/papers/:id', paperDefinitionController.savePaperDefinition);
router.put('/papers/:id', paperDefinitionController.updatePaperDefinition);

module.exports = router;