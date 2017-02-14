
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const Logger = require('./src/utils/logger');
const routes = require('./src/routes');

const app = express();

/*Setup Server*/
app.use(morgan(`default`, Logger.stream));
app.use(function(req,res) {
    res.json(`Hello from Auth 2!`);
});

mongoose.connect(`mongodb://mongodb/${config.db.schema}`, null, function(){
	Logger.debug(`connected to db`)
});

app.set(`port`, config.server.port);
/*Run Server*/
let server = app.listen(app.get('port'), 
						function(){
							Logger.info('Server started on ' + server.address().port)
						});