import winston from 'winston';

const logger = new winston.Logger({
	transports: [
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
});

const stream = {
	write: function(message, encoding){
		logger.info(message);
	}
}

export {stream};
export default logger
