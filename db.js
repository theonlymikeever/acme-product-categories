var Categories = {
  "Foo Category": [
    {
      "name": "foo 1",
      "id": 1
    },
    {
      "name": "foo 2",
      "id": 2
    },
    {
      "name": "xyz",
      "id": 3
    }
  ],
  "Bar Category": [
    {
      "name": "bar 1",
      "id": 1
    },
    {
      "name": "bar 2",
      "id": 2
    }
  ],
  "abc": []
};

module.exports = {
  getCategoryNames: function(){
    return Object.keys(Categories);
  },
  getProductsByCategory: function(category, id){
    return Categories[category].filter(function(product){
      return product.id === id;
    })[0];
  },
  createProduct: function(product, category){
    //need to figue out error handling
    var newProduct = {
      "name": product,
      "id": Math.round(1000*Math.random())
    };
    Categories[category].push(newProduct);
  },
  deleteProduct: function(id, category){
    Categories[category] = Categories[category].filter(function(product){
      return product.id !== id;
    });
  },
  createCategory: function(category){
    //need to figue out error handling
    Categories[category] = [];
  },
  deleteCategory: function(category){
    delete Categories[category];
  }
};
