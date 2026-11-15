const express = require('express');
const router = express.Router();
const pitchesController = require('../controllers/pitches');
router.get('/', pitchesController.getAllPitches);
router.get('/:id', pitchesController.getPitchById);
router.post('/', pitchesController.createPitch);
router.put('/:id', pitchesController.updatePitch);
router.delete('/:id', pitchesController.deletePitch);

module.exports = router;
