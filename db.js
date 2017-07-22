var Categories = {
  "Foo Category": [{
    id: 1,
    name: 'Foo',
  },
  {
    id: 2,
    name: 'Foo 2',
  }],
  "Bar Category": [{
    id: 1,
    name: 'Bar',
  },
  {
    id: 2,
    name: 'Bar 2',
  }],
  "Bazz Category": [{
    id: 1,
    name: 'Bazz',
  },
  {
    id: 2,
    name: 'Bazz 2',
  }]
};

module.exports = {
  getCategoryNames: function(){
    return Categories;
  },
  getProductsByCategory: function(id){
    return Categories.filter(function(product){
      return this.product.id === id;
    });
  },
  createProduct: function(){},
  deleteProduct: function(){},
  createCategory: function(){},
  deleteCategory: function(){}
}
