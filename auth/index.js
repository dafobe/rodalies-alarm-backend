
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

/*Setup Server*/
//app.use(morgan("default", loggerStream));
//app.use(reverseProxy);
app.use(function(req,res) {
    res.json('Hello from Auth2!');
});

//mongoose.connect(`mongodb://${config.db.host}:{$config.db.port}/apigateway`);

app.set('port', process.env.PORT || config.server.port);
/*Run Server*/
let server = app.listen(app.get('port'), 
						function(){
							console.log('Server started on ' + server.address().port)
						});