const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
	nome: { type: String, required: true },
	usuario: { type: String, required: true },
	senha: { type: String, required: true },
	casa: { type: String, required: true }
});


UsuariosDAO.prototype.inserirUsuario = function(usuario){
const novoUsuario = new Usuario({
	nome: req.body.nome,
	usuario: req.body.usuario,
	senha: req.body.senha,
	casa: req.body.casa
});

novoUsuario
	.save()
	.then(result => {
		res.json(result);
	})
	.catch(error => {
		res.status(500).json(error);
	});
}

UsuariosDAO.prototype.autenticar = function(usuario){
	Usuario.find()
	.then(usuarios => {
		res.json(usuarios);
	})
	.catch(error => res.status(500).json(error));
}

module.exports = mongoose.model('usuarios', 'usuarioSchema');

module.exports = function(){ 
	return UsuariosDAO;
}

/*
function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.insert(usuario);

			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find(usuario).toArray(function(err, result){

				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if(req.session.autorizado){
					res.redirect("jogo");
				} else {
					res.render("index", {validacao: {}});
				}

			});
			mongoclient.close();
		});
	});
}


module.exports = function(){
	return UsuariosDAO;
}*/