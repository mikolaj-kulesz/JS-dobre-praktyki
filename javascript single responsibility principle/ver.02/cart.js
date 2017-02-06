var Cart = function(){
	var self = {},
		products = [];

	self.addProduct = function(product){
		products.push(product);
		return product; 
	};

	self.isInCart = function(product){

		/*opt:3*/
		return products.indexOf(product) !== -1;

/*		
		opt:1
		isStatus = false;
		products.forEach( function(item){
			if ( product === item){ 
				isStatus = true;
			}
		});
		return isStatus;
*/

/*	
		opt:2	
		for (var i = 0; i < products.length; i++) {
			if( products[i] === product ){
				return true;
			}
		}
		return false;
*/

	};

	return self;
};