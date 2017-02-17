const Logger = require('../utils/logger');
const express = require('express');
const passportService = require('../services/passport');
const passport = require('passport');
const router = express.Router();
const AuthController = require('../controllers/auth')

const requireAuth = passport.authenticate('jwt', { session: false });

//Validate Auth token in all requests
//router.use(requireAuth);

router.get('/token', AuthController.token);

module.exports = router;