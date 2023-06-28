const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const md5 = require('md5');
const { json } = require('express/lib/response');
const fs = require('fs');
const Bebida = require('../models/bebida');
const Sequelize = require('sequelize');


















/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/whisky', function(req, res, next) {
  res.render('categoria_whisky', { title: 'categoria_whisky' });
});

router.get('/licor', function(req, res, next) {
  res.render('categoria_licor', { title: 'categoria_licor' });
});

router.get('/vodka', function(req, res, next) {
  res.render('categoria_vodka', { title: 'categoria_vodka' });
});

router.get('/gin', function(req, res, next) {
  res.render('categoria_gins', { title: 'categoria_gins' });
});

router.get('/produto', function(req, res, next) {
  res.render('produto', { title: 'produto' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/tequila', function(req, res, next) {
  res.render('categoria_tequila', { title: 'categoria_tequila' });
});

router.get('/espumante', function(req, res, next) {
  res.render('categoria_espumante', { title: 'categoria_espumante' });
});

router.get('/pedidos', function(req, res, next) {
  res.render('pedidos', { title: 'pedidos' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'registro' });
});


router.get('/finalizacao', function(req, res, next) {
  res.render('finalizacao', { title: 'finalizacao' });
});

router.get('/pagamento', function(req, res, next) {
  res.render('pagamento', { title: 'pagamento' });
});




router.get('/bebidas', async function(req, res, next) {
  var bebidas = JSON.parse(fs.readFileSync("./database.json"));
  res.render('bebidas', { title: 'Bebidas', bebidasJson: bebidas});
});

router.get('/edit/:id', async function(req,res){
  var bebidas = JSON.parse(fs.readFileSync("./database.json"));
  var beb = bebidas.find((x) => x.id == req.params.id);
  res.render('cadastrar_bebida2', {title: 'Editar Produto', bebida: beb});
});


router.post('/alterar', function(req, res, next){
  var bebidas = JSON.parse(fs.readFileSync("./database.json"));
  const index = bebidas.findIndex((x) => x.id == req.body.id);
  bebidas[index] = {
    id: req.body.id,
    nome: req.body.nome,
    preco: req.body.preco,
    categoria: req.body.categoria
    
    
}
var bebidasAlterado = JSON.stringify(bebidas, null, 4);
fs.writeFileSync("./database.json", bebidasAlterado);
res.redirect('/bebidas');


});

router.get('/delete/:id', function(req,res){
  var bebidas = JSON.parse(fs.readFileSync("./database.json"));
  var ide = req.params.id;
  var toRemove = bebidas.findIndex((x) => x.id == ide);
  bebidas.splice(toRemove, 1);
  var toWrite = JSON.stringify(bebidas, null, 4);
  fs.writeFileSync("./database.json", toWrite);
  res.redirect('/bebidas');

});

router.post('/formulario', function(req, res, next) {
  var bebidas = JSON.parse(fs.readFileSync("./database.json"));



  var newId;

  if(bebidas) {
    if(bebidas.length == 0) newId = 1;
    else newId = bebidas[bebidas.length -1].id + 1;
  }

  
  var bebida = {
    id: newId,
    nome: req.body.nome,
    preco: req.body.preco,
    categoria: req.body.categoria
    
  };
  bebidas.push(bebida);
  var toFile = JSON.stringify(bebidas, null, 4);
  fs.writeFileSync("./database.json", toFile);


  
  res.redirect('/cadastrar_bebida');
});


  

module.exports = router;
