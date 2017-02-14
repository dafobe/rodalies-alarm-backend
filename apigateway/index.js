/*imports*/
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {logger as Logger, loggerStream} from './src/utils';
import {reverseProxy} from './src/middlewares';
import config from  './src/config';

/*Setup App*/
Logger.info('setup App');

const app = express();

/*Setup Server*/
app.use(morgan("default", loggerStream));
app.use(reverseProxy);
app.use(function(req,res) {
    res.json('Hello there !');
});

mongoose.connect(`mongodb://${config.db.host}:{$config.db.port}/apigateway`);

app.set('port', process.env.PORT || config.server.port);
/*Run Server*/
let server = app.listen(app.get('port'), () => Logger.info('Server listening on port ' + server.address().port));