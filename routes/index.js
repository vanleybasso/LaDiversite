var express = require('express');
var router = express.Router();

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

module.exports = router;
