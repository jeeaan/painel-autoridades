const express = require('express');
const router = express.Router();
const buttonStateController = require('../controllers/buttonState');

router.get('/button-state/:botaoId', buttonStateController.getButtonState);
router.post('/button-state/:botaoId', buttonStateController.updateButtonState);

module.exports = router;