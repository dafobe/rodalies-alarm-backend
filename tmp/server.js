import express from 'express';
import {dummyRoute} from './src/routes'

let app = express();

app.all('/*', (req, res, next) => {
	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// Set custom headers for CORS
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

/* =============== 
	Configure Routes
   =============== */

app.use('/', dummyRoute);

// If no route is matched by now, it must be a 404
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Start the server
app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), () => console.log('Express server listening on port ' + server.address().port));