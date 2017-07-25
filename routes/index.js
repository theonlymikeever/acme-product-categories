// requires
var db = require('../db');
var router = require('express').Router();

// routers
router.get('/:name/products', (req, res, next)=>{
  const catName = req.params.name;
  const products = db.getProductsByCategory(catName);
  res.render('products', { cats: db.getCategoryNames(), catName: catName, products: products, nav: catName });
});

router.post('/', function(req, res, next){
  // console.log('creating cat ');
  db.createCategory(req.body.name);
  res.redirect('/');
});

router.delete('/:name', function(req, res, next){
  // console.log('deleting cat!')
  db.deleteCategory(req.params.name);
  res.redirect('/');
});

router.post('/:name/products', function(req, res, next){
  db.createProduct(req.body.name, req.params.name);
  //'back' redirects back to the referrer
  res.redirect('back');
});

router.delete('/:name/products/:id', function(req, res, next){
  db.deleteProduct(req.params.id * 1, req.params.name);
  res.redirect('back');
});

// export
module.exports = router;
