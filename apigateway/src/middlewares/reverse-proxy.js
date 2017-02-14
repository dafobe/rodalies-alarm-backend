import {logger as Logger} from '../utils/';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function(req, res, next){
	Logger.info('Executing: Reverse-proxy middleware');
	Logger.debug(req.body);
	Logger.info('Executed: Reverse-proxy middleware2');
	next();
}