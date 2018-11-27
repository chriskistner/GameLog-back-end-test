const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/igdb-controllers');

router.get('/games/:id', ctrl.getGame);

module.exports = router