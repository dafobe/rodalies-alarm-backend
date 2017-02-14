import {default as configDefault}  from './default';
import {default as configDev}  from './development';
import {default as configProd}  from './production';

let conf = {};
const env = process.env.ENVIRONMENT || 'development';

switch(env){
	case 'production':  conf = Object.assign(conf, configDefault, configProd);
						break;

	case 'development': 
	default: 			conf = Object.assign(conf, configDefault, configDev);
						break;
}

export default conf