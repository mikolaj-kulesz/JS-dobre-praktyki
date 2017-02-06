(function(argument) {
	'use strict';
	var myCart = new Cart();
	var newProduct = new Product({
		name: 'rower', 
		price: '20' ,
		color: 'yellow'
	});
	myCart.addProduct(newProduct); 
	console.log(newProduct.getColor() );

	console.log(myCart.isInCart(newProduct)); //true
	console.log(myCart.isInCart({})); //false

}());