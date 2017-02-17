const Logger = require('../utils/logger');
const express = require('express');
const passportService = require('../services/passport');
const passport = require('passport');
const router = express.Router();
const LoginController = require('../controllers/login');
const RegistrationController = require('../controllers/registration');

const requireLogin = passport.authenticate('local', { session: false });

router.get('/test', function(req, res, next){
	res.json({
				success: true,
				message: 'successful auth public test',
			});
});

router.get('/ping', function(req, res, next){
	res.json({
				success: true
			});
});

router.get('/login', requireLogin, LoginController.login);

router.post('/register', RegistrationController.register);

module.exports = router;