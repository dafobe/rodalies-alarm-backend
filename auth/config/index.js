const configDefault = require('./default');
const configDev = require('./development');
const configProd = require('./production');

let config = {};
const env = process.env.ENVIRONMENT || 'development';

switch(env){
	case 'production':  config = Object.assign(config, configDefault, configProd);
						break;

	case 'development': 
	default: 			config = Object.assign(config, configDefault, configDev);
						break;
}

module.exports = config;