const Logger = require('../utils/logger');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
	Logger.debug('Test router main entry');

	res.json({
					success: true,
					message: 'successful test',
				});
	next();
});