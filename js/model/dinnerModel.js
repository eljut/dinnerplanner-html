//DinnerModel Object constructor
var DinnerModel = function() {
	/*
	Keys:
	other: dvxveCJB1QugC806d29k1cE6x23Nt64O
	FB: dvxltQK4R4bLekoy63EflsMu6R0q44ze
	*/
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	this.numberOfGuests = 3;
	this.menu = [];
	this.observers = [];
	this.currentState = '';

	this.setCurrentState = function(state) {
		this.currentState = state;
	}

	this.getCurrentState = function() {
		return this.currentState;
	}

	//Adds new observer to the array
	this.addObserver = function(observer) {
		this.observers.push(observer);
	}

	//Notifies all observers
	this.notifyObservers = function(obj) {
		for(obs in this.observers) {
			this.observers[obs].update(obj);
		}
	}

	//Sets the number of guests to num
	this.setNumberOfGuests = function(num) {
		if(num > 0) {
			this.numberOfGuests = num;
			this.notifyObservers("updateNumberOfGuests");
		}
	}

	//Returns number of guests
	this.getNumberOfGuests = function() {
		return parseInt(this.numberOfGuests);
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		for(key in this.menu) {
			if(this.menu[key].Category == type) {
				return this.menu[key];
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return this.menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredients = [];
		for(key in this.menu) {
			ingredients = ingredients.concat(this.menu[key].Ingredients);
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredients = this.getAllIngredients();
		var totalPrice = 0;
		for(key in ingredients){
			totalPrice += parseFloat(ingredients[key].MetricQuantity) * this.numberOfGuests;
		}
		return totalPrice;

	}

	//Returns the price of a dish (all the ingredients multiplied by number of guests).
	this.getDishPrice = function(dish) {
		var price = 0;
		for(key in dish.Ingredients) {
			price += parseFloat(dish.Ingredients[key].MetricQuantity) * this.numberOfGuests;
		}
		return price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var apiKey = "dvxltQK4R4bLekoy63EflsMu6R0q44ze";
		var url = "http://api.bigoven.com/recipe/"+id+"?api_key="+apiKey;
		console.log("url: "+url);
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			context: this, //this == dinnerModel
			url: url,
			success: function (data) {
				console.log(data);
				var dish = data;
				for(key in this.menu) {
					if(this.menu[key].RecipeID != dish.RecipeID) {
						if(this.menu[key].Category == dish.Category) {
							this.removeDishFromMenu(this.menu[key].RecipeID);
							//this.notifyObservers("menuDishReplaced");
						}
					} else {
						return;
					}
				}
				this.menu.push(data);
				this.notifyObservers("menuDishAdded");
			}
		});	
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for(key in this.menu) {
			if(this.menu[key].RecipeID == id){
				var index = this.menu.indexOf(this.menu[key]);
				this.menu.splice(index,1);
				this.notifyObservers("menuDishRemoved");
			}
		}
	}

	//Removes all dishes from menu
	this.emptyMenu = function() {
		this.menu = [];
		this.notifyObservers("menuDishesRemoved");
	}

	//Function that notifies observers with all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
		filter = typeof filter !== 'undefined' ? filter : '';
		var apiKey = "dvxltQK4R4bLekoy63EflsMu6R0q44ze";
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=3&any_kw="+type+"+"+filter+"&api_key="+apiKey;
		console.log("Filter is:"+filter);
		console.log("url is: "+url);

		//Adds description to the dishes
		//Notifies observers with the dish which had a description added
		var addDescription = function(dishes,model) {
			var recipeID = '';
			for(var i = 0; i < dishes.length; i++)  {
				console.log("outside: "+i);
				recipeID = dishes[i].RecipeID;
				url = "http://api.bigoven.com/recipe/"+recipeID+"?api_key="+apiKey;
				(function(i) {
					$.ajax({
						type: "GET",
						dataType: 'json',
						cache: false,
						context: model,
						url: url,
						success: function (data) {
							console.log("-----\ninside: "+i);
							dishes[i].Description = data.Description;
							model.notifyObservers(dishes[i]);
						}
					});
				})(i);
			}
		}

		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			context: this, //this == dinnerModel
			url: url,
			success: function (data) {
				var dishes = data.Results;
				addDescription(dishes,this);
			}
		});
	}

	//Function that returns a dish of specific ID
	this.getDish = function (id) {
		var apiKey = "dvxltQK4R4bLekoy63EflsMu6R0q44ze";
		var url = "http://api.bigoven.com/recipe/"+id+"?api_key="+apiKey;
		console.log("url: "+url);
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			context: this, //this == dinnerModel
			url: url,
			success: function (data) {
				console.log(data);
				this.notifyObservers(data);
			}
		});
	}

}
