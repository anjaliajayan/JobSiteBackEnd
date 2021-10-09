const express = require('express');
const adminController = require('../controllers/admin.controller');


const router = express.Router();

router.post("/savejob",adminController.saveJob);
router.get("/getAlljobs",adminController.getjobs);

module.exports = router;
