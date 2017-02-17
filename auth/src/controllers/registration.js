const User = require('../models/user');

function register(req, res, next) {
// Retrieve username and password from req
// Look for the user in DB
// If User already exists then response with error
// If DB error then propagate Error
// If all Ok create user Token, and return token
	next();
}

exports.register = register;