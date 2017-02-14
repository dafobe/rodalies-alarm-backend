const config = {
	secret: 'secret', 
	db :{	
			host: 'mongodb', 
			port: '27017',
			schema: 'apigateway'
		},
	server:{
			port: '3000'
	}
}

export default config;