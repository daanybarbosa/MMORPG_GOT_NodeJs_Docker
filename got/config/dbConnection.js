const mongoose = require('mongoose');

// Conectando ao MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/mmorpg_got_docker',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Conectado'))
  .catch(err => console.log(err));


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