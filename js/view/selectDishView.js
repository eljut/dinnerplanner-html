//SelectDishView Object constructor
var SelectDishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.container = container;

	//Add this view as an observer of model
	model.addObserver(this);

	this.showView = function() {
		console.log("---Showing selectDishView!");
		this.container.addClass("col-sm-9 no-side-padding");
		this.container.html(
			'<div id="select-dish-head">'+
				'<h3>SELECT DISH</h3>'+
				'<hr>'+
				'<input id="search-bar" type="search" placeholder="Enter key words">'+
				'<button id="search-button">Search</button>'+
				'<select id="dish-type">'+
					'<option value="starter">Starter</option>'+
					'<option value="main dish">Main</option>'+
					'<option value="dessert">Dessert</option>'+
				'</select>'+
			'</div>'+
			'<div id="dishes"></div>'
			);

		//Select dish
		this.dishes = container.find("#dishes");
		this.dishType = container.find("#dish-type");
		var allDishes = model.getAllDishes(this.dishType.val());

		for ( var i = 0; i < allDishes.length; i++ ) {
			this.dishes.append(
				'<div class="dish" data-dish-id="'+allDishes[i].id+'">'+
					'<div class="dish-head">'+
						'<img src="images/'+allDishes[i].image+'" alt="'+allDishes[i].name+'">'+
						'<span class="dish-name">'+allDishes[i].name+'</span>'+
					'</div>'+
					'<div class="dish-descr">'+allDishes[i].description+'</div>'+
				'</div>'
				);
		}
	}

	this.hideView = function() {
		console.log("---Hiding selectDishView!");
		this.container.removeClass("col-sm-9 no-side-padding");
		container.empty();
	}

	this.update = function(obj) {

	}
	
}
 
