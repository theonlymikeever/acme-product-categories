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
      "name": "foo 3",
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
  "abc": [
    {
      "name": "abc 1",
      "id": 1
    }
  ]
};

module.exports = {
  getCategoryNames: function(){
    return Object.keys(Categories);
  },
  getProductsByCategory: function(category){
    if(! Categories[category]) throw "Invalid Category";
    return Categories[category].map(function(product){
      return product;
    });
  },
  createProduct: function(product, category){
    //need to figue out error handling for duplicates
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
    //need to figue out error handling for duplicates
    Categories[category] = [];
  },
  deleteCategory: function(category){
    delete Categories[category];
  }
};
