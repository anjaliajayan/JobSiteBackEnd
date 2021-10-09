const profileController = require('../controllers/profile.controller');
const express = require('express');
const router = express.Router();

router.post('/save', profileController.profile);
module.exports = router;