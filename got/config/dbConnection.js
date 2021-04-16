const mongoose = require('mongoose');

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://admin:12345' + process.env.MONGO_ATLAS_PW + '@got.1ytlj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

/* importar o mongodb 
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
		{}
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
}*/