function login(req, res, next) {
// Retrieve username and password from req
// If User doesn't exists in DB then response with error
// If DB error then propagate Error
// Check password
// If all Ok create user Token
	next();
}

exports.login = login;