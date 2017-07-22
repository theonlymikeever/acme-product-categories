// requires
var db = require('../db');
var app = require('express').Router();

// routers

app.get('/:name/products', function(req, res, next){
  console.log('success');
   res.render('products', {categoryNames: db.getCategoryNames()});
});

app.post('/', function(req, res, next){
  db.createCategory(req.body.name);
  res.redirect('/');
});

app.delete('/categories/:name', function(req, res, next){
  db.deleteCategory(req.params.name);
  res.redirect('/');
});

app.post('/categories/:name/products/', function(req, res, next){
  // res.render('products', { token:token});
});

app.delete('/categories/:name/products/:id', function(req, res, next){
  // console.log('success');
});

// export
module.exports = app;
