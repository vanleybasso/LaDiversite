const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const md5 = require('md5');
const { json } = require('express/lib/response');
const fs = require('fs');
const Bebida = require('../models/bebida');
const Sequelize = require('sequelize');






const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'inter14',
  port: 3306,
  database: 'usuarios_ladiversite',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao servidor MySQL:', err);
    return;
  }
  console.log('Conexão com o servidor MySQL estabelecida com sucesso!');
});



router.post('/registro', function(req, res, next) {
  const matricula = req.body.matricula;
  const senha = req.body.senha;
  const confirmarSenha = req.body['confirmar-senha'];

  if (senha !== confirmarSenha) {
    res.render('registro', { title: 'Registro', errorMessage: 'As senhas não coincidem', successMessage: '' });
    return;
  }

  const senhaMD5 = md5(senha);

  const insertQuery = `INSERT INTO usuarios_ladiversite (matricula, senha_md5) VALUES (?, ?)`;
  const values = [matricula, senhaMD5];

  connection.query(insertQuery, values, function(error, results, fields) {
    if (error) {
      console.error(error);
      res.render('registro', { title: 'Registro', errorMessage: 'Erro ao cadastrar', successMessage: '' });
      return;
    }

    res.redirect('/login');

    res.render('registro', { title: 'Registro', errorMessage: '', successMessage: 'Cadastro realizado com sucesso' });
  });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registro', errorMessage: '', successMessage: '' });
});

router.post('/login', function(req, res, next) {
  const matricula = req.body.matricula;
  const senha = req.body.senha;
  const senhaMD5 = md5(senha);

  const query = `SELECT * FROM usuarios_ladiversite WHERE matricula = ? AND senha_md5 = ?`;
  const values = [matricula, senhaMD5];

  connection.query(query, values, function(error, results, fields) {
    if (error) {
      console.error(error);
      res.render('login', { title: 'Login', errorMessage: 'Erro ao realizar o login', successMessage: '', isLoggedIn: false });
      return;
    }

    if (results.length === 1) {
      
      res.redirect('/');
    } else {
      res.render('login', { title: 'Login', errorMessage: 'Dados incorretos, tente novamente', successMessage: '', isLoggedIn: false });
    }
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Área de Usuário', successMessage: 'Você está logado', errorMessage: '', isLoggedIn: true });

});















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

router.get('/cadastrar_bebida', function(req, res, next) {
  res.render('cadastrar_bebida', { title: 'Cadastrar Bebida' });
});


router.get('/bebidas', async function(req, res, next) {
  var bebidas =  await Bebida.findAll();
  res.render('bebidas', { title: 'Bebidas', bebidasJson: bebidas });
});

router.get('/edit/:id', async function(req,res){
  var bebida = await Bebida.findByPk(req.params.id);
  if(bebida == null) {
    res.render("fail_find");
    
  } else {
  res.render('cadastrar_bebida2', {title: 'Editar Produto', bebida: bebida});
  }
});


router.post('/alterar', async function(req, res, next){
  var bebida = await Bebida.findByPk(req.body.id);
  if(bebida == null) {
    res.render("fail_find");
  } else {
    bebida = {
      nome: req.body.nome,
      preco: req.body.preco,
      categoria: req.body.categoria
      
      
};

await Bebida.update(bebida,{where:{id: req.body.id}});
res.redirect('/bebidas');
}

});

router.get('/delete/:id', async function(req,res){
  var bebida = await Bebida.findByPk(req.params.id);
  if(bebida == null) {
    res.render("fail_find");
    
  } else {
    await Bebida.destroy({where:{id: req.params.id}});
    res.redirect('/bebidas')

  }
});

router.post('/formulario', async function(req, res, next) {
  
  var bebida = {
      nome: req.body.nome,
      preco: req.body.preco,
      categoria: req.body.categoria
      
    };
  
    const result =  await Bebida.create(bebida);
    if (result == null){
      res.render("create_fail");
    } else {
      res.redirect('/bebidas');
    }
  });




module.exports = router;
