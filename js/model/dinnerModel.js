//DinnerModel Object constructor
var DinnerModel = function() {
	/*
	Keys:
	other: dvxveCJB1QugC806d29k1cE6x23Nt64O
	FB: dvxltQK4R4bLekoy63EflsMu6R0q44ze
	Ellinor: dvxy2iVl2OIUF0Hx3rKp1t0t3GfA6v9Q
	*/

	this.numberOfGuests = 3;
	this.menu = [];
	this.observers = [];
	var keys = ['dvxveCJB1QugC806d29k1cE6x23Nt64O',
				'dvxltQK4R4bLekoy63EflsMu6R0q44ze',
				'dvxy2iVl2OIUF0Hx3rKp1t0t3GfA6v9Q'];
	this.key = keys[2];

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
		var apiKey = this.key;
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
						}
					} else {
						this.notifyObservers("dishAlreadyInMenu");
						return;
					}
				}
				this.menu.push(data);
				this.notifyObservers("menuDishAdded");
			},
			error: function(jqXHR,textStatus,errorThrown) {
				this.notifyObservers("addDishError")
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
		var apiKey = this.key;
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=4&any_kw="+type+"+"+filter+"&api_key="+apiKey;
		console.log("getAllDishes url: "+url);

		//Adds description to the dishes
		//Notifies observers with the dish which had a description added
		var addDescription = function(dishes,model) {
			var recipeID = '';
			for(var i = 0; i < dishes.length; i++)  {
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
							dishes[i].Description = data.Description;
							model.notifyObservers(dishes[i]);
						},
						error: function(jqXHR,textStatus,errorThrown) {
							this.notifyObservers("getDishesError")
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
				if(data.Results.length === 0) {
					this.notifyObservers("noDishesFound");
				}
				else {
					addDescription(dishes,this);
				}
			},
			error: function(jqXHR,textStatus,errorThrown) {
				this.notifyObservers("getDishesError")
			}
		});
	}

	//Function that returns a dish of specific ID
	this.getDish = function (id) {
		var apiKey = this.key;
		var url = "http://api.bigoven.com/recipe/"+id+"?api_key="+apiKey;
		console.log("getDish url: "+url);
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			context: this, //this == dinnerModel
			url: url,
			success: function (data) {
				this.notifyObservers(data);
			},
			error: function(jqXHR,textStatus,errorThrown) {
				this.notifyObservers("getDishError")
			}
		});
	}

}
