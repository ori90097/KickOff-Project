const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matches');
router.get('/', matchesController.getAllMatches);
router.get('/:id', matchesController.getMatchById);
router.post('/', matchesController.createMatch);
router.put('/:id', matchesController.updateMatch);
router.delete('/:id', matchesController.deleteMatch);

module.exports = router;
