const config = {
	secret: 'secret', 
	db :{	
			host: '0.0.0.0', 
			port: '27017',
			schema: 'auth'
		},
	server:{
			port: process.env.PORT || '3000'
	}
}

module.exports = config;