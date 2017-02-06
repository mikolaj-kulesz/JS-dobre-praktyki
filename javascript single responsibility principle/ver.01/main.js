(function(argument) {
	'use strict';
	var self = {},
		name,
		price,
		inCart;


	var Product = function(name, price){
		var self = {};

		self.setName = function(nameToSet){
			name = nameToSet;
		};

		self.setPrice = function(priceToSet){
			price = priceToSet;
		};

		self.setInCart = function(){
			inCart = true;
		};

		return self;
	};

	var Cart = function(){
		var self = {},
			products = [];

		self.addProduct = function(name, price){
			var product = new Product(name, price);
			product.setInCart(true);
		
			products.push(product);
			console.log('Product name:', name);
		};

		return self;
	};

	var myCart = new Cart();
	myCart.addProduct('rower', '20');

}());