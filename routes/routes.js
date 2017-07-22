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
});
app.delete('/categories/:name', function(req, res, next){
  //method override
  // console.log('success');
});
app.post('/categories/:name/products/', function(req, res, next){
  // console.log('success');
});
app.delete('/categories/:name/products/:id', function(req, res, next){
  // console.log('success');
});

// export
module.exports = app;
