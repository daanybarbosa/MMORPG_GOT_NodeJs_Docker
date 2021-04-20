var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
const mongoose = require('mongoose');

/* importar Datadog-agent 
const tracer = require('dd-trace').init({
	env: 'dev', service: 'node', hostname: '172.17.0.1', port: 8126
}); 
*/

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* configurar o middleware express-validator */
app.use(expressValidator());

/* configura o middleware express-session */
app.use(expressSession({
	secret: 'hakjehrgkjahjer',
	resave: false,
	saveUninitialized: false
}));

/* Adicionando o arquivo de rota no endpoint usuarios */
const usuarios = require('./routes/cadastro');

app.use('/api/cadastro', cadastro);

/* configura o banco de dados MongoDB */
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

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;