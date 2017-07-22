// requires
var db = require('../db');
var app = require('express').Router();

// routers

app.get('/categories/:name/products', function(req, res, next){
  console.log('success');
    res.render( 'index', { showProdForm: true } );
});

app.post('/categories', function(req, res, next){
  // console.log('success');
  db.createCategory(req.body);
  res.redirect('/');
});

app.delete('/categories/:name', function(req, res, next){
  db.deleteCategory(req.params.name * 1);
  res.redirect('/');
});

app.post('/categories/:name/products/', function(req, res, next){
  // console.log('success');
});

app.delete('/categories/:name/products/:id', function(req, res, next){
  // console.log('success');
});

// export
module.exports = app;
