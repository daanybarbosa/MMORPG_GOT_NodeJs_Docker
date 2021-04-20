/*const mongoose = require('mongoose');

mongoose
  .connect('mongodb://db:27017/got-node-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });
*/
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
}
*/