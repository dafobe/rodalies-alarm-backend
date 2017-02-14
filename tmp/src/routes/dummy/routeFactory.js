import * as dummyService from '../../services/dummyService'

let factory = {
	helloAll: function(req, res){
		let message = dummyService.getHelloAll();

		res.json('hello world to evereybody!');
	},
	helloOne: function (req, res){
		let name = req.params.name,
			message = '';

		message = dummyService.getHello(name);

		res.json(message);
	}
}

export default factory;