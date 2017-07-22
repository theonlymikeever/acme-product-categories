//requires
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var morgan = require('morgan');
var db = require('./db');

//app instance/config
var app = express();
nunjucks.configure('views', { noCache: true } );
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//middleware
app.use(morgan('tiny')); //logging
app.use(require('body-parser').urlencoded({
  extended: false
}));
app.use(require('method-override')('_method'));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

//index, categories route + error handling
app.get('/', function(req, res, next){
  res.render( 'index', { products: db.getProductsByCategory, showCatForm: true } );
});
app.use('/categories', require('./routes/routes'));
app.use(function(err, req, res, next){
  res.render('error', { error: err});
});

//port set-up
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
