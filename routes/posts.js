const express = require('express');
const postsController = require('../controllers/post.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/save",postsController.save);

module.exports = router;
