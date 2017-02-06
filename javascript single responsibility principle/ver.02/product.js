var Product = function(options){
	var self = {}, 
		options = options || {},
		name,
		price,
		color; 

	var init = function(){
		self.setColor(options.color); 
		self.setName(options.name); 
		self.setPrice(options.price); 
	}

	self.setName = function(nameToSet){
		name = nameToSet;
	};
  
	self.setPrice = function(priceToSet){
		price = priceToSet;
	};

	self.setInCart = function(){
		inCart = true;
	};

	self.setColor = function(colorToSet){
		color = colorToSet;
	};

	self.getColor = function(){
		return color;
	};

	init();

	return self;
};