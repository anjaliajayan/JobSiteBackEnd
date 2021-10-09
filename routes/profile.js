const profileController = require('../controllers/profile.controller');
const express = require('express');
const router = express.Router();

router.post('/add', profileController.profile);
router.post('/save', profileController.save)
module.exports = router;