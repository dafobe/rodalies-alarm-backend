const Logger = require('../utils/logger');
const PassportService = require('../services/passport')
const config = require('../../config');

exports.validateAuth = function(req, res, next){
	Logger.info('executing validateAuth');
	let valid = false;
	//retrieve token
	//validate token
	if(!valid){
		res.status(401).send({message: 'Authoritation not valid'});
	}

	next();
}
exports.validateUser = function(req, res, next){
	//Validate against DB
	next();
}
exports.logIn = function(req, res, next){
	//Return User Token
	Logger.info('executing login');
}

exports.secret = function(req, res, next){
	Logger.info('retrieve signIn');
}

exports.token = function(req, res, next){
	//Retrieve user from DB and generate token
	res.json({
				success: true,
				message: 'return user token_',
			});
}

function getToken(user){

}