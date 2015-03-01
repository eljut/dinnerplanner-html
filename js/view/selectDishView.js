//SelectDishView Object constructor
var SelectDishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.container = container;

	//Add this view as an observer of model
	model.addObserver(this);

	this.showView = function() {
		model.setCurrentState("selectDish");
		console.log("---Showing selectDishView!");
		this.container.addClass("col-sm-9 no-side-padding");
		this.container.html(
			'<div id="select-dish-head">'+
				'<h3>SELECT DISH</h3>'+
				'<hr>'+
				'<input id="search-bar" type="search" placeholder="Enter key words">'+
				'<button id="search-button">Search</button>'+
				'<select id="dish-type">'+
					'<option value="appetizer">Starter</option>'+
					'<option value="main dish">Main</option>'+
					'<option value="dessert">Dessert</option>'+
				'</select>'+
			'</div>'+
			'<div id="dishes"></div>'
			);

		//Get dishes
		this.dishType = container.find("#dish-type");
		model.getAllDishes(this.dishType.val());
	}

	this.hideView = function() {
		console.log("---Hiding selectDishView!");
		this.container.removeClass("col-sm-9 no-side-padding");
		container.empty();
	}

	this.update = function(obj) {
		if(typeof obj === 'object' && !obj.hasOwnProperty("Ingredients")) {
			this.dishes = container.find("#dishes");
			var dish = obj;
			this.dishes.append(
				'<div class="dish" data-dish-id="'+dish.RecipeID+'">'+
					'<div class="dish-head">'+
						'<img src="'+dish.ImageURL120+'" alt="'+dish.Title+'">'+
						'<span class="dish-name">'+dish.Title+'</span>'+
					'</div>'+
					'<div class="dish-descr">'+dish.Description+'</div>'+
				'</div>'
				);
		}
	}
	
}
 
